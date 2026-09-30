import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargebackMessageType = {
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
export type ChargebackMessageType =
  | (typeof ChargebackMessageType)[keyof typeof ChargebackMessageType]
  | (string & {});

export const chargebackMessageTypeSchema: EnumSchema<ChargebackMessageType> =
  s.enumOf<ChargebackMessageType>(ChargebackMessageType);
