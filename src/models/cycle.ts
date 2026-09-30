import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Cycle = {
  Retrieval: "retrieval",
  First: "first",
  Arbitration: "arbitration",
  Reversal: "reversal",
  Representment: "representment",
  PreArbitration: "preArbitration",
  ArbitrationLost: "arbitrationLost",
  ArbitrationSplit: "arbitrationSplit",
  ArbitrationWon: "arbitrationWon",
  IssuerAcceptPreArbitration: "issuerAcceptPreArbitration",
  IssuerDeclinedPreArbitration: "issuerDeclinedPreArbitration",
  ResponseToIssuerPreArbitration: "responseToIssuerPreArbitration",
  MerchantAcceptedPreArbitration: "merchantAcceptedPreArbitration",
  MerchantDeclinedPreArbitration: "merchantDeclinedPreArbitration",
  PreCompliance: "preCompliance",
  Compliance: "compliance",
} as const;
export type Cycle = (typeof Cycle)[keyof typeof Cycle] | (string & {});

export const cycleSchema: EnumSchema<Cycle> = s.enumOf<Cycle>(Cycle);
