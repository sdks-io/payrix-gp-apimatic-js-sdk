import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsTcAttestation = {
  _0: 0,
  _1: 1,
} as const;
export type MerchantsTcAttestation =
  | (typeof MerchantsTcAttestation)[keyof typeof MerchantsTcAttestation]
  | (number & {});

export const merchantsTcAttestationSchema: EnumSchema<MerchantsTcAttestation> =
  s.enumOf<MerchantsTcAttestation>(MerchantsTcAttestation);
