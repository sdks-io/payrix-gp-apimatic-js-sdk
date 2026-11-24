import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LocationVerificationsDeviceCapabilitiesLocation = {
  OnMerchantPremises: "ON_MERCHANT_PREMISES",
  OffMerchantPremises: "OFF_MERCHANT_PREMISES",
  Unknown: "UNKNOWN",
  OnPayerPremises: "ON_PAYER_PREMISES",
  OffPayerPremises: "OFF_PAYER_PREMISES",
  OffMerchantPremisesMpos: "OFF_MERCHANT_PREMISES_MPOS",
  OnMerchantPremisesMpos: "ON_MERCHANT_PREMISES_MPOS",
  OffMerchantPremisesPayerPos: "OFF_MERCHANT_PREMISES_PAYER_POS",
} as const;
export type LocationVerificationsDeviceCapabilitiesLocation =
  | (typeof LocationVerificationsDeviceCapabilitiesLocation)[keyof typeof LocationVerificationsDeviceCapabilitiesLocation]
  | (string & {});

export const locationVerificationsDeviceCapabilitiesLocationSchema: EnumSchema<LocationVerificationsDeviceCapabilitiesLocation> =
  s.enumOf<LocationVerificationsDeviceCapabilitiesLocation>(LocationVerificationsDeviceCapabilitiesLocation);
