import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The medium to use to deliver this Alert.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `email` - **Deliver the Alert to an email address.**
 * - `web` - **Deliver the Alert through a web site notification.**
 * - `app` - **Deliver the Alert through a mobile application notification.**
 * - `sms` - **Deliver the Alert through an SMS message to a mobile device.**
 *
 * </details>
 */
export const AlertActionType1 = {
  Email: "email",
  Web: "web",
  App: "app",
  Sms: "sms",
} as const;
export type AlertActionType1 = (typeof AlertActionType1)[keyof typeof AlertActionType1] | (string & {});

export const alertActionType1Schema: EnumSchema<AlertActionType1> =
  s.enumOf<AlertActionType1>(AlertActionType1);
