import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { country176Schema, type Country176 } from "./country176.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { loginsConfirmed1Schema, type LoginsConfirmed1 } from "./logins-confirmed1.js";
import { loginsMfaEnabled1Schema, type LoginsMfaEnabled1 } from "./logins-mfa-enabled1.js";
import { loginsPortalAccess1Schema, type LoginsPortalAccess1 } from "./logins-portal-access1.js";

export type LoginsPutRequest = {
  /**
   * The parent user that owns this user. Defaults to authenticated user’s ID if no value is
   * explicitly set.
   */
  login?: string;
  /**
   * The partition that this Login is associated with. The partition association opens access to
   * partition-level administrators on this user and all records owned by this user. Defaults to
   * authenticated user’s partition if no value is explicitly set.
   */
  partition?: string;
  /**
   * The division that this Login belongs to.The division association opens access to division-level
   * administrators on this user and all records owned by this user. Defaults to authenticated
   * user’s division if no value is explicitly set.
   */
  division?: string;
  /**
   * The parent division that this Login belongs to. Children of this Login will inherit its parent
   * division. The parentDivision association may be used for whitelabeling the user experience for
   * parent divisions that have implemented a whitelabel solution (as long as the child division
   * that the user is associated with has not implemented their own). Defaults to authenticated
   * user’s parentDivision if no value is explicitly set.
   */
  parentDivision?: string;
  /**
   * The roles associated with this Login, specified as an integer. <details> <summary>Single Roles-
   * Valid Values</summary> <ul> <li><code>16</code> - Entity</li> <li><code>64</code> - Vendor</li>
   * <li><code>128</code> - Merchant</li> <li><code>256</code> - Create Merchant</li>
   * <li><code>512</code> - Password</li> <li><code>1024</code> - Log</li> <li><code>2048</code> -
   * Unfreeze</li> <li><code>4096</code> - Modify Roles</li> <li><code>8192</code> - Payment
   * IDs</li> <li><code>65536</code> - MCC</li> <li><code>131072</code> - TXN Report</li>
   * <li><code>262144</code> - Disbursement</li> <li><code>524288</code> - Fund Reserve</li>
   * <li><code>1048576</code> - Platform Refs</li> <li><code>2097152</code> - Verification</li>
   * <li><code>4194304</code> - Fee</li> <li><code>8388608</code> - Challenge</li>
   * <li><code>16777216</code> - Reserve TXN</li> <li><code>33554432</code> - Set Boarded</li>
   * <li><code>67108864</code> - Assessment</li> <li><code>134217728</code> - Adjustment</li>
   * <li><code>268435456</code> - Merchant Flow</li> <li><code>1073741824</code> - Confirm
   * Email</li> <li><code>2147483648</code> - TIN Status</li> <li><code>4294967296</code> - Entity
   * Route</li> <li><code>8589934592</code> - Files</li> <li><code>17179869184</code> - Unmask
   * Private</li> <li><code>34359738368</code> - Unmask Bank</li> <li><code>68719476736</code> -
   * Thread Create</li> <li><code>137438953472</code> - BIN Query</li> <li><code>274877906944</code>
   * - BIN Change</li> <li><code>1099511627776</code> - Assessment View</li>
   * <li><code>17592186044416</code> - Entity Return</li> <li><code>70368744177664</code> -
   * Watchlist</li> <li><code>140737488355328</code> - Profit Share</li>
   * <li><code>281474976710656</code> - MFA</li> </ul> </details> <details> <summary>Multi-Roles-
   * Valid Values</summary> <ul> <li><code>144</code> - Entity, Merchant</li> <li><code>192</code> -
   * Vendor, Merchant</li> <li><code>208</code> - Entity, Vendor, Merchant</li> <li><code>320</code>
   * - Vendor, Create Merchant</li> <li><code>384</code> - Merchant, Create Merchant</li>
   * <li><code>400</code> - Entity, Merchant, Create Merchant</li> <li><code>131136</code> - Vendor,
   * TXN Report</li> <li><code>131200</code> - Merchant, TXN Report</li> <li><code>131456</code> -
   * Merchant, Create Merchant, TXN Report</li> <li><code>1048640</code> - Vendor, Platform
   * Refs</li> <li><code>1048704</code> - Merchant, Platform Refs</li> <li><code>1048768</code> -
   * Vendor, Merchant, Platform Refs</li> <li><code>2097216</code> - Vendor, Verification</li>
   * <li><code>4194368</code> - Vendor, Fee</li> <li><code>4194384</code> - Entity, Vendor, Fee</li>
   * <li><code>134217792</code> - Vendor, Adjustment</li> <li><code>268435584</code> - Merchant,
   * Merchant Flow</li> <li><code>272630160</code> - Entity, Merchant, Create Merchant, Fee,
   * Merchant Flow</li> <li><code>272630224</code> - Entity, Vendor, Merchant, Create Merchant, Fee,
   * Merchant Flow</li> <li><code>273154512</code> - Entity, Vendor, Merchant, Create Merchant, Fund
   * Reserve, Fee, Merchant Flow</li> <li><code>1099511627840</code> - Vendor, Assessment View</li>
   * <li><code>1099511758912</code> - Vendor, TXN Report, Assessment View</li> </ul> </details>
   */
  roles?: number;
  confirmed?: LoginsConfirmed1;
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
  /** The first name associated with this Login. */
  first?: string;
  /** The middle name associated with this Login. */
  middle?: string;
  /** The last name associated with this Login. */
  last?: string;
  /** The email address associated with this Login. */
  email?: string;
  /**
   * The allowedResources field specifies the actions and resources a user can access. The JSON
   * structure includes action keys (create, update, read, delete, totals) and lists of resources
   * (e.g., logins, apikeys, sessions). Omitted action keys indicate no access for those actions.
   * <details> <summary>Instructions</summary> In addition to the roles for this login, you can
   * specify API functionality by creating a JSON object as the value for this field using with data
   * arrays titled: <code>”create”: []</code>, <code>”read”: []</code>, <code>”update”: []</code>,
   * <code>”delete”: []</code>, and <code>”totals”: []</code> for their API CRUD functions
   * <code>POST</code>, <code>GET</code>, <code>PUT</code>, <code>DELETE</code> with the
   * <code>totals</code> array setting users ability to calculate and report on disbursements,
   * funds, and other monetary totals relevant to the specified endpoint resources. Add the names of
   * each endpoint resource separated by a comma (<code>,</code>) for which you want to provide
   * functionality. For example, <code>{ "create": ["payouts"] }</code> allows this login to create
   * payout transactions using the <code>POST /payouts</code> API request method. <ul>
   * <li><strong>Note:</strong> Resources are case sensitive. Our API uses <a
   * href="https://en.wikipedia.org/wiki/Camel_case">camelCase</a>. If you are unsure of formatting,
   * refer to the API specification to copy the exact endpoint title without the initial forward
   * slash ( / ) for the relevant allowedResources or restrictedResources arrays.</li> </ul>
   * </details>
   */
  allowedResources?: string;
  /**
   * The restrictedResources field defines the actions and resources a user is restricted from
   * accessing. The JSON structure includes action keys (create, update, read, delete, totals) and
   * lists of resources (e.g., logins, apikeys, sessions). Omitted action keys indicate no
   * restrictions for those actions. <details> <summary>Instructions</summary> In addition to the
   * roles for this login, you can specify API functionality by creating a JSON object as the value
   * for this field using with data arrays titled: <code>”create”: []</code>, <code>”read”:
   * []</code>, <code>”update”: []</code>, <code>”delete”: []</code>, and <code>”totals”: []</code>
   * for their API CRUD functions <code>POST</code>, <code>GET</code>, <code>PUT</code>,
   * <code>DELETE</code> with the <code>totals</code> array setting users ability to calculate and
   * report on disbursements, funds, and other monetary totals relevant to the specified endpoint
   * resources. Add the names of each endpoint resource separated by a comma (<code>,</code>) for
   * which you want to provide functionality. For example, <code>{ "create": ["payouts"] }</code>
   * allows this login to create payout transactions using the <code>POST /payouts</code> API
   * request method. <ul> <li><strong>Note:</strong> Resources are case sensitive. Our API uses <a
   * href="https://en.wikipedia.org/wiki/Camel_case">camelCase</a>. If you are unsure of formatting,
   * refer to the API specification to copy the exact endpoint title without the initial forward
   * slash ( / ) for the relevant allowedResources or restrictedResources arrays.</li> </ul>
   * </details>
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
   * The first line of the address associated with this Login. This field is stored as a text string
   * and must be between 1 and 500 characters long.
   */
  address1?: string;
  /**
   * The second line of the address associated with this Login. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  address2?: string;
  /**
   * The name of the city in the address associated with this Login. This field is stored as a text
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
   * The ZIP code in the address associated with this Login. This field is stored as a text string
   * and must be between 1 and 20 characters long.
   */
  zip?: string;
  country?: Country176;
  /**
   * The phone number associated with this Login. This field is stored as a text string and must be
   * between 10 and 15 characters long.
   */
  phone?: string;
  /**
   * The fax number associated with this Login. This field is stored as a text string and must be
   * between 10 and 15 characters long.
   */
  fax?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const loginsPutRequestSchema: Schema<LoginsPutRequest> = s.object<LoginsPutRequest>({
  login: s.optional(s.string()),
  partition: s.optional(s.string()),
  division: s.optional(s.string()),
  parentDivision: s.optional(s.string()),
  roles: s.optional(s.number()),
  confirmed: s.optional(s.lazy(() => loginsConfirmed1Schema)),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  first: s.optional(s.string()),
  middle: s.optional(s.string()),
  last: s.optional(s.string()),
  email: s.optional(s.string()),
  allowedResources: s.optional(s.string()),
  restrictedResources: s.optional(s.string()),
  portalAccess: s.optional(s.lazy(() => loginsPortalAccess1Schema)),
  mfaEnabled: s.optional(s.lazy(() => loginsMfaEnabled1Schema)),
  mfaSecret: s.optional(s.string()),
  mfaEnrolledDate: s.optional(s.string()),
  mfaType: s.optional(s.string()),
  address1: s.optional(s.string()),
  address2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  zip: s.optional(s.string()),
  country: s.optional(s.lazy(() => country176Schema)),
  phone: s.optional(s.string()),
  fax: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
