import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { country143Schema, type Country143 } from "./country143.js";
import { currencyConversion1Schema, type CurrencyConversion1 } from "./currency-conversion1.js";
import { entryMode1Schema, type EntryMode1 } from "./entry-mode1.js";
import { payment4Schema, type Payment4 } from "./payment4.js";
import { terminalTxnsCvvStatus1Schema, type TerminalTxnsCvvStatus1 } from "./terminal-txns-cvv-status1.js";
import { terminalTxnsPin1Schema, type TerminalTxnsPin1 } from "./terminal-txns-pin1.js";
import { terminalTxnsSignature1Schema, type TerminalTxnsSignature1 } from "./terminal-txns-signature1.js";
import { terminalTxnsSwiped1Schema, type TerminalTxnsSwiped1 } from "./terminal-txns-swiped1.js";
import {
  terminalTxnsTerminalCapability1Schema,
  type TerminalTxnsTerminalCapability1,
} from "./terminal-txns-terminal-capability1.js";
import { terminalTxnsUnattended1Schema, type TerminalTxnsUnattended1 } from "./terminal-txns-unattended1.js";
import { txnOrigin1Schema, type TxnOrigin1 } from "./txn-origin1.js";
import { txnType1Schema, type TxnType1 } from "./txn-type1.js";
import { txnsAllowPartial1Schema, type TxnsAllowPartial1 } from "./txns-allow-partial1.js";
import { txnsCofType1Schema, type TxnsCofType1 } from "./txns-cof-type1.js";
import { txnsCopyReasons1Schema, type TxnsCopyReasons1 } from "./txns-copy-reasons1.js";
import { txnsDebtRepayment1Schema, type TxnsDebtRepayment1 } from "./txns-debt-repayment1.js";
import { txnsFundingEnabled1Schema, type TxnsFundingEnabled1 } from "./txns-funding-enabled1.js";
import { txnsMobile1Schema, type TxnsMobile1 } from "./txns-mobile1.js";
import { txnsPinEntryCapability1Schema, type TxnsPinEntryCapability1 } from "./txns-pin-entry-capability1.js";
import { txnsPlatform1Schema, type TxnsPlatform1 } from "./txns-platform1.js";
import { unauthReason1Schema, type UnauthReason1 } from "./unauth-reason1.js";

export type TxnsPostRequest = {
  allowPartial: TxnsAllowPartial1;
  /** If the Transaction is linked to a Batch, this field specifies the identifier of the Batch. */
  batch?: string;
  /** Authentication token returned by the network in a 3DSecure txn. */
  authentication: string;
  /** Optional transaction ID returned by the network in a 3DSecure txn. */
  authenticationId?: string;
  cofType?: TxnsCofType1;
  currencyConversion?: CurrencyConversion1;
  debtRepayment: TxnsDebtRepayment1;
  /**
   * The expiration date of this Transaction. This field is stored as a text string in 'MMYY'
   * format, where 'MM' is the number of a month and 'YY' is the last two digits of a year. For
   * example, '0623' for June 2023. The value must reflect a future date.
   */
  expiration?: string;
  /**
   * If this Transaction is related to another Transaction, then this field is set to the identifier
   * of the other Transaction. For example, if this Transaction is a refund, this field could be set
   * to the identifier of the original sale Transaction.
   */
  fortxn: string;
  /**
   * Reauthorize this referenced Transaction. For example, to process a resubmission of a declined
   * Transaction or to reauthorize an expired Transaction.
   */
  fromtxn?: string;
  copyReason?: TxnsCopyReasons1;
  mobile?: TxnsMobile1;
  origin: TxnOrigin1;
  pinEntryCapability?: TxnsPinEntryCapability1;
  platform?: TxnsPlatform1;
  /**
   * For entry creation and deletion job sequencing: the current processed sequence number for this
   * transaction.
   *
   * @default 0
   */
  processedSequence?: number;
  /** A date indicating when this Transaction was funded. This field is set automatically. */
  funded?: number;
  /** The transaction has been returned by the receiver. */
  returned?: string;
  fundingEnabled?: TxnsFundingEnabled1;
  /** FBO (for benefit of) in which each entry origin belongs to. */
  fbo?: string;
  /**
   * For entry creation and deletion job sequencing: the current processed sequence number for this
   * transaction.
   *
   * @default 0
   */
  requestSequence?: number;
  /** The statement ID for which this transaction is being processed as payment. */
  statement?: string;
  /** The token of the Tokens resource this Transaction is associated with. */
  token?: string;
  type: TxnType1;
  unauthReason: UnauthReason1;
  /** The customer identifier from the AuthToken used during authentication. */
  authTokenCustomer?: string;
  /** This field is stored as a text string and must be between 0 and 1000 characters long. */
  channel?: string;
  /**
   * The amount of the total sum of this Transaction that is given as cash back. This field is
   * specified as an integer in cents.
   */
  cashback?: number;
  /**
   * The client ip address from which the Transaction was created. Valid values are any Ipv4 or Ipv6
   * address.
   */
  clientIp?: string;
  /**
   * The name of the company associated with this Transaction. Setting this field is especially
   * important when processing an eCheck from a company.
   */
  company?: string;
  currency: Record<string, unknown>;
  fundingCurrency: Record<string, unknown>;
  cvvStatus?: TerminalTxnsCvvStatus1;
  /**
   * A description of this Transaction. This field is stored as a text string and must be between 0
   * and 1000 characters long.
   */
  description?: string;
  /** The customer discount, in cents, already applied to the total for this transaction. */
  discount?: number;
  /** The amount of the total, in cents, that represents the duties charged to the customer */
  duty?: number;
  /** The email associated with this Transaction. */
  email?: string;
  swiped: TerminalTxnsSwiped1;
  entryMode?: EntryMode1;
  /**
   * Optional calculated fee amount indicator. This should be used in conjunction with txnFee
   * setting on Fees resource, This field is specified in cents(up to three decimal points)
   */
  fee?: number;
  /**
   * The first name associated with this Transaction. For eCheck transactions, either first or last
   * is required.
   */
  first?: string;
  /**
   * The last name associated with this Transaction. For eCheck transactions, either first or last
   * is required.
   */
  last?: string;
  /** The identifier of the Merchant associated with this Transaction. */
  merchant: string;
  /**
   * The Merchant ID as set by the processor. This field is stored as a text string and must be
   * between 0 and 50 characters long.
   */
  mid: string;
  /** The middle name associated with this Transaction. */
  middle?: string;
  /**
   * The identifier of the Order associated with this Transaction. This field is stored as a text
   * string and must be between 0 and 1000 characters long.
   */
  order?: string;
  pin: TerminalTxnsPin1;
  /**
   * The amount of the total, in cents, that represents the shipping cost charged to the customer
   */
  shipping?: number;
  signature: TerminalTxnsSignature1;
  /**
   * The amount of the total sum of this Transaction that is made up of tax. This field is specified
   * as an integer in cents.
   */
  tax?: number;
  /**
   * The amount of the total sum of this Transaction that is made up of surcharge. This field is
   * specified as an integer in cents.
   */
  surcharge?: number;
  /**
   * The identifier of the terminal that processed this Transaction. The identifier is taken from
   * the terminal system and varies in format according to the type of terminal. This field is
   * stored as a text string and must be between 0 and 50 characters long.
   */
  terminal?: string;
  terminalCapability?: TerminalTxnsTerminalCapability1;
  /**
   * The total amount of this Transaction. This field is specified as an integer in cents.For
   * example, $10.15 would be entered as 1015.
   */
  total: number;
  unattended: TerminalTxnsUnattended1;
  /**
   * The first line of the address associated with this Transaction. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  address1?: string;
  /**
   * The second line of the address associated with this Transaction. This field is stored as a text
   * string and must be between 1 and 500 characters long.
   */
  address2?: string;
  /**
   * The name of the city in the address associated with this Transaction. This field is stored as a
   * text string and must be between 1 and 500 characters long.
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
   * The ZIP code in the address associated with this Transaction. This field is stored as a text
   * string and must be between 1 and 20 characters long.
   */
  zip?: string;
  country?: Country143;
  /**
   * The phone number associated with this Transaction. This field is stored as a text string and
   * must be between 10 and 15 characters long.
   */
  phone?: string;
  /** Threatmetrix session ID. Not for partner/referrer use. */
  tmxSessionId?: string;
  /**
   * For external recurring systems, this is the first transaction ID related to this recurring
   * payment.
   */
  firstTxn?: string;
  payment: Payment4;
};

export const txnsPostRequestSchema: Schema<TxnsPostRequest> = s.object<TxnsPostRequest>({
  allowPartial: txnsAllowPartial1Schema,
  batch: s.optional(s.string()),
  authentication: s.string(),
  authenticationId: s.optional(s.string()),
  cofType: s.optional(s.lazy(() => txnsCofType1Schema)),
  currencyConversion: s.optional(s.lazy(() => currencyConversion1Schema)),
  debtRepayment: txnsDebtRepayment1Schema,
  expiration: s.optional(s.string()),
  fortxn: s.string(),
  fromtxn: s.optional(s.string()),
  copyReason: s.optional(s.lazy(() => txnsCopyReasons1Schema)),
  mobile: s.optional(s.lazy(() => txnsMobile1Schema)),
  origin: txnOrigin1Schema,
  pinEntryCapability: s.optional(s.lazy(() => txnsPinEntryCapability1Schema)),
  platform: s.optional(s.lazy(() => txnsPlatform1Schema)),
  processedSequence: s.defaulted(s.number(), 0),
  funded: s.optional(s.number()),
  returned: s.optional(s.string()),
  fundingEnabled: s.optional(s.lazy(() => txnsFundingEnabled1Schema)),
  fbo: s.optional(s.string()),
  requestSequence: s.defaulted(s.number(), 0),
  statement: s.optional(s.string()),
  token: s.optional(s.string()),
  type: txnType1Schema,
  unauthReason: unauthReason1Schema,
  authTokenCustomer: s.optional(s.string()),
  channel: s.optional(s.string()),
  cashback: s.optional(s.number()),
  clientIp: s.optional(s.string()),
  company: s.optional(s.string()),
  currency: s.record(s.string(), s.unknown()),
  fundingCurrency: s.record(s.string(), s.unknown()),
  cvvStatus: s.optional(s.lazy(() => terminalTxnsCvvStatus1Schema)),
  description: s.optional(s.string()),
  discount: s.optional(s.number()),
  duty: s.optional(s.number()),
  email: s.optional(s.string()),
  swiped: terminalTxnsSwiped1Schema,
  entryMode: s.optional(s.lazy(() => entryMode1Schema)),
  fee: s.optional(s.number()),
  first: s.optional(s.string()),
  last: s.optional(s.string()),
  merchant: s.string(),
  mid: s.string(),
  middle: s.optional(s.string()),
  order: s.optional(s.string()),
  pin: terminalTxnsPin1Schema,
  shipping: s.optional(s.number()),
  signature: terminalTxnsSignature1Schema,
  tax: s.optional(s.number()),
  surcharge: s.optional(s.number()),
  terminal: s.optional(s.string()),
  terminalCapability: s.optional(s.lazy(() => terminalTxnsTerminalCapability1Schema)),
  total: s.number(),
  unattended: terminalTxnsUnattended1Schema,
  address1: s.optional(s.string()),
  address2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  zip: s.optional(s.string()),
  country: s.optional(s.lazy(() => country143Schema)),
  phone: s.optional(s.string()),
  tmxSessionId: s.optional(s.string()),
  firstTxn: s.optional(s.string()),
  payment: payment4Schema,
});
