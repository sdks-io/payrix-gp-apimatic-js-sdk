import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeTransactionsActionType = {
  Adjust: "ADJUST",
  Authorize: "AUTHORIZE",
  Capture: "CAPTURE",
  Confirm: "CONFIRM",
  Force: "FORCE",
  Increment: "INCREMENT",
  Initiate: "INITIATE",
  MultipleCapture: "MULTIPLE_CAPTURE",
  Preauthorize: "PREAUTHORIZE",
  PreauthorizeMultipleCapture: "PREAUTHORIZE_MULTIPLE_CAPTURE",
  Reauthorization: "REAUTHORIZATION",
  RedirectFrom: "REDIRECT_FROM",
  RedirectTo: "REDIRECT_TO",
  Refund: "REFUND",
  Release: "RELEASE",
  Reverse: "REVERSE",
  Split: "SPLIT",
  StatusNotification: "STATUS_NOTIFICATION",
  TransactionList: "TRANSACTION_LIST",
  TransactionSingle: "TRANSACTION_SINGLE",
  Hold: "HOLD",
} as const;
export type TypeTransactionsActionType =
  | (typeof TypeTransactionsActionType)[keyof typeof TypeTransactionsActionType]
  | (string & {});

export const typeTransactionsActionTypeSchema: EnumSchema<TypeTransactionsActionType> =
  s.enumOf<TypeTransactionsActionType>(TypeTransactionsActionType);
