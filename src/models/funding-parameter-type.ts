import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FundingParameterType = {
  AgentCnp: "agentCnp",
  AgentCp: "agentCp",
  CreditCompanyId: "creditCompanyId",
  DebitCompanyId: "debitCompanyId",
  Delay: "delay",
  OffDaysAdditionalDelay: "offDaysAdditionalDelay",
  SettlementAccountTransferDelay: "settlementAccountTransferDelay",
  SettlementAccountTransferEnabled: "settlementAccountTransferEnabled",
  SettlementAccountTransferFloat: "settlementAccountTransferFloat",
  SettlementAccountTransferMaximum: "settlementAccountTransferMaximum",
  SettlementAccountTransferMinimum: "settlementAccountTransferMinimum",
  SettlementAccountTransferPercent: "settlementAccountTransferPercent",
  CustomBatchCloseTime: "customBatchCloseTime",
  LateFunding: "lateFunding",
  _5AmFunding: "5AmFunding",
} as const;
export type FundingParameterType =
  | (typeof FundingParameterType)[keyof typeof FundingParameterType]
  | (string & {});

export const fundingParameterTypeSchema: EnumSchema<FundingParameterType> =
  s.enumOf<FundingParameterType>(FundingParameterType);
