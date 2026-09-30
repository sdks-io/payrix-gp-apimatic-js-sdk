import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of fundingParameter that we will be configuring.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `agentCnp` - **The id to use for boarding merchants that are card not present**
 * - `agentCp` - **The id to use for boarding merchants that are card present**
 * - `creditCompanyId` - **Company credit identifier**
 * - `debitCompanyId` - **Company debit identifier**
 * - `delay` - **Delay**
 * - `offDaysAdditionalDelay` - **Additional delay for off days.**
 * - `settlementAccountTransferDelay` - **The amount of time in days to wait before issuing a
 *   transfer, will be counted from the date of the first item within the total settlement amount.**
 * - `settlementAccountTransferEnabled` - **Indication if during settlements credits should be
 *   transferred from the merchant's operating account.**
 * - `settlementAccountTransferFloat` - **Additional amount to keep at the merchant's operating
 *   account.**
 * - `settlementAccountTransferMaximum` - **The maximum amount needed to transfer funds from
 *   merchant's operating account.**
 * - `settlementAccountTransferMinimum` - **The minimum amount needed to transfer funds from the
 *   merchant's operating account.**
 * - `settlementAccountTransferPercent` - **The percent amount to transfer from the total settlement
 *   amount.**
 * - `customBatchCloseTime` - **The specified time to close a batch**
 * - `lateFunding` - **2 am late funding cutoff time**
 * - `5AmFunding` - **5 am funding cutoff time**
 *
 * </details>
 */
export const FundingParameterType2 = {
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
export type FundingParameterType2 =
  | (typeof FundingParameterType2)[keyof typeof FundingParameterType2]
  | (string & {});

export const fundingParameterType2Schema: EnumSchema<FundingParameterType2> =
  s.enumOf<FundingParameterType2>(FundingParameterType2);
