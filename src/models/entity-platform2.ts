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
export const EntityPlatform2 = {
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
export type EntityPlatform2 = (typeof EntityPlatform2)[keyof typeof EntityPlatform2] | (string & {});

export const entityPlatform2Schema: EnumSchema<EntityPlatform2> = s.enumOf<EntityPlatform2>(EntityPlatform2);
