import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { country140Schema, type Country140 } from "./country140.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { facilitatorsResponseSchema, type FacilitatorsResponse } from "./facilitators-response.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { membersGender1Schema, type MembersGender1 } from "./members-gender1.js";
import {
  membersPoliticallyExposed1Schema,
  type MembersPoliticallyExposed1,
} from "./members-politically-exposed1.js";
import { membersPrimary1Schema, type MembersPrimary1 } from "./members-primary1.js";
import {
  membersSignificantResponsibility1Schema,
  type MembersSignificantResponsibility1,
} from "./members-significant-responsibility1.js";
import { membersTimezone1Schema, type MembersTimezone1 } from "./members-timezone1.js";
import { merchant2Schema, type Merchant2 } from "./merchant2.js";
import { vendorSchema, type Vendor } from "./vendor.js";
import { verificationsResponseSchema, type VerificationsResponse } from "./verifications-response.js";

export type Member = {
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
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  merchant?: Merchant2;
  /**
   * The title that this Member holds in relation to the associated Merchant. This field is stored
   * as a text string and must be between 0 and 100 characters long. For example, 'CEO', 'Owner' or
   * 'Director of Finance'.
   */
  title?: string;
  /**
   * The first name associated with this Member. This field is stored as a text string and must be
   * between 1 and 100 characters long.
   */
  first?: string;
  /**
   * The middle name associated with this Member. This field is stored as a text string and must be
   * between 0 and 100 characters long.
   */
  middle?: string;
  /**
   * The last name associated with this Member. This field is stored as a text string and must be
   * between 1 and 100 characters long.
   */
  last?: string;
  /**
   * The social security number of this Member. This field is required if the Merchant associated
   * with the Member is a sole trader. This field is stored as a text string and must be 9
   * characters long and numeric characters only.
   */
  ssn?: string;
  citizenship?: Country140;
  /**
   * The date of birth of this Member. The date is specified as an eight digit string in YYYYMMDD
   * format, for example, '20160120' for January 20, 2016.
   */
  dob?: number;
  gender?: MembersGender1;
  /**
   * The driver's license number of this Member. This field is stored as a text string and must be
   * between 0 and 15 characters long.
   */
  dl?: string;
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
  dlstate?: string;
  /**
   * The share of the Member's ownership of the associated Merchant, expressed in basis points. For
   * example, 25.3% is expressed as '2530'. This field is stored as an integer and must be between 1
   * and 10000 characters long.
   */
  ownership?: number;
  /**
   * The email address of this Member. This field is stored as a text string and must be between 1
   * and 100 characters long.
   */
  email?: string;
  /**
   * The fax number associated with this Member. This field is stored as a text string and must be
   * between 5 and 15 characters long.
   */
  fax?: string;
  /**
   * The phone number associated with this Member. This field is stored as a text string and must be
   * between 5 and 15 characters long.
   */
  phone?: string;
  country?: Country140;
  timezone?: MembersTimezone1;
  /**
   * The ZIP code in the address associated with this Member. This field is stored as a text string
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
   * The name of the city in the address associated with this Member. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  city?: string;
  /**
   * The second line of the address associated with this Member. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  address2?: string;
  /**
   * The first line of the address associated with this Member. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  address1?: string;
  primary?: MembersPrimary1;
  /**
   * A credit score is a three-digit number that rates your creditworthiness. scores range from 334
   * to 818.
   */
  creditScore?: number;
  /** Date for Credit Score. The format should be YYYY-MM-DD HH:MM:SS. */
  creditScoreDate?: string;
  significantResponsibility?: MembersSignificantResponsibility1;
  politicallyExposed?: MembersPoliticallyExposed1;
  /**
   * The mailing first line of the address associated with this Member. This field is stored as a
   * text string and must be between 1 and 500 characters long.
   */
  mailingAddress1?: string;
  /** ["signer", "control_person"] Any one of these. */
  treasuryPrimeRoles?: string;
  /**
   * The mailing second line of the address associated with this Member. This field is stored as a
   * text string and must be between 1 and 500 characters long.
   */
  mailingAddress2?: string;
  /**
   * The mailing name of the city in the address associated with this Member. This field is stored
   * as a text string and must be between 1 and 500 characters long.
   */
  mailingCity?: string;
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
  mailingState?: string;
  /**
   * The mailing postal code in the address associated with this Member. This field is stored as a
   * text string and must be between 1 and 20 characters long.
   */
  mailingPostalCode?: string;
  mailingCountry?: Country140;
  facilitator?: FacilitatorsResponse;
  vendor?: Vendor;
  /**
   * This is a URL that was used in the Identity Verification for the member. This is a gotten from
   * identity verification through the integration partner.
   */
  shareableUrl?: string;
  /**
   * This is also part of the verification result from the third party that tracks the status of the
   * verification process of the member.
   */
  status?: string;
  /** The timestamp when was createdAt. */
  createdAt?: number;
  /** The timestamp when was completedAt. */
  completedAt?: number;
  /** This is the integration ID for the verification response. */
  plaidIdvId?: string;
  /** This is the ID of the template used in the verification process of the member. */
  templateId?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
  verifications?: VerificationsResponse[];
};

export const memberSchema: Schema<Member> = s.object<Member>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  merchant: s.optional(s.lazy(() => merchant2Schema)),
  title: s.optional(s.string()),
  first: s.optional(s.string()),
  middle: s.optional(s.string()),
  last: s.optional(s.string()),
  ssn: s.optional(s.string()),
  citizenship: s.optional(s.lazy(() => country140Schema)),
  dob: s.optional(s.number()),
  gender: s.optional(s.lazy(() => membersGender1Schema)),
  dl: s.optional(s.string()),
  dlstate: s.optional(s.string()),
  ownership: s.optional(s.number()),
  email: s.optional(s.string()),
  fax: s.optional(s.string()),
  phone: s.optional(s.string()),
  country: s.optional(s.lazy(() => country140Schema)),
  timezone: s.optional(s.lazy(() => membersTimezone1Schema)),
  zip: s.optional(s.string()),
  state: s.optional(s.string()),
  city: s.optional(s.string()),
  address2: s.optional(s.string()),
  address1: s.optional(s.string()),
  primary: s.optional(s.lazy(() => membersPrimary1Schema)),
  creditScore: s.optional(s.number()),
  creditScoreDate: s.optional(s.string()),
  significantResponsibility: s.optional(s.lazy(() => membersSignificantResponsibility1Schema)),
  politicallyExposed: s.optional(s.lazy(() => membersPoliticallyExposed1Schema)),
  mailingAddress1: s.optional(s.string()),
  treasuryPrimeRoles: s.optional(s.string()),
  mailingAddress2: s.optional(s.string()),
  mailingCity: s.optional(s.string()),
  mailingState: s.optional(s.string()),
  mailingPostalCode: s.optional(s.string()),
  mailingCountry: s.optional(s.lazy(() => country140Schema)),
  facilitator: s.optional(s.lazy(() => facilitatorsResponseSchema)),
  vendor: s.optional(s.lazy(() => vendorSchema)),
  shareableUrl: s.optional(s.string()),
  status: s.optional(s.string()),
  createdAt: s.optional(s.number()),
  completedAt: s.optional(s.number()),
  plaidIdvId: s.optional(s.string()),
  templateId: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  verifications: s.optional(s.array(s.lazy(() => verificationsResponseSchema))),
});
