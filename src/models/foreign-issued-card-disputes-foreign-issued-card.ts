import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the transaction is foreign or domestic. .
 * * `YES` - The transaction took place in a country different from where the card was issued
 * * `NO` - The transaction took place in the same country as the card was issued in.
 */
export const ForeignIssuedCardDisputesForeignIssuedCard = {
  Yes: "YES",
  No: "NO",
} as const;
export type ForeignIssuedCardDisputesForeignIssuedCard =
  | (typeof ForeignIssuedCardDisputesForeignIssuedCard)[keyof typeof ForeignIssuedCardDisputesForeignIssuedCard]
  | (string & {});

export const foreignIssuedCardDisputesForeignIssuedCardSchema: EnumSchema<ForeignIssuedCardDisputesForeignIssuedCard> =
  s.enumOf<ForeignIssuedCardDisputesForeignIssuedCard>(ForeignIssuedCardDisputesForeignIssuedCard);
