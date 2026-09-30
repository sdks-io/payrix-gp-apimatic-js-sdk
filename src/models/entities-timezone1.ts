import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The time zone for the address associated with the terminal's location.
 *
 * <details> <summary>Valid Values</summary>
 *
 *   - `est` - **Eastern Standard Time**
 *
 *   - `pst` - **Pacific Standard Time**
 *
 *   - `cst` - **Central Standard Time**
 *
 *   - `mst` - **Mountain Daylight Time**
 *
 *   - `akst` - **Alaska Standard Time**
 *
 *   - `hst` - **Hawaii Standard Time**
 *
 *   - `sst` - **Samoa Standard Time**
 *
 *   - `chst` - **Chamorro Standard Time**
 *
 *   - `ast` - **Atlantic Standard Time**
 *
 *   - `pwt` - **Palau Time**
 *
 *   - `mht` - **Marshall Islands Time**
 *
 *   - `chut` - **Chuuk Time**
 *
 *   - `nst` - **Newfoundland Standard Time**
 *
 * </details>
 */
export const EntitiesTimezone1 = {
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
export type EntitiesTimezone1 = (typeof EntitiesTimezone1)[keyof typeof EntitiesTimezone1] | (string & {});

export const entitiesTimezone1Schema: EnumSchema<EntitiesTimezone1> =
  s.enumOf<EntitiesTimezone1>(EntitiesTimezone1);
