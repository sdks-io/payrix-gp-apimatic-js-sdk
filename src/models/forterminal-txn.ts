import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { country143Schema, type Country143 } from "./country143.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entryMode1Schema, type EntryMode1 } from "./entry-mode1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { merchant4Schema, type Merchant4 } from "./merchant4.js";
import { notesResponseSchema, type NotesResponse } from "./notes-response.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "./pending-entries-response.js";
import { platformModel1Schema, type PlatformModel1 } from "./platform-model1.js";
import { terminalTxnOrigin1Schema, type TerminalTxnOrigin1 } from "./terminal-txn-origin1.js";
import {
  terminalTxnPaymentMethod1Schema,
  type TerminalTxnPaymentMethod1,
} from "./terminal-txn-payment-method1.js";
import { terminalTxnRefsResponseSchema, type TerminalTxnRefsResponse } from "./terminal-txn-refs-response.js";
import { terminalTxnReserved1Schema, type TerminalTxnReserved1 } from "./terminal-txn-reserved1.js";
import {
  terminalTxnResultsResponseSchema,
  type TerminalTxnResultsResponse,
} from "./terminal-txn-results-response.js";
import { terminalTxnStatus1Schema, type TerminalTxnStatus1 } from "./terminal-txn-status1.js";
import { terminalTxnType1Schema, type TerminalTxnType1 } from "./terminal-txn-type1.js";
import { terminalTxnsBinType1Schema, type TerminalTxnsBinType1 } from "./terminal-txns-bin-type1.js";
import { terminalTxnsCvvStatus1Schema, type TerminalTxnsCvvStatus1 } from "./terminal-txns-cvv-status1.js";
import {
  terminalTxnsDatasResponseSchema,
  type TerminalTxnsDatasResponse,
} from "./terminal-txns-datas-response.js";
import { terminalTxnsEmv1Schema, type TerminalTxnsEmv1 } from "./terminal-txns-emv1.js";
import {
  terminalTxnsHsaFsaCardIndicator1Schema,
  type TerminalTxnsHsaFsaCardIndicator1,
} from "./terminal-txns-hsa-fsa-card-indicator1.js";
import {
  terminalTxnsMetadatasResponseSchema,
  type TerminalTxnsMetadatasResponse,
} from "./terminal-txns-metadatas-response.js";
import { terminalTxnsPin1Schema, type TerminalTxnsPin1 } from "./terminal-txns-pin1.js";
import { terminalTxnsPos1Schema, type TerminalTxnsPos1 } from "./terminal-txns-pos1.js";
import { terminalTxnsReceipt1Schema, type TerminalTxnsReceipt1 } from "./terminal-txns-receipt1.js";
import { terminalTxnsResponseSchema, type TerminalTxnsResponse } from "./terminal-txns-response.js";
import { terminalTxnsSignature1Schema, type TerminalTxnsSignature1 } from "./terminal-txns-signature1.js";
import { terminalTxnsSwiped1Schema, type TerminalTxnsSwiped1 } from "./terminal-txns-swiped1.js";
import {
  terminalTxnsTerminalCapability1Schema,
  type TerminalTxnsTerminalCapability1,
} from "./terminal-txns-terminal-capability1.js";
import { terminalTxnsUnattended1Schema, type TerminalTxnsUnattended1 } from "./terminal-txns-unattended1.js";
import { token1Schema, type Token1 } from "./token1.js";
import { txn1Schema, type Txn1 } from "./txn1.js";
import { verificationsResponseSchema, type VerificationsResponse } from "./verifications-response.js";

export type ForterminalTxn = {
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
  /** The incoming ip address from which this Transaction was created. */
  ipCreated?: string;
  /** The incoming ip address from which this Transaction was last modified. */
  ipModified?: string;
  merchant?: Merchant4;
  /**
   * The Merchant ID, as set by the processor, is stored as a text string and must be between 0 and
   * 50 characters long.
   */
  mid?: string;
  txn?: Txn1;
  token?: Token1;
  /** The last four numbers of the credit card associated with this Transaction. */
  paymentNumber?: number;
  paymentMethod?: TerminalTxnPaymentMethod1;
  forterminalTxn?: ForterminalTxn;
  type?: TerminalTxnType1;
  /**
   * The expiration date of this Transaction. This field is stored as a text string in 'MMYY'
   * format, where 'MM' is the number of a month and 'YY' is the last two digits of a year. For
   * example, '0623' for June 2023. The value must reflect a future date.
   */
  expiration?: string;
  currency?: Record<string, unknown>;
  fundingCurrency?: Record<string, unknown>;
  /**
   * Optional calculated fee amount indicator, which should be used in conjunction with txnFee
   * setting on Fees resource, This field is specified in cents(up to three decimal points).
   */
  fee?: number;
  platform?: PlatformModel1;
  /**
   * The date on which the Transaction was authorized, specified as an eight digit string in
   * YYYYMMDD format, for example, '20160120' for January 20, 2016, and the value of this field must
   * represent a date in the past.
   */
  authDate?: number;
  /**
   * The authorization code for this Transaction. This field is stored as a text string and must be
   * between 0 and 20 characters long.
   */
  authCode?: string;
  /**
   * The identifier of the Order associated with this Transaction, This field is stored as a text
   * string and must be between 0 and 1000 characters long.
   */
  order?: string;
  /**
   * A description of this Transaction. This field is stored as a text string and must be between 0
   * and 1000 characters long.
   */
  description?: string;
  /** Sequencial number that uniquely identifies the terminalTxn. */
  traceNumber?: number;
  /** The discount applied to the transaction. */
  discount?: number;
  /** The shipping fee pertaining to this transaction. */
  shipping?: number;
  /** The duty fee applicable to this transaction. */
  duty?: number;
  /**
   * The identifier of the terminal that processed this Transaction, which is taken from the
   * terminal system and varies in format according to the type of terminal, is stored as a text
   * string and must be between 0 and 50 characters long.
   */
  terminal?: string;
  /**
   * The Terminal ID as set by the platform activating the terminal, stored as a text string and
   * must be between 0 and 50 characters long.
   */
  tid?: string;
  terminalCapability?: TerminalTxnsTerminalCapability1;
  entryMode?: EntryMode1;
  origin?: TerminalTxnOrigin1;
  /**
   * The amount of the total sum of this Transaction that is made up of tax, This field is specified
   * as an integer in cents.
   */
  tax?: number;
  /** The total amount of this Transaction, This field is specified as an integer in cents. */
  total?: number;
  /**
   * This field indicates the tip amount associated with a transaction. This value is for reporting
   * purposes only, because transaction amount includes this amount in the total.
   */
  tip?: number;
  /**
   * The amount of the total sum of this Transaction that is given as cash back, specified as an
   * integer in cents.
   */
  cashback?: number;
  /** The authorization code for this Transaction, as returned by the network. */
  authorization?: string;
  /**
   * The total amount that was approved for this Transaction by the processor, which is specified as
   * an integer in cents.
   */
  approved?: number;
  /** Whether correct cvv was sent during this Transaction. */
  cvv?: number;
  cvvStatus?: TerminalTxnsCvvStatus1;
  swiped?: TerminalTxnsSwiped1;
  emv?: TerminalTxnsEmv1;
  signature?: TerminalTxnsSignature1;
  pin?: TerminalTxnsPin1;
  unattended?: TerminalTxnsUnattended1;
  pos?: TerminalTxnsPos1;
  binType?: TerminalTxnsBinType1;
  receipt?: TerminalTxnsReceipt1;
  /**
   * The client IP address from which the transaction was created, valid values are any IPv4 or IPv6
   * address.
   */
  clientIp?: string;
  /**
   * The first name associated with this Transaction. For eCheck transactions, either first or last
   * is required.
   */
  first?: string;
  /** The middle name associated with this Transaction. */
  middle?: string;
  /**
   * The last name associated with this Transaction. For eCheck transactions, either first or last
   * is required.
   */
  last?: string;
  /**
   * The name of the company associated with this Transaction, setting this field is especially
   * important when processing an eCheck from a company.
   */
  company?: string;
  /** The email associated with this Transaction. */
  email?: string;
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
   * The city in the address associated with this Transaction, which is stored as a text string and
   * must be between 1 and 500 characters long.
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
   * The ZIP code in the address associated with this Transaction, This field is stored as a text
   * string and must be between 1 and 20 characters long.
   */
  zip?: string;
  country?: Country143;
  /**
   * The phone number associated with this transaction, stored as a text string and must be between
   * 10 and 15 characters long.
   */
  phone?: string;
  status?: TerminalTxnStatus1;
  reserved?: TerminalTxnReserved1;
  /** The last transaction stage check for risk. */
  checkStage?: string;
  /** Field identifying Payrix PAX terminal originating app. */
  originatingApp?: string;
  /**
   * Field identifying original Payrix Verifone transaction reference number, used for refunds and
   * cancellation request.
   */
  oemtTxnRefNumber?: string;
  inactive?: Inactive1;
  frozen?: Inactive1;
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
  /** Card network transaction ID associated with this transaction. */
  cardNetworkTransactionId?: string;
  /** The OmniToken associated with this Transaction. */
  omnitoken?: string;
  /**
   * The amount of the total sum of this Transaction that is made up of convenience fee. Fee charged
   * when card payment is an alternative form of payment not ordinarily accepted by a merchant or
   * service provider. This field is specified as an integer in cents. [currently not active]
   */
  convenienceFee?: number;
  /**
   * Surcharge amount included in the total amount of the transaction. A surcharge fee is an
   * additional charge added to the price of a purchase when a customer pays with a credit card.
   * This field is specified as an integer in cents.
   */
  surcharge?: number;
  /**
   * The device type indicator for the terminal.
   *
   * <details> <summary>Valid Values</summary>
   *
   *   - `1` - **Apple (Worldpay as PSP)**
   *   - `2` - **Android (Worldpay as PSP)**
   *   - `3` - **Apple (Worldpay not PSP)**
   *   - `4` - **Android (Worldpay not PSP)**
   *
   * </details>
   */
  softPosDeviceTypeIndicator?: string;
  /**
   * The terminal classification code.
   *
   * <details> <summary>Valid Values</summary>
   *
   *   - `AC` - **ATap with Accessory/dongle.**
   *   - `AS` - **Tap with PIN on Glass option on Accessory/dongle.**
   *   - `CC` - **Tap on Mobile device.**
   *   - `CS` - **Tap with PIN on Glass option on Mobile device.**
   *
   * </details>
   */
  terminalClassificationCode?: string;
  /** The software POS ID. */
  softPosId?: string;
  hsaFsaCardIndicator?: TerminalTxnsHsaFsaCardIndicator1;
  /** The gateway terminal ID. */
  gatewayTerminalId?: string;
  /** The billing Descriptor that is used when the transaction is part of a subscription. */
  descriptor?: string;
  /** The reference number associated with the card network. */
  cardNetworkBankNetReferenceNumber?: string;
  /** The settlement date associated with the card network. */
  cardNetworkBankNetSettlementDate?: string;
  forterminalTxns?: TerminalTxnsResponse[];
  holds?: TerminalTxnsResponse[];
  notes?: NotesResponse[];
  pendingEntries?: PendingEntriesResponse[];
  terminalTxnData?: TerminalTxnsDatasResponse;
  terminalTxnMetadatas?: TerminalTxnsMetadatasResponse[];
  terminalTxnRefs?: TerminalTxnRefsResponse[];
  terminalTxnResults?: TerminalTxnResultsResponse[];
  verifications?: VerificationsResponse[];
};

export const forterminalTxnSchema: Schema<ForterminalTxn> = s.object<ForterminalTxn>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  ipCreated: s.optional(s.string()),
  ipModified: s.optional(s.string()),
  merchant: s.optional(s.lazy(() => merchant4Schema)),
  mid: s.optional(s.string()),
  txn: s.optional(s.lazy(() => txn1Schema)),
  token: s.optional(s.lazy(() => token1Schema)),
  paymentNumber: s.optional(s.number()),
  paymentMethod: s.optional(s.lazy(() => terminalTxnPaymentMethod1Schema)),
  forterminalTxn: s.optional(s.lazy(() => forterminalTxnSchema)),
  type: s.optional(s.lazy(() => terminalTxnType1Schema)),
  expiration: s.optional(s.string()),
  currency: s.optional(s.record(s.string(), s.unknown())),
  fundingCurrency: s.optional(s.record(s.string(), s.unknown())),
  fee: s.optional(s.number()),
  platform: s.optional(s.lazy(() => platformModel1Schema)),
  authDate: s.optional(s.number()),
  authCode: s.optional(s.string()),
  order: s.optional(s.string()),
  description: s.optional(s.string()),
  traceNumber: s.optional(s.number()),
  discount: s.optional(s.number()),
  shipping: s.optional(s.number()),
  duty: s.optional(s.number()),
  terminal: s.optional(s.string()),
  tid: s.optional(s.string()),
  terminalCapability: s.optional(s.lazy(() => terminalTxnsTerminalCapability1Schema)),
  entryMode: s.optional(s.lazy(() => entryMode1Schema)),
  origin: s.optional(s.lazy(() => terminalTxnOrigin1Schema)),
  tax: s.optional(s.number()),
  total: s.optional(s.number()),
  tip: s.optional(s.number()),
  cashback: s.optional(s.number()),
  authorization: s.optional(s.string()),
  approved: s.optional(s.number()),
  cvv: s.optional(s.number()),
  cvvStatus: s.optional(s.lazy(() => terminalTxnsCvvStatus1Schema)),
  swiped: s.optional(s.lazy(() => terminalTxnsSwiped1Schema)),
  emv: s.optional(s.lazy(() => terminalTxnsEmv1Schema)),
  signature: s.optional(s.lazy(() => terminalTxnsSignature1Schema)),
  pin: s.optional(s.lazy(() => terminalTxnsPin1Schema)),
  unattended: s.optional(s.lazy(() => terminalTxnsUnattended1Schema)),
  pos: s.optional(s.lazy(() => terminalTxnsPos1Schema)),
  binType: s.optional(s.lazy(() => terminalTxnsBinType1Schema)),
  receipt: s.optional(s.lazy(() => terminalTxnsReceipt1Schema)),
  clientIp: s.optional(s.string()),
  first: s.optional(s.string()),
  middle: s.optional(s.string()),
  last: s.optional(s.string()),
  company: s.optional(s.string()),
  email: s.optional(s.string()),
  address1: s.optional(s.string()),
  address2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  zip: s.optional(s.string()),
  country: s.optional(s.lazy(() => country143Schema)),
  phone: s.optional(s.string()),
  status: s.optional(s.lazy(() => terminalTxnStatus1Schema)),
  reserved: s.optional(s.lazy(() => terminalTxnReserved1Schema)),
  checkStage: s.optional(s.string()),
  originatingApp: s.optional(s.string()),
  oemtTxnRefNumber: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => inactive1Schema)),
  posApplicationId: s.optional(s.string()),
  posApplicationName: s.optional(s.string()),
  posApplicationVersion: s.optional(s.string()),
  customerReferenceNumber: s.optional(s.string()),
  gatewayTransactionId: s.optional(s.string()),
  customerTicketNumber: s.optional(s.string()),
  cardNetworkTransactionId: s.optional(s.string()),
  omnitoken: s.optional(s.string()),
  convenienceFee: s.optional(s.number()),
  surcharge: s.optional(s.number()),
  softPosDeviceTypeIndicator: s.optional(s.string()),
  terminalClassificationCode: s.optional(s.string()),
  softPosId: s.optional(s.string()),
  hsaFsaCardIndicator: s.optional(s.lazy(() => terminalTxnsHsaFsaCardIndicator1Schema)),
  gatewayTerminalId: s.optional(s.string()),
  descriptor: s.optional(s.string()),
  cardNetworkBankNetReferenceNumber: s.optional(s.string()),
  cardNetworkBankNetSettlementDate: s.optional(s.string()),
  forterminalTxns: s.optional(s.array(s.lazy(() => terminalTxnsResponseSchema))),
  holds: s.optional(s.array(s.lazy(() => terminalTxnsResponseSchema))),
  notes: s.optional(s.array(s.lazy(() => notesResponseSchema))),
  pendingEntries: s.optional(s.array(s.lazy(() => pendingEntriesResponseSchema))),
  terminalTxnData: s.optional(s.lazy(() => terminalTxnsDatasResponseSchema)),
  terminalTxnMetadatas: s.optional(s.array(s.lazy(() => terminalTxnsMetadatasResponseSchema))),
  terminalTxnRefs: s.optional(s.array(s.lazy(() => terminalTxnRefsResponseSchema))),
  terminalTxnResults: s.optional(s.array(s.lazy(() => terminalTxnResultsResponseSchema))),
  verifications: s.optional(s.array(s.lazy(() => verificationsResponseSchema))),
  _keysMap: {
    oemtTxnRefNumber: "OEMTTxnRefNumber",
  },
});
