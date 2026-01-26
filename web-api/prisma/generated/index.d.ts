
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Caregiver
 * 
 */
export type Caregiver = $Result.DefaultSelection<Prisma.$CaregiverPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model LinkCode
 * 
 */
export type LinkCode = $Result.DefaultSelection<Prisma.$LinkCodePayload>
/**
 * Model PatientSession
 * 
 */
export type PatientSession = $Result.DefaultSelection<Prisma.$PatientSessionPayload>
/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model DoseInstance
 * 
 */
export type DoseInstance = $Result.DefaultSelection<Prisma.$DoseInstancePayload>
/**
 * Model AdherenceLog
 * 
 */
export type AdherenceLog = $Result.DefaultSelection<Prisma.$AdherenceLogPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model InventoryAdjustment
 * 
 */
export type InventoryAdjustment = $Result.DefaultSelection<Prisma.$InventoryAdjustmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProfileRole: {
  family: 'family'
};

export type ProfileRole = (typeof ProfileRole)[keyof typeof ProfileRole]


export const DoseStatus: {
  pending: 'pending',
  taken: 'taken',
  missed: 'missed',
  skipped: 'skipped'
};

export type DoseStatus = (typeof DoseStatus)[keyof typeof DoseStatus]


export const AdherenceAction: {
  taken: 'taken',
  skipped: 'skipped'
};

export type AdherenceAction = (typeof AdherenceAction)[keyof typeof AdherenceAction]


export const AdherenceSource: {
  patient: 'patient',
  family: 'family',
  system: 'system'
};

export type AdherenceSource = (typeof AdherenceSource)[keyof typeof AdherenceSource]


export const InventoryAdjustmentReason: {
  missed: 'missed',
  extra: 'extra',
  restock: 'restock',
  manual: 'manual'
};

export type InventoryAdjustmentReason = (typeof InventoryAdjustmentReason)[keyof typeof InventoryAdjustmentReason]

}

export type ProfileRole = $Enums.ProfileRole

export const ProfileRole: typeof $Enums.ProfileRole

export type DoseStatus = $Enums.DoseStatus

export const DoseStatus: typeof $Enums.DoseStatus

export type AdherenceAction = $Enums.AdherenceAction

export const AdherenceAction: typeof $Enums.AdherenceAction

export type AdherenceSource = $Enums.AdherenceSource

export const AdherenceSource: typeof $Enums.AdherenceSource

export type InventoryAdjustmentReason = $Enums.InventoryAdjustmentReason

export const InventoryAdjustmentReason: typeof $Enums.InventoryAdjustmentReason

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caregiver`: Exposes CRUD operations for the **Caregiver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caregivers
    * const caregivers = await prisma.caregiver.findMany()
    * ```
    */
  get caregiver(): Prisma.CaregiverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkCode`: Exposes CRUD operations for the **LinkCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkCodes
    * const linkCodes = await prisma.linkCode.findMany()
    * ```
    */
  get linkCode(): Prisma.LinkCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientSession`: Exposes CRUD operations for the **PatientSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientSessions
    * const patientSessions = await prisma.patientSession.findMany()
    * ```
    */
  get patientSession(): Prisma.PatientSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doseInstance`: Exposes CRUD operations for the **DoseInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoseInstances
    * const doseInstances = await prisma.doseInstance.findMany()
    * ```
    */
  get doseInstance(): Prisma.DoseInstanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adherenceLog`: Exposes CRUD operations for the **AdherenceLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdherenceLogs
    * const adherenceLogs = await prisma.adherenceLog.findMany()
    * ```
    */
  get adherenceLog(): Prisma.AdherenceLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryAdjustment`: Exposes CRUD operations for the **InventoryAdjustment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryAdjustments
    * const inventoryAdjustments = await prisma.inventoryAdjustment.findMany()
    * ```
    */
  get inventoryAdjustment(): Prisma.InventoryAdjustmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Caregiver: 'Caregiver',
    Patient: 'Patient',
    LinkCode: 'LinkCode',
    PatientSession: 'PatientSession',
    Medication: 'Medication',
    Schedule: 'Schedule',
    DoseInstance: 'DoseInstance',
    AdherenceLog: 'AdherenceLog',
    Inventory: 'Inventory',
    InventoryAdjustment: 'InventoryAdjustment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "caregiver" | "patient" | "linkCode" | "patientSession" | "medication" | "schedule" | "doseInstance" | "adherenceLog" | "inventory" | "inventoryAdjustment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Caregiver: {
        payload: Prisma.$CaregiverPayload<ExtArgs>
        fields: Prisma.CaregiverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaregiverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaregiverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          findFirst: {
            args: Prisma.CaregiverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaregiverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          findMany: {
            args: Prisma.CaregiverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>[]
          }
          create: {
            args: Prisma.CaregiverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          createMany: {
            args: Prisma.CaregiverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaregiverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>[]
          }
          delete: {
            args: Prisma.CaregiverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          update: {
            args: Prisma.CaregiverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          deleteMany: {
            args: Prisma.CaregiverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaregiverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaregiverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>[]
          }
          upsert: {
            args: Prisma.CaregiverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          aggregate: {
            args: Prisma.CaregiverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaregiver>
          }
          groupBy: {
            args: Prisma.CaregiverGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaregiverGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaregiverCountArgs<ExtArgs>
            result: $Utils.Optional<CaregiverCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      LinkCode: {
        payload: Prisma.$LinkCodePayload<ExtArgs>
        fields: Prisma.LinkCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkCodePayload>
          }
          findFirst: {
            args: Prisma.LinkCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkCodePayload>
          }
          findMany: {
            args: Prisma.LinkCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkCodePayload>[]
          }
          create: {
            args: Prisma.LinkCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkCodePayload>
          }
          createMany: {
            args: Prisma.LinkCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkCodePayload>[]
          }
          delete: {
            args: Prisma.LinkCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkCodePayload>
          }
          update: {
            args: Prisma.LinkCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkCodePayload>
          }
          deleteMany: {
            args: Prisma.LinkCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkCodePayload>[]
          }
          upsert: {
            args: Prisma.LinkCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkCodePayload>
          }
          aggregate: {
            args: Prisma.LinkCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkCode>
          }
          groupBy: {
            args: Prisma.LinkCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCodeCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCodeCountAggregateOutputType> | number
          }
        }
      }
      PatientSession: {
        payload: Prisma.$PatientSessionPayload<ExtArgs>
        fields: Prisma.PatientSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientSessionPayload>
          }
          findFirst: {
            args: Prisma.PatientSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientSessionPayload>
          }
          findMany: {
            args: Prisma.PatientSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientSessionPayload>[]
          }
          create: {
            args: Prisma.PatientSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientSessionPayload>
          }
          createMany: {
            args: Prisma.PatientSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientSessionPayload>[]
          }
          delete: {
            args: Prisma.PatientSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientSessionPayload>
          }
          update: {
            args: Prisma.PatientSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientSessionPayload>
          }
          deleteMany: {
            args: Prisma.PatientSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientSessionPayload>[]
          }
          upsert: {
            args: Prisma.PatientSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientSessionPayload>
          }
          aggregate: {
            args: Prisma.PatientSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientSession>
          }
          groupBy: {
            args: Prisma.PatientSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientSessionCountArgs<ExtArgs>
            result: $Utils.Optional<PatientSessionCountAggregateOutputType> | number
          }
        }
      }
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      DoseInstance: {
        payload: Prisma.$DoseInstancePayload<ExtArgs>
        fields: Prisma.DoseInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoseInstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoseInstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseInstancePayload>
          }
          findFirst: {
            args: Prisma.DoseInstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoseInstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseInstancePayload>
          }
          findMany: {
            args: Prisma.DoseInstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseInstancePayload>[]
          }
          create: {
            args: Prisma.DoseInstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseInstancePayload>
          }
          createMany: {
            args: Prisma.DoseInstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoseInstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseInstancePayload>[]
          }
          delete: {
            args: Prisma.DoseInstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseInstancePayload>
          }
          update: {
            args: Prisma.DoseInstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseInstancePayload>
          }
          deleteMany: {
            args: Prisma.DoseInstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoseInstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoseInstanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseInstancePayload>[]
          }
          upsert: {
            args: Prisma.DoseInstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoseInstancePayload>
          }
          aggregate: {
            args: Prisma.DoseInstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoseInstance>
          }
          groupBy: {
            args: Prisma.DoseInstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoseInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoseInstanceCountArgs<ExtArgs>
            result: $Utils.Optional<DoseInstanceCountAggregateOutputType> | number
          }
        }
      }
      AdherenceLog: {
        payload: Prisma.$AdherenceLogPayload<ExtArgs>
        fields: Prisma.AdherenceLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdherenceLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherenceLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdherenceLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherenceLogPayload>
          }
          findFirst: {
            args: Prisma.AdherenceLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherenceLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdherenceLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherenceLogPayload>
          }
          findMany: {
            args: Prisma.AdherenceLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherenceLogPayload>[]
          }
          create: {
            args: Prisma.AdherenceLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherenceLogPayload>
          }
          createMany: {
            args: Prisma.AdherenceLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdherenceLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherenceLogPayload>[]
          }
          delete: {
            args: Prisma.AdherenceLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherenceLogPayload>
          }
          update: {
            args: Prisma.AdherenceLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherenceLogPayload>
          }
          deleteMany: {
            args: Prisma.AdherenceLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdherenceLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdherenceLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherenceLogPayload>[]
          }
          upsert: {
            args: Prisma.AdherenceLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdherenceLogPayload>
          }
          aggregate: {
            args: Prisma.AdherenceLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdherenceLog>
          }
          groupBy: {
            args: Prisma.AdherenceLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdherenceLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdherenceLogCountArgs<ExtArgs>
            result: $Utils.Optional<AdherenceLogCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      InventoryAdjustment: {
        payload: Prisma.$InventoryAdjustmentPayload<ExtArgs>
        fields: Prisma.InventoryAdjustmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryAdjustmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryAdjustmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          findFirst: {
            args: Prisma.InventoryAdjustmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryAdjustmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          findMany: {
            args: Prisma.InventoryAdjustmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>[]
          }
          create: {
            args: Prisma.InventoryAdjustmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          createMany: {
            args: Prisma.InventoryAdjustmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryAdjustmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>[]
          }
          delete: {
            args: Prisma.InventoryAdjustmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          update: {
            args: Prisma.InventoryAdjustmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          deleteMany: {
            args: Prisma.InventoryAdjustmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryAdjustmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryAdjustmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>[]
          }
          upsert: {
            args: Prisma.InventoryAdjustmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryAdjustmentPayload>
          }
          aggregate: {
            args: Prisma.InventoryAdjustmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryAdjustment>
          }
          groupBy: {
            args: Prisma.InventoryAdjustmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryAdjustmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryAdjustmentCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryAdjustmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    caregiver?: CaregiverOmit
    patient?: PatientOmit
    linkCode?: LinkCodeOmit
    patientSession?: PatientSessionOmit
    medication?: MedicationOmit
    schedule?: ScheduleOmit
    doseInstance?: DoseInstanceOmit
    adherenceLog?: AdherenceLogOmit
    inventory?: InventoryOmit
    inventoryAdjustment?: InventoryAdjustmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CaregiverCountOutputType
   */

  export type CaregiverCountOutputType = {
    patients: number
    linkCodes: number
  }

  export type CaregiverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | CaregiverCountOutputTypeCountPatientsArgs
    linkCodes?: boolean | CaregiverCountOutputTypeCountLinkCodesArgs
  }

  // Custom InputTypes
  /**
   * CaregiverCountOutputType without action
   */
  export type CaregiverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverCountOutputType
     */
    select?: CaregiverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CaregiverCountOutputType without action
   */
  export type CaregiverCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * CaregiverCountOutputType without action
   */
  export type CaregiverCountOutputTypeCountLinkCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkCodeWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    medications: number
    sessions: number
    doseInstances: number
    adherenceLogs: number
    linkCodes: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | PatientCountOutputTypeCountMedicationsArgs
    sessions?: boolean | PatientCountOutputTypeCountSessionsArgs
    doseInstances?: boolean | PatientCountOutputTypeCountDoseInstancesArgs
    adherenceLogs?: boolean | PatientCountOutputTypeCountAdherenceLogsArgs
    linkCodes?: boolean | PatientCountOutputTypeCountLinkCodesArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientSessionWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountDoseInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoseInstanceWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAdherenceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdherenceLogWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountLinkCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkCodeWhereInput
  }


  /**
   * Count Type PatientSessionCountOutputType
   */

  export type PatientSessionCountOutputType = {
    rotatedTo: number
  }

  export type PatientSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rotatedTo?: boolean | PatientSessionCountOutputTypeCountRotatedToArgs
  }

  // Custom InputTypes
  /**
   * PatientSessionCountOutputType without action
   */
  export type PatientSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSessionCountOutputType
     */
    select?: PatientSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientSessionCountOutputType without action
   */
  export type PatientSessionCountOutputTypeCountRotatedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientSessionWhereInput
  }


  /**
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    schedules: number
    doseInstances: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | MedicationCountOutputTypeCountSchedulesArgs
    doseInstances?: boolean | MedicationCountOutputTypeCountDoseInstancesArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountDoseInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoseInstanceWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    doseInstances: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doseInstances?: boolean | ScheduleCountOutputTypeCountDoseInstancesArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountDoseInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoseInstanceWhereInput
  }


  /**
   * Count Type DoseInstanceCountOutputType
   */

  export type DoseInstanceCountOutputType = {
    adherenceLogs: number
  }

  export type DoseInstanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adherenceLogs?: boolean | DoseInstanceCountOutputTypeCountAdherenceLogsArgs
  }

  // Custom InputTypes
  /**
   * DoseInstanceCountOutputType without action
   */
  export type DoseInstanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstanceCountOutputType
     */
    select?: DoseInstanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoseInstanceCountOutputType without action
   */
  export type DoseInstanceCountOutputTypeCountAdherenceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdherenceLogWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    adjustments: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adjustments?: boolean | InventoryCountOutputTypeCountAdjustmentsArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryAdjustmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    role: $Enums.ProfileRole | null
    createdAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    role: $Enums.ProfileRole | null
    createdAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    role: number
    createdAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    role?: true
    createdAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    role?: true
    createdAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    role: $Enums.ProfileRole
    createdAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    createdAt?: boolean
    caregiver?: boolean | Profile$caregiverArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "createdAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiver?: boolean | Profile$caregiverArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      caregiver: Prisma.$CaregiverPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.ProfileRole
      createdAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caregiver<T extends Profile$caregiverArgs<ExtArgs> = {}>(args?: Subset<T, Profile$caregiverArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly role: FieldRef<"Profile", 'ProfileRole'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.caregiver
   */
  export type Profile$caregiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    where?: CaregiverWhereInput
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Caregiver
   */

  export type AggregateCaregiver = {
    _count: CaregiverCountAggregateOutputType | null
    _min: CaregiverMinAggregateOutputType | null
    _max: CaregiverMaxAggregateOutputType | null
  }

  export type CaregiverMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    displayName: string | null
    createdAt: Date | null
  }

  export type CaregiverMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    displayName: string | null
    createdAt: Date | null
  }

  export type CaregiverCountAggregateOutputType = {
    id: number
    profileId: number
    displayName: number
    createdAt: number
    _all: number
  }


  export type CaregiverMinAggregateInputType = {
    id?: true
    profileId?: true
    displayName?: true
    createdAt?: true
  }

  export type CaregiverMaxAggregateInputType = {
    id?: true
    profileId?: true
    displayName?: true
    createdAt?: true
  }

  export type CaregiverCountAggregateInputType = {
    id?: true
    profileId?: true
    displayName?: true
    createdAt?: true
    _all?: true
  }

  export type CaregiverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caregiver to aggregate.
     */
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     */
    orderBy?: CaregiverOrderByWithRelationInput | CaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Caregivers
    **/
    _count?: true | CaregiverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaregiverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaregiverMaxAggregateInputType
  }

  export type GetCaregiverAggregateType<T extends CaregiverAggregateArgs> = {
        [P in keyof T & keyof AggregateCaregiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaregiver[P]>
      : GetScalarType<T[P], AggregateCaregiver[P]>
  }




  export type CaregiverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaregiverWhereInput
    orderBy?: CaregiverOrderByWithAggregationInput | CaregiverOrderByWithAggregationInput[]
    by: CaregiverScalarFieldEnum[] | CaregiverScalarFieldEnum
    having?: CaregiverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaregiverCountAggregateInputType | true
    _min?: CaregiverMinAggregateInputType
    _max?: CaregiverMaxAggregateInputType
  }

  export type CaregiverGroupByOutputType = {
    id: string
    profileId: string
    displayName: string
    createdAt: Date
    _count: CaregiverCountAggregateOutputType | null
    _min: CaregiverMinAggregateOutputType | null
    _max: CaregiverMaxAggregateOutputType | null
  }

  type GetCaregiverGroupByPayload<T extends CaregiverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaregiverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaregiverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaregiverGroupByOutputType[P]>
            : GetScalarType<T[P], CaregiverGroupByOutputType[P]>
        }
      >
    >


  export type CaregiverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    displayName?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    patients?: boolean | Caregiver$patientsArgs<ExtArgs>
    linkCodes?: boolean | Caregiver$linkCodesArgs<ExtArgs>
    _count?: boolean | CaregiverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caregiver"]>

  export type CaregiverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    displayName?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caregiver"]>

  export type CaregiverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    displayName?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caregiver"]>

  export type CaregiverSelectScalar = {
    id?: boolean
    profileId?: boolean
    displayName?: boolean
    createdAt?: boolean
  }

  export type CaregiverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "displayName" | "createdAt", ExtArgs["result"]["caregiver"]>
  export type CaregiverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    patients?: boolean | Caregiver$patientsArgs<ExtArgs>
    linkCodes?: boolean | Caregiver$linkCodesArgs<ExtArgs>
    _count?: boolean | CaregiverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CaregiverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type CaregiverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $CaregiverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Caregiver"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      patients: Prisma.$PatientPayload<ExtArgs>[]
      linkCodes: Prisma.$LinkCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      displayName: string
      createdAt: Date
    }, ExtArgs["result"]["caregiver"]>
    composites: {}
  }

  type CaregiverGetPayload<S extends boolean | null | undefined | CaregiverDefaultArgs> = $Result.GetResult<Prisma.$CaregiverPayload, S>

  type CaregiverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaregiverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaregiverCountAggregateInputType | true
    }

  export interface CaregiverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Caregiver'], meta: { name: 'Caregiver' } }
    /**
     * Find zero or one Caregiver that matches the filter.
     * @param {CaregiverFindUniqueArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaregiverFindUniqueArgs>(args: SelectSubset<T, CaregiverFindUniqueArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caregiver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaregiverFindUniqueOrThrowArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaregiverFindUniqueOrThrowArgs>(args: SelectSubset<T, CaregiverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caregiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindFirstArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaregiverFindFirstArgs>(args?: SelectSubset<T, CaregiverFindFirstArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caregiver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindFirstOrThrowArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaregiverFindFirstOrThrowArgs>(args?: SelectSubset<T, CaregiverFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caregivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caregivers
     * const caregivers = await prisma.caregiver.findMany()
     * 
     * // Get first 10 Caregivers
     * const caregivers = await prisma.caregiver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caregiverWithIdOnly = await prisma.caregiver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaregiverFindManyArgs>(args?: SelectSubset<T, CaregiverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caregiver.
     * @param {CaregiverCreateArgs} args - Arguments to create a Caregiver.
     * @example
     * // Create one Caregiver
     * const Caregiver = await prisma.caregiver.create({
     *   data: {
     *     // ... data to create a Caregiver
     *   }
     * })
     * 
     */
    create<T extends CaregiverCreateArgs>(args: SelectSubset<T, CaregiverCreateArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caregivers.
     * @param {CaregiverCreateManyArgs} args - Arguments to create many Caregivers.
     * @example
     * // Create many Caregivers
     * const caregiver = await prisma.caregiver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaregiverCreateManyArgs>(args?: SelectSubset<T, CaregiverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Caregivers and returns the data saved in the database.
     * @param {CaregiverCreateManyAndReturnArgs} args - Arguments to create many Caregivers.
     * @example
     * // Create many Caregivers
     * const caregiver = await prisma.caregiver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Caregivers and only return the `id`
     * const caregiverWithIdOnly = await prisma.caregiver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaregiverCreateManyAndReturnArgs>(args?: SelectSubset<T, CaregiverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Caregiver.
     * @param {CaregiverDeleteArgs} args - Arguments to delete one Caregiver.
     * @example
     * // Delete one Caregiver
     * const Caregiver = await prisma.caregiver.delete({
     *   where: {
     *     // ... filter to delete one Caregiver
     *   }
     * })
     * 
     */
    delete<T extends CaregiverDeleteArgs>(args: SelectSubset<T, CaregiverDeleteArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caregiver.
     * @param {CaregiverUpdateArgs} args - Arguments to update one Caregiver.
     * @example
     * // Update one Caregiver
     * const caregiver = await prisma.caregiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaregiverUpdateArgs>(args: SelectSubset<T, CaregiverUpdateArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caregivers.
     * @param {CaregiverDeleteManyArgs} args - Arguments to filter Caregivers to delete.
     * @example
     * // Delete a few Caregivers
     * const { count } = await prisma.caregiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaregiverDeleteManyArgs>(args?: SelectSubset<T, CaregiverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caregivers
     * const caregiver = await prisma.caregiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaregiverUpdateManyArgs>(args: SelectSubset<T, CaregiverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caregivers and returns the data updated in the database.
     * @param {CaregiverUpdateManyAndReturnArgs} args - Arguments to update many Caregivers.
     * @example
     * // Update many Caregivers
     * const caregiver = await prisma.caregiver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Caregivers and only return the `id`
     * const caregiverWithIdOnly = await prisma.caregiver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CaregiverUpdateManyAndReturnArgs>(args: SelectSubset<T, CaregiverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Caregiver.
     * @param {CaregiverUpsertArgs} args - Arguments to update or create a Caregiver.
     * @example
     * // Update or create a Caregiver
     * const caregiver = await prisma.caregiver.upsert({
     *   create: {
     *     // ... data to create a Caregiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caregiver we want to update
     *   }
     * })
     */
    upsert<T extends CaregiverUpsertArgs>(args: SelectSubset<T, CaregiverUpsertArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverCountArgs} args - Arguments to filter Caregivers to count.
     * @example
     * // Count the number of Caregivers
     * const count = await prisma.caregiver.count({
     *   where: {
     *     // ... the filter for the Caregivers we want to count
     *   }
     * })
    **/
    count<T extends CaregiverCountArgs>(
      args?: Subset<T, CaregiverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaregiverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caregiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaregiverAggregateArgs>(args: Subset<T, CaregiverAggregateArgs>): Prisma.PrismaPromise<GetCaregiverAggregateType<T>>

    /**
     * Group by Caregiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaregiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaregiverGroupByArgs['orderBy'] }
        : { orderBy?: CaregiverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaregiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaregiverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Caregiver model
   */
  readonly fields: CaregiverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Caregiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaregiverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patients<T extends Caregiver$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Caregiver$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkCodes<T extends Caregiver$linkCodesArgs<ExtArgs> = {}>(args?: Subset<T, Caregiver$linkCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Caregiver model
   */
  interface CaregiverFieldRefs {
    readonly id: FieldRef<"Caregiver", 'String'>
    readonly profileId: FieldRef<"Caregiver", 'String'>
    readonly displayName: FieldRef<"Caregiver", 'String'>
    readonly createdAt: FieldRef<"Caregiver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Caregiver findUnique
   */
  export type CaregiverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter, which Caregiver to fetch.
     */
    where: CaregiverWhereUniqueInput
  }

  /**
   * Caregiver findUniqueOrThrow
   */
  export type CaregiverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter, which Caregiver to fetch.
     */
    where: CaregiverWhereUniqueInput
  }

  /**
   * Caregiver findFirst
   */
  export type CaregiverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter, which Caregiver to fetch.
     */
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     */
    orderBy?: CaregiverOrderByWithRelationInput | CaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caregivers.
     */
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caregivers.
     */
    distinct?: CaregiverScalarFieldEnum | CaregiverScalarFieldEnum[]
  }

  /**
   * Caregiver findFirstOrThrow
   */
  export type CaregiverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter, which Caregiver to fetch.
     */
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     */
    orderBy?: CaregiverOrderByWithRelationInput | CaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caregivers.
     */
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caregivers.
     */
    distinct?: CaregiverScalarFieldEnum | CaregiverScalarFieldEnum[]
  }

  /**
   * Caregiver findMany
   */
  export type CaregiverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter, which Caregivers to fetch.
     */
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     */
    orderBy?: CaregiverOrderByWithRelationInput | CaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Caregivers.
     */
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     */
    skip?: number
    distinct?: CaregiverScalarFieldEnum | CaregiverScalarFieldEnum[]
  }

  /**
   * Caregiver create
   */
  export type CaregiverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * The data needed to create a Caregiver.
     */
    data: XOR<CaregiverCreateInput, CaregiverUncheckedCreateInput>
  }

  /**
   * Caregiver createMany
   */
  export type CaregiverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Caregivers.
     */
    data: CaregiverCreateManyInput | CaregiverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Caregiver createManyAndReturn
   */
  export type CaregiverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * The data used to create many Caregivers.
     */
    data: CaregiverCreateManyInput | CaregiverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Caregiver update
   */
  export type CaregiverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * The data needed to update a Caregiver.
     */
    data: XOR<CaregiverUpdateInput, CaregiverUncheckedUpdateInput>
    /**
     * Choose, which Caregiver to update.
     */
    where: CaregiverWhereUniqueInput
  }

  /**
   * Caregiver updateMany
   */
  export type CaregiverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Caregivers.
     */
    data: XOR<CaregiverUpdateManyMutationInput, CaregiverUncheckedUpdateManyInput>
    /**
     * Filter which Caregivers to update
     */
    where?: CaregiverWhereInput
    /**
     * Limit how many Caregivers to update.
     */
    limit?: number
  }

  /**
   * Caregiver updateManyAndReturn
   */
  export type CaregiverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * The data used to update Caregivers.
     */
    data: XOR<CaregiverUpdateManyMutationInput, CaregiverUncheckedUpdateManyInput>
    /**
     * Filter which Caregivers to update
     */
    where?: CaregiverWhereInput
    /**
     * Limit how many Caregivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Caregiver upsert
   */
  export type CaregiverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * The filter to search for the Caregiver to update in case it exists.
     */
    where: CaregiverWhereUniqueInput
    /**
     * In case the Caregiver found by the `where` argument doesn't exist, create a new Caregiver with this data.
     */
    create: XOR<CaregiverCreateInput, CaregiverUncheckedCreateInput>
    /**
     * In case the Caregiver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaregiverUpdateInput, CaregiverUncheckedUpdateInput>
  }

  /**
   * Caregiver delete
   */
  export type CaregiverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter which Caregiver to delete.
     */
    where: CaregiverWhereUniqueInput
  }

  /**
   * Caregiver deleteMany
   */
  export type CaregiverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caregivers to delete
     */
    where?: CaregiverWhereInput
    /**
     * Limit how many Caregivers to delete.
     */
    limit?: number
  }

  /**
   * Caregiver.patients
   */
  export type Caregiver$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Caregiver.linkCodes
   */
  export type Caregiver$linkCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
    where?: LinkCodeWhereInput
    orderBy?: LinkCodeOrderByWithRelationInput | LinkCodeOrderByWithRelationInput[]
    cursor?: LinkCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkCodeScalarFieldEnum | LinkCodeScalarFieldEnum[]
  }

  /**
   * Caregiver without action
   */
  export type CaregiverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    caregiverId: string | null
    displayName: string | null
    timezone: string | null
    createdAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    caregiverId: string | null
    displayName: string | null
    timezone: string | null
    createdAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    caregiverId: number
    displayName: number
    timezone: number
    createdAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    caregiverId?: true
    displayName?: true
    timezone?: true
    createdAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    caregiverId?: true
    displayName?: true
    timezone?: true
    createdAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    caregiverId?: true
    displayName?: true
    timezone?: true
    createdAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    caregiverId: string
    displayName: string
    timezone: string
    createdAt: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caregiverId?: boolean
    displayName?: boolean
    timezone?: boolean
    createdAt?: boolean
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    medications?: boolean | Patient$medicationsArgs<ExtArgs>
    sessions?: boolean | Patient$sessionsArgs<ExtArgs>
    doseInstances?: boolean | Patient$doseInstancesArgs<ExtArgs>
    adherenceLogs?: boolean | Patient$adherenceLogsArgs<ExtArgs>
    linkCodes?: boolean | Patient$linkCodesArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caregiverId?: boolean
    displayName?: boolean
    timezone?: boolean
    createdAt?: boolean
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caregiverId?: boolean
    displayName?: boolean
    timezone?: boolean
    createdAt?: boolean
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    caregiverId?: boolean
    displayName?: boolean
    timezone?: boolean
    createdAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caregiverId" | "displayName" | "timezone" | "createdAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    medications?: boolean | Patient$medicationsArgs<ExtArgs>
    sessions?: boolean | Patient$sessionsArgs<ExtArgs>
    doseInstances?: boolean | Patient$doseInstancesArgs<ExtArgs>
    adherenceLogs?: boolean | Patient$adherenceLogsArgs<ExtArgs>
    linkCodes?: boolean | Patient$linkCodesArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      caregiver: Prisma.$CaregiverPayload<ExtArgs>
      medications: Prisma.$MedicationPayload<ExtArgs>[]
      sessions: Prisma.$PatientSessionPayload<ExtArgs>[]
      doseInstances: Prisma.$DoseInstancePayload<ExtArgs>[]
      adherenceLogs: Prisma.$AdherenceLogPayload<ExtArgs>[]
      linkCodes: Prisma.$LinkCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      caregiverId: string
      displayName: string
      timezone: string
      createdAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caregiver<T extends CaregiverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaregiverDefaultArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medications<T extends Patient$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Patient$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doseInstances<T extends Patient$doseInstancesArgs<ExtArgs> = {}>(args?: Subset<T, Patient$doseInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adherenceLogs<T extends Patient$adherenceLogsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$adherenceLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkCodes<T extends Patient$linkCodesArgs<ExtArgs> = {}>(args?: Subset<T, Patient$linkCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly caregiverId: FieldRef<"Patient", 'String'>
    readonly displayName: FieldRef<"Patient", 'String'>
    readonly timezone: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.medications
   */
  export type Patient$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Patient.sessions
   */
  export type Patient$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    where?: PatientSessionWhereInput
    orderBy?: PatientSessionOrderByWithRelationInput | PatientSessionOrderByWithRelationInput[]
    cursor?: PatientSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientSessionScalarFieldEnum | PatientSessionScalarFieldEnum[]
  }

  /**
   * Patient.doseInstances
   */
  export type Patient$doseInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    where?: DoseInstanceWhereInput
    orderBy?: DoseInstanceOrderByWithRelationInput | DoseInstanceOrderByWithRelationInput[]
    cursor?: DoseInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoseInstanceScalarFieldEnum | DoseInstanceScalarFieldEnum[]
  }

  /**
   * Patient.adherenceLogs
   */
  export type Patient$adherenceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
    where?: AdherenceLogWhereInput
    orderBy?: AdherenceLogOrderByWithRelationInput | AdherenceLogOrderByWithRelationInput[]
    cursor?: AdherenceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdherenceLogScalarFieldEnum | AdherenceLogScalarFieldEnum[]
  }

  /**
   * Patient.linkCodes
   */
  export type Patient$linkCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
    where?: LinkCodeWhereInput
    orderBy?: LinkCodeOrderByWithRelationInput | LinkCodeOrderByWithRelationInput[]
    cursor?: LinkCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkCodeScalarFieldEnum | LinkCodeScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model LinkCode
   */

  export type AggregateLinkCode = {
    _count: LinkCodeCountAggregateOutputType | null
    _min: LinkCodeMinAggregateOutputType | null
    _max: LinkCodeMaxAggregateOutputType | null
  }

  export type LinkCodeMinAggregateOutputType = {
    id: string | null
    caregiverId: string | null
    patientId: string | null
    code: string | null
    expiresAt: Date | null
    usedAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type LinkCodeMaxAggregateOutputType = {
    id: string | null
    caregiverId: string | null
    patientId: string | null
    code: string | null
    expiresAt: Date | null
    usedAt: Date | null
    revokedAt: Date | null
    createdAt: Date | null
  }

  export type LinkCodeCountAggregateOutputType = {
    id: number
    caregiverId: number
    patientId: number
    code: number
    expiresAt: number
    usedAt: number
    revokedAt: number
    createdAt: number
    _all: number
  }


  export type LinkCodeMinAggregateInputType = {
    id?: true
    caregiverId?: true
    patientId?: true
    code?: true
    expiresAt?: true
    usedAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type LinkCodeMaxAggregateInputType = {
    id?: true
    caregiverId?: true
    patientId?: true
    code?: true
    expiresAt?: true
    usedAt?: true
    revokedAt?: true
    createdAt?: true
  }

  export type LinkCodeCountAggregateInputType = {
    id?: true
    caregiverId?: true
    patientId?: true
    code?: true
    expiresAt?: true
    usedAt?: true
    revokedAt?: true
    createdAt?: true
    _all?: true
  }

  export type LinkCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkCode to aggregate.
     */
    where?: LinkCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkCodes to fetch.
     */
    orderBy?: LinkCodeOrderByWithRelationInput | LinkCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkCodes
    **/
    _count?: true | LinkCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkCodeMaxAggregateInputType
  }

  export type GetLinkCodeAggregateType<T extends LinkCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkCode[P]>
      : GetScalarType<T[P], AggregateLinkCode[P]>
  }




  export type LinkCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkCodeWhereInput
    orderBy?: LinkCodeOrderByWithAggregationInput | LinkCodeOrderByWithAggregationInput[]
    by: LinkCodeScalarFieldEnum[] | LinkCodeScalarFieldEnum
    having?: LinkCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCodeCountAggregateInputType | true
    _min?: LinkCodeMinAggregateInputType
    _max?: LinkCodeMaxAggregateInputType
  }

  export type LinkCodeGroupByOutputType = {
    id: string
    caregiverId: string
    patientId: string | null
    code: string
    expiresAt: Date
    usedAt: Date | null
    revokedAt: Date | null
    createdAt: Date
    _count: LinkCodeCountAggregateOutputType | null
    _min: LinkCodeMinAggregateOutputType | null
    _max: LinkCodeMaxAggregateOutputType | null
  }

  type GetLinkCodeGroupByPayload<T extends LinkCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkCodeGroupByOutputType[P]>
            : GetScalarType<T[P], LinkCodeGroupByOutputType[P]>
        }
      >
    >


  export type LinkCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caregiverId?: boolean
    patientId?: boolean
    code?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    patient?: boolean | LinkCode$patientArgs<ExtArgs>
  }, ExtArgs["result"]["linkCode"]>

  export type LinkCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caregiverId?: boolean
    patientId?: boolean
    code?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    patient?: boolean | LinkCode$patientArgs<ExtArgs>
  }, ExtArgs["result"]["linkCode"]>

  export type LinkCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caregiverId?: boolean
    patientId?: boolean
    code?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    patient?: boolean | LinkCode$patientArgs<ExtArgs>
  }, ExtArgs["result"]["linkCode"]>

  export type LinkCodeSelectScalar = {
    id?: boolean
    caregiverId?: boolean
    patientId?: boolean
    code?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    revokedAt?: boolean
    createdAt?: boolean
  }

  export type LinkCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caregiverId" | "patientId" | "code" | "expiresAt" | "usedAt" | "revokedAt" | "createdAt", ExtArgs["result"]["linkCode"]>
  export type LinkCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    patient?: boolean | LinkCode$patientArgs<ExtArgs>
  }
  export type LinkCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    patient?: boolean | LinkCode$patientArgs<ExtArgs>
  }
  export type LinkCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    patient?: boolean | LinkCode$patientArgs<ExtArgs>
  }

  export type $LinkCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkCode"
    objects: {
      caregiver: Prisma.$CaregiverPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      caregiverId: string
      patientId: string | null
      code: string
      expiresAt: Date
      usedAt: Date | null
      revokedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["linkCode"]>
    composites: {}
  }

  type LinkCodeGetPayload<S extends boolean | null | undefined | LinkCodeDefaultArgs> = $Result.GetResult<Prisma.$LinkCodePayload, S>

  type LinkCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCodeCountAggregateInputType | true
    }

  export interface LinkCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkCode'], meta: { name: 'LinkCode' } }
    /**
     * Find zero or one LinkCode that matches the filter.
     * @param {LinkCodeFindUniqueArgs} args - Arguments to find a LinkCode
     * @example
     * // Get one LinkCode
     * const linkCode = await prisma.linkCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkCodeFindUniqueArgs>(args: SelectSubset<T, LinkCodeFindUniqueArgs<ExtArgs>>): Prisma__LinkCodeClient<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkCodeFindUniqueOrThrowArgs} args - Arguments to find a LinkCode
     * @example
     * // Get one LinkCode
     * const linkCode = await prisma.linkCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkCodeClient<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCodeFindFirstArgs} args - Arguments to find a LinkCode
     * @example
     * // Get one LinkCode
     * const linkCode = await prisma.linkCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkCodeFindFirstArgs>(args?: SelectSubset<T, LinkCodeFindFirstArgs<ExtArgs>>): Prisma__LinkCodeClient<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCodeFindFirstOrThrowArgs} args - Arguments to find a LinkCode
     * @example
     * // Get one LinkCode
     * const linkCode = await prisma.linkCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkCodeClient<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkCodes
     * const linkCodes = await prisma.linkCode.findMany()
     * 
     * // Get first 10 LinkCodes
     * const linkCodes = await prisma.linkCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkCodeWithIdOnly = await prisma.linkCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkCodeFindManyArgs>(args?: SelectSubset<T, LinkCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkCode.
     * @param {LinkCodeCreateArgs} args - Arguments to create a LinkCode.
     * @example
     * // Create one LinkCode
     * const LinkCode = await prisma.linkCode.create({
     *   data: {
     *     // ... data to create a LinkCode
     *   }
     * })
     * 
     */
    create<T extends LinkCodeCreateArgs>(args: SelectSubset<T, LinkCodeCreateArgs<ExtArgs>>): Prisma__LinkCodeClient<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkCodes.
     * @param {LinkCodeCreateManyArgs} args - Arguments to create many LinkCodes.
     * @example
     * // Create many LinkCodes
     * const linkCode = await prisma.linkCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCodeCreateManyArgs>(args?: SelectSubset<T, LinkCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkCodes and returns the data saved in the database.
     * @param {LinkCodeCreateManyAndReturnArgs} args - Arguments to create many LinkCodes.
     * @example
     * // Create many LinkCodes
     * const linkCode = await prisma.linkCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkCodes and only return the `id`
     * const linkCodeWithIdOnly = await prisma.linkCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkCode.
     * @param {LinkCodeDeleteArgs} args - Arguments to delete one LinkCode.
     * @example
     * // Delete one LinkCode
     * const LinkCode = await prisma.linkCode.delete({
     *   where: {
     *     // ... filter to delete one LinkCode
     *   }
     * })
     * 
     */
    delete<T extends LinkCodeDeleteArgs>(args: SelectSubset<T, LinkCodeDeleteArgs<ExtArgs>>): Prisma__LinkCodeClient<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkCode.
     * @param {LinkCodeUpdateArgs} args - Arguments to update one LinkCode.
     * @example
     * // Update one LinkCode
     * const linkCode = await prisma.linkCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkCodeUpdateArgs>(args: SelectSubset<T, LinkCodeUpdateArgs<ExtArgs>>): Prisma__LinkCodeClient<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkCodes.
     * @param {LinkCodeDeleteManyArgs} args - Arguments to filter LinkCodes to delete.
     * @example
     * // Delete a few LinkCodes
     * const { count } = await prisma.linkCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkCodeDeleteManyArgs>(args?: SelectSubset<T, LinkCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkCodes
     * const linkCode = await prisma.linkCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkCodeUpdateManyArgs>(args: SelectSubset<T, LinkCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkCodes and returns the data updated in the database.
     * @param {LinkCodeUpdateManyAndReturnArgs} args - Arguments to update many LinkCodes.
     * @example
     * // Update many LinkCodes
     * const linkCode = await prisma.linkCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkCodes and only return the `id`
     * const linkCodeWithIdOnly = await prisma.linkCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkCode.
     * @param {LinkCodeUpsertArgs} args - Arguments to update or create a LinkCode.
     * @example
     * // Update or create a LinkCode
     * const linkCode = await prisma.linkCode.upsert({
     *   create: {
     *     // ... data to create a LinkCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkCode we want to update
     *   }
     * })
     */
    upsert<T extends LinkCodeUpsertArgs>(args: SelectSubset<T, LinkCodeUpsertArgs<ExtArgs>>): Prisma__LinkCodeClient<$Result.GetResult<Prisma.$LinkCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCodeCountArgs} args - Arguments to filter LinkCodes to count.
     * @example
     * // Count the number of LinkCodes
     * const count = await prisma.linkCode.count({
     *   where: {
     *     // ... the filter for the LinkCodes we want to count
     *   }
     * })
    **/
    count<T extends LinkCodeCountArgs>(
      args?: Subset<T, LinkCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkCodeAggregateArgs>(args: Subset<T, LinkCodeAggregateArgs>): Prisma.PrismaPromise<GetLinkCodeAggregateType<T>>

    /**
     * Group by LinkCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkCodeGroupByArgs['orderBy'] }
        : { orderBy?: LinkCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkCode model
   */
  readonly fields: LinkCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caregiver<T extends CaregiverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaregiverDefaultArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends LinkCode$patientArgs<ExtArgs> = {}>(args?: Subset<T, LinkCode$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkCode model
   */
  interface LinkCodeFieldRefs {
    readonly id: FieldRef<"LinkCode", 'String'>
    readonly caregiverId: FieldRef<"LinkCode", 'String'>
    readonly patientId: FieldRef<"LinkCode", 'String'>
    readonly code: FieldRef<"LinkCode", 'String'>
    readonly expiresAt: FieldRef<"LinkCode", 'DateTime'>
    readonly usedAt: FieldRef<"LinkCode", 'DateTime'>
    readonly revokedAt: FieldRef<"LinkCode", 'DateTime'>
    readonly createdAt: FieldRef<"LinkCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LinkCode findUnique
   */
  export type LinkCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
    /**
     * Filter, which LinkCode to fetch.
     */
    where: LinkCodeWhereUniqueInput
  }

  /**
   * LinkCode findUniqueOrThrow
   */
  export type LinkCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
    /**
     * Filter, which LinkCode to fetch.
     */
    where: LinkCodeWhereUniqueInput
  }

  /**
   * LinkCode findFirst
   */
  export type LinkCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
    /**
     * Filter, which LinkCode to fetch.
     */
    where?: LinkCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkCodes to fetch.
     */
    orderBy?: LinkCodeOrderByWithRelationInput | LinkCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkCodes.
     */
    cursor?: LinkCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkCodes.
     */
    distinct?: LinkCodeScalarFieldEnum | LinkCodeScalarFieldEnum[]
  }

  /**
   * LinkCode findFirstOrThrow
   */
  export type LinkCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
    /**
     * Filter, which LinkCode to fetch.
     */
    where?: LinkCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkCodes to fetch.
     */
    orderBy?: LinkCodeOrderByWithRelationInput | LinkCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkCodes.
     */
    cursor?: LinkCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkCodes.
     */
    distinct?: LinkCodeScalarFieldEnum | LinkCodeScalarFieldEnum[]
  }

  /**
   * LinkCode findMany
   */
  export type LinkCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
    /**
     * Filter, which LinkCodes to fetch.
     */
    where?: LinkCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkCodes to fetch.
     */
    orderBy?: LinkCodeOrderByWithRelationInput | LinkCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkCodes.
     */
    cursor?: LinkCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkCodes.
     */
    skip?: number
    distinct?: LinkCodeScalarFieldEnum | LinkCodeScalarFieldEnum[]
  }

  /**
   * LinkCode create
   */
  export type LinkCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkCode.
     */
    data: XOR<LinkCodeCreateInput, LinkCodeUncheckedCreateInput>
  }

  /**
   * LinkCode createMany
   */
  export type LinkCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkCodes.
     */
    data: LinkCodeCreateManyInput | LinkCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkCode createManyAndReturn
   */
  export type LinkCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * The data used to create many LinkCodes.
     */
    data: LinkCodeCreateManyInput | LinkCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkCode update
   */
  export type LinkCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkCode.
     */
    data: XOR<LinkCodeUpdateInput, LinkCodeUncheckedUpdateInput>
    /**
     * Choose, which LinkCode to update.
     */
    where: LinkCodeWhereUniqueInput
  }

  /**
   * LinkCode updateMany
   */
  export type LinkCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkCodes.
     */
    data: XOR<LinkCodeUpdateManyMutationInput, LinkCodeUncheckedUpdateManyInput>
    /**
     * Filter which LinkCodes to update
     */
    where?: LinkCodeWhereInput
    /**
     * Limit how many LinkCodes to update.
     */
    limit?: number
  }

  /**
   * LinkCode updateManyAndReturn
   */
  export type LinkCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * The data used to update LinkCodes.
     */
    data: XOR<LinkCodeUpdateManyMutationInput, LinkCodeUncheckedUpdateManyInput>
    /**
     * Filter which LinkCodes to update
     */
    where?: LinkCodeWhereInput
    /**
     * Limit how many LinkCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkCode upsert
   */
  export type LinkCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkCode to update in case it exists.
     */
    where: LinkCodeWhereUniqueInput
    /**
     * In case the LinkCode found by the `where` argument doesn't exist, create a new LinkCode with this data.
     */
    create: XOR<LinkCodeCreateInput, LinkCodeUncheckedCreateInput>
    /**
     * In case the LinkCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkCodeUpdateInput, LinkCodeUncheckedUpdateInput>
  }

  /**
   * LinkCode delete
   */
  export type LinkCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
    /**
     * Filter which LinkCode to delete.
     */
    where: LinkCodeWhereUniqueInput
  }

  /**
   * LinkCode deleteMany
   */
  export type LinkCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkCodes to delete
     */
    where?: LinkCodeWhereInput
    /**
     * Limit how many LinkCodes to delete.
     */
    limit?: number
  }

  /**
   * LinkCode.patient
   */
  export type LinkCode$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * LinkCode without action
   */
  export type LinkCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCode
     */
    select?: LinkCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkCode
     */
    omit?: LinkCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkCodeInclude<ExtArgs> | null
  }


  /**
   * Model PatientSession
   */

  export type AggregatePatientSession = {
    _count: PatientSessionCountAggregateOutputType | null
    _min: PatientSessionMinAggregateOutputType | null
    _max: PatientSessionMaxAggregateOutputType | null
  }

  export type PatientSessionMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    tokenHash: string | null
    issuedAt: Date | null
    expiresAt: Date | null
    rotatedFromId: string | null
    revokedAt: Date | null
    lastSeenAt: Date | null
  }

  export type PatientSessionMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    tokenHash: string | null
    issuedAt: Date | null
    expiresAt: Date | null
    rotatedFromId: string | null
    revokedAt: Date | null
    lastSeenAt: Date | null
  }

  export type PatientSessionCountAggregateOutputType = {
    id: number
    patientId: number
    tokenHash: number
    issuedAt: number
    expiresAt: number
    rotatedFromId: number
    revokedAt: number
    lastSeenAt: number
    _all: number
  }


  export type PatientSessionMinAggregateInputType = {
    id?: true
    patientId?: true
    tokenHash?: true
    issuedAt?: true
    expiresAt?: true
    rotatedFromId?: true
    revokedAt?: true
    lastSeenAt?: true
  }

  export type PatientSessionMaxAggregateInputType = {
    id?: true
    patientId?: true
    tokenHash?: true
    issuedAt?: true
    expiresAt?: true
    rotatedFromId?: true
    revokedAt?: true
    lastSeenAt?: true
  }

  export type PatientSessionCountAggregateInputType = {
    id?: true
    patientId?: true
    tokenHash?: true
    issuedAt?: true
    expiresAt?: true
    rotatedFromId?: true
    revokedAt?: true
    lastSeenAt?: true
    _all?: true
  }

  export type PatientSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientSession to aggregate.
     */
    where?: PatientSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientSessions to fetch.
     */
    orderBy?: PatientSessionOrderByWithRelationInput | PatientSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientSessions
    **/
    _count?: true | PatientSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientSessionMaxAggregateInputType
  }

  export type GetPatientSessionAggregateType<T extends PatientSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientSession[P]>
      : GetScalarType<T[P], AggregatePatientSession[P]>
  }




  export type PatientSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientSessionWhereInput
    orderBy?: PatientSessionOrderByWithAggregationInput | PatientSessionOrderByWithAggregationInput[]
    by: PatientSessionScalarFieldEnum[] | PatientSessionScalarFieldEnum
    having?: PatientSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientSessionCountAggregateInputType | true
    _min?: PatientSessionMinAggregateInputType
    _max?: PatientSessionMaxAggregateInputType
  }

  export type PatientSessionGroupByOutputType = {
    id: string
    patientId: string
    tokenHash: string
    issuedAt: Date
    expiresAt: Date
    rotatedFromId: string | null
    revokedAt: Date | null
    lastSeenAt: Date | null
    _count: PatientSessionCountAggregateOutputType | null
    _min: PatientSessionMinAggregateOutputType | null
    _max: PatientSessionMaxAggregateOutputType | null
  }

  type GetPatientSessionGroupByPayload<T extends PatientSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PatientSessionGroupByOutputType[P]>
        }
      >
    >


  export type PatientSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    tokenHash?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    rotatedFromId?: boolean
    revokedAt?: boolean
    lastSeenAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    rotatedFrom?: boolean | PatientSession$rotatedFromArgs<ExtArgs>
    rotatedTo?: boolean | PatientSession$rotatedToArgs<ExtArgs>
    _count?: boolean | PatientSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientSession"]>

  export type PatientSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    tokenHash?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    rotatedFromId?: boolean
    revokedAt?: boolean
    lastSeenAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    rotatedFrom?: boolean | PatientSession$rotatedFromArgs<ExtArgs>
  }, ExtArgs["result"]["patientSession"]>

  export type PatientSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    tokenHash?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    rotatedFromId?: boolean
    revokedAt?: boolean
    lastSeenAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    rotatedFrom?: boolean | PatientSession$rotatedFromArgs<ExtArgs>
  }, ExtArgs["result"]["patientSession"]>

  export type PatientSessionSelectScalar = {
    id?: boolean
    patientId?: boolean
    tokenHash?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    rotatedFromId?: boolean
    revokedAt?: boolean
    lastSeenAt?: boolean
  }

  export type PatientSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "tokenHash" | "issuedAt" | "expiresAt" | "rotatedFromId" | "revokedAt" | "lastSeenAt", ExtArgs["result"]["patientSession"]>
  export type PatientSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    rotatedFrom?: boolean | PatientSession$rotatedFromArgs<ExtArgs>
    rotatedTo?: boolean | PatientSession$rotatedToArgs<ExtArgs>
    _count?: boolean | PatientSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    rotatedFrom?: boolean | PatientSession$rotatedFromArgs<ExtArgs>
  }
  export type PatientSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    rotatedFrom?: boolean | PatientSession$rotatedFromArgs<ExtArgs>
  }

  export type $PatientSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientSession"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      rotatedFrom: Prisma.$PatientSessionPayload<ExtArgs> | null
      rotatedTo: Prisma.$PatientSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      tokenHash: string
      issuedAt: Date
      expiresAt: Date
      rotatedFromId: string | null
      revokedAt: Date | null
      lastSeenAt: Date | null
    }, ExtArgs["result"]["patientSession"]>
    composites: {}
  }

  type PatientSessionGetPayload<S extends boolean | null | undefined | PatientSessionDefaultArgs> = $Result.GetResult<Prisma.$PatientSessionPayload, S>

  type PatientSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientSessionCountAggregateInputType | true
    }

  export interface PatientSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientSession'], meta: { name: 'PatientSession' } }
    /**
     * Find zero or one PatientSession that matches the filter.
     * @param {PatientSessionFindUniqueArgs} args - Arguments to find a PatientSession
     * @example
     * // Get one PatientSession
     * const patientSession = await prisma.patientSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientSessionFindUniqueArgs>(args: SelectSubset<T, PatientSessionFindUniqueArgs<ExtArgs>>): Prisma__PatientSessionClient<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientSessionFindUniqueOrThrowArgs} args - Arguments to find a PatientSession
     * @example
     * // Get one PatientSession
     * const patientSession = await prisma.patientSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientSessionClient<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientSessionFindFirstArgs} args - Arguments to find a PatientSession
     * @example
     * // Get one PatientSession
     * const patientSession = await prisma.patientSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientSessionFindFirstArgs>(args?: SelectSubset<T, PatientSessionFindFirstArgs<ExtArgs>>): Prisma__PatientSessionClient<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientSessionFindFirstOrThrowArgs} args - Arguments to find a PatientSession
     * @example
     * // Get one PatientSession
     * const patientSession = await prisma.patientSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientSessionClient<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientSessions
     * const patientSessions = await prisma.patientSession.findMany()
     * 
     * // Get first 10 PatientSessions
     * const patientSessions = await prisma.patientSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientSessionWithIdOnly = await prisma.patientSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientSessionFindManyArgs>(args?: SelectSubset<T, PatientSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientSession.
     * @param {PatientSessionCreateArgs} args - Arguments to create a PatientSession.
     * @example
     * // Create one PatientSession
     * const PatientSession = await prisma.patientSession.create({
     *   data: {
     *     // ... data to create a PatientSession
     *   }
     * })
     * 
     */
    create<T extends PatientSessionCreateArgs>(args: SelectSubset<T, PatientSessionCreateArgs<ExtArgs>>): Prisma__PatientSessionClient<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientSessions.
     * @param {PatientSessionCreateManyArgs} args - Arguments to create many PatientSessions.
     * @example
     * // Create many PatientSessions
     * const patientSession = await prisma.patientSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientSessionCreateManyArgs>(args?: SelectSubset<T, PatientSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientSessions and returns the data saved in the database.
     * @param {PatientSessionCreateManyAndReturnArgs} args - Arguments to create many PatientSessions.
     * @example
     * // Create many PatientSessions
     * const patientSession = await prisma.patientSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientSessions and only return the `id`
     * const patientSessionWithIdOnly = await prisma.patientSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientSession.
     * @param {PatientSessionDeleteArgs} args - Arguments to delete one PatientSession.
     * @example
     * // Delete one PatientSession
     * const PatientSession = await prisma.patientSession.delete({
     *   where: {
     *     // ... filter to delete one PatientSession
     *   }
     * })
     * 
     */
    delete<T extends PatientSessionDeleteArgs>(args: SelectSubset<T, PatientSessionDeleteArgs<ExtArgs>>): Prisma__PatientSessionClient<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientSession.
     * @param {PatientSessionUpdateArgs} args - Arguments to update one PatientSession.
     * @example
     * // Update one PatientSession
     * const patientSession = await prisma.patientSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientSessionUpdateArgs>(args: SelectSubset<T, PatientSessionUpdateArgs<ExtArgs>>): Prisma__PatientSessionClient<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientSessions.
     * @param {PatientSessionDeleteManyArgs} args - Arguments to filter PatientSessions to delete.
     * @example
     * // Delete a few PatientSessions
     * const { count } = await prisma.patientSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientSessionDeleteManyArgs>(args?: SelectSubset<T, PatientSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientSessions
     * const patientSession = await prisma.patientSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientSessionUpdateManyArgs>(args: SelectSubset<T, PatientSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientSessions and returns the data updated in the database.
     * @param {PatientSessionUpdateManyAndReturnArgs} args - Arguments to update many PatientSessions.
     * @example
     * // Update many PatientSessions
     * const patientSession = await prisma.patientSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientSessions and only return the `id`
     * const patientSessionWithIdOnly = await prisma.patientSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientSession.
     * @param {PatientSessionUpsertArgs} args - Arguments to update or create a PatientSession.
     * @example
     * // Update or create a PatientSession
     * const patientSession = await prisma.patientSession.upsert({
     *   create: {
     *     // ... data to create a PatientSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientSession we want to update
     *   }
     * })
     */
    upsert<T extends PatientSessionUpsertArgs>(args: SelectSubset<T, PatientSessionUpsertArgs<ExtArgs>>): Prisma__PatientSessionClient<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientSessionCountArgs} args - Arguments to filter PatientSessions to count.
     * @example
     * // Count the number of PatientSessions
     * const count = await prisma.patientSession.count({
     *   where: {
     *     // ... the filter for the PatientSessions we want to count
     *   }
     * })
    **/
    count<T extends PatientSessionCountArgs>(
      args?: Subset<T, PatientSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientSessionAggregateArgs>(args: Subset<T, PatientSessionAggregateArgs>): Prisma.PrismaPromise<GetPatientSessionAggregateType<T>>

    /**
     * Group by PatientSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientSessionGroupByArgs['orderBy'] }
        : { orderBy?: PatientSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientSession model
   */
  readonly fields: PatientSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rotatedFrom<T extends PatientSession$rotatedFromArgs<ExtArgs> = {}>(args?: Subset<T, PatientSession$rotatedFromArgs<ExtArgs>>): Prisma__PatientSessionClient<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rotatedTo<T extends PatientSession$rotatedToArgs<ExtArgs> = {}>(args?: Subset<T, PatientSession$rotatedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatientSession model
   */
  interface PatientSessionFieldRefs {
    readonly id: FieldRef<"PatientSession", 'String'>
    readonly patientId: FieldRef<"PatientSession", 'String'>
    readonly tokenHash: FieldRef<"PatientSession", 'String'>
    readonly issuedAt: FieldRef<"PatientSession", 'DateTime'>
    readonly expiresAt: FieldRef<"PatientSession", 'DateTime'>
    readonly rotatedFromId: FieldRef<"PatientSession", 'String'>
    readonly revokedAt: FieldRef<"PatientSession", 'DateTime'>
    readonly lastSeenAt: FieldRef<"PatientSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientSession findUnique
   */
  export type PatientSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    /**
     * Filter, which PatientSession to fetch.
     */
    where: PatientSessionWhereUniqueInput
  }

  /**
   * PatientSession findUniqueOrThrow
   */
  export type PatientSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    /**
     * Filter, which PatientSession to fetch.
     */
    where: PatientSessionWhereUniqueInput
  }

  /**
   * PatientSession findFirst
   */
  export type PatientSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    /**
     * Filter, which PatientSession to fetch.
     */
    where?: PatientSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientSessions to fetch.
     */
    orderBy?: PatientSessionOrderByWithRelationInput | PatientSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientSessions.
     */
    cursor?: PatientSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientSessions.
     */
    distinct?: PatientSessionScalarFieldEnum | PatientSessionScalarFieldEnum[]
  }

  /**
   * PatientSession findFirstOrThrow
   */
  export type PatientSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    /**
     * Filter, which PatientSession to fetch.
     */
    where?: PatientSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientSessions to fetch.
     */
    orderBy?: PatientSessionOrderByWithRelationInput | PatientSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientSessions.
     */
    cursor?: PatientSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientSessions.
     */
    distinct?: PatientSessionScalarFieldEnum | PatientSessionScalarFieldEnum[]
  }

  /**
   * PatientSession findMany
   */
  export type PatientSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    /**
     * Filter, which PatientSessions to fetch.
     */
    where?: PatientSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientSessions to fetch.
     */
    orderBy?: PatientSessionOrderByWithRelationInput | PatientSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientSessions.
     */
    cursor?: PatientSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientSessions.
     */
    skip?: number
    distinct?: PatientSessionScalarFieldEnum | PatientSessionScalarFieldEnum[]
  }

  /**
   * PatientSession create
   */
  export type PatientSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientSession.
     */
    data: XOR<PatientSessionCreateInput, PatientSessionUncheckedCreateInput>
  }

  /**
   * PatientSession createMany
   */
  export type PatientSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientSessions.
     */
    data: PatientSessionCreateManyInput | PatientSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientSession createManyAndReturn
   */
  export type PatientSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * The data used to create many PatientSessions.
     */
    data: PatientSessionCreateManyInput | PatientSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientSession update
   */
  export type PatientSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientSession.
     */
    data: XOR<PatientSessionUpdateInput, PatientSessionUncheckedUpdateInput>
    /**
     * Choose, which PatientSession to update.
     */
    where: PatientSessionWhereUniqueInput
  }

  /**
   * PatientSession updateMany
   */
  export type PatientSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientSessions.
     */
    data: XOR<PatientSessionUpdateManyMutationInput, PatientSessionUncheckedUpdateManyInput>
    /**
     * Filter which PatientSessions to update
     */
    where?: PatientSessionWhereInput
    /**
     * Limit how many PatientSessions to update.
     */
    limit?: number
  }

  /**
   * PatientSession updateManyAndReturn
   */
  export type PatientSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * The data used to update PatientSessions.
     */
    data: XOR<PatientSessionUpdateManyMutationInput, PatientSessionUncheckedUpdateManyInput>
    /**
     * Filter which PatientSessions to update
     */
    where?: PatientSessionWhereInput
    /**
     * Limit how many PatientSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientSession upsert
   */
  export type PatientSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientSession to update in case it exists.
     */
    where: PatientSessionWhereUniqueInput
    /**
     * In case the PatientSession found by the `where` argument doesn't exist, create a new PatientSession with this data.
     */
    create: XOR<PatientSessionCreateInput, PatientSessionUncheckedCreateInput>
    /**
     * In case the PatientSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientSessionUpdateInput, PatientSessionUncheckedUpdateInput>
  }

  /**
   * PatientSession delete
   */
  export type PatientSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    /**
     * Filter which PatientSession to delete.
     */
    where: PatientSessionWhereUniqueInput
  }

  /**
   * PatientSession deleteMany
   */
  export type PatientSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientSessions to delete
     */
    where?: PatientSessionWhereInput
    /**
     * Limit how many PatientSessions to delete.
     */
    limit?: number
  }

  /**
   * PatientSession.rotatedFrom
   */
  export type PatientSession$rotatedFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    where?: PatientSessionWhereInput
  }

  /**
   * PatientSession.rotatedTo
   */
  export type PatientSession$rotatedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
    where?: PatientSessionWhereInput
    orderBy?: PatientSessionOrderByWithRelationInput | PatientSessionOrderByWithRelationInput[]
    cursor?: PatientSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientSessionScalarFieldEnum | PatientSessionScalarFieldEnum[]
  }

  /**
   * PatientSession without action
   */
  export type PatientSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientSession
     */
    select?: PatientSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientSession
     */
    omit?: PatientSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientSessionInclude<ExtArgs> | null
  }


  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationAvgAggregateOutputType = {
    doseCountPerIntake: number | null
  }

  export type MedicationSumAggregateOutputType = {
    doseCountPerIntake: number | null
  }

  export type MedicationMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    name: string | null
    dosage: string | null
    doseCountPerIntake: number | null
    notes: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    name: string | null
    dosage: string | null
    doseCountPerIntake: number | null
    notes: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    patientId: number
    name: number
    dosage: number
    doseCountPerIntake: number
    notes: number
    startDate: number
    endDate: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type MedicationAvgAggregateInputType = {
    doseCountPerIntake?: true
  }

  export type MedicationSumAggregateInputType = {
    doseCountPerIntake?: true
  }

  export type MedicationMinAggregateInputType = {
    id?: true
    patientId?: true
    name?: true
    dosage?: true
    doseCountPerIntake?: true
    notes?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    patientId?: true
    name?: true
    dosage?: true
    doseCountPerIntake?: true
    notes?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    patientId?: true
    name?: true
    dosage?: true
    doseCountPerIntake?: true
    notes?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _avg?: MedicationAvgAggregateInputType
    _sum?: MedicationSumAggregateInputType
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: string
    patientId: string
    name: string
    dosage: string
    doseCountPerIntake: number
    notes: string | null
    startDate: Date
    endDate: Date | null
    isActive: boolean
    createdAt: Date
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    name?: boolean
    dosage?: boolean
    doseCountPerIntake?: boolean
    notes?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    schedules?: boolean | Medication$schedulesArgs<ExtArgs>
    inventory?: boolean | Medication$inventoryArgs<ExtArgs>
    doseInstances?: boolean | Medication$doseInstancesArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    name?: boolean
    dosage?: boolean
    doseCountPerIntake?: boolean
    notes?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    name?: boolean
    dosage?: boolean
    doseCountPerIntake?: boolean
    notes?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    patientId?: boolean
    name?: boolean
    dosage?: boolean
    doseCountPerIntake?: boolean
    notes?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "name" | "dosage" | "doseCountPerIntake" | "notes" | "startDate" | "endDate" | "isActive" | "createdAt", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    schedules?: boolean | Medication$schedulesArgs<ExtArgs>
    inventory?: boolean | Medication$inventoryArgs<ExtArgs>
    doseInstances?: boolean | Medication$doseInstancesArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
      inventory: Prisma.$InventoryPayload<ExtArgs> | null
      doseInstances: Prisma.$DoseInstancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      name: string
      dosage: string
      doseCountPerIntake: number
      notes: string | null
      startDate: Date
      endDate: Date | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications and returns the data updated in the database.
     * @param {MedicationUpdateManyAndReturnArgs} args - Arguments to update many Medications.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends Medication$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Medication$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends Medication$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Medication$inventoryArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doseInstances<T extends Medication$doseInstancesArgs<ExtArgs> = {}>(args?: Subset<T, Medication$doseInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medication model
   */
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'String'>
    readonly patientId: FieldRef<"Medication", 'String'>
    readonly name: FieldRef<"Medication", 'String'>
    readonly dosage: FieldRef<"Medication", 'String'>
    readonly doseCountPerIntake: FieldRef<"Medication", 'Int'>
    readonly notes: FieldRef<"Medication", 'String'>
    readonly startDate: FieldRef<"Medication", 'DateTime'>
    readonly endDate: FieldRef<"Medication", 'DateTime'>
    readonly isActive: FieldRef<"Medication", 'Boolean'>
    readonly createdAt: FieldRef<"Medication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication updateManyAndReturn
   */
  export type MedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication.schedules
   */
  export type Medication$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Medication.inventory
   */
  export type Medication$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
  }

  /**
   * Medication.doseInstances
   */
  export type Medication$doseInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    where?: DoseInstanceWhereInput
    orderBy?: DoseInstanceOrderByWithRelationInput | DoseInstanceOrderByWithRelationInput[]
    cursor?: DoseInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoseInstanceScalarFieldEnum | DoseInstanceScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    timesPerDay: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    timesPerDay: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    medicationId: string | null
    timesPerDay: number | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    medicationId: string | null
    timesPerDay: number | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    medicationId: number
    timesPerDay: number
    timeSlots: number
    startDate: number
    endDate: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    timesPerDay?: true
  }

  export type ScheduleSumAggregateInputType = {
    timesPerDay?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    medicationId?: true
    timesPerDay?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    medicationId?: true
    timesPerDay?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    medicationId?: true
    timesPerDay?: true
    timeSlots?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    medicationId: string
    timesPerDay: number
    timeSlots: Date[]
    startDate: Date
    endDate: Date | null
    isActive: boolean
    createdAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    timesPerDay?: boolean
    timeSlots?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    doseInstances?: boolean | Schedule$doseInstancesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    timesPerDay?: boolean
    timeSlots?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    timesPerDay?: boolean
    timeSlots?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    medicationId?: boolean
    timesPerDay?: boolean
    timeSlots?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicationId" | "timesPerDay" | "timeSlots" | "startDate" | "endDate" | "isActive" | "createdAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    doseInstances?: boolean | Schedule$doseInstancesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      medication: Prisma.$MedicationPayload<ExtArgs>
      doseInstances: Prisma.$DoseInstancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medicationId: string
      timesPerDay: number
      timeSlots: Date[]
      startDate: Date
      endDate: Date | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doseInstances<T extends Schedule$doseInstancesArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$doseInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly medicationId: FieldRef<"Schedule", 'String'>
    readonly timesPerDay: FieldRef<"Schedule", 'Int'>
    readonly timeSlots: FieldRef<"Schedule", 'DateTime[]'>
    readonly startDate: FieldRef<"Schedule", 'DateTime'>
    readonly endDate: FieldRef<"Schedule", 'DateTime'>
    readonly isActive: FieldRef<"Schedule", 'Boolean'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.doseInstances
   */
  export type Schedule$doseInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    where?: DoseInstanceWhereInput
    orderBy?: DoseInstanceOrderByWithRelationInput | DoseInstanceOrderByWithRelationInput[]
    cursor?: DoseInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoseInstanceScalarFieldEnum | DoseInstanceScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model DoseInstance
   */

  export type AggregateDoseInstance = {
    _count: DoseInstanceCountAggregateOutputType | null
    _min: DoseInstanceMinAggregateOutputType | null
    _max: DoseInstanceMaxAggregateOutputType | null
  }

  export type DoseInstanceMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    scheduleId: string | null
    medicationId: string | null
    scheduledFor: Date | null
    status: $Enums.DoseStatus | null
    createdAt: Date | null
  }

  export type DoseInstanceMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    scheduleId: string | null
    medicationId: string | null
    scheduledFor: Date | null
    status: $Enums.DoseStatus | null
    createdAt: Date | null
  }

  export type DoseInstanceCountAggregateOutputType = {
    id: number
    patientId: number
    scheduleId: number
    medicationId: number
    scheduledFor: number
    status: number
    createdAt: number
    _all: number
  }


  export type DoseInstanceMinAggregateInputType = {
    id?: true
    patientId?: true
    scheduleId?: true
    medicationId?: true
    scheduledFor?: true
    status?: true
    createdAt?: true
  }

  export type DoseInstanceMaxAggregateInputType = {
    id?: true
    patientId?: true
    scheduleId?: true
    medicationId?: true
    scheduledFor?: true
    status?: true
    createdAt?: true
  }

  export type DoseInstanceCountAggregateInputType = {
    id?: true
    patientId?: true
    scheduleId?: true
    medicationId?: true
    scheduledFor?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type DoseInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoseInstance to aggregate.
     */
    where?: DoseInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseInstances to fetch.
     */
    orderBy?: DoseInstanceOrderByWithRelationInput | DoseInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoseInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoseInstances
    **/
    _count?: true | DoseInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoseInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoseInstanceMaxAggregateInputType
  }

  export type GetDoseInstanceAggregateType<T extends DoseInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateDoseInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoseInstance[P]>
      : GetScalarType<T[P], AggregateDoseInstance[P]>
  }




  export type DoseInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoseInstanceWhereInput
    orderBy?: DoseInstanceOrderByWithAggregationInput | DoseInstanceOrderByWithAggregationInput[]
    by: DoseInstanceScalarFieldEnum[] | DoseInstanceScalarFieldEnum
    having?: DoseInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoseInstanceCountAggregateInputType | true
    _min?: DoseInstanceMinAggregateInputType
    _max?: DoseInstanceMaxAggregateInputType
  }

  export type DoseInstanceGroupByOutputType = {
    id: string
    patientId: string
    scheduleId: string
    medicationId: string
    scheduledFor: Date
    status: $Enums.DoseStatus
    createdAt: Date
    _count: DoseInstanceCountAggregateOutputType | null
    _min: DoseInstanceMinAggregateOutputType | null
    _max: DoseInstanceMaxAggregateOutputType | null
  }

  type GetDoseInstanceGroupByPayload<T extends DoseInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoseInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoseInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoseInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], DoseInstanceGroupByOutputType[P]>
        }
      >
    >


  export type DoseInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    scheduleId?: boolean
    medicationId?: boolean
    scheduledFor?: boolean
    status?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    adherenceLogs?: boolean | DoseInstance$adherenceLogsArgs<ExtArgs>
    _count?: boolean | DoseInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doseInstance"]>

  export type DoseInstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    scheduleId?: boolean
    medicationId?: boolean
    scheduledFor?: boolean
    status?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doseInstance"]>

  export type DoseInstanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    scheduleId?: boolean
    medicationId?: boolean
    scheduledFor?: boolean
    status?: boolean
    createdAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doseInstance"]>

  export type DoseInstanceSelectScalar = {
    id?: boolean
    patientId?: boolean
    scheduleId?: boolean
    medicationId?: boolean
    scheduledFor?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type DoseInstanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "scheduleId" | "medicationId" | "scheduledFor" | "status" | "createdAt", ExtArgs["result"]["doseInstance"]>
  export type DoseInstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    adherenceLogs?: boolean | DoseInstance$adherenceLogsArgs<ExtArgs>
    _count?: boolean | DoseInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoseInstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type DoseInstanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $DoseInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoseInstance"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      schedule: Prisma.$SchedulePayload<ExtArgs>
      medication: Prisma.$MedicationPayload<ExtArgs>
      adherenceLogs: Prisma.$AdherenceLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      scheduleId: string
      medicationId: string
      scheduledFor: Date
      status: $Enums.DoseStatus
      createdAt: Date
    }, ExtArgs["result"]["doseInstance"]>
    composites: {}
  }

  type DoseInstanceGetPayload<S extends boolean | null | undefined | DoseInstanceDefaultArgs> = $Result.GetResult<Prisma.$DoseInstancePayload, S>

  type DoseInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoseInstanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoseInstanceCountAggregateInputType | true
    }

  export interface DoseInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoseInstance'], meta: { name: 'DoseInstance' } }
    /**
     * Find zero or one DoseInstance that matches the filter.
     * @param {DoseInstanceFindUniqueArgs} args - Arguments to find a DoseInstance
     * @example
     * // Get one DoseInstance
     * const doseInstance = await prisma.doseInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoseInstanceFindUniqueArgs>(args: SelectSubset<T, DoseInstanceFindUniqueArgs<ExtArgs>>): Prisma__DoseInstanceClient<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoseInstance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoseInstanceFindUniqueOrThrowArgs} args - Arguments to find a DoseInstance
     * @example
     * // Get one DoseInstance
     * const doseInstance = await prisma.doseInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoseInstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, DoseInstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoseInstanceClient<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoseInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseInstanceFindFirstArgs} args - Arguments to find a DoseInstance
     * @example
     * // Get one DoseInstance
     * const doseInstance = await prisma.doseInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoseInstanceFindFirstArgs>(args?: SelectSubset<T, DoseInstanceFindFirstArgs<ExtArgs>>): Prisma__DoseInstanceClient<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoseInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseInstanceFindFirstOrThrowArgs} args - Arguments to find a DoseInstance
     * @example
     * // Get one DoseInstance
     * const doseInstance = await prisma.doseInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoseInstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, DoseInstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoseInstanceClient<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoseInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoseInstances
     * const doseInstances = await prisma.doseInstance.findMany()
     * 
     * // Get first 10 DoseInstances
     * const doseInstances = await prisma.doseInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doseInstanceWithIdOnly = await prisma.doseInstance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoseInstanceFindManyArgs>(args?: SelectSubset<T, DoseInstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoseInstance.
     * @param {DoseInstanceCreateArgs} args - Arguments to create a DoseInstance.
     * @example
     * // Create one DoseInstance
     * const DoseInstance = await prisma.doseInstance.create({
     *   data: {
     *     // ... data to create a DoseInstance
     *   }
     * })
     * 
     */
    create<T extends DoseInstanceCreateArgs>(args: SelectSubset<T, DoseInstanceCreateArgs<ExtArgs>>): Prisma__DoseInstanceClient<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoseInstances.
     * @param {DoseInstanceCreateManyArgs} args - Arguments to create many DoseInstances.
     * @example
     * // Create many DoseInstances
     * const doseInstance = await prisma.doseInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoseInstanceCreateManyArgs>(args?: SelectSubset<T, DoseInstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoseInstances and returns the data saved in the database.
     * @param {DoseInstanceCreateManyAndReturnArgs} args - Arguments to create many DoseInstances.
     * @example
     * // Create many DoseInstances
     * const doseInstance = await prisma.doseInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoseInstances and only return the `id`
     * const doseInstanceWithIdOnly = await prisma.doseInstance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoseInstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, DoseInstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoseInstance.
     * @param {DoseInstanceDeleteArgs} args - Arguments to delete one DoseInstance.
     * @example
     * // Delete one DoseInstance
     * const DoseInstance = await prisma.doseInstance.delete({
     *   where: {
     *     // ... filter to delete one DoseInstance
     *   }
     * })
     * 
     */
    delete<T extends DoseInstanceDeleteArgs>(args: SelectSubset<T, DoseInstanceDeleteArgs<ExtArgs>>): Prisma__DoseInstanceClient<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoseInstance.
     * @param {DoseInstanceUpdateArgs} args - Arguments to update one DoseInstance.
     * @example
     * // Update one DoseInstance
     * const doseInstance = await prisma.doseInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoseInstanceUpdateArgs>(args: SelectSubset<T, DoseInstanceUpdateArgs<ExtArgs>>): Prisma__DoseInstanceClient<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoseInstances.
     * @param {DoseInstanceDeleteManyArgs} args - Arguments to filter DoseInstances to delete.
     * @example
     * // Delete a few DoseInstances
     * const { count } = await prisma.doseInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoseInstanceDeleteManyArgs>(args?: SelectSubset<T, DoseInstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoseInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoseInstances
     * const doseInstance = await prisma.doseInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoseInstanceUpdateManyArgs>(args: SelectSubset<T, DoseInstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoseInstances and returns the data updated in the database.
     * @param {DoseInstanceUpdateManyAndReturnArgs} args - Arguments to update many DoseInstances.
     * @example
     * // Update many DoseInstances
     * const doseInstance = await prisma.doseInstance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoseInstances and only return the `id`
     * const doseInstanceWithIdOnly = await prisma.doseInstance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoseInstanceUpdateManyAndReturnArgs>(args: SelectSubset<T, DoseInstanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoseInstance.
     * @param {DoseInstanceUpsertArgs} args - Arguments to update or create a DoseInstance.
     * @example
     * // Update or create a DoseInstance
     * const doseInstance = await prisma.doseInstance.upsert({
     *   create: {
     *     // ... data to create a DoseInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoseInstance we want to update
     *   }
     * })
     */
    upsert<T extends DoseInstanceUpsertArgs>(args: SelectSubset<T, DoseInstanceUpsertArgs<ExtArgs>>): Prisma__DoseInstanceClient<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoseInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseInstanceCountArgs} args - Arguments to filter DoseInstances to count.
     * @example
     * // Count the number of DoseInstances
     * const count = await prisma.doseInstance.count({
     *   where: {
     *     // ... the filter for the DoseInstances we want to count
     *   }
     * })
    **/
    count<T extends DoseInstanceCountArgs>(
      args?: Subset<T, DoseInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoseInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoseInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoseInstanceAggregateArgs>(args: Subset<T, DoseInstanceAggregateArgs>): Prisma.PrismaPromise<GetDoseInstanceAggregateType<T>>

    /**
     * Group by DoseInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoseInstanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoseInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoseInstanceGroupByArgs['orderBy'] }
        : { orderBy?: DoseInstanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoseInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoseInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoseInstance model
   */
  readonly fields: DoseInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoseInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoseInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adherenceLogs<T extends DoseInstance$adherenceLogsArgs<ExtArgs> = {}>(args?: Subset<T, DoseInstance$adherenceLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoseInstance model
   */
  interface DoseInstanceFieldRefs {
    readonly id: FieldRef<"DoseInstance", 'String'>
    readonly patientId: FieldRef<"DoseInstance", 'String'>
    readonly scheduleId: FieldRef<"DoseInstance", 'String'>
    readonly medicationId: FieldRef<"DoseInstance", 'String'>
    readonly scheduledFor: FieldRef<"DoseInstance", 'DateTime'>
    readonly status: FieldRef<"DoseInstance", 'DoseStatus'>
    readonly createdAt: FieldRef<"DoseInstance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoseInstance findUnique
   */
  export type DoseInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    /**
     * Filter, which DoseInstance to fetch.
     */
    where: DoseInstanceWhereUniqueInput
  }

  /**
   * DoseInstance findUniqueOrThrow
   */
  export type DoseInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    /**
     * Filter, which DoseInstance to fetch.
     */
    where: DoseInstanceWhereUniqueInput
  }

  /**
   * DoseInstance findFirst
   */
  export type DoseInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    /**
     * Filter, which DoseInstance to fetch.
     */
    where?: DoseInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseInstances to fetch.
     */
    orderBy?: DoseInstanceOrderByWithRelationInput | DoseInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoseInstances.
     */
    cursor?: DoseInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoseInstances.
     */
    distinct?: DoseInstanceScalarFieldEnum | DoseInstanceScalarFieldEnum[]
  }

  /**
   * DoseInstance findFirstOrThrow
   */
  export type DoseInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    /**
     * Filter, which DoseInstance to fetch.
     */
    where?: DoseInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseInstances to fetch.
     */
    orderBy?: DoseInstanceOrderByWithRelationInput | DoseInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoseInstances.
     */
    cursor?: DoseInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoseInstances.
     */
    distinct?: DoseInstanceScalarFieldEnum | DoseInstanceScalarFieldEnum[]
  }

  /**
   * DoseInstance findMany
   */
  export type DoseInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    /**
     * Filter, which DoseInstances to fetch.
     */
    where?: DoseInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoseInstances to fetch.
     */
    orderBy?: DoseInstanceOrderByWithRelationInput | DoseInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoseInstances.
     */
    cursor?: DoseInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoseInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoseInstances.
     */
    skip?: number
    distinct?: DoseInstanceScalarFieldEnum | DoseInstanceScalarFieldEnum[]
  }

  /**
   * DoseInstance create
   */
  export type DoseInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a DoseInstance.
     */
    data: XOR<DoseInstanceCreateInput, DoseInstanceUncheckedCreateInput>
  }

  /**
   * DoseInstance createMany
   */
  export type DoseInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoseInstances.
     */
    data: DoseInstanceCreateManyInput | DoseInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoseInstance createManyAndReturn
   */
  export type DoseInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * The data used to create many DoseInstances.
     */
    data: DoseInstanceCreateManyInput | DoseInstanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoseInstance update
   */
  export type DoseInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a DoseInstance.
     */
    data: XOR<DoseInstanceUpdateInput, DoseInstanceUncheckedUpdateInput>
    /**
     * Choose, which DoseInstance to update.
     */
    where: DoseInstanceWhereUniqueInput
  }

  /**
   * DoseInstance updateMany
   */
  export type DoseInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoseInstances.
     */
    data: XOR<DoseInstanceUpdateManyMutationInput, DoseInstanceUncheckedUpdateManyInput>
    /**
     * Filter which DoseInstances to update
     */
    where?: DoseInstanceWhereInput
    /**
     * Limit how many DoseInstances to update.
     */
    limit?: number
  }

  /**
   * DoseInstance updateManyAndReturn
   */
  export type DoseInstanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * The data used to update DoseInstances.
     */
    data: XOR<DoseInstanceUpdateManyMutationInput, DoseInstanceUncheckedUpdateManyInput>
    /**
     * Filter which DoseInstances to update
     */
    where?: DoseInstanceWhereInput
    /**
     * Limit how many DoseInstances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoseInstance upsert
   */
  export type DoseInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the DoseInstance to update in case it exists.
     */
    where: DoseInstanceWhereUniqueInput
    /**
     * In case the DoseInstance found by the `where` argument doesn't exist, create a new DoseInstance with this data.
     */
    create: XOR<DoseInstanceCreateInput, DoseInstanceUncheckedCreateInput>
    /**
     * In case the DoseInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoseInstanceUpdateInput, DoseInstanceUncheckedUpdateInput>
  }

  /**
   * DoseInstance delete
   */
  export type DoseInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
    /**
     * Filter which DoseInstance to delete.
     */
    where: DoseInstanceWhereUniqueInput
  }

  /**
   * DoseInstance deleteMany
   */
  export type DoseInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoseInstances to delete
     */
    where?: DoseInstanceWhereInput
    /**
     * Limit how many DoseInstances to delete.
     */
    limit?: number
  }

  /**
   * DoseInstance.adherenceLogs
   */
  export type DoseInstance$adherenceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
    where?: AdherenceLogWhereInput
    orderBy?: AdherenceLogOrderByWithRelationInput | AdherenceLogOrderByWithRelationInput[]
    cursor?: AdherenceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdherenceLogScalarFieldEnum | AdherenceLogScalarFieldEnum[]
  }

  /**
   * DoseInstance without action
   */
  export type DoseInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoseInstance
     */
    select?: DoseInstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoseInstance
     */
    omit?: DoseInstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoseInstanceInclude<ExtArgs> | null
  }


  /**
   * Model AdherenceLog
   */

  export type AggregateAdherenceLog = {
    _count: AdherenceLogCountAggregateOutputType | null
    _min: AdherenceLogMinAggregateOutputType | null
    _max: AdherenceLogMaxAggregateOutputType | null
  }

  export type AdherenceLogMinAggregateOutputType = {
    id: string | null
    doseInstanceId: string | null
    patientId: string | null
    action: $Enums.AdherenceAction | null
    takenAt: Date | null
    source: $Enums.AdherenceSource | null
    clientUuid: string | null
    createdAt: Date | null
  }

  export type AdherenceLogMaxAggregateOutputType = {
    id: string | null
    doseInstanceId: string | null
    patientId: string | null
    action: $Enums.AdherenceAction | null
    takenAt: Date | null
    source: $Enums.AdherenceSource | null
    clientUuid: string | null
    createdAt: Date | null
  }

  export type AdherenceLogCountAggregateOutputType = {
    id: number
    doseInstanceId: number
    patientId: number
    action: number
    takenAt: number
    source: number
    clientUuid: number
    createdAt: number
    _all: number
  }


  export type AdherenceLogMinAggregateInputType = {
    id?: true
    doseInstanceId?: true
    patientId?: true
    action?: true
    takenAt?: true
    source?: true
    clientUuid?: true
    createdAt?: true
  }

  export type AdherenceLogMaxAggregateInputType = {
    id?: true
    doseInstanceId?: true
    patientId?: true
    action?: true
    takenAt?: true
    source?: true
    clientUuid?: true
    createdAt?: true
  }

  export type AdherenceLogCountAggregateInputType = {
    id?: true
    doseInstanceId?: true
    patientId?: true
    action?: true
    takenAt?: true
    source?: true
    clientUuid?: true
    createdAt?: true
    _all?: true
  }

  export type AdherenceLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdherenceLog to aggregate.
     */
    where?: AdherenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdherenceLogs to fetch.
     */
    orderBy?: AdherenceLogOrderByWithRelationInput | AdherenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdherenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdherenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdherenceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdherenceLogs
    **/
    _count?: true | AdherenceLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdherenceLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdherenceLogMaxAggregateInputType
  }

  export type GetAdherenceLogAggregateType<T extends AdherenceLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAdherenceLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdherenceLog[P]>
      : GetScalarType<T[P], AggregateAdherenceLog[P]>
  }




  export type AdherenceLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdherenceLogWhereInput
    orderBy?: AdherenceLogOrderByWithAggregationInput | AdherenceLogOrderByWithAggregationInput[]
    by: AdherenceLogScalarFieldEnum[] | AdherenceLogScalarFieldEnum
    having?: AdherenceLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdherenceLogCountAggregateInputType | true
    _min?: AdherenceLogMinAggregateInputType
    _max?: AdherenceLogMaxAggregateInputType
  }

  export type AdherenceLogGroupByOutputType = {
    id: string
    doseInstanceId: string
    patientId: string
    action: $Enums.AdherenceAction
    takenAt: Date
    source: $Enums.AdherenceSource
    clientUuid: string
    createdAt: Date
    _count: AdherenceLogCountAggregateOutputType | null
    _min: AdherenceLogMinAggregateOutputType | null
    _max: AdherenceLogMaxAggregateOutputType | null
  }

  type GetAdherenceLogGroupByPayload<T extends AdherenceLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdherenceLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdherenceLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdherenceLogGroupByOutputType[P]>
            : GetScalarType<T[P], AdherenceLogGroupByOutputType[P]>
        }
      >
    >


  export type AdherenceLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doseInstanceId?: boolean
    patientId?: boolean
    action?: boolean
    takenAt?: boolean
    source?: boolean
    clientUuid?: boolean
    createdAt?: boolean
    doseInstance?: boolean | DoseInstanceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adherenceLog"]>

  export type AdherenceLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doseInstanceId?: boolean
    patientId?: boolean
    action?: boolean
    takenAt?: boolean
    source?: boolean
    clientUuid?: boolean
    createdAt?: boolean
    doseInstance?: boolean | DoseInstanceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adherenceLog"]>

  export type AdherenceLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doseInstanceId?: boolean
    patientId?: boolean
    action?: boolean
    takenAt?: boolean
    source?: boolean
    clientUuid?: boolean
    createdAt?: boolean
    doseInstance?: boolean | DoseInstanceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adherenceLog"]>

  export type AdherenceLogSelectScalar = {
    id?: boolean
    doseInstanceId?: boolean
    patientId?: boolean
    action?: boolean
    takenAt?: boolean
    source?: boolean
    clientUuid?: boolean
    createdAt?: boolean
  }

  export type AdherenceLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doseInstanceId" | "patientId" | "action" | "takenAt" | "source" | "clientUuid" | "createdAt", ExtArgs["result"]["adherenceLog"]>
  export type AdherenceLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doseInstance?: boolean | DoseInstanceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type AdherenceLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doseInstance?: boolean | DoseInstanceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type AdherenceLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doseInstance?: boolean | DoseInstanceDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $AdherenceLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdherenceLog"
    objects: {
      doseInstance: Prisma.$DoseInstancePayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doseInstanceId: string
      patientId: string
      action: $Enums.AdherenceAction
      takenAt: Date
      source: $Enums.AdherenceSource
      clientUuid: string
      createdAt: Date
    }, ExtArgs["result"]["adherenceLog"]>
    composites: {}
  }

  type AdherenceLogGetPayload<S extends boolean | null | undefined | AdherenceLogDefaultArgs> = $Result.GetResult<Prisma.$AdherenceLogPayload, S>

  type AdherenceLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdherenceLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdherenceLogCountAggregateInputType | true
    }

  export interface AdherenceLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdherenceLog'], meta: { name: 'AdherenceLog' } }
    /**
     * Find zero or one AdherenceLog that matches the filter.
     * @param {AdherenceLogFindUniqueArgs} args - Arguments to find a AdherenceLog
     * @example
     * // Get one AdherenceLog
     * const adherenceLog = await prisma.adherenceLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdherenceLogFindUniqueArgs>(args: SelectSubset<T, AdherenceLogFindUniqueArgs<ExtArgs>>): Prisma__AdherenceLogClient<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdherenceLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdherenceLogFindUniqueOrThrowArgs} args - Arguments to find a AdherenceLog
     * @example
     * // Get one AdherenceLog
     * const adherenceLog = await prisma.adherenceLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdherenceLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AdherenceLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdherenceLogClient<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdherenceLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherenceLogFindFirstArgs} args - Arguments to find a AdherenceLog
     * @example
     * // Get one AdherenceLog
     * const adherenceLog = await prisma.adherenceLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdherenceLogFindFirstArgs>(args?: SelectSubset<T, AdherenceLogFindFirstArgs<ExtArgs>>): Prisma__AdherenceLogClient<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdherenceLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherenceLogFindFirstOrThrowArgs} args - Arguments to find a AdherenceLog
     * @example
     * // Get one AdherenceLog
     * const adherenceLog = await prisma.adherenceLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdherenceLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AdherenceLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdherenceLogClient<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdherenceLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherenceLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdherenceLogs
     * const adherenceLogs = await prisma.adherenceLog.findMany()
     * 
     * // Get first 10 AdherenceLogs
     * const adherenceLogs = await prisma.adherenceLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adherenceLogWithIdOnly = await prisma.adherenceLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdherenceLogFindManyArgs>(args?: SelectSubset<T, AdherenceLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdherenceLog.
     * @param {AdherenceLogCreateArgs} args - Arguments to create a AdherenceLog.
     * @example
     * // Create one AdherenceLog
     * const AdherenceLog = await prisma.adherenceLog.create({
     *   data: {
     *     // ... data to create a AdherenceLog
     *   }
     * })
     * 
     */
    create<T extends AdherenceLogCreateArgs>(args: SelectSubset<T, AdherenceLogCreateArgs<ExtArgs>>): Prisma__AdherenceLogClient<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdherenceLogs.
     * @param {AdherenceLogCreateManyArgs} args - Arguments to create many AdherenceLogs.
     * @example
     * // Create many AdherenceLogs
     * const adherenceLog = await prisma.adherenceLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdherenceLogCreateManyArgs>(args?: SelectSubset<T, AdherenceLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdherenceLogs and returns the data saved in the database.
     * @param {AdherenceLogCreateManyAndReturnArgs} args - Arguments to create many AdherenceLogs.
     * @example
     * // Create many AdherenceLogs
     * const adherenceLog = await prisma.adherenceLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdherenceLogs and only return the `id`
     * const adherenceLogWithIdOnly = await prisma.adherenceLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdherenceLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AdherenceLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdherenceLog.
     * @param {AdherenceLogDeleteArgs} args - Arguments to delete one AdherenceLog.
     * @example
     * // Delete one AdherenceLog
     * const AdherenceLog = await prisma.adherenceLog.delete({
     *   where: {
     *     // ... filter to delete one AdherenceLog
     *   }
     * })
     * 
     */
    delete<T extends AdherenceLogDeleteArgs>(args: SelectSubset<T, AdherenceLogDeleteArgs<ExtArgs>>): Prisma__AdherenceLogClient<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdherenceLog.
     * @param {AdherenceLogUpdateArgs} args - Arguments to update one AdherenceLog.
     * @example
     * // Update one AdherenceLog
     * const adherenceLog = await prisma.adherenceLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdherenceLogUpdateArgs>(args: SelectSubset<T, AdherenceLogUpdateArgs<ExtArgs>>): Prisma__AdherenceLogClient<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdherenceLogs.
     * @param {AdherenceLogDeleteManyArgs} args - Arguments to filter AdherenceLogs to delete.
     * @example
     * // Delete a few AdherenceLogs
     * const { count } = await prisma.adherenceLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdherenceLogDeleteManyArgs>(args?: SelectSubset<T, AdherenceLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdherenceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherenceLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdherenceLogs
     * const adherenceLog = await prisma.adherenceLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdherenceLogUpdateManyArgs>(args: SelectSubset<T, AdherenceLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdherenceLogs and returns the data updated in the database.
     * @param {AdherenceLogUpdateManyAndReturnArgs} args - Arguments to update many AdherenceLogs.
     * @example
     * // Update many AdherenceLogs
     * const adherenceLog = await prisma.adherenceLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdherenceLogs and only return the `id`
     * const adherenceLogWithIdOnly = await prisma.adherenceLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdherenceLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AdherenceLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdherenceLog.
     * @param {AdherenceLogUpsertArgs} args - Arguments to update or create a AdherenceLog.
     * @example
     * // Update or create a AdherenceLog
     * const adherenceLog = await prisma.adherenceLog.upsert({
     *   create: {
     *     // ... data to create a AdherenceLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdherenceLog we want to update
     *   }
     * })
     */
    upsert<T extends AdherenceLogUpsertArgs>(args: SelectSubset<T, AdherenceLogUpsertArgs<ExtArgs>>): Prisma__AdherenceLogClient<$Result.GetResult<Prisma.$AdherenceLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdherenceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherenceLogCountArgs} args - Arguments to filter AdherenceLogs to count.
     * @example
     * // Count the number of AdherenceLogs
     * const count = await prisma.adherenceLog.count({
     *   where: {
     *     // ... the filter for the AdherenceLogs we want to count
     *   }
     * })
    **/
    count<T extends AdherenceLogCountArgs>(
      args?: Subset<T, AdherenceLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdherenceLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdherenceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherenceLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdherenceLogAggregateArgs>(args: Subset<T, AdherenceLogAggregateArgs>): Prisma.PrismaPromise<GetAdherenceLogAggregateType<T>>

    /**
     * Group by AdherenceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherenceLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdherenceLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdherenceLogGroupByArgs['orderBy'] }
        : { orderBy?: AdherenceLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdherenceLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdherenceLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdherenceLog model
   */
  readonly fields: AdherenceLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdherenceLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdherenceLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doseInstance<T extends DoseInstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoseInstanceDefaultArgs<ExtArgs>>): Prisma__DoseInstanceClient<$Result.GetResult<Prisma.$DoseInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdherenceLog model
   */
  interface AdherenceLogFieldRefs {
    readonly id: FieldRef<"AdherenceLog", 'String'>
    readonly doseInstanceId: FieldRef<"AdherenceLog", 'String'>
    readonly patientId: FieldRef<"AdherenceLog", 'String'>
    readonly action: FieldRef<"AdherenceLog", 'AdherenceAction'>
    readonly takenAt: FieldRef<"AdherenceLog", 'DateTime'>
    readonly source: FieldRef<"AdherenceLog", 'AdherenceSource'>
    readonly clientUuid: FieldRef<"AdherenceLog", 'String'>
    readonly createdAt: FieldRef<"AdherenceLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdherenceLog findUnique
   */
  export type AdherenceLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
    /**
     * Filter, which AdherenceLog to fetch.
     */
    where: AdherenceLogWhereUniqueInput
  }

  /**
   * AdherenceLog findUniqueOrThrow
   */
  export type AdherenceLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
    /**
     * Filter, which AdherenceLog to fetch.
     */
    where: AdherenceLogWhereUniqueInput
  }

  /**
   * AdherenceLog findFirst
   */
  export type AdherenceLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
    /**
     * Filter, which AdherenceLog to fetch.
     */
    where?: AdherenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdherenceLogs to fetch.
     */
    orderBy?: AdherenceLogOrderByWithRelationInput | AdherenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdherenceLogs.
     */
    cursor?: AdherenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdherenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdherenceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdherenceLogs.
     */
    distinct?: AdherenceLogScalarFieldEnum | AdherenceLogScalarFieldEnum[]
  }

  /**
   * AdherenceLog findFirstOrThrow
   */
  export type AdherenceLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
    /**
     * Filter, which AdherenceLog to fetch.
     */
    where?: AdherenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdherenceLogs to fetch.
     */
    orderBy?: AdherenceLogOrderByWithRelationInput | AdherenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdherenceLogs.
     */
    cursor?: AdherenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdherenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdherenceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdherenceLogs.
     */
    distinct?: AdherenceLogScalarFieldEnum | AdherenceLogScalarFieldEnum[]
  }

  /**
   * AdherenceLog findMany
   */
  export type AdherenceLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
    /**
     * Filter, which AdherenceLogs to fetch.
     */
    where?: AdherenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdherenceLogs to fetch.
     */
    orderBy?: AdherenceLogOrderByWithRelationInput | AdherenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdherenceLogs.
     */
    cursor?: AdherenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdherenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdherenceLogs.
     */
    skip?: number
    distinct?: AdherenceLogScalarFieldEnum | AdherenceLogScalarFieldEnum[]
  }

  /**
   * AdherenceLog create
   */
  export type AdherenceLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AdherenceLog.
     */
    data: XOR<AdherenceLogCreateInput, AdherenceLogUncheckedCreateInput>
  }

  /**
   * AdherenceLog createMany
   */
  export type AdherenceLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdherenceLogs.
     */
    data: AdherenceLogCreateManyInput | AdherenceLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdherenceLog createManyAndReturn
   */
  export type AdherenceLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * The data used to create many AdherenceLogs.
     */
    data: AdherenceLogCreateManyInput | AdherenceLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdherenceLog update
   */
  export type AdherenceLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AdherenceLog.
     */
    data: XOR<AdherenceLogUpdateInput, AdherenceLogUncheckedUpdateInput>
    /**
     * Choose, which AdherenceLog to update.
     */
    where: AdherenceLogWhereUniqueInput
  }

  /**
   * AdherenceLog updateMany
   */
  export type AdherenceLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdherenceLogs.
     */
    data: XOR<AdherenceLogUpdateManyMutationInput, AdherenceLogUncheckedUpdateManyInput>
    /**
     * Filter which AdherenceLogs to update
     */
    where?: AdherenceLogWhereInput
    /**
     * Limit how many AdherenceLogs to update.
     */
    limit?: number
  }

  /**
   * AdherenceLog updateManyAndReturn
   */
  export type AdherenceLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * The data used to update AdherenceLogs.
     */
    data: XOR<AdherenceLogUpdateManyMutationInput, AdherenceLogUncheckedUpdateManyInput>
    /**
     * Filter which AdherenceLogs to update
     */
    where?: AdherenceLogWhereInput
    /**
     * Limit how many AdherenceLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdherenceLog upsert
   */
  export type AdherenceLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AdherenceLog to update in case it exists.
     */
    where: AdherenceLogWhereUniqueInput
    /**
     * In case the AdherenceLog found by the `where` argument doesn't exist, create a new AdherenceLog with this data.
     */
    create: XOR<AdherenceLogCreateInput, AdherenceLogUncheckedCreateInput>
    /**
     * In case the AdherenceLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdherenceLogUpdateInput, AdherenceLogUncheckedUpdateInput>
  }

  /**
   * AdherenceLog delete
   */
  export type AdherenceLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
    /**
     * Filter which AdherenceLog to delete.
     */
    where: AdherenceLogWhereUniqueInput
  }

  /**
   * AdherenceLog deleteMany
   */
  export type AdherenceLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdherenceLogs to delete
     */
    where?: AdherenceLogWhereInput
    /**
     * Limit how many AdherenceLogs to delete.
     */
    limit?: number
  }

  /**
   * AdherenceLog without action
   */
  export type AdherenceLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdherenceLog
     */
    select?: AdherenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdherenceLog
     */
    omit?: AdherenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdherenceLogInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    remainingCount: number | null
    warningThresholdDays: number | null
  }

  export type InventorySumAggregateOutputType = {
    remainingCount: number | null
    warningThresholdDays: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    medicationId: string | null
    remainingCount: number | null
    warningThresholdDays: number | null
    lastAdjustedAt: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    medicationId: string | null
    remainingCount: number | null
    warningThresholdDays: number | null
    lastAdjustedAt: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    medicationId: number
    remainingCount: number
    warningThresholdDays: number
    lastAdjustedAt: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    remainingCount?: true
    warningThresholdDays?: true
  }

  export type InventorySumAggregateInputType = {
    remainingCount?: true
    warningThresholdDays?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    medicationId?: true
    remainingCount?: true
    warningThresholdDays?: true
    lastAdjustedAt?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    medicationId?: true
    remainingCount?: true
    warningThresholdDays?: true
    lastAdjustedAt?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    medicationId?: true
    remainingCount?: true
    warningThresholdDays?: true
    lastAdjustedAt?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    medicationId: string
    remainingCount: number
    warningThresholdDays: number
    lastAdjustedAt: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    remainingCount?: boolean
    warningThresholdDays?: boolean
    lastAdjustedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    adjustments?: boolean | Inventory$adjustmentsArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    remainingCount?: boolean
    warningThresholdDays?: boolean
    lastAdjustedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    remainingCount?: boolean
    warningThresholdDays?: boolean
    lastAdjustedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    medicationId?: boolean
    remainingCount?: boolean
    warningThresholdDays?: boolean
    lastAdjustedAt?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicationId" | "remainingCount" | "warningThresholdDays" | "lastAdjustedAt", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    adjustments?: boolean | Inventory$adjustmentsArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      medication: Prisma.$MedicationPayload<ExtArgs>
      adjustments: Prisma.$InventoryAdjustmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medicationId: string
      remainingCount: number
      warningThresholdDays: number
      lastAdjustedAt: Date
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adjustments<T extends Inventory$adjustmentsArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$adjustmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly medicationId: FieldRef<"Inventory", 'String'>
    readonly remainingCount: FieldRef<"Inventory", 'Int'>
    readonly warningThresholdDays: FieldRef<"Inventory", 'Int'>
    readonly lastAdjustedAt: FieldRef<"Inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory.adjustments
   */
  export type Inventory$adjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    where?: InventoryAdjustmentWhereInput
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    cursor?: InventoryAdjustmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model InventoryAdjustment
   */

  export type AggregateInventoryAdjustment = {
    _count: InventoryAdjustmentCountAggregateOutputType | null
    _avg: InventoryAdjustmentAvgAggregateOutputType | null
    _sum: InventoryAdjustmentSumAggregateOutputType | null
    _min: InventoryAdjustmentMinAggregateOutputType | null
    _max: InventoryAdjustmentMaxAggregateOutputType | null
  }

  export type InventoryAdjustmentAvgAggregateOutputType = {
    delta: number | null
  }

  export type InventoryAdjustmentSumAggregateOutputType = {
    delta: number | null
  }

  export type InventoryAdjustmentMinAggregateOutputType = {
    id: string | null
    inventoryId: string | null
    delta: number | null
    reason: $Enums.InventoryAdjustmentReason | null
    note: string | null
    createdAt: Date | null
  }

  export type InventoryAdjustmentMaxAggregateOutputType = {
    id: string | null
    inventoryId: string | null
    delta: number | null
    reason: $Enums.InventoryAdjustmentReason | null
    note: string | null
    createdAt: Date | null
  }

  export type InventoryAdjustmentCountAggregateOutputType = {
    id: number
    inventoryId: number
    delta: number
    reason: number
    note: number
    createdAt: number
    _all: number
  }


  export type InventoryAdjustmentAvgAggregateInputType = {
    delta?: true
  }

  export type InventoryAdjustmentSumAggregateInputType = {
    delta?: true
  }

  export type InventoryAdjustmentMinAggregateInputType = {
    id?: true
    inventoryId?: true
    delta?: true
    reason?: true
    note?: true
    createdAt?: true
  }

  export type InventoryAdjustmentMaxAggregateInputType = {
    id?: true
    inventoryId?: true
    delta?: true
    reason?: true
    note?: true
    createdAt?: true
  }

  export type InventoryAdjustmentCountAggregateInputType = {
    id?: true
    inventoryId?: true
    delta?: true
    reason?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryAdjustmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryAdjustment to aggregate.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryAdjustments
    **/
    _count?: true | InventoryAdjustmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAdjustmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryAdjustmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryAdjustmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryAdjustmentMaxAggregateInputType
  }

  export type GetInventoryAdjustmentAggregateType<T extends InventoryAdjustmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryAdjustment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryAdjustment[P]>
      : GetScalarType<T[P], AggregateInventoryAdjustment[P]>
  }




  export type InventoryAdjustmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryAdjustmentWhereInput
    orderBy?: InventoryAdjustmentOrderByWithAggregationInput | InventoryAdjustmentOrderByWithAggregationInput[]
    by: InventoryAdjustmentScalarFieldEnum[] | InventoryAdjustmentScalarFieldEnum
    having?: InventoryAdjustmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryAdjustmentCountAggregateInputType | true
    _avg?: InventoryAdjustmentAvgAggregateInputType
    _sum?: InventoryAdjustmentSumAggregateInputType
    _min?: InventoryAdjustmentMinAggregateInputType
    _max?: InventoryAdjustmentMaxAggregateInputType
  }

  export type InventoryAdjustmentGroupByOutputType = {
    id: string
    inventoryId: string
    delta: number
    reason: $Enums.InventoryAdjustmentReason
    note: string | null
    createdAt: Date
    _count: InventoryAdjustmentCountAggregateOutputType | null
    _avg: InventoryAdjustmentAvgAggregateOutputType | null
    _sum: InventoryAdjustmentSumAggregateOutputType | null
    _min: InventoryAdjustmentMinAggregateOutputType | null
    _max: InventoryAdjustmentMaxAggregateOutputType | null
  }

  type GetInventoryAdjustmentGroupByPayload<T extends InventoryAdjustmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryAdjustmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryAdjustmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryAdjustmentGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryAdjustmentGroupByOutputType[P]>
        }
      >
    >


  export type InventoryAdjustmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    delta?: boolean
    reason?: boolean
    note?: boolean
    createdAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryAdjustment"]>

  export type InventoryAdjustmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    delta?: boolean
    reason?: boolean
    note?: boolean
    createdAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryAdjustment"]>

  export type InventoryAdjustmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    delta?: boolean
    reason?: boolean
    note?: boolean
    createdAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryAdjustment"]>

  export type InventoryAdjustmentSelectScalar = {
    id?: boolean
    inventoryId?: boolean
    delta?: boolean
    reason?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type InventoryAdjustmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inventoryId" | "delta" | "reason" | "note" | "createdAt", ExtArgs["result"]["inventoryAdjustment"]>
  export type InventoryAdjustmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }
  export type InventoryAdjustmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }
  export type InventoryAdjustmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }

  export type $InventoryAdjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryAdjustment"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inventoryId: string
      delta: number
      reason: $Enums.InventoryAdjustmentReason
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["inventoryAdjustment"]>
    composites: {}
  }

  type InventoryAdjustmentGetPayload<S extends boolean | null | undefined | InventoryAdjustmentDefaultArgs> = $Result.GetResult<Prisma.$InventoryAdjustmentPayload, S>

  type InventoryAdjustmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryAdjustmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryAdjustmentCountAggregateInputType | true
    }

  export interface InventoryAdjustmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryAdjustment'], meta: { name: 'InventoryAdjustment' } }
    /**
     * Find zero or one InventoryAdjustment that matches the filter.
     * @param {InventoryAdjustmentFindUniqueArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryAdjustmentFindUniqueArgs>(args: SelectSubset<T, InventoryAdjustmentFindUniqueArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryAdjustment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryAdjustmentFindUniqueOrThrowArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryAdjustmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryAdjustmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryAdjustment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentFindFirstArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryAdjustmentFindFirstArgs>(args?: SelectSubset<T, InventoryAdjustmentFindFirstArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryAdjustment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentFindFirstOrThrowArgs} args - Arguments to find a InventoryAdjustment
     * @example
     * // Get one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryAdjustmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryAdjustmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryAdjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryAdjustments
     * const inventoryAdjustments = await prisma.inventoryAdjustment.findMany()
     * 
     * // Get first 10 InventoryAdjustments
     * const inventoryAdjustments = await prisma.inventoryAdjustment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryAdjustmentWithIdOnly = await prisma.inventoryAdjustment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryAdjustmentFindManyArgs>(args?: SelectSubset<T, InventoryAdjustmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryAdjustment.
     * @param {InventoryAdjustmentCreateArgs} args - Arguments to create a InventoryAdjustment.
     * @example
     * // Create one InventoryAdjustment
     * const InventoryAdjustment = await prisma.inventoryAdjustment.create({
     *   data: {
     *     // ... data to create a InventoryAdjustment
     *   }
     * })
     * 
     */
    create<T extends InventoryAdjustmentCreateArgs>(args: SelectSubset<T, InventoryAdjustmentCreateArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryAdjustments.
     * @param {InventoryAdjustmentCreateManyArgs} args - Arguments to create many InventoryAdjustments.
     * @example
     * // Create many InventoryAdjustments
     * const inventoryAdjustment = await prisma.inventoryAdjustment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryAdjustmentCreateManyArgs>(args?: SelectSubset<T, InventoryAdjustmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryAdjustments and returns the data saved in the database.
     * @param {InventoryAdjustmentCreateManyAndReturnArgs} args - Arguments to create many InventoryAdjustments.
     * @example
     * // Create many InventoryAdjustments
     * const inventoryAdjustment = await prisma.inventoryAdjustment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryAdjustments and only return the `id`
     * const inventoryAdjustmentWithIdOnly = await prisma.inventoryAdjustment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryAdjustmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryAdjustmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryAdjustment.
     * @param {InventoryAdjustmentDeleteArgs} args - Arguments to delete one InventoryAdjustment.
     * @example
     * // Delete one InventoryAdjustment
     * const InventoryAdjustment = await prisma.inventoryAdjustment.delete({
     *   where: {
     *     // ... filter to delete one InventoryAdjustment
     *   }
     * })
     * 
     */
    delete<T extends InventoryAdjustmentDeleteArgs>(args: SelectSubset<T, InventoryAdjustmentDeleteArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryAdjustment.
     * @param {InventoryAdjustmentUpdateArgs} args - Arguments to update one InventoryAdjustment.
     * @example
     * // Update one InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryAdjustmentUpdateArgs>(args: SelectSubset<T, InventoryAdjustmentUpdateArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryAdjustments.
     * @param {InventoryAdjustmentDeleteManyArgs} args - Arguments to filter InventoryAdjustments to delete.
     * @example
     * // Delete a few InventoryAdjustments
     * const { count } = await prisma.inventoryAdjustment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryAdjustmentDeleteManyArgs>(args?: SelectSubset<T, InventoryAdjustmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryAdjustments
     * const inventoryAdjustment = await prisma.inventoryAdjustment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryAdjustmentUpdateManyArgs>(args: SelectSubset<T, InventoryAdjustmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryAdjustments and returns the data updated in the database.
     * @param {InventoryAdjustmentUpdateManyAndReturnArgs} args - Arguments to update many InventoryAdjustments.
     * @example
     * // Update many InventoryAdjustments
     * const inventoryAdjustment = await prisma.inventoryAdjustment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryAdjustments and only return the `id`
     * const inventoryAdjustmentWithIdOnly = await prisma.inventoryAdjustment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryAdjustmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryAdjustmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryAdjustment.
     * @param {InventoryAdjustmentUpsertArgs} args - Arguments to update or create a InventoryAdjustment.
     * @example
     * // Update or create a InventoryAdjustment
     * const inventoryAdjustment = await prisma.inventoryAdjustment.upsert({
     *   create: {
     *     // ... data to create a InventoryAdjustment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryAdjustment we want to update
     *   }
     * })
     */
    upsert<T extends InventoryAdjustmentUpsertArgs>(args: SelectSubset<T, InventoryAdjustmentUpsertArgs<ExtArgs>>): Prisma__InventoryAdjustmentClient<$Result.GetResult<Prisma.$InventoryAdjustmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentCountArgs} args - Arguments to filter InventoryAdjustments to count.
     * @example
     * // Count the number of InventoryAdjustments
     * const count = await prisma.inventoryAdjustment.count({
     *   where: {
     *     // ... the filter for the InventoryAdjustments we want to count
     *   }
     * })
    **/
    count<T extends InventoryAdjustmentCountArgs>(
      args?: Subset<T, InventoryAdjustmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryAdjustmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAdjustmentAggregateArgs>(args: Subset<T, InventoryAdjustmentAggregateArgs>): Prisma.PrismaPromise<GetInventoryAdjustmentAggregateType<T>>

    /**
     * Group by InventoryAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAdjustmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryAdjustmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryAdjustmentGroupByArgs['orderBy'] }
        : { orderBy?: InventoryAdjustmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryAdjustmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryAdjustment model
   */
  readonly fields: InventoryAdjustmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryAdjustment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryAdjustmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends InventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDefaultArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryAdjustment model
   */
  interface InventoryAdjustmentFieldRefs {
    readonly id: FieldRef<"InventoryAdjustment", 'String'>
    readonly inventoryId: FieldRef<"InventoryAdjustment", 'String'>
    readonly delta: FieldRef<"InventoryAdjustment", 'Int'>
    readonly reason: FieldRef<"InventoryAdjustment", 'InventoryAdjustmentReason'>
    readonly note: FieldRef<"InventoryAdjustment", 'String'>
    readonly createdAt: FieldRef<"InventoryAdjustment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryAdjustment findUnique
   */
  export type InventoryAdjustmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment findUniqueOrThrow
   */
  export type InventoryAdjustmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment findFirst
   */
  export type InventoryAdjustmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryAdjustments.
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryAdjustments.
     */
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * InventoryAdjustment findFirstOrThrow
   */
  export type InventoryAdjustmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustment to fetch.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryAdjustments.
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryAdjustments.
     */
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * InventoryAdjustment findMany
   */
  export type InventoryAdjustmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which InventoryAdjustments to fetch.
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryAdjustments to fetch.
     */
    orderBy?: InventoryAdjustmentOrderByWithRelationInput | InventoryAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryAdjustments.
     */
    cursor?: InventoryAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryAdjustments.
     */
    skip?: number
    distinct?: InventoryAdjustmentScalarFieldEnum | InventoryAdjustmentScalarFieldEnum[]
  }

  /**
   * InventoryAdjustment create
   */
  export type InventoryAdjustmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryAdjustment.
     */
    data: XOR<InventoryAdjustmentCreateInput, InventoryAdjustmentUncheckedCreateInput>
  }

  /**
   * InventoryAdjustment createMany
   */
  export type InventoryAdjustmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryAdjustments.
     */
    data: InventoryAdjustmentCreateManyInput | InventoryAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryAdjustment createManyAndReturn
   */
  export type InventoryAdjustmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryAdjustments.
     */
    data: InventoryAdjustmentCreateManyInput | InventoryAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryAdjustment update
   */
  export type InventoryAdjustmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryAdjustment.
     */
    data: XOR<InventoryAdjustmentUpdateInput, InventoryAdjustmentUncheckedUpdateInput>
    /**
     * Choose, which InventoryAdjustment to update.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment updateMany
   */
  export type InventoryAdjustmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryAdjustments.
     */
    data: XOR<InventoryAdjustmentUpdateManyMutationInput, InventoryAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which InventoryAdjustments to update
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * Limit how many InventoryAdjustments to update.
     */
    limit?: number
  }

  /**
   * InventoryAdjustment updateManyAndReturn
   */
  export type InventoryAdjustmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * The data used to update InventoryAdjustments.
     */
    data: XOR<InventoryAdjustmentUpdateManyMutationInput, InventoryAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which InventoryAdjustments to update
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * Limit how many InventoryAdjustments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryAdjustment upsert
   */
  export type InventoryAdjustmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryAdjustment to update in case it exists.
     */
    where: InventoryAdjustmentWhereUniqueInput
    /**
     * In case the InventoryAdjustment found by the `where` argument doesn't exist, create a new InventoryAdjustment with this data.
     */
    create: XOR<InventoryAdjustmentCreateInput, InventoryAdjustmentUncheckedCreateInput>
    /**
     * In case the InventoryAdjustment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryAdjustmentUpdateInput, InventoryAdjustmentUncheckedUpdateInput>
  }

  /**
   * InventoryAdjustment delete
   */
  export type InventoryAdjustmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
    /**
     * Filter which InventoryAdjustment to delete.
     */
    where: InventoryAdjustmentWhereUniqueInput
  }

  /**
   * InventoryAdjustment deleteMany
   */
  export type InventoryAdjustmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryAdjustments to delete
     */
    where?: InventoryAdjustmentWhereInput
    /**
     * Limit how many InventoryAdjustments to delete.
     */
    limit?: number
  }

  /**
   * InventoryAdjustment without action
   */
  export type InventoryAdjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryAdjustment
     */
    select?: InventoryAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryAdjustment
     */
    omit?: InventoryAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryAdjustmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const CaregiverScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    displayName: 'displayName',
    createdAt: 'createdAt'
  };

  export type CaregiverScalarFieldEnum = (typeof CaregiverScalarFieldEnum)[keyof typeof CaregiverScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    caregiverId: 'caregiverId',
    displayName: 'displayName',
    timezone: 'timezone',
    createdAt: 'createdAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const LinkCodeScalarFieldEnum: {
    id: 'id',
    caregiverId: 'caregiverId',
    patientId: 'patientId',
    code: 'code',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
  };

  export type LinkCodeScalarFieldEnum = (typeof LinkCodeScalarFieldEnum)[keyof typeof LinkCodeScalarFieldEnum]


  export const PatientSessionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    tokenHash: 'tokenHash',
    issuedAt: 'issuedAt',
    expiresAt: 'expiresAt',
    rotatedFromId: 'rotatedFromId',
    revokedAt: 'revokedAt',
    lastSeenAt: 'lastSeenAt'
  };

  export type PatientSessionScalarFieldEnum = (typeof PatientSessionScalarFieldEnum)[keyof typeof PatientSessionScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    name: 'name',
    dosage: 'dosage',
    doseCountPerIntake: 'doseCountPerIntake',
    notes: 'notes',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    medicationId: 'medicationId',
    timesPerDay: 'timesPerDay',
    timeSlots: 'timeSlots',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const DoseInstanceScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    scheduleId: 'scheduleId',
    medicationId: 'medicationId',
    scheduledFor: 'scheduledFor',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type DoseInstanceScalarFieldEnum = (typeof DoseInstanceScalarFieldEnum)[keyof typeof DoseInstanceScalarFieldEnum]


  export const AdherenceLogScalarFieldEnum: {
    id: 'id',
    doseInstanceId: 'doseInstanceId',
    patientId: 'patientId',
    action: 'action',
    takenAt: 'takenAt',
    source: 'source',
    clientUuid: 'clientUuid',
    createdAt: 'createdAt'
  };

  export type AdherenceLogScalarFieldEnum = (typeof AdherenceLogScalarFieldEnum)[keyof typeof AdherenceLogScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    medicationId: 'medicationId',
    remainingCount: 'remainingCount',
    warningThresholdDays: 'warningThresholdDays',
    lastAdjustedAt: 'lastAdjustedAt'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InventoryAdjustmentScalarFieldEnum: {
    id: 'id',
    inventoryId: 'inventoryId',
    delta: 'delta',
    reason: 'reason',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type InventoryAdjustmentScalarFieldEnum = (typeof InventoryAdjustmentScalarFieldEnum)[keyof typeof InventoryAdjustmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ProfileRole'
   */
  export type EnumProfileRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProfileRole'>
    


  /**
   * Reference to a field of type 'ProfileRole[]'
   */
  export type ListEnumProfileRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProfileRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DoseStatus'
   */
  export type EnumDoseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoseStatus'>
    


  /**
   * Reference to a field of type 'DoseStatus[]'
   */
  export type ListEnumDoseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoseStatus[]'>
    


  /**
   * Reference to a field of type 'AdherenceAction'
   */
  export type EnumAdherenceActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdherenceAction'>
    


  /**
   * Reference to a field of type 'AdherenceAction[]'
   */
  export type ListEnumAdherenceActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdherenceAction[]'>
    


  /**
   * Reference to a field of type 'AdherenceSource'
   */
  export type EnumAdherenceSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdherenceSource'>
    


  /**
   * Reference to a field of type 'AdherenceSource[]'
   */
  export type ListEnumAdherenceSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdherenceSource[]'>
    


  /**
   * Reference to a field of type 'InventoryAdjustmentReason'
   */
  export type EnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryAdjustmentReason'>
    


  /**
   * Reference to a field of type 'InventoryAdjustmentReason[]'
   */
  export type ListEnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryAdjustmentReason[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: UuidFilter<"Profile"> | string
    role?: EnumProfileRoleFilter<"Profile"> | $Enums.ProfileRole
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    caregiver?: XOR<CaregiverNullableScalarRelationFilter, CaregiverWhereInput> | null
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    caregiver?: CaregiverOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    role?: EnumProfileRoleFilter<"Profile"> | $Enums.ProfileRole
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    caregiver?: XOR<CaregiverNullableScalarRelationFilter, CaregiverWhereInput> | null
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Profile"> | string
    role?: EnumProfileRoleWithAggregatesFilter<"Profile"> | $Enums.ProfileRole
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type CaregiverWhereInput = {
    AND?: CaregiverWhereInput | CaregiverWhereInput[]
    OR?: CaregiverWhereInput[]
    NOT?: CaregiverWhereInput | CaregiverWhereInput[]
    id?: UuidFilter<"Caregiver"> | string
    profileId?: UuidFilter<"Caregiver"> | string
    displayName?: StringFilter<"Caregiver"> | string
    createdAt?: DateTimeFilter<"Caregiver"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    patients?: PatientListRelationFilter
    linkCodes?: LinkCodeListRelationFilter
  }

  export type CaregiverOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    patients?: PatientOrderByRelationAggregateInput
    linkCodes?: LinkCodeOrderByRelationAggregateInput
  }

  export type CaregiverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId?: string
    AND?: CaregiverWhereInput | CaregiverWhereInput[]
    OR?: CaregiverWhereInput[]
    NOT?: CaregiverWhereInput | CaregiverWhereInput[]
    displayName?: StringFilter<"Caregiver"> | string
    createdAt?: DateTimeFilter<"Caregiver"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    patients?: PatientListRelationFilter
    linkCodes?: LinkCodeListRelationFilter
  }, "id" | "profileId">

  export type CaregiverOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    _count?: CaregiverCountOrderByAggregateInput
    _max?: CaregiverMaxOrderByAggregateInput
    _min?: CaregiverMinOrderByAggregateInput
  }

  export type CaregiverScalarWhereWithAggregatesInput = {
    AND?: CaregiverScalarWhereWithAggregatesInput | CaregiverScalarWhereWithAggregatesInput[]
    OR?: CaregiverScalarWhereWithAggregatesInput[]
    NOT?: CaregiverScalarWhereWithAggregatesInput | CaregiverScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Caregiver"> | string
    profileId?: UuidWithAggregatesFilter<"Caregiver"> | string
    displayName?: StringWithAggregatesFilter<"Caregiver"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Caregiver"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: UuidFilter<"Patient"> | string
    caregiverId?: UuidFilter<"Patient"> | string
    displayName?: StringFilter<"Patient"> | string
    timezone?: StringFilter<"Patient"> | string
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    caregiver?: XOR<CaregiverScalarRelationFilter, CaregiverWhereInput>
    medications?: MedicationListRelationFilter
    sessions?: PatientSessionListRelationFilter
    doseInstances?: DoseInstanceListRelationFilter
    adherenceLogs?: AdherenceLogListRelationFilter
    linkCodes?: LinkCodeListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    displayName?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    caregiver?: CaregiverOrderByWithRelationInput
    medications?: MedicationOrderByRelationAggregateInput
    sessions?: PatientSessionOrderByRelationAggregateInput
    doseInstances?: DoseInstanceOrderByRelationAggregateInput
    adherenceLogs?: AdherenceLogOrderByRelationAggregateInput
    linkCodes?: LinkCodeOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    caregiverId?: UuidFilter<"Patient"> | string
    displayName?: StringFilter<"Patient"> | string
    timezone?: StringFilter<"Patient"> | string
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    caregiver?: XOR<CaregiverScalarRelationFilter, CaregiverWhereInput>
    medications?: MedicationListRelationFilter
    sessions?: PatientSessionListRelationFilter
    doseInstances?: DoseInstanceListRelationFilter
    adherenceLogs?: AdherenceLogListRelationFilter
    linkCodes?: LinkCodeListRelationFilter
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    displayName?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Patient"> | string
    caregiverId?: UuidWithAggregatesFilter<"Patient"> | string
    displayName?: StringWithAggregatesFilter<"Patient"> | string
    timezone?: StringWithAggregatesFilter<"Patient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type LinkCodeWhereInput = {
    AND?: LinkCodeWhereInput | LinkCodeWhereInput[]
    OR?: LinkCodeWhereInput[]
    NOT?: LinkCodeWhereInput | LinkCodeWhereInput[]
    id?: UuidFilter<"LinkCode"> | string
    caregiverId?: UuidFilter<"LinkCode"> | string
    patientId?: UuidNullableFilter<"LinkCode"> | string | null
    code?: StringFilter<"LinkCode"> | string
    expiresAt?: DateTimeFilter<"LinkCode"> | Date | string
    usedAt?: DateTimeNullableFilter<"LinkCode"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"LinkCode"> | Date | string | null
    createdAt?: DateTimeFilter<"LinkCode"> | Date | string
    caregiver?: XOR<CaregiverScalarRelationFilter, CaregiverWhereInput>
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }

  export type LinkCodeOrderByWithRelationInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    patientId?: SortOrderInput | SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    caregiver?: CaregiverOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type LinkCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkCodeWhereInput | LinkCodeWhereInput[]
    OR?: LinkCodeWhereInput[]
    NOT?: LinkCodeWhereInput | LinkCodeWhereInput[]
    caregiverId?: UuidFilter<"LinkCode"> | string
    patientId?: UuidNullableFilter<"LinkCode"> | string | null
    code?: StringFilter<"LinkCode"> | string
    expiresAt?: DateTimeFilter<"LinkCode"> | Date | string
    usedAt?: DateTimeNullableFilter<"LinkCode"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"LinkCode"> | Date | string | null
    createdAt?: DateTimeFilter<"LinkCode"> | Date | string
    caregiver?: XOR<CaregiverScalarRelationFilter, CaregiverWhereInput>
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }, "id">

  export type LinkCodeOrderByWithAggregationInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    patientId?: SortOrderInput | SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LinkCodeCountOrderByAggregateInput
    _max?: LinkCodeMaxOrderByAggregateInput
    _min?: LinkCodeMinOrderByAggregateInput
  }

  export type LinkCodeScalarWhereWithAggregatesInput = {
    AND?: LinkCodeScalarWhereWithAggregatesInput | LinkCodeScalarWhereWithAggregatesInput[]
    OR?: LinkCodeScalarWhereWithAggregatesInput[]
    NOT?: LinkCodeScalarWhereWithAggregatesInput | LinkCodeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LinkCode"> | string
    caregiverId?: UuidWithAggregatesFilter<"LinkCode"> | string
    patientId?: UuidNullableWithAggregatesFilter<"LinkCode"> | string | null
    code?: StringWithAggregatesFilter<"LinkCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"LinkCode"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"LinkCode"> | Date | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"LinkCode"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LinkCode"> | Date | string
  }

  export type PatientSessionWhereInput = {
    AND?: PatientSessionWhereInput | PatientSessionWhereInput[]
    OR?: PatientSessionWhereInput[]
    NOT?: PatientSessionWhereInput | PatientSessionWhereInput[]
    id?: UuidFilter<"PatientSession"> | string
    patientId?: UuidFilter<"PatientSession"> | string
    tokenHash?: StringFilter<"PatientSession"> | string
    issuedAt?: DateTimeFilter<"PatientSession"> | Date | string
    expiresAt?: DateTimeFilter<"PatientSession"> | Date | string
    rotatedFromId?: UuidNullableFilter<"PatientSession"> | string | null
    revokedAt?: DateTimeNullableFilter<"PatientSession"> | Date | string | null
    lastSeenAt?: DateTimeNullableFilter<"PatientSession"> | Date | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    rotatedFrom?: XOR<PatientSessionNullableScalarRelationFilter, PatientSessionWhereInput> | null
    rotatedTo?: PatientSessionListRelationFilter
  }

  export type PatientSessionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    tokenHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    rotatedFromId?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
    rotatedFrom?: PatientSessionOrderByWithRelationInput
    rotatedTo?: PatientSessionOrderByRelationAggregateInput
  }

  export type PatientSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: PatientSessionWhereInput | PatientSessionWhereInput[]
    OR?: PatientSessionWhereInput[]
    NOT?: PatientSessionWhereInput | PatientSessionWhereInput[]
    patientId?: UuidFilter<"PatientSession"> | string
    issuedAt?: DateTimeFilter<"PatientSession"> | Date | string
    expiresAt?: DateTimeFilter<"PatientSession"> | Date | string
    rotatedFromId?: UuidNullableFilter<"PatientSession"> | string | null
    revokedAt?: DateTimeNullableFilter<"PatientSession"> | Date | string | null
    lastSeenAt?: DateTimeNullableFilter<"PatientSession"> | Date | string | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    rotatedFrom?: XOR<PatientSessionNullableScalarRelationFilter, PatientSessionWhereInput> | null
    rotatedTo?: PatientSessionListRelationFilter
  }, "id" | "tokenHash">

  export type PatientSessionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    tokenHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    rotatedFromId?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    _count?: PatientSessionCountOrderByAggregateInput
    _max?: PatientSessionMaxOrderByAggregateInput
    _min?: PatientSessionMinOrderByAggregateInput
  }

  export type PatientSessionScalarWhereWithAggregatesInput = {
    AND?: PatientSessionScalarWhereWithAggregatesInput | PatientSessionScalarWhereWithAggregatesInput[]
    OR?: PatientSessionScalarWhereWithAggregatesInput[]
    NOT?: PatientSessionScalarWhereWithAggregatesInput | PatientSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PatientSession"> | string
    patientId?: UuidWithAggregatesFilter<"PatientSession"> | string
    tokenHash?: StringWithAggregatesFilter<"PatientSession"> | string
    issuedAt?: DateTimeWithAggregatesFilter<"PatientSession"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"PatientSession"> | Date | string
    rotatedFromId?: UuidNullableWithAggregatesFilter<"PatientSession"> | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"PatientSession"> | Date | string | null
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"PatientSession"> | Date | string | null
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: UuidFilter<"Medication"> | string
    patientId?: UuidFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    doseCountPerIntake?: IntFilter<"Medication"> | number
    notes?: StringNullableFilter<"Medication"> | string | null
    startDate?: DateTimeFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    isActive?: BoolFilter<"Medication"> | boolean
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    schedules?: ScheduleListRelationFilter
    inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null
    doseInstances?: DoseInstanceListRelationFilter
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    doseCountPerIntake?: SortOrder
    notes?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    schedules?: ScheduleOrderByRelationAggregateInput
    inventory?: InventoryOrderByWithRelationInput
    doseInstances?: DoseInstanceOrderByRelationAggregateInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    patientId?: UuidFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    doseCountPerIntake?: IntFilter<"Medication"> | number
    notes?: StringNullableFilter<"Medication"> | string | null
    startDate?: DateTimeFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    isActive?: BoolFilter<"Medication"> | boolean
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    schedules?: ScheduleListRelationFilter
    inventory?: XOR<InventoryNullableScalarRelationFilter, InventoryWhereInput> | null
    doseInstances?: DoseInstanceListRelationFilter
  }, "id">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    doseCountPerIntake?: SortOrder
    notes?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _avg?: MedicationAvgOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
    _sum?: MedicationSumOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Medication"> | string
    patientId?: UuidWithAggregatesFilter<"Medication"> | string
    name?: StringWithAggregatesFilter<"Medication"> | string
    dosage?: StringWithAggregatesFilter<"Medication"> | string
    doseCountPerIntake?: IntWithAggregatesFilter<"Medication"> | number
    notes?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Medication"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Medication"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: UuidFilter<"Schedule"> | string
    medicationId?: UuidFilter<"Schedule"> | string
    timesPerDay?: IntFilter<"Schedule"> | number
    timeSlots?: DateTimeNullableListFilter<"Schedule">
    startDate?: DateTimeFilter<"Schedule"> | Date | string
    endDate?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    isActive?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    doseInstances?: DoseInstanceListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timesPerDay?: SortOrder
    timeSlots?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    medication?: MedicationOrderByWithRelationInput
    doseInstances?: DoseInstanceOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    medicationId?: UuidFilter<"Schedule"> | string
    timesPerDay?: IntFilter<"Schedule"> | number
    timeSlots?: DateTimeNullableListFilter<"Schedule">
    startDate?: DateTimeFilter<"Schedule"> | Date | string
    endDate?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    isActive?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    doseInstances?: DoseInstanceListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timesPerDay?: SortOrder
    timeSlots?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Schedule"> | string
    medicationId?: UuidWithAggregatesFilter<"Schedule"> | string
    timesPerDay?: IntWithAggregatesFilter<"Schedule"> | number
    timeSlots?: DateTimeNullableListFilter<"Schedule">
    startDate?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Schedule"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Schedule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type DoseInstanceWhereInput = {
    AND?: DoseInstanceWhereInput | DoseInstanceWhereInput[]
    OR?: DoseInstanceWhereInput[]
    NOT?: DoseInstanceWhereInput | DoseInstanceWhereInput[]
    id?: UuidFilter<"DoseInstance"> | string
    patientId?: UuidFilter<"DoseInstance"> | string
    scheduleId?: UuidFilter<"DoseInstance"> | string
    medicationId?: UuidFilter<"DoseInstance"> | string
    scheduledFor?: DateTimeFilter<"DoseInstance"> | Date | string
    status?: EnumDoseStatusFilter<"DoseInstance"> | $Enums.DoseStatus
    createdAt?: DateTimeFilter<"DoseInstance"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    adherenceLogs?: AdherenceLogListRelationFilter
  }

  export type DoseInstanceOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    scheduleId?: SortOrder
    medicationId?: SortOrder
    scheduledFor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    schedule?: ScheduleOrderByWithRelationInput
    medication?: MedicationOrderByWithRelationInput
    adherenceLogs?: AdherenceLogOrderByRelationAggregateInput
  }

  export type DoseInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientId_scheduleId_scheduledFor?: DoseInstancePatientIdScheduleIdScheduledForCompoundUniqueInput
    AND?: DoseInstanceWhereInput | DoseInstanceWhereInput[]
    OR?: DoseInstanceWhereInput[]
    NOT?: DoseInstanceWhereInput | DoseInstanceWhereInput[]
    patientId?: UuidFilter<"DoseInstance"> | string
    scheduleId?: UuidFilter<"DoseInstance"> | string
    medicationId?: UuidFilter<"DoseInstance"> | string
    scheduledFor?: DateTimeFilter<"DoseInstance"> | Date | string
    status?: EnumDoseStatusFilter<"DoseInstance"> | $Enums.DoseStatus
    createdAt?: DateTimeFilter<"DoseInstance"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    adherenceLogs?: AdherenceLogListRelationFilter
  }, "id" | "patientId_scheduleId_scheduledFor">

  export type DoseInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    scheduleId?: SortOrder
    medicationId?: SortOrder
    scheduledFor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: DoseInstanceCountOrderByAggregateInput
    _max?: DoseInstanceMaxOrderByAggregateInput
    _min?: DoseInstanceMinOrderByAggregateInput
  }

  export type DoseInstanceScalarWhereWithAggregatesInput = {
    AND?: DoseInstanceScalarWhereWithAggregatesInput | DoseInstanceScalarWhereWithAggregatesInput[]
    OR?: DoseInstanceScalarWhereWithAggregatesInput[]
    NOT?: DoseInstanceScalarWhereWithAggregatesInput | DoseInstanceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DoseInstance"> | string
    patientId?: UuidWithAggregatesFilter<"DoseInstance"> | string
    scheduleId?: UuidWithAggregatesFilter<"DoseInstance"> | string
    medicationId?: UuidWithAggregatesFilter<"DoseInstance"> | string
    scheduledFor?: DateTimeWithAggregatesFilter<"DoseInstance"> | Date | string
    status?: EnumDoseStatusWithAggregatesFilter<"DoseInstance"> | $Enums.DoseStatus
    createdAt?: DateTimeWithAggregatesFilter<"DoseInstance"> | Date | string
  }

  export type AdherenceLogWhereInput = {
    AND?: AdherenceLogWhereInput | AdherenceLogWhereInput[]
    OR?: AdherenceLogWhereInput[]
    NOT?: AdherenceLogWhereInput | AdherenceLogWhereInput[]
    id?: UuidFilter<"AdherenceLog"> | string
    doseInstanceId?: UuidFilter<"AdherenceLog"> | string
    patientId?: UuidFilter<"AdherenceLog"> | string
    action?: EnumAdherenceActionFilter<"AdherenceLog"> | $Enums.AdherenceAction
    takenAt?: DateTimeFilter<"AdherenceLog"> | Date | string
    source?: EnumAdherenceSourceFilter<"AdherenceLog"> | $Enums.AdherenceSource
    clientUuid?: UuidFilter<"AdherenceLog"> | string
    createdAt?: DateTimeFilter<"AdherenceLog"> | Date | string
    doseInstance?: XOR<DoseInstanceScalarRelationFilter, DoseInstanceWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type AdherenceLogOrderByWithRelationInput = {
    id?: SortOrder
    doseInstanceId?: SortOrder
    patientId?: SortOrder
    action?: SortOrder
    takenAt?: SortOrder
    source?: SortOrder
    clientUuid?: SortOrder
    createdAt?: SortOrder
    doseInstance?: DoseInstanceOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type AdherenceLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientId_clientUuid?: AdherenceLogPatientIdClientUuidCompoundUniqueInput
    AND?: AdherenceLogWhereInput | AdherenceLogWhereInput[]
    OR?: AdherenceLogWhereInput[]
    NOT?: AdherenceLogWhereInput | AdherenceLogWhereInput[]
    doseInstanceId?: UuidFilter<"AdherenceLog"> | string
    patientId?: UuidFilter<"AdherenceLog"> | string
    action?: EnumAdherenceActionFilter<"AdherenceLog"> | $Enums.AdherenceAction
    takenAt?: DateTimeFilter<"AdherenceLog"> | Date | string
    source?: EnumAdherenceSourceFilter<"AdherenceLog"> | $Enums.AdherenceSource
    clientUuid?: UuidFilter<"AdherenceLog"> | string
    createdAt?: DateTimeFilter<"AdherenceLog"> | Date | string
    doseInstance?: XOR<DoseInstanceScalarRelationFilter, DoseInstanceWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id" | "patientId_clientUuid">

  export type AdherenceLogOrderByWithAggregationInput = {
    id?: SortOrder
    doseInstanceId?: SortOrder
    patientId?: SortOrder
    action?: SortOrder
    takenAt?: SortOrder
    source?: SortOrder
    clientUuid?: SortOrder
    createdAt?: SortOrder
    _count?: AdherenceLogCountOrderByAggregateInput
    _max?: AdherenceLogMaxOrderByAggregateInput
    _min?: AdherenceLogMinOrderByAggregateInput
  }

  export type AdherenceLogScalarWhereWithAggregatesInput = {
    AND?: AdherenceLogScalarWhereWithAggregatesInput | AdherenceLogScalarWhereWithAggregatesInput[]
    OR?: AdherenceLogScalarWhereWithAggregatesInput[]
    NOT?: AdherenceLogScalarWhereWithAggregatesInput | AdherenceLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AdherenceLog"> | string
    doseInstanceId?: UuidWithAggregatesFilter<"AdherenceLog"> | string
    patientId?: UuidWithAggregatesFilter<"AdherenceLog"> | string
    action?: EnumAdherenceActionWithAggregatesFilter<"AdherenceLog"> | $Enums.AdherenceAction
    takenAt?: DateTimeWithAggregatesFilter<"AdherenceLog"> | Date | string
    source?: EnumAdherenceSourceWithAggregatesFilter<"AdherenceLog"> | $Enums.AdherenceSource
    clientUuid?: UuidWithAggregatesFilter<"AdherenceLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdherenceLog"> | Date | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: UuidFilter<"Inventory"> | string
    medicationId?: UuidFilter<"Inventory"> | string
    remainingCount?: IntFilter<"Inventory"> | number
    warningThresholdDays?: IntFilter<"Inventory"> | number
    lastAdjustedAt?: DateTimeFilter<"Inventory"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    adjustments?: InventoryAdjustmentListRelationFilter
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    remainingCount?: SortOrder
    warningThresholdDays?: SortOrder
    lastAdjustedAt?: SortOrder
    medication?: MedicationOrderByWithRelationInput
    adjustments?: InventoryAdjustmentOrderByRelationAggregateInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    medicationId?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    remainingCount?: IntFilter<"Inventory"> | number
    warningThresholdDays?: IntFilter<"Inventory"> | number
    lastAdjustedAt?: DateTimeFilter<"Inventory"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    adjustments?: InventoryAdjustmentListRelationFilter
  }, "id" | "medicationId">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    remainingCount?: SortOrder
    warningThresholdDays?: SortOrder
    lastAdjustedAt?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Inventory"> | string
    medicationId?: UuidWithAggregatesFilter<"Inventory"> | string
    remainingCount?: IntWithAggregatesFilter<"Inventory"> | number
    warningThresholdDays?: IntWithAggregatesFilter<"Inventory"> | number
    lastAdjustedAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
  }

  export type InventoryAdjustmentWhereInput = {
    AND?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    OR?: InventoryAdjustmentWhereInput[]
    NOT?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    id?: UuidFilter<"InventoryAdjustment"> | string
    inventoryId?: UuidFilter<"InventoryAdjustment"> | string
    delta?: IntFilter<"InventoryAdjustment"> | number
    reason?: EnumInventoryAdjustmentReasonFilter<"InventoryAdjustment"> | $Enums.InventoryAdjustmentReason
    note?: StringNullableFilter<"InventoryAdjustment"> | string | null
    createdAt?: DateTimeFilter<"InventoryAdjustment"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }

  export type InventoryAdjustmentOrderByWithRelationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    inventory?: InventoryOrderByWithRelationInput
  }

  export type InventoryAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    OR?: InventoryAdjustmentWhereInput[]
    NOT?: InventoryAdjustmentWhereInput | InventoryAdjustmentWhereInput[]
    inventoryId?: UuidFilter<"InventoryAdjustment"> | string
    delta?: IntFilter<"InventoryAdjustment"> | number
    reason?: EnumInventoryAdjustmentReasonFilter<"InventoryAdjustment"> | $Enums.InventoryAdjustmentReason
    note?: StringNullableFilter<"InventoryAdjustment"> | string | null
    createdAt?: DateTimeFilter<"InventoryAdjustment"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }, "id">

  export type InventoryAdjustmentOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: InventoryAdjustmentCountOrderByAggregateInput
    _avg?: InventoryAdjustmentAvgOrderByAggregateInput
    _max?: InventoryAdjustmentMaxOrderByAggregateInput
    _min?: InventoryAdjustmentMinOrderByAggregateInput
    _sum?: InventoryAdjustmentSumOrderByAggregateInput
  }

  export type InventoryAdjustmentScalarWhereWithAggregatesInput = {
    AND?: InventoryAdjustmentScalarWhereWithAggregatesInput | InventoryAdjustmentScalarWhereWithAggregatesInput[]
    OR?: InventoryAdjustmentScalarWhereWithAggregatesInput[]
    NOT?: InventoryAdjustmentScalarWhereWithAggregatesInput | InventoryAdjustmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"InventoryAdjustment"> | string
    inventoryId?: UuidWithAggregatesFilter<"InventoryAdjustment"> | string
    delta?: IntWithAggregatesFilter<"InventoryAdjustment"> | number
    reason?: EnumInventoryAdjustmentReasonWithAggregatesFilter<"InventoryAdjustment"> | $Enums.InventoryAdjustmentReason
    note?: StringNullableWithAggregatesFilter<"InventoryAdjustment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryAdjustment"> | Date | string
  }

  export type ProfileCreateInput = {
    id: string
    role?: $Enums.ProfileRole
    createdAt?: Date | string
    caregiver?: CaregiverCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    role?: $Enums.ProfileRole
    createdAt?: Date | string
    caregiver?: CaregiverUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProfileRoleFieldUpdateOperationsInput | $Enums.ProfileRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProfileRoleFieldUpdateOperationsInput | $Enums.ProfileRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id: string
    role?: $Enums.ProfileRole
    createdAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProfileRoleFieldUpdateOperationsInput | $Enums.ProfileRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProfileRoleFieldUpdateOperationsInput | $Enums.ProfileRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaregiverCreateInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutCaregiverInput
    patients?: PatientCreateNestedManyWithoutCaregiverInput
    linkCodes?: LinkCodeCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUncheckedCreateInput = {
    id?: string
    profileId: string
    displayName: string
    createdAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutCaregiverInput
    linkCodes?: LinkCodeUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutCaregiverNestedInput
    patients?: PatientUpdateManyWithoutCaregiverNestedInput
    linkCodes?: LinkCodeUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutCaregiverNestedInput
    linkCodes?: LinkCodeUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverCreateManyInput = {
    id?: string
    profileId: string
    displayName: string
    createdAt?: Date | string
  }

  export type CaregiverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaregiverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    caregiver: CaregiverCreateNestedOneWithoutPatientsInput
    medications?: MedicationCreateNestedManyWithoutPatientInput
    sessions?: PatientSessionCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    caregiverId: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutPatientInput
    sessions?: PatientSessionUncheckedCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogUncheckedCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUpdateOneRequiredWithoutPatientsNestedInput
    medications?: MedicationUpdateManyWithoutPatientNestedInput
    sessions?: PatientSessionUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutPatientNestedInput
    sessions?: PatientSessionUncheckedUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUncheckedUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    caregiverId: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCodeCreateInput = {
    id?: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    caregiver: CaregiverCreateNestedOneWithoutLinkCodesInput
    patient?: PatientCreateNestedOneWithoutLinkCodesInput
  }

  export type LinkCodeUncheckedCreateInput = {
    id?: string
    caregiverId: string
    patientId?: string | null
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type LinkCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUpdateOneRequiredWithoutLinkCodesNestedInput
    patient?: PatientUpdateOneWithoutLinkCodesNestedInput
  }

  export type LinkCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    patientId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCodeCreateManyInput = {
    id?: string
    caregiverId: string
    patientId?: string | null
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type LinkCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    patientId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientSessionCreateInput = {
    id?: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutSessionsInput
    rotatedFrom?: PatientSessionCreateNestedOneWithoutRotatedToInput
    rotatedTo?: PatientSessionCreateNestedManyWithoutRotatedFromInput
  }

  export type PatientSessionUncheckedCreateInput = {
    id?: string
    patientId: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    rotatedFromId?: string | null
    revokedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rotatedTo?: PatientSessionUncheckedCreateNestedManyWithoutRotatedFromInput
  }

  export type PatientSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutSessionsNestedInput
    rotatedFrom?: PatientSessionUpdateOneWithoutRotatedToNestedInput
    rotatedTo?: PatientSessionUpdateManyWithoutRotatedFromNestedInput
  }

  export type PatientSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rotatedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rotatedTo?: PatientSessionUncheckedUpdateManyWithoutRotatedFromNestedInput
  }

  export type PatientSessionCreateManyInput = {
    id?: string
    patientId: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    rotatedFromId?: string | null
    revokedAt?: Date | string | null
    lastSeenAt?: Date | string | null
  }

  export type PatientSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rotatedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MedicationCreateInput = {
    id?: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicationsInput
    schedules?: ScheduleCreateNestedManyWithoutMedicationInput
    inventory?: InventoryCreateNestedOneWithoutMedicationInput
    doseInstances?: DoseInstanceCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: string
    patientId: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutMedicationInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutMedicationInput
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicationsNestedInput
    schedules?: ScheduleUpdateManyWithoutMedicationNestedInput
    inventory?: InventoryUpdateOneWithoutMedicationNestedInput
    doseInstances?: DoseInstanceUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutMedicationNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutMedicationNestedInput
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    id?: string
    patientId: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type MedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    id?: string
    timesPerDay: number
    timeSlots?: ScheduleCreatetimeSlotsInput | Date[] | string[]
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    medication: MedicationCreateNestedOneWithoutSchedulesInput
    doseInstances?: DoseInstanceCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    medicationId: string
    timesPerDay: number
    timeSlots?: ScheduleCreatetimeSlotsInput | Date[] | string[]
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timesPerDay?: IntFieldUpdateOperationsInput | number
    timeSlots?: ScheduleUpdatetimeSlotsInput | Date[] | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutSchedulesNestedInput
    doseInstances?: DoseInstanceUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    timesPerDay?: IntFieldUpdateOperationsInput | number
    timeSlots?: ScheduleUpdatetimeSlotsInput | Date[] | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: string
    medicationId: string
    timesPerDay: number
    timeSlots?: ScheduleCreatetimeSlotsInput | Date[] | string[]
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timesPerDay?: IntFieldUpdateOperationsInput | number
    timeSlots?: ScheduleUpdatetimeSlotsInput | Date[] | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    timesPerDay?: IntFieldUpdateOperationsInput | number
    timeSlots?: ScheduleUpdatetimeSlotsInput | Date[] | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseInstanceCreateInput = {
    id?: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutDoseInstancesInput
    schedule: ScheduleCreateNestedOneWithoutDoseInstancesInput
    medication: MedicationCreateNestedOneWithoutDoseInstancesInput
    adherenceLogs?: AdherenceLogCreateNestedManyWithoutDoseInstanceInput
  }

  export type DoseInstanceUncheckedCreateInput = {
    id?: string
    patientId: string
    scheduleId: string
    medicationId: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
    adherenceLogs?: AdherenceLogUncheckedCreateNestedManyWithoutDoseInstanceInput
  }

  export type DoseInstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutDoseInstancesNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutDoseInstancesNestedInput
    medication?: MedicationUpdateOneRequiredWithoutDoseInstancesNestedInput
    adherenceLogs?: AdherenceLogUpdateManyWithoutDoseInstanceNestedInput
  }

  export type DoseInstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adherenceLogs?: AdherenceLogUncheckedUpdateManyWithoutDoseInstanceNestedInput
  }

  export type DoseInstanceCreateManyInput = {
    id?: string
    patientId: string
    scheduleId: string
    medicationId: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
  }

  export type DoseInstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseInstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdherenceLogCreateInput = {
    id?: string
    action: $Enums.AdherenceAction
    takenAt: Date | string
    source: $Enums.AdherenceSource
    clientUuid: string
    createdAt?: Date | string
    doseInstance: DoseInstanceCreateNestedOneWithoutAdherenceLogsInput
    patient: PatientCreateNestedOneWithoutAdherenceLogsInput
  }

  export type AdherenceLogUncheckedCreateInput = {
    id?: string
    doseInstanceId: string
    patientId: string
    action: $Enums.AdherenceAction
    takenAt: Date | string
    source: $Enums.AdherenceSource
    clientUuid: string
    createdAt?: Date | string
  }

  export type AdherenceLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAdherenceActionFieldUpdateOperationsInput | $Enums.AdherenceAction
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumAdherenceSourceFieldUpdateOperationsInput | $Enums.AdherenceSource
    clientUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doseInstance?: DoseInstanceUpdateOneRequiredWithoutAdherenceLogsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAdherenceLogsNestedInput
  }

  export type AdherenceLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doseInstanceId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    action?: EnumAdherenceActionFieldUpdateOperationsInput | $Enums.AdherenceAction
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumAdherenceSourceFieldUpdateOperationsInput | $Enums.AdherenceSource
    clientUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdherenceLogCreateManyInput = {
    id?: string
    doseInstanceId: string
    patientId: string
    action: $Enums.AdherenceAction
    takenAt: Date | string
    source: $Enums.AdherenceSource
    clientUuid: string
    createdAt?: Date | string
  }

  export type AdherenceLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAdherenceActionFieldUpdateOperationsInput | $Enums.AdherenceAction
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumAdherenceSourceFieldUpdateOperationsInput | $Enums.AdherenceSource
    clientUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdherenceLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doseInstanceId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    action?: EnumAdherenceActionFieldUpdateOperationsInput | $Enums.AdherenceAction
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumAdherenceSourceFieldUpdateOperationsInput | $Enums.AdherenceSource
    clientUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateInput = {
    id?: string
    remainingCount: number
    warningThresholdDays?: number
    lastAdjustedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutInventoryInput
    adjustments?: InventoryAdjustmentCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    medicationId: string
    remainingCount: number
    warningThresholdDays?: number
    lastAdjustedAt?: Date | string
    adjustments?: InventoryAdjustmentUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    remainingCount?: IntFieldUpdateOperationsInput | number
    warningThresholdDays?: IntFieldUpdateOperationsInput | number
    lastAdjustedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutInventoryNestedInput
    adjustments?: InventoryAdjustmentUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    remainingCount?: IntFieldUpdateOperationsInput | number
    warningThresholdDays?: IntFieldUpdateOperationsInput | number
    lastAdjustedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adjustments?: InventoryAdjustmentUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryCreateManyInput = {
    id?: string
    medicationId: string
    remainingCount: number
    warningThresholdDays?: number
    lastAdjustedAt?: Date | string
  }

  export type InventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    remainingCount?: IntFieldUpdateOperationsInput | number
    warningThresholdDays?: IntFieldUpdateOperationsInput | number
    lastAdjustedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    remainingCount?: IntFieldUpdateOperationsInput | number
    warningThresholdDays?: IntFieldUpdateOperationsInput | number
    lastAdjustedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryAdjustmentCreateInput = {
    id?: string
    delta: number
    reason: $Enums.InventoryAdjustmentReason
    note?: string | null
    createdAt?: Date | string
    inventory: InventoryCreateNestedOneWithoutAdjustmentsInput
  }

  export type InventoryAdjustmentUncheckedCreateInput = {
    id?: string
    inventoryId: string
    delta: number
    reason: $Enums.InventoryAdjustmentReason
    note?: string | null
    createdAt?: Date | string
  }

  export type InventoryAdjustmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: EnumInventoryAdjustmentReasonFieldUpdateOperationsInput | $Enums.InventoryAdjustmentReason
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateOneRequiredWithoutAdjustmentsNestedInput
  }

  export type InventoryAdjustmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: EnumInventoryAdjustmentReasonFieldUpdateOperationsInput | $Enums.InventoryAdjustmentReason
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryAdjustmentCreateManyInput = {
    id?: string
    inventoryId: string
    delta: number
    reason: $Enums.InventoryAdjustmentReason
    note?: string | null
    createdAt?: Date | string
  }

  export type InventoryAdjustmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: EnumInventoryAdjustmentReasonFieldUpdateOperationsInput | $Enums.InventoryAdjustmentReason
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryAdjustmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: EnumInventoryAdjustmentReasonFieldUpdateOperationsInput | $Enums.InventoryAdjustmentReason
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumProfileRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileRole | EnumProfileRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileRole[] | ListEnumProfileRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileRole[] | ListEnumProfileRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileRoleFilter<$PrismaModel> | $Enums.ProfileRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CaregiverNullableScalarRelationFilter = {
    is?: CaregiverWhereInput | null
    isNot?: CaregiverWhereInput | null
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumProfileRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileRole | EnumProfileRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileRole[] | ListEnumProfileRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileRole[] | ListEnumProfileRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileRoleWithAggregatesFilter<$PrismaModel> | $Enums.ProfileRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProfileRoleFilter<$PrismaModel>
    _max?: NestedEnumProfileRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type LinkCodeListRelationFilter = {
    every?: LinkCodeWhereInput
    some?: LinkCodeWhereInput
    none?: LinkCodeWhereInput
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaregiverCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
  }

  export type CaregiverMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
  }

  export type CaregiverMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CaregiverScalarRelationFilter = {
    is?: CaregiverWhereInput
    isNot?: CaregiverWhereInput
  }

  export type MedicationListRelationFilter = {
    every?: MedicationWhereInput
    some?: MedicationWhereInput
    none?: MedicationWhereInput
  }

  export type PatientSessionListRelationFilter = {
    every?: PatientSessionWhereInput
    some?: PatientSessionWhereInput
    none?: PatientSessionWhereInput
  }

  export type DoseInstanceListRelationFilter = {
    every?: DoseInstanceWhereInput
    some?: DoseInstanceWhereInput
    none?: DoseInstanceWhereInput
  }

  export type AdherenceLogListRelationFilter = {
    every?: AdherenceLogWhereInput
    some?: AdherenceLogWhereInput
    none?: AdherenceLogWhereInput
  }

  export type MedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoseInstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdherenceLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    displayName?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    displayName?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    displayName?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LinkCodeCountOrderByAggregateInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    patientId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    patientId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LinkCodeMinOrderByAggregateInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    patientId?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    revokedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type PatientSessionNullableScalarRelationFilter = {
    is?: PatientSessionWhereInput | null
    isNot?: PatientSessionWhereInput | null
  }

  export type PatientSessionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    tokenHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    rotatedFromId?: SortOrder
    revokedAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type PatientSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    tokenHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    rotatedFromId?: SortOrder
    revokedAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type PatientSessionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    tokenHash?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    rotatedFromId?: SortOrder
    revokedAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type InventoryNullableScalarRelationFilter = {
    is?: InventoryWhereInput | null
    isNot?: InventoryWhereInput | null
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    doseCountPerIntake?: SortOrder
    notes?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicationAvgOrderByAggregateInput = {
    doseCountPerIntake?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    doseCountPerIntake?: SortOrder
    notes?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    name?: SortOrder
    dosage?: SortOrder
    doseCountPerIntake?: SortOrder
    notes?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MedicationSumOrderByAggregateInput = {
    doseCountPerIntake?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableListFilter<$PrismaModel = never> = {
    equals?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    has?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    hasEvery?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    hasSome?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MedicationScalarRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timesPerDay?: SortOrder
    timeSlots?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    timesPerDay?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timesPerDay?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    timesPerDay?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    timesPerDay?: SortOrder
  }

  export type EnumDoseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseStatus | EnumDoseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDoseStatusFilter<$PrismaModel> | $Enums.DoseStatus
  }

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type DoseInstancePatientIdScheduleIdScheduledForCompoundUniqueInput = {
    patientId: string
    scheduleId: string
    scheduledFor: Date | string
  }

  export type DoseInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    scheduleId?: SortOrder
    medicationId?: SortOrder
    scheduledFor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DoseInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    scheduleId?: SortOrder
    medicationId?: SortOrder
    scheduledFor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DoseInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    scheduleId?: SortOrder
    medicationId?: SortOrder
    scheduledFor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumDoseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseStatus | EnumDoseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDoseStatusWithAggregatesFilter<$PrismaModel> | $Enums.DoseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDoseStatusFilter<$PrismaModel>
    _max?: NestedEnumDoseStatusFilter<$PrismaModel>
  }

  export type EnumAdherenceActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AdherenceAction | EnumAdherenceActionFieldRefInput<$PrismaModel>
    in?: $Enums.AdherenceAction[] | ListEnumAdherenceActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdherenceAction[] | ListEnumAdherenceActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAdherenceActionFilter<$PrismaModel> | $Enums.AdherenceAction
  }

  export type EnumAdherenceSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.AdherenceSource | EnumAdherenceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AdherenceSource[] | ListEnumAdherenceSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdherenceSource[] | ListEnumAdherenceSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAdherenceSourceFilter<$PrismaModel> | $Enums.AdherenceSource
  }

  export type DoseInstanceScalarRelationFilter = {
    is?: DoseInstanceWhereInput
    isNot?: DoseInstanceWhereInput
  }

  export type AdherenceLogPatientIdClientUuidCompoundUniqueInput = {
    patientId: string
    clientUuid: string
  }

  export type AdherenceLogCountOrderByAggregateInput = {
    id?: SortOrder
    doseInstanceId?: SortOrder
    patientId?: SortOrder
    action?: SortOrder
    takenAt?: SortOrder
    source?: SortOrder
    clientUuid?: SortOrder
    createdAt?: SortOrder
  }

  export type AdherenceLogMaxOrderByAggregateInput = {
    id?: SortOrder
    doseInstanceId?: SortOrder
    patientId?: SortOrder
    action?: SortOrder
    takenAt?: SortOrder
    source?: SortOrder
    clientUuid?: SortOrder
    createdAt?: SortOrder
  }

  export type AdherenceLogMinOrderByAggregateInput = {
    id?: SortOrder
    doseInstanceId?: SortOrder
    patientId?: SortOrder
    action?: SortOrder
    takenAt?: SortOrder
    source?: SortOrder
    clientUuid?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAdherenceActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdherenceAction | EnumAdherenceActionFieldRefInput<$PrismaModel>
    in?: $Enums.AdherenceAction[] | ListEnumAdherenceActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdherenceAction[] | ListEnumAdherenceActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAdherenceActionWithAggregatesFilter<$PrismaModel> | $Enums.AdherenceAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdherenceActionFilter<$PrismaModel>
    _max?: NestedEnumAdherenceActionFilter<$PrismaModel>
  }

  export type EnumAdherenceSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdherenceSource | EnumAdherenceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AdherenceSource[] | ListEnumAdherenceSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdherenceSource[] | ListEnumAdherenceSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAdherenceSourceWithAggregatesFilter<$PrismaModel> | $Enums.AdherenceSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdherenceSourceFilter<$PrismaModel>
    _max?: NestedEnumAdherenceSourceFilter<$PrismaModel>
  }

  export type InventoryAdjustmentListRelationFilter = {
    every?: InventoryAdjustmentWhereInput
    some?: InventoryAdjustmentWhereInput
    none?: InventoryAdjustmentWhereInput
  }

  export type InventoryAdjustmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    remainingCount?: SortOrder
    warningThresholdDays?: SortOrder
    lastAdjustedAt?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    remainingCount?: SortOrder
    warningThresholdDays?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    remainingCount?: SortOrder
    warningThresholdDays?: SortOrder
    lastAdjustedAt?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    remainingCount?: SortOrder
    warningThresholdDays?: SortOrder
    lastAdjustedAt?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    remainingCount?: SortOrder
    warningThresholdDays?: SortOrder
  }

  export type EnumInventoryAdjustmentReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAdjustmentReason | EnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAdjustmentReason[] | ListEnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryAdjustmentReason[] | ListEnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryAdjustmentReasonFilter<$PrismaModel> | $Enums.InventoryAdjustmentReason
  }

  export type InventoryScalarRelationFilter = {
    is?: InventoryWhereInput
    isNot?: InventoryWhereInput
  }

  export type InventoryAdjustmentCountOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryAdjustmentAvgOrderByAggregateInput = {
    delta?: SortOrder
  }

  export type InventoryAdjustmentMaxOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryAdjustmentMinOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    delta?: SortOrder
    reason?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryAdjustmentSumOrderByAggregateInput = {
    delta?: SortOrder
  }

  export type EnumInventoryAdjustmentReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAdjustmentReason | EnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAdjustmentReason[] | ListEnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryAdjustmentReason[] | ListEnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryAdjustmentReasonWithAggregatesFilter<$PrismaModel> | $Enums.InventoryAdjustmentReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryAdjustmentReasonFilter<$PrismaModel>
    _max?: NestedEnumInventoryAdjustmentReasonFilter<$PrismaModel>
  }

  export type CaregiverCreateNestedOneWithoutProfileInput = {
    create?: XOR<CaregiverCreateWithoutProfileInput, CaregiverUncheckedCreateWithoutProfileInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutProfileInput
    connect?: CaregiverWhereUniqueInput
  }

  export type CaregiverUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<CaregiverCreateWithoutProfileInput, CaregiverUncheckedCreateWithoutProfileInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutProfileInput
    connect?: CaregiverWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumProfileRoleFieldUpdateOperationsInput = {
    set?: $Enums.ProfileRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CaregiverUpdateOneWithoutProfileNestedInput = {
    create?: XOR<CaregiverCreateWithoutProfileInput, CaregiverUncheckedCreateWithoutProfileInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutProfileInput
    upsert?: CaregiverUpsertWithoutProfileInput
    disconnect?: CaregiverWhereInput | boolean
    delete?: CaregiverWhereInput | boolean
    connect?: CaregiverWhereUniqueInput
    update?: XOR<XOR<CaregiverUpdateToOneWithWhereWithoutProfileInput, CaregiverUpdateWithoutProfileInput>, CaregiverUncheckedUpdateWithoutProfileInput>
  }

  export type CaregiverUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<CaregiverCreateWithoutProfileInput, CaregiverUncheckedCreateWithoutProfileInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutProfileInput
    upsert?: CaregiverUpsertWithoutProfileInput
    disconnect?: CaregiverWhereInput | boolean
    delete?: CaregiverWhereInput | boolean
    connect?: CaregiverWhereUniqueInput
    update?: XOR<XOR<CaregiverUpdateToOneWithWhereWithoutProfileInput, CaregiverUpdateWithoutProfileInput>, CaregiverUncheckedUpdateWithoutProfileInput>
  }

  export type ProfileCreateNestedOneWithoutCaregiverInput = {
    create?: XOR<ProfileCreateWithoutCaregiverInput, ProfileUncheckedCreateWithoutCaregiverInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCaregiverInput
    connect?: ProfileWhereUniqueInput
  }

  export type PatientCreateNestedManyWithoutCaregiverInput = {
    create?: XOR<PatientCreateWithoutCaregiverInput, PatientUncheckedCreateWithoutCaregiverInput> | PatientCreateWithoutCaregiverInput[] | PatientUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCaregiverInput | PatientCreateOrConnectWithoutCaregiverInput[]
    createMany?: PatientCreateManyCaregiverInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type LinkCodeCreateNestedManyWithoutCaregiverInput = {
    create?: XOR<LinkCodeCreateWithoutCaregiverInput, LinkCodeUncheckedCreateWithoutCaregiverInput> | LinkCodeCreateWithoutCaregiverInput[] | LinkCodeUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: LinkCodeCreateOrConnectWithoutCaregiverInput | LinkCodeCreateOrConnectWithoutCaregiverInput[]
    createMany?: LinkCodeCreateManyCaregiverInputEnvelope
    connect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutCaregiverInput = {
    create?: XOR<PatientCreateWithoutCaregiverInput, PatientUncheckedCreateWithoutCaregiverInput> | PatientCreateWithoutCaregiverInput[] | PatientUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCaregiverInput | PatientCreateOrConnectWithoutCaregiverInput[]
    createMany?: PatientCreateManyCaregiverInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type LinkCodeUncheckedCreateNestedManyWithoutCaregiverInput = {
    create?: XOR<LinkCodeCreateWithoutCaregiverInput, LinkCodeUncheckedCreateWithoutCaregiverInput> | LinkCodeCreateWithoutCaregiverInput[] | LinkCodeUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: LinkCodeCreateOrConnectWithoutCaregiverInput | LinkCodeCreateOrConnectWithoutCaregiverInput[]
    createMany?: LinkCodeCreateManyCaregiverInputEnvelope
    connect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
  }

  export type ProfileUpdateOneRequiredWithoutCaregiverNestedInput = {
    create?: XOR<ProfileCreateWithoutCaregiverInput, ProfileUncheckedCreateWithoutCaregiverInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCaregiverInput
    upsert?: ProfileUpsertWithoutCaregiverInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutCaregiverInput, ProfileUpdateWithoutCaregiverInput>, ProfileUncheckedUpdateWithoutCaregiverInput>
  }

  export type PatientUpdateManyWithoutCaregiverNestedInput = {
    create?: XOR<PatientCreateWithoutCaregiverInput, PatientUncheckedCreateWithoutCaregiverInput> | PatientCreateWithoutCaregiverInput[] | PatientUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCaregiverInput | PatientCreateOrConnectWithoutCaregiverInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutCaregiverInput | PatientUpsertWithWhereUniqueWithoutCaregiverInput[]
    createMany?: PatientCreateManyCaregiverInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutCaregiverInput | PatientUpdateWithWhereUniqueWithoutCaregiverInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutCaregiverInput | PatientUpdateManyWithWhereWithoutCaregiverInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type LinkCodeUpdateManyWithoutCaregiverNestedInput = {
    create?: XOR<LinkCodeCreateWithoutCaregiverInput, LinkCodeUncheckedCreateWithoutCaregiverInput> | LinkCodeCreateWithoutCaregiverInput[] | LinkCodeUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: LinkCodeCreateOrConnectWithoutCaregiverInput | LinkCodeCreateOrConnectWithoutCaregiverInput[]
    upsert?: LinkCodeUpsertWithWhereUniqueWithoutCaregiverInput | LinkCodeUpsertWithWhereUniqueWithoutCaregiverInput[]
    createMany?: LinkCodeCreateManyCaregiverInputEnvelope
    set?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    disconnect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    delete?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    connect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    update?: LinkCodeUpdateWithWhereUniqueWithoutCaregiverInput | LinkCodeUpdateWithWhereUniqueWithoutCaregiverInput[]
    updateMany?: LinkCodeUpdateManyWithWhereWithoutCaregiverInput | LinkCodeUpdateManyWithWhereWithoutCaregiverInput[]
    deleteMany?: LinkCodeScalarWhereInput | LinkCodeScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutCaregiverNestedInput = {
    create?: XOR<PatientCreateWithoutCaregiverInput, PatientUncheckedCreateWithoutCaregiverInput> | PatientCreateWithoutCaregiverInput[] | PatientUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCaregiverInput | PatientCreateOrConnectWithoutCaregiverInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutCaregiverInput | PatientUpsertWithWhereUniqueWithoutCaregiverInput[]
    createMany?: PatientCreateManyCaregiverInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutCaregiverInput | PatientUpdateWithWhereUniqueWithoutCaregiverInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutCaregiverInput | PatientUpdateManyWithWhereWithoutCaregiverInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type LinkCodeUncheckedUpdateManyWithoutCaregiverNestedInput = {
    create?: XOR<LinkCodeCreateWithoutCaregiverInput, LinkCodeUncheckedCreateWithoutCaregiverInput> | LinkCodeCreateWithoutCaregiverInput[] | LinkCodeUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: LinkCodeCreateOrConnectWithoutCaregiverInput | LinkCodeCreateOrConnectWithoutCaregiverInput[]
    upsert?: LinkCodeUpsertWithWhereUniqueWithoutCaregiverInput | LinkCodeUpsertWithWhereUniqueWithoutCaregiverInput[]
    createMany?: LinkCodeCreateManyCaregiverInputEnvelope
    set?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    disconnect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    delete?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    connect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    update?: LinkCodeUpdateWithWhereUniqueWithoutCaregiverInput | LinkCodeUpdateWithWhereUniqueWithoutCaregiverInput[]
    updateMany?: LinkCodeUpdateManyWithWhereWithoutCaregiverInput | LinkCodeUpdateManyWithWhereWithoutCaregiverInput[]
    deleteMany?: LinkCodeScalarWhereInput | LinkCodeScalarWhereInput[]
  }

  export type CaregiverCreateNestedOneWithoutPatientsInput = {
    create?: XOR<CaregiverCreateWithoutPatientsInput, CaregiverUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutPatientsInput
    connect?: CaregiverWhereUniqueInput
  }

  export type MedicationCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicationCreateWithoutPatientInput, MedicationUncheckedCreateWithoutPatientInput> | MedicationCreateWithoutPatientInput[] | MedicationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPatientInput | MedicationCreateOrConnectWithoutPatientInput[]
    createMany?: MedicationCreateManyPatientInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type PatientSessionCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientSessionCreateWithoutPatientInput, PatientSessionUncheckedCreateWithoutPatientInput> | PatientSessionCreateWithoutPatientInput[] | PatientSessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientSessionCreateOrConnectWithoutPatientInput | PatientSessionCreateOrConnectWithoutPatientInput[]
    createMany?: PatientSessionCreateManyPatientInputEnvelope
    connect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
  }

  export type DoseInstanceCreateNestedManyWithoutPatientInput = {
    create?: XOR<DoseInstanceCreateWithoutPatientInput, DoseInstanceUncheckedCreateWithoutPatientInput> | DoseInstanceCreateWithoutPatientInput[] | DoseInstanceUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutPatientInput | DoseInstanceCreateOrConnectWithoutPatientInput[]
    createMany?: DoseInstanceCreateManyPatientInputEnvelope
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
  }

  export type AdherenceLogCreateNestedManyWithoutPatientInput = {
    create?: XOR<AdherenceLogCreateWithoutPatientInput, AdherenceLogUncheckedCreateWithoutPatientInput> | AdherenceLogCreateWithoutPatientInput[] | AdherenceLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdherenceLogCreateOrConnectWithoutPatientInput | AdherenceLogCreateOrConnectWithoutPatientInput[]
    createMany?: AdherenceLogCreateManyPatientInputEnvelope
    connect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
  }

  export type LinkCodeCreateNestedManyWithoutPatientInput = {
    create?: XOR<LinkCodeCreateWithoutPatientInput, LinkCodeUncheckedCreateWithoutPatientInput> | LinkCodeCreateWithoutPatientInput[] | LinkCodeUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LinkCodeCreateOrConnectWithoutPatientInput | LinkCodeCreateOrConnectWithoutPatientInput[]
    createMany?: LinkCodeCreateManyPatientInputEnvelope
    connect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
  }

  export type MedicationUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicationCreateWithoutPatientInput, MedicationUncheckedCreateWithoutPatientInput> | MedicationCreateWithoutPatientInput[] | MedicationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPatientInput | MedicationCreateOrConnectWithoutPatientInput[]
    createMany?: MedicationCreateManyPatientInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type PatientSessionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientSessionCreateWithoutPatientInput, PatientSessionUncheckedCreateWithoutPatientInput> | PatientSessionCreateWithoutPatientInput[] | PatientSessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientSessionCreateOrConnectWithoutPatientInput | PatientSessionCreateOrConnectWithoutPatientInput[]
    createMany?: PatientSessionCreateManyPatientInputEnvelope
    connect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
  }

  export type DoseInstanceUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<DoseInstanceCreateWithoutPatientInput, DoseInstanceUncheckedCreateWithoutPatientInput> | DoseInstanceCreateWithoutPatientInput[] | DoseInstanceUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutPatientInput | DoseInstanceCreateOrConnectWithoutPatientInput[]
    createMany?: DoseInstanceCreateManyPatientInputEnvelope
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
  }

  export type AdherenceLogUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AdherenceLogCreateWithoutPatientInput, AdherenceLogUncheckedCreateWithoutPatientInput> | AdherenceLogCreateWithoutPatientInput[] | AdherenceLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdherenceLogCreateOrConnectWithoutPatientInput | AdherenceLogCreateOrConnectWithoutPatientInput[]
    createMany?: AdherenceLogCreateManyPatientInputEnvelope
    connect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
  }

  export type LinkCodeUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<LinkCodeCreateWithoutPatientInput, LinkCodeUncheckedCreateWithoutPatientInput> | LinkCodeCreateWithoutPatientInput[] | LinkCodeUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LinkCodeCreateOrConnectWithoutPatientInput | LinkCodeCreateOrConnectWithoutPatientInput[]
    createMany?: LinkCodeCreateManyPatientInputEnvelope
    connect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
  }

  export type CaregiverUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<CaregiverCreateWithoutPatientsInput, CaregiverUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutPatientsInput
    upsert?: CaregiverUpsertWithoutPatientsInput
    connect?: CaregiverWhereUniqueInput
    update?: XOR<XOR<CaregiverUpdateToOneWithWhereWithoutPatientsInput, CaregiverUpdateWithoutPatientsInput>, CaregiverUncheckedUpdateWithoutPatientsInput>
  }

  export type MedicationUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicationCreateWithoutPatientInput, MedicationUncheckedCreateWithoutPatientInput> | MedicationCreateWithoutPatientInput[] | MedicationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPatientInput | MedicationCreateOrConnectWithoutPatientInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutPatientInput | MedicationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicationCreateManyPatientInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutPatientInput | MedicationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutPatientInput | MedicationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type PatientSessionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientSessionCreateWithoutPatientInput, PatientSessionUncheckedCreateWithoutPatientInput> | PatientSessionCreateWithoutPatientInput[] | PatientSessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientSessionCreateOrConnectWithoutPatientInput | PatientSessionCreateOrConnectWithoutPatientInput[]
    upsert?: PatientSessionUpsertWithWhereUniqueWithoutPatientInput | PatientSessionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientSessionCreateManyPatientInputEnvelope
    set?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    disconnect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    delete?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    connect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    update?: PatientSessionUpdateWithWhereUniqueWithoutPatientInput | PatientSessionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientSessionUpdateManyWithWhereWithoutPatientInput | PatientSessionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientSessionScalarWhereInput | PatientSessionScalarWhereInput[]
  }

  export type DoseInstanceUpdateManyWithoutPatientNestedInput = {
    create?: XOR<DoseInstanceCreateWithoutPatientInput, DoseInstanceUncheckedCreateWithoutPatientInput> | DoseInstanceCreateWithoutPatientInput[] | DoseInstanceUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutPatientInput | DoseInstanceCreateOrConnectWithoutPatientInput[]
    upsert?: DoseInstanceUpsertWithWhereUniqueWithoutPatientInput | DoseInstanceUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: DoseInstanceCreateManyPatientInputEnvelope
    set?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    disconnect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    delete?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    update?: DoseInstanceUpdateWithWhereUniqueWithoutPatientInput | DoseInstanceUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: DoseInstanceUpdateManyWithWhereWithoutPatientInput | DoseInstanceUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: DoseInstanceScalarWhereInput | DoseInstanceScalarWhereInput[]
  }

  export type AdherenceLogUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AdherenceLogCreateWithoutPatientInput, AdherenceLogUncheckedCreateWithoutPatientInput> | AdherenceLogCreateWithoutPatientInput[] | AdherenceLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdherenceLogCreateOrConnectWithoutPatientInput | AdherenceLogCreateOrConnectWithoutPatientInput[]
    upsert?: AdherenceLogUpsertWithWhereUniqueWithoutPatientInput | AdherenceLogUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AdherenceLogCreateManyPatientInputEnvelope
    set?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    disconnect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    delete?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    connect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    update?: AdherenceLogUpdateWithWhereUniqueWithoutPatientInput | AdherenceLogUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AdherenceLogUpdateManyWithWhereWithoutPatientInput | AdherenceLogUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AdherenceLogScalarWhereInput | AdherenceLogScalarWhereInput[]
  }

  export type LinkCodeUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LinkCodeCreateWithoutPatientInput, LinkCodeUncheckedCreateWithoutPatientInput> | LinkCodeCreateWithoutPatientInput[] | LinkCodeUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LinkCodeCreateOrConnectWithoutPatientInput | LinkCodeCreateOrConnectWithoutPatientInput[]
    upsert?: LinkCodeUpsertWithWhereUniqueWithoutPatientInput | LinkCodeUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LinkCodeCreateManyPatientInputEnvelope
    set?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    disconnect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    delete?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    connect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    update?: LinkCodeUpdateWithWhereUniqueWithoutPatientInput | LinkCodeUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LinkCodeUpdateManyWithWhereWithoutPatientInput | LinkCodeUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LinkCodeScalarWhereInput | LinkCodeScalarWhereInput[]
  }

  export type MedicationUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicationCreateWithoutPatientInput, MedicationUncheckedCreateWithoutPatientInput> | MedicationCreateWithoutPatientInput[] | MedicationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPatientInput | MedicationCreateOrConnectWithoutPatientInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutPatientInput | MedicationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicationCreateManyPatientInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutPatientInput | MedicationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutPatientInput | MedicationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type PatientSessionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientSessionCreateWithoutPatientInput, PatientSessionUncheckedCreateWithoutPatientInput> | PatientSessionCreateWithoutPatientInput[] | PatientSessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientSessionCreateOrConnectWithoutPatientInput | PatientSessionCreateOrConnectWithoutPatientInput[]
    upsert?: PatientSessionUpsertWithWhereUniqueWithoutPatientInput | PatientSessionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientSessionCreateManyPatientInputEnvelope
    set?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    disconnect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    delete?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    connect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    update?: PatientSessionUpdateWithWhereUniqueWithoutPatientInput | PatientSessionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientSessionUpdateManyWithWhereWithoutPatientInput | PatientSessionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientSessionScalarWhereInput | PatientSessionScalarWhereInput[]
  }

  export type DoseInstanceUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<DoseInstanceCreateWithoutPatientInput, DoseInstanceUncheckedCreateWithoutPatientInput> | DoseInstanceCreateWithoutPatientInput[] | DoseInstanceUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutPatientInput | DoseInstanceCreateOrConnectWithoutPatientInput[]
    upsert?: DoseInstanceUpsertWithWhereUniqueWithoutPatientInput | DoseInstanceUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: DoseInstanceCreateManyPatientInputEnvelope
    set?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    disconnect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    delete?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    update?: DoseInstanceUpdateWithWhereUniqueWithoutPatientInput | DoseInstanceUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: DoseInstanceUpdateManyWithWhereWithoutPatientInput | DoseInstanceUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: DoseInstanceScalarWhereInput | DoseInstanceScalarWhereInput[]
  }

  export type AdherenceLogUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AdherenceLogCreateWithoutPatientInput, AdherenceLogUncheckedCreateWithoutPatientInput> | AdherenceLogCreateWithoutPatientInput[] | AdherenceLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdherenceLogCreateOrConnectWithoutPatientInput | AdherenceLogCreateOrConnectWithoutPatientInput[]
    upsert?: AdherenceLogUpsertWithWhereUniqueWithoutPatientInput | AdherenceLogUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AdherenceLogCreateManyPatientInputEnvelope
    set?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    disconnect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    delete?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    connect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    update?: AdherenceLogUpdateWithWhereUniqueWithoutPatientInput | AdherenceLogUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AdherenceLogUpdateManyWithWhereWithoutPatientInput | AdherenceLogUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AdherenceLogScalarWhereInput | AdherenceLogScalarWhereInput[]
  }

  export type LinkCodeUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<LinkCodeCreateWithoutPatientInput, LinkCodeUncheckedCreateWithoutPatientInput> | LinkCodeCreateWithoutPatientInput[] | LinkCodeUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: LinkCodeCreateOrConnectWithoutPatientInput | LinkCodeCreateOrConnectWithoutPatientInput[]
    upsert?: LinkCodeUpsertWithWhereUniqueWithoutPatientInput | LinkCodeUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: LinkCodeCreateManyPatientInputEnvelope
    set?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    disconnect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    delete?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    connect?: LinkCodeWhereUniqueInput | LinkCodeWhereUniqueInput[]
    update?: LinkCodeUpdateWithWhereUniqueWithoutPatientInput | LinkCodeUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: LinkCodeUpdateManyWithWhereWithoutPatientInput | LinkCodeUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: LinkCodeScalarWhereInput | LinkCodeScalarWhereInput[]
  }

  export type CaregiverCreateNestedOneWithoutLinkCodesInput = {
    create?: XOR<CaregiverCreateWithoutLinkCodesInput, CaregiverUncheckedCreateWithoutLinkCodesInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutLinkCodesInput
    connect?: CaregiverWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutLinkCodesInput = {
    create?: XOR<PatientCreateWithoutLinkCodesInput, PatientUncheckedCreateWithoutLinkCodesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutLinkCodesInput
    connect?: PatientWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CaregiverUpdateOneRequiredWithoutLinkCodesNestedInput = {
    create?: XOR<CaregiverCreateWithoutLinkCodesInput, CaregiverUncheckedCreateWithoutLinkCodesInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutLinkCodesInput
    upsert?: CaregiverUpsertWithoutLinkCodesInput
    connect?: CaregiverWhereUniqueInput
    update?: XOR<XOR<CaregiverUpdateToOneWithWhereWithoutLinkCodesInput, CaregiverUpdateWithoutLinkCodesInput>, CaregiverUncheckedUpdateWithoutLinkCodesInput>
  }

  export type PatientUpdateOneWithoutLinkCodesNestedInput = {
    create?: XOR<PatientCreateWithoutLinkCodesInput, PatientUncheckedCreateWithoutLinkCodesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutLinkCodesInput
    upsert?: PatientUpsertWithoutLinkCodesInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutLinkCodesInput, PatientUpdateWithoutLinkCodesInput>, PatientUncheckedUpdateWithoutLinkCodesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PatientCreateNestedOneWithoutSessionsInput = {
    create?: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutSessionsInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientSessionCreateNestedOneWithoutRotatedToInput = {
    create?: XOR<PatientSessionCreateWithoutRotatedToInput, PatientSessionUncheckedCreateWithoutRotatedToInput>
    connectOrCreate?: PatientSessionCreateOrConnectWithoutRotatedToInput
    connect?: PatientSessionWhereUniqueInput
  }

  export type PatientSessionCreateNestedManyWithoutRotatedFromInput = {
    create?: XOR<PatientSessionCreateWithoutRotatedFromInput, PatientSessionUncheckedCreateWithoutRotatedFromInput> | PatientSessionCreateWithoutRotatedFromInput[] | PatientSessionUncheckedCreateWithoutRotatedFromInput[]
    connectOrCreate?: PatientSessionCreateOrConnectWithoutRotatedFromInput | PatientSessionCreateOrConnectWithoutRotatedFromInput[]
    createMany?: PatientSessionCreateManyRotatedFromInputEnvelope
    connect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
  }

  export type PatientSessionUncheckedCreateNestedManyWithoutRotatedFromInput = {
    create?: XOR<PatientSessionCreateWithoutRotatedFromInput, PatientSessionUncheckedCreateWithoutRotatedFromInput> | PatientSessionCreateWithoutRotatedFromInput[] | PatientSessionUncheckedCreateWithoutRotatedFromInput[]
    connectOrCreate?: PatientSessionCreateOrConnectWithoutRotatedFromInput | PatientSessionCreateOrConnectWithoutRotatedFromInput[]
    createMany?: PatientSessionCreateManyRotatedFromInputEnvelope
    connect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
  }

  export type PatientUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutSessionsInput
    upsert?: PatientUpsertWithoutSessionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutSessionsInput, PatientUpdateWithoutSessionsInput>, PatientUncheckedUpdateWithoutSessionsInput>
  }

  export type PatientSessionUpdateOneWithoutRotatedToNestedInput = {
    create?: XOR<PatientSessionCreateWithoutRotatedToInput, PatientSessionUncheckedCreateWithoutRotatedToInput>
    connectOrCreate?: PatientSessionCreateOrConnectWithoutRotatedToInput
    upsert?: PatientSessionUpsertWithoutRotatedToInput
    disconnect?: PatientSessionWhereInput | boolean
    delete?: PatientSessionWhereInput | boolean
    connect?: PatientSessionWhereUniqueInput
    update?: XOR<XOR<PatientSessionUpdateToOneWithWhereWithoutRotatedToInput, PatientSessionUpdateWithoutRotatedToInput>, PatientSessionUncheckedUpdateWithoutRotatedToInput>
  }

  export type PatientSessionUpdateManyWithoutRotatedFromNestedInput = {
    create?: XOR<PatientSessionCreateWithoutRotatedFromInput, PatientSessionUncheckedCreateWithoutRotatedFromInput> | PatientSessionCreateWithoutRotatedFromInput[] | PatientSessionUncheckedCreateWithoutRotatedFromInput[]
    connectOrCreate?: PatientSessionCreateOrConnectWithoutRotatedFromInput | PatientSessionCreateOrConnectWithoutRotatedFromInput[]
    upsert?: PatientSessionUpsertWithWhereUniqueWithoutRotatedFromInput | PatientSessionUpsertWithWhereUniqueWithoutRotatedFromInput[]
    createMany?: PatientSessionCreateManyRotatedFromInputEnvelope
    set?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    disconnect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    delete?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    connect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    update?: PatientSessionUpdateWithWhereUniqueWithoutRotatedFromInput | PatientSessionUpdateWithWhereUniqueWithoutRotatedFromInput[]
    updateMany?: PatientSessionUpdateManyWithWhereWithoutRotatedFromInput | PatientSessionUpdateManyWithWhereWithoutRotatedFromInput[]
    deleteMany?: PatientSessionScalarWhereInput | PatientSessionScalarWhereInput[]
  }

  export type PatientSessionUncheckedUpdateManyWithoutRotatedFromNestedInput = {
    create?: XOR<PatientSessionCreateWithoutRotatedFromInput, PatientSessionUncheckedCreateWithoutRotatedFromInput> | PatientSessionCreateWithoutRotatedFromInput[] | PatientSessionUncheckedCreateWithoutRotatedFromInput[]
    connectOrCreate?: PatientSessionCreateOrConnectWithoutRotatedFromInput | PatientSessionCreateOrConnectWithoutRotatedFromInput[]
    upsert?: PatientSessionUpsertWithWhereUniqueWithoutRotatedFromInput | PatientSessionUpsertWithWhereUniqueWithoutRotatedFromInput[]
    createMany?: PatientSessionCreateManyRotatedFromInputEnvelope
    set?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    disconnect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    delete?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    connect?: PatientSessionWhereUniqueInput | PatientSessionWhereUniqueInput[]
    update?: PatientSessionUpdateWithWhereUniqueWithoutRotatedFromInput | PatientSessionUpdateWithWhereUniqueWithoutRotatedFromInput[]
    updateMany?: PatientSessionUpdateManyWithWhereWithoutRotatedFromInput | PatientSessionUpdateManyWithWhereWithoutRotatedFromInput[]
    deleteMany?: PatientSessionScalarWhereInput | PatientSessionScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<PatientCreateWithoutMedicationsInput, PatientUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicationsInput
    connect?: PatientWhereUniqueInput
  }

  export type ScheduleCreateNestedManyWithoutMedicationInput = {
    create?: XOR<ScheduleCreateWithoutMedicationInput, ScheduleUncheckedCreateWithoutMedicationInput> | ScheduleCreateWithoutMedicationInput[] | ScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutMedicationInput | ScheduleCreateOrConnectWithoutMedicationInput[]
    createMany?: ScheduleCreateManyMedicationInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type InventoryCreateNestedOneWithoutMedicationInput = {
    create?: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicationInput
    connect?: InventoryWhereUniqueInput
  }

  export type DoseInstanceCreateNestedManyWithoutMedicationInput = {
    create?: XOR<DoseInstanceCreateWithoutMedicationInput, DoseInstanceUncheckedCreateWithoutMedicationInput> | DoseInstanceCreateWithoutMedicationInput[] | DoseInstanceUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutMedicationInput | DoseInstanceCreateOrConnectWithoutMedicationInput[]
    createMany?: DoseInstanceCreateManyMedicationInputEnvelope
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<ScheduleCreateWithoutMedicationInput, ScheduleUncheckedCreateWithoutMedicationInput> | ScheduleCreateWithoutMedicationInput[] | ScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutMedicationInput | ScheduleCreateOrConnectWithoutMedicationInput[]
    createMany?: ScheduleCreateManyMedicationInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedOneWithoutMedicationInput = {
    create?: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicationInput
    connect?: InventoryWhereUniqueInput
  }

  export type DoseInstanceUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<DoseInstanceCreateWithoutMedicationInput, DoseInstanceUncheckedCreateWithoutMedicationInput> | DoseInstanceCreateWithoutMedicationInput[] | DoseInstanceUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutMedicationInput | DoseInstanceCreateOrConnectWithoutMedicationInput[]
    createMany?: DoseInstanceCreateManyMedicationInputEnvelope
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PatientUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<PatientCreateWithoutMedicationsInput, PatientUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicationsInput
    upsert?: PatientUpsertWithoutMedicationsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicationsInput, PatientUpdateWithoutMedicationsInput>, PatientUncheckedUpdateWithoutMedicationsInput>
  }

  export type ScheduleUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<ScheduleCreateWithoutMedicationInput, ScheduleUncheckedCreateWithoutMedicationInput> | ScheduleCreateWithoutMedicationInput[] | ScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutMedicationInput | ScheduleCreateOrConnectWithoutMedicationInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutMedicationInput | ScheduleUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: ScheduleCreateManyMedicationInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutMedicationInput | ScheduleUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutMedicationInput | ScheduleUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type InventoryUpdateOneWithoutMedicationNestedInput = {
    create?: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicationInput
    upsert?: InventoryUpsertWithoutMedicationInput
    disconnect?: InventoryWhereInput | boolean
    delete?: InventoryWhereInput | boolean
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutMedicationInput, InventoryUpdateWithoutMedicationInput>, InventoryUncheckedUpdateWithoutMedicationInput>
  }

  export type DoseInstanceUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<DoseInstanceCreateWithoutMedicationInput, DoseInstanceUncheckedCreateWithoutMedicationInput> | DoseInstanceCreateWithoutMedicationInput[] | DoseInstanceUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutMedicationInput | DoseInstanceCreateOrConnectWithoutMedicationInput[]
    upsert?: DoseInstanceUpsertWithWhereUniqueWithoutMedicationInput | DoseInstanceUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: DoseInstanceCreateManyMedicationInputEnvelope
    set?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    disconnect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    delete?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    update?: DoseInstanceUpdateWithWhereUniqueWithoutMedicationInput | DoseInstanceUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: DoseInstanceUpdateManyWithWhereWithoutMedicationInput | DoseInstanceUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: DoseInstanceScalarWhereInput | DoseInstanceScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<ScheduleCreateWithoutMedicationInput, ScheduleUncheckedCreateWithoutMedicationInput> | ScheduleCreateWithoutMedicationInput[] | ScheduleUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutMedicationInput | ScheduleCreateOrConnectWithoutMedicationInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutMedicationInput | ScheduleUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: ScheduleCreateManyMedicationInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutMedicationInput | ScheduleUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutMedicationInput | ScheduleUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateOneWithoutMedicationNestedInput = {
    create?: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutMedicationInput
    upsert?: InventoryUpsertWithoutMedicationInput
    disconnect?: InventoryWhereInput | boolean
    delete?: InventoryWhereInput | boolean
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutMedicationInput, InventoryUpdateWithoutMedicationInput>, InventoryUncheckedUpdateWithoutMedicationInput>
  }

  export type DoseInstanceUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<DoseInstanceCreateWithoutMedicationInput, DoseInstanceUncheckedCreateWithoutMedicationInput> | DoseInstanceCreateWithoutMedicationInput[] | DoseInstanceUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutMedicationInput | DoseInstanceCreateOrConnectWithoutMedicationInput[]
    upsert?: DoseInstanceUpsertWithWhereUniqueWithoutMedicationInput | DoseInstanceUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: DoseInstanceCreateManyMedicationInputEnvelope
    set?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    disconnect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    delete?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    update?: DoseInstanceUpdateWithWhereUniqueWithoutMedicationInput | DoseInstanceUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: DoseInstanceUpdateManyWithWhereWithoutMedicationInput | DoseInstanceUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: DoseInstanceScalarWhereInput | DoseInstanceScalarWhereInput[]
  }

  export type ScheduleCreatetimeSlotsInput = {
    set: Date[] | string[]
  }

  export type MedicationCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutSchedulesInput
    connect?: MedicationWhereUniqueInput
  }

  export type DoseInstanceCreateNestedManyWithoutScheduleInput = {
    create?: XOR<DoseInstanceCreateWithoutScheduleInput, DoseInstanceUncheckedCreateWithoutScheduleInput> | DoseInstanceCreateWithoutScheduleInput[] | DoseInstanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutScheduleInput | DoseInstanceCreateOrConnectWithoutScheduleInput[]
    createMany?: DoseInstanceCreateManyScheduleInputEnvelope
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
  }

  export type DoseInstanceUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<DoseInstanceCreateWithoutScheduleInput, DoseInstanceUncheckedCreateWithoutScheduleInput> | DoseInstanceCreateWithoutScheduleInput[] | DoseInstanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutScheduleInput | DoseInstanceCreateOrConnectWithoutScheduleInput[]
    createMany?: DoseInstanceCreateManyScheduleInputEnvelope
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
  }

  export type ScheduleUpdatetimeSlotsInput = {
    set?: Date[] | string[]
    push?: Date | string | Date[] | string[]
  }

  export type MedicationUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutSchedulesInput
    upsert?: MedicationUpsertWithoutSchedulesInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutSchedulesInput, MedicationUpdateWithoutSchedulesInput>, MedicationUncheckedUpdateWithoutSchedulesInput>
  }

  export type DoseInstanceUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<DoseInstanceCreateWithoutScheduleInput, DoseInstanceUncheckedCreateWithoutScheduleInput> | DoseInstanceCreateWithoutScheduleInput[] | DoseInstanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutScheduleInput | DoseInstanceCreateOrConnectWithoutScheduleInput[]
    upsert?: DoseInstanceUpsertWithWhereUniqueWithoutScheduleInput | DoseInstanceUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: DoseInstanceCreateManyScheduleInputEnvelope
    set?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    disconnect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    delete?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    update?: DoseInstanceUpdateWithWhereUniqueWithoutScheduleInput | DoseInstanceUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: DoseInstanceUpdateManyWithWhereWithoutScheduleInput | DoseInstanceUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: DoseInstanceScalarWhereInput | DoseInstanceScalarWhereInput[]
  }

  export type DoseInstanceUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<DoseInstanceCreateWithoutScheduleInput, DoseInstanceUncheckedCreateWithoutScheduleInput> | DoseInstanceCreateWithoutScheduleInput[] | DoseInstanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutScheduleInput | DoseInstanceCreateOrConnectWithoutScheduleInput[]
    upsert?: DoseInstanceUpsertWithWhereUniqueWithoutScheduleInput | DoseInstanceUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: DoseInstanceCreateManyScheduleInputEnvelope
    set?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    disconnect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    delete?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    connect?: DoseInstanceWhereUniqueInput | DoseInstanceWhereUniqueInput[]
    update?: DoseInstanceUpdateWithWhereUniqueWithoutScheduleInput | DoseInstanceUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: DoseInstanceUpdateManyWithWhereWithoutScheduleInput | DoseInstanceUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: DoseInstanceScalarWhereInput | DoseInstanceScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutDoseInstancesInput = {
    create?: XOR<PatientCreateWithoutDoseInstancesInput, PatientUncheckedCreateWithoutDoseInstancesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutDoseInstancesInput
    connect?: PatientWhereUniqueInput
  }

  export type ScheduleCreateNestedOneWithoutDoseInstancesInput = {
    create?: XOR<ScheduleCreateWithoutDoseInstancesInput, ScheduleUncheckedCreateWithoutDoseInstancesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutDoseInstancesInput
    connect?: ScheduleWhereUniqueInput
  }

  export type MedicationCreateNestedOneWithoutDoseInstancesInput = {
    create?: XOR<MedicationCreateWithoutDoseInstancesInput, MedicationUncheckedCreateWithoutDoseInstancesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutDoseInstancesInput
    connect?: MedicationWhereUniqueInput
  }

  export type AdherenceLogCreateNestedManyWithoutDoseInstanceInput = {
    create?: XOR<AdherenceLogCreateWithoutDoseInstanceInput, AdherenceLogUncheckedCreateWithoutDoseInstanceInput> | AdherenceLogCreateWithoutDoseInstanceInput[] | AdherenceLogUncheckedCreateWithoutDoseInstanceInput[]
    connectOrCreate?: AdherenceLogCreateOrConnectWithoutDoseInstanceInput | AdherenceLogCreateOrConnectWithoutDoseInstanceInput[]
    createMany?: AdherenceLogCreateManyDoseInstanceInputEnvelope
    connect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
  }

  export type AdherenceLogUncheckedCreateNestedManyWithoutDoseInstanceInput = {
    create?: XOR<AdherenceLogCreateWithoutDoseInstanceInput, AdherenceLogUncheckedCreateWithoutDoseInstanceInput> | AdherenceLogCreateWithoutDoseInstanceInput[] | AdherenceLogUncheckedCreateWithoutDoseInstanceInput[]
    connectOrCreate?: AdherenceLogCreateOrConnectWithoutDoseInstanceInput | AdherenceLogCreateOrConnectWithoutDoseInstanceInput[]
    createMany?: AdherenceLogCreateManyDoseInstanceInputEnvelope
    connect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
  }

  export type EnumDoseStatusFieldUpdateOperationsInput = {
    set?: $Enums.DoseStatus
  }

  export type PatientUpdateOneRequiredWithoutDoseInstancesNestedInput = {
    create?: XOR<PatientCreateWithoutDoseInstancesInput, PatientUncheckedCreateWithoutDoseInstancesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutDoseInstancesInput
    upsert?: PatientUpsertWithoutDoseInstancesInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutDoseInstancesInput, PatientUpdateWithoutDoseInstancesInput>, PatientUncheckedUpdateWithoutDoseInstancesInput>
  }

  export type ScheduleUpdateOneRequiredWithoutDoseInstancesNestedInput = {
    create?: XOR<ScheduleCreateWithoutDoseInstancesInput, ScheduleUncheckedCreateWithoutDoseInstancesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutDoseInstancesInput
    upsert?: ScheduleUpsertWithoutDoseInstancesInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutDoseInstancesInput, ScheduleUpdateWithoutDoseInstancesInput>, ScheduleUncheckedUpdateWithoutDoseInstancesInput>
  }

  export type MedicationUpdateOneRequiredWithoutDoseInstancesNestedInput = {
    create?: XOR<MedicationCreateWithoutDoseInstancesInput, MedicationUncheckedCreateWithoutDoseInstancesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutDoseInstancesInput
    upsert?: MedicationUpsertWithoutDoseInstancesInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutDoseInstancesInput, MedicationUpdateWithoutDoseInstancesInput>, MedicationUncheckedUpdateWithoutDoseInstancesInput>
  }

  export type AdherenceLogUpdateManyWithoutDoseInstanceNestedInput = {
    create?: XOR<AdherenceLogCreateWithoutDoseInstanceInput, AdherenceLogUncheckedCreateWithoutDoseInstanceInput> | AdherenceLogCreateWithoutDoseInstanceInput[] | AdherenceLogUncheckedCreateWithoutDoseInstanceInput[]
    connectOrCreate?: AdherenceLogCreateOrConnectWithoutDoseInstanceInput | AdherenceLogCreateOrConnectWithoutDoseInstanceInput[]
    upsert?: AdherenceLogUpsertWithWhereUniqueWithoutDoseInstanceInput | AdherenceLogUpsertWithWhereUniqueWithoutDoseInstanceInput[]
    createMany?: AdherenceLogCreateManyDoseInstanceInputEnvelope
    set?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    disconnect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    delete?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    connect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    update?: AdherenceLogUpdateWithWhereUniqueWithoutDoseInstanceInput | AdherenceLogUpdateWithWhereUniqueWithoutDoseInstanceInput[]
    updateMany?: AdherenceLogUpdateManyWithWhereWithoutDoseInstanceInput | AdherenceLogUpdateManyWithWhereWithoutDoseInstanceInput[]
    deleteMany?: AdherenceLogScalarWhereInput | AdherenceLogScalarWhereInput[]
  }

  export type AdherenceLogUncheckedUpdateManyWithoutDoseInstanceNestedInput = {
    create?: XOR<AdherenceLogCreateWithoutDoseInstanceInput, AdherenceLogUncheckedCreateWithoutDoseInstanceInput> | AdherenceLogCreateWithoutDoseInstanceInput[] | AdherenceLogUncheckedCreateWithoutDoseInstanceInput[]
    connectOrCreate?: AdherenceLogCreateOrConnectWithoutDoseInstanceInput | AdherenceLogCreateOrConnectWithoutDoseInstanceInput[]
    upsert?: AdherenceLogUpsertWithWhereUniqueWithoutDoseInstanceInput | AdherenceLogUpsertWithWhereUniqueWithoutDoseInstanceInput[]
    createMany?: AdherenceLogCreateManyDoseInstanceInputEnvelope
    set?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    disconnect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    delete?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    connect?: AdherenceLogWhereUniqueInput | AdherenceLogWhereUniqueInput[]
    update?: AdherenceLogUpdateWithWhereUniqueWithoutDoseInstanceInput | AdherenceLogUpdateWithWhereUniqueWithoutDoseInstanceInput[]
    updateMany?: AdherenceLogUpdateManyWithWhereWithoutDoseInstanceInput | AdherenceLogUpdateManyWithWhereWithoutDoseInstanceInput[]
    deleteMany?: AdherenceLogScalarWhereInput | AdherenceLogScalarWhereInput[]
  }

  export type DoseInstanceCreateNestedOneWithoutAdherenceLogsInput = {
    create?: XOR<DoseInstanceCreateWithoutAdherenceLogsInput, DoseInstanceUncheckedCreateWithoutAdherenceLogsInput>
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutAdherenceLogsInput
    connect?: DoseInstanceWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutAdherenceLogsInput = {
    create?: XOR<PatientCreateWithoutAdherenceLogsInput, PatientUncheckedCreateWithoutAdherenceLogsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAdherenceLogsInput
    connect?: PatientWhereUniqueInput
  }

  export type EnumAdherenceActionFieldUpdateOperationsInput = {
    set?: $Enums.AdherenceAction
  }

  export type EnumAdherenceSourceFieldUpdateOperationsInput = {
    set?: $Enums.AdherenceSource
  }

  export type DoseInstanceUpdateOneRequiredWithoutAdherenceLogsNestedInput = {
    create?: XOR<DoseInstanceCreateWithoutAdherenceLogsInput, DoseInstanceUncheckedCreateWithoutAdherenceLogsInput>
    connectOrCreate?: DoseInstanceCreateOrConnectWithoutAdherenceLogsInput
    upsert?: DoseInstanceUpsertWithoutAdherenceLogsInput
    connect?: DoseInstanceWhereUniqueInput
    update?: XOR<XOR<DoseInstanceUpdateToOneWithWhereWithoutAdherenceLogsInput, DoseInstanceUpdateWithoutAdherenceLogsInput>, DoseInstanceUncheckedUpdateWithoutAdherenceLogsInput>
  }

  export type PatientUpdateOneRequiredWithoutAdherenceLogsNestedInput = {
    create?: XOR<PatientCreateWithoutAdherenceLogsInput, PatientUncheckedCreateWithoutAdherenceLogsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAdherenceLogsInput
    upsert?: PatientUpsertWithoutAdherenceLogsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAdherenceLogsInput, PatientUpdateWithoutAdherenceLogsInput>, PatientUncheckedUpdateWithoutAdherenceLogsInput>
  }

  export type MedicationCreateNestedOneWithoutInventoryInput = {
    create?: XOR<MedicationCreateWithoutInventoryInput, MedicationUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutInventoryInput
    connect?: MedicationWhereUniqueInput
  }

  export type InventoryAdjustmentCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutInventoryInput, InventoryAdjustmentUncheckedCreateWithoutInventoryInput> | InventoryAdjustmentCreateWithoutInventoryInput[] | InventoryAdjustmentUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutInventoryInput | InventoryAdjustmentCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryAdjustmentCreateManyInventoryInputEnvelope
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
  }

  export type InventoryAdjustmentUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutInventoryInput, InventoryAdjustmentUncheckedCreateWithoutInventoryInput> | InventoryAdjustmentCreateWithoutInventoryInput[] | InventoryAdjustmentUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutInventoryInput | InventoryAdjustmentCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryAdjustmentCreateManyInventoryInputEnvelope
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
  }

  export type MedicationUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<MedicationCreateWithoutInventoryInput, MedicationUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutInventoryInput
    upsert?: MedicationUpsertWithoutInventoryInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutInventoryInput, MedicationUpdateWithoutInventoryInput>, MedicationUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryAdjustmentUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutInventoryInput, InventoryAdjustmentUncheckedCreateWithoutInventoryInput> | InventoryAdjustmentCreateWithoutInventoryInput[] | InventoryAdjustmentUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutInventoryInput | InventoryAdjustmentCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryAdjustmentUpsertWithWhereUniqueWithoutInventoryInput | InventoryAdjustmentUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryAdjustmentCreateManyInventoryInputEnvelope
    set?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    disconnect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    delete?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    update?: InventoryAdjustmentUpdateWithWhereUniqueWithoutInventoryInput | InventoryAdjustmentUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryAdjustmentUpdateManyWithWhereWithoutInventoryInput | InventoryAdjustmentUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryAdjustmentScalarWhereInput | InventoryAdjustmentScalarWhereInput[]
  }

  export type InventoryAdjustmentUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryAdjustmentCreateWithoutInventoryInput, InventoryAdjustmentUncheckedCreateWithoutInventoryInput> | InventoryAdjustmentCreateWithoutInventoryInput[] | InventoryAdjustmentUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryAdjustmentCreateOrConnectWithoutInventoryInput | InventoryAdjustmentCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryAdjustmentUpsertWithWhereUniqueWithoutInventoryInput | InventoryAdjustmentUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryAdjustmentCreateManyInventoryInputEnvelope
    set?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    disconnect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    delete?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    connect?: InventoryAdjustmentWhereUniqueInput | InventoryAdjustmentWhereUniqueInput[]
    update?: InventoryAdjustmentUpdateWithWhereUniqueWithoutInventoryInput | InventoryAdjustmentUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryAdjustmentUpdateManyWithWhereWithoutInventoryInput | InventoryAdjustmentUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryAdjustmentScalarWhereInput | InventoryAdjustmentScalarWhereInput[]
  }

  export type InventoryCreateNestedOneWithoutAdjustmentsInput = {
    create?: XOR<InventoryCreateWithoutAdjustmentsInput, InventoryUncheckedCreateWithoutAdjustmentsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutAdjustmentsInput
    connect?: InventoryWhereUniqueInput
  }

  export type EnumInventoryAdjustmentReasonFieldUpdateOperationsInput = {
    set?: $Enums.InventoryAdjustmentReason
  }

  export type InventoryUpdateOneRequiredWithoutAdjustmentsNestedInput = {
    create?: XOR<InventoryCreateWithoutAdjustmentsInput, InventoryUncheckedCreateWithoutAdjustmentsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutAdjustmentsInput
    upsert?: InventoryUpsertWithoutAdjustmentsInput
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutAdjustmentsInput, InventoryUpdateWithoutAdjustmentsInput>, InventoryUncheckedUpdateWithoutAdjustmentsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumProfileRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileRole | EnumProfileRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileRole[] | ListEnumProfileRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileRole[] | ListEnumProfileRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileRoleFilter<$PrismaModel> | $Enums.ProfileRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumProfileRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileRole | EnumProfileRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProfileRole[] | ListEnumProfileRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProfileRole[] | ListEnumProfileRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProfileRoleWithAggregatesFilter<$PrismaModel> | $Enums.ProfileRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProfileRoleFilter<$PrismaModel>
    _max?: NestedEnumProfileRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDoseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseStatus | EnumDoseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDoseStatusFilter<$PrismaModel> | $Enums.DoseStatus
  }

  export type NestedEnumDoseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoseStatus | EnumDoseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DoseStatus[] | ListEnumDoseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDoseStatusWithAggregatesFilter<$PrismaModel> | $Enums.DoseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDoseStatusFilter<$PrismaModel>
    _max?: NestedEnumDoseStatusFilter<$PrismaModel>
  }

  export type NestedEnumAdherenceActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AdherenceAction | EnumAdherenceActionFieldRefInput<$PrismaModel>
    in?: $Enums.AdherenceAction[] | ListEnumAdherenceActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdherenceAction[] | ListEnumAdherenceActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAdherenceActionFilter<$PrismaModel> | $Enums.AdherenceAction
  }

  export type NestedEnumAdherenceSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.AdherenceSource | EnumAdherenceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AdherenceSource[] | ListEnumAdherenceSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdherenceSource[] | ListEnumAdherenceSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAdherenceSourceFilter<$PrismaModel> | $Enums.AdherenceSource
  }

  export type NestedEnumAdherenceActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdherenceAction | EnumAdherenceActionFieldRefInput<$PrismaModel>
    in?: $Enums.AdherenceAction[] | ListEnumAdherenceActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdherenceAction[] | ListEnumAdherenceActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAdherenceActionWithAggregatesFilter<$PrismaModel> | $Enums.AdherenceAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdherenceActionFilter<$PrismaModel>
    _max?: NestedEnumAdherenceActionFilter<$PrismaModel>
  }

  export type NestedEnumAdherenceSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdherenceSource | EnumAdherenceSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AdherenceSource[] | ListEnumAdherenceSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdherenceSource[] | ListEnumAdherenceSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAdherenceSourceWithAggregatesFilter<$PrismaModel> | $Enums.AdherenceSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdherenceSourceFilter<$PrismaModel>
    _max?: NestedEnumAdherenceSourceFilter<$PrismaModel>
  }

  export type NestedEnumInventoryAdjustmentReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAdjustmentReason | EnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAdjustmentReason[] | ListEnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryAdjustmentReason[] | ListEnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryAdjustmentReasonFilter<$PrismaModel> | $Enums.InventoryAdjustmentReason
  }

  export type NestedEnumInventoryAdjustmentReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAdjustmentReason | EnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAdjustmentReason[] | ListEnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryAdjustmentReason[] | ListEnumInventoryAdjustmentReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryAdjustmentReasonWithAggregatesFilter<$PrismaModel> | $Enums.InventoryAdjustmentReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryAdjustmentReasonFilter<$PrismaModel>
    _max?: NestedEnumInventoryAdjustmentReasonFilter<$PrismaModel>
  }

  export type CaregiverCreateWithoutProfileInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    patients?: PatientCreateNestedManyWithoutCaregiverInput
    linkCodes?: LinkCodeCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUncheckedCreateWithoutProfileInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutCaregiverInput
    linkCodes?: LinkCodeUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverCreateOrConnectWithoutProfileInput = {
    where: CaregiverWhereUniqueInput
    create: XOR<CaregiverCreateWithoutProfileInput, CaregiverUncheckedCreateWithoutProfileInput>
  }

  export type CaregiverUpsertWithoutProfileInput = {
    update: XOR<CaregiverUpdateWithoutProfileInput, CaregiverUncheckedUpdateWithoutProfileInput>
    create: XOR<CaregiverCreateWithoutProfileInput, CaregiverUncheckedCreateWithoutProfileInput>
    where?: CaregiverWhereInput
  }

  export type CaregiverUpdateToOneWithWhereWithoutProfileInput = {
    where?: CaregiverWhereInput
    data: XOR<CaregiverUpdateWithoutProfileInput, CaregiverUncheckedUpdateWithoutProfileInput>
  }

  export type CaregiverUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutCaregiverNestedInput
    linkCodes?: LinkCodeUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutCaregiverNestedInput
    linkCodes?: LinkCodeUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type ProfileCreateWithoutCaregiverInput = {
    id: string
    role?: $Enums.ProfileRole
    createdAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutCaregiverInput = {
    id: string
    role?: $Enums.ProfileRole
    createdAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutCaregiverInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutCaregiverInput, ProfileUncheckedCreateWithoutCaregiverInput>
  }

  export type PatientCreateWithoutCaregiverInput = {
    id?: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    medications?: MedicationCreateNestedManyWithoutPatientInput
    sessions?: PatientSessionCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutCaregiverInput = {
    id?: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutPatientInput
    sessions?: PatientSessionUncheckedCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogUncheckedCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutCaregiverInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutCaregiverInput, PatientUncheckedCreateWithoutCaregiverInput>
  }

  export type PatientCreateManyCaregiverInputEnvelope = {
    data: PatientCreateManyCaregiverInput | PatientCreateManyCaregiverInput[]
    skipDuplicates?: boolean
  }

  export type LinkCodeCreateWithoutCaregiverInput = {
    id?: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    patient?: PatientCreateNestedOneWithoutLinkCodesInput
  }

  export type LinkCodeUncheckedCreateWithoutCaregiverInput = {
    id?: string
    patientId?: string | null
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type LinkCodeCreateOrConnectWithoutCaregiverInput = {
    where: LinkCodeWhereUniqueInput
    create: XOR<LinkCodeCreateWithoutCaregiverInput, LinkCodeUncheckedCreateWithoutCaregiverInput>
  }

  export type LinkCodeCreateManyCaregiverInputEnvelope = {
    data: LinkCodeCreateManyCaregiverInput | LinkCodeCreateManyCaregiverInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutCaregiverInput = {
    update: XOR<ProfileUpdateWithoutCaregiverInput, ProfileUncheckedUpdateWithoutCaregiverInput>
    create: XOR<ProfileCreateWithoutCaregiverInput, ProfileUncheckedCreateWithoutCaregiverInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutCaregiverInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutCaregiverInput, ProfileUncheckedUpdateWithoutCaregiverInput>
  }

  export type ProfileUpdateWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProfileRoleFieldUpdateOperationsInput | $Enums.ProfileRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumProfileRoleFieldUpdateOperationsInput | $Enums.ProfileRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpsertWithWhereUniqueWithoutCaregiverInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutCaregiverInput, PatientUncheckedUpdateWithoutCaregiverInput>
    create: XOR<PatientCreateWithoutCaregiverInput, PatientUncheckedCreateWithoutCaregiverInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutCaregiverInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutCaregiverInput, PatientUncheckedUpdateWithoutCaregiverInput>
  }

  export type PatientUpdateManyWithWhereWithoutCaregiverInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutCaregiverInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: UuidFilter<"Patient"> | string
    caregiverId?: UuidFilter<"Patient"> | string
    displayName?: StringFilter<"Patient"> | string
    timezone?: StringFilter<"Patient"> | string
    createdAt?: DateTimeFilter<"Patient"> | Date | string
  }

  export type LinkCodeUpsertWithWhereUniqueWithoutCaregiverInput = {
    where: LinkCodeWhereUniqueInput
    update: XOR<LinkCodeUpdateWithoutCaregiverInput, LinkCodeUncheckedUpdateWithoutCaregiverInput>
    create: XOR<LinkCodeCreateWithoutCaregiverInput, LinkCodeUncheckedCreateWithoutCaregiverInput>
  }

  export type LinkCodeUpdateWithWhereUniqueWithoutCaregiverInput = {
    where: LinkCodeWhereUniqueInput
    data: XOR<LinkCodeUpdateWithoutCaregiverInput, LinkCodeUncheckedUpdateWithoutCaregiverInput>
  }

  export type LinkCodeUpdateManyWithWhereWithoutCaregiverInput = {
    where: LinkCodeScalarWhereInput
    data: XOR<LinkCodeUpdateManyMutationInput, LinkCodeUncheckedUpdateManyWithoutCaregiverInput>
  }

  export type LinkCodeScalarWhereInput = {
    AND?: LinkCodeScalarWhereInput | LinkCodeScalarWhereInput[]
    OR?: LinkCodeScalarWhereInput[]
    NOT?: LinkCodeScalarWhereInput | LinkCodeScalarWhereInput[]
    id?: UuidFilter<"LinkCode"> | string
    caregiverId?: UuidFilter<"LinkCode"> | string
    patientId?: UuidNullableFilter<"LinkCode"> | string | null
    code?: StringFilter<"LinkCode"> | string
    expiresAt?: DateTimeFilter<"LinkCode"> | Date | string
    usedAt?: DateTimeNullableFilter<"LinkCode"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"LinkCode"> | Date | string | null
    createdAt?: DateTimeFilter<"LinkCode"> | Date | string
  }

  export type CaregiverCreateWithoutPatientsInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutCaregiverInput
    linkCodes?: LinkCodeCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUncheckedCreateWithoutPatientsInput = {
    id?: string
    profileId: string
    displayName: string
    createdAt?: Date | string
    linkCodes?: LinkCodeUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverCreateOrConnectWithoutPatientsInput = {
    where: CaregiverWhereUniqueInput
    create: XOR<CaregiverCreateWithoutPatientsInput, CaregiverUncheckedCreateWithoutPatientsInput>
  }

  export type MedicationCreateWithoutPatientInput = {
    id?: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    schedules?: ScheduleCreateNestedManyWithoutMedicationInput
    inventory?: InventoryCreateNestedOneWithoutMedicationInput
    doseInstances?: DoseInstanceCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutPatientInput = {
    id?: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutMedicationInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutMedicationInput
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutPatientInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutPatientInput, MedicationUncheckedCreateWithoutPatientInput>
  }

  export type MedicationCreateManyPatientInputEnvelope = {
    data: MedicationCreateManyPatientInput | MedicationCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PatientSessionCreateWithoutPatientInput = {
    id?: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rotatedFrom?: PatientSessionCreateNestedOneWithoutRotatedToInput
    rotatedTo?: PatientSessionCreateNestedManyWithoutRotatedFromInput
  }

  export type PatientSessionUncheckedCreateWithoutPatientInput = {
    id?: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    rotatedFromId?: string | null
    revokedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rotatedTo?: PatientSessionUncheckedCreateNestedManyWithoutRotatedFromInput
  }

  export type PatientSessionCreateOrConnectWithoutPatientInput = {
    where: PatientSessionWhereUniqueInput
    create: XOR<PatientSessionCreateWithoutPatientInput, PatientSessionUncheckedCreateWithoutPatientInput>
  }

  export type PatientSessionCreateManyPatientInputEnvelope = {
    data: PatientSessionCreateManyPatientInput | PatientSessionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type DoseInstanceCreateWithoutPatientInput = {
    id?: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
    schedule: ScheduleCreateNestedOneWithoutDoseInstancesInput
    medication: MedicationCreateNestedOneWithoutDoseInstancesInput
    adherenceLogs?: AdherenceLogCreateNestedManyWithoutDoseInstanceInput
  }

  export type DoseInstanceUncheckedCreateWithoutPatientInput = {
    id?: string
    scheduleId: string
    medicationId: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
    adherenceLogs?: AdherenceLogUncheckedCreateNestedManyWithoutDoseInstanceInput
  }

  export type DoseInstanceCreateOrConnectWithoutPatientInput = {
    where: DoseInstanceWhereUniqueInput
    create: XOR<DoseInstanceCreateWithoutPatientInput, DoseInstanceUncheckedCreateWithoutPatientInput>
  }

  export type DoseInstanceCreateManyPatientInputEnvelope = {
    data: DoseInstanceCreateManyPatientInput | DoseInstanceCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AdherenceLogCreateWithoutPatientInput = {
    id?: string
    action: $Enums.AdherenceAction
    takenAt: Date | string
    source: $Enums.AdherenceSource
    clientUuid: string
    createdAt?: Date | string
    doseInstance: DoseInstanceCreateNestedOneWithoutAdherenceLogsInput
  }

  export type AdherenceLogUncheckedCreateWithoutPatientInput = {
    id?: string
    doseInstanceId: string
    action: $Enums.AdherenceAction
    takenAt: Date | string
    source: $Enums.AdherenceSource
    clientUuid: string
    createdAt?: Date | string
  }

  export type AdherenceLogCreateOrConnectWithoutPatientInput = {
    where: AdherenceLogWhereUniqueInput
    create: XOR<AdherenceLogCreateWithoutPatientInput, AdherenceLogUncheckedCreateWithoutPatientInput>
  }

  export type AdherenceLogCreateManyPatientInputEnvelope = {
    data: AdherenceLogCreateManyPatientInput | AdherenceLogCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type LinkCodeCreateWithoutPatientInput = {
    id?: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
    caregiver: CaregiverCreateNestedOneWithoutLinkCodesInput
  }

  export type LinkCodeUncheckedCreateWithoutPatientInput = {
    id?: string
    caregiverId: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type LinkCodeCreateOrConnectWithoutPatientInput = {
    where: LinkCodeWhereUniqueInput
    create: XOR<LinkCodeCreateWithoutPatientInput, LinkCodeUncheckedCreateWithoutPatientInput>
  }

  export type LinkCodeCreateManyPatientInputEnvelope = {
    data: LinkCodeCreateManyPatientInput | LinkCodeCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type CaregiverUpsertWithoutPatientsInput = {
    update: XOR<CaregiverUpdateWithoutPatientsInput, CaregiverUncheckedUpdateWithoutPatientsInput>
    create: XOR<CaregiverCreateWithoutPatientsInput, CaregiverUncheckedCreateWithoutPatientsInput>
    where?: CaregiverWhereInput
  }

  export type CaregiverUpdateToOneWithWhereWithoutPatientsInput = {
    where?: CaregiverWhereInput
    data: XOR<CaregiverUpdateWithoutPatientsInput, CaregiverUncheckedUpdateWithoutPatientsInput>
  }

  export type CaregiverUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutCaregiverNestedInput
    linkCodes?: LinkCodeUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkCodes?: LinkCodeUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type MedicationUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutPatientInput, MedicationUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicationCreateWithoutPatientInput, MedicationUncheckedCreateWithoutPatientInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutPatientInput, MedicationUncheckedUpdateWithoutPatientInput>
  }

  export type MedicationUpdateManyWithWhereWithoutPatientInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicationScalarWhereInput = {
    AND?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    OR?: MedicationScalarWhereInput[]
    NOT?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    id?: UuidFilter<"Medication"> | string
    patientId?: UuidFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    dosage?: StringFilter<"Medication"> | string
    doseCountPerIntake?: IntFilter<"Medication"> | number
    notes?: StringNullableFilter<"Medication"> | string | null
    startDate?: DateTimeFilter<"Medication"> | Date | string
    endDate?: DateTimeNullableFilter<"Medication"> | Date | string | null
    isActive?: BoolFilter<"Medication"> | boolean
    createdAt?: DateTimeFilter<"Medication"> | Date | string
  }

  export type PatientSessionUpsertWithWhereUniqueWithoutPatientInput = {
    where: PatientSessionWhereUniqueInput
    update: XOR<PatientSessionUpdateWithoutPatientInput, PatientSessionUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientSessionCreateWithoutPatientInput, PatientSessionUncheckedCreateWithoutPatientInput>
  }

  export type PatientSessionUpdateWithWhereUniqueWithoutPatientInput = {
    where: PatientSessionWhereUniqueInput
    data: XOR<PatientSessionUpdateWithoutPatientInput, PatientSessionUncheckedUpdateWithoutPatientInput>
  }

  export type PatientSessionUpdateManyWithWhereWithoutPatientInput = {
    where: PatientSessionScalarWhereInput
    data: XOR<PatientSessionUpdateManyMutationInput, PatientSessionUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientSessionScalarWhereInput = {
    AND?: PatientSessionScalarWhereInput | PatientSessionScalarWhereInput[]
    OR?: PatientSessionScalarWhereInput[]
    NOT?: PatientSessionScalarWhereInput | PatientSessionScalarWhereInput[]
    id?: UuidFilter<"PatientSession"> | string
    patientId?: UuidFilter<"PatientSession"> | string
    tokenHash?: StringFilter<"PatientSession"> | string
    issuedAt?: DateTimeFilter<"PatientSession"> | Date | string
    expiresAt?: DateTimeFilter<"PatientSession"> | Date | string
    rotatedFromId?: UuidNullableFilter<"PatientSession"> | string | null
    revokedAt?: DateTimeNullableFilter<"PatientSession"> | Date | string | null
    lastSeenAt?: DateTimeNullableFilter<"PatientSession"> | Date | string | null
  }

  export type DoseInstanceUpsertWithWhereUniqueWithoutPatientInput = {
    where: DoseInstanceWhereUniqueInput
    update: XOR<DoseInstanceUpdateWithoutPatientInput, DoseInstanceUncheckedUpdateWithoutPatientInput>
    create: XOR<DoseInstanceCreateWithoutPatientInput, DoseInstanceUncheckedCreateWithoutPatientInput>
  }

  export type DoseInstanceUpdateWithWhereUniqueWithoutPatientInput = {
    where: DoseInstanceWhereUniqueInput
    data: XOR<DoseInstanceUpdateWithoutPatientInput, DoseInstanceUncheckedUpdateWithoutPatientInput>
  }

  export type DoseInstanceUpdateManyWithWhereWithoutPatientInput = {
    where: DoseInstanceScalarWhereInput
    data: XOR<DoseInstanceUpdateManyMutationInput, DoseInstanceUncheckedUpdateManyWithoutPatientInput>
  }

  export type DoseInstanceScalarWhereInput = {
    AND?: DoseInstanceScalarWhereInput | DoseInstanceScalarWhereInput[]
    OR?: DoseInstanceScalarWhereInput[]
    NOT?: DoseInstanceScalarWhereInput | DoseInstanceScalarWhereInput[]
    id?: UuidFilter<"DoseInstance"> | string
    patientId?: UuidFilter<"DoseInstance"> | string
    scheduleId?: UuidFilter<"DoseInstance"> | string
    medicationId?: UuidFilter<"DoseInstance"> | string
    scheduledFor?: DateTimeFilter<"DoseInstance"> | Date | string
    status?: EnumDoseStatusFilter<"DoseInstance"> | $Enums.DoseStatus
    createdAt?: DateTimeFilter<"DoseInstance"> | Date | string
  }

  export type AdherenceLogUpsertWithWhereUniqueWithoutPatientInput = {
    where: AdherenceLogWhereUniqueInput
    update: XOR<AdherenceLogUpdateWithoutPatientInput, AdherenceLogUncheckedUpdateWithoutPatientInput>
    create: XOR<AdherenceLogCreateWithoutPatientInput, AdherenceLogUncheckedCreateWithoutPatientInput>
  }

  export type AdherenceLogUpdateWithWhereUniqueWithoutPatientInput = {
    where: AdherenceLogWhereUniqueInput
    data: XOR<AdherenceLogUpdateWithoutPatientInput, AdherenceLogUncheckedUpdateWithoutPatientInput>
  }

  export type AdherenceLogUpdateManyWithWhereWithoutPatientInput = {
    where: AdherenceLogScalarWhereInput
    data: XOR<AdherenceLogUpdateManyMutationInput, AdherenceLogUncheckedUpdateManyWithoutPatientInput>
  }

  export type AdherenceLogScalarWhereInput = {
    AND?: AdherenceLogScalarWhereInput | AdherenceLogScalarWhereInput[]
    OR?: AdherenceLogScalarWhereInput[]
    NOT?: AdherenceLogScalarWhereInput | AdherenceLogScalarWhereInput[]
    id?: UuidFilter<"AdherenceLog"> | string
    doseInstanceId?: UuidFilter<"AdherenceLog"> | string
    patientId?: UuidFilter<"AdherenceLog"> | string
    action?: EnumAdherenceActionFilter<"AdherenceLog"> | $Enums.AdherenceAction
    takenAt?: DateTimeFilter<"AdherenceLog"> | Date | string
    source?: EnumAdherenceSourceFilter<"AdherenceLog"> | $Enums.AdherenceSource
    clientUuid?: UuidFilter<"AdherenceLog"> | string
    createdAt?: DateTimeFilter<"AdherenceLog"> | Date | string
  }

  export type LinkCodeUpsertWithWhereUniqueWithoutPatientInput = {
    where: LinkCodeWhereUniqueInput
    update: XOR<LinkCodeUpdateWithoutPatientInput, LinkCodeUncheckedUpdateWithoutPatientInput>
    create: XOR<LinkCodeCreateWithoutPatientInput, LinkCodeUncheckedCreateWithoutPatientInput>
  }

  export type LinkCodeUpdateWithWhereUniqueWithoutPatientInput = {
    where: LinkCodeWhereUniqueInput
    data: XOR<LinkCodeUpdateWithoutPatientInput, LinkCodeUncheckedUpdateWithoutPatientInput>
  }

  export type LinkCodeUpdateManyWithWhereWithoutPatientInput = {
    where: LinkCodeScalarWhereInput
    data: XOR<LinkCodeUpdateManyMutationInput, LinkCodeUncheckedUpdateManyWithoutPatientInput>
  }

  export type CaregiverCreateWithoutLinkCodesInput = {
    id?: string
    displayName: string
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutCaregiverInput
    patients?: PatientCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUncheckedCreateWithoutLinkCodesInput = {
    id?: string
    profileId: string
    displayName: string
    createdAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverCreateOrConnectWithoutLinkCodesInput = {
    where: CaregiverWhereUniqueInput
    create: XOR<CaregiverCreateWithoutLinkCodesInput, CaregiverUncheckedCreateWithoutLinkCodesInput>
  }

  export type PatientCreateWithoutLinkCodesInput = {
    id?: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    caregiver: CaregiverCreateNestedOneWithoutPatientsInput
    medications?: MedicationCreateNestedManyWithoutPatientInput
    sessions?: PatientSessionCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutLinkCodesInput = {
    id?: string
    caregiverId: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutPatientInput
    sessions?: PatientSessionUncheckedCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutLinkCodesInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutLinkCodesInput, PatientUncheckedCreateWithoutLinkCodesInput>
  }

  export type CaregiverUpsertWithoutLinkCodesInput = {
    update: XOR<CaregiverUpdateWithoutLinkCodesInput, CaregiverUncheckedUpdateWithoutLinkCodesInput>
    create: XOR<CaregiverCreateWithoutLinkCodesInput, CaregiverUncheckedCreateWithoutLinkCodesInput>
    where?: CaregiverWhereInput
  }

  export type CaregiverUpdateToOneWithWhereWithoutLinkCodesInput = {
    where?: CaregiverWhereInput
    data: XOR<CaregiverUpdateWithoutLinkCodesInput, CaregiverUncheckedUpdateWithoutLinkCodesInput>
  }

  export type CaregiverUpdateWithoutLinkCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutCaregiverNestedInput
    patients?: PatientUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverUncheckedUpdateWithoutLinkCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type PatientUpsertWithoutLinkCodesInput = {
    update: XOR<PatientUpdateWithoutLinkCodesInput, PatientUncheckedUpdateWithoutLinkCodesInput>
    create: XOR<PatientCreateWithoutLinkCodesInput, PatientUncheckedCreateWithoutLinkCodesInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutLinkCodesInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutLinkCodesInput, PatientUncheckedUpdateWithoutLinkCodesInput>
  }

  export type PatientUpdateWithoutLinkCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUpdateOneRequiredWithoutPatientsNestedInput
    medications?: MedicationUpdateManyWithoutPatientNestedInput
    sessions?: PatientSessionUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutLinkCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutPatientNestedInput
    sessions?: PatientSessionUncheckedUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutSessionsInput = {
    id?: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    caregiver: CaregiverCreateNestedOneWithoutPatientsInput
    medications?: MedicationCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutSessionsInput = {
    id?: string
    caregiverId: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogUncheckedCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutSessionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
  }

  export type PatientSessionCreateWithoutRotatedToInput = {
    id?: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutSessionsInput
    rotatedFrom?: PatientSessionCreateNestedOneWithoutRotatedToInput
  }

  export type PatientSessionUncheckedCreateWithoutRotatedToInput = {
    id?: string
    patientId: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    rotatedFromId?: string | null
    revokedAt?: Date | string | null
    lastSeenAt?: Date | string | null
  }

  export type PatientSessionCreateOrConnectWithoutRotatedToInput = {
    where: PatientSessionWhereUniqueInput
    create: XOR<PatientSessionCreateWithoutRotatedToInput, PatientSessionUncheckedCreateWithoutRotatedToInput>
  }

  export type PatientSessionCreateWithoutRotatedFromInput = {
    id?: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    patient: PatientCreateNestedOneWithoutSessionsInput
    rotatedTo?: PatientSessionCreateNestedManyWithoutRotatedFromInput
  }

  export type PatientSessionUncheckedCreateWithoutRotatedFromInput = {
    id?: string
    patientId: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastSeenAt?: Date | string | null
    rotatedTo?: PatientSessionUncheckedCreateNestedManyWithoutRotatedFromInput
  }

  export type PatientSessionCreateOrConnectWithoutRotatedFromInput = {
    where: PatientSessionWhereUniqueInput
    create: XOR<PatientSessionCreateWithoutRotatedFromInput, PatientSessionUncheckedCreateWithoutRotatedFromInput>
  }

  export type PatientSessionCreateManyRotatedFromInputEnvelope = {
    data: PatientSessionCreateManyRotatedFromInput | PatientSessionCreateManyRotatedFromInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutSessionsInput = {
    update: XOR<PatientUpdateWithoutSessionsInput, PatientUncheckedUpdateWithoutSessionsInput>
    create: XOR<PatientCreateWithoutSessionsInput, PatientUncheckedCreateWithoutSessionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutSessionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutSessionsInput, PatientUncheckedUpdateWithoutSessionsInput>
  }

  export type PatientUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUpdateOneRequiredWithoutPatientsNestedInput
    medications?: MedicationUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUncheckedUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientSessionUpsertWithoutRotatedToInput = {
    update: XOR<PatientSessionUpdateWithoutRotatedToInput, PatientSessionUncheckedUpdateWithoutRotatedToInput>
    create: XOR<PatientSessionCreateWithoutRotatedToInput, PatientSessionUncheckedCreateWithoutRotatedToInput>
    where?: PatientSessionWhereInput
  }

  export type PatientSessionUpdateToOneWithWhereWithoutRotatedToInput = {
    where?: PatientSessionWhereInput
    data: XOR<PatientSessionUpdateWithoutRotatedToInput, PatientSessionUncheckedUpdateWithoutRotatedToInput>
  }

  export type PatientSessionUpdateWithoutRotatedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutSessionsNestedInput
    rotatedFrom?: PatientSessionUpdateOneWithoutRotatedToNestedInput
  }

  export type PatientSessionUncheckedUpdateWithoutRotatedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rotatedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientSessionUpsertWithWhereUniqueWithoutRotatedFromInput = {
    where: PatientSessionWhereUniqueInput
    update: XOR<PatientSessionUpdateWithoutRotatedFromInput, PatientSessionUncheckedUpdateWithoutRotatedFromInput>
    create: XOR<PatientSessionCreateWithoutRotatedFromInput, PatientSessionUncheckedCreateWithoutRotatedFromInput>
  }

  export type PatientSessionUpdateWithWhereUniqueWithoutRotatedFromInput = {
    where: PatientSessionWhereUniqueInput
    data: XOR<PatientSessionUpdateWithoutRotatedFromInput, PatientSessionUncheckedUpdateWithoutRotatedFromInput>
  }

  export type PatientSessionUpdateManyWithWhereWithoutRotatedFromInput = {
    where: PatientSessionScalarWhereInput
    data: XOR<PatientSessionUpdateManyMutationInput, PatientSessionUncheckedUpdateManyWithoutRotatedFromInput>
  }

  export type PatientCreateWithoutMedicationsInput = {
    id?: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    caregiver: CaregiverCreateNestedOneWithoutPatientsInput
    sessions?: PatientSessionCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicationsInput = {
    id?: string
    caregiverId: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    sessions?: PatientSessionUncheckedCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogUncheckedCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicationsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicationsInput, PatientUncheckedCreateWithoutMedicationsInput>
  }

  export type ScheduleCreateWithoutMedicationInput = {
    id?: string
    timesPerDay: number
    timeSlots?: ScheduleCreatetimeSlotsInput | Date[] | string[]
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    doseInstances?: DoseInstanceCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutMedicationInput = {
    id?: string
    timesPerDay: number
    timeSlots?: ScheduleCreatetimeSlotsInput | Date[] | string[]
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutMedicationInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutMedicationInput, ScheduleUncheckedCreateWithoutMedicationInput>
  }

  export type ScheduleCreateManyMedicationInputEnvelope = {
    data: ScheduleCreateManyMedicationInput | ScheduleCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCreateWithoutMedicationInput = {
    id?: string
    remainingCount: number
    warningThresholdDays?: number
    lastAdjustedAt?: Date | string
    adjustments?: InventoryAdjustmentCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutMedicationInput = {
    id?: string
    remainingCount: number
    warningThresholdDays?: number
    lastAdjustedAt?: Date | string
    adjustments?: InventoryAdjustmentUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutMedicationInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput>
  }

  export type DoseInstanceCreateWithoutMedicationInput = {
    id?: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutDoseInstancesInput
    schedule: ScheduleCreateNestedOneWithoutDoseInstancesInput
    adherenceLogs?: AdherenceLogCreateNestedManyWithoutDoseInstanceInput
  }

  export type DoseInstanceUncheckedCreateWithoutMedicationInput = {
    id?: string
    patientId: string
    scheduleId: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
    adherenceLogs?: AdherenceLogUncheckedCreateNestedManyWithoutDoseInstanceInput
  }

  export type DoseInstanceCreateOrConnectWithoutMedicationInput = {
    where: DoseInstanceWhereUniqueInput
    create: XOR<DoseInstanceCreateWithoutMedicationInput, DoseInstanceUncheckedCreateWithoutMedicationInput>
  }

  export type DoseInstanceCreateManyMedicationInputEnvelope = {
    data: DoseInstanceCreateManyMedicationInput | DoseInstanceCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutMedicationsInput = {
    update: XOR<PatientUpdateWithoutMedicationsInput, PatientUncheckedUpdateWithoutMedicationsInput>
    create: XOR<PatientCreateWithoutMedicationsInput, PatientUncheckedCreateWithoutMedicationsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicationsInput, PatientUncheckedUpdateWithoutMedicationsInput>
  }

  export type PatientUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUpdateOneRequiredWithoutPatientsNestedInput
    sessions?: PatientSessionUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: PatientSessionUncheckedUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUncheckedUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ScheduleUpsertWithWhereUniqueWithoutMedicationInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutMedicationInput, ScheduleUncheckedUpdateWithoutMedicationInput>
    create: XOR<ScheduleCreateWithoutMedicationInput, ScheduleUncheckedCreateWithoutMedicationInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutMedicationInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutMedicationInput, ScheduleUncheckedUpdateWithoutMedicationInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutMedicationInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutMedicationInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: UuidFilter<"Schedule"> | string
    medicationId?: UuidFilter<"Schedule"> | string
    timesPerDay?: IntFilter<"Schedule"> | number
    timeSlots?: DateTimeNullableListFilter<"Schedule">
    startDate?: DateTimeFilter<"Schedule"> | Date | string
    endDate?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    isActive?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type InventoryUpsertWithoutMedicationInput = {
    update: XOR<InventoryUpdateWithoutMedicationInput, InventoryUncheckedUpdateWithoutMedicationInput>
    create: XOR<InventoryCreateWithoutMedicationInput, InventoryUncheckedCreateWithoutMedicationInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutMedicationInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutMedicationInput, InventoryUncheckedUpdateWithoutMedicationInput>
  }

  export type InventoryUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    remainingCount?: IntFieldUpdateOperationsInput | number
    warningThresholdDays?: IntFieldUpdateOperationsInput | number
    lastAdjustedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adjustments?: InventoryAdjustmentUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    remainingCount?: IntFieldUpdateOperationsInput | number
    warningThresholdDays?: IntFieldUpdateOperationsInput | number
    lastAdjustedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adjustments?: InventoryAdjustmentUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type DoseInstanceUpsertWithWhereUniqueWithoutMedicationInput = {
    where: DoseInstanceWhereUniqueInput
    update: XOR<DoseInstanceUpdateWithoutMedicationInput, DoseInstanceUncheckedUpdateWithoutMedicationInput>
    create: XOR<DoseInstanceCreateWithoutMedicationInput, DoseInstanceUncheckedCreateWithoutMedicationInput>
  }

  export type DoseInstanceUpdateWithWhereUniqueWithoutMedicationInput = {
    where: DoseInstanceWhereUniqueInput
    data: XOR<DoseInstanceUpdateWithoutMedicationInput, DoseInstanceUncheckedUpdateWithoutMedicationInput>
  }

  export type DoseInstanceUpdateManyWithWhereWithoutMedicationInput = {
    where: DoseInstanceScalarWhereInput
    data: XOR<DoseInstanceUpdateManyMutationInput, DoseInstanceUncheckedUpdateManyWithoutMedicationInput>
  }

  export type MedicationCreateWithoutSchedulesInput = {
    id?: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicationsInput
    inventory?: InventoryCreateNestedOneWithoutMedicationInput
    doseInstances?: DoseInstanceCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutSchedulesInput = {
    id?: string
    patientId: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedOneWithoutMedicationInput
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutSchedulesInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
  }

  export type DoseInstanceCreateWithoutScheduleInput = {
    id?: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutDoseInstancesInput
    medication: MedicationCreateNestedOneWithoutDoseInstancesInput
    adherenceLogs?: AdherenceLogCreateNestedManyWithoutDoseInstanceInput
  }

  export type DoseInstanceUncheckedCreateWithoutScheduleInput = {
    id?: string
    patientId: string
    medicationId: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
    adherenceLogs?: AdherenceLogUncheckedCreateNestedManyWithoutDoseInstanceInput
  }

  export type DoseInstanceCreateOrConnectWithoutScheduleInput = {
    where: DoseInstanceWhereUniqueInput
    create: XOR<DoseInstanceCreateWithoutScheduleInput, DoseInstanceUncheckedCreateWithoutScheduleInput>
  }

  export type DoseInstanceCreateManyScheduleInputEnvelope = {
    data: DoseInstanceCreateManyScheduleInput | DoseInstanceCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type MedicationUpsertWithoutSchedulesInput = {
    update: XOR<MedicationUpdateWithoutSchedulesInput, MedicationUncheckedUpdateWithoutSchedulesInput>
    create: XOR<MedicationCreateWithoutSchedulesInput, MedicationUncheckedCreateWithoutSchedulesInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutSchedulesInput, MedicationUncheckedUpdateWithoutSchedulesInput>
  }

  export type MedicationUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicationsNestedInput
    inventory?: InventoryUpdateOneWithoutMedicationNestedInput
    doseInstances?: DoseInstanceUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateOneWithoutMedicationNestedInput
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type DoseInstanceUpsertWithWhereUniqueWithoutScheduleInput = {
    where: DoseInstanceWhereUniqueInput
    update: XOR<DoseInstanceUpdateWithoutScheduleInput, DoseInstanceUncheckedUpdateWithoutScheduleInput>
    create: XOR<DoseInstanceCreateWithoutScheduleInput, DoseInstanceUncheckedCreateWithoutScheduleInput>
  }

  export type DoseInstanceUpdateWithWhereUniqueWithoutScheduleInput = {
    where: DoseInstanceWhereUniqueInput
    data: XOR<DoseInstanceUpdateWithoutScheduleInput, DoseInstanceUncheckedUpdateWithoutScheduleInput>
  }

  export type DoseInstanceUpdateManyWithWhereWithoutScheduleInput = {
    where: DoseInstanceScalarWhereInput
    data: XOR<DoseInstanceUpdateManyMutationInput, DoseInstanceUncheckedUpdateManyWithoutScheduleInput>
  }

  export type PatientCreateWithoutDoseInstancesInput = {
    id?: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    caregiver: CaregiverCreateNestedOneWithoutPatientsInput
    medications?: MedicationCreateNestedManyWithoutPatientInput
    sessions?: PatientSessionCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutDoseInstancesInput = {
    id?: string
    caregiverId: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutPatientInput
    sessions?: PatientSessionUncheckedCreateNestedManyWithoutPatientInput
    adherenceLogs?: AdherenceLogUncheckedCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutDoseInstancesInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutDoseInstancesInput, PatientUncheckedCreateWithoutDoseInstancesInput>
  }

  export type ScheduleCreateWithoutDoseInstancesInput = {
    id?: string
    timesPerDay: number
    timeSlots?: ScheduleCreatetimeSlotsInput | Date[] | string[]
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    medication: MedicationCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutDoseInstancesInput = {
    id?: string
    medicationId: string
    timesPerDay: number
    timeSlots?: ScheduleCreatetimeSlotsInput | Date[] | string[]
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutDoseInstancesInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutDoseInstancesInput, ScheduleUncheckedCreateWithoutDoseInstancesInput>
  }

  export type MedicationCreateWithoutDoseInstancesInput = {
    id?: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicationsInput
    schedules?: ScheduleCreateNestedManyWithoutMedicationInput
    inventory?: InventoryCreateNestedOneWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutDoseInstancesInput = {
    id?: string
    patientId: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutMedicationInput
    inventory?: InventoryUncheckedCreateNestedOneWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutDoseInstancesInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutDoseInstancesInput, MedicationUncheckedCreateWithoutDoseInstancesInput>
  }

  export type AdherenceLogCreateWithoutDoseInstanceInput = {
    id?: string
    action: $Enums.AdherenceAction
    takenAt: Date | string
    source: $Enums.AdherenceSource
    clientUuid: string
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutAdherenceLogsInput
  }

  export type AdherenceLogUncheckedCreateWithoutDoseInstanceInput = {
    id?: string
    patientId: string
    action: $Enums.AdherenceAction
    takenAt: Date | string
    source: $Enums.AdherenceSource
    clientUuid: string
    createdAt?: Date | string
  }

  export type AdherenceLogCreateOrConnectWithoutDoseInstanceInput = {
    where: AdherenceLogWhereUniqueInput
    create: XOR<AdherenceLogCreateWithoutDoseInstanceInput, AdherenceLogUncheckedCreateWithoutDoseInstanceInput>
  }

  export type AdherenceLogCreateManyDoseInstanceInputEnvelope = {
    data: AdherenceLogCreateManyDoseInstanceInput | AdherenceLogCreateManyDoseInstanceInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutDoseInstancesInput = {
    update: XOR<PatientUpdateWithoutDoseInstancesInput, PatientUncheckedUpdateWithoutDoseInstancesInput>
    create: XOR<PatientCreateWithoutDoseInstancesInput, PatientUncheckedCreateWithoutDoseInstancesInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutDoseInstancesInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutDoseInstancesInput, PatientUncheckedUpdateWithoutDoseInstancesInput>
  }

  export type PatientUpdateWithoutDoseInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUpdateOneRequiredWithoutPatientsNestedInput
    medications?: MedicationUpdateManyWithoutPatientNestedInput
    sessions?: PatientSessionUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutDoseInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutPatientNestedInput
    sessions?: PatientSessionUncheckedUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUncheckedUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ScheduleUpsertWithoutDoseInstancesInput = {
    update: XOR<ScheduleUpdateWithoutDoseInstancesInput, ScheduleUncheckedUpdateWithoutDoseInstancesInput>
    create: XOR<ScheduleCreateWithoutDoseInstancesInput, ScheduleUncheckedCreateWithoutDoseInstancesInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutDoseInstancesInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutDoseInstancesInput, ScheduleUncheckedUpdateWithoutDoseInstancesInput>
  }

  export type ScheduleUpdateWithoutDoseInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    timesPerDay?: IntFieldUpdateOperationsInput | number
    timeSlots?: ScheduleUpdatetimeSlotsInput | Date[] | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutDoseInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    timesPerDay?: IntFieldUpdateOperationsInput | number
    timeSlots?: ScheduleUpdatetimeSlotsInput | Date[] | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUpsertWithoutDoseInstancesInput = {
    update: XOR<MedicationUpdateWithoutDoseInstancesInput, MedicationUncheckedUpdateWithoutDoseInstancesInput>
    create: XOR<MedicationCreateWithoutDoseInstancesInput, MedicationUncheckedCreateWithoutDoseInstancesInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutDoseInstancesInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutDoseInstancesInput, MedicationUncheckedUpdateWithoutDoseInstancesInput>
  }

  export type MedicationUpdateWithoutDoseInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicationsNestedInput
    schedules?: ScheduleUpdateManyWithoutMedicationNestedInput
    inventory?: InventoryUpdateOneWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutDoseInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutMedicationNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutMedicationNestedInput
  }

  export type AdherenceLogUpsertWithWhereUniqueWithoutDoseInstanceInput = {
    where: AdherenceLogWhereUniqueInput
    update: XOR<AdherenceLogUpdateWithoutDoseInstanceInput, AdherenceLogUncheckedUpdateWithoutDoseInstanceInput>
    create: XOR<AdherenceLogCreateWithoutDoseInstanceInput, AdherenceLogUncheckedCreateWithoutDoseInstanceInput>
  }

  export type AdherenceLogUpdateWithWhereUniqueWithoutDoseInstanceInput = {
    where: AdherenceLogWhereUniqueInput
    data: XOR<AdherenceLogUpdateWithoutDoseInstanceInput, AdherenceLogUncheckedUpdateWithoutDoseInstanceInput>
  }

  export type AdherenceLogUpdateManyWithWhereWithoutDoseInstanceInput = {
    where: AdherenceLogScalarWhereInput
    data: XOR<AdherenceLogUpdateManyMutationInput, AdherenceLogUncheckedUpdateManyWithoutDoseInstanceInput>
  }

  export type DoseInstanceCreateWithoutAdherenceLogsInput = {
    id?: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutDoseInstancesInput
    schedule: ScheduleCreateNestedOneWithoutDoseInstancesInput
    medication: MedicationCreateNestedOneWithoutDoseInstancesInput
  }

  export type DoseInstanceUncheckedCreateWithoutAdherenceLogsInput = {
    id?: string
    patientId: string
    scheduleId: string
    medicationId: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
  }

  export type DoseInstanceCreateOrConnectWithoutAdherenceLogsInput = {
    where: DoseInstanceWhereUniqueInput
    create: XOR<DoseInstanceCreateWithoutAdherenceLogsInput, DoseInstanceUncheckedCreateWithoutAdherenceLogsInput>
  }

  export type PatientCreateWithoutAdherenceLogsInput = {
    id?: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    caregiver: CaregiverCreateNestedOneWithoutPatientsInput
    medications?: MedicationCreateNestedManyWithoutPatientInput
    sessions?: PatientSessionCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAdherenceLogsInput = {
    id?: string
    caregiverId: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutPatientInput
    sessions?: PatientSessionUncheckedCreateNestedManyWithoutPatientInput
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutPatientInput
    linkCodes?: LinkCodeUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAdherenceLogsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAdherenceLogsInput, PatientUncheckedCreateWithoutAdherenceLogsInput>
  }

  export type DoseInstanceUpsertWithoutAdherenceLogsInput = {
    update: XOR<DoseInstanceUpdateWithoutAdherenceLogsInput, DoseInstanceUncheckedUpdateWithoutAdherenceLogsInput>
    create: XOR<DoseInstanceCreateWithoutAdherenceLogsInput, DoseInstanceUncheckedCreateWithoutAdherenceLogsInput>
    where?: DoseInstanceWhereInput
  }

  export type DoseInstanceUpdateToOneWithWhereWithoutAdherenceLogsInput = {
    where?: DoseInstanceWhereInput
    data: XOR<DoseInstanceUpdateWithoutAdherenceLogsInput, DoseInstanceUncheckedUpdateWithoutAdherenceLogsInput>
  }

  export type DoseInstanceUpdateWithoutAdherenceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutDoseInstancesNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutDoseInstancesNestedInput
    medication?: MedicationUpdateOneRequiredWithoutDoseInstancesNestedInput
  }

  export type DoseInstanceUncheckedUpdateWithoutAdherenceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpsertWithoutAdherenceLogsInput = {
    update: XOR<PatientUpdateWithoutAdherenceLogsInput, PatientUncheckedUpdateWithoutAdherenceLogsInput>
    create: XOR<PatientCreateWithoutAdherenceLogsInput, PatientUncheckedCreateWithoutAdherenceLogsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAdherenceLogsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAdherenceLogsInput, PatientUncheckedUpdateWithoutAdherenceLogsInput>
  }

  export type PatientUpdateWithoutAdherenceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUpdateOneRequiredWithoutPatientsNestedInput
    medications?: MedicationUpdateManyWithoutPatientNestedInput
    sessions?: PatientSessionUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAdherenceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutPatientNestedInput
    sessions?: PatientSessionUncheckedUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MedicationCreateWithoutInventoryInput = {
    id?: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicationsInput
    schedules?: ScheduleCreateNestedManyWithoutMedicationInput
    doseInstances?: DoseInstanceCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutInventoryInput = {
    id?: string
    patientId: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutMedicationInput
    doseInstances?: DoseInstanceUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutInventoryInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutInventoryInput, MedicationUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryAdjustmentCreateWithoutInventoryInput = {
    id?: string
    delta: number
    reason: $Enums.InventoryAdjustmentReason
    note?: string | null
    createdAt?: Date | string
  }

  export type InventoryAdjustmentUncheckedCreateWithoutInventoryInput = {
    id?: string
    delta: number
    reason: $Enums.InventoryAdjustmentReason
    note?: string | null
    createdAt?: Date | string
  }

  export type InventoryAdjustmentCreateOrConnectWithoutInventoryInput = {
    where: InventoryAdjustmentWhereUniqueInput
    create: XOR<InventoryAdjustmentCreateWithoutInventoryInput, InventoryAdjustmentUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryAdjustmentCreateManyInventoryInputEnvelope = {
    data: InventoryAdjustmentCreateManyInventoryInput | InventoryAdjustmentCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type MedicationUpsertWithoutInventoryInput = {
    update: XOR<MedicationUpdateWithoutInventoryInput, MedicationUncheckedUpdateWithoutInventoryInput>
    create: XOR<MedicationCreateWithoutInventoryInput, MedicationUncheckedCreateWithoutInventoryInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutInventoryInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutInventoryInput, MedicationUncheckedUpdateWithoutInventoryInput>
  }

  export type MedicationUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicationsNestedInput
    schedules?: ScheduleUpdateManyWithoutMedicationNestedInput
    doseInstances?: DoseInstanceUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutMedicationNestedInput
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type InventoryAdjustmentUpsertWithWhereUniqueWithoutInventoryInput = {
    where: InventoryAdjustmentWhereUniqueInput
    update: XOR<InventoryAdjustmentUpdateWithoutInventoryInput, InventoryAdjustmentUncheckedUpdateWithoutInventoryInput>
    create: XOR<InventoryAdjustmentCreateWithoutInventoryInput, InventoryAdjustmentUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryAdjustmentUpdateWithWhereUniqueWithoutInventoryInput = {
    where: InventoryAdjustmentWhereUniqueInput
    data: XOR<InventoryAdjustmentUpdateWithoutInventoryInput, InventoryAdjustmentUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryAdjustmentUpdateManyWithWhereWithoutInventoryInput = {
    where: InventoryAdjustmentScalarWhereInput
    data: XOR<InventoryAdjustmentUpdateManyMutationInput, InventoryAdjustmentUncheckedUpdateManyWithoutInventoryInput>
  }

  export type InventoryAdjustmentScalarWhereInput = {
    AND?: InventoryAdjustmentScalarWhereInput | InventoryAdjustmentScalarWhereInput[]
    OR?: InventoryAdjustmentScalarWhereInput[]
    NOT?: InventoryAdjustmentScalarWhereInput | InventoryAdjustmentScalarWhereInput[]
    id?: UuidFilter<"InventoryAdjustment"> | string
    inventoryId?: UuidFilter<"InventoryAdjustment"> | string
    delta?: IntFilter<"InventoryAdjustment"> | number
    reason?: EnumInventoryAdjustmentReasonFilter<"InventoryAdjustment"> | $Enums.InventoryAdjustmentReason
    note?: StringNullableFilter<"InventoryAdjustment"> | string | null
    createdAt?: DateTimeFilter<"InventoryAdjustment"> | Date | string
  }

  export type InventoryCreateWithoutAdjustmentsInput = {
    id?: string
    remainingCount: number
    warningThresholdDays?: number
    lastAdjustedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutAdjustmentsInput = {
    id?: string
    medicationId: string
    remainingCount: number
    warningThresholdDays?: number
    lastAdjustedAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutAdjustmentsInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutAdjustmentsInput, InventoryUncheckedCreateWithoutAdjustmentsInput>
  }

  export type InventoryUpsertWithoutAdjustmentsInput = {
    update: XOR<InventoryUpdateWithoutAdjustmentsInput, InventoryUncheckedUpdateWithoutAdjustmentsInput>
    create: XOR<InventoryCreateWithoutAdjustmentsInput, InventoryUncheckedCreateWithoutAdjustmentsInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutAdjustmentsInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutAdjustmentsInput, InventoryUncheckedUpdateWithoutAdjustmentsInput>
  }

  export type InventoryUpdateWithoutAdjustmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    remainingCount?: IntFieldUpdateOperationsInput | number
    warningThresholdDays?: IntFieldUpdateOperationsInput | number
    lastAdjustedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutAdjustmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    remainingCount?: IntFieldUpdateOperationsInput | number
    warningThresholdDays?: IntFieldUpdateOperationsInput | number
    lastAdjustedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateManyCaregiverInput = {
    id?: string
    displayName: string
    timezone?: string
    createdAt?: Date | string
  }

  export type LinkCodeCreateManyCaregiverInput = {
    id?: string
    patientId?: string | null
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PatientUpdateWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUpdateManyWithoutPatientNestedInput
    sessions?: PatientSessionUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutPatientNestedInput
    sessions?: PatientSessionUncheckedUpdateManyWithoutPatientNestedInput
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutPatientNestedInput
    adherenceLogs?: AdherenceLogUncheckedUpdateManyWithoutPatientNestedInput
    linkCodes?: LinkCodeUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCodeUpdateWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneWithoutLinkCodesNestedInput
  }

  export type LinkCodeUncheckedUpdateWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCodeUncheckedUpdateManyWithoutCaregiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationCreateManyPatientInput = {
    id?: string
    name: string
    dosage: string
    doseCountPerIntake?: number
    notes?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PatientSessionCreateManyPatientInput = {
    id?: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    rotatedFromId?: string | null
    revokedAt?: Date | string | null
    lastSeenAt?: Date | string | null
  }

  export type DoseInstanceCreateManyPatientInput = {
    id?: string
    scheduleId: string
    medicationId: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
  }

  export type AdherenceLogCreateManyPatientInput = {
    id?: string
    doseInstanceId: string
    action: $Enums.AdherenceAction
    takenAt: Date | string
    source: $Enums.AdherenceSource
    clientUuid: string
    createdAt?: Date | string
  }

  export type LinkCodeCreateManyPatientInput = {
    id?: string
    caregiverId: string
    code: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    revokedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type MedicationUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUpdateManyWithoutMedicationNestedInput
    inventory?: InventoryUpdateOneWithoutMedicationNestedInput
    doseInstances?: DoseInstanceUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutMedicationNestedInput
    inventory?: InventoryUncheckedUpdateOneWithoutMedicationNestedInput
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    doseCountPerIntake?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientSessionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rotatedFrom?: PatientSessionUpdateOneWithoutRotatedToNestedInput
    rotatedTo?: PatientSessionUpdateManyWithoutRotatedFromNestedInput
  }

  export type PatientSessionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rotatedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rotatedTo?: PatientSessionUncheckedUpdateManyWithoutRotatedFromNestedInput
  }

  export type PatientSessionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rotatedFromId?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoseInstanceUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutDoseInstancesNestedInput
    medication?: MedicationUpdateOneRequiredWithoutDoseInstancesNestedInput
    adherenceLogs?: AdherenceLogUpdateManyWithoutDoseInstanceNestedInput
  }

  export type DoseInstanceUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adherenceLogs?: AdherenceLogUncheckedUpdateManyWithoutDoseInstanceNestedInput
  }

  export type DoseInstanceUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdherenceLogUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAdherenceActionFieldUpdateOperationsInput | $Enums.AdherenceAction
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumAdherenceSourceFieldUpdateOperationsInput | $Enums.AdherenceSource
    clientUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doseInstance?: DoseInstanceUpdateOneRequiredWithoutAdherenceLogsNestedInput
  }

  export type AdherenceLogUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doseInstanceId?: StringFieldUpdateOperationsInput | string
    action?: EnumAdherenceActionFieldUpdateOperationsInput | $Enums.AdherenceAction
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumAdherenceSourceFieldUpdateOperationsInput | $Enums.AdherenceSource
    clientUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdherenceLogUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doseInstanceId?: StringFieldUpdateOperationsInput | string
    action?: EnumAdherenceActionFieldUpdateOperationsInput | $Enums.AdherenceAction
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumAdherenceSourceFieldUpdateOperationsInput | $Enums.AdherenceSource
    clientUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCodeUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUpdateOneRequiredWithoutLinkCodesNestedInput
  }

  export type LinkCodeUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCodeUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    caregiverId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientSessionCreateManyRotatedFromInput = {
    id?: string
    patientId: string
    tokenHash: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    lastSeenAt?: Date | string | null
  }

  export type PatientSessionUpdateWithoutRotatedFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patient?: PatientUpdateOneRequiredWithoutSessionsNestedInput
    rotatedTo?: PatientSessionUpdateManyWithoutRotatedFromNestedInput
  }

  export type PatientSessionUncheckedUpdateWithoutRotatedFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rotatedTo?: PatientSessionUncheckedUpdateManyWithoutRotatedFromNestedInput
  }

  export type PatientSessionUncheckedUpdateManyWithoutRotatedFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduleCreateManyMedicationInput = {
    id?: string
    timesPerDay: number
    timeSlots?: ScheduleCreatetimeSlotsInput | Date[] | string[]
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type DoseInstanceCreateManyMedicationInput = {
    id?: string
    patientId: string
    scheduleId: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
  }

  export type ScheduleUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timesPerDay?: IntFieldUpdateOperationsInput | number
    timeSlots?: ScheduleUpdatetimeSlotsInput | Date[] | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doseInstances?: DoseInstanceUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timesPerDay?: IntFieldUpdateOperationsInput | number
    timeSlots?: ScheduleUpdatetimeSlotsInput | Date[] | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doseInstances?: DoseInstanceUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timesPerDay?: IntFieldUpdateOperationsInput | number
    timeSlots?: ScheduleUpdatetimeSlotsInput | Date[] | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseInstanceUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutDoseInstancesNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutDoseInstancesNestedInput
    adherenceLogs?: AdherenceLogUpdateManyWithoutDoseInstanceNestedInput
  }

  export type DoseInstanceUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adherenceLogs?: AdherenceLogUncheckedUpdateManyWithoutDoseInstanceNestedInput
  }

  export type DoseInstanceUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoseInstanceCreateManyScheduleInput = {
    id?: string
    patientId: string
    medicationId: string
    scheduledFor: Date | string
    status: $Enums.DoseStatus
    createdAt?: Date | string
  }

  export type DoseInstanceUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutDoseInstancesNestedInput
    medication?: MedicationUpdateOneRequiredWithoutDoseInstancesNestedInput
    adherenceLogs?: AdherenceLogUpdateManyWithoutDoseInstanceNestedInput
  }

  export type DoseInstanceUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adherenceLogs?: AdherenceLogUncheckedUpdateManyWithoutDoseInstanceNestedInput
  }

  export type DoseInstanceUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDoseStatusFieldUpdateOperationsInput | $Enums.DoseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdherenceLogCreateManyDoseInstanceInput = {
    id?: string
    patientId: string
    action: $Enums.AdherenceAction
    takenAt: Date | string
    source: $Enums.AdherenceSource
    clientUuid: string
    createdAt?: Date | string
  }

  export type AdherenceLogUpdateWithoutDoseInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAdherenceActionFieldUpdateOperationsInput | $Enums.AdherenceAction
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumAdherenceSourceFieldUpdateOperationsInput | $Enums.AdherenceSource
    clientUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAdherenceLogsNestedInput
  }

  export type AdherenceLogUncheckedUpdateWithoutDoseInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    action?: EnumAdherenceActionFieldUpdateOperationsInput | $Enums.AdherenceAction
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumAdherenceSourceFieldUpdateOperationsInput | $Enums.AdherenceSource
    clientUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdherenceLogUncheckedUpdateManyWithoutDoseInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    action?: EnumAdherenceActionFieldUpdateOperationsInput | $Enums.AdherenceAction
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumAdherenceSourceFieldUpdateOperationsInput | $Enums.AdherenceSource
    clientUuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryAdjustmentCreateManyInventoryInput = {
    id?: string
    delta: number
    reason: $Enums.InventoryAdjustmentReason
    note?: string | null
    createdAt?: Date | string
  }

  export type InventoryAdjustmentUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: EnumInventoryAdjustmentReasonFieldUpdateOperationsInput | $Enums.InventoryAdjustmentReason
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryAdjustmentUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: EnumInventoryAdjustmentReasonFieldUpdateOperationsInput | $Enums.InventoryAdjustmentReason
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryAdjustmentUncheckedUpdateManyWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    delta?: IntFieldUpdateOperationsInput | number
    reason?: EnumInventoryAdjustmentReasonFieldUpdateOperationsInput | $Enums.InventoryAdjustmentReason
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}