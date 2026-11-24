import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const ResultCodePaymentMethodsActionResultCode = {
  Success: "SUCCESS",
} as const;
export type ResultCodePaymentMethodsActionResultCode =
  | (typeof ResultCodePaymentMethodsActionResultCode)[keyof typeof ResultCodePaymentMethodsActionResultCode]
  | (string & {});

export const resultCodePaymentMethodsActionResultCodeSchema: EnumSchema<ResultCodePaymentMethodsActionResultCode> =
  s.enumOf<ResultCodePaymentMethodsActionResultCode>(ResultCodePaymentMethodsActionResultCode);
