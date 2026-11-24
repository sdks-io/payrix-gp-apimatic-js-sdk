import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Capability1 = {
  PayOutEnable: "PAY_OUT_ENABLE",
  CardProcessingOverLimitEnable: "CARD_PROCESSING_OVER_LIMIT_ENABLE",
  BankTransferProcessingOverLimitEnable: "BANK_TRANSFER_PROCESSING_OVER_LIMIT_ENABLE",
  PayOutDisable: "PAY_OUT_DISABLE",
  CardProcessingOverLimitDisable: "CARD_PROCESSING_OVER_LIMIT_DISABLE",
  BankTransferProcessingOverLimitDisable: "BANK_TRANSFER_PROCESSING_OVER_LIMIT_DISABLE",
} as const;
export type Capability1 = (typeof Capability1)[keyof typeof Capability1] | (string & {});

export const capability1Schema: EnumSchema<Capability1> = s.enumOf<Capability1>(Capability1);
