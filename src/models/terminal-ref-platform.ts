import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalRefPlatform = {
  Elavon: "ELAVON",
  Firstdata: "FIRSTDATA",
  Vcore: "VCORE",
  Vantiv: "VANTIV",
  Wellsfargo: "WELLSFARGO",
  Soundpayments: "SOUNDPAYMENTS",
  Payrix: "PAYRIX",
} as const;
export type TerminalRefPlatform =
  | (typeof TerminalRefPlatform)[keyof typeof TerminalRefPlatform]
  | (string & {});

export const terminalRefPlatformSchema: EnumSchema<TerminalRefPlatform> =
  s.enumOf<TerminalRefPlatform>(TerminalRefPlatform);
