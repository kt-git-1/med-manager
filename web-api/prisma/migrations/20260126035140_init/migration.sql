-- CreateEnum
CREATE TYPE "ProfileRole" AS ENUM ('family');

-- CreateEnum
CREATE TYPE "DoseStatus" AS ENUM ('pending', 'taken', 'missed', 'skipped');

-- CreateEnum
CREATE TYPE "AdherenceAction" AS ENUM ('taken', 'skipped');

-- CreateEnum
CREATE TYPE "AdherenceSource" AS ENUM ('patient', 'family', 'system');

-- CreateEnum
CREATE TYPE "InventoryAdjustmentReason" AS ENUM ('missed', 'extra', 'restock', 'manual');

-- CreateTable
CREATE TABLE "profiles" (
    "id" UUID NOT NULL,
    "role" "ProfileRole" NOT NULL DEFAULT 'family',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "caregivers" (
    "id" UUID NOT NULL,
    "profile_id" UUID NOT NULL,
    "display_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "caregivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patients" (
    "id" UUID NOT NULL,
    "caregiver_id" UUID NOT NULL,
    "display_name" TEXT NOT NULL,
    "timezone" TEXT NOT NULL DEFAULT 'Asia/Tokyo',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link_codes" (
    "id" UUID NOT NULL,
    "caregiver_id" UUID NOT NULL,
    "patient_id" UUID,
    "code" CHAR(6) NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "used_at" TIMESTAMP(3),
    "revoked_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "link_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_sessions" (
    "id" UUID NOT NULL,
    "patient_id" UUID NOT NULL,
    "token_hash" TEXT NOT NULL,
    "issued_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "rotated_from_id" UUID,
    "revoked_at" TIMESTAMP(3),
    "last_seen_at" TIMESTAMP(3),

    CONSTRAINT "patient_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medications" (
    "id" UUID NOT NULL,
    "patient_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "dose_count_per_intake" INTEGER NOT NULL DEFAULT 1,
    "notes" TEXT,
    "start_date" DATE NOT NULL,
    "end_date" DATE,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" UUID NOT NULL,
    "medication_id" UUID NOT NULL,
    "times_per_day" INTEGER NOT NULL,
    "time_slots" TIME[],
    "start_date" DATE NOT NULL,
    "end_date" DATE,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dose_instances" (
    "id" UUID NOT NULL,
    "patient_id" UUID NOT NULL,
    "schedule_id" UUID NOT NULL,
    "medication_id" UUID NOT NULL,
    "scheduled_for" TIMESTAMP(3) NOT NULL,
    "status" "DoseStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dose_instances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adherence_logs" (
    "id" UUID NOT NULL,
    "dose_instance_id" UUID NOT NULL,
    "patient_id" UUID NOT NULL,
    "action" "AdherenceAction" NOT NULL,
    "taken_at" TIMESTAMP(3) NOT NULL,
    "source" "AdherenceSource" NOT NULL,
    "client_uuid" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "adherence_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory" (
    "id" UUID NOT NULL,
    "medication_id" UUID NOT NULL,
    "remaining_count" INTEGER NOT NULL,
    "warning_threshold_days" INTEGER NOT NULL DEFAULT 3,
    "last_adjusted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory_adjustments" (
    "id" UUID NOT NULL,
    "inventory_id" UUID NOT NULL,
    "delta" INTEGER NOT NULL,
    "reason" "InventoryAdjustmentReason" NOT NULL,
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inventory_adjustments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "caregivers_profile_id_key" ON "caregivers"("profile_id");

-- CreateIndex
CREATE INDEX "patients_caregiver_id_idx" ON "patients"("caregiver_id");

-- CreateIndex
CREATE INDEX "link_codes_expires_at_idx" ON "link_codes"("expires_at");

-- CreateIndex
CREATE INDEX "link_codes_caregiver_id_created_at_idx" ON "link_codes"("caregiver_id", "created_at" DESC);

-- CreateIndex
CREATE INDEX "patient_sessions_patient_id_expires_at_idx" ON "patient_sessions"("patient_id", "expires_at" DESC);

-- CreateIndex
CREATE INDEX "patient_sessions_revoked_at_idx" ON "patient_sessions"("revoked_at");

-- CreateIndex
CREATE UNIQUE INDEX "patient_sessions_token_hash_key" ON "patient_sessions"("token_hash");

-- CreateIndex
CREATE INDEX "medications_patient_id_is_active_idx" ON "medications"("patient_id", "is_active");

-- CreateIndex
CREATE INDEX "medications_patient_id_name_idx" ON "medications"("patient_id", "name");

-- CreateIndex
CREATE INDEX "schedules_medication_id_is_active_idx" ON "schedules"("medication_id", "is_active");

-- CreateIndex
CREATE INDEX "schedules_medication_id_start_date_idx" ON "schedules"("medication_id", "start_date");

-- CreateIndex
CREATE INDEX "dose_instances_patient_id_scheduled_for_idx" ON "dose_instances"("patient_id", "scheduled_for");

-- CreateIndex
CREATE INDEX "dose_instances_schedule_id_scheduled_for_idx" ON "dose_instances"("schedule_id", "scheduled_for");

-- CreateIndex
CREATE UNIQUE INDEX "dose_instances_patient_id_schedule_id_scheduled_for_key" ON "dose_instances"("patient_id", "schedule_id", "scheduled_for");

-- CreateIndex
CREATE INDEX "adherence_logs_patient_id_taken_at_idx" ON "adherence_logs"("patient_id", "taken_at" DESC);

-- CreateIndex
CREATE INDEX "adherence_logs_dose_instance_id_idx" ON "adherence_logs"("dose_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "adherence_logs_patient_id_client_uuid_key" ON "adherence_logs"("patient_id", "client_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_medication_id_key" ON "inventory"("medication_id");

-- CreateIndex
CREATE INDEX "inventory_adjustments_inventory_id_created_at_idx" ON "inventory_adjustments"("inventory_id", "created_at" DESC);

-- AddForeignKey
ALTER TABLE "caregivers" ADD CONSTRAINT "caregivers_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_caregiver_id_fkey" FOREIGN KEY ("caregiver_id") REFERENCES "caregivers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link_codes" ADD CONSTRAINT "link_codes_caregiver_id_fkey" FOREIGN KEY ("caregiver_id") REFERENCES "caregivers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link_codes" ADD CONSTRAINT "link_codes_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_sessions" ADD CONSTRAINT "patient_sessions_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_sessions" ADD CONSTRAINT "patient_sessions_rotated_from_id_fkey" FOREIGN KEY ("rotated_from_id") REFERENCES "patient_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_medication_id_fkey" FOREIGN KEY ("medication_id") REFERENCES "medications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dose_instances" ADD CONSTRAINT "dose_instances_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dose_instances" ADD CONSTRAINT "dose_instances_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dose_instances" ADD CONSTRAINT "dose_instances_medication_id_fkey" FOREIGN KEY ("medication_id") REFERENCES "medications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adherence_logs" ADD CONSTRAINT "adherence_logs_dose_instance_id_fkey" FOREIGN KEY ("dose_instance_id") REFERENCES "dose_instances"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adherence_logs" ADD CONSTRAINT "adherence_logs_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_medication_id_fkey" FOREIGN KEY ("medication_id") REFERENCES "medications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory_adjustments" ADD CONSTRAINT "inventory_adjustments_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
