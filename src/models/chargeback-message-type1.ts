import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of this chargebackMessage.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `assign` - **Assign the chargeback.**
 * - `notate` - **Add a note to the chargeback.**
 * - `acceptLiability` - **Accept Liability for the Chargeback amount.**
 * - `createPreArbitration` - **Create a pre-arbitration case.**
 * - `represent` - **Represent the chargeback.**
 * - `respond` - **Respond to the chargeback.**
 * - `requestArbitration` - **Request Arbitration. The Merchant wishes to enter arbitration to
 *   determine the outcome of the Chargeback.**
 * - `createArbitration` - **Create an arbitration case.**
 * - `requestPreArbitration` - **Request a pre-arbitration case.**
 * - `requestResolutionToPreArbitration` - **Request resolution to a pre-arbitration case.**
 * - `respondToDispute` - **Respond to a dispute.**
 * - `respondToPreArbitration` - **Respond to a pre-arbitration case.**
 * - `unaccept` - **Unaccept the chargeback.**
 *
 * </details>
 */
export const ChargebackMessageType1 = {
  Assign: "assign",
  Notate: "notate",
  AcceptLiability: "acceptLiability",
  CreatePreArbitration: "createPreArbitration",
  Represent: "represent",
  Respond: "respond",
  RequestArbitration: "requestArbitration",
  CreateArbitration: "createArbitration",
  RequestPreArbitration: "requestPreArbitration",
  RequestResolutionToPreArbitration: "requestResolutionToPreArbitration",
  RespondToDispute: "respondToDispute",
  RespondToPreArbitration: "respondToPreArbitration",
  Unaccept: "unaccept",
} as const;
export type ChargebackMessageType1 =
  | (typeof ChargebackMessageType1)[keyof typeof ChargebackMessageType1]
  | (string & {});

export const chargebackMessageType1Schema: EnumSchema<ChargebackMessageType1> =
  s.enumOf<ChargebackMessageType1>(ChargebackMessageType1);
