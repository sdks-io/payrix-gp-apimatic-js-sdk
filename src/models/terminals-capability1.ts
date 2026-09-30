import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The credit card terminal’s capabilities.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **KEYED.** Manual Card Payment Entry.
 * - `2` - **MAGSTRIPE.** Magstripe/Swipe.
 * - `3` - **EMV.** (EuroPay, Mastercard, & Visa) Chip Card Payments.
 * - `4` - **TAP.** Tap-to-Pay.
 *
 * </details>
 */
export const TerminalsCapability1 = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type TerminalsCapability1 =
  | (typeof TerminalsCapability1)[keyof typeof TerminalsCapability1]
  | (number & {});

export const terminalsCapability1Schema: EnumSchema<TerminalsCapability1> =
  s.enumOf<TerminalsCapability1>(TerminalsCapability1);
