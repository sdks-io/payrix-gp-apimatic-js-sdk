import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountsPostRequestSchema, type AccountsPostRequest } from "./accounts-post-request.js";
import { billingsPostRequestSchema, type BillingsPostRequest } from "./billings-post-request.js";
import { contactsPostRequestSchema, type ContactsPostRequest } from "./contacts-post-request.js";
import { credentialsPostRequestSchema, type CredentialsPostRequest } from "./credentials-post-request.js";
import {
  embeddedFinancePostRequestSchema,
  type EmbeddedFinancePostRequest,
} from "./embedded-finance-post-request.js";
import { entitiesEinType1Schema, type EntitiesEinType1 } from "./entities-ein-type1.js";
import { entitiesPublic1Schema, type EntitiesPublic1 } from "./entities-public1.js";
import { entitiesTimezone1Schema, type EntitiesTimezone1 } from "./entities-timezone1.js";
import { entityCountry1Schema, type EntityCountry1 } from "./entity-country1.js";
import {
  entityCustomFieldsPostRequestSchema,
  type EntityCustomFieldsPostRequest,
} from "./entity-custom-fields-post-request.js";
import { entityDataPostRequestSchema, type EntityDataPostRequest } from "./entity-data-post-request.js";
import { entityRefsPostRequestSchema, type EntityRefsPostRequest } from "./entity-refs-post-request.js";
import { entityRoutesPostRequestSchema, type EntityRoutesPostRequest } from "./entity-routes-post-request.js";
import { entityTermsPostRequestSchema, type EntityTermsPostRequest } from "./entity-terms-post-request.js";
import { entityType1Schema, type EntityType1 } from "./entity-type1.js";
import { feesPostRequestSchema, type FeesPostRequest } from "./fees-post-request.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { globalBusinessType1Schema, type GlobalBusinessType1 } from "./global-business-type1.js";
import { holdsPostRequestSchema, type HoldsPostRequest } from "./holds-post-request.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { merchantsPostRequestSchema, type MerchantsPostRequest } from "./merchants-post-request.js";
import { notesPostRequestSchema, type NotesPostRequest } from "./notes-post-request.js";
import { omniTokensPostRequestSchema, type OmniTokensPostRequest } from "./omni-tokens-post-request.js";
import { orgEntitiesPostRequestSchema, type OrgEntitiesPostRequest } from "./org-entities-post-request.js";
import { payoutPostRequestSchema, type PayoutPostRequest } from "./payout-post-request.js";
import {
  pinlessDebitConversionsPostRequestSchema,
  type PinlessDebitConversionsPostRequest,
} from "./pinless-debit-conversions-post-request.js";
import { profitSharesPostRequestSchema, type ProfitSharesPostRequest } from "./profit-shares-post-request.js";
import { reservesPostRequestSchema, type ReservesPostRequest } from "./reserves-post-request.js";
import {
  revenueBoostsPostRequestSchema,
  type RevenueBoostsPostRequest,
} from "./revenue-boosts-post-request.js";
import {
  saferPaymentsPostRequestSchema,
  type SaferPaymentsPostRequest,
} from "./safer-payments-post-request.js";
import { vendorsPostRequestSchema, type VendorsPostRequest } from "./vendors-post-request.js";

export type EntitiesPostRequest = {
  /**
   * The client IP address from which the Entity was created. Valid values are any IPv4 or IPv6
   * address.
   */
  clientIp: string | null;
  /** The Login that owns this resource. */
  login?: string;
  type: EntityType1;
  /**
   * The name of this Entity. This field is stored as a string and must be between 1 and 100
   * characters long.
   */
  name: string;
  /**
   * The display name of this Entity. This field is stored as a string and must be between 1 and
   * 1,000 characters long.
   */
  displayName?: string;
  /**
   * The first line of the address associated with this Entity. This field is stored as a string and
   * must be between 1 and 500 characters long.
   */
  address1: string;
  /**
   * The second line of the address associated with this Entity. This field is stored as a string
   * and must be between 1 and 500 characters long.
   */
  address2?: string;
  /**
   * The name of the city in the address associated with this Entity. This field is stored as a
   * string and must be between 1 and 500 characters long.
   */
  city: string;
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
  state: string;
  /**
   * The ZIP code in the address associated with this Entity. This field is stored as a text string
   * and must be between 1 and 20 characters long.
   */
  zip: string;
  country: EntityCountry1;
  timezone: EntitiesTimezone1;
  /**
   * The phone number associated with this Entity. This field is stored as a text string and must be
   * between 5 and 15 characters long.
   */
  phone: string;
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
  email: string;
  /**
   * The web site URL associated with this Entity. This field is stored as a text string and must be
   * between 0 and 500 characters long.
   */
  website?: string;
  /**
   * The web sites URL associated with this Entity. This field is stored as a text string; must be
   * between 0 and 1,000 characters long and separated by comma.
   */
  appleDomain?: string;
  einType?: EntitiesEinType1;
  /**
   * The IRS Legal Filing Name. This must match what has been provided to the IRS when filing taxes.
   */
  irsFilingName?: string;
  /**
   * The IRS Employer Identification Number (EIN) for the Entity. This field is stored as an integer
   * and must be 9 characters long.
   */
  ein: string | null;
  /**
   * The number of locations at which this Entity does business. This field is stored as an integer
   * and must be between 1 and 1,000,000 characters long.
   *
   * @default 1
   */
  locations?: number;
  public?: EntitiesPublic1;
  /**
   * An indicator showing the version of the terms and conditions that this Entity has accepted. The
   * API indicates the version as a string. This field is stored as a text string and must be
   * between 0 and 20 characters long.
   */
  tcVersion?: string | null;
  /**
   * Date and time on which this Entity accepted the Terms and Conditions, if different than
   * `tcDate`. The date is specified as a 12-digit string in YYYYMMDDHHII format, for example,
   * `201601201528` for January 20, 2016, at 15:28 (3:28 PM).
   */
  tcAcceptDate?: string | null;
  /**
   * IP address from which this Entity accepted the Terms and Conditions, if different than `tcIp`.
   */
  tcAcceptIp?: string | null;
  /**
   * Custom, free-form field for client-supplied text; must be between 0 and 1,000 characters long.
   */
  custom?: string;
  /**
   * The secondary billing descriptor to appear on the bank statements for funds transfer for the
   * entity.
   */
  payoutSecondaryDescriptor?: string;
  /** This field is stored as a text string and must be between 0 and 1,000 characters long. */
  industry?: string;
  globalBusinessType?: GlobalBusinessType1;
  /**
   * The business registration number for the entity. This field is stored as an alphanumeric and
   * must be between 9 to 10 characters long
   */
  globalBusinessId: string | null;
  accounts?: AccountsPostRequest[];
  frozen?: Frozen1;
  inactive?: Inactive1;
  billings?: BillingsPostRequest[];
  contacts?: ContactsPostRequest[];
  credentials?: CredentialsPostRequest[];
  embeddedFinance?: EmbeddedFinancePostRequest[];
  entityCustomFields?: EntityCustomFieldsPostRequest[];
  entityData?: EntityDataPostRequest[];
  entityRefs?: EntityRefsPostRequest[];
  entityRoutes?: EntityRoutesPostRequest[];
  entityTerms?: EntityTermsPostRequest[];
  orgEntities?: OrgEntitiesPostRequest[];
  omniTokens?: OmniTokensPostRequest[];
  forentityProfitShares?: ProfitSharesPostRequest[];
  holds?: HoldsPostRequest[];
  merchant?: MerchantsPostRequest;
  notes?: NotesPostRequest[];
  payouts?: PayoutPostRequest[];
  pinlessDebitConversions?: PinlessDebitConversionsPostRequest[];
  profitShares?: ProfitSharesPostRequest[];
  reserves?: ReservesPostRequest[];
  revenueBoosts?: RevenueBoostsPostRequest[];
  vendor?: VendorsPostRequest;
  fees?: FeesPostRequest[];
  forentityFees?: FeesPostRequest[];
  saferPayments?: SaferPaymentsPostRequest[];
};

export const entitiesPostRequestSchema: Schema<EntitiesPostRequest> = s.object<EntitiesPostRequest>({
  clientIp: s.nullable(s.string()),
  login: s.optional(s.string()),
  type: entityType1Schema,
  name: s.string(),
  displayName: s.optional(s.string()),
  address1: s.string(),
  address2: s.optional(s.string()),
  city: s.string(),
  state: s.string(),
  zip: s.string(),
  country: entityCountry1Schema,
  timezone: entitiesTimezone1Schema,
  phone: s.string(),
  customerPhone: s.optional(s.string()),
  fax: s.optional(s.string()),
  email: s.string(),
  website: s.optional(s.string()),
  appleDomain: s.optional(s.string()),
  einType: s.optional(s.lazy(() => entitiesEinType1Schema)),
  irsFilingName: s.optional(s.string()),
  ein: s.nullable(s.string()),
  locations: s.defaulted(s.number(), 1),
  public: s.optional(s.lazy(() => entitiesPublic1Schema)),
  tcVersion: s.optionalNullable(s.string()),
  tcAcceptDate: s.optionalNullable(s.string()),
  tcAcceptIp: s.optionalNullable(s.string()),
  custom: s.optional(s.string()),
  payoutSecondaryDescriptor: s.optional(s.string()),
  industry: s.optional(s.string()),
  globalBusinessType: s.optional(s.lazy(() => globalBusinessType1Schema)),
  globalBusinessId: s.nullable(s.string()),
  accounts: s.optional(s.array(s.lazy(() => accountsPostRequestSchema))),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  billings: s.optional(s.array(s.lazy(() => billingsPostRequestSchema))),
  contacts: s.optional(s.array(s.lazy(() => contactsPostRequestSchema))),
  credentials: s.optional(s.array(s.lazy(() => credentialsPostRequestSchema))),
  embeddedFinance: s.optional(s.array(s.lazy(() => embeddedFinancePostRequestSchema))),
  entityCustomFields: s.optional(s.array(s.lazy(() => entityCustomFieldsPostRequestSchema))),
  entityData: s.optional(s.array(s.lazy(() => entityDataPostRequestSchema))),
  entityRefs: s.optional(s.array(s.lazy(() => entityRefsPostRequestSchema))),
  entityRoutes: s.optional(s.array(s.lazy(() => entityRoutesPostRequestSchema))),
  entityTerms: s.optional(s.array(s.lazy(() => entityTermsPostRequestSchema))),
  orgEntities: s.optional(s.array(s.lazy(() => orgEntitiesPostRequestSchema))),
  omniTokens: s.optional(s.array(s.lazy(() => omniTokensPostRequestSchema))),
  forentityProfitShares: s.optional(s.array(s.lazy(() => profitSharesPostRequestSchema))),
  holds: s.optional(s.array(s.lazy(() => holdsPostRequestSchema))),
  merchant: s.optional(s.lazy(() => merchantsPostRequestSchema)),
  notes: s.optional(s.array(s.lazy(() => notesPostRequestSchema))),
  payouts: s.optional(s.array(s.lazy(() => payoutPostRequestSchema))),
  pinlessDebitConversions: s.optional(s.array(s.lazy(() => pinlessDebitConversionsPostRequestSchema))),
  profitShares: s.optional(s.array(s.lazy(() => profitSharesPostRequestSchema))),
  reserves: s.optional(s.array(s.lazy(() => reservesPostRequestSchema))),
  revenueBoosts: s.optional(s.array(s.lazy(() => revenueBoostsPostRequestSchema))),
  vendor: s.optional(s.lazy(() => vendorsPostRequestSchema)),
  fees: s.optional(s.array(s.lazy(() => feesPostRequestSchema))),
  forentityFees: s.optional(s.array(s.lazy(() => feesPostRequestSchema))),
  saferPayments: s.optional(s.array(s.lazy(() => saferPaymentsPostRequestSchema))),
});
