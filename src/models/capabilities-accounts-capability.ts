import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CapabilitiesAccountsCapability = {
  PayOutEnable: "PAY_OUT_ENABLE",
  CardProcessingOverLimitEnable: "CARD_PROCESSING_OVER_LIMIT_ENABLE",
  BankTransferProcessingOverLimitEnable: "BANK_TRANSFER_PROCESSING_OVER_LIMIT_ENABLE",
  PayOutDisable: "PAY_OUT_DISABLE",
  CardProcessingOverLimitDisable: "CARD_PROCESSING_OVER_LIMIT_DISABLE",
  BankTransferProcessingOverLimitDisable: "BANK_TRANSFER_PROCESSING_OVER_LIMIT_DISABLE",
} as const;
export type CapabilitiesAccountsCapability =
  | (typeof CapabilitiesAccountsCapability)[keyof typeof CapabilitiesAccountsCapability]
  | (string & {});

export const capabilitiesAccountsCapabilitySchema: EnumSchema<CapabilitiesAccountsCapability> =
  s.enumOf<CapabilitiesAccountsCapability>(CapabilitiesAccountsCapability);
