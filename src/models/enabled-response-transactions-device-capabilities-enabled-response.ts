import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EnabledResponseTransactionsDeviceCapabilitiesEnabledResponse = {
  Avs: "AVS",
  Cvv: "CVV",
  BrandReference: "BRAND_REFERENCE",
  MaskedNumberLast4: "MASKED_NUMBER_LAST4",
} as const;
export type EnabledResponseTransactionsDeviceCapabilitiesEnabledResponse =
  | (typeof EnabledResponseTransactionsDeviceCapabilitiesEnabledResponse)[keyof typeof EnabledResponseTransactionsDeviceCapabilitiesEnabledResponse]
  | (string & {});

export const enabledResponseTransactionsDeviceCapabilitiesEnabledResponseSchema: EnumSchema<EnabledResponseTransactionsDeviceCapabilitiesEnabledResponse> =
  s.enumOf<EnabledResponseTransactionsDeviceCapabilitiesEnabledResponse>(
    EnabledResponseTransactionsDeviceCapabilitiesEnabledResponse,
  );
