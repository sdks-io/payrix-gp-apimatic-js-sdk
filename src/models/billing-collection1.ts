import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines who will be billed.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `entity` - **The entity will be billed.**
 *
 * </details>
 */
export const BillingCollection1 = {
  Entity: "entity",
} as const;
export type BillingCollection1 = (typeof BillingCollection1)[keyof typeof BillingCollection1] | (string & {});

export const billingCollection1Schema: EnumSchema<BillingCollection1> =
  s.enumOf<BillingCollection1>(BillingCollection1);
