import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { country143Schema, type Country143 } from "./country143.js";
import { entryMode1Schema, type EntryMode1 } from "./entry-mode1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { notesPostRequestSchema, type NotesPostRequest } from "./notes-post-request.js";
import { platformModel1Schema, type PlatformModel1 } from "./platform-model1.js";
import { terminalTxnOrigin1Schema, type TerminalTxnOrigin1 } from "./terminal-txn-origin1.js";
import {
  terminalTxnPaymentMethod1Schema,
  type TerminalTxnPaymentMethod1,
} from "./terminal-txn-payment-method1.js";
import {
  terminalTxnRefPostRequestSchema,
  type TerminalTxnRefPostRequest,
} from "./terminal-txn-ref-post-request.js";
import {
  terminalTxnResultsPostRequestSchema,
  type TerminalTxnResultsPostRequest,
} from "./terminal-txn-results-post-request.js";
import { terminalTxnStatus1Schema, type TerminalTxnStatus1 } from "./terminal-txn-status1.js";
import { terminalTxnType1Schema, type TerminalTxnType1 } from "./terminal-txn-type1.js";
import { terminalTxnsBinType1Schema, type TerminalTxnsBinType1 } from "./terminal-txns-bin-type1.js";
import { terminalTxnsCvvStatus1Schema, type TerminalTxnsCvvStatus1 } from "./terminal-txns-cvv-status1.js";
import {
  terminalTxnsDatasPostRequestSchema,
  type TerminalTxnsDatasPostRequest,
} from "./terminal-txns-datas-post-request.js";
import {
  terminalTxnsMetadatasPostRequestSchema,
  type TerminalTxnsMetadatasPostRequest,
} from "./terminal-txns-metadatas-post-request.js";
import { terminalTxnsPin1Schema, type TerminalTxnsPin1 } from "./terminal-txns-pin1.js";
import { terminalTxnsPos1Schema, type TerminalTxnsPos1 } from "./terminal-txns-pos1.js";
import { terminalTxnsReceipt1Schema, type TerminalTxnsReceipt1 } from "./terminal-txns-receipt1.js";
import { terminalTxnsSignature1Schema, type TerminalTxnsSignature1 } from "./terminal-txns-signature1.js";
import { terminalTxnsSwiped1Schema, type TerminalTxnsSwiped1 } from "./terminal-txns-swiped1.js";
import {
  terminalTxnsTerminalCapability1Schema,
  type TerminalTxnsTerminalCapability1,
} from "./terminal-txns-terminal-capability1.js";
import { terminalTxnsUnattended1Schema, type TerminalTxnsUnattended1 } from "./terminal-txns-unattended1.js";
import { tokenPostRequestSchema, type TokenPostRequest } from "./token-post-request.js";

export type TerminalTxnsPostRequest = {
  binType: TerminalTxnsBinType1;
  /**
   * The expiration date of this Transaction. This field is stored as a text string in 'MMYY'
   * format, where 'MM' is the number of a month and 'YY' is the last two digits of a year. For
   * example, '0623' for June 2023. The value must reflect a future date.
   */
  expiration?: string;
  /**
   * If this Terminal Transaction is related to another Terminal Transaction, then this field is set
   * to the identifier of the other Terminal Transaction. For example, if this Terminal Transaction
   * is a Refund, this field could be set to the identifier of the original Sale Terminal
   * Transaction.
   */
  forterminalTxn?: string;
  origin: TerminalTxnOrigin1;
  platform?: PlatformModel1;
  pos: TerminalTxnsPos1;
  receipt?: TerminalTxnsReceipt1;
  /**
   * The Terminal ID as set by the platform activating the terminal. This field is stored as a text
   * string and must be between 0 and 50 characters long.
   */
  tid?: string;
  /** Sequencial number that uniquely identifies the terminalTxn. */
  traceNumber?: number;
  /** The related txn this terminalTxn belongs to. */
  txn?: string;
  token?: TokenPostRequest;
  /** The last four numbers of the credit card associated with this Transaction. */
  paymentNumber?: number;
  paymentMethod?: TerminalTxnPaymentMethod1;
  type: TerminalTxnType1;
  /**
   * This field indicates the tip amount associated with a transaction. This value is for reporting
   * purposes only, because transaction amount includes this amount in the total.
   */
  tip?: number;
  /** Field identifying Payrix PAX terminal originating app. */
  originatingApp?: string;
  /**
   * Field identifying original Payrix Verifone transaction reference number, used for refunds and
   * cancellation request.
   */
  oemtTxnRefNumber?: string;
  /** Express assigned identifier i.e. Software Id being used in express terminal. */
  posApplicationId?: string;
  /** Software Name being used in express terminal. */
  posApplicationName?: string;
  /** Software version being used in express terminal. */
  posApplicationVersion?: string;
  /** Express Reference Number. */
  customerReferenceNumber?: string;
  /** The gateway transaction ID relates to Express Transaction ID. */
  gatewayTransactionId?: string;
  /** Express ticket Number. */
  customerTicketNumber?: string;
  /**
   * The authorization code for this Transaction. This field is stored as a text string and must be
   * between 0 and 20 characters long.
   */
  authCode?: string;
  /**
   * The date on which the Transaction was authorized. The date is specified as an eight digit
   * string in YYYYMMDD format, for example, '20160120' for January 20, 2016. The value of this
   * field must represent a date in the past.
   */
  authDate?: number;
  /**
   * The amount of the total sum of this Transaction that is given as cash back. This field is
   * specified as an integer in cents.
   */
  cashback?: number;
  /**
   * The client IP address from which the Transaction was created. Valid values are any Ipv4 or Ipv6
   * address.
   */
  clientIp?: string;
  /**
   * The name of the company associated with this Transaction. nSetting this field is especially
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
  /** The discount applied to the transaction. */
  discount?: number;
  /** The duty fee applicable to this transaction. */
  duty?: number;
  /** The email associated with this Transaction. */
  email?: string;
  swiped: TerminalTxnsSwiped1;
  entryMode?: EntryMode1;
  /**
   * Optional calculated fee amount indicator. This should be used in conjunction with txnFee
   * setting on Fees resource. This field is specified in cents(up to three decimal points).
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
   * Indicates whether the Transaction is reserved and the action that will be taken as a result.
   *
   * <details> <summary>Valid Values</summary>
   *
   * - `0` - **No reserve.**
   *
   * </details>
   *
   * @default 0
   */
  reserved?: 0;
  /** The shipping fee pertaining to this transaction. */
  shipping?: number;
  signature: TerminalTxnsSignature1;
  /**
   * The amount of the total sum of this Transaction that is made up of tax. This field is specified
   * as an integer in cents.
   */
  tax?: number;
  /**
   * The identifier of the terminal that processed this Transaction. The identifier is taken from
   * the terminal system and varies in format according to the type of terminal. This field is
   * stored as a text string and must be between 0 and 50 characters long.
   */
  terminal?: string;
  terminalCapability?: TerminalTxnsTerminalCapability1;
  /** The total amount of this Transaction. This field is specified as an integer in cents. */
  total: number;
  unattended?: TerminalTxnsUnattended1;
  status: TerminalTxnStatus1;
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
  inactive: Inactive1;
  frozen: Frozen1;
  terminalTxnData?: TerminalTxnsDatasPostRequest;
  notes?: NotesPostRequest[];
  terminalTxnMetadatas?: TerminalTxnsMetadatasPostRequest[];
  terminalTxnRefs?: TerminalTxnRefPostRequest[];
  terminalTxnResults?: TerminalTxnResultsPostRequest[];
};

export const terminalTxnsPostRequestSchema: Schema<TerminalTxnsPostRequest> =
  s.object<TerminalTxnsPostRequest>({
    binType: terminalTxnsBinType1Schema,
    expiration: s.optional(s.string()),
    forterminalTxn: s.optional(s.string()),
    origin: terminalTxnOrigin1Schema,
    platform: s.optional(s.lazy(() => platformModel1Schema)),
    pos: terminalTxnsPos1Schema,
    receipt: s.optional(s.lazy(() => terminalTxnsReceipt1Schema)),
    tid: s.optional(s.string()),
    traceNumber: s.optional(s.number()),
    txn: s.optional(s.string()),
    token: s.optional(s.lazy(() => tokenPostRequestSchema)),
    paymentNumber: s.optional(s.number()),
    paymentMethod: s.optional(s.lazy(() => terminalTxnPaymentMethod1Schema)),
    type: terminalTxnType1Schema,
    tip: s.optional(s.number()),
    originatingApp: s.optional(s.string()),
    oemtTxnRefNumber: s.optional(s.string()),
    posApplicationId: s.optional(s.string()),
    posApplicationName: s.optional(s.string()),
    posApplicationVersion: s.optional(s.string()),
    customerReferenceNumber: s.optional(s.string()),
    gatewayTransactionId: s.optional(s.string()),
    customerTicketNumber: s.optional(s.string()),
    authCode: s.optional(s.string()),
    authDate: s.optional(s.number()),
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
    reserved: s.defaulted(s.literal(0), 0),
    shipping: s.optional(s.number()),
    signature: terminalTxnsSignature1Schema,
    tax: s.optional(s.number()),
    terminal: s.optional(s.string()),
    terminalCapability: s.optional(s.lazy(() => terminalTxnsTerminalCapability1Schema)),
    total: s.number(),
    unattended: s.optional(s.lazy(() => terminalTxnsUnattended1Schema)),
    status: terminalTxnStatus1Schema,
    address1: s.optional(s.string()),
    address2: s.optional(s.string()),
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    zip: s.optional(s.string()),
    country: s.optional(s.lazy(() => country143Schema)),
    phone: s.optional(s.string()),
    inactive: inactive1Schema,
    frozen: frozen1Schema,
    terminalTxnData: s.optional(s.lazy(() => terminalTxnsDatasPostRequestSchema)),
    notes: s.optional(s.array(s.lazy(() => notesPostRequestSchema))),
    terminalTxnMetadatas: s.optional(s.array(s.lazy(() => terminalTxnsMetadatasPostRequestSchema))),
    terminalTxnRefs: s.optional(s.array(s.lazy(() => terminalTxnRefPostRequestSchema))),
    terminalTxnResults: s.optional(s.array(s.lazy(() => terminalTxnResultsPostRequestSchema))),
    _keysMap: {
      oemtTxnRefNumber: "OEMTTxnRefNumber",
    },
  });
