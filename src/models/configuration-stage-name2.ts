import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The name of this configurationStage resource.
 *
 * <details> <summary>Valid Values</summary>
 *
 *  - `blank` - **Blank. Used for a stage with no name.**
 *
 *  - `acceptedCards` - **Set card types accepted by the merchant.**
 *
 *  - `ack` - **''**
 *
 *  - `activateSrs` - **First Data merchant SRS activation.**
 *
 *  - `alert` - **''**
 *
 *  - `acceptedCards` - **'This holds the parameter to pull the accepted cards for a merchant, this
 *    is specific to VCORE'**
 *
 *  - `amexUpdate` - **Update merchant card enablement for American Express.**
 *
 *  - `applepay` - **''**
 *
 *  - `balance` - **Bank account balance request for decisions and verifications processes.**
 *
 *  - `batch` - **Send batch command to terminal.**
 *
 *  - `chargeback` - **Chargeback. The standard name used for chargeback related stages.**
 *
 *  - `chargebackList` - **ChargebackList. The specific name to get chargeback reports.**
 *
 *  - `confirmDisbursement` - **Disbursement confirmation report retrieval.**
 *
 *  - `contactUpdate` - **Update merchant contacts.**
 *
 *  - `createMerchant` - **Send merchant details for merchant boarding.**
 *
 *  - `credit` - **''**
 *
 *  - `decrypt` - **Set card types accepted by the merchant.**
 *
 *  - `debit` - **Set card types accepted by the merchant.**
 *
 *  - `debitPinEnable` - **Set merchant Pin Debit enablement.**
 *
 *  - `debitPinlessEnable` - **Set merchant Pinless Debit enablement.**
 *
 *  - `discoverUrl` - **Retrieve merchant transaction processing url.**
 *
 *  - `discoverUpdate` - **Update merchant card enablement for Discover.**
 *
 *  - `document` - **Document. The standard name for chargeback related documentation such as
 *    uploading a document or updating a document.**
 *
 *  - `documentList` - **DocumentList. Used for receiving documents related to a chargeback.**
 *
 *  - `interchange` - **''**
 *
 *  - `encrypt` - **''**
 *
 *  - `entity` - **Entity. The standard name used when it comes to entity related stages such as
 *    retrieving an entity or updating.**
 *
 *  - `entityAddressUpdate` - **Update merchant legal entity address.**
 *
 *  - `entityRetrieval` - **EntityRetrieval. Used when entity stage name is already being used in
 *    that crud configuration.**
 *
 *  - `entityUpdate` - **EntityUpdate. Used when entity stage name is already being used in that
 *    crud configuration.**
 *
 *  - `expressSubAccountUpdate` - **'This holds the parameter for updating express subaccount'**
 *
 *  - `return` - **Return. Used for return stage name.**
 *
 *  - `feeList` - **FeeList. The specific name to get fees reports.**
 *
 *  - `googlepay` - **''**
 *
 *  - `memberCreate` - **MemberCreate. Stage name used to indicate creating a merchant member.**
 *
 *  - `memberDelete` - **MemberDelete. Stage name used to indicate deleting a merchant member.**
 *
 *  - `members` - **Members. Stage name used for creating several members for the merchant.**
 *
 *  - `memberUpdate` - **Update merchant member.**
 *
 *  - `merchant` - **Merchant. The standard name used for merchant related stages such retrieving a
 *    merchant or updating a merchant.**
 *
 *  - `merchantCardPresent` - **'This holds the parameter for creating merchants with card present
 *    options, this is specific for WF and WFSingle platform'**
 *
 *  - `merchantCardNotPresent` - **'This holds the parameter for creating merchants with card not
 *    present options, this is specific for WF and WFSingle platform'**
 *
 *  - `merchantUpdate` - **Update merchant details.**
 *
 *  - `merchantRetrieval` - **MerchantRetrieval. Used when merchant stage name is already being used
 *    in that crud configuration.**
 *
 *  - `noc` - **Noc. Stage name used for notification of change for disbursement related
 *    integrations.**
 *
 *  - `nocReturns` - **''**
 *
 *  - `omniTokenEnable` - **'This holds the parameters for omni token enablement'**
 *
 *  - `passTokenEnable` - **'This holds the parameters for pass token enablement'**
 *
 *  - `payment` - **Send payment details for Account Updater request.**
 *
 *  - `paymentConfirmation` - **Retrieve Account Updater request echo confirmation.**
 *
 *  - `paymentUpdate` - **Retrieve Account Updater updates.**
 *
 *  - `payout` - **Payout. Stage name used for payouts.**
 *
 *  - `primaryMemberUpdate` - **Update merchant primary member.**
 *
 *  - `registerSrs` - **First Data merchant SRS registration.**
 *
 *  - `returnCredit` - **''**
 *
 *  - `returnDebit` - **''**
 *
 *  - `returns` - **''**
 *
 *  - `saferPaymentEnable` - **'This holds the parameters for safer payment enablement'**
 *
 *  - `terminalCreate` - **Send terminal details for terminal boarding.**
 *
 *  - `terminalList` - **Retrieve list of terminals for a merchant.**
 *
 *  - `terminalsSupported` - **Retrieve list of supported terminals for a merchant.**
 *
 *  - `txn` - **Txn. The standard name used for transaction related stages.**
 *
 *  - `txnList` - **TxnList. The specific name to get transaction reports.**
 *
 *  - `varsheet` - **'This hold the parameter for accessing the terminal VARSHEET retrieval'**
 *
 * </details>
 */
export const ConfigurationStageName2 = {
  Blank: "blank",
  AcceptedCards: "acceptedCards",
  Ack: "ack",
  ActivateSrs: "activateSrs",
  Alert: "alert",
  AmexUpdate: "amexUpdate",
  Applepay: "applepay",
  Balance: "balance",
  Batch: "batch",
  Chargeback: "chargeback",
  ChargebackList: "chargebackList",
  ConfirmDisbursement: "confirmDisbursement",
  ContactUpdate: "contactUpdate",
  CreateMerchant: "createMerchant",
  Credit: "credit",
  Decrypt: "decrypt",
  Debit: "debit",
  DebitPinEnable: "debitPinEnable",
  DebitPinlessEnable: "debitPinlessEnable",
  DiscoverUrl: "discoverUrl",
  DiscoverUpdate: "discoverUpdate",
  Document: "document",
  DocumentList: "documentList",
  Interchange: "interchange",
  Encrypt: "encrypt",
  Entity: "entity",
  EntityAddressUpdate: "entityAddressUpdate",
  EntityRetrieval: "entityRetrieval",
  EntityUpdate: "entityUpdate",
  ExpressSubAccountUpdate: "expressSubAccountUpdate",
  Return: "return",
  FeeList: "feeList",
  Googlepay: "googlepay",
  MemberCreate: "memberCreate",
  MemberDelete: "memberDelete",
  Members: "members",
  MemberUpdate: "memberUpdate",
  Merchant: "merchant",
  MerchantCardPresent: "merchantCardPresent",
  MerchantCardNotPresent: "merchantCardNotPresent",
  MerchantUpdate: "merchantUpdate",
  MerchantRetrieval: "merchantRetrieval",
  Noc: "noc",
  NocReturns: "nocReturns",
  OmniTokenEnable: "omniTokenEnable",
  PassTokenEnable: "passTokenEnable",
  Payment: "payment",
  PaymentConfirmation: "paymentConfirmation",
  PaymentUpdate: "paymentUpdate",
  Payout: "payout",
  PrimaryMemberUpdate: "primaryMemberUpdate",
  RegisterSrs: "registerSrs",
  ReturnCredit: "returnCredit",
  ReturnDebit: "returnDebit",
  Returns: "returns",
  SaferPaymentEnable: "saferPaymentEnable",
  TerminalCreate: "terminalCreate",
  TerminalList: "terminalList",
  TerminalsSupported: "terminalsSupported",
  Txn: "txn",
  TxnList: "txnList",
  Varsheet: "varsheet",
} as const;
export type ConfigurationStageName2 =
  | (typeof ConfigurationStageName2)[keyof typeof ConfigurationStageName2]
  | (string & {});

export const configurationStageName2Schema: EnumSchema<ConfigurationStageName2> =
  s.enumOf<ConfigurationStageName2>(ConfigurationStageName2);
