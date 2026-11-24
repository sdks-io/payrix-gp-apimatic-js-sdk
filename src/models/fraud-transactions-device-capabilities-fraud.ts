import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FraudTransactionsDeviceCapabilitiesFraud = {
  PickUpCard: "PICK_UP_CARD",
} as const;
export type FraudTransactionsDeviceCapabilitiesFraud =
  | (typeof FraudTransactionsDeviceCapabilitiesFraud)[keyof typeof FraudTransactionsDeviceCapabilitiesFraud]
  | (string & {});

export const fraudTransactionsDeviceCapabilitiesFraudSchema: EnumSchema<FraudTransactionsDeviceCapabilitiesFraud> =
  s.enumOf<FraudTransactionsDeviceCapabilitiesFraud>(FraudTransactionsDeviceCapabilitiesFraud);
