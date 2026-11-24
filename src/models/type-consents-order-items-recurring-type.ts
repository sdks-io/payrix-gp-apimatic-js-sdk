import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The nature of the recurring transaction that the customer is initiating. */
export const TypeConsentsOrderItemsRecurringType = {
  Subscription: "SUBSCRIPTION",
  TopUp: "TOP_UP",
  ElectronicBillPayment: "ELECTRONIC_BILL_PAYMENT",
  PayAsYouGo: "PAY_AS_YOU_GO",
} as const;
export type TypeConsentsOrderItemsRecurringType =
  | (typeof TypeConsentsOrderItemsRecurringType)[keyof typeof TypeConsentsOrderItemsRecurringType]
  | (string & {});

export const typeConsentsOrderItemsRecurringTypeSchema: EnumSchema<TypeConsentsOrderItemsRecurringType> =
  s.enumOf<TypeConsentsOrderItemsRecurringType>(TypeConsentsOrderItemsRecurringType);
