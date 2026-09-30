import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aggregationsResponseSchema, type AggregationsResponse } from "./aggregations-response.js";
import { billingsResponseSchema, type BillingsResponse } from "./billings-response.js";
import { changeRequestSchema, type ChangeRequest } from "./change-request.js";
import { confirmCodesResponseSchema, type ConfirmCodesResponse } from "./confirm-codes-response.js";
import { country1Schema, type Country1 } from "./country1.js";
import { creatorSchema, type Creator } from "./creator.js";
import { customersResponseSchema, type CustomersResponse } from "./customers-response.js";
import { divisionsResponseSchema, type DivisionsResponse } from "./divisions-response.js";
import { entitiesResponseSchema, type EntitiesResponse } from "./entities-response.js";
import { entityReturnsResponseSchema, type EntityReturnsResponse } from "./entity-returns-response.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  invoiceParametersResponseSchema,
  type InvoiceParametersResponse,
} from "./invoice-parameters-response.js";
import { invoicesResponseSchema, type InvoicesResponse } from "./invoices-response.js";
import { loginHelpersResponseSchema, type LoginHelpersResponse } from "./login-helpers-response.js";
import { loginSchema, type Login } from "./login.js";
import { loginsConfirmed1Schema, type LoginsConfirmed1 } from "./logins-confirmed1.js";
import { loginsMfaEnabled1Schema, type LoginsMfaEnabled1 } from "./logins-mfa-enabled1.js";
import { loginsPortalAccess1Schema, type LoginsPortalAccess1 } from "./logins-portal-access1.js";
import { loginsResponseSchema, type LoginsResponse } from "./logins-response.js";
import { messageThreadsResponseSchema, type MessageThreadsResponse } from "./message-threads-response.js";
import { notesResponseSchema, type NotesResponse } from "./notes-response.js";
import { orgFlowsResponseSchema, type OrgFlowsResponse } from "./org-flows-response.js";
import { profitSharesResponseSchema, type ProfitSharesResponse } from "./profit-shares-response.js";
import { secretsResponseSchema, type SecretsResponse } from "./secrets-response.js";
import { teamLoginResponseSchema, type TeamLoginResponse } from "./team-login-response.js";
import { teamsResponseSchema, type TeamsResponse } from "./teams-response.js";

export type PayoutLogin = {
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
  creator?: Creator;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login;
  /**
   * The timestamp when this Login last logged in to the API. The format should be YYYY-MM-DD
   * HH:MM:SS.
   */
  lastLogin?: string;
  /**
   * The username associated with this Login. This field is stored as a text string, all lowercase,
   * and must be between 0 and 50 characters long.
   */
  username?: string;
  /**
   * The password associated with this Login. This field is stored as a text string and must be
   * between 0 and 100 characters long.
   */
  password?: string;
  /**
   * The SSO (Single Sign On) ID setup for the login. This field is stored as a text string and must
   * be between 1 and 100 characters long.
   */
  ssoId?: string;
  /** The first name associated with this Login. */
  first?: string;
  /** The middle name associated with this Login. */
  middle?: string;
  /** The last name associated with this Login. */
  last?: string;
  /** The email address associated with this Login. */
  email?: string;
  /**
   * The fax number associated with this Login. This field is stored as a text string and must be
   * between 10 and 15 characters long.
   */
  fax?: string;
  /**
   * The phone number associated with this Login. This field is stored as a text string and must be
   * between 10 and 15 characters long.
   */
  phone?: string;
  country?: Country1;
  /**
   * The ZIP code in the address associated with this Login. This field is stored as a text string
   * and must be between 1 and 20 characters long.
   */
  zip?: string;
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
   * The name of the city in the address associated with this Login. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  city?: string;
  /**
   * The second line of the address associated with this Login. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  address2?: string;
  /**
   * The first line of the address associated with this Login. This field is stored as a text string
   * and must be between 1 and 500 characters long.
   */
  address1?: string;
  confirmed?: LoginsConfirmed1;
  /** The roles associated with this Login, specified as an integer. */
  roles?: number;
  /** The partition that this Login is associated with. */
  partition?: string;
  division?: LoginsResponse;
  /**
   * The parent division that this Login belongs to. Children of this Login will inherit its parent
   * division.
   */
  parentDivision?: string;
  /**
   * The allowedResources field specifies the actions and resources a user can access. The JSON
   * structure includes action keys (create, update, read, delete, totals) and lists of resources
   * (e.g., logins, apikeys, sessions). Omitted action keys indicate no access for those actions.
   */
  allowedResources?: string;
  /**
   * The restrictedResources field defines the actions and resources a user is restricted from
   * accessing. The JSON structure includes action keys (create, update, read, delete, totals) and
   * lists of resources (e.g., logins, apikeys, sessions). Omitted action keys indicate no
   * restrictions for those actions.
   */
  restrictedResources?: string;
  portalAccess?: LoginsPortalAccess1;
  mfaEnabled?: LoginsMfaEnabled1;
  /**
   * The MFA secret key used to link the MFA device with this Login. This field is stored as a text
   * string and must be between 1 and 128 characters long.
   */
  mfaSecret?: string;
  /** The datetimestamp when this Login was enabled for MFA. */
  mfaEnrolledDate?: string;
  /**
   * The Type of the MFA enrolled. This field is stored as a text string and must be between 1 and
   * 50 characters long.
   */
  mfaType?: string;
  /**
   * EffectiveRoles is included in the response when a user record is returned via API indicating
   * the full effective roles of the user (as an integer), broken down by role, for roles that
   * include other roles automatically.
   */
  effectiveRoles?: number;
  /**
   * The end time of the current MFA SMS window which is a sliding window limitinig how many codes
   * can be generated during a given window
   */
  mfaSmsCodesCount?: number;
  /** The most recent SMS Code which has been texted to the user */
  mfaSmsWindow?: number;
  /** Whether the associated login can use loginAs or not */
  loginAsEnabled?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
  aggregations?: AggregationsResponse[];
  analyzedChangeRequests?: ChangeRequest[];
  changeRequests?: ChangeRequest[];
  confirmCodes?: ConfirmCodesResponse[];
  customers?: CustomersResponse[];
  billings?: BillingsResponse[];
  divisions?: DivisionsResponse[];
  entities?: EntitiesResponse[];
  entityReturns?: EntityReturnsResponse[];
  invoices?: InvoicesResponse[];
  invoiceParameters?: InvoiceParametersResponse[];
  logins?: LoginsResponse[];
  loginsHelpers?: LoginHelpersResponse[];
  notes?: NotesResponse[];
  messageThreads?: MessageThreadsResponse[];
  orgFlows?: OrgFlowsResponse[];
  orgFlowsforlogin?: OrgFlowsResponse[];
  profitShares?: ProfitSharesResponse[];
  secrets?: SecretsResponse[];
  teamLogins?: TeamLoginResponse[];
  teams?: TeamsResponse[];
};

export const payoutLoginSchema: Schema<PayoutLogin> = s.object<PayoutLogin>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creatorSchema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => loginSchema)),
  lastLogin: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  ssoId: s.optional(s.string()),
  first: s.optional(s.string()),
  middle: s.optional(s.string()),
  last: s.optional(s.string()),
  email: s.optional(s.string()),
  fax: s.optional(s.string()),
  phone: s.optional(s.string()),
  country: s.optional(s.lazy(() => country1Schema)),
  zip: s.optional(s.string()),
  state: s.optional(s.string()),
  city: s.optional(s.string()),
  address2: s.optional(s.string()),
  address1: s.optional(s.string()),
  confirmed: s.optional(s.lazy(() => loginsConfirmed1Schema)),
  roles: s.optional(s.number()),
  partition: s.optional(s.string()),
  division: s.optional(s.lazy(() => loginsResponseSchema)),
  parentDivision: s.optional(s.string()),
  allowedResources: s.optional(s.string()),
  restrictedResources: s.optional(s.string()),
  portalAccess: s.optional(s.lazy(() => loginsPortalAccess1Schema)),
  mfaEnabled: s.optional(s.lazy(() => loginsMfaEnabled1Schema)),
  mfaSecret: s.optional(s.string()),
  mfaEnrolledDate: s.optional(s.string()),
  mfaType: s.optional(s.string()),
  effectiveRoles: s.optional(s.number()),
  mfaSmsCodesCount: s.optional(s.number()),
  mfaSmsWindow: s.optional(s.number()),
  loginAsEnabled: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  aggregations: s.optional(s.array(s.lazy(() => aggregationsResponseSchema))),
  analyzedChangeRequests: s.optional(s.array(s.lazy(() => changeRequestSchema))),
  changeRequests: s.optional(s.array(s.lazy(() => changeRequestSchema))),
  confirmCodes: s.optional(s.array(s.lazy(() => confirmCodesResponseSchema))),
  customers: s.optional(s.array(s.lazy(() => customersResponseSchema))),
  billings: s.optional(s.array(s.lazy(() => billingsResponseSchema))),
  divisions: s.optional(s.array(s.lazy(() => divisionsResponseSchema))),
  entities: s.optional(s.array(s.lazy(() => entitiesResponseSchema))),
  entityReturns: s.optional(s.array(s.lazy(() => entityReturnsResponseSchema))),
  invoices: s.optional(s.array(s.lazy(() => invoicesResponseSchema))),
  invoiceParameters: s.optional(s.array(s.lazy(() => invoiceParametersResponseSchema))),
  logins: s.optional(s.array(s.lazy(() => loginsResponseSchema))),
  loginsHelpers: s.optional(s.array(s.lazy(() => loginHelpersResponseSchema))),
  notes: s.optional(s.array(s.lazy(() => notesResponseSchema))),
  messageThreads: s.optional(s.array(s.lazy(() => messageThreadsResponseSchema))),
  orgFlows: s.optional(s.array(s.lazy(() => orgFlowsResponseSchema))),
  orgFlowsforlogin: s.optional(s.array(s.lazy(() => orgFlowsResponseSchema))),
  profitShares: s.optional(s.array(s.lazy(() => profitSharesResponseSchema))),
  secrets: s.optional(s.array(s.lazy(() => secretsResponseSchema))),
  teamLogins: s.optional(s.array(s.lazy(() => teamLoginResponseSchema))),
  teams: s.optional(s.array(s.lazy(() => teamsResponseSchema))),
});
