/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model audit_log
 *
 */
export type audit_log = $Result.DefaultSelection<Prisma.$audit_logPayload>;
/**
 * Model candidate
 *
 */
export type candidate = $Result.DefaultSelection<Prisma.$candidatePayload>;
/**
 * Model client
 *
 */
export type client = $Result.DefaultSelection<Prisma.$clientPayload>;
/**
 * Model election
 *
 */
export type election = $Result.DefaultSelection<Prisma.$electionPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model vote
 *
 */
export type vote = $Result.DefaultSelection<Prisma.$votePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audit_logs
 * const audit_logs = await prisma.audit_log.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audit_logs
   * const audit_logs = await prisma.audit_log.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.audit_log`: Exposes CRUD operations for the **audit_log** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Audit_logs
   * const audit_logs = await prisma.audit_log.findMany()
   * ```
   */
  get audit_log(): Prisma.audit_logDelegate<ExtArgs>;

  /**
   * `prisma.candidate`: Exposes CRUD operations for the **candidate** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Candidates
   * const candidates = await prisma.candidate.findMany()
   * ```
   */
  get candidate(): Prisma.candidateDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **client** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   */
  get client(): Prisma.clientDelegate<ExtArgs>;

  /**
   * `prisma.election`: Exposes CRUD operations for the **election** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Elections
   * const elections = await prisma.election.findMany()
   * ```
   */
  get election(): Prisma.electionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **vote** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Votes
   * const votes = await prisma.vote.findMany()
   * ```
   */
  get vote(): Prisma.voteDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    audit_log: 'audit_log';
    candidate: 'candidate';
    client: 'client';
    election: 'election';
    user: 'user';
    vote: 'vote';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'audit_log' | 'candidate' | 'client' | 'election' | 'user' | 'vote';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      audit_log: {
        payload: Prisma.$audit_logPayload<ExtArgs>;
        fields: Prisma.audit_logFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.audit_logFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.audit_logFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          findFirst: {
            args: Prisma.audit_logFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.audit_logFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          findMany: {
            args: Prisma.audit_logFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>[];
          };
          create: {
            args: Prisma.audit_logCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          createMany: {
            args: Prisma.audit_logCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.audit_logDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          update: {
            args: Prisma.audit_logUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          deleteMany: {
            args: Prisma.audit_logDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.audit_logUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.audit_logUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$audit_logPayload>;
          };
          aggregate: {
            args: Prisma.Audit_logAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAudit_log>;
          };
          groupBy: {
            args: Prisma.audit_logGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Audit_logGroupByOutputType>[];
          };
          count: {
            args: Prisma.audit_logCountArgs<ExtArgs>;
            result: $Utils.Optional<Audit_logCountAggregateOutputType> | number;
          };
        };
      };
      candidate: {
        payload: Prisma.$candidatePayload<ExtArgs>;
        fields: Prisma.candidateFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.candidateFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$candidatePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.candidateFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$candidatePayload>;
          };
          findFirst: {
            args: Prisma.candidateFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$candidatePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.candidateFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$candidatePayload>;
          };
          findMany: {
            args: Prisma.candidateFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$candidatePayload>[];
          };
          create: {
            args: Prisma.candidateCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$candidatePayload>;
          };
          createMany: {
            args: Prisma.candidateCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.candidateDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$candidatePayload>;
          };
          update: {
            args: Prisma.candidateUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$candidatePayload>;
          };
          deleteMany: {
            args: Prisma.candidateDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.candidateUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.candidateUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$candidatePayload>;
          };
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCandidate>;
          };
          groupBy: {
            args: Prisma.candidateGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CandidateGroupByOutputType>[];
          };
          count: {
            args: Prisma.candidateCountArgs<ExtArgs>;
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number;
          };
        };
      };
      client: {
        payload: Prisma.$clientPayload<ExtArgs>;
        fields: Prisma.clientFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.clientFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.clientFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          findFirst: {
            args: Prisma.clientFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.clientFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          findMany: {
            args: Prisma.clientFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[];
          };
          create: {
            args: Prisma.clientCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          createMany: {
            args: Prisma.clientCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.clientDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          update: {
            args: Prisma.clientUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          deleteMany: {
            args: Prisma.clientDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.clientUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.clientUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clientPayload>;
          };
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateClient>;
          };
          groupBy: {
            args: Prisma.clientGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ClientGroupByOutputType>[];
          };
          count: {
            args: Prisma.clientCountArgs<ExtArgs>;
            result: $Utils.Optional<ClientCountAggregateOutputType> | number;
          };
        };
      };
      election: {
        payload: Prisma.$electionPayload<ExtArgs>;
        fields: Prisma.electionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.electionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$electionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.electionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$electionPayload>;
          };
          findFirst: {
            args: Prisma.electionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$electionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.electionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$electionPayload>;
          };
          findMany: {
            args: Prisma.electionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$electionPayload>[];
          };
          create: {
            args: Prisma.electionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$electionPayload>;
          };
          createMany: {
            args: Prisma.electionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.electionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$electionPayload>;
          };
          update: {
            args: Prisma.electionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$electionPayload>;
          };
          deleteMany: {
            args: Prisma.electionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.electionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.electionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$electionPayload>;
          };
          aggregate: {
            args: Prisma.ElectionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateElection>;
          };
          groupBy: {
            args: Prisma.electionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ElectionGroupByOutputType>[];
          };
          count: {
            args: Prisma.electionCountArgs<ExtArgs>;
            result: $Utils.Optional<ElectionCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      vote: {
        payload: Prisma.$votePayload<ExtArgs>;
        fields: Prisma.voteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.voteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$votePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.voteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$votePayload>;
          };
          findFirst: {
            args: Prisma.voteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$votePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.voteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$votePayload>;
          };
          findMany: {
            args: Prisma.voteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$votePayload>[];
          };
          create: {
            args: Prisma.voteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$votePayload>;
          };
          createMany: {
            args: Prisma.voteCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.voteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$votePayload>;
          };
          update: {
            args: Prisma.voteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$votePayload>;
          };
          deleteMany: {
            args: Prisma.voteDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.voteUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.voteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$votePayload>;
          };
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVote>;
          };
          groupBy: {
            args: Prisma.voteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VoteGroupByOutputType>[];
          };
          count: {
            args: Prisma.voteCountArgs<ExtArgs>;
            result: $Utils.Optional<VoteCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CandidateCountOutputType
   */

  export type CandidateCountOutputType = {
    vote: number;
  };

  export type CandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vote?: boolean | CandidateCountOutputTypeCountVoteArgs;
  };

  // Custom InputTypes

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the CandidateCountOutputType
       */
      select?: CandidateCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountVoteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: voteWhereInput;
  };

  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    election: number;
  };

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ClientCountOutputTypeCountElectionArgs;
  };

  // Custom InputTypes

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountElectionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: electionWhereInput;
  };

  /**
   * Count Type ElectionCountOutputType
   */

  export type ElectionCountOutputType = {
    candidate: number;
    vote: number;
  };

  export type ElectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | ElectionCountOutputTypeCountCandidateArgs;
    vote?: boolean | ElectionCountOutputTypeCountVoteArgs;
  };

  // Custom InputTypes

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionCountOutputType
     */
    select?: ElectionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountCandidateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: candidateWhereInput;
  };

  /**
   * ElectionCountOutputType without action
   */
  export type ElectionCountOutputTypeCountVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: voteWhereInput;
    };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    audit_log: number;
    client: number;
    vote: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_log?: boolean | UserCountOutputTypeCountAudit_logArgs;
    client?: boolean | UserCountOutputTypeCountClientArgs;
    vote?: boolean | UserCountOutputTypeCountVoteArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAudit_logArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: audit_logWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voteWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model audit_log
   */

  export type AggregateAudit_log = {
    _count: Audit_logCountAggregateOutputType | null;
    _min: Audit_logMinAggregateOutputType | null;
    _max: Audit_logMaxAggregateOutputType | null;
  };

  export type Audit_logMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    action: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_logMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    action: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Audit_logCountAggregateOutputType = {
    id: number;
    user_id: number;
    action: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Audit_logMinAggregateInputType = {
    id?: true;
    user_id?: true;
    action?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_logMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    action?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Audit_logCountAggregateInputType = {
    id?: true;
    user_id?: true;
    action?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Audit_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_log to aggregate.
     */
    where?: audit_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: audit_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned audit_logs
     **/
    _count?: true | Audit_logCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Audit_logMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Audit_logMaxAggregateInputType;
  };

  export type GetAudit_logAggregateType<T extends Audit_logAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_log[P]>
      : GetScalarType<T[P], AggregateAudit_log[P]>;
  };

  export type audit_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logWhereInput;
    orderBy?: audit_logOrderByWithAggregationInput | audit_logOrderByWithAggregationInput[];
    by: Audit_logScalarFieldEnum[] | Audit_logScalarFieldEnum;
    having?: audit_logScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Audit_logCountAggregateInputType | true;
    _min?: Audit_logMinAggregateInputType;
    _max?: Audit_logMaxAggregateInputType;
  };

  export type Audit_logGroupByOutputType = {
    id: string;
    user_id: string;
    action: string;
    description: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Audit_logCountAggregateOutputType | null;
    _min: Audit_logMinAggregateOutputType | null;
    _max: Audit_logMaxAggregateOutputType | null;
  };

  type GetAudit_logGroupByPayload<T extends audit_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_logGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Audit_logGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Audit_logGroupByOutputType[P]>
          : GetScalarType<T[P], Audit_logGroupByOutputType[P]>;
      }
    >
  >;

  export type audit_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        action?: boolean;
        description?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['audit_log']
    >;

  export type audit_logSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    action?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type audit_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $audit_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'audit_log';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        action: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['audit_log']
    >;
    composites: {};
  };

  type audit_logGetPayload<S extends boolean | null | undefined | audit_logDefaultArgs> = $Result.GetResult<
    Prisma.$audit_logPayload,
    S
  >;

  type audit_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    audit_logFindManyArgs,
    'select' | 'include'
  > & {
    select?: Audit_logCountAggregateInputType | true;
  };

  export interface audit_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_log']; meta: { name: 'audit_log' } };
    /**
     * Find zero or one Audit_log that matches the filter.
     * @param {audit_logFindUniqueArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends audit_logFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logFindUniqueArgs<ExtArgs>>,
    ): Prisma__audit_logClient<
      $Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Audit_log that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {audit_logFindUniqueOrThrowArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends audit_logFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_logClient<
      $Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Audit_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindFirstArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends audit_logFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logFindFirstArgs<ExtArgs>>,
    ): Prisma__audit_logClient<
      $Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Audit_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindFirstOrThrowArgs} args - Arguments to find a Audit_log
     * @example
     * // Get one Audit_log
     * const audit_log = await prisma.audit_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends audit_logFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__audit_logClient<
      $Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_logs
     * const audit_logs = await prisma.audit_log.findMany()
     *
     * // Get first 10 Audit_logs
     * const audit_logs = await prisma.audit_log.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const audit_logWithIdOnly = await prisma.audit_log.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends audit_logFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Audit_log.
     * @param {audit_logCreateArgs} args - Arguments to create a Audit_log.
     * @example
     * // Create one Audit_log
     * const Audit_log = await prisma.audit_log.create({
     *   data: {
     *     // ... data to create a Audit_log
     *   }
     * })
     *
     **/
    create<T extends audit_logCreateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logCreateArgs<ExtArgs>>,
    ): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Audit_logs.
     *     @param {audit_logCreateManyArgs} args - Arguments to create many Audit_logs.
     *     @example
     *     // Create many Audit_logs
     *     const audit_log = await prisma.audit_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends audit_logCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Audit_log.
     * @param {audit_logDeleteArgs} args - Arguments to delete one Audit_log.
     * @example
     * // Delete one Audit_log
     * const Audit_log = await prisma.audit_log.delete({
     *   where: {
     *     // ... filter to delete one Audit_log
     *   }
     * })
     *
     **/
    delete<T extends audit_logDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logDeleteArgs<ExtArgs>>,
    ): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Audit_log.
     * @param {audit_logUpdateArgs} args - Arguments to update one Audit_log.
     * @example
     * // Update one Audit_log
     * const audit_log = await prisma.audit_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends audit_logUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logUpdateArgs<ExtArgs>>,
    ): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Audit_logs.
     * @param {audit_logDeleteManyArgs} args - Arguments to filter Audit_logs to delete.
     * @example
     * // Delete a few Audit_logs
     * const { count } = await prisma.audit_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends audit_logDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, audit_logDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_logs
     * const audit_log = await prisma.audit_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends audit_logUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Audit_log.
     * @param {audit_logUpsertArgs} args - Arguments to update or create a Audit_log.
     * @example
     * // Update or create a Audit_log
     * const audit_log = await prisma.audit_log.upsert({
     *   create: {
     *     // ... data to create a Audit_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_log we want to update
     *   }
     * })
     **/
    upsert<T extends audit_logUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, audit_logUpsertArgs<ExtArgs>>,
    ): Prisma__audit_logClient<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logCountArgs} args - Arguments to filter Audit_logs to count.
     * @example
     * // Count the number of Audit_logs
     * const count = await prisma.audit_log.count({
     *   where: {
     *     // ... the filter for the Audit_logs we want to count
     *   }
     * })
     **/
    count<T extends audit_logCountArgs>(
      args?: Subset<T, audit_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_logCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Audit_logAggregateArgs>(
      args: Subset<T, Audit_logAggregateArgs>,
    ): Prisma.PrismaPromise<GetAudit_logAggregateType<T>>;

    /**
     * Group by Audit_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logGroupByArgs} args - Group by arguments.
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
      T extends audit_logGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_logGroupByArgs['orderBy'] }
        : { orderBy?: audit_logGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, audit_logGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAudit_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the audit_log model
     */
    readonly fields: audit_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_logClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the audit_log model
   */
  interface audit_logFieldRefs {
    readonly id: FieldRef<'audit_log', 'String'>;
    readonly user_id: FieldRef<'audit_log', 'String'>;
    readonly action: FieldRef<'audit_log', 'String'>;
    readonly description: FieldRef<'audit_log', 'String'>;
    readonly created_at: FieldRef<'audit_log', 'DateTime'>;
    readonly updated_at: FieldRef<'audit_log', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * audit_log findUnique
   */
  export type audit_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_logInclude<ExtArgs> | null;
    /**
     * Filter, which audit_log to fetch.
     */
    where: audit_logWhereUniqueInput;
  };

  /**
   * audit_log findUniqueOrThrow
   */
  export type audit_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_logInclude<ExtArgs> | null;
    /**
     * Filter, which audit_log to fetch.
     */
    where: audit_logWhereUniqueInput;
  };

  /**
   * audit_log findFirst
   */
  export type audit_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_logInclude<ExtArgs> | null;
    /**
     * Filter, which audit_log to fetch.
     */
    where?: audit_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[];
  };

  /**
   * audit_log findFirstOrThrow
   */
  export type audit_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_logInclude<ExtArgs> | null;
    /**
     * Filter, which audit_log to fetch.
     */
    where?: audit_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[];
  };

  /**
   * audit_log findMany
   */
  export type audit_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_logInclude<ExtArgs> | null;
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing audit_logs.
     */
    cursor?: audit_logWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` audit_logs.
     */
    skip?: number;
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[];
  };

  /**
   * audit_log create
   */
  export type audit_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_logInclude<ExtArgs> | null;
    /**
     * The data needed to create a audit_log.
     */
    data: XOR<audit_logCreateInput, audit_logUncheckedCreateInput>;
  };

  /**
   * audit_log createMany
   */
  export type audit_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logCreateManyInput | audit_logCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * audit_log update
   */
  export type audit_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_logInclude<ExtArgs> | null;
    /**
     * The data needed to update a audit_log.
     */
    data: XOR<audit_logUpdateInput, audit_logUncheckedUpdateInput>;
    /**
     * Choose, which audit_log to update.
     */
    where: audit_logWhereUniqueInput;
  };

  /**
   * audit_log updateMany
   */
  export type audit_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyInput>;
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logWhereInput;
  };

  /**
   * audit_log upsert
   */
  export type audit_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_logInclude<ExtArgs> | null;
    /**
     * The filter to search for the audit_log to update in case it exists.
     */
    where: audit_logWhereUniqueInput;
    /**
     * In case the audit_log found by the `where` argument doesn't exist, create a new audit_log with this data.
     */
    create: XOR<audit_logCreateInput, audit_logUncheckedCreateInput>;
    /**
     * In case the audit_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_logUpdateInput, audit_logUncheckedUpdateInput>;
  };

  /**
   * audit_log delete
   */
  export type audit_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_logInclude<ExtArgs> | null;
    /**
     * Filter which audit_log to delete.
     */
    where: audit_logWhereUniqueInput;
  };

  /**
   * audit_log deleteMany
   */
  export type audit_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to delete
     */
    where?: audit_logWhereInput;
  };

  /**
   * audit_log without action
   */
  export type audit_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_logInclude<ExtArgs> | null;
  };

  /**
   * Model candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null;
    _avg: CandidateAvgAggregateOutputType | null;
    _sum: CandidateSumAggregateOutputType | null;
    _min: CandidateMinAggregateOutputType | null;
    _max: CandidateMaxAggregateOutputType | null;
  };

  export type CandidateAvgAggregateOutputType = {
    votes: number | null;
  };

  export type CandidateSumAggregateOutputType = {
    votes: number | null;
  };

  export type CandidateMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    election_id: string | null;
    votes: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CandidateMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    election_id: string | null;
    votes: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CandidateCountAggregateOutputType = {
    id: number;
    name: number;
    election_id: number;
    votes: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CandidateAvgAggregateInputType = {
    votes?: true;
  };

  export type CandidateSumAggregateInputType = {
    votes?: true;
  };

  export type CandidateMinAggregateInputType = {
    id?: true;
    name?: true;
    election_id?: true;
    votes?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CandidateMaxAggregateInputType = {
    id?: true;
    name?: true;
    election_id?: true;
    votes?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CandidateCountAggregateInputType = {
    id?: true;
    name?: true;
    election_id?: true;
    votes?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidate to aggregate.
     */
    where?: candidateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidateOrderByWithRelationInput | candidateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: candidateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` candidates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned candidates
     **/
    _count?: true | CandidateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CandidateAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CandidateSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CandidateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CandidateMaxAggregateInputType;
  };

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
    [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>;
  };

  export type candidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidateWhereInput;
    orderBy?: candidateOrderByWithAggregationInput | candidateOrderByWithAggregationInput[];
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum;
    having?: candidateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CandidateCountAggregateInputType | true;
    _avg?: CandidateAvgAggregateInputType;
    _sum?: CandidateSumAggregateInputType;
    _min?: CandidateMinAggregateInputType;
    _max?: CandidateMaxAggregateInputType;
  };

  export type CandidateGroupByOutputType = {
    id: string;
    name: string;
    election_id: string;
    votes: number;
    created_at: Date;
    updated_at: Date;
    _count: CandidateCountAggregateOutputType | null;
    _avg: CandidateAvgAggregateOutputType | null;
    _sum: CandidateSumAggregateOutputType | null;
    _min: CandidateMinAggregateOutputType | null;
    _max: CandidateMaxAggregateOutputType | null;
  };

  type GetCandidateGroupByPayload<T extends candidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CandidateGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
          : GetScalarType<T[P], CandidateGroupByOutputType[P]>;
      }
    >
  >;

  export type candidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        election_id?: boolean;
        votes?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        election?: boolean | electionDefaultArgs<ExtArgs>;
        vote?: boolean | candidate$voteArgs<ExtArgs>;
        _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['candidate']
    >;

  export type candidateSelectScalar = {
    id?: boolean;
    name?: boolean;
    election_id?: boolean;
    votes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type candidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | electionDefaultArgs<ExtArgs>;
    vote?: boolean | candidate$voteArgs<ExtArgs>;
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $candidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'candidate';
    objects: {
      election: Prisma.$electionPayload<ExtArgs>;
      vote: Prisma.$votePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        election_id: string;
        votes: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['candidate']
    >;
    composites: {};
  };

  type candidateGetPayload<S extends boolean | null | undefined | candidateDefaultArgs> = $Result.GetResult<
    Prisma.$candidatePayload,
    S
  >;

  type candidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    candidateFindManyArgs,
    'select' | 'include'
  > & {
    select?: CandidateCountAggregateInputType | true;
  };

  export interface candidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['candidate']; meta: { name: 'candidate' } };
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {candidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends candidateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, candidateFindUniqueArgs<ExtArgs>>,
    ): Prisma__candidateClient<
      $Result.GetResult<Prisma.$candidatePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Candidate that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {candidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends candidateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, candidateFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__candidateClient<
      $Result.GetResult<Prisma.$candidatePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends candidateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, candidateFindFirstArgs<ExtArgs>>,
    ): Prisma__candidateClient<
      $Result.GetResult<Prisma.$candidatePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends candidateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, candidateFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__candidateClient<
      $Result.GetResult<Prisma.$candidatePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     *
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const candidateWithIdOnly = await prisma.candidate.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends candidateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, candidateFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Candidate.
     * @param {candidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     *
     **/
    create<T extends candidateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, candidateCreateArgs<ExtArgs>>,
    ): Prisma__candidateClient<$Result.GetResult<Prisma.$candidatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Candidates.
     *     @param {candidateCreateManyArgs} args - Arguments to create many Candidates.
     *     @example
     *     // Create many Candidates
     *     const candidate = await prisma.candidate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends candidateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, candidateCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Candidate.
     * @param {candidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     *
     **/
    delete<T extends candidateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, candidateDeleteArgs<ExtArgs>>,
    ): Prisma__candidateClient<$Result.GetResult<Prisma.$candidatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Candidate.
     * @param {candidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends candidateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, candidateUpdateArgs<ExtArgs>>,
    ): Prisma__candidateClient<$Result.GetResult<Prisma.$candidatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Candidates.
     * @param {candidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends candidateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, candidateDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends candidateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, candidateUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Candidate.
     * @param {candidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     **/
    upsert<T extends candidateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, candidateUpsertArgs<ExtArgs>>,
    ): Prisma__candidateClient<$Result.GetResult<Prisma.$candidatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
     **/
    count<T extends candidateCountArgs>(
      args?: Subset<T, candidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidateAggregateArgs>(
      args: Subset<T, CandidateAggregateArgs>,
    ): Prisma.PrismaPromise<GetCandidateAggregateType<T>>;

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidateGroupByArgs} args - Group by arguments.
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
      T extends candidateGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: candidateGroupByArgs['orderBy'] }
        : { orderBy?: candidateGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, candidateGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the candidate model
     */
    readonly fields: candidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__candidateClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    election<T extends electionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, electionDefaultArgs<ExtArgs>>,
    ): Prisma__electionClient<
      $Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    vote<T extends candidate$voteArgs<ExtArgs> = {}>(
      args?: Subset<T, candidate$voteArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the candidate model
   */
  interface candidateFieldRefs {
    readonly id: FieldRef<'candidate', 'String'>;
    readonly name: FieldRef<'candidate', 'String'>;
    readonly election_id: FieldRef<'candidate', 'String'>;
    readonly votes: FieldRef<'candidate', 'Int'>;
    readonly created_at: FieldRef<'candidate', 'DateTime'>;
    readonly updated_at: FieldRef<'candidate', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * candidate findUnique
   */
  export type candidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate
     */
    select?: candidateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: candidateInclude<ExtArgs> | null;
    /**
     * Filter, which candidate to fetch.
     */
    where: candidateWhereUniqueInput;
  };

  /**
   * candidate findUniqueOrThrow
   */
  export type candidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate
     */
    select?: candidateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: candidateInclude<ExtArgs> | null;
    /**
     * Filter, which candidate to fetch.
     */
    where: candidateWhereUniqueInput;
  };

  /**
   * candidate findFirst
   */
  export type candidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate
     */
    select?: candidateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: candidateInclude<ExtArgs> | null;
    /**
     * Filter, which candidate to fetch.
     */
    where?: candidateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidateOrderByWithRelationInput | candidateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for candidates.
     */
    cursor?: candidateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` candidates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[];
  };

  /**
   * candidate findFirstOrThrow
   */
  export type candidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate
     */
    select?: candidateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: candidateInclude<ExtArgs> | null;
    /**
     * Filter, which candidate to fetch.
     */
    where?: candidateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidateOrderByWithRelationInput | candidateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for candidates.
     */
    cursor?: candidateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` candidates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[];
  };

  /**
   * candidate findMany
   */
  export type candidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate
     */
    select?: candidateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: candidateInclude<ExtArgs> | null;
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidateOrderByWithRelationInput | candidateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing candidates.
     */
    cursor?: candidateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` candidates.
     */
    skip?: number;
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[];
  };

  /**
   * candidate create
   */
  export type candidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate
     */
    select?: candidateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: candidateInclude<ExtArgs> | null;
    /**
     * The data needed to create a candidate.
     */
    data: XOR<candidateCreateInput, candidateUncheckedCreateInput>;
  };

  /**
   * candidate createMany
   */
  export type candidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many candidates.
     */
    data: candidateCreateManyInput | candidateCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * candidate update
   */
  export type candidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate
     */
    select?: candidateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: candidateInclude<ExtArgs> | null;
    /**
     * The data needed to update a candidate.
     */
    data: XOR<candidateUpdateInput, candidateUncheckedUpdateInput>;
    /**
     * Choose, which candidate to update.
     */
    where: candidateWhereUniqueInput;
  };

  /**
   * candidate updateMany
   */
  export type candidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update candidates.
     */
    data: XOR<candidateUpdateManyMutationInput, candidateUncheckedUpdateManyInput>;
    /**
     * Filter which candidates to update
     */
    where?: candidateWhereInput;
  };

  /**
   * candidate upsert
   */
  export type candidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate
     */
    select?: candidateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: candidateInclude<ExtArgs> | null;
    /**
     * The filter to search for the candidate to update in case it exists.
     */
    where: candidateWhereUniqueInput;
    /**
     * In case the candidate found by the `where` argument doesn't exist, create a new candidate with this data.
     */
    create: XOR<candidateCreateInput, candidateUncheckedCreateInput>;
    /**
     * In case the candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<candidateUpdateInput, candidateUncheckedUpdateInput>;
  };

  /**
   * candidate delete
   */
  export type candidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate
     */
    select?: candidateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: candidateInclude<ExtArgs> | null;
    /**
     * Filter which candidate to delete.
     */
    where: candidateWhereUniqueInput;
  };

  /**
   * candidate deleteMany
   */
  export type candidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidates to delete
     */
    where?: candidateWhereInput;
  };

  /**
   * candidate.vote
   */
  export type candidate$voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    where?: voteWhereInput;
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[];
    cursor?: voteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * candidate without action
   */
  export type candidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate
     */
    select?: candidateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: candidateInclude<ExtArgs> | null;
  };

  /**
   * Model client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
  };

  export type ClientMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ClientMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ClientCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type ClientMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ClientMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ClientCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client to aggregate.
     */
    where?: clientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: clientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned clients
     **/
    _count?: true | ClientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClientMaxAggregateInputType;
  };

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
    [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>;
  };

  export type clientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput;
    orderBy?: clientOrderByWithAggregationInput | clientOrderByWithAggregationInput[];
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum;
    having?: clientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClientCountAggregateInputType | true;
    _min?: ClientMinAggregateInputType;
    _max?: ClientMaxAggregateInputType;
  };

  export type ClientGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: ClientCountAggregateOutputType | null;
    _min: ClientMinAggregateOutputType | null;
    _max: ClientMaxAggregateOutputType | null;
  };

  type GetClientGroupByPayload<T extends clientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ClientGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
          : GetScalarType<T[P], ClientGroupByOutputType[P]>;
      }
    >
  >;

  export type clientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      election?: boolean | client$electionArgs<ExtArgs>;
      _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['client']
  >;

  export type clientSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type clientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    election?: boolean | client$electionArgs<ExtArgs>;
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $clientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'client';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      election: Prisma.$electionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['client']
    >;
    composites: {};
  };

  type clientGetPayload<S extends boolean | null | undefined | clientDefaultArgs> = $Result.GetResult<
    Prisma.$clientPayload,
    S
  >;

  type clientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    clientFindManyArgs,
    'select' | 'include'
  > & {
    select?: ClientCountAggregateInputType | true;
  };

  export interface clientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['client']; meta: { name: 'client' } };
    /**
     * Find zero or one Client that matches the filter.
     * @param {clientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends clientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clientFindUniqueArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Client that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {clientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends clientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends clientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindFirstArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends clientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     *
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends clientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Client.
     * @param {clientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     *
     **/
    create<T extends clientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clientCreateArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Clients.
     *     @param {clientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends clientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Client.
     * @param {clientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     *
     **/
    delete<T extends clientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clientDeleteArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Client.
     * @param {clientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends clientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpdateArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Clients.
     * @param {clientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends clientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends clientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Client.
     * @param {clientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     **/
    upsert<T extends clientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpsertArgs<ExtArgs>>,
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
     **/
    count<T extends clientCountArgs>(
      args?: Subset<T, clientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(
      args: Subset<T, ClientAggregateArgs>,
    ): Prisma.PrismaPromise<GetClientAggregateType<T>>;

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientGroupByArgs} args - Group by arguments.
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
      T extends clientGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientGroupByArgs['orderBy'] }
        : { orderBy?: clientGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, clientGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the client model
     */
    readonly fields: clientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    election<T extends client$electionArgs<ExtArgs> = {}>(
      args?: Subset<T, client$electionArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the client model
   */
  interface clientFieldRefs {
    readonly id: FieldRef<'client', 'String'>;
    readonly description: FieldRef<'client', 'String'>;
    readonly name: FieldRef<'client', 'String'>;
    readonly created_at: FieldRef<'client', 'DateTime'>;
    readonly updated_at: FieldRef<'client', 'DateTime'>;
    readonly user_id: FieldRef<'client', 'String'>;
    readonly tenant_id: FieldRef<'client', 'String'>;
  }

  // Custom InputTypes

  /**
   * client findUnique
   */
  export type clientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput;
  };

  /**
   * client findUniqueOrThrow
   */
  export type clientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput;
  };

  /**
   * client findFirst
   */
  export type clientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * client findFirstOrThrow
   */
  export type clientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * client findMany
   */
  export type clientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter, which clients to fetch.
     */
    where?: clientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing clients.
     */
    cursor?: clientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clients.
     */
    skip?: number;
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * client create
   */
  export type clientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * The data needed to create a client.
     */
    data: XOR<clientCreateInput, clientUncheckedCreateInput>;
  };

  /**
   * client createMany
   */
  export type clientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * client update
   */
  export type clientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * The data needed to update a client.
     */
    data: XOR<clientUpdateInput, clientUncheckedUpdateInput>;
    /**
     * Choose, which client to update.
     */
    where: clientWhereUniqueInput;
  };

  /**
   * client updateMany
   */
  export type clientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyInput>;
    /**
     * Filter which clients to update
     */
    where?: clientWhereInput;
  };

  /**
   * client upsert
   */
  export type clientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * The filter to search for the client to update in case it exists.
     */
    where: clientWhereUniqueInput;
    /**
     * In case the client found by the `where` argument doesn't exist, create a new client with this data.
     */
    create: XOR<clientCreateInput, clientUncheckedCreateInput>;
    /**
     * In case the client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientUpdateInput, clientUncheckedUpdateInput>;
  };

  /**
   * client delete
   */
  export type clientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    /**
     * Filter which client to delete.
     */
    where: clientWhereUniqueInput;
  };

  /**
   * client deleteMany
   */
  export type clientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientWhereInput;
  };

  /**
   * client.election
   */
  export type client$electionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the election
     */
    select?: electionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: electionInclude<ExtArgs> | null;
    where?: electionWhereInput;
    orderBy?: electionOrderByWithRelationInput | electionOrderByWithRelationInput[];
    cursor?: electionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[];
  };

  /**
   * client without action
   */
  export type clientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
  };

  /**
   * Model election
   */

  export type AggregateElection = {
    _count: ElectionCountAggregateOutputType | null;
    _min: ElectionMinAggregateOutputType | null;
    _max: ElectionMaxAggregateOutputType | null;
  };

  export type ElectionMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    start_date: Date | null;
    end_date: Date | null;
    client_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ElectionMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    start_date: Date | null;
    end_date: Date | null;
    client_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ElectionCountAggregateOutputType = {
    id: number;
    title: number;
    start_date: number;
    end_date: number;
    client_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ElectionMinAggregateInputType = {
    id?: true;
    title?: true;
    start_date?: true;
    end_date?: true;
    client_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ElectionMaxAggregateInputType = {
    id?: true;
    title?: true;
    start_date?: true;
    end_date?: true;
    client_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ElectionCountAggregateInputType = {
    id?: true;
    title?: true;
    start_date?: true;
    end_date?: true;
    client_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ElectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which election to aggregate.
     */
    where?: electionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of elections to fetch.
     */
    orderBy?: electionOrderByWithRelationInput | electionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: electionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` elections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` elections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned elections
     **/
    _count?: true | ElectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ElectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ElectionMaxAggregateInputType;
  };

  export type GetElectionAggregateType<T extends ElectionAggregateArgs> = {
    [P in keyof T & keyof AggregateElection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElection[P]>
      : GetScalarType<T[P], AggregateElection[P]>;
  };

  export type electionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: electionWhereInput;
    orderBy?: electionOrderByWithAggregationInput | electionOrderByWithAggregationInput[];
    by: ElectionScalarFieldEnum[] | ElectionScalarFieldEnum;
    having?: electionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ElectionCountAggregateInputType | true;
    _min?: ElectionMinAggregateInputType;
    _max?: ElectionMaxAggregateInputType;
  };

  export type ElectionGroupByOutputType = {
    id: string;
    title: string;
    start_date: Date;
    end_date: Date;
    client_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ElectionCountAggregateOutputType | null;
    _min: ElectionMinAggregateOutputType | null;
    _max: ElectionMaxAggregateOutputType | null;
  };

  type GetElectionGroupByPayload<T extends electionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ElectionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ElectionGroupByOutputType[P]>
          : GetScalarType<T[P], ElectionGroupByOutputType[P]>;
      }
    >
  >;

  export type electionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        client_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        candidate?: boolean | election$candidateArgs<ExtArgs>;
        client?: boolean | clientDefaultArgs<ExtArgs>;
        vote?: boolean | election$voteArgs<ExtArgs>;
        _count?: boolean | ElectionCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['election']
    >;

  export type electionSelectScalar = {
    id?: boolean;
    title?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    client_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type electionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | election$candidateArgs<ExtArgs>;
    client?: boolean | clientDefaultArgs<ExtArgs>;
    vote?: boolean | election$voteArgs<ExtArgs>;
    _count?: boolean | ElectionCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $electionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'election';
    objects: {
      candidate: Prisma.$candidatePayload<ExtArgs>[];
      client: Prisma.$clientPayload<ExtArgs>;
      vote: Prisma.$votePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        start_date: Date;
        end_date: Date;
        client_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['election']
    >;
    composites: {};
  };

  type electionGetPayload<S extends boolean | null | undefined | electionDefaultArgs> = $Result.GetResult<
    Prisma.$electionPayload,
    S
  >;

  type electionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    electionFindManyArgs,
    'select' | 'include'
  > & {
    select?: ElectionCountAggregateInputType | true;
  };

  export interface electionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['election']; meta: { name: 'election' } };
    /**
     * Find zero or one Election that matches the filter.
     * @param {electionFindUniqueArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends electionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, electionFindUniqueArgs<ExtArgs>>,
    ): Prisma__electionClient<
      $Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Election that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {electionFindUniqueOrThrowArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends electionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, electionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__electionClient<
      $Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Election that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionFindFirstArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends electionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, electionFindFirstArgs<ExtArgs>>,
    ): Prisma__electionClient<
      $Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Election that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionFindFirstOrThrowArgs} args - Arguments to find a Election
     * @example
     * // Get one Election
     * const election = await prisma.election.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends electionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, electionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__electionClient<
      $Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Elections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elections
     * const elections = await prisma.election.findMany()
     *
     * // Get first 10 Elections
     * const elections = await prisma.election.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const electionWithIdOnly = await prisma.election.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends electionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, electionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Election.
     * @param {electionCreateArgs} args - Arguments to create a Election.
     * @example
     * // Create one Election
     * const Election = await prisma.election.create({
     *   data: {
     *     // ... data to create a Election
     *   }
     * })
     *
     **/
    create<T extends electionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, electionCreateArgs<ExtArgs>>,
    ): Prisma__electionClient<$Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Elections.
     *     @param {electionCreateManyArgs} args - Arguments to create many Elections.
     *     @example
     *     // Create many Elections
     *     const election = await prisma.election.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends electionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, electionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Election.
     * @param {electionDeleteArgs} args - Arguments to delete one Election.
     * @example
     * // Delete one Election
     * const Election = await prisma.election.delete({
     *   where: {
     *     // ... filter to delete one Election
     *   }
     * })
     *
     **/
    delete<T extends electionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, electionDeleteArgs<ExtArgs>>,
    ): Prisma__electionClient<$Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Election.
     * @param {electionUpdateArgs} args - Arguments to update one Election.
     * @example
     * // Update one Election
     * const election = await prisma.election.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends electionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, electionUpdateArgs<ExtArgs>>,
    ): Prisma__electionClient<$Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Elections.
     * @param {electionDeleteManyArgs} args - Arguments to filter Elections to delete.
     * @example
     * // Delete a few Elections
     * const { count } = await prisma.election.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends electionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, electionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elections
     * const election = await prisma.election.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends electionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, electionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Election.
     * @param {electionUpsertArgs} args - Arguments to update or create a Election.
     * @example
     * // Update or create a Election
     * const election = await prisma.election.upsert({
     *   create: {
     *     // ... data to create a Election
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Election we want to update
     *   }
     * })
     **/
    upsert<T extends electionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, electionUpsertArgs<ExtArgs>>,
    ): Prisma__electionClient<$Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionCountArgs} args - Arguments to filter Elections to count.
     * @example
     * // Count the number of Elections
     * const count = await prisma.election.count({
     *   where: {
     *     // ... the filter for the Elections we want to count
     *   }
     * })
     **/
    count<T extends electionCountArgs>(
      args?: Subset<T, electionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Election.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ElectionAggregateArgs>(
      args: Subset<T, ElectionAggregateArgs>,
    ): Prisma.PrismaPromise<GetElectionAggregateType<T>>;

    /**
     * Group by Election.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionGroupByArgs} args - Group by arguments.
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
      T extends electionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: electionGroupByArgs['orderBy'] }
        : { orderBy?: electionGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, electionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetElectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the election model
     */
    readonly fields: electionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for election.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__electionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    candidate<T extends election$candidateArgs<ExtArgs> = {}>(
      args?: Subset<T, election$candidateArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatePayload<ExtArgs>, T, 'findMany'> | Null>;

    client<T extends clientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, clientDefaultArgs<ExtArgs>>,
    ): Prisma__clientClient<
      $Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    vote<T extends election$voteArgs<ExtArgs> = {}>(
      args?: Subset<T, election$voteArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the election model
   */
  interface electionFieldRefs {
    readonly id: FieldRef<'election', 'String'>;
    readonly title: FieldRef<'election', 'String'>;
    readonly start_date: FieldRef<'election', 'DateTime'>;
    readonly end_date: FieldRef<'election', 'DateTime'>;
    readonly client_id: FieldRef<'election', 'String'>;
    readonly created_at: FieldRef<'election', 'DateTime'>;
    readonly updated_at: FieldRef<'election', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * election findUnique
   */
  export type electionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the election
     */
    select?: electionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: electionInclude<ExtArgs> | null;
    /**
     * Filter, which election to fetch.
     */
    where: electionWhereUniqueInput;
  };

  /**
   * election findUniqueOrThrow
   */
  export type electionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the election
     */
    select?: electionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: electionInclude<ExtArgs> | null;
    /**
     * Filter, which election to fetch.
     */
    where: electionWhereUniqueInput;
  };

  /**
   * election findFirst
   */
  export type electionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the election
     */
    select?: electionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: electionInclude<ExtArgs> | null;
    /**
     * Filter, which election to fetch.
     */
    where?: electionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of elections to fetch.
     */
    orderBy?: electionOrderByWithRelationInput | electionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for elections.
     */
    cursor?: electionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` elections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` elections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of elections.
     */
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[];
  };

  /**
   * election findFirstOrThrow
   */
  export type electionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the election
     */
    select?: electionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: electionInclude<ExtArgs> | null;
    /**
     * Filter, which election to fetch.
     */
    where?: electionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of elections to fetch.
     */
    orderBy?: electionOrderByWithRelationInput | electionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for elections.
     */
    cursor?: electionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` elections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` elections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of elections.
     */
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[];
  };

  /**
   * election findMany
   */
  export type electionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the election
     */
    select?: electionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: electionInclude<ExtArgs> | null;
    /**
     * Filter, which elections to fetch.
     */
    where?: electionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of elections to fetch.
     */
    orderBy?: electionOrderByWithRelationInput | electionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing elections.
     */
    cursor?: electionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` elections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` elections.
     */
    skip?: number;
    distinct?: ElectionScalarFieldEnum | ElectionScalarFieldEnum[];
  };

  /**
   * election create
   */
  export type electionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the election
     */
    select?: electionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: electionInclude<ExtArgs> | null;
    /**
     * The data needed to create a election.
     */
    data: XOR<electionCreateInput, electionUncheckedCreateInput>;
  };

  /**
   * election createMany
   */
  export type electionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many elections.
     */
    data: electionCreateManyInput | electionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * election update
   */
  export type electionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the election
     */
    select?: electionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: electionInclude<ExtArgs> | null;
    /**
     * The data needed to update a election.
     */
    data: XOR<electionUpdateInput, electionUncheckedUpdateInput>;
    /**
     * Choose, which election to update.
     */
    where: electionWhereUniqueInput;
  };

  /**
   * election updateMany
   */
  export type electionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update elections.
     */
    data: XOR<electionUpdateManyMutationInput, electionUncheckedUpdateManyInput>;
    /**
     * Filter which elections to update
     */
    where?: electionWhereInput;
  };

  /**
   * election upsert
   */
  export type electionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the election
     */
    select?: electionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: electionInclude<ExtArgs> | null;
    /**
     * The filter to search for the election to update in case it exists.
     */
    where: electionWhereUniqueInput;
    /**
     * In case the election found by the `where` argument doesn't exist, create a new election with this data.
     */
    create: XOR<electionCreateInput, electionUncheckedCreateInput>;
    /**
     * In case the election was found with the provided `where` argument, update it with this data.
     */
    update: XOR<electionUpdateInput, electionUncheckedUpdateInput>;
  };

  /**
   * election delete
   */
  export type electionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the election
     */
    select?: electionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: electionInclude<ExtArgs> | null;
    /**
     * Filter which election to delete.
     */
    where: electionWhereUniqueInput;
  };

  /**
   * election deleteMany
   */
  export type electionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which elections to delete
     */
    where?: electionWhereInput;
  };

  /**
   * election.candidate
   */
  export type election$candidateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidate
     */
    select?: candidateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: candidateInclude<ExtArgs> | null;
    where?: candidateWhereInput;
    orderBy?: candidateOrderByWithRelationInput | candidateOrderByWithRelationInput[];
    cursor?: candidateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[];
  };

  /**
   * election.vote
   */
  export type election$voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    where?: voteWhereInput;
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[];
    cursor?: voteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * election without action
   */
  export type electionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the election
     */
    select?: electionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: electionInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      audit_log?: boolean | user$audit_logArgs<ExtArgs>;
      client?: boolean | user$clientArgs<ExtArgs>;
      vote?: boolean | user$voteArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_log?: boolean | user$audit_logArgs<ExtArgs>;
    client?: boolean | user$clientArgs<ExtArgs>;
    vote?: boolean | user$voteArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      audit_log: Prisma.$audit_logPayload<ExtArgs>[];
      client: Prisma.$clientPayload<ExtArgs>[];
      vote: Prisma.$votePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    audit_log<T extends user$audit_logArgs<ExtArgs> = {}>(
      args?: Subset<T, user$audit_logArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, 'findMany'> | Null>;

    client<T extends user$clientArgs<ExtArgs> = {}>(
      args?: Subset<T, user$clientArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findMany'> | Null>;

    vote<T extends user$voteArgs<ExtArgs> = {}>(
      args?: Subset<T, user$voteArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.audit_log
   */
  export type user$audit_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_log
     */
    select?: audit_logSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: audit_logInclude<ExtArgs> | null;
    where?: audit_logWhereInput;
    orderBy?: audit_logOrderByWithRelationInput | audit_logOrderByWithRelationInput[];
    cursor?: audit_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Audit_logScalarFieldEnum | Audit_logScalarFieldEnum[];
  };

  /**
   * user.client
   */
  export type user$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clientInclude<ExtArgs> | null;
    where?: clientWhereInput;
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[];
    cursor?: clientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[];
  };

  /**
   * user.vote
   */
  export type user$voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    where?: voteWhereInput;
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[];
    cursor?: voteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Model vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null;
    _min: VoteMinAggregateOutputType | null;
    _max: VoteMaxAggregateOutputType | null;
  };

  export type VoteMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    candidate_id: string | null;
    election_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VoteMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    candidate_id: string | null;
    election_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type VoteCountAggregateOutputType = {
    id: number;
    user_id: number;
    candidate_id: number;
    election_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type VoteMinAggregateInputType = {
    id?: true;
    user_id?: true;
    candidate_id?: true;
    election_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VoteMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    candidate_id?: true;
    election_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type VoteCountAggregateInputType = {
    id?: true;
    user_id?: true;
    candidate_id?: true;
    election_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vote to aggregate.
     */
    where?: voteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: voteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` votes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` votes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned votes
     **/
    _count?: true | VoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VoteMaxAggregateInputType;
  };

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
    [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>;
  };

  export type voteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voteWhereInput;
    orderBy?: voteOrderByWithAggregationInput | voteOrderByWithAggregationInput[];
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum;
    having?: voteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VoteCountAggregateInputType | true;
    _min?: VoteMinAggregateInputType;
    _max?: VoteMaxAggregateInputType;
  };

  export type VoteGroupByOutputType = {
    id: string;
    user_id: string;
    candidate_id: string;
    election_id: string;
    created_at: Date;
    updated_at: Date;
    _count: VoteCountAggregateOutputType | null;
    _min: VoteMinAggregateOutputType | null;
    _max: VoteMaxAggregateOutputType | null;
  };

  type GetVoteGroupByPayload<T extends voteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> & {
        [P in keyof T & keyof VoteGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
          : GetScalarType<T[P], VoteGroupByOutputType[P]>;
      }
    >
  >;

  export type voteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      candidate_id?: boolean;
      election_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      candidate?: boolean | candidateDefaultArgs<ExtArgs>;
      election?: boolean | electionDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['vote']
  >;

  export type voteSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    candidate_id?: boolean;
    election_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type voteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | candidateDefaultArgs<ExtArgs>;
    election?: boolean | electionDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $votePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'vote';
    objects: {
      candidate: Prisma.$candidatePayload<ExtArgs>;
      election: Prisma.$electionPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        candidate_id: string;
        election_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['vote']
    >;
    composites: {};
  };

  type voteGetPayload<S extends boolean | null | undefined | voteDefaultArgs> = $Result.GetResult<
    Prisma.$votePayload,
    S
  >;

  type voteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    voteFindManyArgs,
    'select' | 'include'
  > & {
    select?: VoteCountAggregateInputType | true;
  };

  export interface voteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vote']; meta: { name: 'vote' } };
    /**
     * Find zero or one Vote that matches the filter.
     * @param {voteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends voteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, voteFindUniqueArgs<ExtArgs>>,
    ): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Vote that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {voteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends voteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, voteFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends voteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, voteFindFirstArgs<ExtArgs>>,
    ): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends voteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, voteFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     *
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends voteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, voteFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Vote.
     * @param {voteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     *
     **/
    create<T extends voteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, voteCreateArgs<ExtArgs>>,
    ): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Votes.
     *     @param {voteCreateManyArgs} args - Arguments to create many Votes.
     *     @example
     *     // Create many Votes
     *     const vote = await prisma.vote.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends voteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, voteCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Vote.
     * @param {voteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     *
     **/
    delete<T extends voteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, voteDeleteArgs<ExtArgs>>,
    ): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Vote.
     * @param {voteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends voteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, voteUpdateArgs<ExtArgs>>,
    ): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Votes.
     * @param {voteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends voteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, voteDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends voteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, voteUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Vote.
     * @param {voteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     **/
    upsert<T extends voteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, voteUpsertArgs<ExtArgs>>,
    ): Prisma__voteClient<$Result.GetResult<Prisma.$votePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
     **/
    count<T extends voteCountArgs>(
      args?: Subset<T, voteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoteAggregateArgs>(
      args: Subset<T, VoteAggregateArgs>,
    ): Prisma.PrismaPromise<GetVoteAggregateType<T>>;

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voteGroupByArgs} args - Group by arguments.
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
      T extends voteGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: voteGroupByArgs['orderBy'] }
        : { orderBy?: voteGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, voteGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the vote model
     */
    readonly fields: voteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__voteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    candidate<T extends candidateDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, candidateDefaultArgs<ExtArgs>>,
    ): Prisma__candidateClient<
      $Result.GetResult<Prisma.$candidatePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    election<T extends electionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, electionDefaultArgs<ExtArgs>>,
    ): Prisma__electionClient<
      $Result.GetResult<Prisma.$electionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the vote model
   */
  interface voteFieldRefs {
    readonly id: FieldRef<'vote', 'String'>;
    readonly user_id: FieldRef<'vote', 'String'>;
    readonly candidate_id: FieldRef<'vote', 'String'>;
    readonly election_id: FieldRef<'vote', 'String'>;
    readonly created_at: FieldRef<'vote', 'DateTime'>;
    readonly updated_at: FieldRef<'vote', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * vote findUnique
   */
  export type voteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    /**
     * Filter, which vote to fetch.
     */
    where: voteWhereUniqueInput;
  };

  /**
   * vote findUniqueOrThrow
   */
  export type voteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    /**
     * Filter, which vote to fetch.
     */
    where: voteWhereUniqueInput;
  };

  /**
   * vote findFirst
   */
  export type voteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    /**
     * Filter, which vote to fetch.
     */
    where?: voteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for votes.
     */
    cursor?: voteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` votes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` votes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * vote findFirstOrThrow
   */
  export type voteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    /**
     * Filter, which vote to fetch.
     */
    where?: voteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for votes.
     */
    cursor?: voteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` votes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` votes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * vote findMany
   */
  export type voteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    /**
     * Filter, which votes to fetch.
     */
    where?: voteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of votes to fetch.
     */
    orderBy?: voteOrderByWithRelationInput | voteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing votes.
     */
    cursor?: voteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` votes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` votes.
     */
    skip?: number;
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[];
  };

  /**
   * vote create
   */
  export type voteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    /**
     * The data needed to create a vote.
     */
    data: XOR<voteCreateInput, voteUncheckedCreateInput>;
  };

  /**
   * vote createMany
   */
  export type voteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many votes.
     */
    data: voteCreateManyInput | voteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * vote update
   */
  export type voteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    /**
     * The data needed to update a vote.
     */
    data: XOR<voteUpdateInput, voteUncheckedUpdateInput>;
    /**
     * Choose, which vote to update.
     */
    where: voteWhereUniqueInput;
  };

  /**
   * vote updateMany
   */
  export type voteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update votes.
     */
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyInput>;
    /**
     * Filter which votes to update
     */
    where?: voteWhereInput;
  };

  /**
   * vote upsert
   */
  export type voteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    /**
     * The filter to search for the vote to update in case it exists.
     */
    where: voteWhereUniqueInput;
    /**
     * In case the vote found by the `where` argument doesn't exist, create a new vote with this data.
     */
    create: XOR<voteCreateInput, voteUncheckedCreateInput>;
    /**
     * In case the vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<voteUpdateInput, voteUncheckedUpdateInput>;
  };

  /**
   * vote delete
   */
  export type voteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
    /**
     * Filter which vote to delete.
     */
    where: voteWhereUniqueInput;
  };

  /**
   * vote deleteMany
   */
  export type voteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which votes to delete
     */
    where?: voteWhereInput;
  };

  /**
   * vote without action
   */
  export type voteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vote
     */
    select?: voteSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: voteInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Audit_logScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    action: 'action';
    description: 'description';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Audit_logScalarFieldEnum = (typeof Audit_logScalarFieldEnum)[keyof typeof Audit_logScalarFieldEnum];

  export const CandidateScalarFieldEnum: {
    id: 'id';
    name: 'name';
    election_id: 'election_id';
    votes: 'votes';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum];

  export const ClientScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum];

  export const ElectionScalarFieldEnum: {
    id: 'id';
    title: 'title';
    start_date: 'start_date';
    end_date: 'end_date';
    client_id: 'client_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ElectionScalarFieldEnum = (typeof ElectionScalarFieldEnum)[keyof typeof ElectionScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const VoteScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    candidate_id: 'candidate_id';
    election_id: 'election_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type audit_logWhereInput = {
    AND?: audit_logWhereInput | audit_logWhereInput[];
    OR?: audit_logWhereInput[];
    NOT?: audit_logWhereInput | audit_logWhereInput[];
    id?: UuidFilter<'audit_log'> | string;
    user_id?: UuidFilter<'audit_log'> | string;
    action?: StringFilter<'audit_log'> | string;
    description?: StringNullableFilter<'audit_log'> | string | null;
    created_at?: DateTimeFilter<'audit_log'> | Date | string;
    updated_at?: DateTimeFilter<'audit_log'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type audit_logOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    action?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type audit_logWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: audit_logWhereInput | audit_logWhereInput[];
      OR?: audit_logWhereInput[];
      NOT?: audit_logWhereInput | audit_logWhereInput[];
      user_id?: UuidFilter<'audit_log'> | string;
      action?: StringFilter<'audit_log'> | string;
      description?: StringNullableFilter<'audit_log'> | string | null;
      created_at?: DateTimeFilter<'audit_log'> | Date | string;
      updated_at?: DateTimeFilter<'audit_log'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type audit_logOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    action?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: audit_logCountOrderByAggregateInput;
    _max?: audit_logMaxOrderByAggregateInput;
    _min?: audit_logMinOrderByAggregateInput;
  };

  export type audit_logScalarWhereWithAggregatesInput = {
    AND?: audit_logScalarWhereWithAggregatesInput | audit_logScalarWhereWithAggregatesInput[];
    OR?: audit_logScalarWhereWithAggregatesInput[];
    NOT?: audit_logScalarWhereWithAggregatesInput | audit_logScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'audit_log'> | string;
    user_id?: UuidWithAggregatesFilter<'audit_log'> | string;
    action?: StringWithAggregatesFilter<'audit_log'> | string;
    description?: StringNullableWithAggregatesFilter<'audit_log'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'audit_log'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'audit_log'> | Date | string;
  };

  export type candidateWhereInput = {
    AND?: candidateWhereInput | candidateWhereInput[];
    OR?: candidateWhereInput[];
    NOT?: candidateWhereInput | candidateWhereInput[];
    id?: UuidFilter<'candidate'> | string;
    name?: StringFilter<'candidate'> | string;
    election_id?: UuidFilter<'candidate'> | string;
    votes?: IntFilter<'candidate'> | number;
    created_at?: DateTimeFilter<'candidate'> | Date | string;
    updated_at?: DateTimeFilter<'candidate'> | Date | string;
    election?: XOR<ElectionRelationFilter, electionWhereInput>;
    vote?: VoteListRelationFilter;
  };

  export type candidateOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    election_id?: SortOrder;
    votes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    election?: electionOrderByWithRelationInput;
    vote?: voteOrderByRelationAggregateInput;
  };

  export type candidateWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: candidateWhereInput | candidateWhereInput[];
      OR?: candidateWhereInput[];
      NOT?: candidateWhereInput | candidateWhereInput[];
      name?: StringFilter<'candidate'> | string;
      election_id?: UuidFilter<'candidate'> | string;
      votes?: IntFilter<'candidate'> | number;
      created_at?: DateTimeFilter<'candidate'> | Date | string;
      updated_at?: DateTimeFilter<'candidate'> | Date | string;
      election?: XOR<ElectionRelationFilter, electionWhereInput>;
      vote?: VoteListRelationFilter;
    },
    'id'
  >;

  export type candidateOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    election_id?: SortOrder;
    votes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: candidateCountOrderByAggregateInput;
    _avg?: candidateAvgOrderByAggregateInput;
    _max?: candidateMaxOrderByAggregateInput;
    _min?: candidateMinOrderByAggregateInput;
    _sum?: candidateSumOrderByAggregateInput;
  };

  export type candidateScalarWhereWithAggregatesInput = {
    AND?: candidateScalarWhereWithAggregatesInput | candidateScalarWhereWithAggregatesInput[];
    OR?: candidateScalarWhereWithAggregatesInput[];
    NOT?: candidateScalarWhereWithAggregatesInput | candidateScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'candidate'> | string;
    name?: StringWithAggregatesFilter<'candidate'> | string;
    election_id?: UuidWithAggregatesFilter<'candidate'> | string;
    votes?: IntWithAggregatesFilter<'candidate'> | number;
    created_at?: DateTimeWithAggregatesFilter<'candidate'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'candidate'> | Date | string;
  };

  export type clientWhereInput = {
    AND?: clientWhereInput | clientWhereInput[];
    OR?: clientWhereInput[];
    NOT?: clientWhereInput | clientWhereInput[];
    id?: UuidFilter<'client'> | string;
    description?: StringNullableFilter<'client'> | string | null;
    name?: StringFilter<'client'> | string;
    created_at?: DateTimeFilter<'client'> | Date | string;
    updated_at?: DateTimeFilter<'client'> | Date | string;
    user_id?: UuidFilter<'client'> | string;
    tenant_id?: StringFilter<'client'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    election?: ElectionListRelationFilter;
  };

  export type clientOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    election?: electionOrderByRelationAggregateInput;
  };

  export type clientWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: clientWhereInput | clientWhereInput[];
      OR?: clientWhereInput[];
      NOT?: clientWhereInput | clientWhereInput[];
      description?: StringNullableFilter<'client'> | string | null;
      name?: StringFilter<'client'> | string;
      created_at?: DateTimeFilter<'client'> | Date | string;
      updated_at?: DateTimeFilter<'client'> | Date | string;
      user_id?: UuidFilter<'client'> | string;
      tenant_id?: StringFilter<'client'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      election?: ElectionListRelationFilter;
    },
    'id'
  >;

  export type clientOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: clientCountOrderByAggregateInput;
    _max?: clientMaxOrderByAggregateInput;
    _min?: clientMinOrderByAggregateInput;
  };

  export type clientScalarWhereWithAggregatesInput = {
    AND?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[];
    OR?: clientScalarWhereWithAggregatesInput[];
    NOT?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'client'> | string;
    description?: StringNullableWithAggregatesFilter<'client'> | string | null;
    name?: StringWithAggregatesFilter<'client'> | string;
    created_at?: DateTimeWithAggregatesFilter<'client'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'client'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'client'> | string;
    tenant_id?: StringWithAggregatesFilter<'client'> | string;
  };

  export type electionWhereInput = {
    AND?: electionWhereInput | electionWhereInput[];
    OR?: electionWhereInput[];
    NOT?: electionWhereInput | electionWhereInput[];
    id?: UuidFilter<'election'> | string;
    title?: StringFilter<'election'> | string;
    start_date?: DateTimeFilter<'election'> | Date | string;
    end_date?: DateTimeFilter<'election'> | Date | string;
    client_id?: UuidFilter<'election'> | string;
    created_at?: DateTimeFilter<'election'> | Date | string;
    updated_at?: DateTimeFilter<'election'> | Date | string;
    candidate?: CandidateListRelationFilter;
    client?: XOR<ClientRelationFilter, clientWhereInput>;
    vote?: VoteListRelationFilter;
  };

  export type electionOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    candidate?: candidateOrderByRelationAggregateInput;
    client?: clientOrderByWithRelationInput;
    vote?: voteOrderByRelationAggregateInput;
  };

  export type electionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: electionWhereInput | electionWhereInput[];
      OR?: electionWhereInput[];
      NOT?: electionWhereInput | electionWhereInput[];
      title?: StringFilter<'election'> | string;
      start_date?: DateTimeFilter<'election'> | Date | string;
      end_date?: DateTimeFilter<'election'> | Date | string;
      client_id?: UuidFilter<'election'> | string;
      created_at?: DateTimeFilter<'election'> | Date | string;
      updated_at?: DateTimeFilter<'election'> | Date | string;
      candidate?: CandidateListRelationFilter;
      client?: XOR<ClientRelationFilter, clientWhereInput>;
      vote?: VoteListRelationFilter;
    },
    'id'
  >;

  export type electionOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: electionCountOrderByAggregateInput;
    _max?: electionMaxOrderByAggregateInput;
    _min?: electionMinOrderByAggregateInput;
  };

  export type electionScalarWhereWithAggregatesInput = {
    AND?: electionScalarWhereWithAggregatesInput | electionScalarWhereWithAggregatesInput[];
    OR?: electionScalarWhereWithAggregatesInput[];
    NOT?: electionScalarWhereWithAggregatesInput | electionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'election'> | string;
    title?: StringWithAggregatesFilter<'election'> | string;
    start_date?: DateTimeWithAggregatesFilter<'election'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'election'> | Date | string;
    client_id?: UuidWithAggregatesFilter<'election'> | string;
    created_at?: DateTimeWithAggregatesFilter<'election'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'election'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    audit_log?: Audit_logListRelationFilter;
    client?: ClientListRelationFilter;
    vote?: VoteListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    audit_log?: audit_logOrderByRelationAggregateInput;
    client?: clientOrderByRelationAggregateInput;
    vote?: voteOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      audit_log?: Audit_logListRelationFilter;
      client?: ClientListRelationFilter;
      vote?: VoteListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type voteWhereInput = {
    AND?: voteWhereInput | voteWhereInput[];
    OR?: voteWhereInput[];
    NOT?: voteWhereInput | voteWhereInput[];
    id?: UuidFilter<'vote'> | string;
    user_id?: UuidFilter<'vote'> | string;
    candidate_id?: UuidFilter<'vote'> | string;
    election_id?: UuidFilter<'vote'> | string;
    created_at?: DateTimeFilter<'vote'> | Date | string;
    updated_at?: DateTimeFilter<'vote'> | Date | string;
    candidate?: XOR<CandidateRelationFilter, candidateWhereInput>;
    election?: XOR<ElectionRelationFilter, electionWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type voteOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    candidate_id?: SortOrder;
    election_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    candidate?: candidateOrderByWithRelationInput;
    election?: electionOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type voteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: voteWhereInput | voteWhereInput[];
      OR?: voteWhereInput[];
      NOT?: voteWhereInput | voteWhereInput[];
      user_id?: UuidFilter<'vote'> | string;
      candidate_id?: UuidFilter<'vote'> | string;
      election_id?: UuidFilter<'vote'> | string;
      created_at?: DateTimeFilter<'vote'> | Date | string;
      updated_at?: DateTimeFilter<'vote'> | Date | string;
      candidate?: XOR<CandidateRelationFilter, candidateWhereInput>;
      election?: XOR<ElectionRelationFilter, electionWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type voteOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    candidate_id?: SortOrder;
    election_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: voteCountOrderByAggregateInput;
    _max?: voteMaxOrderByAggregateInput;
    _min?: voteMinOrderByAggregateInput;
  };

  export type voteScalarWhereWithAggregatesInput = {
    AND?: voteScalarWhereWithAggregatesInput | voteScalarWhereWithAggregatesInput[];
    OR?: voteScalarWhereWithAggregatesInput[];
    NOT?: voteScalarWhereWithAggregatesInput | voteScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'vote'> | string;
    user_id?: UuidWithAggregatesFilter<'vote'> | string;
    candidate_id?: UuidWithAggregatesFilter<'vote'> | string;
    election_id?: UuidWithAggregatesFilter<'vote'> | string;
    created_at?: DateTimeWithAggregatesFilter<'vote'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'vote'> | Date | string;
  };

  export type audit_logCreateInput = {
    id?: string;
    action: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAudit_logInput;
  };

  export type audit_logUncheckedCreateInput = {
    id?: string;
    user_id: string;
    action: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAudit_logNestedInput;
  };

  export type audit_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_logCreateManyInput = {
    id?: string;
    user_id: string;
    action: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type candidateCreateInput = {
    id?: string;
    name: string;
    votes?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    election: electionCreateNestedOneWithoutCandidateInput;
    vote?: voteCreateNestedManyWithoutCandidateInput;
  };

  export type candidateUncheckedCreateInput = {
    id?: string;
    name: string;
    election_id: string;
    votes?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    vote?: voteUncheckedCreateNestedManyWithoutCandidateInput;
  };

  export type candidateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    votes?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    election?: electionUpdateOneRequiredWithoutCandidateNestedInput;
    vote?: voteUpdateManyWithoutCandidateNestedInput;
  };

  export type candidateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    election_id?: StringFieldUpdateOperationsInput | string;
    votes?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: voteUncheckedUpdateManyWithoutCandidateNestedInput;
  };

  export type candidateCreateManyInput = {
    id?: string;
    name: string;
    election_id: string;
    votes?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type candidateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    votes?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type candidateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    election_id?: StringFieldUpdateOperationsInput | string;
    votes?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type clientCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutClientInput;
    election?: electionCreateNestedManyWithoutClientInput;
  };

  export type clientUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    election?: electionUncheckedCreateNestedManyWithoutClientInput;
  };

  export type clientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutClientNestedInput;
    election?: electionUpdateManyWithoutClientNestedInput;
  };

  export type clientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    election?: electionUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type clientCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type clientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type clientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type electionCreateInput = {
    id?: string;
    title: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    candidate?: candidateCreateNestedManyWithoutElectionInput;
    client: clientCreateNestedOneWithoutElectionInput;
    vote?: voteCreateNestedManyWithoutElectionInput;
  };

  export type electionUncheckedCreateInput = {
    id?: string;
    title: string;
    start_date: Date | string;
    end_date: Date | string;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    candidate?: candidateUncheckedCreateNestedManyWithoutElectionInput;
    vote?: voteUncheckedCreateNestedManyWithoutElectionInput;
  };

  export type electionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: candidateUpdateManyWithoutElectionNestedInput;
    client?: clientUpdateOneRequiredWithoutElectionNestedInput;
    vote?: voteUpdateManyWithoutElectionNestedInput;
  };

  export type electionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: candidateUncheckedUpdateManyWithoutElectionNestedInput;
    vote?: voteUncheckedUpdateManyWithoutElectionNestedInput;
  };

  export type electionCreateManyInput = {
    id?: string;
    title: string;
    start_date: Date | string;
    end_date: Date | string;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type electionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type electionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_log?: audit_logCreateNestedManyWithoutUserInput;
    client?: clientCreateNestedManyWithoutUserInput;
    vote?: voteCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput;
    client?: clientUncheckedCreateNestedManyWithoutUserInput;
    vote?: voteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: audit_logUpdateManyWithoutUserNestedInput;
    client?: clientUpdateManyWithoutUserNestedInput;
    vote?: voteUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput;
    client?: clientUncheckedUpdateManyWithoutUserNestedInput;
    vote?: voteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type voteCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    candidate: candidateCreateNestedOneWithoutVoteInput;
    election: electionCreateNestedOneWithoutVoteInput;
    user: userCreateNestedOneWithoutVoteInput;
  };

  export type voteUncheckedCreateInput = {
    id?: string;
    user_id: string;
    candidate_id: string;
    election_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type voteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: candidateUpdateOneRequiredWithoutVoteNestedInput;
    election?: electionUpdateOneRequiredWithoutVoteNestedInput;
    user?: userUpdateOneRequiredWithoutVoteNestedInput;
  };

  export type voteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    candidate_id?: StringFieldUpdateOperationsInput | string;
    election_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type voteCreateManyInput = {
    id?: string;
    user_id: string;
    candidate_id: string;
    election_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type voteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type voteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    candidate_id?: StringFieldUpdateOperationsInput | string;
    election_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type audit_logCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    action?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_logMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    action?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type audit_logMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    action?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type ElectionRelationFilter = {
    is?: electionWhereInput;
    isNot?: electionWhereInput;
  };

  export type VoteListRelationFilter = {
    every?: voteWhereInput;
    some?: voteWhereInput;
    none?: voteWhereInput;
  };

  export type voteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type candidateCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    election_id?: SortOrder;
    votes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type candidateAvgOrderByAggregateInput = {
    votes?: SortOrder;
  };

  export type candidateMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    election_id?: SortOrder;
    votes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type candidateMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    election_id?: SortOrder;
    votes?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type candidateSumOrderByAggregateInput = {
    votes?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type ElectionListRelationFilter = {
    every?: electionWhereInput;
    some?: electionWhereInput;
    none?: electionWhereInput;
  };

  export type electionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type clientCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clientMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clientMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type CandidateListRelationFilter = {
    every?: candidateWhereInput;
    some?: candidateWhereInput;
    none?: candidateWhereInput;
  };

  export type ClientRelationFilter = {
    is?: clientWhereInput;
    isNot?: clientWhereInput;
  };

  export type candidateOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type electionCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type electionMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type electionMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    client_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Audit_logListRelationFilter = {
    every?: audit_logWhereInput;
    some?: audit_logWhereInput;
    none?: audit_logWhereInput;
  };

  export type ClientListRelationFilter = {
    every?: clientWhereInput;
    some?: clientWhereInput;
    none?: clientWhereInput;
  };

  export type audit_logOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type clientOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CandidateRelationFilter = {
    is?: candidateWhereInput;
    isNot?: candidateWhereInput;
  };

  export type voteCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    candidate_id?: SortOrder;
    election_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type voteMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    candidate_id?: SortOrder;
    election_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type voteMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    candidate_id?: SortOrder;
    election_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutAudit_logInput = {
    create?: XOR<userCreateWithoutAudit_logInput, userUncheckedCreateWithoutAudit_logInput>;
    connectOrCreate?: userCreateOrConnectWithoutAudit_logInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutAudit_logNestedInput = {
    create?: XOR<userCreateWithoutAudit_logInput, userUncheckedCreateWithoutAudit_logInput>;
    connectOrCreate?: userCreateOrConnectWithoutAudit_logInput;
    upsert?: userUpsertWithoutAudit_logInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAudit_logInput, userUpdateWithoutAudit_logInput>,
      userUncheckedUpdateWithoutAudit_logInput
    >;
  };

  export type electionCreateNestedOneWithoutCandidateInput = {
    create?: XOR<electionCreateWithoutCandidateInput, electionUncheckedCreateWithoutCandidateInput>;
    connectOrCreate?: electionCreateOrConnectWithoutCandidateInput;
    connect?: electionWhereUniqueInput;
  };

  export type voteCreateNestedManyWithoutCandidateInput = {
    create?:
      | XOR<voteCreateWithoutCandidateInput, voteUncheckedCreateWithoutCandidateInput>
      | voteCreateWithoutCandidateInput[]
      | voteUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?: voteCreateOrConnectWithoutCandidateInput | voteCreateOrConnectWithoutCandidateInput[];
    createMany?: voteCreateManyCandidateInputEnvelope;
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
  };

  export type voteUncheckedCreateNestedManyWithoutCandidateInput = {
    create?:
      | XOR<voteCreateWithoutCandidateInput, voteUncheckedCreateWithoutCandidateInput>
      | voteCreateWithoutCandidateInput[]
      | voteUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?: voteCreateOrConnectWithoutCandidateInput | voteCreateOrConnectWithoutCandidateInput[];
    createMany?: voteCreateManyCandidateInputEnvelope;
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type electionUpdateOneRequiredWithoutCandidateNestedInput = {
    create?: XOR<electionCreateWithoutCandidateInput, electionUncheckedCreateWithoutCandidateInput>;
    connectOrCreate?: electionCreateOrConnectWithoutCandidateInput;
    upsert?: electionUpsertWithoutCandidateInput;
    connect?: electionWhereUniqueInput;
    update?: XOR<
      XOR<electionUpdateToOneWithWhereWithoutCandidateInput, electionUpdateWithoutCandidateInput>,
      electionUncheckedUpdateWithoutCandidateInput
    >;
  };

  export type voteUpdateManyWithoutCandidateNestedInput = {
    create?:
      | XOR<voteCreateWithoutCandidateInput, voteUncheckedCreateWithoutCandidateInput>
      | voteCreateWithoutCandidateInput[]
      | voteUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?: voteCreateOrConnectWithoutCandidateInput | voteCreateOrConnectWithoutCandidateInput[];
    upsert?: voteUpsertWithWhereUniqueWithoutCandidateInput | voteUpsertWithWhereUniqueWithoutCandidateInput[];
    createMany?: voteCreateManyCandidateInputEnvelope;
    set?: voteWhereUniqueInput | voteWhereUniqueInput[];
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[];
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    update?: voteUpdateWithWhereUniqueWithoutCandidateInput | voteUpdateWithWhereUniqueWithoutCandidateInput[];
    updateMany?: voteUpdateManyWithWhereWithoutCandidateInput | voteUpdateManyWithWhereWithoutCandidateInput[];
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[];
  };

  export type voteUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?:
      | XOR<voteCreateWithoutCandidateInput, voteUncheckedCreateWithoutCandidateInput>
      | voteCreateWithoutCandidateInput[]
      | voteUncheckedCreateWithoutCandidateInput[];
    connectOrCreate?: voteCreateOrConnectWithoutCandidateInput | voteCreateOrConnectWithoutCandidateInput[];
    upsert?: voteUpsertWithWhereUniqueWithoutCandidateInput | voteUpsertWithWhereUniqueWithoutCandidateInput[];
    createMany?: voteCreateManyCandidateInputEnvelope;
    set?: voteWhereUniqueInput | voteWhereUniqueInput[];
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[];
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    update?: voteUpdateWithWhereUniqueWithoutCandidateInput | voteUpdateWithWhereUniqueWithoutCandidateInput[];
    updateMany?: voteUpdateManyWithWhereWithoutCandidateInput | voteUpdateManyWithWhereWithoutCandidateInput[];
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutClientInput = {
    create?: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>;
    connectOrCreate?: userCreateOrConnectWithoutClientInput;
    connect?: userWhereUniqueInput;
  };

  export type electionCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<electionCreateWithoutClientInput, electionUncheckedCreateWithoutClientInput>
      | electionCreateWithoutClientInput[]
      | electionUncheckedCreateWithoutClientInput[];
    connectOrCreate?: electionCreateOrConnectWithoutClientInput | electionCreateOrConnectWithoutClientInput[];
    createMany?: electionCreateManyClientInputEnvelope;
    connect?: electionWhereUniqueInput | electionWhereUniqueInput[];
  };

  export type electionUncheckedCreateNestedManyWithoutClientInput = {
    create?:
      | XOR<electionCreateWithoutClientInput, electionUncheckedCreateWithoutClientInput>
      | electionCreateWithoutClientInput[]
      | electionUncheckedCreateWithoutClientInput[];
    connectOrCreate?: electionCreateOrConnectWithoutClientInput | electionCreateOrConnectWithoutClientInput[];
    createMany?: electionCreateManyClientInputEnvelope;
    connect?: electionWhereUniqueInput | electionWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>;
    connectOrCreate?: userCreateOrConnectWithoutClientInput;
    upsert?: userUpsertWithoutClientInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutClientInput, userUpdateWithoutClientInput>,
      userUncheckedUpdateWithoutClientInput
    >;
  };

  export type electionUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<electionCreateWithoutClientInput, electionUncheckedCreateWithoutClientInput>
      | electionCreateWithoutClientInput[]
      | electionUncheckedCreateWithoutClientInput[];
    connectOrCreate?: electionCreateOrConnectWithoutClientInput | electionCreateOrConnectWithoutClientInput[];
    upsert?: electionUpsertWithWhereUniqueWithoutClientInput | electionUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: electionCreateManyClientInputEnvelope;
    set?: electionWhereUniqueInput | electionWhereUniqueInput[];
    disconnect?: electionWhereUniqueInput | electionWhereUniqueInput[];
    delete?: electionWhereUniqueInput | electionWhereUniqueInput[];
    connect?: electionWhereUniqueInput | electionWhereUniqueInput[];
    update?: electionUpdateWithWhereUniqueWithoutClientInput | electionUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: electionUpdateManyWithWhereWithoutClientInput | electionUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: electionScalarWhereInput | electionScalarWhereInput[];
  };

  export type electionUncheckedUpdateManyWithoutClientNestedInput = {
    create?:
      | XOR<electionCreateWithoutClientInput, electionUncheckedCreateWithoutClientInput>
      | electionCreateWithoutClientInput[]
      | electionUncheckedCreateWithoutClientInput[];
    connectOrCreate?: electionCreateOrConnectWithoutClientInput | electionCreateOrConnectWithoutClientInput[];
    upsert?: electionUpsertWithWhereUniqueWithoutClientInput | electionUpsertWithWhereUniqueWithoutClientInput[];
    createMany?: electionCreateManyClientInputEnvelope;
    set?: electionWhereUniqueInput | electionWhereUniqueInput[];
    disconnect?: electionWhereUniqueInput | electionWhereUniqueInput[];
    delete?: electionWhereUniqueInput | electionWhereUniqueInput[];
    connect?: electionWhereUniqueInput | electionWhereUniqueInput[];
    update?: electionUpdateWithWhereUniqueWithoutClientInput | electionUpdateWithWhereUniqueWithoutClientInput[];
    updateMany?: electionUpdateManyWithWhereWithoutClientInput | electionUpdateManyWithWhereWithoutClientInput[];
    deleteMany?: electionScalarWhereInput | electionScalarWhereInput[];
  };

  export type candidateCreateNestedManyWithoutElectionInput = {
    create?:
      | XOR<candidateCreateWithoutElectionInput, candidateUncheckedCreateWithoutElectionInput>
      | candidateCreateWithoutElectionInput[]
      | candidateUncheckedCreateWithoutElectionInput[];
    connectOrCreate?: candidateCreateOrConnectWithoutElectionInput | candidateCreateOrConnectWithoutElectionInput[];
    createMany?: candidateCreateManyElectionInputEnvelope;
    connect?: candidateWhereUniqueInput | candidateWhereUniqueInput[];
  };

  export type clientCreateNestedOneWithoutElectionInput = {
    create?: XOR<clientCreateWithoutElectionInput, clientUncheckedCreateWithoutElectionInput>;
    connectOrCreate?: clientCreateOrConnectWithoutElectionInput;
    connect?: clientWhereUniqueInput;
  };

  export type voteCreateNestedManyWithoutElectionInput = {
    create?:
      | XOR<voteCreateWithoutElectionInput, voteUncheckedCreateWithoutElectionInput>
      | voteCreateWithoutElectionInput[]
      | voteUncheckedCreateWithoutElectionInput[];
    connectOrCreate?: voteCreateOrConnectWithoutElectionInput | voteCreateOrConnectWithoutElectionInput[];
    createMany?: voteCreateManyElectionInputEnvelope;
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
  };

  export type candidateUncheckedCreateNestedManyWithoutElectionInput = {
    create?:
      | XOR<candidateCreateWithoutElectionInput, candidateUncheckedCreateWithoutElectionInput>
      | candidateCreateWithoutElectionInput[]
      | candidateUncheckedCreateWithoutElectionInput[];
    connectOrCreate?: candidateCreateOrConnectWithoutElectionInput | candidateCreateOrConnectWithoutElectionInput[];
    createMany?: candidateCreateManyElectionInputEnvelope;
    connect?: candidateWhereUniqueInput | candidateWhereUniqueInput[];
  };

  export type voteUncheckedCreateNestedManyWithoutElectionInput = {
    create?:
      | XOR<voteCreateWithoutElectionInput, voteUncheckedCreateWithoutElectionInput>
      | voteCreateWithoutElectionInput[]
      | voteUncheckedCreateWithoutElectionInput[];
    connectOrCreate?: voteCreateOrConnectWithoutElectionInput | voteCreateOrConnectWithoutElectionInput[];
    createMany?: voteCreateManyElectionInputEnvelope;
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
  };

  export type candidateUpdateManyWithoutElectionNestedInput = {
    create?:
      | XOR<candidateCreateWithoutElectionInput, candidateUncheckedCreateWithoutElectionInput>
      | candidateCreateWithoutElectionInput[]
      | candidateUncheckedCreateWithoutElectionInput[];
    connectOrCreate?: candidateCreateOrConnectWithoutElectionInput | candidateCreateOrConnectWithoutElectionInput[];
    upsert?: candidateUpsertWithWhereUniqueWithoutElectionInput | candidateUpsertWithWhereUniqueWithoutElectionInput[];
    createMany?: candidateCreateManyElectionInputEnvelope;
    set?: candidateWhereUniqueInput | candidateWhereUniqueInput[];
    disconnect?: candidateWhereUniqueInput | candidateWhereUniqueInput[];
    delete?: candidateWhereUniqueInput | candidateWhereUniqueInput[];
    connect?: candidateWhereUniqueInput | candidateWhereUniqueInput[];
    update?: candidateUpdateWithWhereUniqueWithoutElectionInput | candidateUpdateWithWhereUniqueWithoutElectionInput[];
    updateMany?: candidateUpdateManyWithWhereWithoutElectionInput | candidateUpdateManyWithWhereWithoutElectionInput[];
    deleteMany?: candidateScalarWhereInput | candidateScalarWhereInput[];
  };

  export type clientUpdateOneRequiredWithoutElectionNestedInput = {
    create?: XOR<clientCreateWithoutElectionInput, clientUncheckedCreateWithoutElectionInput>;
    connectOrCreate?: clientCreateOrConnectWithoutElectionInput;
    upsert?: clientUpsertWithoutElectionInput;
    connect?: clientWhereUniqueInput;
    update?: XOR<
      XOR<clientUpdateToOneWithWhereWithoutElectionInput, clientUpdateWithoutElectionInput>,
      clientUncheckedUpdateWithoutElectionInput
    >;
  };

  export type voteUpdateManyWithoutElectionNestedInput = {
    create?:
      | XOR<voteCreateWithoutElectionInput, voteUncheckedCreateWithoutElectionInput>
      | voteCreateWithoutElectionInput[]
      | voteUncheckedCreateWithoutElectionInput[];
    connectOrCreate?: voteCreateOrConnectWithoutElectionInput | voteCreateOrConnectWithoutElectionInput[];
    upsert?: voteUpsertWithWhereUniqueWithoutElectionInput | voteUpsertWithWhereUniqueWithoutElectionInput[];
    createMany?: voteCreateManyElectionInputEnvelope;
    set?: voteWhereUniqueInput | voteWhereUniqueInput[];
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[];
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    update?: voteUpdateWithWhereUniqueWithoutElectionInput | voteUpdateWithWhereUniqueWithoutElectionInput[];
    updateMany?: voteUpdateManyWithWhereWithoutElectionInput | voteUpdateManyWithWhereWithoutElectionInput[];
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[];
  };

  export type candidateUncheckedUpdateManyWithoutElectionNestedInput = {
    create?:
      | XOR<candidateCreateWithoutElectionInput, candidateUncheckedCreateWithoutElectionInput>
      | candidateCreateWithoutElectionInput[]
      | candidateUncheckedCreateWithoutElectionInput[];
    connectOrCreate?: candidateCreateOrConnectWithoutElectionInput | candidateCreateOrConnectWithoutElectionInput[];
    upsert?: candidateUpsertWithWhereUniqueWithoutElectionInput | candidateUpsertWithWhereUniqueWithoutElectionInput[];
    createMany?: candidateCreateManyElectionInputEnvelope;
    set?: candidateWhereUniqueInput | candidateWhereUniqueInput[];
    disconnect?: candidateWhereUniqueInput | candidateWhereUniqueInput[];
    delete?: candidateWhereUniqueInput | candidateWhereUniqueInput[];
    connect?: candidateWhereUniqueInput | candidateWhereUniqueInput[];
    update?: candidateUpdateWithWhereUniqueWithoutElectionInput | candidateUpdateWithWhereUniqueWithoutElectionInput[];
    updateMany?: candidateUpdateManyWithWhereWithoutElectionInput | candidateUpdateManyWithWhereWithoutElectionInput[];
    deleteMany?: candidateScalarWhereInput | candidateScalarWhereInput[];
  };

  export type voteUncheckedUpdateManyWithoutElectionNestedInput = {
    create?:
      | XOR<voteCreateWithoutElectionInput, voteUncheckedCreateWithoutElectionInput>
      | voteCreateWithoutElectionInput[]
      | voteUncheckedCreateWithoutElectionInput[];
    connectOrCreate?: voteCreateOrConnectWithoutElectionInput | voteCreateOrConnectWithoutElectionInput[];
    upsert?: voteUpsertWithWhereUniqueWithoutElectionInput | voteUpsertWithWhereUniqueWithoutElectionInput[];
    createMany?: voteCreateManyElectionInputEnvelope;
    set?: voteWhereUniqueInput | voteWhereUniqueInput[];
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[];
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    update?: voteUpdateWithWhereUniqueWithoutElectionInput | voteUpdateWithWhereUniqueWithoutElectionInput[];
    updateMany?: voteUpdateManyWithWhereWithoutElectionInput | voteUpdateManyWithWhereWithoutElectionInput[];
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[];
  };

  export type audit_logCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput>
      | audit_logCreateWithoutUserInput[]
      | audit_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[];
    createMany?: audit_logCreateManyUserInputEnvelope;
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[];
  };

  export type clientCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>
      | clientCreateWithoutUserInput[]
      | clientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[];
    createMany?: clientCreateManyUserInputEnvelope;
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[];
  };

  export type voteCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput>
      | voteCreateWithoutUserInput[]
      | voteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[];
    createMany?: voteCreateManyUserInputEnvelope;
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
  };

  export type audit_logUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput>
      | audit_logCreateWithoutUserInput[]
      | audit_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[];
    createMany?: audit_logCreateManyUserInputEnvelope;
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[];
  };

  export type clientUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>
      | clientCreateWithoutUserInput[]
      | clientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[];
    createMany?: clientCreateManyUserInputEnvelope;
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[];
  };

  export type voteUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput>
      | voteCreateWithoutUserInput[]
      | voteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[];
    createMany?: voteCreateManyUserInputEnvelope;
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
  };

  export type audit_logUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput>
      | audit_logCreateWithoutUserInput[]
      | audit_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[];
    upsert?: audit_logUpsertWithWhereUniqueWithoutUserInput | audit_logUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: audit_logCreateManyUserInputEnvelope;
    set?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[];
    disconnect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[];
    delete?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[];
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[];
    update?: audit_logUpdateWithWhereUniqueWithoutUserInput | audit_logUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: audit_logUpdateManyWithWhereWithoutUserInput | audit_logUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: audit_logScalarWhereInput | audit_logScalarWhereInput[];
  };

  export type clientUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>
      | clientCreateWithoutUserInput[]
      | clientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[];
    upsert?: clientUpsertWithWhereUniqueWithoutUserInput | clientUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: clientCreateManyUserInputEnvelope;
    set?: clientWhereUniqueInput | clientWhereUniqueInput[];
    disconnect?: clientWhereUniqueInput | clientWhereUniqueInput[];
    delete?: clientWhereUniqueInput | clientWhereUniqueInput[];
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[];
    update?: clientUpdateWithWhereUniqueWithoutUserInput | clientUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: clientUpdateManyWithWhereWithoutUserInput | clientUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: clientScalarWhereInput | clientScalarWhereInput[];
  };

  export type voteUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput>
      | voteCreateWithoutUserInput[]
      | voteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[];
    upsert?: voteUpsertWithWhereUniqueWithoutUserInput | voteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: voteCreateManyUserInputEnvelope;
    set?: voteWhereUniqueInput | voteWhereUniqueInput[];
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[];
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    update?: voteUpdateWithWhereUniqueWithoutUserInput | voteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: voteUpdateManyWithWhereWithoutUserInput | voteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[];
  };

  export type audit_logUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput>
      | audit_logCreateWithoutUserInput[]
      | audit_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: audit_logCreateOrConnectWithoutUserInput | audit_logCreateOrConnectWithoutUserInput[];
    upsert?: audit_logUpsertWithWhereUniqueWithoutUserInput | audit_logUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: audit_logCreateManyUserInputEnvelope;
    set?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[];
    disconnect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[];
    delete?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[];
    connect?: audit_logWhereUniqueInput | audit_logWhereUniqueInput[];
    update?: audit_logUpdateWithWhereUniqueWithoutUserInput | audit_logUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: audit_logUpdateManyWithWhereWithoutUserInput | audit_logUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: audit_logScalarWhereInput | audit_logScalarWhereInput[];
  };

  export type clientUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>
      | clientCreateWithoutUserInput[]
      | clientUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[];
    upsert?: clientUpsertWithWhereUniqueWithoutUserInput | clientUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: clientCreateManyUserInputEnvelope;
    set?: clientWhereUniqueInput | clientWhereUniqueInput[];
    disconnect?: clientWhereUniqueInput | clientWhereUniqueInput[];
    delete?: clientWhereUniqueInput | clientWhereUniqueInput[];
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[];
    update?: clientUpdateWithWhereUniqueWithoutUserInput | clientUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: clientUpdateManyWithWhereWithoutUserInput | clientUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: clientScalarWhereInput | clientScalarWhereInput[];
  };

  export type voteUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput>
      | voteCreateWithoutUserInput[]
      | voteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: voteCreateOrConnectWithoutUserInput | voteCreateOrConnectWithoutUserInput[];
    upsert?: voteUpsertWithWhereUniqueWithoutUserInput | voteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: voteCreateManyUserInputEnvelope;
    set?: voteWhereUniqueInput | voteWhereUniqueInput[];
    disconnect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    delete?: voteWhereUniqueInput | voteWhereUniqueInput[];
    connect?: voteWhereUniqueInput | voteWhereUniqueInput[];
    update?: voteUpdateWithWhereUniqueWithoutUserInput | voteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: voteUpdateManyWithWhereWithoutUserInput | voteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: voteScalarWhereInput | voteScalarWhereInput[];
  };

  export type candidateCreateNestedOneWithoutVoteInput = {
    create?: XOR<candidateCreateWithoutVoteInput, candidateUncheckedCreateWithoutVoteInput>;
    connectOrCreate?: candidateCreateOrConnectWithoutVoteInput;
    connect?: candidateWhereUniqueInput;
  };

  export type electionCreateNestedOneWithoutVoteInput = {
    create?: XOR<electionCreateWithoutVoteInput, electionUncheckedCreateWithoutVoteInput>;
    connectOrCreate?: electionCreateOrConnectWithoutVoteInput;
    connect?: electionWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutVoteInput = {
    create?: XOR<userCreateWithoutVoteInput, userUncheckedCreateWithoutVoteInput>;
    connectOrCreate?: userCreateOrConnectWithoutVoteInput;
    connect?: userWhereUniqueInput;
  };

  export type candidateUpdateOneRequiredWithoutVoteNestedInput = {
    create?: XOR<candidateCreateWithoutVoteInput, candidateUncheckedCreateWithoutVoteInput>;
    connectOrCreate?: candidateCreateOrConnectWithoutVoteInput;
    upsert?: candidateUpsertWithoutVoteInput;
    connect?: candidateWhereUniqueInput;
    update?: XOR<
      XOR<candidateUpdateToOneWithWhereWithoutVoteInput, candidateUpdateWithoutVoteInput>,
      candidateUncheckedUpdateWithoutVoteInput
    >;
  };

  export type electionUpdateOneRequiredWithoutVoteNestedInput = {
    create?: XOR<electionCreateWithoutVoteInput, electionUncheckedCreateWithoutVoteInput>;
    connectOrCreate?: electionCreateOrConnectWithoutVoteInput;
    upsert?: electionUpsertWithoutVoteInput;
    connect?: electionWhereUniqueInput;
    update?: XOR<
      XOR<electionUpdateToOneWithWhereWithoutVoteInput, electionUpdateWithoutVoteInput>,
      electionUncheckedUpdateWithoutVoteInput
    >;
  };

  export type userUpdateOneRequiredWithoutVoteNestedInput = {
    create?: XOR<userCreateWithoutVoteInput, userUncheckedCreateWithoutVoteInput>;
    connectOrCreate?: userCreateOrConnectWithoutVoteInput;
    upsert?: userUpsertWithoutVoteInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutVoteInput, userUpdateWithoutVoteInput>,
      userUncheckedUpdateWithoutVoteInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutAudit_logInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client?: clientCreateNestedManyWithoutUserInput;
    vote?: voteCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAudit_logInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client?: clientUncheckedCreateNestedManyWithoutUserInput;
    vote?: voteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAudit_logInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAudit_logInput, userUncheckedCreateWithoutAudit_logInput>;
  };

  export type userUpsertWithoutAudit_logInput = {
    update: XOR<userUpdateWithoutAudit_logInput, userUncheckedUpdateWithoutAudit_logInput>;
    create: XOR<userCreateWithoutAudit_logInput, userUncheckedCreateWithoutAudit_logInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAudit_logInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAudit_logInput, userUncheckedUpdateWithoutAudit_logInput>;
  };

  export type userUpdateWithoutAudit_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: clientUpdateManyWithoutUserNestedInput;
    vote?: voteUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAudit_logInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: clientUncheckedUpdateManyWithoutUserNestedInput;
    vote?: voteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type electionCreateWithoutCandidateInput = {
    id?: string;
    title: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client: clientCreateNestedOneWithoutElectionInput;
    vote?: voteCreateNestedManyWithoutElectionInput;
  };

  export type electionUncheckedCreateWithoutCandidateInput = {
    id?: string;
    title: string;
    start_date: Date | string;
    end_date: Date | string;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    vote?: voteUncheckedCreateNestedManyWithoutElectionInput;
  };

  export type electionCreateOrConnectWithoutCandidateInput = {
    where: electionWhereUniqueInput;
    create: XOR<electionCreateWithoutCandidateInput, electionUncheckedCreateWithoutCandidateInput>;
  };

  export type voteCreateWithoutCandidateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    election: electionCreateNestedOneWithoutVoteInput;
    user: userCreateNestedOneWithoutVoteInput;
  };

  export type voteUncheckedCreateWithoutCandidateInput = {
    id?: string;
    user_id: string;
    election_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type voteCreateOrConnectWithoutCandidateInput = {
    where: voteWhereUniqueInput;
    create: XOR<voteCreateWithoutCandidateInput, voteUncheckedCreateWithoutCandidateInput>;
  };

  export type voteCreateManyCandidateInputEnvelope = {
    data: voteCreateManyCandidateInput | voteCreateManyCandidateInput[];
    skipDuplicates?: boolean;
  };

  export type electionUpsertWithoutCandidateInput = {
    update: XOR<electionUpdateWithoutCandidateInput, electionUncheckedUpdateWithoutCandidateInput>;
    create: XOR<electionCreateWithoutCandidateInput, electionUncheckedCreateWithoutCandidateInput>;
    where?: electionWhereInput;
  };

  export type electionUpdateToOneWithWhereWithoutCandidateInput = {
    where?: electionWhereInput;
    data: XOR<electionUpdateWithoutCandidateInput, electionUncheckedUpdateWithoutCandidateInput>;
  };

  export type electionUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client?: clientUpdateOneRequiredWithoutElectionNestedInput;
    vote?: voteUpdateManyWithoutElectionNestedInput;
  };

  export type electionUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: voteUncheckedUpdateManyWithoutElectionNestedInput;
  };

  export type voteUpsertWithWhereUniqueWithoutCandidateInput = {
    where: voteWhereUniqueInput;
    update: XOR<voteUpdateWithoutCandidateInput, voteUncheckedUpdateWithoutCandidateInput>;
    create: XOR<voteCreateWithoutCandidateInput, voteUncheckedCreateWithoutCandidateInput>;
  };

  export type voteUpdateWithWhereUniqueWithoutCandidateInput = {
    where: voteWhereUniqueInput;
    data: XOR<voteUpdateWithoutCandidateInput, voteUncheckedUpdateWithoutCandidateInput>;
  };

  export type voteUpdateManyWithWhereWithoutCandidateInput = {
    where: voteScalarWhereInput;
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyWithoutCandidateInput>;
  };

  export type voteScalarWhereInput = {
    AND?: voteScalarWhereInput | voteScalarWhereInput[];
    OR?: voteScalarWhereInput[];
    NOT?: voteScalarWhereInput | voteScalarWhereInput[];
    id?: UuidFilter<'vote'> | string;
    user_id?: UuidFilter<'vote'> | string;
    candidate_id?: UuidFilter<'vote'> | string;
    election_id?: UuidFilter<'vote'> | string;
    created_at?: DateTimeFilter<'vote'> | Date | string;
    updated_at?: DateTimeFilter<'vote'> | Date | string;
  };

  export type userCreateWithoutClientInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_log?: audit_logCreateNestedManyWithoutUserInput;
    vote?: voteCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutClientInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput;
    vote?: voteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutClientInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>;
  };

  export type electionCreateWithoutClientInput = {
    id?: string;
    title: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    candidate?: candidateCreateNestedManyWithoutElectionInput;
    vote?: voteCreateNestedManyWithoutElectionInput;
  };

  export type electionUncheckedCreateWithoutClientInput = {
    id?: string;
    title: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    candidate?: candidateUncheckedCreateNestedManyWithoutElectionInput;
    vote?: voteUncheckedCreateNestedManyWithoutElectionInput;
  };

  export type electionCreateOrConnectWithoutClientInput = {
    where: electionWhereUniqueInput;
    create: XOR<electionCreateWithoutClientInput, electionUncheckedCreateWithoutClientInput>;
  };

  export type electionCreateManyClientInputEnvelope = {
    data: electionCreateManyClientInput | electionCreateManyClientInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutClientInput = {
    update: XOR<userUpdateWithoutClientInput, userUncheckedUpdateWithoutClientInput>;
    create: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutClientInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutClientInput, userUncheckedUpdateWithoutClientInput>;
  };

  export type userUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: audit_logUpdateManyWithoutUserNestedInput;
    vote?: voteUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput;
    vote?: voteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type electionUpsertWithWhereUniqueWithoutClientInput = {
    where: electionWhereUniqueInput;
    update: XOR<electionUpdateWithoutClientInput, electionUncheckedUpdateWithoutClientInput>;
    create: XOR<electionCreateWithoutClientInput, electionUncheckedCreateWithoutClientInput>;
  };

  export type electionUpdateWithWhereUniqueWithoutClientInput = {
    where: electionWhereUniqueInput;
    data: XOR<electionUpdateWithoutClientInput, electionUncheckedUpdateWithoutClientInput>;
  };

  export type electionUpdateManyWithWhereWithoutClientInput = {
    where: electionScalarWhereInput;
    data: XOR<electionUpdateManyMutationInput, electionUncheckedUpdateManyWithoutClientInput>;
  };

  export type electionScalarWhereInput = {
    AND?: electionScalarWhereInput | electionScalarWhereInput[];
    OR?: electionScalarWhereInput[];
    NOT?: electionScalarWhereInput | electionScalarWhereInput[];
    id?: UuidFilter<'election'> | string;
    title?: StringFilter<'election'> | string;
    start_date?: DateTimeFilter<'election'> | Date | string;
    end_date?: DateTimeFilter<'election'> | Date | string;
    client_id?: UuidFilter<'election'> | string;
    created_at?: DateTimeFilter<'election'> | Date | string;
    updated_at?: DateTimeFilter<'election'> | Date | string;
  };

  export type candidateCreateWithoutElectionInput = {
    id?: string;
    name: string;
    votes?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    vote?: voteCreateNestedManyWithoutCandidateInput;
  };

  export type candidateUncheckedCreateWithoutElectionInput = {
    id?: string;
    name: string;
    votes?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    vote?: voteUncheckedCreateNestedManyWithoutCandidateInput;
  };

  export type candidateCreateOrConnectWithoutElectionInput = {
    where: candidateWhereUniqueInput;
    create: XOR<candidateCreateWithoutElectionInput, candidateUncheckedCreateWithoutElectionInput>;
  };

  export type candidateCreateManyElectionInputEnvelope = {
    data: candidateCreateManyElectionInput | candidateCreateManyElectionInput[];
    skipDuplicates?: boolean;
  };

  export type clientCreateWithoutElectionInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutClientInput;
  };

  export type clientUncheckedCreateWithoutElectionInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type clientCreateOrConnectWithoutElectionInput = {
    where: clientWhereUniqueInput;
    create: XOR<clientCreateWithoutElectionInput, clientUncheckedCreateWithoutElectionInput>;
  };

  export type voteCreateWithoutElectionInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    candidate: candidateCreateNestedOneWithoutVoteInput;
    user: userCreateNestedOneWithoutVoteInput;
  };

  export type voteUncheckedCreateWithoutElectionInput = {
    id?: string;
    user_id: string;
    candidate_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type voteCreateOrConnectWithoutElectionInput = {
    where: voteWhereUniqueInput;
    create: XOR<voteCreateWithoutElectionInput, voteUncheckedCreateWithoutElectionInput>;
  };

  export type voteCreateManyElectionInputEnvelope = {
    data: voteCreateManyElectionInput | voteCreateManyElectionInput[];
    skipDuplicates?: boolean;
  };

  export type candidateUpsertWithWhereUniqueWithoutElectionInput = {
    where: candidateWhereUniqueInput;
    update: XOR<candidateUpdateWithoutElectionInput, candidateUncheckedUpdateWithoutElectionInput>;
    create: XOR<candidateCreateWithoutElectionInput, candidateUncheckedCreateWithoutElectionInput>;
  };

  export type candidateUpdateWithWhereUniqueWithoutElectionInput = {
    where: candidateWhereUniqueInput;
    data: XOR<candidateUpdateWithoutElectionInput, candidateUncheckedUpdateWithoutElectionInput>;
  };

  export type candidateUpdateManyWithWhereWithoutElectionInput = {
    where: candidateScalarWhereInput;
    data: XOR<candidateUpdateManyMutationInput, candidateUncheckedUpdateManyWithoutElectionInput>;
  };

  export type candidateScalarWhereInput = {
    AND?: candidateScalarWhereInput | candidateScalarWhereInput[];
    OR?: candidateScalarWhereInput[];
    NOT?: candidateScalarWhereInput | candidateScalarWhereInput[];
    id?: UuidFilter<'candidate'> | string;
    name?: StringFilter<'candidate'> | string;
    election_id?: UuidFilter<'candidate'> | string;
    votes?: IntFilter<'candidate'> | number;
    created_at?: DateTimeFilter<'candidate'> | Date | string;
    updated_at?: DateTimeFilter<'candidate'> | Date | string;
  };

  export type clientUpsertWithoutElectionInput = {
    update: XOR<clientUpdateWithoutElectionInput, clientUncheckedUpdateWithoutElectionInput>;
    create: XOR<clientCreateWithoutElectionInput, clientUncheckedCreateWithoutElectionInput>;
    where?: clientWhereInput;
  };

  export type clientUpdateToOneWithWhereWithoutElectionInput = {
    where?: clientWhereInput;
    data: XOR<clientUpdateWithoutElectionInput, clientUncheckedUpdateWithoutElectionInput>;
  };

  export type clientUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutClientNestedInput;
  };

  export type clientUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type voteUpsertWithWhereUniqueWithoutElectionInput = {
    where: voteWhereUniqueInput;
    update: XOR<voteUpdateWithoutElectionInput, voteUncheckedUpdateWithoutElectionInput>;
    create: XOR<voteCreateWithoutElectionInput, voteUncheckedCreateWithoutElectionInput>;
  };

  export type voteUpdateWithWhereUniqueWithoutElectionInput = {
    where: voteWhereUniqueInput;
    data: XOR<voteUpdateWithoutElectionInput, voteUncheckedUpdateWithoutElectionInput>;
  };

  export type voteUpdateManyWithWhereWithoutElectionInput = {
    where: voteScalarWhereInput;
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyWithoutElectionInput>;
  };

  export type audit_logCreateWithoutUserInput = {
    id?: string;
    action: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_logUncheckedCreateWithoutUserInput = {
    id?: string;
    action: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_logCreateOrConnectWithoutUserInput = {
    where: audit_logWhereUniqueInput;
    create: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput>;
  };

  export type audit_logCreateManyUserInputEnvelope = {
    data: audit_logCreateManyUserInput | audit_logCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type clientCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    election?: electionCreateNestedManyWithoutClientInput;
  };

  export type clientUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    election?: electionUncheckedCreateNestedManyWithoutClientInput;
  };

  export type clientCreateOrConnectWithoutUserInput = {
    where: clientWhereUniqueInput;
    create: XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>;
  };

  export type clientCreateManyUserInputEnvelope = {
    data: clientCreateManyUserInput | clientCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type voteCreateWithoutUserInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    candidate: candidateCreateNestedOneWithoutVoteInput;
    election: electionCreateNestedOneWithoutVoteInput;
  };

  export type voteUncheckedCreateWithoutUserInput = {
    id?: string;
    candidate_id: string;
    election_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type voteCreateOrConnectWithoutUserInput = {
    where: voteWhereUniqueInput;
    create: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput>;
  };

  export type voteCreateManyUserInputEnvelope = {
    data: voteCreateManyUserInput | voteCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type audit_logUpsertWithWhereUniqueWithoutUserInput = {
    where: audit_logWhereUniqueInput;
    update: XOR<audit_logUpdateWithoutUserInput, audit_logUncheckedUpdateWithoutUserInput>;
    create: XOR<audit_logCreateWithoutUserInput, audit_logUncheckedCreateWithoutUserInput>;
  };

  export type audit_logUpdateWithWhereUniqueWithoutUserInput = {
    where: audit_logWhereUniqueInput;
    data: XOR<audit_logUpdateWithoutUserInput, audit_logUncheckedUpdateWithoutUserInput>;
  };

  export type audit_logUpdateManyWithWhereWithoutUserInput = {
    where: audit_logScalarWhereInput;
    data: XOR<audit_logUpdateManyMutationInput, audit_logUncheckedUpdateManyWithoutUserInput>;
  };

  export type audit_logScalarWhereInput = {
    AND?: audit_logScalarWhereInput | audit_logScalarWhereInput[];
    OR?: audit_logScalarWhereInput[];
    NOT?: audit_logScalarWhereInput | audit_logScalarWhereInput[];
    id?: UuidFilter<'audit_log'> | string;
    user_id?: UuidFilter<'audit_log'> | string;
    action?: StringFilter<'audit_log'> | string;
    description?: StringNullableFilter<'audit_log'> | string | null;
    created_at?: DateTimeFilter<'audit_log'> | Date | string;
    updated_at?: DateTimeFilter<'audit_log'> | Date | string;
  };

  export type clientUpsertWithWhereUniqueWithoutUserInput = {
    where: clientWhereUniqueInput;
    update: XOR<clientUpdateWithoutUserInput, clientUncheckedUpdateWithoutUserInput>;
    create: XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>;
  };

  export type clientUpdateWithWhereUniqueWithoutUserInput = {
    where: clientWhereUniqueInput;
    data: XOR<clientUpdateWithoutUserInput, clientUncheckedUpdateWithoutUserInput>;
  };

  export type clientUpdateManyWithWhereWithoutUserInput = {
    where: clientScalarWhereInput;
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyWithoutUserInput>;
  };

  export type clientScalarWhereInput = {
    AND?: clientScalarWhereInput | clientScalarWhereInput[];
    OR?: clientScalarWhereInput[];
    NOT?: clientScalarWhereInput | clientScalarWhereInput[];
    id?: UuidFilter<'client'> | string;
    description?: StringNullableFilter<'client'> | string | null;
    name?: StringFilter<'client'> | string;
    created_at?: DateTimeFilter<'client'> | Date | string;
    updated_at?: DateTimeFilter<'client'> | Date | string;
    user_id?: UuidFilter<'client'> | string;
    tenant_id?: StringFilter<'client'> | string;
  };

  export type voteUpsertWithWhereUniqueWithoutUserInput = {
    where: voteWhereUniqueInput;
    update: XOR<voteUpdateWithoutUserInput, voteUncheckedUpdateWithoutUserInput>;
    create: XOR<voteCreateWithoutUserInput, voteUncheckedCreateWithoutUserInput>;
  };

  export type voteUpdateWithWhereUniqueWithoutUserInput = {
    where: voteWhereUniqueInput;
    data: XOR<voteUpdateWithoutUserInput, voteUncheckedUpdateWithoutUserInput>;
  };

  export type voteUpdateManyWithWhereWithoutUserInput = {
    where: voteScalarWhereInput;
    data: XOR<voteUpdateManyMutationInput, voteUncheckedUpdateManyWithoutUserInput>;
  };

  export type candidateCreateWithoutVoteInput = {
    id?: string;
    name: string;
    votes?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    election: electionCreateNestedOneWithoutCandidateInput;
  };

  export type candidateUncheckedCreateWithoutVoteInput = {
    id?: string;
    name: string;
    election_id: string;
    votes?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type candidateCreateOrConnectWithoutVoteInput = {
    where: candidateWhereUniqueInput;
    create: XOR<candidateCreateWithoutVoteInput, candidateUncheckedCreateWithoutVoteInput>;
  };

  export type electionCreateWithoutVoteInput = {
    id?: string;
    title: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    candidate?: candidateCreateNestedManyWithoutElectionInput;
    client: clientCreateNestedOneWithoutElectionInput;
  };

  export type electionUncheckedCreateWithoutVoteInput = {
    id?: string;
    title: string;
    start_date: Date | string;
    end_date: Date | string;
    client_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    candidate?: candidateUncheckedCreateNestedManyWithoutElectionInput;
  };

  export type electionCreateOrConnectWithoutVoteInput = {
    where: electionWhereUniqueInput;
    create: XOR<electionCreateWithoutVoteInput, electionUncheckedCreateWithoutVoteInput>;
  };

  export type userCreateWithoutVoteInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_log?: audit_logCreateNestedManyWithoutUserInput;
    client?: clientCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutVoteInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_log?: audit_logUncheckedCreateNestedManyWithoutUserInput;
    client?: clientUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutVoteInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutVoteInput, userUncheckedCreateWithoutVoteInput>;
  };

  export type candidateUpsertWithoutVoteInput = {
    update: XOR<candidateUpdateWithoutVoteInput, candidateUncheckedUpdateWithoutVoteInput>;
    create: XOR<candidateCreateWithoutVoteInput, candidateUncheckedCreateWithoutVoteInput>;
    where?: candidateWhereInput;
  };

  export type candidateUpdateToOneWithWhereWithoutVoteInput = {
    where?: candidateWhereInput;
    data: XOR<candidateUpdateWithoutVoteInput, candidateUncheckedUpdateWithoutVoteInput>;
  };

  export type candidateUpdateWithoutVoteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    votes?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    election?: electionUpdateOneRequiredWithoutCandidateNestedInput;
  };

  export type candidateUncheckedUpdateWithoutVoteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    election_id?: StringFieldUpdateOperationsInput | string;
    votes?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type electionUpsertWithoutVoteInput = {
    update: XOR<electionUpdateWithoutVoteInput, electionUncheckedUpdateWithoutVoteInput>;
    create: XOR<electionCreateWithoutVoteInput, electionUncheckedCreateWithoutVoteInput>;
    where?: electionWhereInput;
  };

  export type electionUpdateToOneWithWhereWithoutVoteInput = {
    where?: electionWhereInput;
    data: XOR<electionUpdateWithoutVoteInput, electionUncheckedUpdateWithoutVoteInput>;
  };

  export type electionUpdateWithoutVoteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: candidateUpdateManyWithoutElectionNestedInput;
    client?: clientUpdateOneRequiredWithoutElectionNestedInput;
  };

  export type electionUncheckedUpdateWithoutVoteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: candidateUncheckedUpdateManyWithoutElectionNestedInput;
  };

  export type userUpsertWithoutVoteInput = {
    update: XOR<userUpdateWithoutVoteInput, userUncheckedUpdateWithoutVoteInput>;
    create: XOR<userCreateWithoutVoteInput, userUncheckedCreateWithoutVoteInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutVoteInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutVoteInput, userUncheckedUpdateWithoutVoteInput>;
  };

  export type userUpdateWithoutVoteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: audit_logUpdateManyWithoutUserNestedInput;
    client?: clientUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutVoteInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: audit_logUncheckedUpdateManyWithoutUserNestedInput;
    client?: clientUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type voteCreateManyCandidateInput = {
    id?: string;
    user_id: string;
    election_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type voteUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    election?: electionUpdateOneRequiredWithoutVoteNestedInput;
    user?: userUpdateOneRequiredWithoutVoteNestedInput;
  };

  export type voteUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    election_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type voteUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    election_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type electionCreateManyClientInput = {
    id?: string;
    title: string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type electionUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: candidateUpdateManyWithoutElectionNestedInput;
    vote?: voteUpdateManyWithoutElectionNestedInput;
  };

  export type electionUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: candidateUncheckedUpdateManyWithoutElectionNestedInput;
    vote?: voteUncheckedUpdateManyWithoutElectionNestedInput;
  };

  export type electionUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type candidateCreateManyElectionInput = {
    id?: string;
    name: string;
    votes?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type voteCreateManyElectionInput = {
    id?: string;
    user_id: string;
    candidate_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type candidateUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    votes?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: voteUpdateManyWithoutCandidateNestedInput;
  };

  export type candidateUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    votes?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    vote?: voteUncheckedUpdateManyWithoutCandidateNestedInput;
  };

  export type candidateUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    votes?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type voteUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: candidateUpdateOneRequiredWithoutVoteNestedInput;
    user?: userUpdateOneRequiredWithoutVoteNestedInput;
  };

  export type voteUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    candidate_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type voteUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    candidate_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_logCreateManyUserInput = {
    id?: string;
    action: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type clientCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type voteCreateManyUserInput = {
    id?: string;
    candidate_id: string;
    election_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type audit_logUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_logUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type audit_logUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    action?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type clientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    election?: electionUpdateManyWithoutClientNestedInput;
  };

  export type clientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    election?: electionUncheckedUpdateManyWithoutClientNestedInput;
  };

  export type clientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type voteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    candidate?: candidateUpdateOneRequiredWithoutVoteNestedInput;
    election?: electionUpdateOneRequiredWithoutVoteNestedInput;
  };

  export type voteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    candidate_id?: StringFieldUpdateOperationsInput | string;
    election_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type voteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    candidate_id?: StringFieldUpdateOperationsInput | string;
    election_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CandidateCountOutputTypeDefaultArgs instead
   */
  export type CandidateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CandidateCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ClientCountOutputTypeDefaultArgs instead
   */
  export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ClientCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ElectionCountOutputTypeDefaultArgs instead
   */
  export type ElectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ElectionCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use audit_logDefaultArgs instead
   */
  export type audit_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    audit_logDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use candidateDefaultArgs instead
   */
  export type candidateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    candidateDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use clientDefaultArgs instead
   */
  export type clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    clientDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use electionDefaultArgs instead
   */
  export type electionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    electionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use voteDefaultArgs instead
   */
  export type voteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = voteDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
