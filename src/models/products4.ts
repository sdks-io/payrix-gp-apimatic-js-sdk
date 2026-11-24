import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { account2Schema, type Account2 } from "./account2.js";

export type Products4 = {
  /**
   * Unique Global Payments generated id used to uniquely reference a product on the Global Payments
   * system.
   */
  id?: string;
  /** A label to identify the Prodct */
  name?: string;
  account?: Account2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const products4Properties: s.Shape<Products4> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  account: s.optional(s.lazy(() => account2Schema)),
};

export const products4InternalSchema: Schema<Products4> = s.object<Products4>(products4Properties, {
  additionalProperties: s.json(),
});

export const products4Schema: Schema<Products4> = s.lazySchema(() =>
  s.object<Products4>(
    {
      ...products4Properties,
      id: s.optional(s.string().check(s.minLength(5), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
