import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersDeclineNotificationEmail = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDeclineNotificationEmail =
  | (typeof ParametersDeclineNotificationEmail)[keyof typeof ParametersDeclineNotificationEmail]
  | (number & {});

export const parametersDeclineNotificationEmailSchema: EnumSchema<ParametersDeclineNotificationEmail> =
  s.enumOf<ParametersDeclineNotificationEmail>(ParametersDeclineNotificationEmail);
