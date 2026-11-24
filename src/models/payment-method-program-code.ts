import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentMethodProgramCode = {
  AssuredReservation: "ASSURED_RESERVATION",
  CardDeposit: "CARD_DEPOSIT",
  Purchase: "PURCHASE",
  Other: "OTHER",
} as const;
export type PaymentMethodProgramCode =
  | (typeof PaymentMethodProgramCode)[keyof typeof PaymentMethodProgramCode]
  | (string & {});

export const paymentMethodProgramCodeSchema: EnumSchema<PaymentMethodProgramCode> =
  s.enumOf<PaymentMethodProgramCode>(PaymentMethodProgramCode);
