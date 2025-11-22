
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model announcements
 * 
 */
export type announcements = $Result.DefaultSelection<Prisma.$announcementsPayload>
/**
 * Model banners
 * 
 */
export type banners = $Result.DefaultSelection<Prisma.$bannersPayload>
/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model courses
 * 
 */
export type courses = $Result.DefaultSelection<Prisma.$coursesPayload>
/**
 * Model documents
 * 
 */
export type documents = $Result.DefaultSelection<Prisma.$documentsPayload>
/**
 * Model employees
 * 
 */
export type employees = $Result.DefaultSelection<Prisma.$employeesPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model recentupdates
 * 
 */
export type recentupdates = $Result.DefaultSelection<Prisma.$recentupdatesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model visitor
 * 
 */
export type visitor = $Result.DefaultSelection<Prisma.$visitorPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model bankpayments
 * 
 */
export type bankpayments = $Result.DefaultSelection<Prisma.$bankpaymentsPayload>
/**
 * Model mobilepayments
 * 
 */
export type mobilepayments = $Result.DefaultSelection<Prisma.$mobilepaymentsPayload>
/**
 * Model Publication
 * 
 */
export type Publication = $Result.DefaultSelection<Prisma.$PublicationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Announcements
 * const announcements = await prisma.announcements.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Announcements
   * const announcements = await prisma.announcements.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.announcements`: Exposes CRUD operations for the **announcements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcements.findMany()
    * ```
    */
  get announcements(): Prisma.announcementsDelegate<ExtArgs>;

  /**
   * `prisma.banners`: Exposes CRUD operations for the **banners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banners.findMany()
    * ```
    */
  get banners(): Prisma.bannersDelegate<ExtArgs>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs>;

  /**
   * `prisma.courses`: Exposes CRUD operations for the **courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.coursesDelegate<ExtArgs>;

  /**
   * `prisma.documents`: Exposes CRUD operations for the **documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.documents.findMany()
    * ```
    */
  get documents(): Prisma.documentsDelegate<ExtArgs>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.employeesDelegate<ExtArgs>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs>;

  /**
   * `prisma.recentupdates`: Exposes CRUD operations for the **recentupdates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recentupdates
    * const recentupdates = await prisma.recentupdates.findMany()
    * ```
    */
  get recentupdates(): Prisma.recentupdatesDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.visitor`: Exposes CRUD operations for the **visitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitor.findMany()
    * ```
    */
  get visitor(): Prisma.visitorDelegate<ExtArgs>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs>;

  /**
   * `prisma.bankpayments`: Exposes CRUD operations for the **bankpayments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bankpayments
    * const bankpayments = await prisma.bankpayments.findMany()
    * ```
    */
  get bankpayments(): Prisma.bankpaymentsDelegate<ExtArgs>;

  /**
   * `prisma.mobilepayments`: Exposes CRUD operations for the **mobilepayments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mobilepayments
    * const mobilepayments = await prisma.mobilepayments.findMany()
    * ```
    */
  get mobilepayments(): Prisma.mobilepaymentsDelegate<ExtArgs>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **Publication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publications
    * const publications = await prisma.publication.findMany()
    * ```
    */
  get publication(): Prisma.PublicationDelegate<ExtArgs>;
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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    announcements: 'announcements',
    banners: 'banners',
    comments: 'comments',
    courses: 'courses',
    documents: 'documents',
    employees: 'employees',
    products: 'products',
    recentupdates: 'recentupdates',
    users: 'users',
    visitor: 'visitor',
    payments: 'payments',
    bankpayments: 'bankpayments',
    mobilepayments: 'mobilepayments',
    Publication: 'Publication'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "announcements" | "banners" | "comments" | "courses" | "documents" | "employees" | "products" | "recentupdates" | "users" | "visitor" | "payments" | "bankpayments" | "mobilepayments" | "publication"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      announcements: {
        payload: Prisma.$announcementsPayload<ExtArgs>
        fields: Prisma.announcementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.announcementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$announcementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.announcementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$announcementsPayload>
          }
          findFirst: {
            args: Prisma.announcementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$announcementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.announcementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$announcementsPayload>
          }
          findMany: {
            args: Prisma.announcementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$announcementsPayload>[]
          }
          create: {
            args: Prisma.announcementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$announcementsPayload>
          }
          createMany: {
            args: Prisma.announcementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.announcementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$announcementsPayload>
          }
          update: {
            args: Prisma.announcementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$announcementsPayload>
          }
          deleteMany: {
            args: Prisma.announcementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.announcementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.announcementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$announcementsPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncements>
          }
          groupBy: {
            args: Prisma.announcementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.announcementsCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementsCountAggregateOutputType> | number
          }
        }
      }
      banners: {
        payload: Prisma.$bannersPayload<ExtArgs>
        fields: Prisma.bannersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bannersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bannersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannersPayload>
          }
          findFirst: {
            args: Prisma.bannersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bannersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannersPayload>
          }
          findMany: {
            args: Prisma.bannersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannersPayload>[]
          }
          create: {
            args: Prisma.bannersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannersPayload>
          }
          createMany: {
            args: Prisma.bannersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bannersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannersPayload>
          }
          update: {
            args: Prisma.bannersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannersPayload>
          }
          deleteMany: {
            args: Prisma.bannersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bannersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bannersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannersPayload>
          }
          aggregate: {
            args: Prisma.BannersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanners>
          }
          groupBy: {
            args: Prisma.bannersGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannersGroupByOutputType>[]
          }
          count: {
            args: Prisma.bannersCountArgs<ExtArgs>
            result: $Utils.Optional<BannersCountAggregateOutputType> | number
          }
        }
      }
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      courses: {
        payload: Prisma.$coursesPayload<ExtArgs>
        fields: Prisma.coursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.coursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.coursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          findFirst: {
            args: Prisma.coursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.coursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          findMany: {
            args: Prisma.coursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>[]
          }
          create: {
            args: Prisma.coursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          createMany: {
            args: Prisma.coursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.coursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          update: {
            args: Prisma.coursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          deleteMany: {
            args: Prisma.coursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.coursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.coursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.coursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.coursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      documents: {
        payload: Prisma.$documentsPayload<ExtArgs>
        fields: Prisma.documentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findFirst: {
            args: Prisma.documentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findMany: {
            args: Prisma.documentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>[]
          }
          create: {
            args: Prisma.documentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          createMany: {
            args: Prisma.documentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.documentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          update: {
            args: Prisma.documentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          deleteMany: {
            args: Prisma.documentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.documentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.documentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      employees: {
        payload: Prisma.$employeesPayload<ExtArgs>
        fields: Prisma.employeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findFirst: {
            args: Prisma.employeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findMany: {
            args: Prisma.employeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          create: {
            args: Prisma.employeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          createMany: {
            args: Prisma.employeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.employeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          update: {
            args: Prisma.employeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          deleteMany: {
            args: Prisma.employeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.employeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.employeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      recentupdates: {
        payload: Prisma.$recentupdatesPayload<ExtArgs>
        fields: Prisma.recentupdatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recentupdatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recentupdatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recentupdatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recentupdatesPayload>
          }
          findFirst: {
            args: Prisma.recentupdatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recentupdatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recentupdatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recentupdatesPayload>
          }
          findMany: {
            args: Prisma.recentupdatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recentupdatesPayload>[]
          }
          create: {
            args: Prisma.recentupdatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recentupdatesPayload>
          }
          createMany: {
            args: Prisma.recentupdatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.recentupdatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recentupdatesPayload>
          }
          update: {
            args: Prisma.recentupdatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recentupdatesPayload>
          }
          deleteMany: {
            args: Prisma.recentupdatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recentupdatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.recentupdatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recentupdatesPayload>
          }
          aggregate: {
            args: Prisma.RecentupdatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecentupdates>
          }
          groupBy: {
            args: Prisma.recentupdatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecentupdatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.recentupdatesCountArgs<ExtArgs>
            result: $Utils.Optional<RecentupdatesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      visitor: {
        payload: Prisma.$visitorPayload<ExtArgs>
        fields: Prisma.visitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.visitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.visitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorPayload>
          }
          findFirst: {
            args: Prisma.visitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.visitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorPayload>
          }
          findMany: {
            args: Prisma.visitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorPayload>[]
          }
          create: {
            args: Prisma.visitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorPayload>
          }
          createMany: {
            args: Prisma.visitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.visitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorPayload>
          }
          update: {
            args: Prisma.visitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorPayload>
          }
          deleteMany: {
            args: Prisma.visitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.visitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.visitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorPayload>
          }
          aggregate: {
            args: Prisma.VisitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitor>
          }
          groupBy: {
            args: Prisma.visitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.visitorCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      bankpayments: {
        payload: Prisma.$bankpaymentsPayload<ExtArgs>
        fields: Prisma.bankpaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bankpaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankpaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bankpaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankpaymentsPayload>
          }
          findFirst: {
            args: Prisma.bankpaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankpaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bankpaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankpaymentsPayload>
          }
          findMany: {
            args: Prisma.bankpaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankpaymentsPayload>[]
          }
          create: {
            args: Prisma.bankpaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankpaymentsPayload>
          }
          createMany: {
            args: Prisma.bankpaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bankpaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankpaymentsPayload>
          }
          update: {
            args: Prisma.bankpaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankpaymentsPayload>
          }
          deleteMany: {
            args: Prisma.bankpaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bankpaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bankpaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankpaymentsPayload>
          }
          aggregate: {
            args: Prisma.BankpaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankpayments>
          }
          groupBy: {
            args: Prisma.bankpaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankpaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bankpaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<BankpaymentsCountAggregateOutputType> | number
          }
        }
      }
      mobilepayments: {
        payload: Prisma.$mobilepaymentsPayload<ExtArgs>
        fields: Prisma.mobilepaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mobilepaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mobilepaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mobilepaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mobilepaymentsPayload>
          }
          findFirst: {
            args: Prisma.mobilepaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mobilepaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mobilepaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mobilepaymentsPayload>
          }
          findMany: {
            args: Prisma.mobilepaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mobilepaymentsPayload>[]
          }
          create: {
            args: Prisma.mobilepaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mobilepaymentsPayload>
          }
          createMany: {
            args: Prisma.mobilepaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mobilepaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mobilepaymentsPayload>
          }
          update: {
            args: Prisma.mobilepaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mobilepaymentsPayload>
          }
          deleteMany: {
            args: Prisma.mobilepaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mobilepaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mobilepaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mobilepaymentsPayload>
          }
          aggregate: {
            args: Prisma.MobilepaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMobilepayments>
          }
          groupBy: {
            args: Prisma.mobilepaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MobilepaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.mobilepaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<MobilepaymentsCountAggregateOutputType> | number
          }
        }
      }
      Publication: {
        payload: Prisma.$PublicationPayload<ExtArgs>
        fields: Prisma.PublicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findFirst: {
            args: Prisma.PublicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findMany: {
            args: Prisma.PublicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          create: {
            args: Prisma.PublicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          createMany: {
            args: Prisma.PublicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PublicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          update: {
            args: Prisma.PublicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          deleteMany: {
            args: Prisma.PublicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PublicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          aggregate: {
            args: Prisma.PublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublication>
          }
          groupBy: {
            args: Prisma.PublicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicationCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model announcements
   */

  export type AggregateAnnouncements = {
    _count: AnnouncementsCountAggregateOutputType | null
    _avg: AnnouncementsAvgAggregateOutputType | null
    _sum: AnnouncementsSumAggregateOutputType | null
    _min: AnnouncementsMinAggregateOutputType | null
    _max: AnnouncementsMaxAggregateOutputType | null
  }

  export type AnnouncementsAvgAggregateOutputType = {
    id: number | null
    views: number | null
  }

  export type AnnouncementsSumAggregateOutputType = {
    id: number | null
    views: number | null
  }

  export type AnnouncementsMinAggregateOutputType = {
    id: number | null
    title: string | null
    link: string | null
    createdAt: Date | null
    views: number | null
  }

  export type AnnouncementsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    link: string | null
    createdAt: Date | null
    views: number | null
  }

  export type AnnouncementsCountAggregateOutputType = {
    id: number
    title: number
    link: number
    createdAt: number
    views: number
    _all: number
  }


  export type AnnouncementsAvgAggregateInputType = {
    id?: true
    views?: true
  }

  export type AnnouncementsSumAggregateInputType = {
    id?: true
    views?: true
  }

  export type AnnouncementsMinAggregateInputType = {
    id?: true
    title?: true
    link?: true
    createdAt?: true
    views?: true
  }

  export type AnnouncementsMaxAggregateInputType = {
    id?: true
    title?: true
    link?: true
    createdAt?: true
    views?: true
  }

  export type AnnouncementsCountAggregateInputType = {
    id?: true
    title?: true
    link?: true
    createdAt?: true
    views?: true
    _all?: true
  }

  export type AnnouncementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which announcements to aggregate.
     */
    where?: announcementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of announcements to fetch.
     */
    orderBy?: announcementsOrderByWithRelationInput | announcementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: announcementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned announcements
    **/
    _count?: true | AnnouncementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementsMaxAggregateInputType
  }

  export type GetAnnouncementsAggregateType<T extends AnnouncementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncements[P]>
      : GetScalarType<T[P], AggregateAnnouncements[P]>
  }




  export type announcementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: announcementsWhereInput
    orderBy?: announcementsOrderByWithAggregationInput | announcementsOrderByWithAggregationInput[]
    by: AnnouncementsScalarFieldEnum[] | AnnouncementsScalarFieldEnum
    having?: announcementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementsCountAggregateInputType | true
    _avg?: AnnouncementsAvgAggregateInputType
    _sum?: AnnouncementsSumAggregateInputType
    _min?: AnnouncementsMinAggregateInputType
    _max?: AnnouncementsMaxAggregateInputType
  }

  export type AnnouncementsGroupByOutputType = {
    id: number
    title: string
    link: string | null
    createdAt: Date
    views: number
    _count: AnnouncementsCountAggregateOutputType | null
    _avg: AnnouncementsAvgAggregateOutputType | null
    _sum: AnnouncementsSumAggregateOutputType | null
    _min: AnnouncementsMinAggregateOutputType | null
    _max: AnnouncementsMaxAggregateOutputType | null
  }

  type GetAnnouncementsGroupByPayload<T extends announcementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementsGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementsGroupByOutputType[P]>
        }
      >
    >


  export type announcementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    link?: boolean
    createdAt?: boolean
    views?: boolean
  }, ExtArgs["result"]["announcements"]>


  export type announcementsSelectScalar = {
    id?: boolean
    title?: boolean
    link?: boolean
    createdAt?: boolean
    views?: boolean
  }


  export type $announcementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "announcements"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      link: string | null
      createdAt: Date
      views: number
    }, ExtArgs["result"]["announcements"]>
    composites: {}
  }

  type announcementsGetPayload<S extends boolean | null | undefined | announcementsDefaultArgs> = $Result.GetResult<Prisma.$announcementsPayload, S>

  type announcementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<announcementsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnnouncementsCountAggregateInputType | true
    }

  export interface announcementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['announcements'], meta: { name: 'announcements' } }
    /**
     * Find zero or one Announcements that matches the filter.
     * @param {announcementsFindUniqueArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends announcementsFindUniqueArgs>(args: SelectSubset<T, announcementsFindUniqueArgs<ExtArgs>>): Prisma__announcementsClient<$Result.GetResult<Prisma.$announcementsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Announcements that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {announcementsFindUniqueOrThrowArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends announcementsFindUniqueOrThrowArgs>(args: SelectSubset<T, announcementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__announcementsClient<$Result.GetResult<Prisma.$announcementsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {announcementsFindFirstArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends announcementsFindFirstArgs>(args?: SelectSubset<T, announcementsFindFirstArgs<ExtArgs>>): Prisma__announcementsClient<$Result.GetResult<Prisma.$announcementsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Announcements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {announcementsFindFirstOrThrowArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends announcementsFindFirstOrThrowArgs>(args?: SelectSubset<T, announcementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__announcementsClient<$Result.GetResult<Prisma.$announcementsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {announcementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcements.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementsWithIdOnly = await prisma.announcements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends announcementsFindManyArgs>(args?: SelectSubset<T, announcementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$announcementsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Announcements.
     * @param {announcementsCreateArgs} args - Arguments to create a Announcements.
     * @example
     * // Create one Announcements
     * const Announcements = await prisma.announcements.create({
     *   data: {
     *     // ... data to create a Announcements
     *   }
     * })
     * 
     */
    create<T extends announcementsCreateArgs>(args: SelectSubset<T, announcementsCreateArgs<ExtArgs>>): Prisma__announcementsClient<$Result.GetResult<Prisma.$announcementsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Announcements.
     * @param {announcementsCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcements = await prisma.announcements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends announcementsCreateManyArgs>(args?: SelectSubset<T, announcementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Announcements.
     * @param {announcementsDeleteArgs} args - Arguments to delete one Announcements.
     * @example
     * // Delete one Announcements
     * const Announcements = await prisma.announcements.delete({
     *   where: {
     *     // ... filter to delete one Announcements
     *   }
     * })
     * 
     */
    delete<T extends announcementsDeleteArgs>(args: SelectSubset<T, announcementsDeleteArgs<ExtArgs>>): Prisma__announcementsClient<$Result.GetResult<Prisma.$announcementsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Announcements.
     * @param {announcementsUpdateArgs} args - Arguments to update one Announcements.
     * @example
     * // Update one Announcements
     * const announcements = await prisma.announcements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends announcementsUpdateArgs>(args: SelectSubset<T, announcementsUpdateArgs<ExtArgs>>): Prisma__announcementsClient<$Result.GetResult<Prisma.$announcementsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Announcements.
     * @param {announcementsDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends announcementsDeleteManyArgs>(args?: SelectSubset<T, announcementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {announcementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcements = await prisma.announcements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends announcementsUpdateManyArgs>(args: SelectSubset<T, announcementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Announcements.
     * @param {announcementsUpsertArgs} args - Arguments to update or create a Announcements.
     * @example
     * // Update or create a Announcements
     * const announcements = await prisma.announcements.upsert({
     *   create: {
     *     // ... data to create a Announcements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcements we want to update
     *   }
     * })
     */
    upsert<T extends announcementsUpsertArgs>(args: SelectSubset<T, announcementsUpsertArgs<ExtArgs>>): Prisma__announcementsClient<$Result.GetResult<Prisma.$announcementsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {announcementsCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcements.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends announcementsCountArgs>(
      args?: Subset<T, announcementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementsAggregateArgs>(args: Subset<T, AnnouncementsAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementsAggregateType<T>>

    /**
     * Group by Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {announcementsGroupByArgs} args - Group by arguments.
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
      T extends announcementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: announcementsGroupByArgs['orderBy'] }
        : { orderBy?: announcementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, announcementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the announcements model
   */
  readonly fields: announcementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for announcements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__announcementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the announcements model
   */ 
  interface announcementsFieldRefs {
    readonly id: FieldRef<"announcements", 'Int'>
    readonly title: FieldRef<"announcements", 'String'>
    readonly link: FieldRef<"announcements", 'String'>
    readonly createdAt: FieldRef<"announcements", 'DateTime'>
    readonly views: FieldRef<"announcements", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * announcements findUnique
   */
  export type announcementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the announcements
     */
    select?: announcementsSelect<ExtArgs> | null
    /**
     * Filter, which announcements to fetch.
     */
    where: announcementsWhereUniqueInput
  }

  /**
   * announcements findUniqueOrThrow
   */
  export type announcementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the announcements
     */
    select?: announcementsSelect<ExtArgs> | null
    /**
     * Filter, which announcements to fetch.
     */
    where: announcementsWhereUniqueInput
  }

  /**
   * announcements findFirst
   */
  export type announcementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the announcements
     */
    select?: announcementsSelect<ExtArgs> | null
    /**
     * Filter, which announcements to fetch.
     */
    where?: announcementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of announcements to fetch.
     */
    orderBy?: announcementsOrderByWithRelationInput | announcementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for announcements.
     */
    cursor?: announcementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of announcements.
     */
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * announcements findFirstOrThrow
   */
  export type announcementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the announcements
     */
    select?: announcementsSelect<ExtArgs> | null
    /**
     * Filter, which announcements to fetch.
     */
    where?: announcementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of announcements to fetch.
     */
    orderBy?: announcementsOrderByWithRelationInput | announcementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for announcements.
     */
    cursor?: announcementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of announcements.
     */
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * announcements findMany
   */
  export type announcementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the announcements
     */
    select?: announcementsSelect<ExtArgs> | null
    /**
     * Filter, which announcements to fetch.
     */
    where?: announcementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of announcements to fetch.
     */
    orderBy?: announcementsOrderByWithRelationInput | announcementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing announcements.
     */
    cursor?: announcementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` announcements.
     */
    skip?: number
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * announcements create
   */
  export type announcementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the announcements
     */
    select?: announcementsSelect<ExtArgs> | null
    /**
     * The data needed to create a announcements.
     */
    data: XOR<announcementsCreateInput, announcementsUncheckedCreateInput>
  }

  /**
   * announcements createMany
   */
  export type announcementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many announcements.
     */
    data: announcementsCreateManyInput | announcementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * announcements update
   */
  export type announcementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the announcements
     */
    select?: announcementsSelect<ExtArgs> | null
    /**
     * The data needed to update a announcements.
     */
    data: XOR<announcementsUpdateInput, announcementsUncheckedUpdateInput>
    /**
     * Choose, which announcements to update.
     */
    where: announcementsWhereUniqueInput
  }

  /**
   * announcements updateMany
   */
  export type announcementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update announcements.
     */
    data: XOR<announcementsUpdateManyMutationInput, announcementsUncheckedUpdateManyInput>
    /**
     * Filter which announcements to update
     */
    where?: announcementsWhereInput
  }

  /**
   * announcements upsert
   */
  export type announcementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the announcements
     */
    select?: announcementsSelect<ExtArgs> | null
    /**
     * The filter to search for the announcements to update in case it exists.
     */
    where: announcementsWhereUniqueInput
    /**
     * In case the announcements found by the `where` argument doesn't exist, create a new announcements with this data.
     */
    create: XOR<announcementsCreateInput, announcementsUncheckedCreateInput>
    /**
     * In case the announcements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<announcementsUpdateInput, announcementsUncheckedUpdateInput>
  }

  /**
   * announcements delete
   */
  export type announcementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the announcements
     */
    select?: announcementsSelect<ExtArgs> | null
    /**
     * Filter which announcements to delete.
     */
    where: announcementsWhereUniqueInput
  }

  /**
   * announcements deleteMany
   */
  export type announcementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which announcements to delete
     */
    where?: announcementsWhereInput
  }

  /**
   * announcements without action
   */
  export type announcementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the announcements
     */
    select?: announcementsSelect<ExtArgs> | null
  }


  /**
   * Model banners
   */

  export type AggregateBanners = {
    _count: BannersCountAggregateOutputType | null
    _avg: BannersAvgAggregateOutputType | null
    _sum: BannersSumAggregateOutputType | null
    _min: BannersMinAggregateOutputType | null
    _max: BannersMaxAggregateOutputType | null
  }

  export type BannersAvgAggregateOutputType = {
    id: number | null
  }

  export type BannersSumAggregateOutputType = {
    id: number | null
  }

  export type BannersMinAggregateOutputType = {
    id: number | null
    title: string | null
    link: string | null
    createdAt: Date | null
  }

  export type BannersMaxAggregateOutputType = {
    id: number | null
    title: string | null
    link: string | null
    createdAt: Date | null
  }

  export type BannersCountAggregateOutputType = {
    id: number
    title: number
    link: number
    createdAt: number
    _all: number
  }


  export type BannersAvgAggregateInputType = {
    id?: true
  }

  export type BannersSumAggregateInputType = {
    id?: true
  }

  export type BannersMinAggregateInputType = {
    id?: true
    title?: true
    link?: true
    createdAt?: true
  }

  export type BannersMaxAggregateInputType = {
    id?: true
    title?: true
    link?: true
    createdAt?: true
  }

  export type BannersCountAggregateInputType = {
    id?: true
    title?: true
    link?: true
    createdAt?: true
    _all?: true
  }

  export type BannersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banners to aggregate.
     */
    where?: bannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannersOrderByWithRelationInput | bannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned banners
    **/
    _count?: true | BannersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannersMaxAggregateInputType
  }

  export type GetBannersAggregateType<T extends BannersAggregateArgs> = {
        [P in keyof T & keyof AggregateBanners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanners[P]>
      : GetScalarType<T[P], AggregateBanners[P]>
  }




  export type bannersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bannersWhereInput
    orderBy?: bannersOrderByWithAggregationInput | bannersOrderByWithAggregationInput[]
    by: BannersScalarFieldEnum[] | BannersScalarFieldEnum
    having?: bannersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannersCountAggregateInputType | true
    _avg?: BannersAvgAggregateInputType
    _sum?: BannersSumAggregateInputType
    _min?: BannersMinAggregateInputType
    _max?: BannersMaxAggregateInputType
  }

  export type BannersGroupByOutputType = {
    id: number
    title: string
    link: string | null
    createdAt: Date
    _count: BannersCountAggregateOutputType | null
    _avg: BannersAvgAggregateOutputType | null
    _sum: BannersSumAggregateOutputType | null
    _min: BannersMinAggregateOutputType | null
    _max: BannersMaxAggregateOutputType | null
  }

  type GetBannersGroupByPayload<T extends bannersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannersGroupByOutputType[P]>
            : GetScalarType<T[P], BannersGroupByOutputType[P]>
        }
      >
    >


  export type bannersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    link?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["banners"]>


  export type bannersSelectScalar = {
    id?: boolean
    title?: boolean
    link?: boolean
    createdAt?: boolean
  }


  export type $bannersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "banners"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      link: string | null
      createdAt: Date
    }, ExtArgs["result"]["banners"]>
    composites: {}
  }

  type bannersGetPayload<S extends boolean | null | undefined | bannersDefaultArgs> = $Result.GetResult<Prisma.$bannersPayload, S>

  type bannersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<bannersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BannersCountAggregateInputType | true
    }

  export interface bannersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['banners'], meta: { name: 'banners' } }
    /**
     * Find zero or one Banners that matches the filter.
     * @param {bannersFindUniqueArgs} args - Arguments to find a Banners
     * @example
     * // Get one Banners
     * const banners = await prisma.banners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bannersFindUniqueArgs>(args: SelectSubset<T, bannersFindUniqueArgs<ExtArgs>>): Prisma__bannersClient<$Result.GetResult<Prisma.$bannersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Banners that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {bannersFindUniqueOrThrowArgs} args - Arguments to find a Banners
     * @example
     * // Get one Banners
     * const banners = await prisma.banners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bannersFindUniqueOrThrowArgs>(args: SelectSubset<T, bannersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bannersClient<$Result.GetResult<Prisma.$bannersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannersFindFirstArgs} args - Arguments to find a Banners
     * @example
     * // Get one Banners
     * const banners = await prisma.banners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bannersFindFirstArgs>(args?: SelectSubset<T, bannersFindFirstArgs<ExtArgs>>): Prisma__bannersClient<$Result.GetResult<Prisma.$bannersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Banners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannersFindFirstOrThrowArgs} args - Arguments to find a Banners
     * @example
     * // Get one Banners
     * const banners = await prisma.banners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bannersFindFirstOrThrowArgs>(args?: SelectSubset<T, bannersFindFirstOrThrowArgs<ExtArgs>>): Prisma__bannersClient<$Result.GetResult<Prisma.$bannersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banners.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannersWithIdOnly = await prisma.banners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bannersFindManyArgs>(args?: SelectSubset<T, bannersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bannersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Banners.
     * @param {bannersCreateArgs} args - Arguments to create a Banners.
     * @example
     * // Create one Banners
     * const Banners = await prisma.banners.create({
     *   data: {
     *     // ... data to create a Banners
     *   }
     * })
     * 
     */
    create<T extends bannersCreateArgs>(args: SelectSubset<T, bannersCreateArgs<ExtArgs>>): Prisma__bannersClient<$Result.GetResult<Prisma.$bannersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Banners.
     * @param {bannersCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banners = await prisma.banners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bannersCreateManyArgs>(args?: SelectSubset<T, bannersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Banners.
     * @param {bannersDeleteArgs} args - Arguments to delete one Banners.
     * @example
     * // Delete one Banners
     * const Banners = await prisma.banners.delete({
     *   where: {
     *     // ... filter to delete one Banners
     *   }
     * })
     * 
     */
    delete<T extends bannersDeleteArgs>(args: SelectSubset<T, bannersDeleteArgs<ExtArgs>>): Prisma__bannersClient<$Result.GetResult<Prisma.$bannersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Banners.
     * @param {bannersUpdateArgs} args - Arguments to update one Banners.
     * @example
     * // Update one Banners
     * const banners = await prisma.banners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bannersUpdateArgs>(args: SelectSubset<T, bannersUpdateArgs<ExtArgs>>): Prisma__bannersClient<$Result.GetResult<Prisma.$bannersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Banners.
     * @param {bannersDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bannersDeleteManyArgs>(args?: SelectSubset<T, bannersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banners = await prisma.banners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bannersUpdateManyArgs>(args: SelectSubset<T, bannersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banners.
     * @param {bannersUpsertArgs} args - Arguments to update or create a Banners.
     * @example
     * // Update or create a Banners
     * const banners = await prisma.banners.upsert({
     *   create: {
     *     // ... data to create a Banners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banners we want to update
     *   }
     * })
     */
    upsert<T extends bannersUpsertArgs>(args: SelectSubset<T, bannersUpsertArgs<ExtArgs>>): Prisma__bannersClient<$Result.GetResult<Prisma.$bannersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannersCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banners.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends bannersCountArgs>(
      args?: Subset<T, bannersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannersAggregateArgs>(args: Subset<T, BannersAggregateArgs>): Prisma.PrismaPromise<GetBannersAggregateType<T>>

    /**
     * Group by Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannersGroupByArgs} args - Group by arguments.
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
      T extends bannersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bannersGroupByArgs['orderBy'] }
        : { orderBy?: bannersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bannersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the banners model
   */
  readonly fields: bannersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for banners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bannersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the banners model
   */ 
  interface bannersFieldRefs {
    readonly id: FieldRef<"banners", 'Int'>
    readonly title: FieldRef<"banners", 'String'>
    readonly link: FieldRef<"banners", 'String'>
    readonly createdAt: FieldRef<"banners", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * banners findUnique
   */
  export type bannersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banners
     */
    select?: bannersSelect<ExtArgs> | null
    /**
     * Filter, which banners to fetch.
     */
    where: bannersWhereUniqueInput
  }

  /**
   * banners findUniqueOrThrow
   */
  export type bannersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banners
     */
    select?: bannersSelect<ExtArgs> | null
    /**
     * Filter, which banners to fetch.
     */
    where: bannersWhereUniqueInput
  }

  /**
   * banners findFirst
   */
  export type bannersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banners
     */
    select?: bannersSelect<ExtArgs> | null
    /**
     * Filter, which banners to fetch.
     */
    where?: bannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannersOrderByWithRelationInput | bannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banners.
     */
    cursor?: bannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banners.
     */
    distinct?: BannersScalarFieldEnum | BannersScalarFieldEnum[]
  }

  /**
   * banners findFirstOrThrow
   */
  export type bannersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banners
     */
    select?: bannersSelect<ExtArgs> | null
    /**
     * Filter, which banners to fetch.
     */
    where?: bannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannersOrderByWithRelationInput | bannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banners.
     */
    cursor?: bannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banners.
     */
    distinct?: BannersScalarFieldEnum | BannersScalarFieldEnum[]
  }

  /**
   * banners findMany
   */
  export type bannersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banners
     */
    select?: bannersSelect<ExtArgs> | null
    /**
     * Filter, which banners to fetch.
     */
    where?: bannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannersOrderByWithRelationInput | bannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing banners.
     */
    cursor?: bannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    distinct?: BannersScalarFieldEnum | BannersScalarFieldEnum[]
  }

  /**
   * banners create
   */
  export type bannersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banners
     */
    select?: bannersSelect<ExtArgs> | null
    /**
     * The data needed to create a banners.
     */
    data: XOR<bannersCreateInput, bannersUncheckedCreateInput>
  }

  /**
   * banners createMany
   */
  export type bannersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many banners.
     */
    data: bannersCreateManyInput | bannersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * banners update
   */
  export type bannersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banners
     */
    select?: bannersSelect<ExtArgs> | null
    /**
     * The data needed to update a banners.
     */
    data: XOR<bannersUpdateInput, bannersUncheckedUpdateInput>
    /**
     * Choose, which banners to update.
     */
    where: bannersWhereUniqueInput
  }

  /**
   * banners updateMany
   */
  export type bannersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update banners.
     */
    data: XOR<bannersUpdateManyMutationInput, bannersUncheckedUpdateManyInput>
    /**
     * Filter which banners to update
     */
    where?: bannersWhereInput
  }

  /**
   * banners upsert
   */
  export type bannersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banners
     */
    select?: bannersSelect<ExtArgs> | null
    /**
     * The filter to search for the banners to update in case it exists.
     */
    where: bannersWhereUniqueInput
    /**
     * In case the banners found by the `where` argument doesn't exist, create a new banners with this data.
     */
    create: XOR<bannersCreateInput, bannersUncheckedCreateInput>
    /**
     * In case the banners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bannersUpdateInput, bannersUncheckedUpdateInput>
  }

  /**
   * banners delete
   */
  export type bannersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banners
     */
    select?: bannersSelect<ExtArgs> | null
    /**
     * Filter which banners to delete.
     */
    where: bannersWhereUniqueInput
  }

  /**
   * banners deleteMany
   */
  export type bannersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banners to delete
     */
    where?: bannersWhereInput
  }

  /**
   * banners without action
   */
  export type bannersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banners
     */
    select?: bannersSelect<ExtArgs> | null
  }


  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    content: string | null
    author: string | null
    photo: string | null
    createdAt: Date | null
    whoComment: string | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    content: string | null
    author: string | null
    photo: string | null
    createdAt: Date | null
    whoComment: string | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    content: number
    author: number
    photo: number
    createdAt: number
    whoComment: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    content?: true
    author?: true
    photo?: true
    createdAt?: true
    whoComment?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    content?: true
    author?: true
    photo?: true
    createdAt?: true
    whoComment?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    content?: true
    author?: true
    photo?: true
    createdAt?: true
    whoComment?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    content: string
    author: string
    photo: string | null
    createdAt: Date
    whoComment: string
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    author?: boolean
    photo?: boolean
    createdAt?: boolean
    whoComment?: boolean
  }, ExtArgs["result"]["comments"]>


  export type commentsSelectScalar = {
    id?: boolean
    content?: boolean
    author?: boolean
    photo?: boolean
    createdAt?: boolean
    whoComment?: boolean
  }


  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      author: string
      photo: string | null
      createdAt: Date
      whoComment: string
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
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
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the comments model
   */ 
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'Int'>
    readonly content: FieldRef<"comments", 'String'>
    readonly author: FieldRef<"comments", 'String'>
    readonly photo: FieldRef<"comments", 'String'>
    readonly createdAt: FieldRef<"comments", 'DateTime'>
    readonly whoComment: FieldRef<"comments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
  }


  /**
   * Model courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesAvgAggregateOutputType = {
    id: number | null
  }

  export type CoursesSumAggregateOutputType = {
    id: number | null
  }

  export type CoursesMinAggregateOutputType = {
    id: number | null
    coursename: string | null
    duration: string | null
    courseType: string | null
    description: string | null
    photo: string | null
    createdAt: Date | null
  }

  export type CoursesMaxAggregateOutputType = {
    id: number | null
    coursename: string | null
    duration: string | null
    courseType: string | null
    description: string | null
    photo: string | null
    createdAt: Date | null
  }

  export type CoursesCountAggregateOutputType = {
    id: number
    coursename: number
    duration: number
    courseType: number
    description: number
    photo: number
    createdAt: number
    _all: number
  }


  export type CoursesAvgAggregateInputType = {
    id?: true
  }

  export type CoursesSumAggregateInputType = {
    id?: true
  }

  export type CoursesMinAggregateInputType = {
    id?: true
    coursename?: true
    duration?: true
    courseType?: true
    description?: true
    photo?: true
    createdAt?: true
  }

  export type CoursesMaxAggregateInputType = {
    id?: true
    coursename?: true
    duration?: true
    courseType?: true
    description?: true
    photo?: true
    createdAt?: true
  }

  export type CoursesCountAggregateInputType = {
    id?: true
    coursename?: true
    duration?: true
    courseType?: true
    description?: true
    photo?: true
    createdAt?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to aggregate.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type coursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coursesWhereInput
    orderBy?: coursesOrderByWithAggregationInput | coursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: coursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _avg?: CoursesAvgAggregateInputType
    _sum?: CoursesSumAggregateInputType
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    id: number
    coursename: string
    duration: string
    courseType: string
    description: string
    photo: string | null
    createdAt: Date
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends coursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type coursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coursename?: boolean
    duration?: boolean
    courseType?: boolean
    description?: boolean
    photo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["courses"]>


  export type coursesSelectScalar = {
    id?: boolean
    coursename?: boolean
    duration?: boolean
    courseType?: boolean
    description?: boolean
    photo?: boolean
    createdAt?: boolean
  }


  export type $coursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "courses"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      coursename: string
      duration: string
      courseType: string
      description: string
      photo: string | null
      createdAt: Date
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type coursesGetPayload<S extends boolean | null | undefined | coursesDefaultArgs> = $Result.GetResult<Prisma.$coursesPayload, S>

  type coursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<coursesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface coursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['courses'], meta: { name: 'courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {coursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends coursesFindUniqueArgs>(args: SelectSubset<T, coursesFindUniqueArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {coursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends coursesFindUniqueOrThrowArgs>(args: SelectSubset<T, coursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends coursesFindFirstArgs>(args?: SelectSubset<T, coursesFindFirstArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends coursesFindFirstOrThrowArgs>(args?: SelectSubset<T, coursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursesWithIdOnly = await prisma.courses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends coursesFindManyArgs>(args?: SelectSubset<T, coursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Courses.
     * @param {coursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends coursesCreateArgs>(args: SelectSubset<T, coursesCreateArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Courses.
     * @param {coursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends coursesCreateManyArgs>(args?: SelectSubset<T, coursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Courses.
     * @param {coursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends coursesDeleteArgs>(args: SelectSubset<T, coursesDeleteArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Courses.
     * @param {coursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends coursesUpdateArgs>(args: SelectSubset<T, coursesUpdateArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {coursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends coursesDeleteManyArgs>(args?: SelectSubset<T, coursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends coursesUpdateManyArgs>(args: SelectSubset<T, coursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Courses.
     * @param {coursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends coursesUpsertArgs>(args: SelectSubset<T, coursesUpsertArgs<ExtArgs>>): Prisma__coursesClient<$Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends coursesCountArgs>(
      args?: Subset<T, coursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coursesGroupByArgs} args - Group by arguments.
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
      T extends coursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: coursesGroupByArgs['orderBy'] }
        : { orderBy?: coursesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, coursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the courses model
   */
  readonly fields: coursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__coursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the courses model
   */ 
  interface coursesFieldRefs {
    readonly id: FieldRef<"courses", 'Int'>
    readonly coursename: FieldRef<"courses", 'String'>
    readonly duration: FieldRef<"courses", 'String'>
    readonly courseType: FieldRef<"courses", 'String'>
    readonly description: FieldRef<"courses", 'String'>
    readonly photo: FieldRef<"courses", 'String'>
    readonly createdAt: FieldRef<"courses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * courses findUnique
   */
  export type coursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses findUniqueOrThrow
   */
  export type coursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses findFirst
   */
  export type coursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses findFirstOrThrow
   */
  export type coursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses findMany
   */
  export type coursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: coursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: coursesOrderByWithRelationInput | coursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: coursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * courses create
   */
  export type coursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * The data needed to create a courses.
     */
    data: XOR<coursesCreateInput, coursesUncheckedCreateInput>
  }

  /**
   * courses createMany
   */
  export type coursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: coursesCreateManyInput | coursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * courses update
   */
  export type coursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * The data needed to update a courses.
     */
    data: XOR<coursesUpdateInput, coursesUncheckedUpdateInput>
    /**
     * Choose, which courses to update.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses updateMany
   */
  export type coursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<coursesUpdateManyMutationInput, coursesUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: coursesWhereInput
  }

  /**
   * courses upsert
   */
  export type coursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * The filter to search for the courses to update in case it exists.
     */
    where: coursesWhereUniqueInput
    /**
     * In case the courses found by the `where` argument doesn't exist, create a new courses with this data.
     */
    create: XOR<coursesCreateInput, coursesUncheckedCreateInput>
    /**
     * In case the courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<coursesUpdateInput, coursesUncheckedUpdateInput>
  }

  /**
   * courses delete
   */
  export type coursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
    /**
     * Filter which courses to delete.
     */
    where: coursesWhereUniqueInput
  }

  /**
   * courses deleteMany
   */
  export type coursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: coursesWhereInput
  }

  /**
   * courses without action
   */
  export type coursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courses
     */
    select?: coursesSelect<ExtArgs> | null
  }


  /**
   * Model documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsAvgAggregateOutputType = {
    id: number | null
    views: number | null
  }

  export type DocumentsSumAggregateOutputType = {
    id: number | null
    views: number | null
  }

  export type DocumentsMinAggregateOutputType = {
    id: number | null
    title: string | null
    link: string | null
    views: number | null
    createdAt: Date | null
  }

  export type DocumentsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    link: string | null
    views: number | null
    createdAt: Date | null
  }

  export type DocumentsCountAggregateOutputType = {
    id: number
    title: number
    link: number
    views: number
    createdAt: number
    _all: number
  }


  export type DocumentsAvgAggregateInputType = {
    id?: true
    views?: true
  }

  export type DocumentsSumAggregateInputType = {
    id?: true
    views?: true
  }

  export type DocumentsMinAggregateInputType = {
    id?: true
    title?: true
    link?: true
    views?: true
    createdAt?: true
  }

  export type DocumentsMaxAggregateInputType = {
    id?: true
    title?: true
    link?: true
    views?: true
    createdAt?: true
  }

  export type DocumentsCountAggregateInputType = {
    id?: true
    title?: true
    link?: true
    views?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to aggregate.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documents
    **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }




  export type documentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentsWhereInput
    orderBy?: documentsOrderByWithAggregationInput | documentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: documentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _avg?: DocumentsAvgAggregateInputType
    _sum?: DocumentsSumAggregateInputType
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    id: number
    title: string
    link: string
    views: number
    createdAt: Date
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends documentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >


  export type documentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    link?: boolean
    views?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["documents"]>


  export type documentsSelectScalar = {
    id?: boolean
    title?: boolean
    link?: boolean
    views?: boolean
    createdAt?: boolean
  }


  export type $documentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      link: string
      views: number
      createdAt: Date
    }, ExtArgs["result"]["documents"]>
    composites: {}
  }

  type documentsGetPayload<S extends boolean | null | undefined | documentsDefaultArgs> = $Result.GetResult<Prisma.$documentsPayload, S>

  type documentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<documentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocumentsCountAggregateInputType | true
    }

  export interface documentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documents'], meta: { name: 'documents' } }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {documentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documentsFindUniqueArgs>(args: SelectSubset<T, documentsFindUniqueArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Documents that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {documentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documentsFindUniqueOrThrowArgs>(args: SelectSubset<T, documentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documentsFindFirstArgs>(args?: SelectSubset<T, documentsFindFirstArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documentsFindFirstOrThrowArgs>(args?: SelectSubset<T, documentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentsWithIdOnly = await prisma.documents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends documentsFindManyArgs>(args?: SelectSubset<T, documentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Documents.
     * @param {documentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     * 
     */
    create<T extends documentsCreateArgs>(args: SelectSubset<T, documentsCreateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Documents.
     * @param {documentsCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documentsCreateManyArgs>(args?: SelectSubset<T, documentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Documents.
     * @param {documentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     * 
     */
    delete<T extends documentsDeleteArgs>(args: SelectSubset<T, documentsDeleteArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Documents.
     * @param {documentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documentsUpdateArgs>(args: SelectSubset<T, documentsUpdateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Documents.
     * @param {documentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documentsDeleteManyArgs>(args?: SelectSubset<T, documentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documentsUpdateManyArgs>(args: SelectSubset<T, documentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Documents.
     * @param {documentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     */
    upsert<T extends documentsUpsertArgs>(args: SelectSubset<T, documentsUpsertArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends documentsCountArgs>(
      args?: Subset<T, documentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentsAggregateArgs>(args: Subset<T, DocumentsAggregateArgs>): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsGroupByArgs} args - Group by arguments.
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
      T extends documentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentsGroupByArgs['orderBy'] }
        : { orderBy?: documentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, documentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documents model
   */
  readonly fields: documentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the documents model
   */ 
  interface documentsFieldRefs {
    readonly id: FieldRef<"documents", 'Int'>
    readonly title: FieldRef<"documents", 'String'>
    readonly link: FieldRef<"documents", 'String'>
    readonly views: FieldRef<"documents", 'Int'>
    readonly createdAt: FieldRef<"documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * documents findUnique
   */
  export type documentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findUniqueOrThrow
   */
  export type documentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findFirst
   */
  export type documentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findFirstOrThrow
   */
  export type documentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findMany
   */
  export type documentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents create
   */
  export type documentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * The data needed to create a documents.
     */
    data: XOR<documentsCreateInput, documentsUncheckedCreateInput>
  }

  /**
   * documents createMany
   */
  export type documentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documents.
     */
    data: documentsCreateManyInput | documentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documents update
   */
  export type documentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * The data needed to update a documents.
     */
    data: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
    /**
     * Choose, which documents to update.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents updateMany
   */
  export type documentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documents.
     */
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentsWhereInput
  }

  /**
   * documents upsert
   */
  export type documentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * The filter to search for the documents to update in case it exists.
     */
    where: documentsWhereUniqueInput
    /**
     * In case the documents found by the `where` argument doesn't exist, create a new documents with this data.
     */
    create: XOR<documentsCreateInput, documentsUncheckedCreateInput>
    /**
     * In case the documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
  }

  /**
   * documents delete
   */
  export type documentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Filter which documents to delete.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents deleteMany
   */
  export type documentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to delete
     */
    where?: documentsWhereInput
  }

  /**
   * documents without action
   */
  export type documentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
  }


  /**
   * Model employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployeesSumAggregateOutputType = {
    id: number | null
  }

  export type EmployeesMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    category: string | null
    position: string | null
    photo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    department: string | null
  }

  export type EmployeesMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    category: string | null
    position: string | null
    photo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    department: string | null
  }

  export type EmployeesCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    phone: number
    category: number
    position: number
    photo: number
    createdAt: number
    updatedAt: number
    department: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    id?: true
  }

  export type EmployeesSumAggregateInputType = {
    id?: true
  }

  export type EmployeesMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    category?: true
    position?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
    department?: true
  }

  export type EmployeesMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    category?: true
    position?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
    department?: true
  }

  export type EmployeesCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    category?: true
    position?: true
    photo?: true
    createdAt?: true
    updatedAt?: true
    department?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to aggregate.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type employeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeesWhereInput
    orderBy?: employeesOrderByWithAggregationInput | employeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: employeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    email: string
    phone: string
    category: string
    position: string | null
    photo: string | null
    createdAt: Date
    updatedAt: Date
    department: string | null
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends employeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type employeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    category?: boolean
    position?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean
  }, ExtArgs["result"]["employees"]>


  export type employeesSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    category?: boolean
    position?: boolean
    photo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean
  }


  export type $employeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employees"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      email: string
      phone: string
      category: string
      position: string | null
      photo: string | null
      createdAt: Date
      updatedAt: Date
      department: string | null
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type employeesGetPayload<S extends boolean | null | undefined | employeesDefaultArgs> = $Result.GetResult<Prisma.$employeesPayload, S>

  type employeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<employeesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface employeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employees'], meta: { name: 'employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {employeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeesFindUniqueArgs>(args: SelectSubset<T, employeesFindUniqueArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {employeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeesFindUniqueOrThrowArgs>(args: SelectSubset<T, employeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeesFindFirstArgs>(args?: SelectSubset<T, employeesFindFirstArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeesFindFirstOrThrowArgs>(args?: SelectSubset<T, employeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeesWithIdOnly = await prisma.employees.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends employeesFindManyArgs>(args?: SelectSubset<T, employeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Employees.
     * @param {employeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends employeesCreateArgs>(args: SelectSubset<T, employeesCreateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Employees.
     * @param {employeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeesCreateManyArgs>(args?: SelectSubset<T, employeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employees.
     * @param {employeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends employeesDeleteArgs>(args: SelectSubset<T, employeesDeleteArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Employees.
     * @param {employeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeesUpdateArgs>(args: SelectSubset<T, employeesUpdateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {employeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeesDeleteManyArgs>(args?: SelectSubset<T, employeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeesUpdateManyArgs>(args: SelectSubset<T, employeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employees.
     * @param {employeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends employeesUpsertArgs>(args: SelectSubset<T, employeesUpsertArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeesCountArgs>(
      args?: Subset<T, employeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesGroupByArgs} args - Group by arguments.
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
      T extends employeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeesGroupByArgs['orderBy'] }
        : { orderBy?: employeesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, employeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employees model
   */
  readonly fields: employeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the employees model
   */ 
  interface employeesFieldRefs {
    readonly id: FieldRef<"employees", 'Int'>
    readonly firstname: FieldRef<"employees", 'String'>
    readonly lastname: FieldRef<"employees", 'String'>
    readonly email: FieldRef<"employees", 'String'>
    readonly phone: FieldRef<"employees", 'String'>
    readonly category: FieldRef<"employees", 'String'>
    readonly position: FieldRef<"employees", 'String'>
    readonly photo: FieldRef<"employees", 'String'>
    readonly createdAt: FieldRef<"employees", 'DateTime'>
    readonly updatedAt: FieldRef<"employees", 'DateTime'>
    readonly department: FieldRef<"employees", 'String'>
  }
    

  // Custom InputTypes
  /**
   * employees findUnique
   */
  export type employeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findUniqueOrThrow
   */
  export type employeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findFirst
   */
  export type employeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findFirstOrThrow
   */
  export type employeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findMany
   */
  export type employeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees create
   */
  export type employeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * The data needed to create a employees.
     */
    data: XOR<employeesCreateInput, employeesUncheckedCreateInput>
  }

  /**
   * employees createMany
   */
  export type employeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees update
   */
  export type employeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * The data needed to update a employees.
     */
    data: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
    /**
     * Choose, which employees to update.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees updateMany
   */
  export type employeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
  }

  /**
   * employees upsert
   */
  export type employeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * The filter to search for the employees to update in case it exists.
     */
    where: employeesWhereUniqueInput
    /**
     * In case the employees found by the `where` argument doesn't exist, create a new employees with this data.
     */
    create: XOR<employeesCreateInput, employeesUncheckedCreateInput>
    /**
     * In case the employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
  }

  /**
   * employees delete
   */
  export type employeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Filter which employees to delete.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees deleteMany
   */
  export type employeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeesWhereInput
  }

  /**
   * employees without action
   */
  export type employeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    product_name: string | null
    department: string | null
    price: string | null
    photo: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    product_name: string | null
    department: string | null
    price: string | null
    photo: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    product_name: number
    department: number
    price: number
    photo: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    product_name?: true
    department?: true
    price?: true
    photo?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    product_name?: true
    department?: true
    price?: true
    photo?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    product_name?: true
    department?: true
    price?: true
    photo?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    product_name: string
    department: string
    price: string
    photo: string
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_name?: boolean
    department?: boolean
    price?: boolean
    photo?: boolean
  }, ExtArgs["result"]["products"]>


  export type productsSelectScalar = {
    id?: boolean
    product_name?: boolean
    department?: boolean
    price?: boolean
    photo?: boolean
  }


  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_name: string
      department: string
      price: string
      photo: string
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the products model
   */ 
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly product_name: FieldRef<"products", 'String'>
    readonly department: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'String'>
    readonly photo: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
  }


  /**
   * Model recentupdates
   */

  export type AggregateRecentupdates = {
    _count: RecentupdatesCountAggregateOutputType | null
    _avg: RecentupdatesAvgAggregateOutputType | null
    _sum: RecentupdatesSumAggregateOutputType | null
    _min: RecentupdatesMinAggregateOutputType | null
    _max: RecentupdatesMaxAggregateOutputType | null
  }

  export type RecentupdatesAvgAggregateOutputType = {
    id: number | null
  }

  export type RecentupdatesSumAggregateOutputType = {
    id: number | null
  }

  export type RecentupdatesMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    photo: string | null
    date: Date | null
    createdAt: Date | null
    slug: string | null
    updatedAt: Date | null
  }

  export type RecentupdatesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    photo: string | null
    date: Date | null
    createdAt: Date | null
    slug: string | null
    updatedAt: Date | null
  }

  export type RecentupdatesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    photo: number
    date: number
    createdAt: number
    slug: number
    updatedAt: number
    _all: number
  }


  export type RecentupdatesAvgAggregateInputType = {
    id?: true
  }

  export type RecentupdatesSumAggregateInputType = {
    id?: true
  }

  export type RecentupdatesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    photo?: true
    date?: true
    createdAt?: true
    slug?: true
    updatedAt?: true
  }

  export type RecentupdatesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    photo?: true
    date?: true
    createdAt?: true
    slug?: true
    updatedAt?: true
  }

  export type RecentupdatesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    photo?: true
    date?: true
    createdAt?: true
    slug?: true
    updatedAt?: true
    _all?: true
  }

  export type RecentupdatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recentupdates to aggregate.
     */
    where?: recentupdatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recentupdates to fetch.
     */
    orderBy?: recentupdatesOrderByWithRelationInput | recentupdatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recentupdatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recentupdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recentupdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recentupdates
    **/
    _count?: true | RecentupdatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecentupdatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecentupdatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecentupdatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecentupdatesMaxAggregateInputType
  }

  export type GetRecentupdatesAggregateType<T extends RecentupdatesAggregateArgs> = {
        [P in keyof T & keyof AggregateRecentupdates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecentupdates[P]>
      : GetScalarType<T[P], AggregateRecentupdates[P]>
  }




  export type recentupdatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recentupdatesWhereInput
    orderBy?: recentupdatesOrderByWithAggregationInput | recentupdatesOrderByWithAggregationInput[]
    by: RecentupdatesScalarFieldEnum[] | RecentupdatesScalarFieldEnum
    having?: recentupdatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecentupdatesCountAggregateInputType | true
    _avg?: RecentupdatesAvgAggregateInputType
    _sum?: RecentupdatesSumAggregateInputType
    _min?: RecentupdatesMinAggregateInputType
    _max?: RecentupdatesMaxAggregateInputType
  }

  export type RecentupdatesGroupByOutputType = {
    id: number
    title: string
    content: string | null
    photo: string | null
    date: Date
    createdAt: Date
    slug: string
    updatedAt: Date
    _count: RecentupdatesCountAggregateOutputType | null
    _avg: RecentupdatesAvgAggregateOutputType | null
    _sum: RecentupdatesSumAggregateOutputType | null
    _min: RecentupdatesMinAggregateOutputType | null
    _max: RecentupdatesMaxAggregateOutputType | null
  }

  type GetRecentupdatesGroupByPayload<T extends recentupdatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecentupdatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecentupdatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecentupdatesGroupByOutputType[P]>
            : GetScalarType<T[P], RecentupdatesGroupByOutputType[P]>
        }
      >
    >


  export type recentupdatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    photo?: boolean
    date?: boolean
    createdAt?: boolean
    slug?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recentupdates"]>


  export type recentupdatesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    photo?: boolean
    date?: boolean
    createdAt?: boolean
    slug?: boolean
    updatedAt?: boolean
  }


  export type $recentupdatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recentupdates"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string | null
      photo: string | null
      date: Date
      createdAt: Date
      slug: string
      updatedAt: Date
    }, ExtArgs["result"]["recentupdates"]>
    composites: {}
  }

  type recentupdatesGetPayload<S extends boolean | null | undefined | recentupdatesDefaultArgs> = $Result.GetResult<Prisma.$recentupdatesPayload, S>

  type recentupdatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<recentupdatesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecentupdatesCountAggregateInputType | true
    }

  export interface recentupdatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recentupdates'], meta: { name: 'recentupdates' } }
    /**
     * Find zero or one Recentupdates that matches the filter.
     * @param {recentupdatesFindUniqueArgs} args - Arguments to find a Recentupdates
     * @example
     * // Get one Recentupdates
     * const recentupdates = await prisma.recentupdates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recentupdatesFindUniqueArgs>(args: SelectSubset<T, recentupdatesFindUniqueArgs<ExtArgs>>): Prisma__recentupdatesClient<$Result.GetResult<Prisma.$recentupdatesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recentupdates that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {recentupdatesFindUniqueOrThrowArgs} args - Arguments to find a Recentupdates
     * @example
     * // Get one Recentupdates
     * const recentupdates = await prisma.recentupdates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recentupdatesFindUniqueOrThrowArgs>(args: SelectSubset<T, recentupdatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recentupdatesClient<$Result.GetResult<Prisma.$recentupdatesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recentupdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recentupdatesFindFirstArgs} args - Arguments to find a Recentupdates
     * @example
     * // Get one Recentupdates
     * const recentupdates = await prisma.recentupdates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recentupdatesFindFirstArgs>(args?: SelectSubset<T, recentupdatesFindFirstArgs<ExtArgs>>): Prisma__recentupdatesClient<$Result.GetResult<Prisma.$recentupdatesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recentupdates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recentupdatesFindFirstOrThrowArgs} args - Arguments to find a Recentupdates
     * @example
     * // Get one Recentupdates
     * const recentupdates = await prisma.recentupdates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recentupdatesFindFirstOrThrowArgs>(args?: SelectSubset<T, recentupdatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__recentupdatesClient<$Result.GetResult<Prisma.$recentupdatesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recentupdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recentupdatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recentupdates
     * const recentupdates = await prisma.recentupdates.findMany()
     * 
     * // Get first 10 Recentupdates
     * const recentupdates = await prisma.recentupdates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recentupdatesWithIdOnly = await prisma.recentupdates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recentupdatesFindManyArgs>(args?: SelectSubset<T, recentupdatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recentupdatesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recentupdates.
     * @param {recentupdatesCreateArgs} args - Arguments to create a Recentupdates.
     * @example
     * // Create one Recentupdates
     * const Recentupdates = await prisma.recentupdates.create({
     *   data: {
     *     // ... data to create a Recentupdates
     *   }
     * })
     * 
     */
    create<T extends recentupdatesCreateArgs>(args: SelectSubset<T, recentupdatesCreateArgs<ExtArgs>>): Prisma__recentupdatesClient<$Result.GetResult<Prisma.$recentupdatesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recentupdates.
     * @param {recentupdatesCreateManyArgs} args - Arguments to create many Recentupdates.
     * @example
     * // Create many Recentupdates
     * const recentupdates = await prisma.recentupdates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recentupdatesCreateManyArgs>(args?: SelectSubset<T, recentupdatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recentupdates.
     * @param {recentupdatesDeleteArgs} args - Arguments to delete one Recentupdates.
     * @example
     * // Delete one Recentupdates
     * const Recentupdates = await prisma.recentupdates.delete({
     *   where: {
     *     // ... filter to delete one Recentupdates
     *   }
     * })
     * 
     */
    delete<T extends recentupdatesDeleteArgs>(args: SelectSubset<T, recentupdatesDeleteArgs<ExtArgs>>): Prisma__recentupdatesClient<$Result.GetResult<Prisma.$recentupdatesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recentupdates.
     * @param {recentupdatesUpdateArgs} args - Arguments to update one Recentupdates.
     * @example
     * // Update one Recentupdates
     * const recentupdates = await prisma.recentupdates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recentupdatesUpdateArgs>(args: SelectSubset<T, recentupdatesUpdateArgs<ExtArgs>>): Prisma__recentupdatesClient<$Result.GetResult<Prisma.$recentupdatesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recentupdates.
     * @param {recentupdatesDeleteManyArgs} args - Arguments to filter Recentupdates to delete.
     * @example
     * // Delete a few Recentupdates
     * const { count } = await prisma.recentupdates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recentupdatesDeleteManyArgs>(args?: SelectSubset<T, recentupdatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recentupdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recentupdatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recentupdates
     * const recentupdates = await prisma.recentupdates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recentupdatesUpdateManyArgs>(args: SelectSubset<T, recentupdatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recentupdates.
     * @param {recentupdatesUpsertArgs} args - Arguments to update or create a Recentupdates.
     * @example
     * // Update or create a Recentupdates
     * const recentupdates = await prisma.recentupdates.upsert({
     *   create: {
     *     // ... data to create a Recentupdates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recentupdates we want to update
     *   }
     * })
     */
    upsert<T extends recentupdatesUpsertArgs>(args: SelectSubset<T, recentupdatesUpsertArgs<ExtArgs>>): Prisma__recentupdatesClient<$Result.GetResult<Prisma.$recentupdatesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recentupdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recentupdatesCountArgs} args - Arguments to filter Recentupdates to count.
     * @example
     * // Count the number of Recentupdates
     * const count = await prisma.recentupdates.count({
     *   where: {
     *     // ... the filter for the Recentupdates we want to count
     *   }
     * })
    **/
    count<T extends recentupdatesCountArgs>(
      args?: Subset<T, recentupdatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecentupdatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recentupdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentupdatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecentupdatesAggregateArgs>(args: Subset<T, RecentupdatesAggregateArgs>): Prisma.PrismaPromise<GetRecentupdatesAggregateType<T>>

    /**
     * Group by Recentupdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recentupdatesGroupByArgs} args - Group by arguments.
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
      T extends recentupdatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recentupdatesGroupByArgs['orderBy'] }
        : { orderBy?: recentupdatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, recentupdatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecentupdatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recentupdates model
   */
  readonly fields: recentupdatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recentupdates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recentupdatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the recentupdates model
   */ 
  interface recentupdatesFieldRefs {
    readonly id: FieldRef<"recentupdates", 'Int'>
    readonly title: FieldRef<"recentupdates", 'String'>
    readonly content: FieldRef<"recentupdates", 'String'>
    readonly photo: FieldRef<"recentupdates", 'String'>
    readonly date: FieldRef<"recentupdates", 'DateTime'>
    readonly createdAt: FieldRef<"recentupdates", 'DateTime'>
    readonly slug: FieldRef<"recentupdates", 'String'>
    readonly updatedAt: FieldRef<"recentupdates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * recentupdates findUnique
   */
  export type recentupdatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recentupdates
     */
    select?: recentupdatesSelect<ExtArgs> | null
    /**
     * Filter, which recentupdates to fetch.
     */
    where: recentupdatesWhereUniqueInput
  }

  /**
   * recentupdates findUniqueOrThrow
   */
  export type recentupdatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recentupdates
     */
    select?: recentupdatesSelect<ExtArgs> | null
    /**
     * Filter, which recentupdates to fetch.
     */
    where: recentupdatesWhereUniqueInput
  }

  /**
   * recentupdates findFirst
   */
  export type recentupdatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recentupdates
     */
    select?: recentupdatesSelect<ExtArgs> | null
    /**
     * Filter, which recentupdates to fetch.
     */
    where?: recentupdatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recentupdates to fetch.
     */
    orderBy?: recentupdatesOrderByWithRelationInput | recentupdatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recentupdates.
     */
    cursor?: recentupdatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recentupdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recentupdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recentupdates.
     */
    distinct?: RecentupdatesScalarFieldEnum | RecentupdatesScalarFieldEnum[]
  }

  /**
   * recentupdates findFirstOrThrow
   */
  export type recentupdatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recentupdates
     */
    select?: recentupdatesSelect<ExtArgs> | null
    /**
     * Filter, which recentupdates to fetch.
     */
    where?: recentupdatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recentupdates to fetch.
     */
    orderBy?: recentupdatesOrderByWithRelationInput | recentupdatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recentupdates.
     */
    cursor?: recentupdatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recentupdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recentupdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recentupdates.
     */
    distinct?: RecentupdatesScalarFieldEnum | RecentupdatesScalarFieldEnum[]
  }

  /**
   * recentupdates findMany
   */
  export type recentupdatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recentupdates
     */
    select?: recentupdatesSelect<ExtArgs> | null
    /**
     * Filter, which recentupdates to fetch.
     */
    where?: recentupdatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recentupdates to fetch.
     */
    orderBy?: recentupdatesOrderByWithRelationInput | recentupdatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recentupdates.
     */
    cursor?: recentupdatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recentupdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recentupdates.
     */
    skip?: number
    distinct?: RecentupdatesScalarFieldEnum | RecentupdatesScalarFieldEnum[]
  }

  /**
   * recentupdates create
   */
  export type recentupdatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recentupdates
     */
    select?: recentupdatesSelect<ExtArgs> | null
    /**
     * The data needed to create a recentupdates.
     */
    data: XOR<recentupdatesCreateInput, recentupdatesUncheckedCreateInput>
  }

  /**
   * recentupdates createMany
   */
  export type recentupdatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recentupdates.
     */
    data: recentupdatesCreateManyInput | recentupdatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recentupdates update
   */
  export type recentupdatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recentupdates
     */
    select?: recentupdatesSelect<ExtArgs> | null
    /**
     * The data needed to update a recentupdates.
     */
    data: XOR<recentupdatesUpdateInput, recentupdatesUncheckedUpdateInput>
    /**
     * Choose, which recentupdates to update.
     */
    where: recentupdatesWhereUniqueInput
  }

  /**
   * recentupdates updateMany
   */
  export type recentupdatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recentupdates.
     */
    data: XOR<recentupdatesUpdateManyMutationInput, recentupdatesUncheckedUpdateManyInput>
    /**
     * Filter which recentupdates to update
     */
    where?: recentupdatesWhereInput
  }

  /**
   * recentupdates upsert
   */
  export type recentupdatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recentupdates
     */
    select?: recentupdatesSelect<ExtArgs> | null
    /**
     * The filter to search for the recentupdates to update in case it exists.
     */
    where: recentupdatesWhereUniqueInput
    /**
     * In case the recentupdates found by the `where` argument doesn't exist, create a new recentupdates with this data.
     */
    create: XOR<recentupdatesCreateInput, recentupdatesUncheckedCreateInput>
    /**
     * In case the recentupdates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recentupdatesUpdateInput, recentupdatesUncheckedUpdateInput>
  }

  /**
   * recentupdates delete
   */
  export type recentupdatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recentupdates
     */
    select?: recentupdatesSelect<ExtArgs> | null
    /**
     * Filter which recentupdates to delete.
     */
    where: recentupdatesWhereUniqueInput
  }

  /**
   * recentupdates deleteMany
   */
  export type recentupdatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recentupdates to delete
     */
    where?: recentupdatesWhereInput
  }

  /**
   * recentupdates without action
   */
  export type recentupdatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recentupdates
     */
    select?: recentupdatesSelect<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    phone: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    email: string
    phone: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>


  export type usersSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      email: string
      phone: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly firstname: FieldRef<"users", 'String'>
    readonly lastname: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
  }


  /**
   * Model visitor
   */

  export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  export type VisitorAvgAggregateOutputType = {
    id: number | null
    visitCount: number | null
  }

  export type VisitorSumAggregateOutputType = {
    id: number | null
    visitCount: number | null
  }

  export type VisitorMinAggregateOutputType = {
    id: number | null
    ipAddress: string | null
    userAgent: string | null
    visitCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitorMaxAggregateOutputType = {
    id: number | null
    ipAddress: string | null
    userAgent: string | null
    visitCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitorCountAggregateOutputType = {
    id: number
    ipAddress: number
    userAgent: number
    visitCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisitorAvgAggregateInputType = {
    id?: true
    visitCount?: true
  }

  export type VisitorSumAggregateInputType = {
    id?: true
    visitCount?: true
  }

  export type VisitorMinAggregateInputType = {
    id?: true
    ipAddress?: true
    userAgent?: true
    visitCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitorMaxAggregateInputType = {
    id?: true
    ipAddress?: true
    userAgent?: true
    visitCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitorCountAggregateInputType = {
    id?: true
    ipAddress?: true
    userAgent?: true
    visitCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which visitor to aggregate.
     */
    where?: visitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visitors to fetch.
     */
    orderBy?: visitorOrderByWithRelationInput | visitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: visitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned visitors
    **/
    _count?: true | VisitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorMaxAggregateInputType
  }

  export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitor[P]>
      : GetScalarType<T[P], AggregateVisitor[P]>
  }




  export type visitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: visitorWhereInput
    orderBy?: visitorOrderByWithAggregationInput | visitorOrderByWithAggregationInput[]
    by: VisitorScalarFieldEnum[] | VisitorScalarFieldEnum
    having?: visitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorCountAggregateInputType | true
    _avg?: VisitorAvgAggregateInputType
    _sum?: VisitorSumAggregateInputType
    _min?: VisitorMinAggregateInputType
    _max?: VisitorMaxAggregateInputType
  }

  export type VisitorGroupByOutputType = {
    id: number
    ipAddress: string
    userAgent: string | null
    visitCount: number
    createdAt: Date
    updatedAt: Date
    _count: VisitorCountAggregateOutputType | null
    _avg: VisitorAvgAggregateOutputType | null
    _sum: VisitorSumAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  type GetVisitorGroupByPayload<T extends visitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorGroupByOutputType[P]>
        }
      >
    >


  export type visitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    visitCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["visitor"]>


  export type visitorSelectScalar = {
    id?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    visitCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $visitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "visitor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ipAddress: string
      userAgent: string | null
      visitCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["visitor"]>
    composites: {}
  }

  type visitorGetPayload<S extends boolean | null | undefined | visitorDefaultArgs> = $Result.GetResult<Prisma.$visitorPayload, S>

  type visitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<visitorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VisitorCountAggregateInputType | true
    }

  export interface visitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['visitor'], meta: { name: 'visitor' } }
    /**
     * Find zero or one Visitor that matches the filter.
     * @param {visitorFindUniqueArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends visitorFindUniqueArgs>(args: SelectSubset<T, visitorFindUniqueArgs<ExtArgs>>): Prisma__visitorClient<$Result.GetResult<Prisma.$visitorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Visitor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {visitorFindUniqueOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends visitorFindUniqueOrThrowArgs>(args: SelectSubset<T, visitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__visitorClient<$Result.GetResult<Prisma.$visitorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Visitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorFindFirstArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends visitorFindFirstArgs>(args?: SelectSubset<T, visitorFindFirstArgs<ExtArgs>>): Prisma__visitorClient<$Result.GetResult<Prisma.$visitorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Visitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorFindFirstOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends visitorFindFirstOrThrowArgs>(args?: SelectSubset<T, visitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__visitorClient<$Result.GetResult<Prisma.$visitorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitor.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorWithIdOnly = await prisma.visitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends visitorFindManyArgs>(args?: SelectSubset<T, visitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$visitorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Visitor.
     * @param {visitorCreateArgs} args - Arguments to create a Visitor.
     * @example
     * // Create one Visitor
     * const Visitor = await prisma.visitor.create({
     *   data: {
     *     // ... data to create a Visitor
     *   }
     * })
     * 
     */
    create<T extends visitorCreateArgs>(args: SelectSubset<T, visitorCreateArgs<ExtArgs>>): Prisma__visitorClient<$Result.GetResult<Prisma.$visitorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Visitors.
     * @param {visitorCreateManyArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends visitorCreateManyArgs>(args?: SelectSubset<T, visitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Visitor.
     * @param {visitorDeleteArgs} args - Arguments to delete one Visitor.
     * @example
     * // Delete one Visitor
     * const Visitor = await prisma.visitor.delete({
     *   where: {
     *     // ... filter to delete one Visitor
     *   }
     * })
     * 
     */
    delete<T extends visitorDeleteArgs>(args: SelectSubset<T, visitorDeleteArgs<ExtArgs>>): Prisma__visitorClient<$Result.GetResult<Prisma.$visitorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Visitor.
     * @param {visitorUpdateArgs} args - Arguments to update one Visitor.
     * @example
     * // Update one Visitor
     * const visitor = await prisma.visitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends visitorUpdateArgs>(args: SelectSubset<T, visitorUpdateArgs<ExtArgs>>): Prisma__visitorClient<$Result.GetResult<Prisma.$visitorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Visitors.
     * @param {visitorDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends visitorDeleteManyArgs>(args?: SelectSubset<T, visitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends visitorUpdateManyArgs>(args: SelectSubset<T, visitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Visitor.
     * @param {visitorUpsertArgs} args - Arguments to update or create a Visitor.
     * @example
     * // Update or create a Visitor
     * const visitor = await prisma.visitor.upsert({
     *   create: {
     *     // ... data to create a Visitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitor we want to update
     *   }
     * })
     */
    upsert<T extends visitorUpsertArgs>(args: SelectSubset<T, visitorUpsertArgs<ExtArgs>>): Prisma__visitorClient<$Result.GetResult<Prisma.$visitorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitor.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends visitorCountArgs>(
      args?: Subset<T, visitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorAggregateArgs>(args: Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>

    /**
     * Group by Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorGroupByArgs} args - Group by arguments.
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
      T extends visitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: visitorGroupByArgs['orderBy'] }
        : { orderBy?: visitorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, visitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the visitor model
   */
  readonly fields: visitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for visitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__visitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the visitor model
   */ 
  interface visitorFieldRefs {
    readonly id: FieldRef<"visitor", 'Int'>
    readonly ipAddress: FieldRef<"visitor", 'String'>
    readonly userAgent: FieldRef<"visitor", 'String'>
    readonly visitCount: FieldRef<"visitor", 'Int'>
    readonly createdAt: FieldRef<"visitor", 'DateTime'>
    readonly updatedAt: FieldRef<"visitor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * visitor findUnique
   */
  export type visitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitor
     */
    select?: visitorSelect<ExtArgs> | null
    /**
     * Filter, which visitor to fetch.
     */
    where: visitorWhereUniqueInput
  }

  /**
   * visitor findUniqueOrThrow
   */
  export type visitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitor
     */
    select?: visitorSelect<ExtArgs> | null
    /**
     * Filter, which visitor to fetch.
     */
    where: visitorWhereUniqueInput
  }

  /**
   * visitor findFirst
   */
  export type visitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitor
     */
    select?: visitorSelect<ExtArgs> | null
    /**
     * Filter, which visitor to fetch.
     */
    where?: visitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visitors to fetch.
     */
    orderBy?: visitorOrderByWithRelationInput | visitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for visitors.
     */
    cursor?: visitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * visitor findFirstOrThrow
   */
  export type visitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitor
     */
    select?: visitorSelect<ExtArgs> | null
    /**
     * Filter, which visitor to fetch.
     */
    where?: visitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visitors to fetch.
     */
    orderBy?: visitorOrderByWithRelationInput | visitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for visitors.
     */
    cursor?: visitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * visitor findMany
   */
  export type visitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitor
     */
    select?: visitorSelect<ExtArgs> | null
    /**
     * Filter, which visitors to fetch.
     */
    where?: visitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visitors to fetch.
     */
    orderBy?: visitorOrderByWithRelationInput | visitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing visitors.
     */
    cursor?: visitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visitors.
     */
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * visitor create
   */
  export type visitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitor
     */
    select?: visitorSelect<ExtArgs> | null
    /**
     * The data needed to create a visitor.
     */
    data: XOR<visitorCreateInput, visitorUncheckedCreateInput>
  }

  /**
   * visitor createMany
   */
  export type visitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many visitors.
     */
    data: visitorCreateManyInput | visitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * visitor update
   */
  export type visitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitor
     */
    select?: visitorSelect<ExtArgs> | null
    /**
     * The data needed to update a visitor.
     */
    data: XOR<visitorUpdateInput, visitorUncheckedUpdateInput>
    /**
     * Choose, which visitor to update.
     */
    where: visitorWhereUniqueInput
  }

  /**
   * visitor updateMany
   */
  export type visitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update visitors.
     */
    data: XOR<visitorUpdateManyMutationInput, visitorUncheckedUpdateManyInput>
    /**
     * Filter which visitors to update
     */
    where?: visitorWhereInput
  }

  /**
   * visitor upsert
   */
  export type visitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitor
     */
    select?: visitorSelect<ExtArgs> | null
    /**
     * The filter to search for the visitor to update in case it exists.
     */
    where: visitorWhereUniqueInput
    /**
     * In case the visitor found by the `where` argument doesn't exist, create a new visitor with this data.
     */
    create: XOR<visitorCreateInput, visitorUncheckedCreateInput>
    /**
     * In case the visitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<visitorUpdateInput, visitorUncheckedUpdateInput>
  }

  /**
   * visitor delete
   */
  export type visitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitor
     */
    select?: visitorSelect<ExtArgs> | null
    /**
     * Filter which visitor to delete.
     */
    where: visitorWhereUniqueInput
  }

  /**
   * visitor deleteMany
   */
  export type visitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which visitors to delete
     */
    where?: visitorWhereInput
  }

  /**
   * visitor without action
   */
  export type visitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitor
     */
    select?: visitorSelect<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    method: string | null
    amount: number | null
    purpose: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    method: string | null
    amount: number | null
    purpose: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    method: number
    amount: number
    purpose: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    method?: true
    amount?: true
    purpose?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    method?: true
    amount?: true
    purpose?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    method?: true
    amount?: true
    purpose?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    method: string
    amount: number
    purpose: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    amount?: boolean
    purpose?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankpayments?: boolean | payments$bankpaymentsArgs<ExtArgs>
    mobilepayments?: boolean | payments$mobilepaymentsArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>


  export type paymentsSelectScalar = {
    id?: boolean
    method?: boolean
    amount?: boolean
    purpose?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankpayments?: boolean | payments$bankpaymentsArgs<ExtArgs>
    mobilepayments?: boolean | payments$mobilepaymentsArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      bankpayments: Prisma.$bankpaymentsPayload<ExtArgs> | null
      mobilepayments: Prisma.$mobilepaymentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      method: string
      amount: number
      purpose: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
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
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankpayments<T extends payments$bankpaymentsArgs<ExtArgs> = {}>(args?: Subset<T, payments$bankpaymentsArgs<ExtArgs>>): Prisma__bankpaymentsClient<$Result.GetResult<Prisma.$bankpaymentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    mobilepayments<T extends payments$mobilepaymentsArgs<ExtArgs> = {}>(args?: Subset<T, payments$mobilepaymentsArgs<ExtArgs>>): Prisma__mobilepaymentsClient<$Result.GetResult<Prisma.$mobilepaymentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the payments model
   */ 
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'Int'>
    readonly method: FieldRef<"payments", 'String'>
    readonly amount: FieldRef<"payments", 'Float'>
    readonly purpose: FieldRef<"payments", 'String'>
    readonly createdAt: FieldRef<"payments", 'DateTime'>
    readonly updatedAt: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
  }

  /**
   * payments.bankpayments
   */
  export type payments$bankpaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankpayments
     */
    select?: bankpaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankpaymentsInclude<ExtArgs> | null
    where?: bankpaymentsWhereInput
  }

  /**
   * payments.mobilepayments
   */
  export type payments$mobilepaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mobilepayments
     */
    select?: mobilepaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mobilepaymentsInclude<ExtArgs> | null
    where?: mobilepaymentsWhereInput
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model bankpayments
   */

  export type AggregateBankpayments = {
    _count: BankpaymentsCountAggregateOutputType | null
    _avg: BankpaymentsAvgAggregateOutputType | null
    _sum: BankpaymentsSumAggregateOutputType | null
    _min: BankpaymentsMinAggregateOutputType | null
    _max: BankpaymentsMaxAggregateOutputType | null
  }

  export type BankpaymentsAvgAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type BankpaymentsSumAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type BankpaymentsMinAggregateOutputType = {
    id: number | null
    bankName: string | null
    accountName: string | null
    accountNo: string | null
    reference: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentId: number | null
  }

  export type BankpaymentsMaxAggregateOutputType = {
    id: number | null
    bankName: string | null
    accountName: string | null
    accountNo: string | null
    reference: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentId: number | null
  }

  export type BankpaymentsCountAggregateOutputType = {
    id: number
    bankName: number
    accountName: number
    accountNo: number
    reference: number
    status: number
    createdAt: number
    updatedAt: number
    paymentId: number
    _all: number
  }


  export type BankpaymentsAvgAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type BankpaymentsSumAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type BankpaymentsMinAggregateInputType = {
    id?: true
    bankName?: true
    accountName?: true
    accountNo?: true
    reference?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
  }

  export type BankpaymentsMaxAggregateInputType = {
    id?: true
    bankName?: true
    accountName?: true
    accountNo?: true
    reference?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
  }

  export type BankpaymentsCountAggregateInputType = {
    id?: true
    bankName?: true
    accountName?: true
    accountNo?: true
    reference?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
    _all?: true
  }

  export type BankpaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bankpayments to aggregate.
     */
    where?: bankpaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankpayments to fetch.
     */
    orderBy?: bankpaymentsOrderByWithRelationInput | bankpaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bankpaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankpayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankpayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bankpayments
    **/
    _count?: true | BankpaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankpaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankpaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankpaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankpaymentsMaxAggregateInputType
  }

  export type GetBankpaymentsAggregateType<T extends BankpaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregateBankpayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankpayments[P]>
      : GetScalarType<T[P], AggregateBankpayments[P]>
  }




  export type bankpaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bankpaymentsWhereInput
    orderBy?: bankpaymentsOrderByWithAggregationInput | bankpaymentsOrderByWithAggregationInput[]
    by: BankpaymentsScalarFieldEnum[] | BankpaymentsScalarFieldEnum
    having?: bankpaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankpaymentsCountAggregateInputType | true
    _avg?: BankpaymentsAvgAggregateInputType
    _sum?: BankpaymentsSumAggregateInputType
    _min?: BankpaymentsMinAggregateInputType
    _max?: BankpaymentsMaxAggregateInputType
  }

  export type BankpaymentsGroupByOutputType = {
    id: number
    bankName: string
    accountName: string
    accountNo: string
    reference: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    paymentId: number
    _count: BankpaymentsCountAggregateOutputType | null
    _avg: BankpaymentsAvgAggregateOutputType | null
    _sum: BankpaymentsSumAggregateOutputType | null
    _min: BankpaymentsMinAggregateOutputType | null
    _max: BankpaymentsMaxAggregateOutputType | null
  }

  type GetBankpaymentsGroupByPayload<T extends bankpaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankpaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankpaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankpaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], BankpaymentsGroupByOutputType[P]>
        }
      >
    >


  export type bankpaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankName?: boolean
    accountName?: boolean
    accountNo?: boolean
    reference?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
    payments?: boolean | paymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankpayments"]>


  export type bankpaymentsSelectScalar = {
    id?: boolean
    bankName?: boolean
    accountName?: boolean
    accountNo?: boolean
    reference?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
  }

  export type bankpaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | paymentsDefaultArgs<ExtArgs>
  }

  export type $bankpaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bankpayments"
    objects: {
      payments: Prisma.$paymentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bankName: string
      accountName: string
      accountNo: string
      reference: string | null
      status: string
      createdAt: Date
      updatedAt: Date
      paymentId: number
    }, ExtArgs["result"]["bankpayments"]>
    composites: {}
  }

  type bankpaymentsGetPayload<S extends boolean | null | undefined | bankpaymentsDefaultArgs> = $Result.GetResult<Prisma.$bankpaymentsPayload, S>

  type bankpaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<bankpaymentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BankpaymentsCountAggregateInputType | true
    }

  export interface bankpaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bankpayments'], meta: { name: 'bankpayments' } }
    /**
     * Find zero or one Bankpayments that matches the filter.
     * @param {bankpaymentsFindUniqueArgs} args - Arguments to find a Bankpayments
     * @example
     * // Get one Bankpayments
     * const bankpayments = await prisma.bankpayments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bankpaymentsFindUniqueArgs>(args: SelectSubset<T, bankpaymentsFindUniqueArgs<ExtArgs>>): Prisma__bankpaymentsClient<$Result.GetResult<Prisma.$bankpaymentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bankpayments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {bankpaymentsFindUniqueOrThrowArgs} args - Arguments to find a Bankpayments
     * @example
     * // Get one Bankpayments
     * const bankpayments = await prisma.bankpayments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bankpaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, bankpaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bankpaymentsClient<$Result.GetResult<Prisma.$bankpaymentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bankpayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankpaymentsFindFirstArgs} args - Arguments to find a Bankpayments
     * @example
     * // Get one Bankpayments
     * const bankpayments = await prisma.bankpayments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bankpaymentsFindFirstArgs>(args?: SelectSubset<T, bankpaymentsFindFirstArgs<ExtArgs>>): Prisma__bankpaymentsClient<$Result.GetResult<Prisma.$bankpaymentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bankpayments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankpaymentsFindFirstOrThrowArgs} args - Arguments to find a Bankpayments
     * @example
     * // Get one Bankpayments
     * const bankpayments = await prisma.bankpayments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bankpaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, bankpaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bankpaymentsClient<$Result.GetResult<Prisma.$bankpaymentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bankpayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankpaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bankpayments
     * const bankpayments = await prisma.bankpayments.findMany()
     * 
     * // Get first 10 Bankpayments
     * const bankpayments = await prisma.bankpayments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankpaymentsWithIdOnly = await prisma.bankpayments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bankpaymentsFindManyArgs>(args?: SelectSubset<T, bankpaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bankpaymentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bankpayments.
     * @param {bankpaymentsCreateArgs} args - Arguments to create a Bankpayments.
     * @example
     * // Create one Bankpayments
     * const Bankpayments = await prisma.bankpayments.create({
     *   data: {
     *     // ... data to create a Bankpayments
     *   }
     * })
     * 
     */
    create<T extends bankpaymentsCreateArgs>(args: SelectSubset<T, bankpaymentsCreateArgs<ExtArgs>>): Prisma__bankpaymentsClient<$Result.GetResult<Prisma.$bankpaymentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bankpayments.
     * @param {bankpaymentsCreateManyArgs} args - Arguments to create many Bankpayments.
     * @example
     * // Create many Bankpayments
     * const bankpayments = await prisma.bankpayments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bankpaymentsCreateManyArgs>(args?: SelectSubset<T, bankpaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bankpayments.
     * @param {bankpaymentsDeleteArgs} args - Arguments to delete one Bankpayments.
     * @example
     * // Delete one Bankpayments
     * const Bankpayments = await prisma.bankpayments.delete({
     *   where: {
     *     // ... filter to delete one Bankpayments
     *   }
     * })
     * 
     */
    delete<T extends bankpaymentsDeleteArgs>(args: SelectSubset<T, bankpaymentsDeleteArgs<ExtArgs>>): Prisma__bankpaymentsClient<$Result.GetResult<Prisma.$bankpaymentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bankpayments.
     * @param {bankpaymentsUpdateArgs} args - Arguments to update one Bankpayments.
     * @example
     * // Update one Bankpayments
     * const bankpayments = await prisma.bankpayments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bankpaymentsUpdateArgs>(args: SelectSubset<T, bankpaymentsUpdateArgs<ExtArgs>>): Prisma__bankpaymentsClient<$Result.GetResult<Prisma.$bankpaymentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bankpayments.
     * @param {bankpaymentsDeleteManyArgs} args - Arguments to filter Bankpayments to delete.
     * @example
     * // Delete a few Bankpayments
     * const { count } = await prisma.bankpayments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bankpaymentsDeleteManyArgs>(args?: SelectSubset<T, bankpaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bankpayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankpaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bankpayments
     * const bankpayments = await prisma.bankpayments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bankpaymentsUpdateManyArgs>(args: SelectSubset<T, bankpaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bankpayments.
     * @param {bankpaymentsUpsertArgs} args - Arguments to update or create a Bankpayments.
     * @example
     * // Update or create a Bankpayments
     * const bankpayments = await prisma.bankpayments.upsert({
     *   create: {
     *     // ... data to create a Bankpayments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bankpayments we want to update
     *   }
     * })
     */
    upsert<T extends bankpaymentsUpsertArgs>(args: SelectSubset<T, bankpaymentsUpsertArgs<ExtArgs>>): Prisma__bankpaymentsClient<$Result.GetResult<Prisma.$bankpaymentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bankpayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankpaymentsCountArgs} args - Arguments to filter Bankpayments to count.
     * @example
     * // Count the number of Bankpayments
     * const count = await prisma.bankpayments.count({
     *   where: {
     *     // ... the filter for the Bankpayments we want to count
     *   }
     * })
    **/
    count<T extends bankpaymentsCountArgs>(
      args?: Subset<T, bankpaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankpaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bankpayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankpaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BankpaymentsAggregateArgs>(args: Subset<T, BankpaymentsAggregateArgs>): Prisma.PrismaPromise<GetBankpaymentsAggregateType<T>>

    /**
     * Group by Bankpayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankpaymentsGroupByArgs} args - Group by arguments.
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
      T extends bankpaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bankpaymentsGroupByArgs['orderBy'] }
        : { orderBy?: bankpaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bankpaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankpaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bankpayments model
   */
  readonly fields: bankpaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bankpayments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bankpaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends paymentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paymentsDefaultArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the bankpayments model
   */ 
  interface bankpaymentsFieldRefs {
    readonly id: FieldRef<"bankpayments", 'Int'>
    readonly bankName: FieldRef<"bankpayments", 'String'>
    readonly accountName: FieldRef<"bankpayments", 'String'>
    readonly accountNo: FieldRef<"bankpayments", 'String'>
    readonly reference: FieldRef<"bankpayments", 'String'>
    readonly status: FieldRef<"bankpayments", 'String'>
    readonly createdAt: FieldRef<"bankpayments", 'DateTime'>
    readonly updatedAt: FieldRef<"bankpayments", 'DateTime'>
    readonly paymentId: FieldRef<"bankpayments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * bankpayments findUnique
   */
  export type bankpaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankpayments
     */
    select?: bankpaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankpaymentsInclude<ExtArgs> | null
    /**
     * Filter, which bankpayments to fetch.
     */
    where: bankpaymentsWhereUniqueInput
  }

  /**
   * bankpayments findUniqueOrThrow
   */
  export type bankpaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankpayments
     */
    select?: bankpaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankpaymentsInclude<ExtArgs> | null
    /**
     * Filter, which bankpayments to fetch.
     */
    where: bankpaymentsWhereUniqueInput
  }

  /**
   * bankpayments findFirst
   */
  export type bankpaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankpayments
     */
    select?: bankpaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankpaymentsInclude<ExtArgs> | null
    /**
     * Filter, which bankpayments to fetch.
     */
    where?: bankpaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankpayments to fetch.
     */
    orderBy?: bankpaymentsOrderByWithRelationInput | bankpaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bankpayments.
     */
    cursor?: bankpaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankpayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankpayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bankpayments.
     */
    distinct?: BankpaymentsScalarFieldEnum | BankpaymentsScalarFieldEnum[]
  }

  /**
   * bankpayments findFirstOrThrow
   */
  export type bankpaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankpayments
     */
    select?: bankpaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankpaymentsInclude<ExtArgs> | null
    /**
     * Filter, which bankpayments to fetch.
     */
    where?: bankpaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankpayments to fetch.
     */
    orderBy?: bankpaymentsOrderByWithRelationInput | bankpaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bankpayments.
     */
    cursor?: bankpaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankpayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankpayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bankpayments.
     */
    distinct?: BankpaymentsScalarFieldEnum | BankpaymentsScalarFieldEnum[]
  }

  /**
   * bankpayments findMany
   */
  export type bankpaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankpayments
     */
    select?: bankpaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankpaymentsInclude<ExtArgs> | null
    /**
     * Filter, which bankpayments to fetch.
     */
    where?: bankpaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankpayments to fetch.
     */
    orderBy?: bankpaymentsOrderByWithRelationInput | bankpaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bankpayments.
     */
    cursor?: bankpaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankpayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankpayments.
     */
    skip?: number
    distinct?: BankpaymentsScalarFieldEnum | BankpaymentsScalarFieldEnum[]
  }

  /**
   * bankpayments create
   */
  export type bankpaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankpayments
     */
    select?: bankpaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankpaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a bankpayments.
     */
    data: XOR<bankpaymentsCreateInput, bankpaymentsUncheckedCreateInput>
  }

  /**
   * bankpayments createMany
   */
  export type bankpaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bankpayments.
     */
    data: bankpaymentsCreateManyInput | bankpaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bankpayments update
   */
  export type bankpaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankpayments
     */
    select?: bankpaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankpaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a bankpayments.
     */
    data: XOR<bankpaymentsUpdateInput, bankpaymentsUncheckedUpdateInput>
    /**
     * Choose, which bankpayments to update.
     */
    where: bankpaymentsWhereUniqueInput
  }

  /**
   * bankpayments updateMany
   */
  export type bankpaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bankpayments.
     */
    data: XOR<bankpaymentsUpdateManyMutationInput, bankpaymentsUncheckedUpdateManyInput>
    /**
     * Filter which bankpayments to update
     */
    where?: bankpaymentsWhereInput
  }

  /**
   * bankpayments upsert
   */
  export type bankpaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankpayments
     */
    select?: bankpaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankpaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the bankpayments to update in case it exists.
     */
    where: bankpaymentsWhereUniqueInput
    /**
     * In case the bankpayments found by the `where` argument doesn't exist, create a new bankpayments with this data.
     */
    create: XOR<bankpaymentsCreateInput, bankpaymentsUncheckedCreateInput>
    /**
     * In case the bankpayments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bankpaymentsUpdateInput, bankpaymentsUncheckedUpdateInput>
  }

  /**
   * bankpayments delete
   */
  export type bankpaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankpayments
     */
    select?: bankpaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankpaymentsInclude<ExtArgs> | null
    /**
     * Filter which bankpayments to delete.
     */
    where: bankpaymentsWhereUniqueInput
  }

  /**
   * bankpayments deleteMany
   */
  export type bankpaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bankpayments to delete
     */
    where?: bankpaymentsWhereInput
  }

  /**
   * bankpayments without action
   */
  export type bankpaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankpayments
     */
    select?: bankpaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankpaymentsInclude<ExtArgs> | null
  }


  /**
   * Model mobilepayments
   */

  export type AggregateMobilepayments = {
    _count: MobilepaymentsCountAggregateOutputType | null
    _avg: MobilepaymentsAvgAggregateOutputType | null
    _sum: MobilepaymentsSumAggregateOutputType | null
    _min: MobilepaymentsMinAggregateOutputType | null
    _max: MobilepaymentsMaxAggregateOutputType | null
  }

  export type MobilepaymentsAvgAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type MobilepaymentsSumAggregateOutputType = {
    id: number | null
    paymentId: number | null
  }

  export type MobilepaymentsMinAggregateOutputType = {
    id: number | null
    provider: string | null
    phone: string | null
    localTxnId: string | null
    airtelTxnId: string | null
    status: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentId: number | null
  }

  export type MobilepaymentsMaxAggregateOutputType = {
    id: number | null
    provider: string | null
    phone: string | null
    localTxnId: string | null
    airtelTxnId: string | null
    status: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentId: number | null
  }

  export type MobilepaymentsCountAggregateOutputType = {
    id: number
    provider: number
    phone: number
    localTxnId: number
    airtelTxnId: number
    status: number
    message: number
    createdAt: number
    updatedAt: number
    paymentId: number
    _all: number
  }


  export type MobilepaymentsAvgAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type MobilepaymentsSumAggregateInputType = {
    id?: true
    paymentId?: true
  }

  export type MobilepaymentsMinAggregateInputType = {
    id?: true
    provider?: true
    phone?: true
    localTxnId?: true
    airtelTxnId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
  }

  export type MobilepaymentsMaxAggregateInputType = {
    id?: true
    provider?: true
    phone?: true
    localTxnId?: true
    airtelTxnId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
  }

  export type MobilepaymentsCountAggregateInputType = {
    id?: true
    provider?: true
    phone?: true
    localTxnId?: true
    airtelTxnId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
    _all?: true
  }

  export type MobilepaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mobilepayments to aggregate.
     */
    where?: mobilepaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mobilepayments to fetch.
     */
    orderBy?: mobilepaymentsOrderByWithRelationInput | mobilepaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mobilepaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mobilepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mobilepayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mobilepayments
    **/
    _count?: true | MobilepaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MobilepaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MobilepaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MobilepaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MobilepaymentsMaxAggregateInputType
  }

  export type GetMobilepaymentsAggregateType<T extends MobilepaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregateMobilepayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMobilepayments[P]>
      : GetScalarType<T[P], AggregateMobilepayments[P]>
  }




  export type mobilepaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mobilepaymentsWhereInput
    orderBy?: mobilepaymentsOrderByWithAggregationInput | mobilepaymentsOrderByWithAggregationInput[]
    by: MobilepaymentsScalarFieldEnum[] | MobilepaymentsScalarFieldEnum
    having?: mobilepaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MobilepaymentsCountAggregateInputType | true
    _avg?: MobilepaymentsAvgAggregateInputType
    _sum?: MobilepaymentsSumAggregateInputType
    _min?: MobilepaymentsMinAggregateInputType
    _max?: MobilepaymentsMaxAggregateInputType
  }

  export type MobilepaymentsGroupByOutputType = {
    id: number
    provider: string
    phone: string
    localTxnId: string
    airtelTxnId: string | null
    status: string
    message: string | null
    createdAt: Date
    updatedAt: Date
    paymentId: number
    _count: MobilepaymentsCountAggregateOutputType | null
    _avg: MobilepaymentsAvgAggregateOutputType | null
    _sum: MobilepaymentsSumAggregateOutputType | null
    _min: MobilepaymentsMinAggregateOutputType | null
    _max: MobilepaymentsMaxAggregateOutputType | null
  }

  type GetMobilepaymentsGroupByPayload<T extends mobilepaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MobilepaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MobilepaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MobilepaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], MobilepaymentsGroupByOutputType[P]>
        }
      >
    >


  export type mobilepaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    phone?: boolean
    localTxnId?: boolean
    airtelTxnId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
    payments?: boolean | paymentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mobilepayments"]>


  export type mobilepaymentsSelectScalar = {
    id?: boolean
    provider?: boolean
    phone?: boolean
    localTxnId?: boolean
    airtelTxnId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
  }

  export type mobilepaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | paymentsDefaultArgs<ExtArgs>
  }

  export type $mobilepaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mobilepayments"
    objects: {
      payments: Prisma.$paymentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      provider: string
      phone: string
      localTxnId: string
      airtelTxnId: string | null
      status: string
      message: string | null
      createdAt: Date
      updatedAt: Date
      paymentId: number
    }, ExtArgs["result"]["mobilepayments"]>
    composites: {}
  }

  type mobilepaymentsGetPayload<S extends boolean | null | undefined | mobilepaymentsDefaultArgs> = $Result.GetResult<Prisma.$mobilepaymentsPayload, S>

  type mobilepaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mobilepaymentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MobilepaymentsCountAggregateInputType | true
    }

  export interface mobilepaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mobilepayments'], meta: { name: 'mobilepayments' } }
    /**
     * Find zero or one Mobilepayments that matches the filter.
     * @param {mobilepaymentsFindUniqueArgs} args - Arguments to find a Mobilepayments
     * @example
     * // Get one Mobilepayments
     * const mobilepayments = await prisma.mobilepayments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mobilepaymentsFindUniqueArgs>(args: SelectSubset<T, mobilepaymentsFindUniqueArgs<ExtArgs>>): Prisma__mobilepaymentsClient<$Result.GetResult<Prisma.$mobilepaymentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mobilepayments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mobilepaymentsFindUniqueOrThrowArgs} args - Arguments to find a Mobilepayments
     * @example
     * // Get one Mobilepayments
     * const mobilepayments = await prisma.mobilepayments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mobilepaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, mobilepaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mobilepaymentsClient<$Result.GetResult<Prisma.$mobilepaymentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mobilepayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mobilepaymentsFindFirstArgs} args - Arguments to find a Mobilepayments
     * @example
     * // Get one Mobilepayments
     * const mobilepayments = await prisma.mobilepayments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mobilepaymentsFindFirstArgs>(args?: SelectSubset<T, mobilepaymentsFindFirstArgs<ExtArgs>>): Prisma__mobilepaymentsClient<$Result.GetResult<Prisma.$mobilepaymentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mobilepayments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mobilepaymentsFindFirstOrThrowArgs} args - Arguments to find a Mobilepayments
     * @example
     * // Get one Mobilepayments
     * const mobilepayments = await prisma.mobilepayments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mobilepaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, mobilepaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__mobilepaymentsClient<$Result.GetResult<Prisma.$mobilepaymentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mobilepayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mobilepaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mobilepayments
     * const mobilepayments = await prisma.mobilepayments.findMany()
     * 
     * // Get first 10 Mobilepayments
     * const mobilepayments = await prisma.mobilepayments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mobilepaymentsWithIdOnly = await prisma.mobilepayments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mobilepaymentsFindManyArgs>(args?: SelectSubset<T, mobilepaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mobilepaymentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mobilepayments.
     * @param {mobilepaymentsCreateArgs} args - Arguments to create a Mobilepayments.
     * @example
     * // Create one Mobilepayments
     * const Mobilepayments = await prisma.mobilepayments.create({
     *   data: {
     *     // ... data to create a Mobilepayments
     *   }
     * })
     * 
     */
    create<T extends mobilepaymentsCreateArgs>(args: SelectSubset<T, mobilepaymentsCreateArgs<ExtArgs>>): Prisma__mobilepaymentsClient<$Result.GetResult<Prisma.$mobilepaymentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mobilepayments.
     * @param {mobilepaymentsCreateManyArgs} args - Arguments to create many Mobilepayments.
     * @example
     * // Create many Mobilepayments
     * const mobilepayments = await prisma.mobilepayments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mobilepaymentsCreateManyArgs>(args?: SelectSubset<T, mobilepaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mobilepayments.
     * @param {mobilepaymentsDeleteArgs} args - Arguments to delete one Mobilepayments.
     * @example
     * // Delete one Mobilepayments
     * const Mobilepayments = await prisma.mobilepayments.delete({
     *   where: {
     *     // ... filter to delete one Mobilepayments
     *   }
     * })
     * 
     */
    delete<T extends mobilepaymentsDeleteArgs>(args: SelectSubset<T, mobilepaymentsDeleteArgs<ExtArgs>>): Prisma__mobilepaymentsClient<$Result.GetResult<Prisma.$mobilepaymentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mobilepayments.
     * @param {mobilepaymentsUpdateArgs} args - Arguments to update one Mobilepayments.
     * @example
     * // Update one Mobilepayments
     * const mobilepayments = await prisma.mobilepayments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mobilepaymentsUpdateArgs>(args: SelectSubset<T, mobilepaymentsUpdateArgs<ExtArgs>>): Prisma__mobilepaymentsClient<$Result.GetResult<Prisma.$mobilepaymentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mobilepayments.
     * @param {mobilepaymentsDeleteManyArgs} args - Arguments to filter Mobilepayments to delete.
     * @example
     * // Delete a few Mobilepayments
     * const { count } = await prisma.mobilepayments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mobilepaymentsDeleteManyArgs>(args?: SelectSubset<T, mobilepaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mobilepayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mobilepaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mobilepayments
     * const mobilepayments = await prisma.mobilepayments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mobilepaymentsUpdateManyArgs>(args: SelectSubset<T, mobilepaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mobilepayments.
     * @param {mobilepaymentsUpsertArgs} args - Arguments to update or create a Mobilepayments.
     * @example
     * // Update or create a Mobilepayments
     * const mobilepayments = await prisma.mobilepayments.upsert({
     *   create: {
     *     // ... data to create a Mobilepayments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mobilepayments we want to update
     *   }
     * })
     */
    upsert<T extends mobilepaymentsUpsertArgs>(args: SelectSubset<T, mobilepaymentsUpsertArgs<ExtArgs>>): Prisma__mobilepaymentsClient<$Result.GetResult<Prisma.$mobilepaymentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mobilepayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mobilepaymentsCountArgs} args - Arguments to filter Mobilepayments to count.
     * @example
     * // Count the number of Mobilepayments
     * const count = await prisma.mobilepayments.count({
     *   where: {
     *     // ... the filter for the Mobilepayments we want to count
     *   }
     * })
    **/
    count<T extends mobilepaymentsCountArgs>(
      args?: Subset<T, mobilepaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MobilepaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mobilepayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobilepaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MobilepaymentsAggregateArgs>(args: Subset<T, MobilepaymentsAggregateArgs>): Prisma.PrismaPromise<GetMobilepaymentsAggregateType<T>>

    /**
     * Group by Mobilepayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mobilepaymentsGroupByArgs} args - Group by arguments.
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
      T extends mobilepaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mobilepaymentsGroupByArgs['orderBy'] }
        : { orderBy?: mobilepaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mobilepaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMobilepaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mobilepayments model
   */
  readonly fields: mobilepaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mobilepayments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mobilepaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends paymentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paymentsDefaultArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the mobilepayments model
   */ 
  interface mobilepaymentsFieldRefs {
    readonly id: FieldRef<"mobilepayments", 'Int'>
    readonly provider: FieldRef<"mobilepayments", 'String'>
    readonly phone: FieldRef<"mobilepayments", 'String'>
    readonly localTxnId: FieldRef<"mobilepayments", 'String'>
    readonly airtelTxnId: FieldRef<"mobilepayments", 'String'>
    readonly status: FieldRef<"mobilepayments", 'String'>
    readonly message: FieldRef<"mobilepayments", 'String'>
    readonly createdAt: FieldRef<"mobilepayments", 'DateTime'>
    readonly updatedAt: FieldRef<"mobilepayments", 'DateTime'>
    readonly paymentId: FieldRef<"mobilepayments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mobilepayments findUnique
   */
  export type mobilepaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mobilepayments
     */
    select?: mobilepaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mobilepaymentsInclude<ExtArgs> | null
    /**
     * Filter, which mobilepayments to fetch.
     */
    where: mobilepaymentsWhereUniqueInput
  }

  /**
   * mobilepayments findUniqueOrThrow
   */
  export type mobilepaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mobilepayments
     */
    select?: mobilepaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mobilepaymentsInclude<ExtArgs> | null
    /**
     * Filter, which mobilepayments to fetch.
     */
    where: mobilepaymentsWhereUniqueInput
  }

  /**
   * mobilepayments findFirst
   */
  export type mobilepaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mobilepayments
     */
    select?: mobilepaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mobilepaymentsInclude<ExtArgs> | null
    /**
     * Filter, which mobilepayments to fetch.
     */
    where?: mobilepaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mobilepayments to fetch.
     */
    orderBy?: mobilepaymentsOrderByWithRelationInput | mobilepaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mobilepayments.
     */
    cursor?: mobilepaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mobilepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mobilepayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mobilepayments.
     */
    distinct?: MobilepaymentsScalarFieldEnum | MobilepaymentsScalarFieldEnum[]
  }

  /**
   * mobilepayments findFirstOrThrow
   */
  export type mobilepaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mobilepayments
     */
    select?: mobilepaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mobilepaymentsInclude<ExtArgs> | null
    /**
     * Filter, which mobilepayments to fetch.
     */
    where?: mobilepaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mobilepayments to fetch.
     */
    orderBy?: mobilepaymentsOrderByWithRelationInput | mobilepaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mobilepayments.
     */
    cursor?: mobilepaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mobilepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mobilepayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mobilepayments.
     */
    distinct?: MobilepaymentsScalarFieldEnum | MobilepaymentsScalarFieldEnum[]
  }

  /**
   * mobilepayments findMany
   */
  export type mobilepaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mobilepayments
     */
    select?: mobilepaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mobilepaymentsInclude<ExtArgs> | null
    /**
     * Filter, which mobilepayments to fetch.
     */
    where?: mobilepaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mobilepayments to fetch.
     */
    orderBy?: mobilepaymentsOrderByWithRelationInput | mobilepaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mobilepayments.
     */
    cursor?: mobilepaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mobilepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mobilepayments.
     */
    skip?: number
    distinct?: MobilepaymentsScalarFieldEnum | MobilepaymentsScalarFieldEnum[]
  }

  /**
   * mobilepayments create
   */
  export type mobilepaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mobilepayments
     */
    select?: mobilepaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mobilepaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a mobilepayments.
     */
    data: XOR<mobilepaymentsCreateInput, mobilepaymentsUncheckedCreateInput>
  }

  /**
   * mobilepayments createMany
   */
  export type mobilepaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mobilepayments.
     */
    data: mobilepaymentsCreateManyInput | mobilepaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mobilepayments update
   */
  export type mobilepaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mobilepayments
     */
    select?: mobilepaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mobilepaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a mobilepayments.
     */
    data: XOR<mobilepaymentsUpdateInput, mobilepaymentsUncheckedUpdateInput>
    /**
     * Choose, which mobilepayments to update.
     */
    where: mobilepaymentsWhereUniqueInput
  }

  /**
   * mobilepayments updateMany
   */
  export type mobilepaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mobilepayments.
     */
    data: XOR<mobilepaymentsUpdateManyMutationInput, mobilepaymentsUncheckedUpdateManyInput>
    /**
     * Filter which mobilepayments to update
     */
    where?: mobilepaymentsWhereInput
  }

  /**
   * mobilepayments upsert
   */
  export type mobilepaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mobilepayments
     */
    select?: mobilepaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mobilepaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the mobilepayments to update in case it exists.
     */
    where: mobilepaymentsWhereUniqueInput
    /**
     * In case the mobilepayments found by the `where` argument doesn't exist, create a new mobilepayments with this data.
     */
    create: XOR<mobilepaymentsCreateInput, mobilepaymentsUncheckedCreateInput>
    /**
     * In case the mobilepayments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mobilepaymentsUpdateInput, mobilepaymentsUncheckedUpdateInput>
  }

  /**
   * mobilepayments delete
   */
  export type mobilepaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mobilepayments
     */
    select?: mobilepaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mobilepaymentsInclude<ExtArgs> | null
    /**
     * Filter which mobilepayments to delete.
     */
    where: mobilepaymentsWhereUniqueInput
  }

  /**
   * mobilepayments deleteMany
   */
  export type mobilepaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mobilepayments to delete
     */
    where?: mobilepaymentsWhereInput
  }

  /**
   * mobilepayments without action
   */
  export type mobilepaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mobilepayments
     */
    select?: mobilepaymentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mobilepaymentsInclude<ExtArgs> | null
  }


  /**
   * Model Publication
   */

  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  export type PublicationAvgAggregateOutputType = {
    id: number | null
  }

  export type PublicationSumAggregateOutputType = {
    id: number | null
  }

  export type PublicationMinAggregateOutputType = {
    id: number | null
    title: string | null
    youtubeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationMaxAggregateOutputType = {
    id: number | null
    title: string | null
    youtubeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationCountAggregateOutputType = {
    id: number
    title: number
    youtubeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublicationAvgAggregateInputType = {
    id?: true
  }

  export type PublicationSumAggregateInputType = {
    id?: true
  }

  export type PublicationMinAggregateInputType = {
    id?: true
    title?: true
    youtubeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationMaxAggregateInputType = {
    id?: true
    title?: true
    youtubeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationCountAggregateInputType = {
    id?: true
    title?: true
    youtubeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publication to aggregate.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publications
    **/
    _count?: true | PublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationMaxAggregateInputType
  }

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>
  }




  export type PublicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationWhereInput
    orderBy?: PublicationOrderByWithAggregationInput | PublicationOrderByWithAggregationInput[]
    by: PublicationScalarFieldEnum[] | PublicationScalarFieldEnum
    having?: PublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationCountAggregateInputType | true
    _avg?: PublicationAvgAggregateInputType
    _sum?: PublicationSumAggregateInputType
    _min?: PublicationMinAggregateInputType
    _max?: PublicationMaxAggregateInputType
  }

  export type PublicationGroupByOutputType = {
    id: number
    title: string
    youtubeId: string
    createdAt: Date
    updatedAt: Date
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  type GetPublicationGroupByPayload<T extends PublicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
        }
      >
    >


  export type PublicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    youtubeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["publication"]>


  export type PublicationSelectScalar = {
    id?: boolean
    title?: boolean
    youtubeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PublicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      youtubeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publication"]>
    composites: {}
  }

  type PublicationGetPayload<S extends boolean | null | undefined | PublicationDefaultArgs> = $Result.GetResult<Prisma.$PublicationPayload, S>

  type PublicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PublicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PublicationCountAggregateInputType | true
    }

  export interface PublicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publication'], meta: { name: 'Publication' } }
    /**
     * Find zero or one Publication that matches the filter.
     * @param {PublicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicationFindUniqueArgs>(args: SelectSubset<T, PublicationFindUniqueArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Publication that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PublicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicationFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicationFindFirstArgs>(args?: SelectSubset<T, PublicationFindFirstArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Publication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicationFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     * 
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicationWithIdOnly = await prisma.publication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicationFindManyArgs>(args?: SelectSubset<T, PublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Publication.
     * @param {PublicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     * 
     */
    create<T extends PublicationCreateArgs>(args: SelectSubset<T, PublicationCreateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Publications.
     * @param {PublicationCreateManyArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicationCreateManyArgs>(args?: SelectSubset<T, PublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Publication.
     * @param {PublicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     * 
     */
    delete<T extends PublicationDeleteArgs>(args: SelectSubset<T, PublicationDeleteArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Publication.
     * @param {PublicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicationUpdateArgs>(args: SelectSubset<T, PublicationUpdateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Publications.
     * @param {PublicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicationDeleteManyArgs>(args?: SelectSubset<T, PublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicationUpdateManyArgs>(args: SelectSubset<T, PublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Publication.
     * @param {PublicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
     */
    upsert<T extends PublicationUpsertArgs>(args: SelectSubset<T, PublicationUpsertArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
    **/
    count<T extends PublicationCountArgs>(
      args?: Subset<T, PublicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicationAggregateArgs>(args: Subset<T, PublicationAggregateArgs>): Prisma.PrismaPromise<GetPublicationAggregateType<T>>

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationGroupByArgs} args - Group by arguments.
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
      T extends PublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationGroupByArgs['orderBy'] }
        : { orderBy?: PublicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publication model
   */
  readonly fields: PublicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Publication model
   */ 
  interface PublicationFieldRefs {
    readonly id: FieldRef<"Publication", 'Int'>
    readonly title: FieldRef<"Publication", 'String'>
    readonly youtubeId: FieldRef<"Publication", 'String'>
    readonly createdAt: FieldRef<"Publication", 'DateTime'>
    readonly updatedAt: FieldRef<"Publication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Publication findUnique
   */
  export type PublicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findUniqueOrThrow
   */
  export type PublicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findFirst
   */
  export type PublicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findFirstOrThrow
   */
  export type PublicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findMany
   */
  export type PublicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter, which Publications to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication create
   */
  export type PublicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * The data needed to create a Publication.
     */
    data: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
  }

  /**
   * Publication createMany
   */
  export type PublicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publication update
   */
  export type PublicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * The data needed to update a Publication.
     */
    data: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
    /**
     * Choose, which Publication to update.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication updateMany
   */
  export type PublicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
  }

  /**
   * Publication upsert
   */
  export type PublicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * The filter to search for the Publication to update in case it exists.
     */
    where: PublicationWhereUniqueInput
    /**
     * In case the Publication found by the `where` argument doesn't exist, create a new Publication with this data.
     */
    create: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
    /**
     * In case the Publication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
  }

  /**
   * Publication delete
   */
  export type PublicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter which Publication to delete.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication deleteMany
   */
  export type PublicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publications to delete
     */
    where?: PublicationWhereInput
  }

  /**
   * Publication without action
   */
  export type PublicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
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


  export const AnnouncementsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    link: 'link',
    createdAt: 'createdAt',
    views: 'views'
  };

  export type AnnouncementsScalarFieldEnum = (typeof AnnouncementsScalarFieldEnum)[keyof typeof AnnouncementsScalarFieldEnum]


  export const BannersScalarFieldEnum: {
    id: 'id',
    title: 'title',
    link: 'link',
    createdAt: 'createdAt'
  };

  export type BannersScalarFieldEnum = (typeof BannersScalarFieldEnum)[keyof typeof BannersScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    author: 'author',
    photo: 'photo',
    createdAt: 'createdAt',
    whoComment: 'whoComment'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const CoursesScalarFieldEnum: {
    id: 'id',
    coursename: 'coursename',
    duration: 'duration',
    courseType: 'courseType',
    description: 'description',
    photo: 'photo',
    createdAt: 'createdAt'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const DocumentsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    link: 'link',
    views: 'views',
    createdAt: 'createdAt'
  };

  export type DocumentsScalarFieldEnum = (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    phone: 'phone',
    category: 'category',
    position: 'position',
    photo: 'photo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    department: 'department'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    product_name: 'product_name',
    department: 'department',
    price: 'price',
    photo: 'photo'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const RecentupdatesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    photo: 'photo',
    date: 'date',
    createdAt: 'createdAt',
    slug: 'slug',
    updatedAt: 'updatedAt'
  };

  export type RecentupdatesScalarFieldEnum = (typeof RecentupdatesScalarFieldEnum)[keyof typeof RecentupdatesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    phone: 'phone',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VisitorScalarFieldEnum: {
    id: 'id',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    visitCount: 'visitCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisitorScalarFieldEnum = (typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    method: 'method',
    amount: 'amount',
    purpose: 'purpose',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const BankpaymentsScalarFieldEnum: {
    id: 'id',
    bankName: 'bankName',
    accountName: 'accountName',
    accountNo: 'accountNo',
    reference: 'reference',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    paymentId: 'paymentId'
  };

  export type BankpaymentsScalarFieldEnum = (typeof BankpaymentsScalarFieldEnum)[keyof typeof BankpaymentsScalarFieldEnum]


  export const MobilepaymentsScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    phone: 'phone',
    localTxnId: 'localTxnId',
    airtelTxnId: 'airtelTxnId',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    paymentId: 'paymentId'
  };

  export type MobilepaymentsScalarFieldEnum = (typeof MobilepaymentsScalarFieldEnum)[keyof typeof MobilepaymentsScalarFieldEnum]


  export const PublicationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    youtubeId: 'youtubeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const announcementsOrderByRelevanceFieldEnum: {
    title: 'title',
    link: 'link'
  };

  export type announcementsOrderByRelevanceFieldEnum = (typeof announcementsOrderByRelevanceFieldEnum)[keyof typeof announcementsOrderByRelevanceFieldEnum]


  export const bannersOrderByRelevanceFieldEnum: {
    title: 'title',
    link: 'link'
  };

  export type bannersOrderByRelevanceFieldEnum = (typeof bannersOrderByRelevanceFieldEnum)[keyof typeof bannersOrderByRelevanceFieldEnum]


  export const commentsOrderByRelevanceFieldEnum: {
    content: 'content',
    author: 'author',
    photo: 'photo',
    whoComment: 'whoComment'
  };

  export type commentsOrderByRelevanceFieldEnum = (typeof commentsOrderByRelevanceFieldEnum)[keyof typeof commentsOrderByRelevanceFieldEnum]


  export const coursesOrderByRelevanceFieldEnum: {
    coursename: 'coursename',
    duration: 'duration',
    courseType: 'courseType',
    description: 'description',
    photo: 'photo'
  };

  export type coursesOrderByRelevanceFieldEnum = (typeof coursesOrderByRelevanceFieldEnum)[keyof typeof coursesOrderByRelevanceFieldEnum]


  export const documentsOrderByRelevanceFieldEnum: {
    title: 'title',
    link: 'link'
  };

  export type documentsOrderByRelevanceFieldEnum = (typeof documentsOrderByRelevanceFieldEnum)[keyof typeof documentsOrderByRelevanceFieldEnum]


  export const employeesOrderByRelevanceFieldEnum: {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    phone: 'phone',
    category: 'category',
    position: 'position',
    photo: 'photo',
    department: 'department'
  };

  export type employeesOrderByRelevanceFieldEnum = (typeof employeesOrderByRelevanceFieldEnum)[keyof typeof employeesOrderByRelevanceFieldEnum]


  export const productsOrderByRelevanceFieldEnum: {
    product_name: 'product_name',
    department: 'department',
    price: 'price',
    photo: 'photo'
  };

  export type productsOrderByRelevanceFieldEnum = (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum]


  export const recentupdatesOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    photo: 'photo',
    slug: 'slug'
  };

  export type recentupdatesOrderByRelevanceFieldEnum = (typeof recentupdatesOrderByRelevanceFieldEnum)[keyof typeof recentupdatesOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    phone: 'phone',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const visitorOrderByRelevanceFieldEnum: {
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type visitorOrderByRelevanceFieldEnum = (typeof visitorOrderByRelevanceFieldEnum)[keyof typeof visitorOrderByRelevanceFieldEnum]


  export const paymentsOrderByRelevanceFieldEnum: {
    method: 'method',
    purpose: 'purpose'
  };

  export type paymentsOrderByRelevanceFieldEnum = (typeof paymentsOrderByRelevanceFieldEnum)[keyof typeof paymentsOrderByRelevanceFieldEnum]


  export const bankpaymentsOrderByRelevanceFieldEnum: {
    bankName: 'bankName',
    accountName: 'accountName',
    accountNo: 'accountNo',
    reference: 'reference',
    status: 'status'
  };

  export type bankpaymentsOrderByRelevanceFieldEnum = (typeof bankpaymentsOrderByRelevanceFieldEnum)[keyof typeof bankpaymentsOrderByRelevanceFieldEnum]


  export const mobilepaymentsOrderByRelevanceFieldEnum: {
    provider: 'provider',
    phone: 'phone',
    localTxnId: 'localTxnId',
    airtelTxnId: 'airtelTxnId',
    status: 'status',
    message: 'message'
  };

  export type mobilepaymentsOrderByRelevanceFieldEnum = (typeof mobilepaymentsOrderByRelevanceFieldEnum)[keyof typeof mobilepaymentsOrderByRelevanceFieldEnum]


  export const PublicationOrderByRelevanceFieldEnum: {
    title: 'title',
    youtubeId: 'youtubeId'
  };

  export type PublicationOrderByRelevanceFieldEnum = (typeof PublicationOrderByRelevanceFieldEnum)[keyof typeof PublicationOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type announcementsWhereInput = {
    AND?: announcementsWhereInput | announcementsWhereInput[]
    OR?: announcementsWhereInput[]
    NOT?: announcementsWhereInput | announcementsWhereInput[]
    id?: IntFilter<"announcements"> | number
    title?: StringFilter<"announcements"> | string
    link?: StringNullableFilter<"announcements"> | string | null
    createdAt?: DateTimeFilter<"announcements"> | Date | string
    views?: IntFilter<"announcements"> | number
  }

  export type announcementsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    views?: SortOrder
    _relevance?: announcementsOrderByRelevanceInput
  }

  export type announcementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: announcementsWhereInput | announcementsWhereInput[]
    OR?: announcementsWhereInput[]
    NOT?: announcementsWhereInput | announcementsWhereInput[]
    title?: StringFilter<"announcements"> | string
    link?: StringNullableFilter<"announcements"> | string | null
    createdAt?: DateTimeFilter<"announcements"> | Date | string
    views?: IntFilter<"announcements"> | number
  }, "id">

  export type announcementsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    views?: SortOrder
    _count?: announcementsCountOrderByAggregateInput
    _avg?: announcementsAvgOrderByAggregateInput
    _max?: announcementsMaxOrderByAggregateInput
    _min?: announcementsMinOrderByAggregateInput
    _sum?: announcementsSumOrderByAggregateInput
  }

  export type announcementsScalarWhereWithAggregatesInput = {
    AND?: announcementsScalarWhereWithAggregatesInput | announcementsScalarWhereWithAggregatesInput[]
    OR?: announcementsScalarWhereWithAggregatesInput[]
    NOT?: announcementsScalarWhereWithAggregatesInput | announcementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"announcements"> | number
    title?: StringWithAggregatesFilter<"announcements"> | string
    link?: StringNullableWithAggregatesFilter<"announcements"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"announcements"> | Date | string
    views?: IntWithAggregatesFilter<"announcements"> | number
  }

  export type bannersWhereInput = {
    AND?: bannersWhereInput | bannersWhereInput[]
    OR?: bannersWhereInput[]
    NOT?: bannersWhereInput | bannersWhereInput[]
    id?: IntFilter<"banners"> | number
    title?: StringFilter<"banners"> | string
    link?: StringNullableFilter<"banners"> | string | null
    createdAt?: DateTimeFilter<"banners"> | Date | string
  }

  export type bannersOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _relevance?: bannersOrderByRelevanceInput
  }

  export type bannersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bannersWhereInput | bannersWhereInput[]
    OR?: bannersWhereInput[]
    NOT?: bannersWhereInput | bannersWhereInput[]
    title?: StringFilter<"banners"> | string
    link?: StringNullableFilter<"banners"> | string | null
    createdAt?: DateTimeFilter<"banners"> | Date | string
  }, "id">

  export type bannersOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: bannersCountOrderByAggregateInput
    _avg?: bannersAvgOrderByAggregateInput
    _max?: bannersMaxOrderByAggregateInput
    _min?: bannersMinOrderByAggregateInput
    _sum?: bannersSumOrderByAggregateInput
  }

  export type bannersScalarWhereWithAggregatesInput = {
    AND?: bannersScalarWhereWithAggregatesInput | bannersScalarWhereWithAggregatesInput[]
    OR?: bannersScalarWhereWithAggregatesInput[]
    NOT?: bannersScalarWhereWithAggregatesInput | bannersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"banners"> | number
    title?: StringWithAggregatesFilter<"banners"> | string
    link?: StringNullableWithAggregatesFilter<"banners"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"banners"> | Date | string
  }

  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: IntFilter<"comments"> | number
    content?: StringFilter<"comments"> | string
    author?: StringFilter<"comments"> | string
    photo?: StringNullableFilter<"comments"> | string | null
    createdAt?: DateTimeFilter<"comments"> | Date | string
    whoComment?: StringFilter<"comments"> | string
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    author?: SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    whoComment?: SortOrder
    _relevance?: commentsOrderByRelevanceInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    content?: StringFilter<"comments"> | string
    author?: StringFilter<"comments"> | string
    photo?: StringNullableFilter<"comments"> | string | null
    createdAt?: DateTimeFilter<"comments"> | Date | string
    whoComment?: StringFilter<"comments"> | string
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    author?: SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    whoComment?: SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comments"> | number
    content?: StringWithAggregatesFilter<"comments"> | string
    author?: StringWithAggregatesFilter<"comments"> | string
    photo?: StringNullableWithAggregatesFilter<"comments"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"comments"> | Date | string
    whoComment?: StringWithAggregatesFilter<"comments"> | string
  }

  export type coursesWhereInput = {
    AND?: coursesWhereInput | coursesWhereInput[]
    OR?: coursesWhereInput[]
    NOT?: coursesWhereInput | coursesWhereInput[]
    id?: IntFilter<"courses"> | number
    coursename?: StringFilter<"courses"> | string
    duration?: StringFilter<"courses"> | string
    courseType?: StringFilter<"courses"> | string
    description?: StringFilter<"courses"> | string
    photo?: StringNullableFilter<"courses"> | string | null
    createdAt?: DateTimeFilter<"courses"> | Date | string
  }

  export type coursesOrderByWithRelationInput = {
    id?: SortOrder
    coursename?: SortOrder
    duration?: SortOrder
    courseType?: SortOrder
    description?: SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _relevance?: coursesOrderByRelevanceInput
  }

  export type coursesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: coursesWhereInput | coursesWhereInput[]
    OR?: coursesWhereInput[]
    NOT?: coursesWhereInput | coursesWhereInput[]
    coursename?: StringFilter<"courses"> | string
    duration?: StringFilter<"courses"> | string
    courseType?: StringFilter<"courses"> | string
    description?: StringFilter<"courses"> | string
    photo?: StringNullableFilter<"courses"> | string | null
    createdAt?: DateTimeFilter<"courses"> | Date | string
  }, "id">

  export type coursesOrderByWithAggregationInput = {
    id?: SortOrder
    coursename?: SortOrder
    duration?: SortOrder
    courseType?: SortOrder
    description?: SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: coursesCountOrderByAggregateInput
    _avg?: coursesAvgOrderByAggregateInput
    _max?: coursesMaxOrderByAggregateInput
    _min?: coursesMinOrderByAggregateInput
    _sum?: coursesSumOrderByAggregateInput
  }

  export type coursesScalarWhereWithAggregatesInput = {
    AND?: coursesScalarWhereWithAggregatesInput | coursesScalarWhereWithAggregatesInput[]
    OR?: coursesScalarWhereWithAggregatesInput[]
    NOT?: coursesScalarWhereWithAggregatesInput | coursesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"courses"> | number
    coursename?: StringWithAggregatesFilter<"courses"> | string
    duration?: StringWithAggregatesFilter<"courses"> | string
    courseType?: StringWithAggregatesFilter<"courses"> | string
    description?: StringWithAggregatesFilter<"courses"> | string
    photo?: StringNullableWithAggregatesFilter<"courses"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"courses"> | Date | string
  }

  export type documentsWhereInput = {
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    id?: IntFilter<"documents"> | number
    title?: StringFilter<"documents"> | string
    link?: StringFilter<"documents"> | string
    views?: IntFilter<"documents"> | number
    createdAt?: DateTimeFilter<"documents"> | Date | string
  }

  export type documentsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    _relevance?: documentsOrderByRelevanceInput
  }

  export type documentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    title?: StringFilter<"documents"> | string
    link?: StringFilter<"documents"> | string
    views?: IntFilter<"documents"> | number
    createdAt?: DateTimeFilter<"documents"> | Date | string
  }, "id">

  export type documentsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
    _count?: documentsCountOrderByAggregateInput
    _avg?: documentsAvgOrderByAggregateInput
    _max?: documentsMaxOrderByAggregateInput
    _min?: documentsMinOrderByAggregateInput
    _sum?: documentsSumOrderByAggregateInput
  }

  export type documentsScalarWhereWithAggregatesInput = {
    AND?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    OR?: documentsScalarWhereWithAggregatesInput[]
    NOT?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"documents"> | number
    title?: StringWithAggregatesFilter<"documents"> | string
    link?: StringWithAggregatesFilter<"documents"> | string
    views?: IntWithAggregatesFilter<"documents"> | number
    createdAt?: DateTimeWithAggregatesFilter<"documents"> | Date | string
  }

  export type employeesWhereInput = {
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    id?: IntFilter<"employees"> | number
    firstname?: StringFilter<"employees"> | string
    lastname?: StringFilter<"employees"> | string
    email?: StringFilter<"employees"> | string
    phone?: StringFilter<"employees"> | string
    category?: StringFilter<"employees"> | string
    position?: StringNullableFilter<"employees"> | string | null
    photo?: StringNullableFilter<"employees"> | string | null
    createdAt?: DateTimeFilter<"employees"> | Date | string
    updatedAt?: DateTimeFilter<"employees"> | Date | string
    department?: StringNullableFilter<"employees"> | string | null
  }

  export type employeesOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    position?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrderInput | SortOrder
    _relevance?: employeesOrderByRelevanceInput
  }

  export type employeesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    firstname?: StringFilter<"employees"> | string
    lastname?: StringFilter<"employees"> | string
    phone?: StringFilter<"employees"> | string
    category?: StringFilter<"employees"> | string
    position?: StringNullableFilter<"employees"> | string | null
    photo?: StringNullableFilter<"employees"> | string | null
    createdAt?: DateTimeFilter<"employees"> | Date | string
    updatedAt?: DateTimeFilter<"employees"> | Date | string
    department?: StringNullableFilter<"employees"> | string | null
  }, "id" | "email">

  export type employeesOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    position?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrderInput | SortOrder
    _count?: employeesCountOrderByAggregateInput
    _avg?: employeesAvgOrderByAggregateInput
    _max?: employeesMaxOrderByAggregateInput
    _min?: employeesMinOrderByAggregateInput
    _sum?: employeesSumOrderByAggregateInput
  }

  export type employeesScalarWhereWithAggregatesInput = {
    AND?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    OR?: employeesScalarWhereWithAggregatesInput[]
    NOT?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"employees"> | number
    firstname?: StringWithAggregatesFilter<"employees"> | string
    lastname?: StringWithAggregatesFilter<"employees"> | string
    email?: StringWithAggregatesFilter<"employees"> | string
    phone?: StringWithAggregatesFilter<"employees"> | string
    category?: StringWithAggregatesFilter<"employees"> | string
    position?: StringNullableWithAggregatesFilter<"employees"> | string | null
    photo?: StringNullableWithAggregatesFilter<"employees"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"employees"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"employees"> | Date | string
    department?: StringNullableWithAggregatesFilter<"employees"> | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    product_name?: StringFilter<"products"> | string
    department?: StringFilter<"products"> | string
    price?: StringFilter<"products"> | string
    photo?: StringFilter<"products"> | string
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    product_name?: SortOrder
    department?: SortOrder
    price?: SortOrder
    photo?: SortOrder
    _relevance?: productsOrderByRelevanceInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    product_name?: StringFilter<"products"> | string
    department?: StringFilter<"products"> | string
    price?: StringFilter<"products"> | string
    photo?: StringFilter<"products"> | string
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    product_name?: SortOrder
    department?: SortOrder
    price?: SortOrder
    photo?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    product_name?: StringWithAggregatesFilter<"products"> | string
    department?: StringWithAggregatesFilter<"products"> | string
    price?: StringWithAggregatesFilter<"products"> | string
    photo?: StringWithAggregatesFilter<"products"> | string
  }

  export type recentupdatesWhereInput = {
    AND?: recentupdatesWhereInput | recentupdatesWhereInput[]
    OR?: recentupdatesWhereInput[]
    NOT?: recentupdatesWhereInput | recentupdatesWhereInput[]
    id?: IntFilter<"recentupdates"> | number
    title?: StringFilter<"recentupdates"> | string
    content?: StringNullableFilter<"recentupdates"> | string | null
    photo?: StringNullableFilter<"recentupdates"> | string | null
    date?: DateTimeFilter<"recentupdates"> | Date | string
    createdAt?: DateTimeFilter<"recentupdates"> | Date | string
    slug?: StringFilter<"recentupdates"> | string
    updatedAt?: DateTimeFilter<"recentupdates"> | Date | string
  }

  export type recentupdatesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
    _relevance?: recentupdatesOrderByRelevanceInput
  }

  export type recentupdatesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: recentupdatesWhereInput | recentupdatesWhereInput[]
    OR?: recentupdatesWhereInput[]
    NOT?: recentupdatesWhereInput | recentupdatesWhereInput[]
    title?: StringFilter<"recentupdates"> | string
    content?: StringNullableFilter<"recentupdates"> | string | null
    photo?: StringNullableFilter<"recentupdates"> | string | null
    date?: DateTimeFilter<"recentupdates"> | Date | string
    createdAt?: DateTimeFilter<"recentupdates"> | Date | string
    updatedAt?: DateTimeFilter<"recentupdates"> | Date | string
  }, "id" | "slug">

  export type recentupdatesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
    _count?: recentupdatesCountOrderByAggregateInput
    _avg?: recentupdatesAvgOrderByAggregateInput
    _max?: recentupdatesMaxOrderByAggregateInput
    _min?: recentupdatesMinOrderByAggregateInput
    _sum?: recentupdatesSumOrderByAggregateInput
  }

  export type recentupdatesScalarWhereWithAggregatesInput = {
    AND?: recentupdatesScalarWhereWithAggregatesInput | recentupdatesScalarWhereWithAggregatesInput[]
    OR?: recentupdatesScalarWhereWithAggregatesInput[]
    NOT?: recentupdatesScalarWhereWithAggregatesInput | recentupdatesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recentupdates"> | number
    title?: StringWithAggregatesFilter<"recentupdates"> | string
    content?: StringNullableWithAggregatesFilter<"recentupdates"> | string | null
    photo?: StringNullableWithAggregatesFilter<"recentupdates"> | string | null
    date?: DateTimeWithAggregatesFilter<"recentupdates"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"recentupdates"> | Date | string
    slug?: StringWithAggregatesFilter<"recentupdates"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"recentupdates"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    firstname?: StringFilter<"users"> | string
    lastname?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    firstname?: StringFilter<"users"> | string
    lastname?: StringFilter<"users"> | string
    phone?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    firstname?: StringWithAggregatesFilter<"users"> | string
    lastname?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    phone?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
  }

  export type visitorWhereInput = {
    AND?: visitorWhereInput | visitorWhereInput[]
    OR?: visitorWhereInput[]
    NOT?: visitorWhereInput | visitorWhereInput[]
    id?: IntFilter<"visitor"> | number
    ipAddress?: StringFilter<"visitor"> | string
    userAgent?: StringNullableFilter<"visitor"> | string | null
    visitCount?: IntFilter<"visitor"> | number
    createdAt?: DateTimeFilter<"visitor"> | Date | string
    updatedAt?: DateTimeFilter<"visitor"> | Date | string
  }

  export type visitorOrderByWithRelationInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    visitCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: visitorOrderByRelevanceInput
  }

  export type visitorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ipAddress?: string
    AND?: visitorWhereInput | visitorWhereInput[]
    OR?: visitorWhereInput[]
    NOT?: visitorWhereInput | visitorWhereInput[]
    userAgent?: StringNullableFilter<"visitor"> | string | null
    visitCount?: IntFilter<"visitor"> | number
    createdAt?: DateTimeFilter<"visitor"> | Date | string
    updatedAt?: DateTimeFilter<"visitor"> | Date | string
  }, "id" | "ipAddress">

  export type visitorOrderByWithAggregationInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    visitCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: visitorCountOrderByAggregateInput
    _avg?: visitorAvgOrderByAggregateInput
    _max?: visitorMaxOrderByAggregateInput
    _min?: visitorMinOrderByAggregateInput
    _sum?: visitorSumOrderByAggregateInput
  }

  export type visitorScalarWhereWithAggregatesInput = {
    AND?: visitorScalarWhereWithAggregatesInput | visitorScalarWhereWithAggregatesInput[]
    OR?: visitorScalarWhereWithAggregatesInput[]
    NOT?: visitorScalarWhereWithAggregatesInput | visitorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"visitor"> | number
    ipAddress?: StringWithAggregatesFilter<"visitor"> | string
    userAgent?: StringNullableWithAggregatesFilter<"visitor"> | string | null
    visitCount?: IntWithAggregatesFilter<"visitor"> | number
    createdAt?: DateTimeWithAggregatesFilter<"visitor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"visitor"> | Date | string
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: IntFilter<"payments"> | number
    method?: StringFilter<"payments"> | string
    amount?: FloatFilter<"payments"> | number
    purpose?: StringNullableFilter<"payments"> | string | null
    createdAt?: DateTimeFilter<"payments"> | Date | string
    updatedAt?: DateTimeFilter<"payments"> | Date | string
    bankpayments?: XOR<BankpaymentsNullableScalarRelationFilter, bankpaymentsWhereInput> | null
    mobilepayments?: XOR<MobilepaymentsNullableScalarRelationFilter, mobilepaymentsWhereInput> | null
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    purpose?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bankpayments?: bankpaymentsOrderByWithRelationInput
    mobilepayments?: mobilepaymentsOrderByWithRelationInput
    _relevance?: paymentsOrderByRelevanceInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    method?: StringFilter<"payments"> | string
    amount?: FloatFilter<"payments"> | number
    purpose?: StringNullableFilter<"payments"> | string | null
    createdAt?: DateTimeFilter<"payments"> | Date | string
    updatedAt?: DateTimeFilter<"payments"> | Date | string
    bankpayments?: XOR<BankpaymentsNullableScalarRelationFilter, bankpaymentsWhereInput> | null
    mobilepayments?: XOR<MobilepaymentsNullableScalarRelationFilter, mobilepaymentsWhereInput> | null
  }, "id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    purpose?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payments"> | number
    method?: StringWithAggregatesFilter<"payments"> | string
    amount?: FloatWithAggregatesFilter<"payments"> | number
    purpose?: StringNullableWithAggregatesFilter<"payments"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"payments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"payments"> | Date | string
  }

  export type bankpaymentsWhereInput = {
    AND?: bankpaymentsWhereInput | bankpaymentsWhereInput[]
    OR?: bankpaymentsWhereInput[]
    NOT?: bankpaymentsWhereInput | bankpaymentsWhereInput[]
    id?: IntFilter<"bankpayments"> | number
    bankName?: StringFilter<"bankpayments"> | string
    accountName?: StringFilter<"bankpayments"> | string
    accountNo?: StringFilter<"bankpayments"> | string
    reference?: StringNullableFilter<"bankpayments"> | string | null
    status?: StringFilter<"bankpayments"> | string
    createdAt?: DateTimeFilter<"bankpayments"> | Date | string
    updatedAt?: DateTimeFilter<"bankpayments"> | Date | string
    paymentId?: IntFilter<"bankpayments"> | number
    payments?: XOR<PaymentsScalarRelationFilter, paymentsWhereInput>
  }

  export type bankpaymentsOrderByWithRelationInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNo?: SortOrder
    reference?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
    payments?: paymentsOrderByWithRelationInput
    _relevance?: bankpaymentsOrderByRelevanceInput
  }

  export type bankpaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    paymentId?: number
    AND?: bankpaymentsWhereInput | bankpaymentsWhereInput[]
    OR?: bankpaymentsWhereInput[]
    NOT?: bankpaymentsWhereInput | bankpaymentsWhereInput[]
    bankName?: StringFilter<"bankpayments"> | string
    accountName?: StringFilter<"bankpayments"> | string
    accountNo?: StringFilter<"bankpayments"> | string
    reference?: StringNullableFilter<"bankpayments"> | string | null
    status?: StringFilter<"bankpayments"> | string
    createdAt?: DateTimeFilter<"bankpayments"> | Date | string
    updatedAt?: DateTimeFilter<"bankpayments"> | Date | string
    payments?: XOR<PaymentsScalarRelationFilter, paymentsWhereInput>
  }, "id" | "paymentId">

  export type bankpaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNo?: SortOrder
    reference?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
    _count?: bankpaymentsCountOrderByAggregateInput
    _avg?: bankpaymentsAvgOrderByAggregateInput
    _max?: bankpaymentsMaxOrderByAggregateInput
    _min?: bankpaymentsMinOrderByAggregateInput
    _sum?: bankpaymentsSumOrderByAggregateInput
  }

  export type bankpaymentsScalarWhereWithAggregatesInput = {
    AND?: bankpaymentsScalarWhereWithAggregatesInput | bankpaymentsScalarWhereWithAggregatesInput[]
    OR?: bankpaymentsScalarWhereWithAggregatesInput[]
    NOT?: bankpaymentsScalarWhereWithAggregatesInput | bankpaymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bankpayments"> | number
    bankName?: StringWithAggregatesFilter<"bankpayments"> | string
    accountName?: StringWithAggregatesFilter<"bankpayments"> | string
    accountNo?: StringWithAggregatesFilter<"bankpayments"> | string
    reference?: StringNullableWithAggregatesFilter<"bankpayments"> | string | null
    status?: StringWithAggregatesFilter<"bankpayments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"bankpayments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"bankpayments"> | Date | string
    paymentId?: IntWithAggregatesFilter<"bankpayments"> | number
  }

  export type mobilepaymentsWhereInput = {
    AND?: mobilepaymentsWhereInput | mobilepaymentsWhereInput[]
    OR?: mobilepaymentsWhereInput[]
    NOT?: mobilepaymentsWhereInput | mobilepaymentsWhereInput[]
    id?: IntFilter<"mobilepayments"> | number
    provider?: StringFilter<"mobilepayments"> | string
    phone?: StringFilter<"mobilepayments"> | string
    localTxnId?: StringFilter<"mobilepayments"> | string
    airtelTxnId?: StringNullableFilter<"mobilepayments"> | string | null
    status?: StringFilter<"mobilepayments"> | string
    message?: StringNullableFilter<"mobilepayments"> | string | null
    createdAt?: DateTimeFilter<"mobilepayments"> | Date | string
    updatedAt?: DateTimeFilter<"mobilepayments"> | Date | string
    paymentId?: IntFilter<"mobilepayments"> | number
    payments?: XOR<PaymentsScalarRelationFilter, paymentsWhereInput>
  }

  export type mobilepaymentsOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    phone?: SortOrder
    localTxnId?: SortOrder
    airtelTxnId?: SortOrderInput | SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
    payments?: paymentsOrderByWithRelationInput
    _relevance?: mobilepaymentsOrderByRelevanceInput
  }

  export type mobilepaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    paymentId?: number
    AND?: mobilepaymentsWhereInput | mobilepaymentsWhereInput[]
    OR?: mobilepaymentsWhereInput[]
    NOT?: mobilepaymentsWhereInput | mobilepaymentsWhereInput[]
    provider?: StringFilter<"mobilepayments"> | string
    phone?: StringFilter<"mobilepayments"> | string
    localTxnId?: StringFilter<"mobilepayments"> | string
    airtelTxnId?: StringNullableFilter<"mobilepayments"> | string | null
    status?: StringFilter<"mobilepayments"> | string
    message?: StringNullableFilter<"mobilepayments"> | string | null
    createdAt?: DateTimeFilter<"mobilepayments"> | Date | string
    updatedAt?: DateTimeFilter<"mobilepayments"> | Date | string
    payments?: XOR<PaymentsScalarRelationFilter, paymentsWhereInput>
  }, "id" | "paymentId">

  export type mobilepaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    phone?: SortOrder
    localTxnId?: SortOrder
    airtelTxnId?: SortOrderInput | SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
    _count?: mobilepaymentsCountOrderByAggregateInput
    _avg?: mobilepaymentsAvgOrderByAggregateInput
    _max?: mobilepaymentsMaxOrderByAggregateInput
    _min?: mobilepaymentsMinOrderByAggregateInput
    _sum?: mobilepaymentsSumOrderByAggregateInput
  }

  export type mobilepaymentsScalarWhereWithAggregatesInput = {
    AND?: mobilepaymentsScalarWhereWithAggregatesInput | mobilepaymentsScalarWhereWithAggregatesInput[]
    OR?: mobilepaymentsScalarWhereWithAggregatesInput[]
    NOT?: mobilepaymentsScalarWhereWithAggregatesInput | mobilepaymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mobilepayments"> | number
    provider?: StringWithAggregatesFilter<"mobilepayments"> | string
    phone?: StringWithAggregatesFilter<"mobilepayments"> | string
    localTxnId?: StringWithAggregatesFilter<"mobilepayments"> | string
    airtelTxnId?: StringNullableWithAggregatesFilter<"mobilepayments"> | string | null
    status?: StringWithAggregatesFilter<"mobilepayments"> | string
    message?: StringNullableWithAggregatesFilter<"mobilepayments"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"mobilepayments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"mobilepayments"> | Date | string
    paymentId?: IntWithAggregatesFilter<"mobilepayments"> | number
  }

  export type PublicationWhereInput = {
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    id?: IntFilter<"Publication"> | number
    title?: StringFilter<"Publication"> | string
    youtubeId?: StringFilter<"Publication"> | string
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
  }

  export type PublicationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    youtubeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PublicationOrderByRelevanceInput
  }

  export type PublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    title?: StringFilter<"Publication"> | string
    youtubeId?: StringFilter<"Publication"> | string
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
  }, "id">

  export type PublicationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    youtubeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublicationCountOrderByAggregateInput
    _avg?: PublicationAvgOrderByAggregateInput
    _max?: PublicationMaxOrderByAggregateInput
    _min?: PublicationMinOrderByAggregateInput
    _sum?: PublicationSumOrderByAggregateInput
  }

  export type PublicationScalarWhereWithAggregatesInput = {
    AND?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    OR?: PublicationScalarWhereWithAggregatesInput[]
    NOT?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Publication"> | number
    title?: StringWithAggregatesFilter<"Publication"> | string
    youtubeId?: StringWithAggregatesFilter<"Publication"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
  }

  export type announcementsCreateInput = {
    title: string
    link?: string | null
    createdAt?: Date | string
    views?: number
  }

  export type announcementsUncheckedCreateInput = {
    id?: number
    title: string
    link?: string | null
    createdAt?: Date | string
    views?: number
  }

  export type announcementsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
  }

  export type announcementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
  }

  export type announcementsCreateManyInput = {
    id?: number
    title: string
    link?: string | null
    createdAt?: Date | string
    views?: number
  }

  export type announcementsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
  }

  export type announcementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
  }

  export type bannersCreateInput = {
    title: string
    link?: string | null
    createdAt?: Date | string
  }

  export type bannersUncheckedCreateInput = {
    id?: number
    title: string
    link?: string | null
    createdAt?: Date | string
  }

  export type bannersUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bannersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bannersCreateManyInput = {
    id?: number
    title: string
    link?: string | null
    createdAt?: Date | string
  }

  export type bannersUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bannersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type commentsCreateInput = {
    content: string
    author: string
    photo?: string | null
    createdAt?: Date | string
    whoComment: string
  }

  export type commentsUncheckedCreateInput = {
    id?: number
    content: string
    author: string
    photo?: string | null
    createdAt?: Date | string
    whoComment: string
  }

  export type commentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whoComment?: StringFieldUpdateOperationsInput | string
  }

  export type commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whoComment?: StringFieldUpdateOperationsInput | string
  }

  export type commentsCreateManyInput = {
    id?: number
    content: string
    author: string
    photo?: string | null
    createdAt?: Date | string
    whoComment: string
  }

  export type commentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whoComment?: StringFieldUpdateOperationsInput | string
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whoComment?: StringFieldUpdateOperationsInput | string
  }

  export type coursesCreateInput = {
    coursename: string
    duration: string
    courseType: string
    description: string
    photo?: string | null
    createdAt?: Date | string
  }

  export type coursesUncheckedCreateInput = {
    id?: number
    coursename: string
    duration: string
    courseType: string
    description: string
    photo?: string | null
    createdAt?: Date | string
  }

  export type coursesUpdateInput = {
    coursename?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    courseType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type coursesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coursename?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    courseType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type coursesCreateManyInput = {
    id?: number
    coursename: string
    duration: string
    courseType: string
    description: string
    photo?: string | null
    createdAt?: Date | string
  }

  export type coursesUpdateManyMutationInput = {
    coursename?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    courseType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type coursesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coursename?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    courseType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentsCreateInput = {
    title: string
    link: string
    views?: number
    createdAt?: Date | string
  }

  export type documentsUncheckedCreateInput = {
    id?: number
    title: string
    link: string
    views?: number
    createdAt?: Date | string
  }

  export type documentsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentsCreateManyInput = {
    id?: number
    title: string
    link: string
    views?: number
    createdAt?: Date | string
  }

  export type documentsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employeesCreateInput = {
    firstname: string
    lastname: string
    email: string
    phone: string
    category: string
    position?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    department?: string | null
  }

  export type employeesUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    phone: string
    category: string
    position?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    department?: string | null
  }

  export type employeesUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type employeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type employeesCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    phone: string
    category: string
    position?: string | null
    photo?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    department?: string | null
  }

  export type employeesUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type employeesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsCreateInput = {
    product_name: string
    department: string
    price: string
    photo: string
  }

  export type productsUncheckedCreateInput = {
    id?: number
    product_name: string
    department: string
    price: string
    photo: string
  }

  export type productsUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type productsCreateManyInput = {
    id?: number
    product_name: string
    department: string
    price: string
    photo: string
  }

  export type productsUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type recentupdatesCreateInput = {
    title: string
    content?: string | null
    photo?: string | null
    date?: Date | string
    createdAt?: Date | string
    slug: string
    updatedAt?: Date | string
  }

  export type recentupdatesUncheckedCreateInput = {
    id?: number
    title: string
    content?: string | null
    photo?: string | null
    date?: Date | string
    createdAt?: Date | string
    slug: string
    updatedAt?: Date | string
  }

  export type recentupdatesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recentupdatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recentupdatesCreateManyInput = {
    id?: number
    title: string
    content?: string | null
    photo?: string | null
    date?: Date | string
    createdAt?: Date | string
    slug: string
    updatedAt?: Date | string
  }

  export type recentupdatesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type recentupdatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    firstname: string
    lastname: string
    email: string
    phone: string
    password: string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    phone: string
    password: string
  }

  export type usersUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    phone: string
    password: string
  }

  export type usersUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type visitorCreateInput = {
    ipAddress: string
    userAgent?: string | null
    visitCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type visitorUncheckedCreateInput = {
    id?: number
    ipAddress: string
    userAgent?: string | null
    visitCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type visitorUpdateInput = {
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type visitorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type visitorCreateManyInput = {
    id?: number
    ipAddress: string
    userAgent?: string | null
    visitCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type visitorUpdateManyMutationInput = {
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type visitorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    visitCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateInput = {
    method: string
    amount: number
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankpayments?: bankpaymentsCreateNestedOneWithoutPaymentsInput
    mobilepayments?: mobilepaymentsCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: number
    method: string
    amount: number
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankpayments?: bankpaymentsUncheckedCreateNestedOneWithoutPaymentsInput
    mobilepayments?: mobilepaymentsUncheckedCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUpdateInput = {
    method?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankpayments?: bankpaymentsUpdateOneWithoutPaymentsNestedInput
    mobilepayments?: mobilepaymentsUpdateOneWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankpayments?: bankpaymentsUncheckedUpdateOneWithoutPaymentsNestedInput
    mobilepayments?: mobilepaymentsUncheckedUpdateOneWithoutPaymentsNestedInput
  }

  export type paymentsCreateManyInput = {
    id?: number
    method: string
    amount: number
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paymentsUpdateManyMutationInput = {
    method?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bankpaymentsCreateInput = {
    bankName: string
    accountName: string
    accountNo: string
    reference?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    payments: paymentsCreateNestedOneWithoutBankpaymentsInput
  }

  export type bankpaymentsUncheckedCreateInput = {
    id?: number
    bankName: string
    accountName: string
    accountNo: string
    reference?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    paymentId: number
  }

  export type bankpaymentsUpdateInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountNo?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUpdateOneRequiredWithoutBankpaymentsNestedInput
  }

  export type bankpaymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountNo?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: IntFieldUpdateOperationsInput | number
  }

  export type bankpaymentsCreateManyInput = {
    id?: number
    bankName: string
    accountName: string
    accountNo: string
    reference?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
    paymentId: number
  }

  export type bankpaymentsUpdateManyMutationInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountNo?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bankpaymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountNo?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: IntFieldUpdateOperationsInput | number
  }

  export type mobilepaymentsCreateInput = {
    provider: string
    phone: string
    localTxnId: string
    airtelTxnId?: string | null
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    payments: paymentsCreateNestedOneWithoutMobilepaymentsInput
  }

  export type mobilepaymentsUncheckedCreateInput = {
    id?: number
    provider: string
    phone: string
    localTxnId: string
    airtelTxnId?: string | null
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    paymentId: number
  }

  export type mobilepaymentsUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    localTxnId?: StringFieldUpdateOperationsInput | string
    airtelTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUpdateOneRequiredWithoutMobilepaymentsNestedInput
  }

  export type mobilepaymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    localTxnId?: StringFieldUpdateOperationsInput | string
    airtelTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: IntFieldUpdateOperationsInput | number
  }

  export type mobilepaymentsCreateManyInput = {
    id?: number
    provider: string
    phone: string
    localTxnId: string
    airtelTxnId?: string | null
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    paymentId: number
  }

  export type mobilepaymentsUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    localTxnId?: StringFieldUpdateOperationsInput | string
    airtelTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mobilepaymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    localTxnId?: StringFieldUpdateOperationsInput | string
    airtelTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: IntFieldUpdateOperationsInput | number
  }

  export type PublicationCreateInput = {
    title: string
    youtubeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUncheckedCreateInput = {
    id?: number
    title: string
    youtubeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationCreateManyInput = {
    id?: number
    title: string
    youtubeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type announcementsOrderByRelevanceInput = {
    fields: announcementsOrderByRelevanceFieldEnum | announcementsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type announcementsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    views?: SortOrder
  }

  export type announcementsAvgOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
  }

  export type announcementsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    views?: SortOrder
  }

  export type announcementsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    views?: SortOrder
  }

  export type announcementsSumOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type bannersOrderByRelevanceInput = {
    fields: bannersOrderByRelevanceFieldEnum | bannersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bannersCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
  }

  export type bannersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type bannersMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
  }

  export type bannersMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
  }

  export type bannersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type commentsOrderByRelevanceInput = {
    fields: commentsOrderByRelevanceFieldEnum | commentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    author?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    whoComment?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    author?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    whoComment?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    author?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    whoComment?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type coursesOrderByRelevanceInput = {
    fields: coursesOrderByRelevanceFieldEnum | coursesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type coursesCountOrderByAggregateInput = {
    id?: SortOrder
    coursename?: SortOrder
    duration?: SortOrder
    courseType?: SortOrder
    description?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type coursesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type coursesMaxOrderByAggregateInput = {
    id?: SortOrder
    coursename?: SortOrder
    duration?: SortOrder
    courseType?: SortOrder
    description?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type coursesMinOrderByAggregateInput = {
    id?: SortOrder
    coursename?: SortOrder
    duration?: SortOrder
    courseType?: SortOrder
    description?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type coursesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type documentsOrderByRelevanceInput = {
    fields: documentsOrderByRelevanceFieldEnum | documentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type documentsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
  }

  export type documentsAvgOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
  }

  export type documentsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
  }

  export type documentsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    link?: SortOrder
    views?: SortOrder
    createdAt?: SortOrder
  }

  export type documentsSumOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
  }

  export type employeesOrderByRelevanceInput = {
    fields: employeesOrderByRelevanceFieldEnum | employeesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type employeesCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    position?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type employeesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type employeesMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    position?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type employeesMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    position?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: SortOrder
  }

  export type employeesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type productsOrderByRelevanceInput = {
    fields: productsOrderByRelevanceFieldEnum | productsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    department?: SortOrder
    price?: SortOrder
    photo?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    department?: SortOrder
    price?: SortOrder
    photo?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    product_name?: SortOrder
    department?: SortOrder
    price?: SortOrder
    photo?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type recentupdatesOrderByRelevanceInput = {
    fields: recentupdatesOrderByRelevanceFieldEnum | recentupdatesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type recentupdatesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
  }

  export type recentupdatesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type recentupdatesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
  }

  export type recentupdatesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    slug?: SortOrder
    updatedAt?: SortOrder
  }

  export type recentupdatesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type visitorOrderByRelevanceInput = {
    fields: visitorOrderByRelevanceFieldEnum | visitorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type visitorCountOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    visitCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type visitorAvgOrderByAggregateInput = {
    id?: SortOrder
    visitCount?: SortOrder
  }

  export type visitorMaxOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    visitCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type visitorMinOrderByAggregateInput = {
    id?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    visitCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type visitorSumOrderByAggregateInput = {
    id?: SortOrder
    visitCount?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BankpaymentsNullableScalarRelationFilter = {
    is?: bankpaymentsWhereInput | null
    isNot?: bankpaymentsWhereInput | null
  }

  export type MobilepaymentsNullableScalarRelationFilter = {
    is?: mobilepaymentsWhereInput | null
    isNot?: mobilepaymentsWhereInput | null
  }

  export type paymentsOrderByRelevanceInput = {
    fields: paymentsOrderByRelevanceFieldEnum | paymentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    purpose?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    purpose?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    purpose?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PaymentsScalarRelationFilter = {
    is?: paymentsWhereInput
    isNot?: paymentsWhereInput
  }

  export type bankpaymentsOrderByRelevanceInput = {
    fields: bankpaymentsOrderByRelevanceFieldEnum | bankpaymentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bankpaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNo?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type bankpaymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type bankpaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNo?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type bankpaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNo?: SortOrder
    reference?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type bankpaymentsSumOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type mobilepaymentsOrderByRelevanceInput = {
    fields: mobilepaymentsOrderByRelevanceFieldEnum | mobilepaymentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mobilepaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    phone?: SortOrder
    localTxnId?: SortOrder
    airtelTxnId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type mobilepaymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type mobilepaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    phone?: SortOrder
    localTxnId?: SortOrder
    airtelTxnId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type mobilepaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    phone?: SortOrder
    localTxnId?: SortOrder
    airtelTxnId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type mobilepaymentsSumOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
  }

  export type PublicationOrderByRelevanceInput = {
    fields: PublicationOrderByRelevanceFieldEnum | PublicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PublicationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    youtubeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    youtubeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    youtubeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bankpaymentsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<bankpaymentsCreateWithoutPaymentsInput, bankpaymentsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bankpaymentsCreateOrConnectWithoutPaymentsInput
    connect?: bankpaymentsWhereUniqueInput
  }

  export type mobilepaymentsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<mobilepaymentsCreateWithoutPaymentsInput, mobilepaymentsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: mobilepaymentsCreateOrConnectWithoutPaymentsInput
    connect?: mobilepaymentsWhereUniqueInput
  }

  export type bankpaymentsUncheckedCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<bankpaymentsCreateWithoutPaymentsInput, bankpaymentsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bankpaymentsCreateOrConnectWithoutPaymentsInput
    connect?: bankpaymentsWhereUniqueInput
  }

  export type mobilepaymentsUncheckedCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<mobilepaymentsCreateWithoutPaymentsInput, mobilepaymentsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: mobilepaymentsCreateOrConnectWithoutPaymentsInput
    connect?: mobilepaymentsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bankpaymentsUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<bankpaymentsCreateWithoutPaymentsInput, bankpaymentsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bankpaymentsCreateOrConnectWithoutPaymentsInput
    upsert?: bankpaymentsUpsertWithoutPaymentsInput
    disconnect?: bankpaymentsWhereInput | boolean
    delete?: bankpaymentsWhereInput | boolean
    connect?: bankpaymentsWhereUniqueInput
    update?: XOR<XOR<bankpaymentsUpdateToOneWithWhereWithoutPaymentsInput, bankpaymentsUpdateWithoutPaymentsInput>, bankpaymentsUncheckedUpdateWithoutPaymentsInput>
  }

  export type mobilepaymentsUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<mobilepaymentsCreateWithoutPaymentsInput, mobilepaymentsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: mobilepaymentsCreateOrConnectWithoutPaymentsInput
    upsert?: mobilepaymentsUpsertWithoutPaymentsInput
    disconnect?: mobilepaymentsWhereInput | boolean
    delete?: mobilepaymentsWhereInput | boolean
    connect?: mobilepaymentsWhereUniqueInput
    update?: XOR<XOR<mobilepaymentsUpdateToOneWithWhereWithoutPaymentsInput, mobilepaymentsUpdateWithoutPaymentsInput>, mobilepaymentsUncheckedUpdateWithoutPaymentsInput>
  }

  export type bankpaymentsUncheckedUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<bankpaymentsCreateWithoutPaymentsInput, bankpaymentsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: bankpaymentsCreateOrConnectWithoutPaymentsInput
    upsert?: bankpaymentsUpsertWithoutPaymentsInput
    disconnect?: bankpaymentsWhereInput | boolean
    delete?: bankpaymentsWhereInput | boolean
    connect?: bankpaymentsWhereUniqueInput
    update?: XOR<XOR<bankpaymentsUpdateToOneWithWhereWithoutPaymentsInput, bankpaymentsUpdateWithoutPaymentsInput>, bankpaymentsUncheckedUpdateWithoutPaymentsInput>
  }

  export type mobilepaymentsUncheckedUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<mobilepaymentsCreateWithoutPaymentsInput, mobilepaymentsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: mobilepaymentsCreateOrConnectWithoutPaymentsInput
    upsert?: mobilepaymentsUpsertWithoutPaymentsInput
    disconnect?: mobilepaymentsWhereInput | boolean
    delete?: mobilepaymentsWhereInput | boolean
    connect?: mobilepaymentsWhereUniqueInput
    update?: XOR<XOR<mobilepaymentsUpdateToOneWithWhereWithoutPaymentsInput, mobilepaymentsUpdateWithoutPaymentsInput>, mobilepaymentsUncheckedUpdateWithoutPaymentsInput>
  }

  export type paymentsCreateNestedOneWithoutBankpaymentsInput = {
    create?: XOR<paymentsCreateWithoutBankpaymentsInput, paymentsUncheckedCreateWithoutBankpaymentsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutBankpaymentsInput
    connect?: paymentsWhereUniqueInput
  }

  export type paymentsUpdateOneRequiredWithoutBankpaymentsNestedInput = {
    create?: XOR<paymentsCreateWithoutBankpaymentsInput, paymentsUncheckedCreateWithoutBankpaymentsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutBankpaymentsInput
    upsert?: paymentsUpsertWithoutBankpaymentsInput
    connect?: paymentsWhereUniqueInput
    update?: XOR<XOR<paymentsUpdateToOneWithWhereWithoutBankpaymentsInput, paymentsUpdateWithoutBankpaymentsInput>, paymentsUncheckedUpdateWithoutBankpaymentsInput>
  }

  export type paymentsCreateNestedOneWithoutMobilepaymentsInput = {
    create?: XOR<paymentsCreateWithoutMobilepaymentsInput, paymentsUncheckedCreateWithoutMobilepaymentsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutMobilepaymentsInput
    connect?: paymentsWhereUniqueInput
  }

  export type paymentsUpdateOneRequiredWithoutMobilepaymentsNestedInput = {
    create?: XOR<paymentsCreateWithoutMobilepaymentsInput, paymentsUncheckedCreateWithoutMobilepaymentsInput>
    connectOrCreate?: paymentsCreateOrConnectWithoutMobilepaymentsInput
    upsert?: paymentsUpsertWithoutMobilepaymentsInput
    connect?: paymentsWhereUniqueInput
    update?: XOR<XOR<paymentsUpdateToOneWithWhereWithoutMobilepaymentsInput, paymentsUpdateWithoutMobilepaymentsInput>, paymentsUncheckedUpdateWithoutMobilepaymentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type bankpaymentsCreateWithoutPaymentsInput = {
    bankName: string
    accountName: string
    accountNo: string
    reference?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type bankpaymentsUncheckedCreateWithoutPaymentsInput = {
    id?: number
    bankName: string
    accountName: string
    accountNo: string
    reference?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type bankpaymentsCreateOrConnectWithoutPaymentsInput = {
    where: bankpaymentsWhereUniqueInput
    create: XOR<bankpaymentsCreateWithoutPaymentsInput, bankpaymentsUncheckedCreateWithoutPaymentsInput>
  }

  export type mobilepaymentsCreateWithoutPaymentsInput = {
    provider: string
    phone: string
    localTxnId: string
    airtelTxnId?: string | null
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type mobilepaymentsUncheckedCreateWithoutPaymentsInput = {
    id?: number
    provider: string
    phone: string
    localTxnId: string
    airtelTxnId?: string | null
    status?: string
    message?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type mobilepaymentsCreateOrConnectWithoutPaymentsInput = {
    where: mobilepaymentsWhereUniqueInput
    create: XOR<mobilepaymentsCreateWithoutPaymentsInput, mobilepaymentsUncheckedCreateWithoutPaymentsInput>
  }

  export type bankpaymentsUpsertWithoutPaymentsInput = {
    update: XOR<bankpaymentsUpdateWithoutPaymentsInput, bankpaymentsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<bankpaymentsCreateWithoutPaymentsInput, bankpaymentsUncheckedCreateWithoutPaymentsInput>
    where?: bankpaymentsWhereInput
  }

  export type bankpaymentsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: bankpaymentsWhereInput
    data: XOR<bankpaymentsUpdateWithoutPaymentsInput, bankpaymentsUncheckedUpdateWithoutPaymentsInput>
  }

  export type bankpaymentsUpdateWithoutPaymentsInput = {
    bankName?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountNo?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bankpaymentsUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankName?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountNo?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mobilepaymentsUpsertWithoutPaymentsInput = {
    update: XOR<mobilepaymentsUpdateWithoutPaymentsInput, mobilepaymentsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<mobilepaymentsCreateWithoutPaymentsInput, mobilepaymentsUncheckedCreateWithoutPaymentsInput>
    where?: mobilepaymentsWhereInput
  }

  export type mobilepaymentsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: mobilepaymentsWhereInput
    data: XOR<mobilepaymentsUpdateWithoutPaymentsInput, mobilepaymentsUncheckedUpdateWithoutPaymentsInput>
  }

  export type mobilepaymentsUpdateWithoutPaymentsInput = {
    provider?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    localTxnId?: StringFieldUpdateOperationsInput | string
    airtelTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mobilepaymentsUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    localTxnId?: StringFieldUpdateOperationsInput | string
    airtelTxnId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateWithoutBankpaymentsInput = {
    method: string
    amount: number
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mobilepayments?: mobilepaymentsCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateWithoutBankpaymentsInput = {
    id?: number
    method: string
    amount: number
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mobilepayments?: mobilepaymentsUncheckedCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsCreateOrConnectWithoutBankpaymentsInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutBankpaymentsInput, paymentsUncheckedCreateWithoutBankpaymentsInput>
  }

  export type paymentsUpsertWithoutBankpaymentsInput = {
    update: XOR<paymentsUpdateWithoutBankpaymentsInput, paymentsUncheckedUpdateWithoutBankpaymentsInput>
    create: XOR<paymentsCreateWithoutBankpaymentsInput, paymentsUncheckedCreateWithoutBankpaymentsInput>
    where?: paymentsWhereInput
  }

  export type paymentsUpdateToOneWithWhereWithoutBankpaymentsInput = {
    where?: paymentsWhereInput
    data: XOR<paymentsUpdateWithoutBankpaymentsInput, paymentsUncheckedUpdateWithoutBankpaymentsInput>
  }

  export type paymentsUpdateWithoutBankpaymentsInput = {
    method?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mobilepayments?: mobilepaymentsUpdateOneWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateWithoutBankpaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mobilepayments?: mobilepaymentsUncheckedUpdateOneWithoutPaymentsNestedInput
  }

  export type paymentsCreateWithoutMobilepaymentsInput = {
    method: string
    amount: number
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankpayments?: bankpaymentsCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateWithoutMobilepaymentsInput = {
    id?: number
    method: string
    amount: number
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankpayments?: bankpaymentsUncheckedCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsCreateOrConnectWithoutMobilepaymentsInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutMobilepaymentsInput, paymentsUncheckedCreateWithoutMobilepaymentsInput>
  }

  export type paymentsUpsertWithoutMobilepaymentsInput = {
    update: XOR<paymentsUpdateWithoutMobilepaymentsInput, paymentsUncheckedUpdateWithoutMobilepaymentsInput>
    create: XOR<paymentsCreateWithoutMobilepaymentsInput, paymentsUncheckedCreateWithoutMobilepaymentsInput>
    where?: paymentsWhereInput
  }

  export type paymentsUpdateToOneWithWhereWithoutMobilepaymentsInput = {
    where?: paymentsWhereInput
    data: XOR<paymentsUpdateWithoutMobilepaymentsInput, paymentsUncheckedUpdateWithoutMobilepaymentsInput>
  }

  export type paymentsUpdateWithoutMobilepaymentsInput = {
    method?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankpayments?: bankpaymentsUpdateOneWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateWithoutMobilepaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankpayments?: bankpaymentsUncheckedUpdateOneWithoutPaymentsNestedInput
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