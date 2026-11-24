import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where the currency conversion is in its lifecycle * `AVAILABLE` - A currency conversion
 * is available. The next step is to offer the conversion details to the end user. * `NOT_AVAILABLE`
 * - A currency conversion is not available.
 */
export const StatusTransactionsDeviceStatus = {
  Available: "AVAILABLE",
  NotAvailable: "NOT_AVAILABLE",
} as const;
export type StatusTransactionsDeviceStatus =
  | (typeof StatusTransactionsDeviceStatus)[keyof typeof StatusTransactionsDeviceStatus]
  | (string & {});

export const statusTransactionsDeviceStatusSchema: EnumSchema<StatusTransactionsDeviceStatus> =
  s.enumOf<StatusTransactionsDeviceStatus>(StatusTransactionsDeviceStatus);
