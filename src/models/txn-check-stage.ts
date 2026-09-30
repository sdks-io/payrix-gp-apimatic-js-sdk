import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnCheckStage = {
  Activation: "activation",
  Auth: "auth",
  Postauth: "postauth",
  Capture: "capture",
  Refund: "refund",
} as const;
export type TxnCheckStage = (typeof TxnCheckStage)[keyof typeof TxnCheckStage] | (string & {});

export const txnCheckStageSchema: EnumSchema<TxnCheckStage> = s.enumOf<TxnCheckStage>(TxnCheckStage);
