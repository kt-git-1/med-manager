type DateParts = [number, number, number];
type TimeParts = [number, number, number];

function parseDateParts(date: string): DateParts {
  const [year, month, day] = date.split("-").map((part) => Number(part));
  return [year, month, day];
}

function parseTimeParts(time: string): TimeParts {
  const [hour, minute, second] = time.split(":").map((part) => Number(part));
  return [hour ?? 0, minute ?? 0, second ?? 0];
}

function pad2(value: number): string {
  return value.toString().padStart(2, "0");
}

function timeZoneOffsetMillis(date: Date, timeZone: string): number {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const parts = formatter.formatToParts(date);
  const lookup = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const year = Number(lookup.year);
  const month = Number(lookup.month);
  const day = Number(lookup.day);
  const hour = Number(lookup.hour);
  const minute = Number(lookup.minute);
  const second = Number(lookup.second);

  const asUtc = Date.UTC(year, month - 1, day, hour, minute, second);
  return asUtc - date.getTime();
}

export function zonedTimeToUtc(date: string, time: string, timeZone: string): Date {
  const [year, month, day] = parseDateParts(date);
  const [hour, minute, second] = parseTimeParts(time);
  const utcGuess = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  const offset = timeZoneOffsetMillis(utcGuess, timeZone);
  return new Date(utcGuess.getTime() - offset);
}

export function resolveZonedDateRange(date: string, timeZone: string): { from: Date; to: Date } {
  const from = zonedTimeToUtc(date, "00:00:00", timeZone);
  const to = zonedTimeToUtc(date, "23:59:59", timeZone);
  return { from, to };
}

export function timeOfDayToDate(time: string): Date {
  const [hour, minute, second] = parseTimeParts(time);
  return new Date(Date.UTC(1970, 0, 1, hour, minute, second));
}

export function formatTimeOfDay(date: Date): string {
  const hour = pad2(date.getUTCHours());
  const minute = pad2(date.getUTCMinutes());
  const second = date.getUTCSeconds();
  return second ? `${hour}:${minute}:${pad2(second)}` : `${hour}:${minute}`;
}

export function formatISODate(date: Date | null): string | null {
  if (!date) return null;
  return date.toISOString().slice(0, 10);
}
