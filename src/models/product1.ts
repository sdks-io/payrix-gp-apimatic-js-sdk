import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { account2Schema, type Account2 } from "./account2.js";

export type Product1 = {
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

const product1Properties: s.Shape<Product1> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  account: s.optional(s.lazy(() => account2Schema)),
};

export const product1InternalSchema: Schema<Product1> = s.object<Product1>(product1Properties, {
  additionalProperties: s.json(),
});

export const product1Schema: Schema<Product1> = s.lazySchema(() =>
  s.object<Product1>(
    {
      ...product1Properties,
      id: s.optional(s.string().check(s.minLength(5), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
