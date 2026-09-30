import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AlertActionType = {
  Email: "email",
  Web: "web",
  App: "app",
  Sms: "sms",
} as const;
export type AlertActionType = (typeof AlertActionType)[keyof typeof AlertActionType] | (string & {});

export const alertActionTypeSchema: EnumSchema<AlertActionType> = s.enumOf<AlertActionType>(AlertActionType);
