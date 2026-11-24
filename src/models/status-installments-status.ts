import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the status of the installment. */
export const StatusInstallmentsStatus = {
  Available: "AVAILABLE",
  NotAvailable: "NOT_AVAILABLE",
} as const;
export type StatusInstallmentsStatus =
  | (typeof StatusInstallmentsStatus)[keyof typeof StatusInstallmentsStatus]
  | (string & {});

export const statusInstallmentsStatusSchema: EnumSchema<StatusInstallmentsStatus> =
  s.enumOf<StatusInstallmentsStatus>(StatusInstallmentsStatus);
