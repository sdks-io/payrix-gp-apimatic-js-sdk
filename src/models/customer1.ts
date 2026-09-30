import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { country1Schema, type Country1 } from "./country1.js";
import { country101Schema, type Country101 } from "./country101.js";
import { creator5Schema, type Creator5 } from "./creator5.js";
import { entity28Schema, type Entity28 } from "./entity28.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { invoicesResponseSchema, type InvoicesResponse } from "./invoices-response.js";
import { login2Schema, type Login2 } from "./login2.js";
import { merchant5Schema, type Merchant5 } from "./merchant5.js";
import { tokensResponseSchema, type TokensResponse } from "./tokens-response.js";

export type Customer1 = {
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
  creator?: Creator5;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  merchant?: Merchant5;
  entity?: Entity28;
  /** The first name associated with this Customer. */
  first?: string;
  /** The middle name associated with this Customer. */
  middle?: string;
  /** The last name associated with this Customer. */
  last?: string;
  /** The name of the company associated with this Customer. */
  company?: string;
  /** The email address of this Customer. */
  email?: string;
  /**
   * The fax number associated with this Customer. This field is stored as a text string and must be
   * between 10 and 15 characters long.
   */
  fax?: string;
  /**
   * The phone number associated with this Transaction. This field is stored as a text string and
   * must be between 10 and 15 characters long.
   */
  phone?: string;
  country?: Country1;
  /**
   * The ZIP code in the address associated with this Customer. This field is stored as a text
   * string and must be between 1 and 20 characters long.
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
   * The name of the city in the address associated with this Customer. This field is stored as a
   * text string and must be between 1 and 500 characters long.
   */
  city?: string;
  /**
   * The second line of the address associated with this Customer. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  address2?: string;
  /**
   * The first line of the address associated with this Customer. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  address1?: string;
  /** The first name associated with this Customer's shipping information. */
  shippingFirst?: string;
  /** The middle name associated with this Customer's shipping information. */
  shippingMiddle?: string;
  /** The last name associated with this Customer's shipping information. */
  shippingLast?: string;
  /** The name of the company associated with this Customer's shipping information. */
  shippingCompany?: string;
  /**
   * The first line of the address associated with this Customer's shipping information. This field
   * is stored as a text string and must be between 1 and 500 characters long.
   */
  shippingAddress1?: string;
  /**
   * The second line of the address associated with this Customer's shipping information. This field
   * is stored as a text string and must be between 1 and 500 characters long.
   */
  shippingAddress2?: string;
  /**
   * The name of the city associated with this Customer's shipping information. This field is stored
   * as a text string and must be between 1 and 500 characters long.
   */
  shippingCity?: string;
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
  shippingState?: string;
  /**
   * The ZIP code associated with this Customer's shipping information. This field is stored as a
   * text string and must be between 1 and 20 characters long.
   */
  shippingZip?: string;
  shippingCountry?: Country101;
  /**
   * The phone number associated with this Customer's shipping information. This field is stored as
   * a text string and must be between 10 and 15 characters long.
   */
  shippingPhone?: string;
  /**
   * The fax number associated with this Customer's shipping information. This field is stored as a
   * text string and must be between 10 and 15 characters long.
   */
  shippingFax?: string;
  /**
   * Custom, free-form field for client-supplied text. Must be between 0 and 1,000 characters long.
   */
  custom?: string;
  /** The customer reference from the authToken used for user authentication, if available. */
  authTokenCustomer?: string;
  frozen?: Frozen1;
  inactive?: Inactive1;
  invoices?: InvoicesResponse[];
  tokens?: TokensResponse[];
};

export const customer1Schema: Schema<Customer1> = s.object<Customer1>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator5Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  merchant: s.optional(s.lazy(() => merchant5Schema)),
  entity: s.optional(s.lazy(() => entity28Schema)),
  first: s.optional(s.string()),
  middle: s.optional(s.string()),
  last: s.optional(s.string()),
  company: s.optional(s.string()),
  email: s.optional(s.string()),
  fax: s.optional(s.string()),
  phone: s.optional(s.string()),
  country: s.optional(s.lazy(() => country1Schema)),
  zip: s.optional(s.string()),
  state: s.optional(s.string()),
  city: s.optional(s.string()),
  address2: s.optional(s.string()),
  address1: s.optional(s.string()),
  shippingFirst: s.optional(s.string()),
  shippingMiddle: s.optional(s.string()),
  shippingLast: s.optional(s.string()),
  shippingCompany: s.optional(s.string()),
  shippingAddress1: s.optional(s.string()),
  shippingAddress2: s.optional(s.string()),
  shippingCity: s.optional(s.string()),
  shippingState: s.optional(s.string()),
  shippingZip: s.optional(s.string()),
  shippingCountry: s.optional(s.lazy(() => country101Schema)),
  shippingPhone: s.optional(s.string()),
  shippingFax: s.optional(s.string()),
  custom: s.optional(s.string()),
  authTokenCustomer: s.optional(s.string()),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  invoices: s.optional(s.array(s.lazy(() => invoicesResponseSchema))),
  tokens: s.optional(s.array(s.lazy(() => tokensResponseSchema))),
});
