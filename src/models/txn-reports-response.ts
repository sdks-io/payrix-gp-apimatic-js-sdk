import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";

export type TxnReportsResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  /** The identifier of the Transaction resource associated with this txnReports resource. */
  txn?: string;
  /** The type of interchange used by the Transaction. */
  interchangeType?: string;
  /** The name of the bank that issued the card used in the Transaction. */
  issuingBank?: string;
  /**
   * If the fee charged by the Processor was a flat rate, then this field specifies its absolute
   * amount. This field is specified as an integer in cents.
   */
  flatRateFee?: number;
  /**
   * If the fee charged by the Processor was a percentage of the Transaction value, then this field
   * specifies the percentage, expressed in basis points. For example, 25.3% is expressed as '2530'.
   */
  percentFee?: number;
  /**
   * This is the total amount charged in interchange fees. This field is specified as an integer in
   * cents.
   */
  feeTotal?: number;
};

export const txnReportsResponseSchema: Schema<TxnReportsResponse> = s.object<TxnReportsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  txn: s.optional(s.string()),
  interchangeType: s.optional(s.string()),
  issuingBank: s.optional(s.string()),
  flatRateFee: s.optional(s.number()),
  percentFee: s.optional(s.number()),
  feeTotal: s.optional(s.number()),
});
