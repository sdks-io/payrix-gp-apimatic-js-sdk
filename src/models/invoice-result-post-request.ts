import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { country122Schema, type Country122 } from "./country122.js";
import { invoiceResultStatus1Schema, type InvoiceResultStatus1 } from "./invoice-result-status1.js";

export type InvoiceResultPostRequest = {
  /** The identifier of the Invoice that owns this invoiceResults resource. */
  invoice: string;
  /** The identifier of the Transaction associated with this invoiceResults resource. */
  txn?: string | null;
  status?: InvoiceResultStatus1;
  /**
   * A message that accompanies and describes this invoice result. This field is specified as a text
   * string and must be between 1 and 500 characters long.
   */
  message?: string;
  /**
   * The shipping first name associated with this InvoiceResult. This field is stored as a text
   * string and must be between 0 and 100 characters long.
   */
  shippingFirst?: string;
  /**
   * The shipping middle name associated with this InvoiceResult. This field is stored as a text
   * string and must be between 0 and 100 characters long.
   */
  shippingMiddle?: string;
  /**
   * The shipping last name associated with this InvoiceResult. This field is stored as a text
   * string and must be between 0 and 100 characters long.
   */
  shippingLast?: string;
  /**
   * The shipping name of the company associated with this InvoiceResult. This field is stored as a
   * text string and must be between 0 and 100 characters long.
   */
  shippingCompany?: string;
  /**
   * The shipping first line of the address associated with this InvoiceResult. This field is stored
   * as a text string and must be between 0 and 500 characters long.
   */
  shippingAddress1?: string;
  /**
   * The shipping second line of the address associated with this InvoiceResult. This field is
   * stored as a text string and must be between 0 and 500 characters long.
   */
  shippingAddress2?: string;
  /**
   * The shipping name of the city in the address associated with this InvoiceResult. This field is
   * stored as a text string and must be between 0 and 500 characters long.
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
   * The shipping zip code in the address associated with this InvoiceResult. This field is stored
   * as a text string and must be between 1 and 20 characters long.
   */
  shippingZip?: string;
  shippingCountry?: Country122;
  /**
   * The shipping phone number associated with this InvoiceResult. This field is stored as a text
   * string and must be between 5 and 15 characters long.
   */
  shippingPhone?: string;
  /**
   * The shipping fax number associated with this InvoiceResult, stored as a text string and must be
   * between 5 and 15 characters long.
   */
  shippingFax?: string;
  /** The authorization text the customer agreed to when making this payment. */
  authorization?: string;
  /** Replacement data for replaceable strings in the authorization text. */
  authorizationData?: string;
  /** The signature on file for the customer’s authorization acceptance. */
  signature?: string;
};

export const invoiceResultPostRequestSchema: Schema<InvoiceResultPostRequest> =
  s.object<InvoiceResultPostRequest>({
    invoice: s.string(),
    txn: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => invoiceResultStatus1Schema)),
    message: s.optional(s.string()),
    shippingFirst: s.optional(s.string()),
    shippingMiddle: s.optional(s.string()),
    shippingLast: s.optional(s.string()),
    shippingCompany: s.optional(s.string()),
    shippingAddress1: s.optional(s.string()),
    shippingAddress2: s.optional(s.string()),
    shippingCity: s.optional(s.string()),
    shippingState: s.optional(s.string()),
    shippingZip: s.optional(s.string()),
    shippingCountry: s.optional(s.lazy(() => country122Schema)),
    shippingPhone: s.optional(s.string()),
    shippingFax: s.optional(s.string()),
    authorization: s.optional(s.string()),
    authorizationData: s.optional(s.string()),
    signature: s.optional(s.string()),
  });
