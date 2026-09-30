import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The discretionary field being stored.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `discretionary1` - **Custom Field 1**
 * - `discretionary2` - **Custom Field 2**
 * - `discretionary3` - **Custom Field 3**
 * - `clinical` - **Clinical amount**
 * - `copay` - **Copay amount**
 * - `dental` - **Dental amount**
 * - `healthCare` - **Health Care amount**
 * - `rx` - **RX amount**
 * - `vision` - **Vision amount**
 * - `applicationId` - **Application ID (AID)**
 * - `terminalTransactionCurrency` - **Terminal Transaction Currency**
 * - `cardSequenceNumber` - **Card Sequence Number**
 * - `applicationPreferredName` - **Application Preferred Name (APPN)**
 * - `applicationLabel` - **Application Label (APPLAB)**
 * - `issuerScript1` - **Issuer Script 1**
 * - `issuerScript2` - **Issuer Script 2**
 * - `applicationInterchangeProfile` - **Application Interchange Profile**
 * - `dedicatedFileName` - **Dedicated File Name**
 * - `authorizationCode` - **Authorization Code (AC)**
 * - `authorizationResponseCode` - **Authorization Response Code (ARC)**
 * - `cardRiskManagementDataObjectList2` - **Card Risk Management Data Object List 2 (CDOL2)**
 * - `issuerAuthData` - **Issuer Authentication Data (IAUTHD)**
 * - `terminalVerificationResults` - **Terminal Verification Results (TVR)**
 * - `transactionStatusInformation` - **Transaction Status Information (TSI)**
 * - `transactionType` - **Transaction Type**
 * - `otherAmount` - **Other Amount**
 * - `applicationUsageControl` - **Application Usage Control (AUC)**
 * - `applicationVersionNumber` - **Application Version Number (AVN)**
 * - `issuerActionCodeDefault` - **Issuer Action Code Default (IACDefault)**
 * - `issuerActionCodeDenial` - **Issuer Action Code Denial (IACDenial)**
 * - `issuerActionCodeOnline` - **Issuer Action Code Online (IACOnline)**
 * - `issuerApplicationData` - **Issuer Application Data**
 * - `applicationIdName` - **Application ID Name (AID Name)**
 * - `terminalTransactionCountryCode` - **Terminal Transaction Country Code**
 * - `applicationCryptogram` - **Application Cryptogram (TC)**
 * - `cryptogramInformationData` - **Cryptogram Information Data**
 * - `capabilityProfile` - **Capability Profile**
 * - `cardHolderVerificationMethod` - **Cardholder Verification Method Results (CVM)**
 * - `applicationTransactionCounter` - **App Transaction Counter**
 * - `unpredictableNumber` - **Unpredictable Number**
 * - `issuerScriptResults` - **Issuer Script Results**
 * - `formFactorIndicator` - **Form Factor Indicator**
 * - `authCharacteristcs` - **Authorization Characteristics Indicator**
 * - `authNetworkId` - **Authorizing Network ID**
 * - `authResponseCode` - **Authorization Response Code**
 * - `authSource` - **Point Of Authorization**
 * - `banknetDate` - **MasterCard Banknet Settlement Date**
 * - `cardCaptureCapability` - **Card Capture Capability**
 * - `cardDataInputMode` - **Amex Card Data Input Mode**
 * - `cardDataOutputCapability` - **Amex Card Data Output Capability**
 * - `cardholderAuthentication` - **Amex Cardholder Authentication**
 * - `cardholderPresent` - **Cardholder Presence**
 * - `cardInputCapability` - **Card Data Input Capability**
 * - `cardLevelResult` - **Visa Card Level Products Result**
 * - `cardmemberAuthentication` - **Amex Cardmember Authentication**
 * - `cardmemberEntity` - **Amex Cardmember Authentication Entity**
 * - `cardPresent` - **Card Presence**
 * - `cvvErrorCode` - **CVV Error Code**
 * - `discoverResponseCode` - **Discover Response Code**
 * - `ecommerceIndicator` - **Ecommerce Indicator**
 * - `entryMode` - **POS Entry Mode**
 * - `entryModeChange` - **POS Entry Mode changed by the issuer**
 * - `goodsSoldCode` - **Amex Goods Sold Code**
 * - `marketSpecificIndicator` - **Visa Market Specific Indicator**
 * - `merchantVerificationValue` - **Visa MVV/Mastercard MAID**
 * - `motoIndicator` - **Mail/Telephone Order Indicator**
 * - `networkResultIndicator` - **Discover Network Result Indicator**
 * - `operatingEnvironment` - **Amex Operating Environment**
 * - `partialApprovalIndicator` - **Discover Partial Approval Indicator**
 * - `pinCaptureCapability` - **PIN Capture Capability**
 * - `posAttendanceIndicator` - **POS Attendance Indicator**
 * - `posAuthLifecycle` - **Discover POS Auth Lifecycle**
 * - `posData` - **Network POS Data**
 * - `posEcommerceIndicator` - **Discover POS Ecommerce Indicator**
 * - `posLocation` - **Discover POS Location**
 * - `posTransactionSecurity` - **Discover POS Transaction Security**
 * - `posTransactionStatus` - **Discover POS Transaction Status**
 * - `processingCode` - **Discover Processing Code**
 * - `stan` - **System Trace Audit Number**
 * - `statusCode` - **Network status code**
 * - `terminalOutputCapability` - **Amex Terminal Output Capability**
 * - `track1Indicator` - **Discover Track 1 Data Indicator**
 * - `track2Indicator` - **Discover Track 2 Data Indicator**
 * - `transactionEditErrorCode` - **Mastercard track data error code**
 * - `transactionIntegrityClass` - **Transaction Integrity Class**
 * - `transactionQualifier` - **Discover Transaction Qualifier**
 * - `validationCode` - **Visa Validation Code**
 * - `visaSpendIndicator` - **Visa Spend Qualified Indicator**
 * - `reversals` - **Reversals**
 * - `firstTxn` - **First Transaction**
 * - `posTerminalID` - **POS Terminal ID**
 * - `pinlessConversionFlag` - **Pinless Conversion Flag**
 *
 * </details>
 */
export const TerminalTxnsMetadatasField1 = {
  Discretionary1: "discretionary1",
  Discretionary2: "discretionary2",
  Discretionary3: "discretionary3",
  Clinical: "clinical",
  Copay: "copay",
  Dental: "dental",
  HealthCare: "healthCare",
  Rx: "rx",
  Vision: "vision",
  ApplicationId: "applicationId",
  TerminalTransactionCurrency: "terminalTransactionCurrency",
  CardSequenceNumber: "cardSequenceNumber",
  ApplicationPreferredName: "applicationPreferredName",
  ApplicationLabel: "applicationLabel",
  IssuerScript1: "issuerScript1",
  IssuerScript2: "issuerScript2",
  ApplicationInterchangeProfile: "applicationInterchangeProfile",
  DedicatedFileName: "dedicatedFileName",
  AuthorizationCode: "authorizationCode",
  AuthorizationResponseCode: "authorizationResponseCode",
  CardRiskManagementDataObjectList2: "cardRiskManagementDataObjectList2",
  IssuerAuthData: "issuerAuthData",
  TerminalVerificationResults: "terminalVerificationResults",
  TransactionStatusInformation: "transactionStatusInformation",
  TransactionType: "transactionType",
  OtherAmount: "otherAmount",
  ApplicationUsageControl: "applicationUsageControl",
  ApplicationVersionNumber: "applicationVersionNumber",
  IssuerActionCodeDefault: "issuerActionCodeDefault",
  IssuerActionCodeDenial: "issuerActionCodeDenial",
  IssuerActionCodeOnline: "issuerActionCodeOnline",
  IssuerApplicationData: "issuerApplicationData",
  ApplicationIdName: "applicationIdName",
  TerminalTransactionCountryCode: "terminalTransactionCountryCode",
  ApplicationCryptogram: "applicationCryptogram",
  CryptogramInformationData: "cryptogramInformationData",
  CapabilityProfile: "capabilityProfile",
  CardHolderVerificationMethod: "cardHolderVerificationMethod",
  ApplicationTransactionCounter: "applicationTransactionCounter",
  UnpredictableNumber: "unpredictableNumber",
  IssuerScriptResults: "issuerScriptResults",
  FormFactorIndicator: "formFactorIndicator",
  AuthCharacteristcs: "authCharacteristcs",
  AuthNetworkId: "authNetworkId",
  AuthResponseCode: "authResponseCode",
  AuthSource: "authSource",
  BanknetDate: "banknetDate",
  CardCaptureCapability: "cardCaptureCapability",
  CardDataInputMode: "cardDataInputMode",
  CardDataOutputCapability: "cardDataOutputCapability",
  CardholderAuthentication: "cardholderAuthentication",
  CardholderPresent: "cardholderPresent",
  CardInputCapability: "cardInputCapability",
  CardLevelResult: "cardLevelResult",
  CardmemberAuthentication: "cardmemberAuthentication",
  CardmemberEntity: "cardmemberEntity",
  CardPresent: "cardPresent",
  CvvErrorCode: "cvvErrorCode",
  DiscoverResponseCode: "discoverResponseCode",
  EcommerceIndicator: "ecommerceIndicator",
  EntryMode: "entryMode",
  EntryModeChange: "entryModeChange",
  GoodsSoldCode: "goodsSoldCode",
  MarketSpecificIndicator: "marketSpecificIndicator",
  MerchantVerificationValue: "merchantVerificationValue",
  MotoIndicator: "motoIndicator",
  NetworkResultIndicator: "networkResultIndicator",
  OperatingEnvironment: "operatingEnvironment",
  PartialApprovalIndicator: "partialApprovalIndicator",
  PinCaptureCapability: "pinCaptureCapability",
  PosAttendanceIndicator: "posAttendanceIndicator",
  PosAuthLifecycle: "posAuthLifecycle",
  PosData: "posData",
  PosEcommerceIndicator: "posEcommerceIndicator",
  PosLocation: "posLocation",
  PosTransactionSecurity: "posTransactionSecurity",
  PosTransactionStatus: "posTransactionStatus",
  ProcessingCode: "processingCode",
  Stan: "stan",
  StatusCode: "statusCode",
  TerminalOutputCapability: "terminalOutputCapability",
  Track1Indicator: "track1Indicator",
  Track2Indicator: "track2Indicator",
  TransactionEditErrorCode: "transactionEditErrorCode",
  TransactionIntegrityClass: "transactionIntegrityClass",
  TransactionQualifier: "transactionQualifier",
  ValidationCode: "validationCode",
  VisaSpendIndicator: "visaSpendIndicator",
  Reversals: "reversals",
  FirstTxn: "firstTxn",
  PosTerminalId: "posTerminalID",
  PinlessConversionFlag: "pinlessConversionFlag",
} as const;
export type TerminalTxnsMetadatasField1 =
  | (typeof TerminalTxnsMetadatasField1)[keyof typeof TerminalTxnsMetadatasField1]
  | (string & {});

export const terminalTxnsMetadatasField1Schema: EnumSchema<TerminalTxnsMetadatasField1> =
  s.enumOf<TerminalTxnsMetadatasField1>(TerminalTxnsMetadatasField1);
