import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The desired type to take on the referenced Note.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `note` - **Just add a note to the hold.**
 * - `release` - **Release the hold for this Hold.**
 * - `review` - **Mark the hold as having been reviewed.**
 * - `reReview` - **If the hold was marked as reviewed, this will allow resetting the review.**
 * - `amexSales` - **If the entity does sales with amex.**
 * - `businessSales` - **If the entity does business direct sales.**
 * - `consumerSales` - **If the entity does consumer direct sales.**
 * - `deliverySchedule` - **The delivery schedule of the entity.**
 * - `immediateDeliveryPercent` - **The amount of immediate deliveries with 0 day after the
 *   transaction.**
 * - `sevenDayDeliveryPercent` - **The amount of deliveries between 1-7 days after the
 *   transaction.**
 * - `fourteenDayDeliveryPercent` - **The amount of deliveries between 8-14 days after the
 *   transaction.**
 * - `thirtyDayDeliveryPercent` - **The amount of deliveries between 15-30 days after the
 *   transaction.**
 * - `cardPresentSales` - **If the entity does sales with card present.**
 * - `motoSales` - **If the entity does sales over the phone or mail.**
 * - `ecommerceSales` - **If the entity does ecommerce sales.**
 * - `siteVisit` - **If the entity had the site visit.**
 * - `goodsSold` - **The type of goods the entity sales.**
 * - `authorizationFlatFee` - **The flat fee agreement for each authorization.**
 * - `capturePercentFee` - **The percentage fee agreement for each capture.**
 * - `captureFlatFee` - **The flat fee agreement for each capture.**
 * - `riskApproved` - **The entity was approved.**
 * - `riskPending` - **The entity is in pending status.**
 * - `riskCancelled` - **The entity has a cancelled status.**
 * - `riskDenied` - **The entity has a denied status.**
 * - `riskClosed` - **The entity has a closed status.**
 * - `riskInvestigation` - **The entity is in investigation status.**
 * - `riskPendingData` - **Pending Docs/Info for The entity.**
 * - `riskFundsReleased` - **Funds released for The entity.**
 * - `riskActivityApproved` - **Activity approved for the entity.**
 *
 * </details>
 */
export const NoteType1 = {
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
export type NoteType1 = (typeof NoteType1)[keyof typeof NoteType1] | (string & {});

export const noteType1Schema: EnumSchema<NoteType1> = s.enumOf<NoteType1>(NoteType1);
