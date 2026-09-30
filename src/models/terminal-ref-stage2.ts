import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An indicator showing what this terminalRef refers to, such as 'create', 'pid', 'tid', 'token', or
 * 'ctid'.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `create` - **Terminal Creation**
 * - `pid` - **Platform ID**
 * - `tid` - **Terminal ID**
 * - `token` - **Token ID**
 * - `ctid` - **Custom Terminal ID**
 *
 * </details>
 */
export const TerminalRefStage2 = {
  Create: "create",
  Pid: "pid",
  Tid: "tid",
  Token: "token",
  Ctid: "ctid",
} as const;
export type TerminalRefStage2 = (typeof TerminalRefStage2)[keyof typeof TerminalRefStage2] | (string & {});

export const terminalRefStage2Schema: EnumSchema<TerminalRefStage2> =
  s.enumOf<TerminalRefStage2>(TerminalRefStage2);
