import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of check to perform.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `merchantFailureLimit` - **Exceeded the maximum number of allowed failed authorizations.**
 * - `merchantFailureRatio` - **Exceeded the maximum ratio of allowed failed authorizations.**
 * - `saleTotalLimit` - **Exceeded the maximum allowed sale total value.**
 * - `refundTotalLimit` - **Exceeded the maximum allowed refund total value.**
 * - `averageSaleCountLimit` - **Exceeded the allowed maximum payment size (individual transaction
 *   amount).**
 * - `merchantRefundSaleRatio` - **Exceeded the maximum allowed ratio of refunds to sales.**
 * - `merchantPaymentSuccessLimit` - **This is used to check if the merchant has charged the same
 *   payment more than X times on a given period of time.**
 * - `ipFailureLimit` - **Exceeded the maximum allowed number of failed authorizations for a
 *   particular IP address.**
 * - `ipFailureRatio` - **Exceeded the maximum allowed ratio of failed authorizations for a
 *   particular IP address.**
 * - `inactiveMerchant` - **The Merchant is not active.**
 * - `merchantPaymentFailureLimit` - **Exceeded the maximum allowed number of failed transactions.**
 * - `merchantCaptureWithoutAuthLimit` - **Exceeded the maximum allowed number of transactions
 *   without authorizations.**
 * - `refundWithoutSale` - **Refund transaction does not have an associated sale transaction.**
 * - `refundWithoutSaleLimit` - **Exceeded the maximum number of refund transactions that do not
 *   have associated sale transactions.**
 * - `captureAboveAuthLimit` - **Exceeded the maximum authorized value for transactions with failed
 *   authorizations.**
 * - `fraudScore` - **Transaction fraud score.**
 * - `cvv` - **CVV.**
 * - `avs` - **AVS.**
 * - `aavs` - **AAVS.**
 * - `duplicateTxn` - **Duplicate transaction.**
 * - `merchantMatch` - **Transaction matches merchant details.**
 * - `currencyConversion` - **Transaction triggers currency conversion.**
 * - `settledCurrencyMismatch` - **Transaction settled currency mismatch.**
 * - `initialTxn` - **Initial transaction of this type.**
 * - `similarTotalLimit` - **Exceeded the limit of transactions with equal totals.**
 * - `similarTotalRatio` - **Exceeded the ratio of transactions with equal totals.**
 * - `saleTotalMinimum` - **Minimum transaction amount.**
 * - `limit` - **Exceeded the maximum allowed number of authorizations.**
 * - `ratio` - **This is used to check if similar transactions have reached the ratio of auth
 *   transactions in a given period of time.**
 * - `txnWatchlist` - **Check the transaction data against a custom watchlist.**
 * - `balanceRefundLimit` - **This is used to check if a merchant has enough balance to process a
 *   REFUND transaction and it is within the scope of the threshold.**
 *
 * </details>
 */
export const DecisionType1 = {
  MerchantFailureLimit: "merchantFailureLimit",
  MerchantFailureRatio: "merchantFailureRatio",
  SaleTotalLimit: "saleTotalLimit",
  RefundTotalLimit: "refundTotalLimit",
  AverageSaleCountLimit: "averageSaleCountLimit",
  MerchantRefundSaleRatio: "merchantRefundSaleRatio",
  MerchantPaymentSuccessLimit: "merchantPaymentSuccessLimit",
  IpFailureLimit: "ipFailureLimit",
  IpFailureRatio: "ipFailureRatio",
  InactiveMerchant: "inactiveMerchant",
  MerchantPaymentFailureLimit: "merchantPaymentFailureLimit",
  MerchantCaptureWithoutAuthLimit: "merchantCaptureWithoutAuthLimit",
  RefundWithoutSale: "refundWithoutSale",
  RefundWithoutSaleLimit: "refundWithoutSaleLimit",
  CaptureAboveAuthLimit: "captureAboveAuthLimit",
  FraudScore: "fraudScore",
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
  SaleTotalMinimum: "saleTotalMinimum",
  Limit: "limit",
  Ratio: "ratio",
  TxnWatchlist: "txnWatchlist",
  BalanceRefundLimit: "balanceRefundLimit",
} as const;
export type DecisionType1 = (typeof DecisionType1)[keyof typeof DecisionType1] | (string & {});

export const decisionType1Schema: EnumSchema<DecisionType1> = s.enumOf<DecisionType1>(DecisionType1);
