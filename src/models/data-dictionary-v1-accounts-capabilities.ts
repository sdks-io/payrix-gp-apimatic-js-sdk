import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** These are the capabilities enabled by the platform for the account. */
export const DataDictionaryV1AccountsCapabilities = {
  PayInEnable: "PAY_IN_ENABLE",
  PayInDisable: "PAY_IN_DISABLE",
  PayOutEnable: "Pay_OUT_ENABLE",
  PayOutDisable: "PAY_OUT_DISABLE",
  CcProcessingEnable: "CC_PROCESSING_ENABLE",
  CcProcessingDisable: "CC_PROCESSING_DISABLE",
  TransferInEnable: "TRANSFER_IN_ENABLE",
  TransferInDisable: "TRANSFER_IN_DISABLE",
  TransferOutEnable: "TRANSFER_OUT_ENABLE",
  TransferOutDisable: "TRANSFER_OUT_DISABLE",
  CardProcessingOverLimitEnable: "CARD_PROCESSING_OVER_LIMIT_ENABLE",
  CardProcessingOverLimitDisable: "CARD_PROCESSING_OVER_LIMIT_DISABLE",
  AchProcessingOverLimitEnable: "ACH_PROCESSING_OVER_LIMIT_ENABLE",
  AchProcessingOverLimitDisable: "ACH_PROCESSING_OVER_LIMIT_DISABLE",
} as const;
export type DataDictionaryV1AccountsCapabilities =
  | (typeof DataDictionaryV1AccountsCapabilities)[keyof typeof DataDictionaryV1AccountsCapabilities]
  | (string & {});

export const dataDictionaryV1AccountsCapabilitiesSchema: EnumSchema<DataDictionaryV1AccountsCapabilities> =
  s.enumOf<DataDictionaryV1AccountsCapabilities>(DataDictionaryV1AccountsCapabilities);
