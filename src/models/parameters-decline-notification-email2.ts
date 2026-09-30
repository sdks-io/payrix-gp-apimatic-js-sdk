import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether merchant boarding decline will generate a notification email to the members.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Disabled**
 * - `1` - **Enabled**
 *
 * </details>
 */
export const ParametersDeclineNotificationEmail2 = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDeclineNotificationEmail2 =
  | (typeof ParametersDeclineNotificationEmail2)[keyof typeof ParametersDeclineNotificationEmail2]
  | (number & {});

export const parametersDeclineNotificationEmail2Schema: EnumSchema<ParametersDeclineNotificationEmail2> =
  s.enumOf<ParametersDeclineNotificationEmail2>(ParametersDeclineNotificationEmail2);
