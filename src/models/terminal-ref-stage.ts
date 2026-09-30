import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalRefStage = {
  Create: "create",
  Pid: "pid",
  Tid: "tid",
  Token: "token",
  Ctid: "ctid",
} as const;
export type TerminalRefStage = (typeof TerminalRefStage)[keyof typeof TerminalRefStage] | (string & {});

export const terminalRefStageSchema: EnumSchema<TerminalRefStage> =
  s.enumOf<TerminalRefStage>(TerminalRefStage);
