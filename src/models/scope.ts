import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountInternalSchema, accountSchema, type Account } from "./account.js";

export type Scope = {
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific merchant. Begins with the three letters,
   * MER.
   */
  merchantId?: string;
  /** A meaningful label that better identifies the merchant. */
  merchantName?: string;
  accounts?: Account[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scopeProperties: s.Shape<Scope> = {
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accounts: s.optional(s.array(s.lazy(() => accountInternalSchema))),
  _keysMap: {
    merchantId: "merchant_id",
    merchantName: "merchant_name",
  },
};

export const scopeInternalSchema: Schema<Scope> = s.object<Scope>(scopeProperties, {
  additionalProperties: s.json(),
});

export const scopeSchema: Schema<Scope> = s.lazySchema(() =>
  s.object<Scope>(
    {
      ...scopeProperties,
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accounts: s.optional(s.array(s.lazy(() => accountSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
