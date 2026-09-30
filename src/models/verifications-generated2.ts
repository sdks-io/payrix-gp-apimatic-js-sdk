import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * <details> <summary>Valid Values</summary>
 *
 *  - `0` - **OFF**
 *
 *  - `1` - **ON**
 *
 * </details>
 */
export const VerificationsGenerated2 = {
  _0: 0,
  _1: 1,
} as const;
export type VerificationsGenerated2 =
  | (typeof VerificationsGenerated2)[keyof typeof VerificationsGenerated2]
  | (number & {});

export const verificationsGenerated2Schema: EnumSchema<VerificationsGenerated2> =
  s.enumOf<VerificationsGenerated2>(VerificationsGenerated2);
