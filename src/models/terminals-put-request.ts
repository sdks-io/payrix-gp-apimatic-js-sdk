import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { country188Schema, type Country188 } from "./country188.js";
import { terminalEnvironment1Schema, type TerminalEnvironment1 } from "./terminal-environment1.js";
import { terminalStatus1Schema, type TerminalStatus1 } from "./terminal-status1.js";
import { terminalType1Schema, type TerminalType1 } from "./terminal-type1.js";
import { terminalsAutoClose1Schema, type TerminalsAutoClose1 } from "./terminals-auto-close1.js";
import { terminalsCapability1Schema, type TerminalsCapability1 } from "./terminals-capability1.js";
import { terminalsCloudEnabled1Schema, type TerminalsCloudEnabled1 } from "./terminals-cloud-enabled1.js";
import { terminalsTimezone1Schema, type TerminalsTimezone1 } from "./terminals-timezone1.js";

export type TerminalsPutRequest = {
  type?: TerminalType1;
  capability?: TerminalsCapability1;
  environment?: TerminalEnvironment1;
  autoClose?: TerminalsAutoClose1;
  /**
   * The time when the terminal should be automatically closed for the day. This field is only
   * required when AutoClose is set to automatic; the format should be HHMM (1145, 2200, etc).
   */
  autoCloseTime?: number;
  cloudEnabled?: TerminalsCloudEnabled1;
  /** The serial number of the terminal device. */
  serial?: string;
  /** The ID of the token record to associate with this terminal transaction request. */
  token?: string;
  /**
   * The name of this Terminal. This field is stored as a text string and must be between 1 and 100
   * characters long.
   */
  name?: string;
  /**
   * A description of the Terminal. This field is stored as a text string and must be between 1 and
   * 100 characters long.
   */
  description?: string;
  /**
   * The first line of the address associated with this Terminal's location. This field is stored as
   * a text string and must be between 1 and 500 characters long.
   */
  address1?: string;
  /**
   * The second line of the address associated with this Terminal's location. This field is stored
   * as a text string and must be between 1 and 500 characters long.
   */
  address2?: string;
  /**
   * The name of the city in the address associated with this Terminal's location. This field is
   * stored as a text string and must be between 1 and 500 characters long.
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
   * The ZIP code in the address associated with this Terminal's location, This field is stored as a
   * text string and must be between 1 and 20 characters long.
   */
  zip?: string;
  country?: Country188;
  /**
   * The Phone number is the telephone number associated with the Terminal's location, stored as a
   * text string and must be between 5 and 15 characters long and numeric characters only.
   */
  phone?: string;
  timezone?: TerminalsTimezone1;
  status?: TerminalStatus1;
};

export const terminalsPutRequestSchema: Schema<TerminalsPutRequest> = s.object<TerminalsPutRequest>({
  type: s.optional(s.lazy(() => terminalType1Schema)),
  capability: s.optional(s.lazy(() => terminalsCapability1Schema)),
  environment: s.optional(s.lazy(() => terminalEnvironment1Schema)),
  autoClose: s.optional(s.lazy(() => terminalsAutoClose1Schema)),
  autoCloseTime: s.optional(s.number()),
  cloudEnabled: s.optional(s.lazy(() => terminalsCloudEnabled1Schema)),
  serial: s.optional(s.string()),
  token: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  address1: s.optional(s.string()),
  address2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  zip: s.optional(s.string()),
  country: s.optional(s.lazy(() => country188Schema)),
  phone: s.optional(s.string()),
  timezone: s.optional(s.lazy(() => terminalsTimezone1Schema)),
  status: s.optional(s.lazy(() => terminalStatus1Schema)),
});
