import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Determines the level at which the ACH account is verified by the host system. */
export const VerificationLevelVerificationsPaymentMethodBankTransferVerificationLevel = {
  Level1: "LEVEL_1",
  Level2: "LEVEL_2",
  Level3: "LEVEL_3",
} as const;
export type VerificationLevelVerificationsPaymentMethodBankTransferVerificationLevel =
  | (typeof VerificationLevelVerificationsPaymentMethodBankTransferVerificationLevel)[keyof typeof VerificationLevelVerificationsPaymentMethodBankTransferVerificationLevel]
  | (string & {});

export const verificationLevelVerificationsPaymentMethodBankTransferVerificationLevelSchema: EnumSchema<VerificationLevelVerificationsPaymentMethodBankTransferVerificationLevel> =
  s.enumOf<VerificationLevelVerificationsPaymentMethodBankTransferVerificationLevel>(
    VerificationLevelVerificationsPaymentMethodBankTransferVerificationLevel,
  );
