import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentMethodProgramCodesTransactionsLodgingChargeItemsPaymentMethodProgramCode = {
  AssuredReservation: "ASSURED_RESERVATION",
  CardDeposit: "CARD_DEPOSIT",
  Purchase: "PURCHASE",
  Other: "OTHER",
} as const;
export type PaymentMethodProgramCodesTransactionsLodgingChargeItemsPaymentMethodProgramCode =
  | (typeof PaymentMethodProgramCodesTransactionsLodgingChargeItemsPaymentMethodProgramCode)[keyof typeof PaymentMethodProgramCodesTransactionsLodgingChargeItemsPaymentMethodProgramCode]
  | (string & {});

export const paymentMethodProgramCodesTransactionsLodgingChargeItemsPaymentMethodProgramCodeSchema: EnumSchema<PaymentMethodProgramCodesTransactionsLodgingChargeItemsPaymentMethodProgramCode> =
  s.enumOf<PaymentMethodProgramCodesTransactionsLodgingChargeItemsPaymentMethodProgramCode>(
    PaymentMethodProgramCodesTransactionsLodgingChargeItemsPaymentMethodProgramCode,
  );
