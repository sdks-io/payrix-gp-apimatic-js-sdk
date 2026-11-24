import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FraudVerificationsDeviceCapabilitiesFraud = {
  PickUpCard: "PICK_UP_CARD",
} as const;
export type FraudVerificationsDeviceCapabilitiesFraud =
  | (typeof FraudVerificationsDeviceCapabilitiesFraud)[keyof typeof FraudVerificationsDeviceCapabilitiesFraud]
  | (string & {});

export const fraudVerificationsDeviceCapabilitiesFraudSchema: EnumSchema<FraudVerificationsDeviceCapabilitiesFraud> =
  s.enumOf<FraudVerificationsDeviceCapabilitiesFraud>(FraudVerificationsDeviceCapabilitiesFraud);
