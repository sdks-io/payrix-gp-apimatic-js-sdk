import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The payment type of the item purchased with order */
export const PaymentTypeConsentsOrderItemsPaymentType = {
  Single: "SINGLE",
  Split: "SPLIT",
  Recurring: "RECURRING",
} as const;
export type PaymentTypeConsentsOrderItemsPaymentType =
  | (typeof PaymentTypeConsentsOrderItemsPaymentType)[keyof typeof PaymentTypeConsentsOrderItemsPaymentType]
  | (string & {});

export const paymentTypeConsentsOrderItemsPaymentTypeSchema: EnumSchema<PaymentTypeConsentsOrderItemsPaymentType> =
  s.enumOf<PaymentTypeConsentsOrderItemsPaymentType>(PaymentTypeConsentsOrderItemsPaymentType);
