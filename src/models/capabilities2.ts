import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Capabilities2 = {
  PayOutEnable: "PAY_OUT_ENABLE",
  CardProcessingOverLimitEnable: "CARD_PROCESSING_OVER_LIMIT_ENABLE",
  BankTransferProcessingOverLimitEnable: "BANK_TRANSFER_PROCESSING_OVER_LIMIT_ENABLE",
  PayOutDisable: "PAY_OUT_DISABLE",
  CardProcessingOverLimitDisable: "CARD_PROCESSING_OVER_LIMIT_DISABLE",
  BankTransferProcessingOverLimitDisable: "BANK_TRANSFER_PROCESSING_OVER_LIMIT_DISABLE",
} as const;
export type Capabilities2 = (typeof Capabilities2)[keyof typeof Capabilities2] | (string & {});

export const capabilities2Schema: EnumSchema<Capabilities2> = s.enumOf<Capabilities2>(Capabilities2);
