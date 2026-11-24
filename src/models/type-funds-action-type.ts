import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeFundsActionType = {
  Funds: "FUNDS",
  FundsList: "FUNDS_LIST",
  FundsSingle: "FUNDS_SINGLE",
  BankTransferReturnNotification: "BANK_TRANSFER_RETURN_NOTIFICATION",
} as const;
export type TypeFundsActionType =
  | (typeof TypeFundsActionType)[keyof typeof TypeFundsActionType]
  | (string & {});

export const typeFundsActionTypeSchema: EnumSchema<TypeFundsActionType> =
  s.enumOf<TypeFundsActionType>(TypeFundsActionType);
