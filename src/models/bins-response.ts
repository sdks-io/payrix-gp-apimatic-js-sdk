import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billing1Schema, type Billing1 } from "./billing1.js";
import { binLocationType1Schema, type BinLocationType1 } from "./bin-location-type1.js";
import { binMethod1Schema, type BinMethod1 } from "./bin-method1.js";
import { binsBillPayEnabled1Schema, type BinsBillPayEnabled1 } from "./bins-bill-pay-enabled1.js";
import { binsCategory1Schema, type BinsCategory1 } from "./bins-category1.js";
import {
  binsDebitOverCreditEnabled1Schema,
  type BinsDebitOverCreditEnabled1,
} from "./bins-debit-over-credit-enabled1.js";
import { binsPinlessSupport1Schema, type BinsPinlessSupport1 } from "./bins-pinless-support1.js";
import { binsTransferEnabled1Schema, type BinsTransferEnabled1 } from "./bins-transfer-enabled1.js";
import { binsType1Schema, type BinsType1 } from "./bins-type1.js";
import { country48Schema, type Country48 } from "./country48.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type BinsResponse = {
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
  /** The first 6 digits of the card used in a Transaction. */
  bin?: string;
  method?: BinMethod1;
  type?: BinsType1;
  category?: BinsCategory1;
  /** The name of the bank that issued the card used in the Transaction. */
  name?: string;
  /** Street address of the bank. */
  address?: string;
  /** City of the bank. */
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
  country?: Country48;
  /** Zip code of the banking institution. */
  zip?: string;
  locationType?: BinLocationType1;
  /** The BIN (Bank Issuer Number) or routing number that replaces or supersedes this bin. */
  newBin?: string;
  /** The website of the bank that issued the card used in the Transaction. */
  website?: string;
  /** The phone of the bank that issued the card used in the Transaction. */
  phone?: string;
  transferEnabled?: BinsTransferEnabled1;
  /** The amount of digits expected for account numbers with this bin. */
  numberLength?: number;
  debitOverCreditEnabled?: BinsDebitOverCreditEnabled1;
  billPayEnabled?: BinsBillPayEnabled1;
  pinlessSupport?: BinsPinlessSupport1;
  inactive?: Inactive1;
  frozen?: Frozen1;
  billing?: Billing1;
};

export const binsResponseSchema: Schema<BinsResponse> = s.object<BinsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  bin: s.optional(s.string()),
  method: s.optional(s.lazy(() => binMethod1Schema)),
  type: s.optional(s.lazy(() => binsType1Schema)),
  category: s.optional(s.lazy(() => binsCategory1Schema)),
  name: s.optional(s.string()),
  address: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.lazy(() => country48Schema)),
  zip: s.optional(s.string()),
  locationType: s.optional(s.lazy(() => binLocationType1Schema)),
  newBin: s.optional(s.string()),
  website: s.optional(s.string()),
  phone: s.optional(s.string()),
  transferEnabled: s.optional(s.lazy(() => binsTransferEnabled1Schema)),
  numberLength: s.optional(s.number()),
  debitOverCreditEnabled: s.optional(s.lazy(() => binsDebitOverCreditEnabled1Schema)),
  billPayEnabled: s.optional(s.lazy(() => binsBillPayEnabled1Schema)),
  pinlessSupport: s.optional(s.lazy(() => binsPinlessSupport1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  billing: s.optional(s.lazy(() => billing1Schema)),
});
