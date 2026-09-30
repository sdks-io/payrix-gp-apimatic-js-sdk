import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The timezone for the address associated with the terminal's location.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `est` - **Eastern Standard Time**
 * - `cst` - **Central Standard Time**
 * - `pst` - **Pacific Standard Time**
 * - `mst` - **Mountain Standard Time**
 * - `akst` - **Alaska Standard Time**
 * - `hst` - **Hawaii Standard Time**
 * - `sst` - **Samoa Standard Time**
 * - `chst` - **Chamorro Standard Time**
 * - `ast` - **Atlantic Standard Time**
 * - `pwt` - **Palau Time**
 * - `mht` - **Marshall Islands Time**
 * - `chut` - **Chuuk Time**
 * - `nst` - **Newfoundland Standard Time**
 *
 * </details>
 */
export const TerminalsTimezone1 = {
  Est: "est",
  Cst: "cst",
  Pst: "pst",
  Mst: "mst",
  Akst: "akst",
  Hst: "hst",
  Sst: "sst",
  Chst: "chst",
  Ast: "ast",
  Pwt: "pwt",
  Mht: "mht",
  Chut: "chut",
  Nst: "nst",
} as const;
export type TerminalsTimezone1 = (typeof TerminalsTimezone1)[keyof typeof TerminalsTimezone1] | (string & {});

export const terminalsTimezone1Schema: EnumSchema<TerminalsTimezone1> =
  s.enumOf<TerminalsTimezone1>(TerminalsTimezone1);
