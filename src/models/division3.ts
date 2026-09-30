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
import { configurationsResponseSchema, type ConfigurationsResponse } from "./configurations-response.js";
import { creator1Schema, type Creator1 } from "./creator1.js";
import { currencyRatesResponseSchema, type CurrencyRatesResponse } from "./currency-rates-response.js";
import { decisionsResponseSchema, type DecisionsResponse } from "./decisions-response.js";
import {
  divisionsCanUsePlaidWrapperMicroservice2Schema,
  type DivisionsCanUsePlaidWrapperMicroservice2,
} from "./divisions-can-use-plaid-wrapper-microservice2.js";
import { embeddedFinanceResponseSchema, type EmbeddedFinanceResponse } from "./embedded-finance-response.js";
import { entityRoutesResponseSchema, type EntityRoutesResponse } from "./entity-routes-response.js";
import { feeModifiersResponseSchema, type FeeModifiersResponse } from "./fee-modifiers-response.js";
import {
  fundingParametersResponseSchema,
  type FundingParametersResponse,
} from "./funding-parameters-response.js";
import { hostsResponseSchema, type HostsResponse } from "./hosts-response.js";
import {
  invoiceParametersResponseSchema,
  type InvoiceParametersResponse,
} from "./invoice-parameters-response.js";
import { login1Schema, type Login1 } from "./login1.js";
import { loginsResponseSchema, type LoginsResponse } from "./logins-response.js";
import { mccsResponseSchema, type MccsResponse } from "./mccs-response.js";
import { minPasswordComplexity2Schema, type MinPasswordComplexity2 } from "./min-password-complexity2.js";
import { omniTokensResponseSchema, type OmniTokensResponse } from "./omni-tokens-response.js";
import { orgFlowsResponseSchema, type OrgFlowsResponse } from "./org-flows-response.js";
import { parametersResponseSchema, type ParametersResponse } from "./parameters-response.js";
import { payoutFlowsResponseSchema, type PayoutFlowsResponse } from "./payout-flows-response.js";
import {
  pinlessDebitConversionsResponseSchema,
  type PinlessDebitConversionsResponse,
} from "./pinless-debit-conversions-response.js";
import { profitSharesResponseSchema, type ProfitSharesResponse } from "./profit-shares-response.js";
import { reservesResponseSchema, type ReservesResponse } from "./reserves-response.js";
import { revenueBoostsResponseSchema, type RevenueBoostsResponse } from "./revenue-boosts-response.js";
import {
  saferPaymentNonComplianceFeeManagedModel2Schema,
  type SaferPaymentNonComplianceFeeManagedModel2,
} from "./safer-payment-non-compliance-fee-managed-model2.js";
import { saferPaymentsResponseSchema, type SaferPaymentsResponse } from "./safer-payments-response.js";
import { secretsResponseSchema, type SecretsResponse } from "./secrets-response.js";
import {
  simplifiedDepositEnabled2Schema,
  type SimplifiedDepositEnabled2,
} from "./simplified-deposit-enabled2.js";
import { vendorsResponseSchema, type VendorsResponse } from "./vendors-response.js";

export type Division3 = {
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
  configurations?: ConfigurationsResponse[];
  currencyRates?: CurrencyRatesResponse[];
  decisions?: DecisionsResponse[];
  embeddedFinance?: EmbeddedFinanceResponse[];
  entityRoutes?: EntityRoutesResponse[];
  feeModifiers?: FeeModifiersResponse[];
  fundingParameters?: FundingParametersResponse[];
  hosts?: HostsResponse[];
  invoiceParameters?: InvoiceParametersResponse[];
  logins?: LoginsResponse[];
  mccs?: MccsResponse[];
  orgFlows?: OrgFlowsResponse[];
  omniTokens?: OmniTokensResponse[];
  parameters?: ParametersResponse[];
  payoutFlows?: PayoutFlowsResponse[];
  pinlessDebitConversions?: PinlessDebitConversionsResponse[];
  profitShares?: ProfitSharesResponse[];
  reserves?: ReservesResponse[];
  revenueBoosts?: RevenueBoostsResponse[];
  saferPayments?: SaferPaymentsResponse[];
  secrets?: SecretsResponse[];
  vendors?: VendorsResponse[];
};

export const division3Schema: Schema<Division3> = s.object<Division3>({
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
  configurations: s.optional(s.array(s.lazy(() => configurationsResponseSchema))),
  currencyRates: s.optional(s.array(s.lazy(() => currencyRatesResponseSchema))),
  decisions: s.optional(s.array(s.lazy(() => decisionsResponseSchema))),
  embeddedFinance: s.optional(s.array(s.lazy(() => embeddedFinanceResponseSchema))),
  entityRoutes: s.optional(s.array(s.lazy(() => entityRoutesResponseSchema))),
  feeModifiers: s.optional(s.array(s.lazy(() => feeModifiersResponseSchema))),
  fundingParameters: s.optional(s.array(s.lazy(() => fundingParametersResponseSchema))),
  hosts: s.optional(s.array(s.lazy(() => hostsResponseSchema))),
  invoiceParameters: s.optional(s.array(s.lazy(() => invoiceParametersResponseSchema))),
  logins: s.optional(s.array(s.lazy(() => loginsResponseSchema))),
  mccs: s.optional(s.array(s.lazy(() => mccsResponseSchema))),
  orgFlows: s.optional(s.array(s.lazy(() => orgFlowsResponseSchema))),
  omniTokens: s.optional(s.array(s.lazy(() => omniTokensResponseSchema))),
  parameters: s.optional(s.array(s.lazy(() => parametersResponseSchema))),
  payoutFlows: s.optional(s.array(s.lazy(() => payoutFlowsResponseSchema))),
  pinlessDebitConversions: s.optional(s.array(s.lazy(() => pinlessDebitConversionsResponseSchema))),
  profitShares: s.optional(s.array(s.lazy(() => profitSharesResponseSchema))),
  reserves: s.optional(s.array(s.lazy(() => reservesResponseSchema))),
  revenueBoosts: s.optional(s.array(s.lazy(() => revenueBoostsResponseSchema))),
  saferPayments: s.optional(s.array(s.lazy(() => saferPaymentsResponseSchema))),
  secrets: s.optional(s.array(s.lazy(() => secretsResponseSchema))),
  vendors: s.optional(s.array(s.lazy(() => vendorsResponseSchema))),
});
