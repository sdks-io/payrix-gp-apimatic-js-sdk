import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypePaymentMethodsActionType = {
  PaymentMethodCreate: "PAYMENT_METHOD_CREATE",
  PaymentMethodSingle: "PAYMENT_METHOD_SINGLE",
  PaymentMethodEdit: "PAYMENT_METHOD_EDIT",
  PaymentMethodList: "PAYMENT_METHOD_LIST",
  PaymentMethodDelete: "PAYMENT_METHOD_DELETE",
  CryptogramCreate: "CRYPTOGRAM_CREATE",
} as const;
export type TypePaymentMethodsActionType =
  | (typeof TypePaymentMethodsActionType)[keyof typeof TypePaymentMethodsActionType]
  | (string & {});

export const typePaymentMethodsActionTypeSchema: EnumSchema<TypePaymentMethodsActionType> =
  s.enumOf<TypePaymentMethodsActionType>(TypePaymentMethodsActionType);
