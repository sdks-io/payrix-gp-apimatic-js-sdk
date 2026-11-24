import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The reason stored credentials are being used to to create a transaction. */
export const ReasonTransactionsStoredCredentialReason = {
  Incremental: "INCREMENTAL",
  Resubmission: "RESUBMISSION",
  Reauthorization: "REAUTHORIZATION",
  Delayed: "DELAYED",
  NoShow: "NO_SHOW",
} as const;
export type ReasonTransactionsStoredCredentialReason =
  | (typeof ReasonTransactionsStoredCredentialReason)[keyof typeof ReasonTransactionsStoredCredentialReason]
  | (string & {});

export const reasonTransactionsStoredCredentialReasonSchema: EnumSchema<ReasonTransactionsStoredCredentialReason> =
  s.enumOf<ReasonTransactionsStoredCredentialReason>(ReasonTransactionsStoredCredentialReason);
