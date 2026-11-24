import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The recommended AVS action to be taken by the agent processing the card transaction. */
export const AvsActionVerificationsPaymentMethodCardAvsAction = {
  Prompt: "PROMPT",
  Decline: "DECLINE",
  Accept: "ACCEPT",
} as const;
export type AvsActionVerificationsPaymentMethodCardAvsAction =
  | (typeof AvsActionVerificationsPaymentMethodCardAvsAction)[keyof typeof AvsActionVerificationsPaymentMethodCardAvsAction]
  | (string & {});

export const avsActionVerificationsPaymentMethodCardAvsActionSchema: EnumSchema<AvsActionVerificationsPaymentMethodCardAvsAction> =
  s.enumOf<AvsActionVerificationsPaymentMethodCardAvsAction>(
    AvsActionVerificationsPaymentMethodCardAvsAction,
  );
