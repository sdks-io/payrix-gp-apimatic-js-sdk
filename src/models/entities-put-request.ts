import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entitiesEinType1Schema, type EntitiesEinType1 } from "./entities-ein-type1.js";
import { entitiesPublic1Schema, type EntitiesPublic1 } from "./entities-public1.js";
import { entitiesTimezone1Schema, type EntitiesTimezone1 } from "./entities-timezone1.js";
import { entityCountry1Schema, type EntityCountry1 } from "./entity-country1.js";
import { entityType1Schema, type EntityType1 } from "./entity-type1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { globalBusinessType1Schema, type GlobalBusinessType1 } from "./global-business-type1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type EntitiesPutRequest = {
  /**
   * The client IP address from which the Entity was created. Valid values are any IPv4 or IPv6
   * address.
   */
  clientIp?: string;
  /** The Login that owns this resource. */
  login?: string;
  type?: EntityType1;
  /**
   * The name of this Entity. This field is stored as a string string and must be between 1 and 100
   * characters long.
   */
  name?: string;
  /**
   * The display name of this Entity. This field is stored as a string and must be between 1 and
   * 1,000 characters long.
   */
  displayName?: string;
  /**
   * The first line of the address associated with this Entity. This field is stored as a string and
   * must be between 1 and 500 characters long.
   */
  address1?: string;
  /**
   * The second line of the address associated with this Entity. This field is stored as a string
   * and must be between 1 and 500 characters long.
   */
  address2?: string;
  /**
   * The name of the city in the address associated with this Entity. This field is stored as a
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
  ein?: string;
  /**
   * The number of locations at which this Entity does business. This field is stored as an integer
   * and must be between 1 and 1,000,000 characters long.
   */
  locations?: number;
  public?: EntitiesPublic1;
  /**
   * An indicator showing the version of the terms and conditions that this Entity has accepted. The
   * API indicates the version as a string. This field is stored as a text string and must be
   * between 0 and 20 characters long.
   */
  tcVersion?: string;
  /**
   * Date and time on which this Entity accepted the Terms and Conditions, if different than
   * `tcDate`. The date is specified as a 12-digit string in YYYYMMDDHHII format, for example,
   * `201601201528` for January 20, 2016, at 15:28 (3:28 PM).
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
   * must be between 9 to 10 characters long.
   */
  globalBusinessId?: string;
  frozen?: Frozen1;
  inactive?: Inactive1;
};

export const entitiesPutRequestSchema: Schema<EntitiesPutRequest> = s.object<EntitiesPutRequest>({
  clientIp: s.optional(s.string()),
  login: s.optional(s.string()),
  type: s.optional(s.lazy(() => entityType1Schema)),
  name: s.optional(s.string()),
  displayName: s.optional(s.string()),
  address1: s.optional(s.string()),
  address2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  zip: s.optional(s.string()),
  country: s.optional(s.lazy(() => entityCountry1Schema)),
  timezone: s.optional(s.lazy(() => entitiesTimezone1Schema)),
  phone: s.optional(s.string()),
  customerPhone: s.optional(s.string()),
  fax: s.optional(s.string()),
  email: s.optional(s.string()),
  website: s.optional(s.string()),
  appleDomain: s.optional(s.string()),
  einType: s.optional(s.lazy(() => entitiesEinType1Schema)),
  irsFilingName: s.optional(s.string()),
  ein: s.optional(s.string()),
  locations: s.optional(s.number()),
  public: s.optional(s.lazy(() => entitiesPublic1Schema)),
  tcVersion: s.optional(s.string()),
  tcAcceptDate: s.optional(s.string()),
  tcAcceptIp: s.optional(s.string()),
  custom: s.optional(s.string()),
  payoutSecondaryDescriptor: s.optional(s.string()),
  industry: s.optional(s.string()),
  globalBusinessType: s.optional(s.lazy(() => globalBusinessType1Schema)),
  globalBusinessId: s.optional(s.string()),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
});
