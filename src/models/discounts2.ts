import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  usageModeTransactionsOrderDiscountsUsageModeSchema,
  type UsageModeTransactionsOrderDiscountsUsageMode,
} from "./usage-mode-transactions-order-discounts-usage-mode.js";

export type Discounts2 = {
  /** The total transaction discount amount. */
  totalAmount?: string;
  /** The name of the discount applied to the transaction.This field is used for reporting. */
  name?: string;
  /** The dollar amount of discount applied to a transaction. Corresponds with total_amount. */
  amount?: string;
  /**
   * The discount percentage applied to a transaction. Corresponds with transDiscountName. This does
   * not impact transaction functionality. It is used for reporting purposes.
   */
  percentage?: string;
  /**
   * Indicates the priority order in which discounts are applied at both the order and product
   * levels.
   */
  priorityOrder?: string;
  /** Indicates if the discount can be stacked with other discounts. */
  usageMode?: UsageModeTransactionsOrderDiscountsUsageMode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const discounts2Properties: s.Shape<Discounts2> = {
  totalAmount: s.optional(s.string()),
  name: s.optional(s.string()),
  amount: s.optional(s.string()),
  percentage: s.optional(s.string()),
  priorityOrder: s.optional(s.string()),
  usageMode: s.optional(s.lazy(() => usageModeTransactionsOrderDiscountsUsageModeSchema)),
  _keysMap: {
    totalAmount: "total_amount",
    priorityOrder: "priority_order",
    usageMode: "usage_mode",
  },
};

export const discounts2InternalSchema: Schema<Discounts2> = s.object<Discounts2>(discounts2Properties, {
  additionalProperties: s.json(),
});

export const discounts2Schema: Schema<Discounts2> = s.lazySchema(() =>
  s.object<Discounts2>(
    {
      ...discounts2Properties,
      totalAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      priorityOrder: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
