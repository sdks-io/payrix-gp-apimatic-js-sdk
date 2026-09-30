import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How is the terminal employed in the type of business using the terminal.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `1` - **Retail**
 * - `2` - **Retail with tips**
 * - `3` - **Restaurant**
 * - `4` - **Lodging**
 * - `5` - **Bar**
 * - `6` - **Cash Advance**
 * - `7` - **Mail/Telephone Order**
 * - `8` - **Pay At The Pump**
 * - `9` - **Service Rest**
 * - `10` - **E-commerce**
 * - `11` - **Direct Marketing**
 * - `12` - **Fine Dining**
 * - `13` - **Gift Card Only**
 *
 * </details>
 */
export const TerminalEnvironment1 = {
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
} as const;
export type TerminalEnvironment1 =
  | (typeof TerminalEnvironment1)[keyof typeof TerminalEnvironment1]
  | (number & {});

export const terminalEnvironment1Schema: EnumSchema<TerminalEnvironment1> =
  s.enumOf<TerminalEnvironment1>(TerminalEnvironment1);
