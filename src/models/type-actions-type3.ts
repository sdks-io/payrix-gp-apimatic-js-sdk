import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of action executed. This is a non-exhaustive list of enums. */
export const TypeActionsType3 = {
  Authorize: "AUTHORIZE",
  Preauthorize: "PREAUTHORIZE",
  Refund: "REFUND",
  Reverse: "REVERSE",
  Capture: "CAPTURE",
  Adjust: "ADJUST",
  Hold: "HOLD",
  Release: "RELEASE",
  PaymentMethodCreate: "PAYMENT_METHOD_CREATE",
  PaymentMethodSingle: "PAYMENT_METHOD_SINGLE",
  PaymentMethodEdit: "PAYMENT_METHOD_EDIT",
  PaymentMethodList: "PAYMENT_METHOD_LIST",
  PaymentMethodDelete: "PAYMENT_METHOD_DELETE",
} as const;
export type TypeActionsType3 = (typeof TypeActionsType3)[keyof typeof TypeActionsType3] | (string & {});

export const typeActionsType3Schema: EnumSchema<TypeActionsType3> =
  s.enumOf<TypeActionsType3>(TypeActionsType3);
