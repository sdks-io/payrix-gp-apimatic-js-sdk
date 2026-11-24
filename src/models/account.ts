import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { permissionSchema, type Permission } from "./permission.js";

export type Account = {
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. It can
   * begin with one of the following the three letters combinations. Each one representing a
   * different account type and capability.
   *
   * TRA - Transaction Processing TKA - Tokenization DIA - Dispute Management DAA - Data Services
   * MMA - Merchant Management FPA - File Processing FMA - Funds Management RAA - Risk Assessment
   */
  id?: string;
  /** A meaningful label that better identifies the account. */
  name?: string;
  /** All of the permissions or activites that may be performed by the account. */
  permissions?: Permission[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountProperties: s.Shape<Account> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  permissions: s.optional(s.array(s.lazy(() => permissionSchema))),
};

export const accountInternalSchema: Schema<Account> = s.object<Account>(accountProperties, {
  additionalProperties: s.json(),
});

export const accountSchema: Schema<Account> = s.lazySchema(() =>
  s.object<Account>(
    {
      ...accountProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
