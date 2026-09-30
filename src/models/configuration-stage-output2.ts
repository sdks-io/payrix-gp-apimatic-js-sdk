import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The output used for configurationStage resource. <details><summary>Valid Values</summary>
 *
 *   - `APPLE_PAYMENTSESSION_REQUEST_JSON` - **APPLE_PAYMENTSESSION_REQUEST_JSON output file.**
 *
 *   - `APPLE_REGISTER_MERCHANT_REQUEST_JSON` - **APPLE_REGISTER_MERCHANT_REQUEST_JSON output
 *     file.**
 *
 *   - `APPLE_UNREGISTER_MERCHANT_REQUEST_JSON` - **APPLE_UNREGISTER_MERCHANT_REQUEST_JSON output
 *     file.**
 *
 *   - `EFT` - **EFT output file.**
 *
 *   - `ELAVON_BATCH_FLAT` - **ELAVON_BATCH_FLAT output file. Batch file upload format and structure
 *     for the Elavon processor.**
 *
 *   - `ELAVON_BATCH_READ_FLAT` - **ELAVON_BATCH_READ_FLAT output file. Batch file download format
 *     and structure for the Elavon processor.**
 *
 *   - `ELAVON_BOARD_JSON` - **ELAVON_BOARD_JSON output file. Merchant boarding format and structure
 *     for the Elavon processor.**
 *
 *   - `ELAVON_REPORTS_CSV` - **ELAVON_REPORTS_CSV output file. Settlement report format and
 *     structure for the Elavon processor.**
 *
 *   - `ELAVON_TXN_XML` - **ELAVON_TXN_XML output file. Transaction authorization processing format
 *     and structure for the Elavon processor.**
 *
 *   - `FEDACH_REPORT_FLAT` - **FEDACH_REPORT_FLAT output file. Fed ACH routing number file format
 *     and structure.**
 *
 *   - `FIRSTDATA_BATCH_FLAT` - **FIRSTDATA_BATCH_FLAT output file. Batch file format and structure
 *     for the First Data processor.**
 *
 *   - `FIRSTDATA_BATCH_READ_FLAT` - **FIRSTDATA_BATCH_READ_FLAT output file.**
 *
 *   - `FIRSTDATA_BOARD_JSON` - **FIRSTDATA_BOARD_JSON output file. Merchant boarding format and
 *     structure for the First Data processor.**
 *
 *   - `FIRSTDATA_REPORTS_FLAT` - **FIRSTDATA_REPORTS_FLAT output file. Settlement report format and
 *     structure for the First Data processor.**
 *
 *   - `FIRSTDATA_SRS_XML` - **FIRSTDATA_SRS_XML output file. SRS registration and activation format
 *     and structure for the First Data Processor.**
 *
 *   - `FIRSTDATA_TXN_XML` - **FIRSTDATA_TXN_XML output file. Transaction authorization processing
 *     format and structure for the First Data processor.**
 *
 *   - `FIRSTDATA_SINGLE_BATCH_FLAT` - **FIRSTDATA_SINGLE_BATCH_FLAT output file.**
 *
 *   - `FIRSTDATA_SINGLE_TXN_XML` - **FIRSTDATA_SINGLE_TXN_XML output file.**
 *
 *   - `NACHA` - **NACHA output file. Disbursement file format and structure for the NACHA funding
 *     platform.**
 *
 *   - `NEUTRINO_CSV` - **NEUTRINO_CSV output file. BIN (Bank Issuer Number) file download format
 *     and structure for the Neutrino API service.**
 *
 *   - `NEUTRINO_FORM` - **NEUTRINO_FORM output file. BIN (Bank Issuer Number) file request format
 *     and structure for the Neutrino API service.**
 *
 *   - `NEUTRINO_JSON` - **NEUTRINO_JSON output file. BIN (Bank Issuer Number) file format and
 *     structure for the Neutrino API service.**
 *
 *   - `OFAC_XML` - **OFAC_XML output file. Entity and member watchlist file download for the OFAC
 *     SDN list.**
 *
 *   - `PAYRIX_CHARGEBACK_JSON` - **PAYRIX_CHARGEBACK_JSON output file.**
 *
 *   - `PAYRIX_DECISION_JSON` - **PAYRIX_DECISION_JSON output file. Risk decision integration format
 *     and structure for the Payrix integration service.**
 *
 *   - `PAYRIX_ENCRYPTION_JSON` - **PAYRIX_ENCRYPTION_JSON output file.**
 *
 *   - `PAYRIX_GOOGLEPAY_DECRYPTION_JSON` - **PAYRIX_GOOGLEPAY_DECRYPTION_JSON output file.**
 *
 *   - `PAYRIX_TXN_JSON` - **PAYRIX_TXN_JSON output file. Terminal activation response format and
 *     structure for the Payrix terminal app.**
 *
 *   - `PUSHY_TXN_JSON` - **PUSHY_TXN_JSON output file. Terminal activation request format and
 *     structure for the Pushy app messaging service.**
 *
 *   - `SIFT_JSON` - **SIFT_JSON output file. Risk decision integration format and structure for the
 *     SIFT transaction monitoring service.**
 *
 *   - `SOCURE_ALLOY_JSON` - **SOCURE_ALLOY_JSON output file. Risk decision integration format and
 *     structure for the Alloy integrator to Socure.**
 *
 *   - `SOCURE_FORM` - **SOCURE_FORM output file. Risk decision integration request format and
 *     structure for the Socure member underwriting service.**
 *
 *   - `SOCURE_JSON` - **SOCURE_JSON output file. Risk decision integration response format and
 *     structure for the Socure member underwriting service.**
 *
 *   - `SOUNDPAYMENTS_TXN_FORM` - **SOUNDPAYMENTS_TXN_FORM output file. Terminal activation request
 *     format and structure for the Sound Payments cloud activation service.**
 *
 *   - `SOUNDPAYMENTS_TXN_XML` - **SOUNDPAYMENTS_TXN_XML output file. Terminal activation response
 *     format and structure for the Sound Payments cloud activation service.**
 *
 *   - `VANTIV_BATCH_XML` - **VANTIV_BATCH_XML output file. Batch file format and structure for the
 *     WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 *
 *   - `VANTIV_BOARD_XML` - **VANTIV_BOARD_XML output file. Merchant boarding format and structure
 *     for the WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 *
 *   - `VANTIV_CHARGEBACK_XML` - **VANTIV_CHARGEBACK_XML output file. Chargeback API format and
 *     structure for the WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 *
 *   - `VANTIV_PAYMENT_UPDATES_XML` - **VANTIV_PAYMENT_UPDATES_XML output file. Account Updater
 *     format and structure for the WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 *
 *   - `VANTIV_PAYOUT_CSV` - **VANTIV_PAYOUT_CSV output file. Payout reports format and structure
 *     for the WoldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 *
 *   - `VANTIV_PAYOUT_XML` - **VANTIV_PAYOUT_XML output file. Disbursement file format and structure
 *     for the WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 *
 *   - `VANTIV_PAYOUT_XML_V9` - **VANTIV_PAYOUT_XML_V9 output file. Old version 9 disbursement file
 *     format and structure for the WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 *
 *   - `VANTIV_REPORTS_CSV` - **VANTIV_REPORTS_CSV output file. Settlement report format and
 *     structure for the WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 *
 *   - `VANTIV_TXN_CSV` - **VANTIV_TXN_CSV output file. Echeck reports format and structure for the
 *     WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 *
 *   - `VANTIV_TXN_XML` - **VANTIV_TXN_XML output file. Transaction authorization processing format
 *     and structure for the WorldPay (aka Vantiv or Litle) eComm (aka VAP) processor.**
 *
 *   - `VCORE_BATCH_FLAT` - **VCORE_BATCH_FLAT output file. Batch file upload format and structure
 *     for the WorldPay (aka Vantiv) Core processor.**
 *
 *   - `VCORE_BATCH_READ_FLAT` - **VCORE_BATCH_READ_FLAT output file. Batch file download format and
 *     structure for the WorldPay (aka Vantiv) Core processor.**
 *
 *   - `VCORE_BINREPORT_FLAT` - **VCORE_BINREPORT_FLAT output file. BIN (Bank Issuer Number) file
 *     download format and structure for the WorldPay (aka Vantiv) Core processor.**
 *
 *   - `VCORE_BOARD_API` - **VCORE_BOARD_API output file. New merchant boarding API format and
 *     structure for the WorldPay (aka Vantiv) Core processor.**
 *
 *   - `VCORE_BOARD_FLAT` - **VCORE_BOARD_FLAT output file. Old merchant boarding creation file
 *     format and structure for the WorldPay (aka Vantiv) Core processor.**
 *
 *   - `VCORE_CHARGEBACK_FLAT` - **VCORE_CHARGEBACK_FLAT output file. Chargeback file format and
 *     structure for the WorldPay (aka Vantiv) Core processor.**
 *
 *   - `VCORE_OMNITOKEN_JSON` - **VCORE_OMNITOKEN_JSON output file.**
 *
 *   - `VCORE_REPORTS_FLAT` - **VCORE_REPORTS_FLAT output file. Settlement report format and
 *     structure for the WorldPay (aka Vantiv) Core processor.**
 *
 *   - `VCORE_SAFERPAYMENT_JSON` - **VCORE_SAFERPAYMENT_JSON output file.**
 *
 *   - `VCORE_TXN_ISO8583` - **VCORE_TXN_ISO8583 output file. Transaction authorization processing
 *     for the WorldPay (aka Vantiv) Core processor.**
 *
 *   - `VCORE_UPDATE_FLAT` - **VCORE_UPDATE_FLAT output file. Old merchant boarding update file
 *     format and structure for the WorldPay (aka Vantiv) Core processor.**
 *
 *   - `VCORE_VARSHEET_JSON` - **VCORE_VARSHEET_JSON output file.**
 *
 *   - `WEBSHIELD_FORM` - **WEBSHIELD_FORM output file. Risk decision integration request format and
 *     structure for the Webshield entity underwriting service.**
 *
 *   - `WEBSHIELD_JSON` - **WEBSHIELD_JSON output file. Risk decision integration response format
 *     and structure for the Webshield entity underwriting service.**
 *
 *   - `WELLSACH_BATCH_FLAT` - **WELLSACH_BATCH_FLAT output file.**
 *
 *   - `WELLSACH_PAYOUT_FLAT` - **WELLSACH_PAYOUT_FLAT output file.**
 *
 *   - `WELLSACH_TXN_FLAT` - **WELLSACH_TXN_FLAT output file.**
 *
 *   - `WELLSFARGO_BOARD_XML` - **WELLSFARGO_BOARD_XML output file. Merchant boarding format and
 *     structure for the Wells Fargo Merchant Services processor.**
 *
 *   - `WELLSFARGO_REPORT_CSV` - **WELLSFARGO_REPORT_CSV output file.**
 *
 *   - `WELLSFARGO_REPORT_FLAT` - **WELLSFARGO_REPORT_FLAT output file.**
 *
 *   - `WFSINGLE_REPORT_FLAT` - **WFSINGLE_REPORT_FLAT output file.**
 *
 *   - `WFSINGLE_BOARD_XML` - **WFSINGLE_BOARD_XML output file.**
 *
 * </details>
 */
export const ConfigurationStageOutput2 = {
  ApplePaymentsessionRequestJson: "APPLE_PAYMENTSESSION_REQUEST_JSON",
  AppleRegisterMerchantRequestJson: "APPLE_REGISTER_MERCHANT_REQUEST_JSON",
  AppleUnregisterMerchantRequestJson: "APPLE_UNREGISTER_MERCHANT_REQUEST_JSON",
  Eft: "EFT",
  ElavonBatchFlat: "ELAVON_BATCH_FLAT",
  ElavonBatchReadFlat: "ELAVON_BATCH_READ_FLAT",
  ElavonBoardJson: "ELAVON_BOARD_JSON",
  ElavonReportsCsv: "ELAVON_REPORTS_CSV",
  ElavonTxnXml: "ELAVON_TXN_XML",
  FedachReportFlat: "FEDACH_REPORT_FLAT",
  FirstdataBatchFlat: "FIRSTDATA_BATCH_FLAT",
  FirstdataBatchReadFlat: "FIRSTDATA_BATCH_READ_FLAT",
  FirstdataBoardJson: "FIRSTDATA_BOARD_JSON",
  FirstdataReportsFlat: "FIRSTDATA_REPORTS_FLAT",
  FirstdataSrsXml: "FIRSTDATA_SRS_XML",
  FirstdataTxnXml: "FIRSTDATA_TXN_XML",
  FirstdataSingleBatchFlat: "FIRSTDATA_SINGLE_BATCH_FLAT",
  FirstdataSingleTxnXml: "FIRSTDATA_SINGLE_TXN_XML",
  Nacha: "NACHA",
  NeutrinoCsv: "NEUTRINO_CSV",
  NeutrinoForm: "NEUTRINO_FORM",
  NeutrinoJson: "NEUTRINO_JSON",
  OfacXml: "OFAC_XML",
  PayrixChargebackJson: "PAYRIX_CHARGEBACK_JSON",
  PayrixDecisionJson: "PAYRIX_DECISION_JSON",
  PayrixEncryptionJson: "PAYRIX_ENCRYPTION_JSON",
  PayrixGooglepayDecryptionJson: "PAYRIX_GOOGLEPAY_DECRYPTION_JSON",
  PayrixTxnJson: "PAYRIX_TXN_JSON",
  PushyTxnJson: "PUSHY_TXN_JSON",
  SiftJson: "SIFT_JSON",
  SocureAlloyJson: "SOCURE_ALLOY_JSON",
  SocureForm: "SOCURE_FORM",
  SocureJson: "SOCURE_JSON",
  SoundpaymentsTxnForm: "SOUNDPAYMENTS_TXN_FORM",
  SoundpaymentsTxnXml: "SOUNDPAYMENTS_TXN_XML",
  VantivBatchXml: "VANTIV_BATCH_XML",
  VantivBoardXml: "VANTIV_BOARD_XML",
  VantivChargebackXml: "VANTIV_CHARGEBACK_XML",
  VantivPaymentUpdatesXml: "VANTIV_PAYMENT_UPDATES_XML",
  VantivPayoutCsv: "VANTIV_PAYOUT_CSV",
  VantivPayoutXml: "VANTIV_PAYOUT_XML",
  VantivPayoutXmlV9: "VANTIV_PAYOUT_XML_V9",
  VantivReportsCsv: "VANTIV_REPORTS_CSV",
  VantivTxnCsv: "VANTIV_TXN_CSV",
  VantivTxnXml: "VANTIV_TXN_XML",
  VcoreBatchFlat: "VCORE_BATCH_FLAT",
  VcoreBatchReadFlat: "VCORE_BATCH_READ_FLAT",
  VcoreBinreportFlat: "VCORE_BINREPORT_FLAT",
  VcoreBoardApi: "VCORE_BOARD_API",
  VcoreBoardFlat: "VCORE_BOARD_FLAT",
  VcoreChargebackFlat: "VCORE_CHARGEBACK_FLAT",
  VcoreOmnitokenJson: "VCORE_OMNITOKEN_JSON",
  VcoreReportsFlat: "VCORE_REPORTS_FLAT",
  VcoreSaferpaymentJson: "VCORE_SAFERPAYMENT_JSON",
  VcoreTxnIso8583: "VCORE_TXN_ISO8583",
  VcoreUpdateFlat: "VCORE_UPDATE_FLAT",
  VcoreVarsheetJson: "VCORE_VARSHEET_JSON",
  WebshieldForm: "WEBSHIELD_FORM",
  WebshieldJson: "WEBSHIELD_JSON",
  WellsachBatchFlat: "WELLSACH_BATCH_FLAT",
  WellsachPayoutFlat: "WELLSACH_PAYOUT_FLAT",
  WellsachTxnFlat: "WELLSACH_TXN_FLAT",
  WellsfargoBoardXml: "WELLSFARGO_BOARD_XML",
  WellsfargoReportCsv: "WELLSFARGO_REPORT_CSV",
  WellsfargoReportFlat: "WELLSFARGO_REPORT_FLAT",
  WfsingleReportFlat: "WFSINGLE_REPORT_FLAT",
  WfsingleBoardXml: "WFSINGLE_BOARD_XML",
} as const;
export type ConfigurationStageOutput2 =
  | (typeof ConfigurationStageOutput2)[keyof typeof ConfigurationStageOutput2]
  | (string & {});

export const configurationStageOutput2Schema: EnumSchema<ConfigurationStageOutput2> =
  s.enumOf<ConfigurationStageOutput2>(ConfigurationStageOutput2);
