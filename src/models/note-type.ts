import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NoteType = {
  Note: "note",
  Release: "release",
  Review: "review",
  ReReview: "reReview",
  AmexSales: "amexSales",
  BusinessSales: "businessSales",
  ConsumerSales: "consumerSales",
  DeliverySchedule: "deliverySchedule",
  ImmediateDeliveryPercent: "immediateDeliveryPercent",
  SevenDayDeliveryPercent: "sevenDayDeliveryPercent",
  FourteenDayDeliveryPercent: "fourteenDayDeliveryPercent",
  ThirtyDayDeliveryPercent: "thirtyDayDeliveryPercent",
  CardPresentSales: "cardPresentSales",
  MotoSales: "motoSales",
  EcommerceSales: "ecommerceSales",
  SiteVisit: "siteVisit",
  GoodsSold: "goodsSold",
  AuthorizationFlatFee: "authorizationFlatFee",
  CapturePercentFee: "capturePercentFee",
  CaptureFlatFee: "captureFlatFee",
  RiskApproved: "riskApproved",
  RiskPending: "riskPending",
  RiskCancelled: "riskCancelled",
  RiskDenied: "riskDenied",
  RiskClosed: "riskClosed",
  RiskInvestigation: "riskInvestigation",
  RiskPendingData: "riskPendingData",
  RiskFundsReleased: "riskFundsReleased",
  RiskActivityApproved: "riskActivityApproved",
} as const;
export type NoteType = (typeof NoteType)[keyof typeof NoteType] | (string & {});

export const noteTypeSchema: EnumSchema<NoteType> = s.enumOf<NoteType>(NoteType);
