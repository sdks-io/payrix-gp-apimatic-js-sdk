import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnRefStage = {
  Auth: "auth",
  Capture: "capture",
  Draft: "draft",
  File: "file",
  Network: "network",
  Refund: "refund",
  Retrieval: "retrieval",
  ThreatMetrix: "threatMetrix",
  TxnHash: "txnHash",
  Arn: "ARN",
  AcquirerTxnId: "acquirerTxnId",
  OrigTxnId: "origTxnId",
} as const;
export type TxnRefStage = (typeof TxnRefStage)[keyof typeof TxnRefStage] | (string & {});

export const txnRefStageSchema: EnumSchema<TxnRefStage> = s.enumOf<TxnRefStage>(TxnRefStage);
