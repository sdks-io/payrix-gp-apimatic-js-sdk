import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The processor that issued this terminalTxnRef.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `APPLE` - **APPLE**
 * - `ELAVON` - **ELAVON**
 * - `FIRSTDATA` - **FIRSTDATA**
 * - `GOOGLE` - **GOOGLE**
 * - `VANTIV` - **VANTIV**
 * - `VCORE` - **VCORE**
 * - `WELLSACH` - **WELLSACH**
 * - `WELLSFARGO` - **WELLSFARGO**
 * - `WFSINGLE` - **WFSINGLE**
 * - `WORLDPAY` - **WORLDPAY**
 * - `TDBANKCA` - **TDBANKCA**
 *
 * </details>
 */
export const TerminalRefsProcessor2 = {
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
export type TerminalRefsProcessor2 =
  | (typeof TerminalRefsProcessor2)[keyof typeof TerminalRefsProcessor2]
  | (string & {});

export const terminalRefsProcessor2Schema: EnumSchema<TerminalRefsProcessor2> =
  s.enumOf<TerminalRefsProcessor2>(TerminalRefsProcessor2);
