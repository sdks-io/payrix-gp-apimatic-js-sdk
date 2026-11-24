import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Length of time the customer has had an account with the merchant. Note for European merchants:
 * This field is recommended for SCA.
 * * `NO_ACCOUNT`
 * * `THIS_TRANSACTION`
 * * `LESS_THAN_THIRTY_DAYS`
 * * `THIRTY_TO_SIXTY_DAYS`
 * * `MORE_THAN_SIXTY_DAYS`
 */
export const AccountAgeAuthenticationsPayerAccountAge = {
  NoAccount: "NO_ACCOUNT",
  ThisTransaction: "THIS_TRANSACTION",
  LessThanThirtyDays: "LESS_THAN_THIRTY_DAYS",
  ThirtyToSixtyDays: "THIRTY_TO_SIXTY_DAYS",
  MoreThanSixtyDays: "MORE_THAN_SIXTY_DAYS",
} as const;
export type AccountAgeAuthenticationsPayerAccountAge =
  | (typeof AccountAgeAuthenticationsPayerAccountAge)[keyof typeof AccountAgeAuthenticationsPayerAccountAge]
  | (string & {});

export const accountAgeAuthenticationsPayerAccountAgeSchema: EnumSchema<AccountAgeAuthenticationsPayerAccountAge> =
  s.enumOf<AccountAgeAuthenticationsPayerAccountAge>(AccountAgeAuthenticationsPayerAccountAge);
