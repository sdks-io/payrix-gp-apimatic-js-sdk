import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This Indicates the Program type for the Bill payment */
export const ProgramTypeTransactionsPaymentMethodProgramType = {
  WalletTransfer: "WALLET_TRANSFER",
  AccountToAccount: "ACCOUNT_TO_ACCOUNT",
  DirectTransfer: "DIRECT_TRANSFER",
  ConsumerBillPayment: "CONSUMER_BILL_PAYMENT",
} as const;
export type ProgramTypeTransactionsPaymentMethodProgramType =
  | (typeof ProgramTypeTransactionsPaymentMethodProgramType)[keyof typeof ProgramTypeTransactionsPaymentMethodProgramType]
  | (string & {});

export const programTypeTransactionsPaymentMethodProgramTypeSchema: EnumSchema<ProgramTypeTransactionsPaymentMethodProgramType> =
  s.enumOf<ProgramTypeTransactionsPaymentMethodProgramType>(ProgramTypeTransactionsPaymentMethodProgramType);
