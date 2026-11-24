import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeTransactionsOrderTaxesTypeSchema,
  type TypeTransactionsOrderTaxesType,
} from "./type-transactions-order-taxes-type.js";

export type Taxis = {
  /**
   * The type of tax being charged. *VAT - Value-added tax *NATIONAL - National tax. *SERVICE -
   * Service tax. *DUTY - Duty tax or sometimes referred to as a tariff. *ALTERNATE - Use this
   * option if none of the other tax types apply. *STATE - State or provinical tax. *HST -
   * Harmonized sales tax. *GST - Goods and services tax. *QST - Quebec Sales tax. *SHIPPING -
   * Shipping tax.
   */
  type?: TypeTransactionsOrderTaxesType;
  /** A total amount of a specific group of items being purchased with the order. */
  amount?: string;
  /** Tax percentage rate. */
  percentage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const taxisProperties: s.Shape<Taxis> = {
  type: s.optional(s.lazy(() => typeTransactionsOrderTaxesTypeSchema)),
  amount: s.optional(s.string()),
  percentage: s.optional(s.string()),
};

export const taxisInternalSchema: Schema<Taxis> = s.object<Taxis>(taxisProperties, {
  additionalProperties: s.json(),
});

export const taxisSchema: Schema<Taxis> = s.lazySchema(() =>
  s.object<Taxis>(
    {
      ...taxisProperties,
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
