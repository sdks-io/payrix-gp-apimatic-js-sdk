import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeAuthenticationsActionType = {
  Initiate: "INITIATE",
  GetChallengeResult: "GET_CHALLENGE_RESULT",
  CheckAvailability: "CHECK_AVAILABILITY",
} as const;
export type TypeAuthenticationsActionType =
  | (typeof TypeAuthenticationsActionType)[keyof typeof TypeAuthenticationsActionType]
  | (string & {});

export const typeAuthenticationsActionTypeSchema: EnumSchema<TypeAuthenticationsActionType> =
  s.enumOf<TypeAuthenticationsActionType>(TypeAuthenticationsActionType);
