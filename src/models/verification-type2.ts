import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of check to perform on the Entity, Member or Txn. <details> <summary>Entity Types -
 * Valid Values</summary> <ul> <li>`advancedEntity` - <b>Advanced Entity Verification</b></li>
 * <li>`ofac` - <b>OFAC Watchlist Verification</b></li> <li>`entity` - <b>Entity
 * Verification</b></li> <li>`overall` - <b>Overall Entity Verification</b></li> <li>`watchlist` -
 * <b>Watchlist Verification</b></li> <li>`dataVerification` - <b>Data Verification</b></li>
 * <li>`advancedMerchant` - <b>Advanced Merchant Verification</b></li> </ul> </details> <details>
 * <summary>Member Types - Valid Values</summary> <ul> <li>`advancedMember` - <b>Advanced Member
 * Verification</b></li> <li>`association` - <b>Association Verification</b></li> <li>`member` -
 * <b>Member Verification</b></li> <li>`ofac` - <b>OFAC Watchlist Verification</b></li>
 * <li>`watchlist` - <b>Watchlist Verification</b></li> </ul> </details> <details>
 * <summary>Transaction Types - Valid Values</summary> <ul> <li>`merchantFailureLimit` - <b>Merchant
 * Failure Limit</b></li> <li>`merchantPaymentFailureLimit` - <b>Merchant Payment Failure
 * Limit</b></li> <li>`saleTotalLimit` - <b>Sale Total Limit</b></li> <li>`saleTotalMinimum` -
 * <b>Sale Total Minimum</b></li> <li>`merchantCaptureWithoutAuthLimit` - <b>Merchant Capture
 * Without Auth Limit</b></li> <li>`refundTotalLimit` - <b>Refund Total Limit</b></li>
 * <li>`averageSaleCountLimit` - <b>Average Sale Count Limit</b></li> <li>`merchantRefundSaleRatio`
 * - <b>Merchant Refund Sale Ratio</b></li> <li>`merchantPaymentSuccessLimit` - <b>Merchant Payment
 * Success Limit</b></li> <li>`ipFailureLimit` - <b>IP Failure Limit</b></li> <li>`ipFailureRatio` -
 * <b>IP Failure Ratio</b></li> <li>`inactiveMerchant` - <b>Inactive Merchant</b></li>
 * <li>`refundWithoutSale` - <b>Refund Without Sale</b></li> <li>`refundWithoutSaleLimit` -
 * <b>Refund Without Sale Limit</b></li> <li>`captureAboveAuthLimit` - <b>Capture Above Auth
 * Limit</b></li> <li>`cvv` - <b>CVV Verification</b></li> <li>`avs` - <b>AVS Verification</b></li>
 * <li>`aavs` - <b>AAVS Verification</b></li> <li>`duplicateTxn` - <b>Duplicate Transaction</b></li>
 * <li>`merchantMatch` - <b>Merchant Match</b></li> <li>`currencyConversion` - <b>Currency
 * Conversion</b></li> <li>`settledCurrencyMismatch` - <b>Settled Currency Mismatch</b></li>
 * <li>`initialTxn` - <b>Initial Transaction</b></li> <li>`similarTotalLimit` - <b>Similar Total
 * Limit</b></li> <li>`similarTotalRatio` - <b>Similar Total Ratio</b></li> <li>`limit` -
 * <b>Limit</b></li> <li>`ratio` - <b>Ratio</b></li> <li>`txnWatchlist` - <b>Transaction
 * Watchlist</b></li> <li>`balanceRefundLimit` - <b>Balance Refund Limit</b></li>
 * <li>`saleApprovedLimit` - <b>Sale Approved Limit</b></li> <li>`refundApprovedLimit` - <b>Refund
 * Approved Limit</b></li> </ul> </details>
 */
export const VerificationType2 = {
  AdvancedEntity: "advancedEntity",
  Ofac: "ofac",
  Entity: "entity",
  Overall: "overall",
  Watchlist: "watchlist",
  DataVerification: "dataVerification",
  AdvancedMerchant: "advancedMerchant",
  AdvancedMember: "advancedMember",
  Association: "association",
  Member: "member",
  MerchantFailureLimit: "merchantFailureLimit",
  MerchantPaymentFailureLimit: "merchantPaymentFailureLimit",
  SaleTotalLimit: "saleTotalLimit",
  SaleTotalMinimum: "saleTotalMinimum",
  MerchantCaptureWithoutAuthLimit: "merchantCaptureWithoutAuthLimit",
  RefundTotalLimit: "refundTotalLimit",
  AverageSaleCountLimit: "averageSaleCountLimit",
  MerchantRefundSaleRatio: "merchantRefundSaleRatio",
  MerchantPaymentSuccessLimit: "merchantPaymentSuccessLimit",
  IpFailureLimit: "ipFailureLimit",
  IpFailureRatio: "ipFailureRatio",
  InactiveMerchant: "inactiveMerchant",
  RefundWithoutSale: "refundWithoutSale",
  RefundWithoutSaleLimit: "refundWithoutSaleLimit",
  CaptureAboveAuthLimit: "captureAboveAuthLimit",
  Cvv: "cvv",
  Avs: "avs",
  Aavs: "aavs",
  DuplicateTxn: "duplicateTxn",
  MerchantMatch: "merchantMatch",
  CurrencyConversion: "currencyConversion",
  SettledCurrencyMismatch: "settledCurrencyMismatch",
  InitialTxn: "initialTxn",
  SimilarTotalLimit: "similarTotalLimit",
  SimilarTotalRatio: "similarTotalRatio",
  Limit: "limit",
  Ratio: "ratio",
  TxnWatchlist: "txnWatchlist",
  BalanceRefundLimit: "balanceRefundLimit",
  SaleApprovedLimit: "saleApprovedLimit",
  RefundApprovedLimit: "refundApprovedLimit",
} as const;
export type VerificationType2 = (typeof VerificationType2)[keyof typeof VerificationType2] | (string & {});

export const verificationType2Schema: EnumSchema<VerificationType2> =
  s.enumOf<VerificationType2>(VerificationType2);
