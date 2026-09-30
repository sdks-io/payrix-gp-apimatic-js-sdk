import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  changeManagementEnabled2Schema,
  type ChangeManagementEnabled2,
} from "./change-management-enabled2.js";
import { hostsPostRequestSchema, type HostsPostRequest } from "./hosts-post-request.js";
import { minPasswordComplexity2Schema, type MinPasswordComplexity2 } from "./min-password-complexity2.js";
import {
  saferPaymentNonComplianceFeeManagedModel2Schema,
  type SaferPaymentNonComplianceFeeManagedModel2,
} from "./safer-payment-non-compliance-fee-managed-model2.js";

export type DivisionsPostRequest = {
  /** The Login that owns this resource. */
  login: string;
  /** The name of the division, which may be used for some white-label purposes. */
  name: string;
  /**
   * The white-labeled outgoing email for all automated emails generated throughout this division.
   */
  email?: string;
  saferPaymentNonComplianceFeeManaged?: SaferPaymentNonComplianceFeeManagedModel2;
  changeManagementEnabled?: ChangeManagementEnabled2;
  /** Limit for password validations length. */
  minPasswordLength?: number | null;
  minPasswordComplexity?: MinPasswordComplexity2;
  hosts?: HostsPostRequest[];
};

export const divisionsPostRequestSchema: Schema<DivisionsPostRequest> = s.object<DivisionsPostRequest>({
  login: s.string(),
  name: s.string(),
  email: s.optional(s.string()),
  saferPaymentNonComplianceFeeManaged: s.optional(
    s.lazy(() => saferPaymentNonComplianceFeeManagedModel2Schema),
  ),
  changeManagementEnabled: s.optional(s.lazy(() => changeManagementEnabled2Schema)),
  minPasswordLength: s.optionalNullable(s.number()),
  minPasswordComplexity: s.optional(s.lazy(() => minPasswordComplexity2Schema)),
  hosts: s.optional(s.array(s.lazy(() => hostsPostRequestSchema))),
});
