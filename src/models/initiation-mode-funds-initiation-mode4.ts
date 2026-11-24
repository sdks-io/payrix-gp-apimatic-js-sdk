import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates how the funds movement was initiated.
 *
 *      * `AUTO` - Funds were automatically transferred by Global Payments
 *      * `MANUAL` - Funds were transferred via a request to Global Payments"
 */
export const InitiationModeFundsInitiationMode4 = {
  Auto: "AUTO",
  Manual: "MANUAL",
} as const;
export type InitiationModeFundsInitiationMode4 =
  | (typeof InitiationModeFundsInitiationMode4)[keyof typeof InitiationModeFundsInitiationMode4]
  | (string & {});

export const initiationModeFundsInitiationMode4Schema: EnumSchema<InitiationModeFundsInitiationMode4> =
  s.enumOf<InitiationModeFundsInitiationMode4>(InitiationModeFundsInitiationMode4);
