import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The overall status of the payment method.
 * * `ACTIVE` - The entity is ACTIVE and can be used.
 * * `INACTIVE` - The entity is INACTIVE and cannot be used."
 * * `DELETED` - The status is DELETED. Once returned in an action response for a resource. The
 *   resource has been removed from the platform.
 */
export const StatusPaymentMethodsStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Deleted: "DELETED",
} as const;
export type StatusPaymentMethodsStatus =
  | (typeof StatusPaymentMethodsStatus)[keyof typeof StatusPaymentMethodsStatus]
  | (string & {});

export const statusPaymentMethodsStatusSchema: EnumSchema<StatusPaymentMethodsStatus> =
  s.enumOf<StatusPaymentMethodsStatus>(StatusPaymentMethodsStatus);
