import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Length of time since the account has changed.
 * * `THIS_TRANSACTION`
 * * `LESS_THAN_THIRTY_DAYS`
 * * `THIRTY_TO_SIXTY_DAYS`
 * * `MORE_THAN_SIXTY_DAYS`
 */
export const AccountChangeIndicatorAuthenticationsPayerAccountChangeIndicator = {
  ThisTransaction: "THIS_TRANSACTION",
  LessThanThirtyDays: "LESS_THAN_THIRTY_DAYS",
  ThirtyToSixtyDays: "THIRTY_TO_SIXTY_DAYS",
  MoreThanSixtyDays: "MORE_THAN_SIXTY_DAYS",
} as const;
export type AccountChangeIndicatorAuthenticationsPayerAccountChangeIndicator =
  | (typeof AccountChangeIndicatorAuthenticationsPayerAccountChangeIndicator)[keyof typeof AccountChangeIndicatorAuthenticationsPayerAccountChangeIndicator]
  | (string & {});

export const accountChangeIndicatorAuthenticationsPayerAccountChangeIndicatorSchema: EnumSchema<AccountChangeIndicatorAuthenticationsPayerAccountChangeIndicator> =
  s.enumOf<AccountChangeIndicatorAuthenticationsPayerAccountChangeIndicator>(
    AccountChangeIndicatorAuthenticationsPayerAccountChangeIndicator,
  );
