import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeDepositsActionType = {
  DepositSingle: "DEPOSIT_SINGLE",
  DepositList: "DEPOSIT_LIST",
} as const;
export type TypeDepositsActionType =
  | (typeof TypeDepositsActionType)[keyof typeof TypeDepositsActionType]
  | (string & {});

export const typeDepositsActionTypeSchema: EnumSchema<TypeDepositsActionType> =
  s.enumOf<TypeDepositsActionType>(TypeDepositsActionType);
