import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalTxnsSignature1Schema, type TerminalTxnsSignature1 } from "./terminal-txns-signature1.js";
import { txnsDebtRepayment1Schema, type TxnsDebtRepayment1 } from "./txns-debt-repayment1.js";
import { txnsFundingEnabled1Schema, type TxnsFundingEnabled1 } from "./txns-funding-enabled1.js";

export type TxnsPutRequest = {
  /** If the Transaction is linked to a Batch, this field specifies the identifier of the Batch. */
  batch?: string;
  debtRepayment?: TxnsDebtRepayment1;
  /**
   * For entry creation and deletion job sequencing: the current processed sequence number for this
   * transaction.
   */
  processedSequence?: number;
  /** A date indicating when this Transaction was funded. This field is set automatically. */
  funded?: number;
  /** The transaction has been returned by the receiver. */
  returned?: string;
  fundingEnabled?: TxnsFundingEnabled1;
  /**
   * For entry creation and deletion job sequencing: the current processed sequence number for this
   * transaction.
   */
  requestSequence?: number;
  /** The token of the Tokens resource this Transaction is associated with. */
  token?: string;
  /** The customer identifier from the AuthToken used during authentication. */
  authTokenCustomer?: string;
  /** This field is stored as a text string and must be between 0 and 1000 characters long. */
  channel?: string;
  /**
   * The client ip address from which the Transaction was created. Valid values are any Ipv4 or Ipv6
   * address.
   */
  clientIp?: string;
  currency?: Record<string, unknown>;
  /**
   * When fee is set, this will track the amount of the fee that has been consumed. This field is
   * specified as an integer in cents.
   */
  feeConsumed?: number;
  signature?: TerminalTxnsSignature1;
  /** Threatmetrix session ID. Not for partner/referrer use. */
  tmxSessionId?: string;
  /**
   * For external recurring systems, this is the first transaction ID related to this recurring
   * payment.
   */
  firstTxn?: string;
};

export const txnsPutRequestSchema: Schema<TxnsPutRequest> = s.object<TxnsPutRequest>({
  batch: s.optional(s.string()),
  debtRepayment: s.optional(s.lazy(() => txnsDebtRepayment1Schema)),
  processedSequence: s.optional(s.number()),
  funded: s.optional(s.number()),
  returned: s.optional(s.string()),
  fundingEnabled: s.optional(s.lazy(() => txnsFundingEnabled1Schema)),
  requestSequence: s.optional(s.number()),
  token: s.optional(s.string()),
  authTokenCustomer: s.optional(s.string()),
  channel: s.optional(s.string()),
  clientIp: s.optional(s.string()),
  currency: s.optional(s.record(s.string(), s.unknown())),
  feeConsumed: s.optional(s.number()),
  signature: s.optional(s.lazy(() => terminalTxnsSignature1Schema)),
  tmxSessionId: s.optional(s.string()),
  firstTxn: s.optional(s.string()),
});
