import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountsReserved = {
  _0: 0,
  _1: 1,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
  _9: 9,
  _10: 10,
} as const;
export type AccountsReserved = (typeof AccountsReserved)[keyof typeof AccountsReserved] | (number & {});

export const accountsReservedSchema: EnumSchema<AccountsReserved> =
  s.enumOf<AccountsReserved>(AccountsReserved);
