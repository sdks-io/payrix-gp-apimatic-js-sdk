import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "./accounts-response.js";
import { assessmentsResponseSchema, type AssessmentsResponse } from "./assessments-response.js";
import { batchSchema, type Batch } from "./batch.js";
import { chargebacksResponseSchema, type ChargebacksResponse } from "./chargebacks-response.js";
import { countrySchema, type Country } from "./country.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { currencyConversion1Schema, type CurrencyConversion1 } from "./currency-conversion1.js";
import { entityReturnsResponseSchema, type EntityReturnsResponse } from "./entity-returns-response.js";
import { entriesResponseSchema, type EntriesResponse } from "./entries-response.js";
import { entryMode1Schema, type EntryMode1 } from "./entry-mode1.js";
import { fortxnSchema, type Fortxn } from "./fortxn.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { merchant5Schema, type Merchant5 } from "./merchant5.js";
import { networkTokenIndicator1Schema, type NetworkTokenIndicator1 } from "./network-token-indicator1.js";
import { paymentSchema, type Payment } from "./payment.js";
import { statementSchema, type Statement } from "./statement.js";
import { subscription1Schema, type Subscription1 } from "./subscription1.js";
import { terminalTxnsCvvStatus1Schema, type TerminalTxnsCvvStatus1 } from "./terminal-txns-cvv-status1.js";
import { terminalTxnsEmv1Schema, type TerminalTxnsEmv1 } from "./terminal-txns-emv1.js";
import { terminalTxnsPin1Schema, type TerminalTxnsPin1 } from "./terminal-txns-pin1.js";
import { terminalTxnsSignature1Schema, type TerminalTxnsSignature1 } from "./terminal-txns-signature1.js";
import { terminalTxnsSwiped1Schema, type TerminalTxnsSwiped1 } from "./terminal-txns-swiped1.js";
import {
  terminalTxnsTerminalCapability1Schema,
  type TerminalTxnsTerminalCapability1,
} from "./terminal-txns-terminal-capability1.js";
import { terminalTxnsUnattended1Schema, type TerminalTxnsUnattended1 } from "./terminal-txns-unattended1.js";
import { txnCheckStage1Schema, type TxnCheckStage1 } from "./txn-check-stage1.js";
import { txnOrigin1Schema, type TxnOrigin1 } from "./txn-origin1.js";
import { txnRefsResponseSchema, type TxnRefsResponse } from "./txn-refs-response.js";
import { txnStatus1Schema, type TxnStatus1 } from "./txn-status1.js";
import { txnType1Schema, type TxnType1 } from "./txn-type1.js";
import { txnsAllowPartial1Schema, type TxnsAllowPartial1 } from "./txns-allow-partial1.js";
import { txnsCofType1Schema, type TxnsCofType1 } from "./txns-cof-type1.js";
import { txnsCopyReasons1Schema, type TxnsCopyReasons1 } from "./txns-copy-reasons1.js";
import { txnsDebtRepayment1Schema, type TxnsDebtRepayment1 } from "./txns-debt-repayment1.js";
import { txnsFundingEnabled1Schema, type TxnsFundingEnabled1 } from "./txns-funding-enabled1.js";
import { txnsImported1Schema, type TxnsImported1 } from "./txns-imported1.js";
import { txnsMisused1Schema, type TxnsMisused1 } from "./txns-misused1.js";
import { txnsMobile1Schema, type TxnsMobile1 } from "./txns-mobile1.js";
import { txnsPinEntryCapability1Schema, type TxnsPinEntryCapability1 } from "./txns-pin-entry-capability1.js";
import { txnsPlatform1Schema, type TxnsPlatform1 } from "./txns-platform1.js";
import { txnsReserved1Schema, type TxnsReserved1 } from "./txns-reserved1.js";
import { txnsSetteledCurrency1Schema, type TxnsSetteledCurrency1 } from "./txns-setteled-currency1.js";
import { unauthReason1Schema, type UnauthReason1 } from "./unauth-reason1.js";

export type Fromtxn = {
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
  merchant?: Merchant5;
  token?: AccountsResponse;
  payment?: Payment;
  fortxn?: Fortxn;
  fromtxn?: Fromtxn;
  batch?: Batch;
  subscription?: Subscription1;
  statement?: Statement;
  type?: TxnType1;
  /**
   * The expiration date of this Transaction. This field is stored as a text string in 'MMYY'
   * format, where 'MM' is the number of a month and 'YY' is the last two digits of a year. For
   * example, '0623' for June 2023. The value must reflect a future date.
   */
  expiration?: string;
  /** The service code retrieved from the track data for a credit card swiped transaction. */
  serviceCode?: string;
  /** A date indicating when this Transaction was funded. This field is set automatically. */
  funded?: number;
  /** The transaction has been returned by the receiver. */
  returned?: string;
  currency?: Record<string, unknown>;
  fundingCurrency?: Record<string, unknown>;
  currencyConversion?: CurrencyConversion1;
  /**
   * The amount of the total sum of this Transaction that is made up of convenience fee. Fee charged
   * when card payment is an alternative form of payment not ordinarily accepted by a merchant or
   * service provider. This field is specified as an integer in cents. [currently not active]
   */
  convenienceFee?: number;
  /**
   * Optional calculated fee amount indicator. This should be used in conjunction with txnFee
   * setting on Fees resource. This field is specified in cents(up to three decimal points)
   */
  fee?: number;
  platform?: TxnsPlatform1;
  /**
   * The date on which the Transaction was authorized. The date is specified as an eight digit
   * string in YYYYMMDD format, for example, '20160120' for January 20, 2016. The value of this
   * field must represent a date in the past.
   */
  authDate?: number;
  /**
   * The authorization code for this Transaction. This field is stored as a text string and must be
   * between 0 and 20 characters long.
   */
  authCode?: string;
  /**
   * A timestamp indicating when this Transaction was captured. This field is set automatically. The
   * format should be YYYY-MM-DD HH:MM:SS.
   */
  captured?: string;
  /**
   * A date indicating when this Transaction was settled. This field is set automatically. The
   * format should be YYYY-MM-DD HH:MM:SS.
   */
  settled?: string;
  settledCurrency?: TxnsSetteledCurrency1;
  /**
   * The total amount that was settled. This field is specified as an integer in cents and is set
   * automatically.
   */
  settledTotal?: number;
  allowPartial?: TxnsAllowPartial1;
  /**
   * The identifier of the Order associated with this Transaction. This field is stored as a text
   * string and must be between 0 and 1000 characters long.
   */
  order?: string;
  /**
   * A description of this Transaction. This field is stored as a text string and must be between 0
   * and 1000 characters long.
   */
  description?: string;
  /**
   * The descriptor used in this Transaction. This field is stored as a text string and must be
   * between 1 and 50 characters long. If a value is not set, an attempt is made to set a default
   * value from the merchant information.
   */
  descriptor?: string;
  /** Sequencial number that uniquely identifies the txn. */
  traceNumber?: number;
  /** The discount applied to the transaction. */
  discount?: number;
  /** The shipping fee pertaining to this transaction. */
  shipping?: number;
  /** The duty fee applicable to this transaction. */
  duty?: number;
  /**
   * The identifier of the terminal that processed this Transaction. The identifier is taken from
   * the terminal system and varies in format according to the type of terminal. This field is
   * stored as a text string and must be between 0 and 50 characters long.
   */
  terminal?: string;
  terminalCapability?: TerminalTxnsTerminalCapability1;
  entryMode?: EntryMode1;
  origin?: TxnOrigin1;
  mobile?: TxnsMobile1;
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
  /** The total amount of this Transaction. This field is specified as an integer in cents. */
  total?: number;
  /**
   * The amount of the total sum of this Transaction that is given as cash back. This field is
   * specified as an integer in cents.
   */
  cashback?: number;
  /** The authorization code for this Transaction, as returned by the network. */
  authorization?: string;
  /** The amount, in 'cents', of funds originally authorized for the transaction. */
  originalApproved?: number;
  /**
   * The total amount that was approved for this Transaction by the processor. This field is
   * specified as an integer in cents.
   */
  approved?: number;
  /** Authentication token returned by the network in a 3DSecure txn. */
  authentication?: string;
  /** Optional transaction ID returned by the network in a 3DSecure txn. */
  authenticationId?: string;
  /** Whether correct cvv was sent during this Transaction. */
  cvv?: number;
  cvvStatus?: TerminalTxnsCvvStatus1;
  swiped?: TerminalTxnsSwiped1;
  emv?: TerminalTxnsEmv1;
  signature?: TerminalTxnsSignature1;
  pin?: TerminalTxnsPin1;
  pinEntryCapability?: TxnsPinEntryCapability1;
  unattended?: TerminalTxnsUnattended1;
  cofType?: TxnsCofType1;
  copyReason?: TxnsCopyReasons1;
  /**
   * The client ip address from which the Transaction was created. Valid values are any Ipv4 or Ipv6
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
   * The name of the company associated with this Transaction. Setting this field is especially
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
  country?: Country;
  /**
   * The phone number associated with this Transaction. This field is stored as a text string and
   * must be between 10 and 15 characters long.
   */
  phone?: string;
  /**
   * The Merchant ID as set by the processor. This field is stored as a text string and must be
   * between 0 and 50 characters long.
   */
  mid?: string;
  status?: TxnStatus1;
  /** The amount of this Transaction that has been refunded. */
  refunded?: number;
  reserved?: TxnsReserved1;
  misused?: TxnsMisused1;
  checkStage?: TxnCheckStage1;
  unauthReason?: UnauthReason1;
  /** The customer identifier from the AuthToken used during authentication. */
  authTokenCustomer?: string;
  /** This field is stored as a text string and must be between 0 and 1000 characters long. */
  channel?: string;
  imported?: TxnsImported1;
  /**
   * For entry creation and deletion job sequencing: the current request sequence number for this
   * transaction.
   */
  requestSequence?: number;
  /**
   * For entry creation and deletion job sequencing: the current processed sequence number for this
   * transaction.
   */
  processedSequence?: number;
  debtRepayment?: TxnsDebtRepayment1;
  fundingEnabled?: TxnsFundingEnabled1;
  /** FBO in which each entry origin belongs to. */
  fbo?: string;
  /**
   * If the Transaction is linked to a transaction session, this field specifies the identifier of
   * the txnSessions resource. For more information on the transaction session see <a
   * href="/api/payrix/txn-sessions/postTxnSessions" target="_blank" rel="noopener
   * noreferrer">txnSessions</a> API.
   */
  txnsession?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
  /**
   * Indicates the tip amount associated with a transaction. This value is for reporting purposes
   * only, because transaction amount includes this amount in the total.
   */
  tip?: number;
  /** The software POS ID. */
  softPosId?: string;
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
  networkTokenIndicator?: NetworkTokenIndicator1;
  txnRefs?: TxnRefsResponse;
  pinlessDebitConversion?: Record<string, unknown>;
  submittedMethod?: Record<string, unknown>;
  processedMethod?: Record<string, unknown>;
  assessments?: AssessmentsResponse[];
  assessmentsEventId?: AssessmentsResponse[];
  chargebacks?: ChargebacksResponse[];
  entityReturns?: EntityReturnsResponse[];
  entries?: EntriesResponse[];
  entriesEventId?: EntriesResponse[];
};

export const fromtxnSchema: Schema<Fromtxn> = s.object<Fromtxn>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  ipCreated: s.optional(s.string()),
  ipModified: s.optional(s.string()),
  merchant: s.optional(s.lazy(() => merchant5Schema)),
  token: s.optional(s.lazy(() => accountsResponseSchema)),
  payment: s.optional(s.lazy(() => paymentSchema)),
  fortxn: s.optional(s.lazy(() => fortxnSchema)),
  fromtxn: s.optional(s.lazy(() => fromtxnSchema)),
  batch: s.optional(s.lazy(() => batchSchema)),
  subscription: s.optional(s.lazy(() => subscription1Schema)),
  statement: s.optional(s.lazy(() => statementSchema)),
  type: s.optional(s.lazy(() => txnType1Schema)),
  expiration: s.optional(s.string()),
  serviceCode: s.optional(s.string()),
  funded: s.optional(s.number()),
  returned: s.optional(s.string()),
  currency: s.optional(s.record(s.string(), s.unknown())),
  fundingCurrency: s.optional(s.record(s.string(), s.unknown())),
  currencyConversion: s.optional(s.lazy(() => currencyConversion1Schema)),
  convenienceFee: s.optional(s.number()),
  fee: s.optional(s.number()),
  platform: s.optional(s.lazy(() => txnsPlatform1Schema)),
  authDate: s.optional(s.number()),
  authCode: s.optional(s.string()),
  captured: s.optional(s.string()),
  settled: s.optional(s.string()),
  settledCurrency: s.optional(s.lazy(() => txnsSetteledCurrency1Schema)),
  settledTotal: s.optional(s.number()),
  allowPartial: s.optional(s.lazy(() => txnsAllowPartial1Schema)),
  order: s.optional(s.string()),
  description: s.optional(s.string()),
  descriptor: s.optional(s.string()),
  traceNumber: s.optional(s.number()),
  discount: s.optional(s.number()),
  shipping: s.optional(s.number()),
  duty: s.optional(s.number()),
  terminal: s.optional(s.string()),
  terminalCapability: s.optional(s.lazy(() => terminalTxnsTerminalCapability1Schema)),
  entryMode: s.optional(s.lazy(() => entryMode1Schema)),
  origin: s.optional(s.lazy(() => txnOrigin1Schema)),
  mobile: s.optional(s.lazy(() => txnsMobile1Schema)),
  tax: s.optional(s.number()),
  surcharge: s.optional(s.number()),
  total: s.optional(s.number()),
  cashback: s.optional(s.number()),
  authorization: s.optional(s.string()),
  originalApproved: s.optional(s.number()),
  approved: s.optional(s.number()),
  authentication: s.optional(s.string()),
  authenticationId: s.optional(s.string()),
  cvv: s.optional(s.number()),
  cvvStatus: s.optional(s.lazy(() => terminalTxnsCvvStatus1Schema)),
  swiped: s.optional(s.lazy(() => terminalTxnsSwiped1Schema)),
  emv: s.optional(s.lazy(() => terminalTxnsEmv1Schema)),
  signature: s.optional(s.lazy(() => terminalTxnsSignature1Schema)),
  pin: s.optional(s.lazy(() => terminalTxnsPin1Schema)),
  pinEntryCapability: s.optional(s.lazy(() => txnsPinEntryCapability1Schema)),
  unattended: s.optional(s.lazy(() => terminalTxnsUnattended1Schema)),
  cofType: s.optional(s.lazy(() => txnsCofType1Schema)),
  copyReason: s.optional(s.lazy(() => txnsCopyReasons1Schema)),
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
  country: s.optional(s.lazy(() => countrySchema)),
  phone: s.optional(s.string()),
  mid: s.optional(s.string()),
  status: s.optional(s.lazy(() => txnStatus1Schema)),
  refunded: s.optional(s.number()),
  reserved: s.optional(s.lazy(() => txnsReserved1Schema)),
  misused: s.optional(s.lazy(() => txnsMisused1Schema)),
  checkStage: s.optional(s.lazy(() => txnCheckStage1Schema)),
  unauthReason: s.optional(s.lazy(() => unauthReason1Schema)),
  authTokenCustomer: s.optional(s.string()),
  channel: s.optional(s.string()),
  imported: s.optional(s.lazy(() => txnsImported1Schema)),
  requestSequence: s.optional(s.number()),
  processedSequence: s.optional(s.number()),
  debtRepayment: s.optional(s.lazy(() => txnsDebtRepayment1Schema)),
  fundingEnabled: s.optional(s.lazy(() => txnsFundingEnabled1Schema)),
  fbo: s.optional(s.string()),
  txnsession: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  tip: s.optional(s.number()),
  softPosId: s.optional(s.string()),
  softPosDeviceTypeIndicator: s.optional(s.string()),
  networkTokenIndicator: s.optional(s.lazy(() => networkTokenIndicator1Schema)),
  txnRefs: s.optional(s.lazy(() => txnRefsResponseSchema)),
  pinlessDebitConversion: s.optional(s.record(s.string(), s.unknown())),
  submittedMethod: s.optional(s.record(s.string(), s.unknown())),
  processedMethod: s.optional(s.record(s.string(), s.unknown())),
  assessments: s.optional(s.array(s.lazy(() => assessmentsResponseSchema))),
  assessmentsEventId: s.optional(s.array(s.lazy(() => assessmentsResponseSchema))),
  chargebacks: s.optional(s.array(s.lazy(() => chargebacksResponseSchema))),
  entityReturns: s.optional(s.array(s.lazy(() => entityReturnsResponseSchema))),
  entries: s.optional(s.array(s.lazy(() => entriesResponseSchema))),
  entriesEventId: s.optional(s.array(s.lazy(() => entriesResponseSchema))),
});
