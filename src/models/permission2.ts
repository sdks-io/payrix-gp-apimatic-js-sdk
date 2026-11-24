import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Permission2 = {
  FmaLimitNotification: "FMA_LIMIT_Notification",
} as const;
export type Permission2 = (typeof Permission2)[keyof typeof Permission2] | (string & {});

export const permission2Schema: EnumSchema<Permission2> = s.enumOf<Permission2>(Permission2);
