import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * <details><summary>Valid Values</summary>
 *
 *   - `retrieval` - **Initial request from the issuer for more information on this Transaction.**
 *
 *   - `first` - **First Chargeback from issuer for this Transaction.**
 *
 *   - `arbitration` - **Arbitration is being sought for this Chargeback.**
 *
 *   - `reversal` - **Chargeback was reversed.**
 *
 *   - `representment` - **Merchant is being represented to the issuer with the Chargeback response
 *     posted.**
 *
 *
 *   - `preArbitration` - **Chargeback is no longer representable. Merchant must choose to accept or
 *     arbitrate with the card brand.**
 *
 *   - `arbitrationLost` - **Arbitration lost.**
 *
 *   - `arbitrationSplit` - **Arbitration split.**
 *
 *   - `arbitrationWon` - **Arbitration won.**
 *
 *   - `issuerAcceptPreArbitration` - **Issuer accepted the pre-arbitration response.**
 *
 *   - `issuerDeclinedPreArbitration` - **Issuer declined pre-arbitration.**
 *
 *   - `responseToIssuerPreArbitration` - **Response to issuer pre-arbitration.**
 *
 *   - `merchantAcceptedPreArbitration` - **Merchant accepted the pre-arbitration response.**
 *
 *   - `merchantDeclinedPreArbitration` - **Merchant declined the pre-arbitration response.**
 *
 *   - `preCompliance` - **Pre-compliance.**
 *
 *   - `compliance` - **Compliance.** </details>
 */
export const Cycle1 = {
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
export type Cycle1 = (typeof Cycle1)[keyof typeof Cycle1] | (string & {});

export const cycle1Schema: EnumSchema<Cycle1> = s.enumOf<Cycle1>(Cycle1);
