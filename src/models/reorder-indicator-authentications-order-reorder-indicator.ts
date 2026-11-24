import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of order being authenticated.
 * * `FIRST_TIME_ORDER`
 * * `REORDER`
 */
export const ReorderIndicatorAuthenticationsOrderReorderIndicator = {
  FirstTimeOrder: "FIRST_TIME_ORDER",
  Reorder: "REORDER",
} as const;
export type ReorderIndicatorAuthenticationsOrderReorderIndicator =
  | (typeof ReorderIndicatorAuthenticationsOrderReorderIndicator)[keyof typeof ReorderIndicatorAuthenticationsOrderReorderIndicator]
  | (string & {});

export const reorderIndicatorAuthenticationsOrderReorderIndicatorSchema: EnumSchema<ReorderIndicatorAuthenticationsOrderReorderIndicator> =
  s.enumOf<ReorderIndicatorAuthenticationsOrderReorderIndicator>(
    ReorderIndicatorAuthenticationsOrderReorderIndicator,
  );
