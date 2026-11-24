import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the customer is paying for merchandise that will be available at a future date.
 * * `MERCHANDISE_AVAILABLE`
 * * `FUTURE_AVAILABILITY`
 */
export const PreorderIndicatorAuthenticationsOrderPreorderIndicator = {
  MerchandiseAvailable: "MERCHANDISE_AVAILABLE",
  FutureAvailability: "FUTURE_AVAILABILITY",
} as const;
export type PreorderIndicatorAuthenticationsOrderPreorderIndicator =
  | (typeof PreorderIndicatorAuthenticationsOrderPreorderIndicator)[keyof typeof PreorderIndicatorAuthenticationsOrderPreorderIndicator]
  | (string & {});

export const preorderIndicatorAuthenticationsOrderPreorderIndicatorSchema: EnumSchema<PreorderIndicatorAuthenticationsOrderPreorderIndicator> =
  s.enumOf<PreorderIndicatorAuthenticationsOrderPreorderIndicator>(
    PreorderIndicatorAuthenticationsOrderPreorderIndicator,
  );
