import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How payment information has been entered, including manually keyed entries, card swipes with
 * track 1 or 2 data received, card dips with EMV chip data received, contactless card reads with
 * track or EMV data received, and ApplePay read with cryptogram data received.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Manually keyed entry.**
 * - `2` - **Card swiped. Track 1 received.**
 * - `3` - **Card swiped. Track 2 received.**
 * - `4` - **Card swiped. Track 1 & 2 received.**
 * - `5` - **Card dipped. EMV chip received.**
 * - `6` - **Contactless card read. Track or EMV data received.**
 * - `7` - **Track Data from Card Swipe after EMV chip failure.**
 * - `8` - **Track Data from Manually keyed entry after EMV chip failure.**
 * - `9` - **ApplePay**
 * - `10` - **Google Pay.**
 * - `11` - **Merchant created transaction.**
 * - `12` - **Invoice payment.**
 * - `13` - **Merchant created transaction in payrix portal.**
 * - `14` - **Invoice payment from payrix portal.**
 *
 * </details>
 */
export const EntryMode1 = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
  _9: 9,
  _10: 10,
  _11: 11,
  _12: 12,
  _13: 13,
  _14: 14,
} as const;
export type EntryMode1 = (typeof EntryMode1)[keyof typeof EntryMode1] | (number & {});

export const entryMode1Schema: EnumSchema<EntryMode1> = s.enumOf<EntryMode1>(EntryMode1);
