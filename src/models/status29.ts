import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where the currency conversion is in its lifecycle
 *   * AVAILABLE - A currency conversion is available. The next step is to offer the conversion
 *     details to the end user.
 *   * NOT_AVAILABLE - A currency conversion is not available.
 */
export const Status29 = {
  Available: "AVAILABLE",
  NotAvailable: "NOT_AVAILABLE",
} as const;
export type Status29 = (typeof Status29)[keyof typeof Status29] | (string & {});

export const status29Schema: EnumSchema<Status29> = s.enumOf<Status29>(Status29);
