import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnRefStage = {
  Activation: "activation",
  Auth: "auth",
  Draft: "draft",
  File: "file",
  Retrieval: "retrieval",
  AcquirerTxnId: "acquirerTxnId",
  OrigTxnId: "origTxnId",
} as const;
export type TerminalTxnRefStage =
  | (typeof TerminalTxnRefStage)[keyof typeof TerminalTxnRefStage]
  | (string & {});

export const terminalTxnRefStageSchema: EnumSchema<TerminalTxnRefStage> =
  s.enumOf<TerminalTxnRefStage>(TerminalTxnRefStage);
