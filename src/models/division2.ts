import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregationsResponseSchema, type AggregationsResponse } from "./aggregations-response.js";
import {
  billingModifiersResponseSchema,
  type BillingModifiersResponse,
} from "./billing-modifiers-response.js";
import { billingsResponseSchema, type BillingsResponse } from "./billings-response.js";
import {
  changeManagementEnabled2Schema,
  type ChangeManagementEnabled2,
} from "./change-management-enabled2.js";
import { creator1Schema, type Creator1 } from "./creator1.js";
import {
  divisionsCanUsePlaidWrapperMicroservice2Schema,
  type DivisionsCanUsePlaidWrapperMicroservice2,
} from "./divisions-can-use-plaid-wrapper-microservice2.js";
import { login1Schema, type Login1 } from "./login1.js";
import { minPasswordComplexity2Schema, type MinPasswordComplexity2 } from "./min-password-complexity2.js";
import {
  saferPaymentNonComplianceFeeManagedModel2Schema,
  type SaferPaymentNonComplianceFeeManagedModel2,
} from "./safer-payment-non-compliance-fee-managed-model2.js";
import {
  simplifiedDepositEnabled2Schema,
  type SimplifiedDepositEnabled2,
} from "./simplified-deposit-enabled2.js";

export type Division2 = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator1;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login1;
  /** The name of the division, which may be used for some white-label purposes */
  name?: string;
  /**
   * The white-labeled outgoing email for all automated emails generated throughout this division
   */
  email?: string;
  saferPaymentNonComplianceFeeManaged?: SaferPaymentNonComplianceFeeManagedModel2;
  changeManagementEnabled?: ChangeManagementEnabled2;
  /** Minimum password length */
  minPasswordLength?: number;
  minPasswordComplexity?: MinPasswordComplexity2;
  canUsePlaidWrapperMicroservice?: DivisionsCanUsePlaidWrapperMicroservice2;
  simplifiedDepositEnabled?: SimplifiedDepositEnabled2;
  aggregations?: AggregationsResponse[];
  billingModifiers?: BillingModifiersResponse[];
  billings?: BillingsResponse[];
};

export const division2Schema: Schema<Division2> = s.object<Division2>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator1Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login1Schema)),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  saferPaymentNonComplianceFeeManaged: s.optional(
    s.lazy(() => saferPaymentNonComplianceFeeManagedModel2Schema),
  ),
  changeManagementEnabled: s.optional(s.lazy(() => changeManagementEnabled2Schema)),
  minPasswordLength: s.optional(s.number()),
  minPasswordComplexity: s.optional(s.lazy(() => minPasswordComplexity2Schema)),
  canUsePlaidWrapperMicroservice: s.optional(s.lazy(() => divisionsCanUsePlaidWrapperMicroservice2Schema)),
  simplifiedDepositEnabled: s.optional(s.lazy(() => simplifiedDepositEnabled2Schema)),
  aggregations: s.optional(s.array(s.lazy(() => aggregationsResponseSchema))),
  billingModifiers: s.optional(s.array(s.lazy(() => billingModifiersResponseSchema))),
  billings: s.optional(s.array(s.lazy(() => billingsResponseSchema))),
});
