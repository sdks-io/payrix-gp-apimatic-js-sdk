import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An indicator showing what this terminalRef refers to.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `amexCharge` - **Amex Charge.**
 * - `batch` - **Batch.**
 * - `batchSuffix` - **Batch Suffix.**
 * - `boarding` - **Boarding.**
 * - `chain` - **The store chain ID for this Merchant.**
 * - `chargeback` - **Chargeback.**
 * - `companyDebit` - **Company Debit.**
 * - `companyCredit` - **Company Credit.**
 * - `create` - **Terminal Creation.**
 * - `disbursement` - **Disbursement.**
 * - `entity` - **The Entity ID.**
 * - `batchFile` - **Batch File.**
 * - `payoutFile` - **Payout File.**
 * - `frontend` - **Frontend.**
 * - `funding` - **The Payout funding ID for this Merchant.**
 * - `member` - **The member ID for this Member.**
 * - `merchant` - **The Merchant ID.**
 * - `mid` - **The transaction Merchant ID (MID).**
 * - `origId` - **Original ID.**
 * - `store` - **The store ID for this Merchant.**
 * - `software` - **Software.**
 * - `terminal` - **Terminal.**
 * - `displayName` - **Display Name.**
 * - `domain` - **Domain.**
 * - `expressCreds` - **Express Credentials.**
 *
 * </details>
 */
export const EntityRefStage1 = {
  AmexCharge: "amexCharge",
  Batch: "batch",
  BatchSuffix: "batchSuffix",
  Boarding: "boarding",
  Chain: "chain",
  Chargeback: "chargeback",
  CompanyDebit: "companyDebit",
  CompanyCredit: "companyCredit",
  Create: "create",
  Disbursement: "disbursement",
  Entity: "entity",
  BatchFile: "batchFile",
  PayoutFile: "payoutFile",
  Frontend: "frontend",
  Funding: "funding",
  Member: "member",
  Merchant: "merchant",
  Mid: "mid",
  OrigId: "origId",
  Store: "store",
  Software: "software",
  Terminal: "terminal",
  DisplayName: "displayName",
  Domain: "domain",
  ExpressCreds: "expressCreds",
} as const;
export type EntityRefStage1 = (typeof EntityRefStage1)[keyof typeof EntityRefStage1] | (string & {});

export const entityRefStage1Schema: EnumSchema<EntityRefStage1> = s.enumOf<EntityRefStage1>(EntityRefStage1);
