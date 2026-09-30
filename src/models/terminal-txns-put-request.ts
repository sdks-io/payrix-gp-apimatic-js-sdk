import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entryMode1Schema, type EntryMode1 } from "./entry-mode1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { payment5Schema, type Payment5 } from "./payment5.js";
import {
  terminalTxnPaymentMethod1Schema,
  type TerminalTxnPaymentMethod1,
} from "./terminal-txn-payment-method1.js";
import { terminalTxnReserved1Schema, type TerminalTxnReserved1 } from "./terminal-txn-reserved1.js";
import { terminalTxnStatus1Schema, type TerminalTxnStatus1 } from "./terminal-txn-status1.js";
import { terminalTxnsBinType1Schema, type TerminalTxnsBinType1 } from "./terminal-txns-bin-type1.js";
import { terminalTxnsEmv1Schema, type TerminalTxnsEmv1 } from "./terminal-txns-emv1.js";
import {
  terminalTxnsHsaFsaCardIndicator1Schema,
  type TerminalTxnsHsaFsaCardIndicator1,
} from "./terminal-txns-hsa-fsa-card-indicator1.js";
import { terminalTxnsSignature1Schema, type TerminalTxnsSignature1 } from "./terminal-txns-signature1.js";
import { terminalTxnsSwiped1Schema, type TerminalTxnsSwiped1 } from "./terminal-txns-swiped1.js";
import { terminalTxnsUnattended1Schema, type TerminalTxnsUnattended1 } from "./terminal-txns-unattended1.js";

export type TerminalTxnsPutRequest = {
  binType?: TerminalTxnsBinType1;
  /**
   * The expiration date of this Transaction. This field is stored as a text string in 'MMYY'
   * format, where 'MM' is the number of a month and 'YY' is the last two digits of a year. For
   * example, '0623' for June 2023. The value must reflect a future date.
   */
  expiration?: string;
  payment?: Payment5;
  /** Sequencial number that uniquely identifies the terminalTxn. */
  traceNumber?: number;
  /** The related txn this terminalTxn belongs to. */
  txn?: string;
  /** The ID of the token record to associate with this terminal transaction request. */
  token?: string;
  /** The last four numbers of the credit card associated with this Transaction. */
  paymentNumber?: number;
  paymentMethod?: TerminalTxnPaymentMethod1;
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
  unattended?: TerminalTxnsUnattended1;
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
   * The client IP address from which the transaction was created, valid values are any IPv4 or IPv6
   * address.
   */
  clientIp?: string;
  /**
   * A description of this Transaction. This field is stored as a text string and must be between 0
   * and 1000 characters long.
   */
  description?: string;
  swiped?: TerminalTxnsSwiped1;
  emv?: TerminalTxnsEmv1;
  entryMode?: EntryMode1;
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
  /** The middle name associated with this Transaction. */
  middle?: string;
  /**
   * The identifier of the Order associated with this Transaction, This field is stored as a text
   * string and must be between 0 and 1000 characters long.
   */
  order?: string;
  reserved?: TerminalTxnReserved1;
  signature?: TerminalTxnsSignature1;
  /** The total amount of this Transaction, This field is specified as an integer in cents. */
  total?: number;
  status?: TerminalTxnStatus1;
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
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const terminalTxnsPutRequestSchema: Schema<TerminalTxnsPutRequest> = s.object<TerminalTxnsPutRequest>({
  binType: s.optional(s.lazy(() => terminalTxnsBinType1Schema)),
  expiration: s.optional(s.string()),
  payment: s.optional(s.lazy(() => payment5Schema)),
  traceNumber: s.optional(s.number()),
  txn: s.optional(s.string()),
  token: s.optional(s.string()),
  paymentNumber: s.optional(s.number()),
  paymentMethod: s.optional(s.lazy(() => terminalTxnPaymentMethod1Schema)),
  tip: s.optional(s.number()),
  originatingApp: s.optional(s.string()),
  oemtTxnRefNumber: s.optional(s.string()),
  posApplicationId: s.optional(s.string()),
  unattended: s.optional(s.lazy(() => terminalTxnsUnattended1Schema)),
  posApplicationName: s.optional(s.string()),
  posApplicationVersion: s.optional(s.string()),
  customerReferenceNumber: s.optional(s.string()),
  gatewayTransactionId: s.optional(s.string()),
  customerTicketNumber: s.optional(s.string()),
  clientIp: s.optional(s.string()),
  description: s.optional(s.string()),
  swiped: s.optional(s.lazy(() => terminalTxnsSwiped1Schema)),
  emv: s.optional(s.lazy(() => terminalTxnsEmv1Schema)),
  entryMode: s.optional(s.lazy(() => entryMode1Schema)),
  first: s.optional(s.string()),
  last: s.optional(s.string()),
  middle: s.optional(s.string()),
  order: s.optional(s.string()),
  reserved: s.optional(s.lazy(() => terminalTxnReserved1Schema)),
  signature: s.optional(s.lazy(() => terminalTxnsSignature1Schema)),
  total: s.optional(s.number()),
  status: s.optional(s.lazy(() => terminalTxnStatus1Schema)),
  cardNetworkTransactionId: s.optional(s.string()),
  omnitoken: s.optional(s.string()),
  convenienceFee: s.optional(s.number()),
  surcharge: s.optional(s.number()),
  softPosDeviceTypeIndicator: s.optional(s.string()),
  softPosId: s.optional(s.string()),
  hsaFsaCardIndicator: s.optional(s.lazy(() => terminalTxnsHsaFsaCardIndicator1Schema)),
  gatewayTerminalId: s.optional(s.string()),
  descriptor: s.optional(s.string()),
  cardNetworkBankNetReferenceNumber: s.optional(s.string()),
  cardNetworkBankNetSettlementDate: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  _keysMap: {
    oemtTxnRefNumber: "OEMTTxnRefNumber",
  },
});
