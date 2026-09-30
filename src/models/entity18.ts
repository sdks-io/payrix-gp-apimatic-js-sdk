import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "./accounts-response.js";
import { adjustmentsResponseSchema, type AdjustmentsResponse } from "./adjustments-response.js";
import { aggregationsResponseSchema, type AggregationsResponse } from "./aggregations-response.js";
import { appleDomainsResponseSchema, type AppleDomainsResponse } from "./apple-domains-response.js";
import { assessmentsResponseSchema, type AssessmentsResponse } from "./assessments-response.js";
import {
  billingModifiersResponseSchema,
  type BillingModifiersResponse,
} from "./billing-modifiers-response.js";
import { billingsResponseSchema, type BillingsResponse } from "./billings-response.js";
import { changeRequestSchema, type ChangeRequest } from "./change-request.js";
import { contactsResponseSchema, type ContactsResponse } from "./contacts-response.js";
import { creator7Schema, type Creator7 } from "./creator7.js";
import { credentialsResponseSchema, type CredentialsResponse } from "./credentials-response.js";
import { decisionsResponseSchema, type DecisionsResponse } from "./decisions-response.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "./disbursements-response.js";
import { embeddedFinanceResponseSchema, type EmbeddedFinanceResponse } from "./embedded-finance-response.js";
import { entitiesEinType1Schema, type EntitiesEinType1 } from "./entities-ein-type1.js";
import { entitiesPublic1Schema, type EntitiesPublic1 } from "./entities-public1.js";
import { entitiesReserved2Schema, type EntitiesReserved2 } from "./entities-reserved2.js";
import { entitiesTimezone1Schema, type EntitiesTimezone1 } from "./entities-timezone1.js";
import { entitiesTinStatus2Schema, type EntitiesTinStatus2 } from "./entities-tin-status2.js";
import { entityCheckStage2Schema, type EntityCheckStage2 } from "./entity-check-stage2.js";
import { entityCountry1Schema, type EntityCountry1 } from "./entity-country1.js";
import {
  entityCustomFieldsResponseSchema,
  type EntityCustomFieldsResponse,
} from "./entity-custom-fields-response.js";
import { entityDataResponseSchema, type EntityDataResponse } from "./entity-data-response.js";
import { entityDebtsResponseSchema, type EntityDebtsResponse } from "./entity-debts-response.js";
import { entityPendingRiskCheck2Schema, type EntityPendingRiskCheck2 } from "./entity-pending-risk-check2.js";
import { entityRefsResponseSchema, type EntityRefsResponse } from "./entity-refs-response.js";
import { entityReturnsResponseSchema, type EntityReturnsResponse } from "./entity-returns-response.js";
import { entityTermsResponseSchema, type EntityTermsResponse } from "./entity-terms-response.js";
import { entityType1Schema, type EntityType1 } from "./entity-type1.js";
import { entriesResponseSchema, type EntriesResponse } from "./entries-response.js";
import { feesResponseSchema, type FeesResponse } from "./fees-response.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { fundsResponseSchema, type FundsResponse } from "./funds-response.js";
import { globalBusinessType1Schema, type GlobalBusinessType1 } from "./global-business-type1.js";
import { holdsResponseSchema, type HoldsResponse } from "./holds-response.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  invoiceParametersResponseSchema,
  type InvoiceParametersResponse,
} from "./invoice-parameters-response.js";
import { login2Schema, type Login2 } from "./login2.js";
import { notesResponseSchema, type NotesResponse } from "./notes-response.js";
import { profitSharesResponseSchema, type ProfitSharesResponse } from "./profit-shares-response.js";

export type Entity18 = {
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
  creator?: Creator7;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  /** The incoming IP address from which this Entity was created. */
  ipCreated?: string;
  /** The incoming IP address from which this Entity was last modified. */
  ipModified?: string;
  /**
   * The client IP address from which the Entity was created. Valid values are any IPv4 or IPv6
   * address.
   */
  clientIp?: string;
  login?: Login2;
  /** The parameter associated with this Entity. */
  parameter?: string;
  /** The sum of all negative disbursements, in cents, associated to this Entity. */
  totalCreditDisbursements?: number;
  type?: EntityType1;
  /**
   * The name of this Entity. This field is stored as a text string and must be between 1 and 100
   * characters long.
   */
  name?: string;
  /**
   * The display name of this Entity. This field is stored as a text string and must be between 1
   * and 1,000 characters long.
   */
  displayName?: string;
  /**
   * The first line of the address associated with this Entity. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  address1?: string;
  /**
   * The second line of the address associated with this Entity. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  address2?: string;
  /**
   * The name of the city in the address associated with this Entity. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  city?: string;
  /**
   * The U.S. state or Canadian province relevant to the address provided here. If the location is
   * within the U.S. and Canada, specify the 2-character postal abbreviation for the state. If the
   * location is outside of the U.S. and Canada, provide the full state name. This field is stored
   * as a text string and must be between 2 and 100 characters long.
   *
   *
   * <details> <summary>U.S. States</summary>
   *
   *  - `AK` - **Alaska (US)**
   *
   *  - `AR` - **Arkansas (US)**
   *
   *  - `AL` - **Alabama (US)**
   *
   *  - `AZ` - **Arizona (US)**
   *
   *  - `CA` - **California (US)**
   *
   *  - `CO` - **Colorado (US)**
   *
   *  - `CT` - **Connecticut (US)**
   *
   *  - `DE` - **Delaware (US)**
   *
   *  - `FL` - **Florida (US)**
   *
   *  - `GA` - **Georgia (US)**
   *
   *  - `HI` - **Hawaii (US)**
   *
   *  - `IA` - **Iowa (US)**
   *
   *  - `ID` - **Idaho (US)**
   *
   *  - `IL` - **Illinois (US)**
   *
   *  - `IN` - **Indiana (US)**
   *
   *  - `KY` - **Kentucky (US)**
   *
   *  - `KS` - **Kansas (US)**
   *
   *  - `LA` - **Louisiana (US)**
   *
   *  - `MA` - **Massachusetts (US)**
   *
   *  - `MD` - **Maryland (US)**
   *
   *  - `ME` - **Maine (US)**
   *
   *  - `MI` - **Michigan (US)**
   *
   *  - `MN` - **Minnesota (US)**
   *
   *  - `MO` - **Missouri (US)**
   *
   *  - `MS` - **Mississippi (US)**
   *
   *  - `MT` - **Montana (US)**
   *
   *  - `NC` - **North Carolina (US)**
   *
   *  - `ND` - **North Dakota (US)**
   *
   *  - `NE` - **Nebraska (US)**
   *
   *  - `NH` - **New Hampshire (US)**
   *
   *  - `NJ` - **New Jersey (US)**
   *
   *  - `NM` - **New Mexico (US)**
   *
   *  - `NV` - **Nevada (US)**
   *
   *  - `NY` - **New York (US)**
   *
   *  - `OH` - **Ohio (US)**
   *
   *  - `OK`- **Oklahoma (US)**
   *
   *  - `OR` - **Oregon (US)**
   *
   *  - `PA` - **Pennsylvania (US)**
   *
   *  - `RI` - **Rhode Island (US)**
   *
   *  - `SC`- **South Carolina (US)**
   *
   *  - `SD` - **South Dakota (US)**
   *
   *  - `TN` - **Tennessee (US)**
   *
   *  - `TX` - **Texas (US)**
   *
   *  - `UT` - **Utah (US)**
   *
   *  - `VA` - **Virginia (US)**
   *
   *  - `VT` - **Vermont (US)**
   *
   *  - `WA` - **Washington (US)**
   *
   *  - `WI` - **Wisconsin (US)**
   *
   *  - `WV` - **West Virginia (US)**
   *
   *  - `WY` - **Wyoming (US)** </details>
   *
   *
   *
   * <details> <summary>Canada Provinces and Territories</summary>
   *
   *  - `AB` - **Alberta (CAN)**
   *
   *  - `BC` - **British Columbia (CAN)**
   *
   *  - `MB` - **Manitoba (CAN)**
   *
   *  - `ON` - **Ontario (CAN)**
   *
   *  - `NS` - **Nova Scotia (CAN)**
   *
   *  - `NB` - **New Brunswick (CAN)**
   *
   *  - `NL` - **Newfoundland and Labrador (CAN)**
   *
   *  - `NT` - **Northwest Territories (CAN)**
   *
   *  - `NU` - **Nunavut (CAN)**
   *
   *  - `PE` - **Prince Edward Island (CAN)**
   *
   *  - `QC` - **Quebec (CAN)**
   *
   *  - `SK` - **Saskatchewan (CAN)**
   *
   *  - `YT` - **Yukon (CAN)** </details>
   */
  state?: string;
  /**
   * The website URL associated with this Entity. This field is stored as a text string and must be
   * between 0 and 500 characters long.
   */
  website?: string;
  /**
   * The ZIP code in the address associated with this Entity. This field is stored as a text string
   * and must be between 1 and 20 characters long.
   */
  zip?: string;
  country?: EntityCountry1;
  timezone?: EntitiesTimezone1;
  /**
   * The phone number associated with this Entity. This field is stored as a text string and must be
   * between 5 and 15 characters long.
   */
  phone?: string;
  /**
   * The customer service phone number associated with this Entity. For Merchants, this number will
   * be displayed on the customer's credit card statement. This field is stored as a text string and
   * must be between 5 and 15 characters long.
   */
  customerPhone?: string;
  /**
   * The fax number associated with this Entity. This field is stored as a text string and must be
   * between 5 and 15 characters long.
   */
  fax?: string;
  /**
   * The email address associated with this Entity. This field is stored as a text string and must
   * be between 1 and 100 characters long.
   */
  email?: string;
  /**
   * The IRS Employer Identification Number (EIN) for the Entity. This field is stored as an integer
   * and must be 9 characters long.
   */
  ein?: string;
  einType?: EntitiesEinType1;
  /**
   * The business registration number for the entity. This field is stored as an alphanumeric and
   * must be between 9 to 10 characters long.
   */
  globalBusinessId?: string;
  globalBusinessType?: GlobalBusinessType1;
  /**
   * The IRS Legal Filing Name. This must match what has been provided to the IRS when filing taxes.
   */
  irsFilingName?: string;
  /**
   * The number of locations at which this Entity does business. This field is stored as an integer
   * and must be between 1 and 1,000,000 characters long.
   */
  locations?: number;
  /**
   * An indicator showing the version of the terms and conditions that this Entity has accepted. The
   * API indicates the version as a string. This field is stored as a text string and must be
   * between 0 and 20 characters long.
   */
  tcVersion?: string;
  /** Date the `tcVersion` was last updated. The format should be YYYY-MM-DD HH:MM:SS. */
  tcDate?: string;
  /** IP address of client from last `tcVersion` update. */
  tcIp?: string;
  /**
   * Date and time on which this Entity accepted the Terms and Conditions, if different than tcDate.
   * The date is specified as a 12-digit string in YYYYMMDDHHII format, for example, `201601201528`
   * for January 20, 2016, at 15:28 (3:28 PM).
   */
  tcAcceptDate?: string;
  /**
   * IP address from which this Entity accepted the Terms and Conditions, if different than `tcIp`.
   */
  tcAcceptIp?: string;
  /**
   * Custom, free-form field for client-supplied text; must be between 0 and 1,000 characters long.
   */
  custom?: string;
  tinStatus?: EntitiesTinStatus2;
  public?: EntitiesPublic1;
  reserved?: EntitiesReserved2;
  pendingRiskCheck?: EntityPendingRiskCheck2;
  checkStage?: EntityCheckStage2;
  /** This field is stored as a text string and must be between 0 and 1,000 characters long. */
  industry?: string;
  /**
   * The secondary billing descriptor to appear on the bank statements for funds transfer for the
   * entity.
   */
  payoutSecondaryDescriptor?: string;
  currency?: Record<string, unknown>;
  inactive?: Inactive1;
  frozen?: Frozen1;
  accounts?: AccountsResponse[];
  adjustments?: AdjustmentsResponse[];
  adjustmentsFromentity?: AdjustmentsResponse[];
  adjustmentsOnentity?: AdjustmentsResponse[];
  aggregations?: AggregationsResponse[];
  ownedAppleDomains?: AppleDomainsResponse[];
  assessmentsOnentity?: AssessmentsResponse[];
  billingModifiers?: BillingModifiersResponse[];
  billings?: BillingsResponse[];
  billingsForentity?: BillingsResponse[];
  changeRequests?: ChangeRequest[];
  contacts?: ContactsResponse[];
  credentials?: CredentialsResponse[];
  disbursements?: DisbursementsResponse[];
  decisions?: DecisionsResponse[];
  embeddedFinance?: EmbeddedFinanceResponse[];
  entityCustomFields?: EntityCustomFieldsResponse[];
  entityData?: EntityDataResponse[];
  entityDebts?: EntityDebtsResponse[];
  entityDebtsToentity?: EntityDebtsResponse[];
  entityRefs?: EntityRefsResponse[];
  entityReturns?: EntityReturnsResponse[];
  entityTerms?: EntityTermsResponse[];
  entriesOnentity?: EntriesResponse[];
  fees?: FeesResponse[];
  forentityFees?: FeesResponse[];
  forentityProfitShares?: ProfitSharesResponse[];
  funds?: FundsResponse[];
  holds?: HoldsResponse[];
  invoiceParameters?: InvoiceParametersResponse[];
  notes?: NotesResponse[];
};

export const entity18Schema: Schema<Entity18> = s.object<Entity18>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator7Schema)),
  modifier: s.optional(s.string()),
  ipCreated: s.optional(s.string()),
  ipModified: s.optional(s.string()),
  clientIp: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  parameter: s.optional(s.string()),
  totalCreditDisbursements: s.optional(s.number()),
  type: s.optional(s.lazy(() => entityType1Schema)),
  name: s.optional(s.string()),
  displayName: s.optional(s.string()),
  address1: s.optional(s.string()),
  address2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  website: s.optional(s.string()),
  zip: s.optional(s.string()),
  country: s.optional(s.lazy(() => entityCountry1Schema)),
  timezone: s.optional(s.lazy(() => entitiesTimezone1Schema)),
  phone: s.optional(s.string()),
  customerPhone: s.optional(s.string()),
  fax: s.optional(s.string()),
  email: s.optional(s.string()),
  ein: s.optional(s.string()),
  einType: s.optional(s.lazy(() => entitiesEinType1Schema)),
  globalBusinessId: s.optional(s.string()),
  globalBusinessType: s.optional(s.lazy(() => globalBusinessType1Schema)),
  irsFilingName: s.optional(s.string()),
  locations: s.optional(s.number()),
  tcVersion: s.optional(s.string()),
  tcDate: s.optional(s.string()),
  tcIp: s.optional(s.string()),
  tcAcceptDate: s.optional(s.string()),
  tcAcceptIp: s.optional(s.string()),
  custom: s.optional(s.string()),
  tinStatus: s.optional(s.lazy(() => entitiesTinStatus2Schema)),
  public: s.optional(s.lazy(() => entitiesPublic1Schema)),
  reserved: s.optional(s.lazy(() => entitiesReserved2Schema)),
  pendingRiskCheck: s.optional(s.lazy(() => entityPendingRiskCheck2Schema)),
  checkStage: s.optional(s.lazy(() => entityCheckStage2Schema)),
  industry: s.optional(s.string()),
  payoutSecondaryDescriptor: s.optional(s.string()),
  currency: s.optional(s.record(s.string(), s.unknown())),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  accounts: s.optional(s.array(s.lazy(() => accountsResponseSchema))),
  adjustments: s.optional(s.array(s.lazy(() => adjustmentsResponseSchema))),
  adjustmentsFromentity: s.optional(s.array(s.lazy(() => adjustmentsResponseSchema))),
  adjustmentsOnentity: s.optional(s.array(s.lazy(() => adjustmentsResponseSchema))),
  aggregations: s.optional(s.array(s.lazy(() => aggregationsResponseSchema))),
  ownedAppleDomains: s.optional(s.array(s.lazy(() => appleDomainsResponseSchema))),
  assessmentsOnentity: s.optional(s.array(s.lazy(() => assessmentsResponseSchema))),
  billingModifiers: s.optional(s.array(s.lazy(() => billingModifiersResponseSchema))),
  billings: s.optional(s.array(s.lazy(() => billingsResponseSchema))),
  billingsForentity: s.optional(s.array(s.lazy(() => billingsResponseSchema))),
  changeRequests: s.optional(s.array(s.lazy(() => changeRequestSchema))),
  contacts: s.optional(s.array(s.lazy(() => contactsResponseSchema))),
  credentials: s.optional(s.array(s.lazy(() => credentialsResponseSchema))),
  disbursements: s.optional(s.array(s.lazy(() => disbursementsResponseSchema))),
  decisions: s.optional(s.array(s.lazy(() => decisionsResponseSchema))),
  embeddedFinance: s.optional(s.array(s.lazy(() => embeddedFinanceResponseSchema))),
  entityCustomFields: s.optional(s.array(s.lazy(() => entityCustomFieldsResponseSchema))),
  entityData: s.optional(s.array(s.lazy(() => entityDataResponseSchema))),
  entityDebts: s.optional(s.array(s.lazy(() => entityDebtsResponseSchema))),
  entityDebtsToentity: s.optional(s.array(s.lazy(() => entityDebtsResponseSchema))),
  entityRefs: s.optional(s.array(s.lazy(() => entityRefsResponseSchema))),
  entityReturns: s.optional(s.array(s.lazy(() => entityReturnsResponseSchema))),
  entityTerms: s.optional(s.array(s.lazy(() => entityTermsResponseSchema))),
  entriesOnentity: s.optional(s.array(s.lazy(() => entriesResponseSchema))),
  fees: s.optional(s.array(s.lazy(() => feesResponseSchema))),
  forentityFees: s.optional(s.array(s.lazy(() => feesResponseSchema))),
  forentityProfitShares: s.optional(s.array(s.lazy(() => profitSharesResponseSchema))),
  funds: s.optional(s.array(s.lazy(() => fundsResponseSchema))),
  holds: s.optional(s.array(s.lazy(() => holdsResponseSchema))),
  invoiceParameters: s.optional(s.array(s.lazy(() => invoiceParametersResponseSchema))),
  notes: s.optional(s.array(s.lazy(() => notesResponseSchema))),
});
