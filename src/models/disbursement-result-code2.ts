import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The code identifying the disbursement result.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `pending` - **Disbursement processing is pending account verification.**
 *
 * - `internal` - **Failed. Internal note and/or failure.**
 *
 * - `nsf` - **Failed. Disbursement return due to insufficient funds.**
 *
 * - `badAccount` - **Failed. Disbursement return due to incorrect payment account information.**
 *
 * - `unauthorized` - **Failed. Disbursement return due to customer dispute of authorization.**
 *
 * - `general` - **General note and/or failure.**
 *
 * - `noc` - **Notice of change.**
 *
 * - `parameter` - **Disbursement processing withheld due to parameter configuration.**
 *
 * - `sameDay` - **Failed. Same-day processing note and/or failure.**
 *
 * - `transferDetails` - **Trace number note and/or data.**
 *
 * - `platform` - **Failed. Processor note and/or failure.**
 *
 * </details>
 */
export const DisbursementResultCode2 = {
  Pending: "pending",
  Internal: "internal",
  Nsf: "nsf",
  BadAccount: "badAccount",
  Unauthorized: "unauthorized",
  General: "general",
  Noc: "noc",
  Parameter: "parameter",
  SameDay: "sameDay",
  TransferDetails: "transferDetails",
  Platform: "platform",
} as const;
export type DisbursementResultCode2 =
  | (typeof DisbursementResultCode2)[keyof typeof DisbursementResultCode2]
  | (string & {});

export const disbursementResultCode2Schema: EnumSchema<DisbursementResultCode2> =
  s.enumOf<DisbursementResultCode2>(DisbursementResultCode2);
