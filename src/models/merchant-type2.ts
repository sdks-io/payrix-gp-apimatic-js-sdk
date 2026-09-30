import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of this merchant result
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `general` - **General use for unspecified type.**
 * - `internal` - **An internal failure result message.**
 * - `data` - **Missing merchant boarding related data failure message.**
 * - `legal` - **Result message related to legal matters.**
 * - `denial` - **Merchant boarding denial result message.**
 * - `platform` - **Processor boarding failure result message.**
 * - `platformNote` - **Processor note from merchant boarding.**
 *
 * </details>
 */
export const MerchantType2 = {
  General: "general",
  Internal: "internal",
  Data: "data",
  Legal: "legal",
  Denial: "denial",
  Platform: "platform",
  PlatformNote: "platformNote",
} as const;
export type MerchantType2 = (typeof MerchantType2)[keyof typeof MerchantType2] | (string & {});

export const merchantType2Schema: EnumSchema<MerchantType2> = s.enumOf<MerchantType2>(MerchantType2);
