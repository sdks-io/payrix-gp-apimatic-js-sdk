import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingCollection = {
  Entity: "entity",
} as const;
export type BillingCollection = (typeof BillingCollection)[keyof typeof BillingCollection] | (string & {});

export const billingCollectionSchema: EnumSchema<BillingCollection> =
  s.enumOf<BillingCollection>(BillingCollection);
