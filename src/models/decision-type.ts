import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DecisionType = {
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
export type DecisionType = (typeof DecisionType)[keyof typeof DecisionType] | (string & {});

export const decisionTypeSchema: EnumSchema<DecisionType> = s.enumOf<DecisionType>(DecisionType);
