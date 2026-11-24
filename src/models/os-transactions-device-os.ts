import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the operating system on the device
 * * `ANDROID`
 * * `IOS`
 */
export const OsTransactionsDeviceOs = {
  Android: "ANDROID",
  Ios: "IOS",
} as const;
export type OsTransactionsDeviceOs =
  | (typeof OsTransactionsDeviceOs)[keyof typeof OsTransactionsDeviceOs]
  | (string & {});

export const osTransactionsDeviceOsSchema: EnumSchema<OsTransactionsDeviceOs> =
  s.enumOf<OsTransactionsDeviceOs>(OsTransactionsDeviceOs);
