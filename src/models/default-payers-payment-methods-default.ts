import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A flag used to identify whether the Payment method should be used as the default Payment Method
 * for the Payer
 */
export const DefaultPayersPaymentMethodsDefault = {
  Yes: "YES",
  No: "NO",
} as const;
export type DefaultPayersPaymentMethodsDefault =
  | (typeof DefaultPayersPaymentMethodsDefault)[keyof typeof DefaultPayersPaymentMethodsDefault]
  | (string & {});

export const defaultPayersPaymentMethodsDefaultSchema: EnumSchema<DefaultPayersPaymentMethodsDefault> =
  s.enumOf<DefaultPayersPaymentMethodsDefault>(DefaultPayersPaymentMethodsDefault);
