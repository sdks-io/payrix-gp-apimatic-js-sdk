import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The last transaction stage check for risk. <details> <summary>Valid Values</summary>
 *
 * - `activation` - **Terminal activation.**
 * - `auth` - **Apply this decision during transaction authorization.**
 * - `postauth` - **Apply this decision after transaction authorization.**
 * - `capture` - **Apply this decision during transaction capture.**
 * - `refund` - **Apply this decision when processing a refund.**
 *
 * </details>
 */
export const TxnCheckStage1 = {
  Activation: "activation",
  Auth: "auth",
  Postauth: "postauth",
  Capture: "capture",
  Refund: "refund",
} as const;
export type TxnCheckStage1 = (typeof TxnCheckStage1)[keyof typeof TxnCheckStage1] | (string & {});

export const txnCheckStage1Schema: EnumSchema<TxnCheckStage1> = s.enumOf<TxnCheckStage1>(TxnCheckStage1);
