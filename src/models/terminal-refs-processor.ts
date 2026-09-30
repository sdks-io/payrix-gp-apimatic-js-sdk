import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalRefsProcessor = {
  Apple: "APPLE",
  Elavon: "ELAVON",
  Firstdata: "FIRSTDATA",
  Google: "GOOGLE",
  Vantiv: "VANTIV",
  Vcore: "VCORE",
  Wellsach: "WELLSACH",
  Wellsfargo: "WELLSFARGO",
  Wfsingle: "WFSINGLE",
  Worldpay: "WORLDPAY",
  Tdbankca: "TDBANKCA",
} as const;
export type TerminalRefsProcessor =
  | (typeof TerminalRefsProcessor)[keyof typeof TerminalRefsProcessor]
  | (string & {});

export const terminalRefsProcessorSchema: EnumSchema<TerminalRefsProcessor> =
  s.enumOf<TerminalRefsProcessor>(TerminalRefsProcessor);
