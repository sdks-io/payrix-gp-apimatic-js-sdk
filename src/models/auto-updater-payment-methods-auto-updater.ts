import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether this payment token should be enabled for account updater services. Availability
 * of this is dependent on your live configuration
 */
export const AutoUpdaterPaymentMethodsAutoUpdater = {
  Enable: "ENABLE",
  Disable: "DISABLE",
} as const;
export type AutoUpdaterPaymentMethodsAutoUpdater =
  | (typeof AutoUpdaterPaymentMethodsAutoUpdater)[keyof typeof AutoUpdaterPaymentMethodsAutoUpdater]
  | (string & {});

export const autoUpdaterPaymentMethodsAutoUpdaterSchema: EnumSchema<AutoUpdaterPaymentMethodsAutoUpdater> =
  s.enumOf<AutoUpdaterPaymentMethodsAutoUpdater>(AutoUpdaterPaymentMethodsAutoUpdater);
