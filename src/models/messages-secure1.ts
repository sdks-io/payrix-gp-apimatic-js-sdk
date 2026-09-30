import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this resource is marked as secure.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Messages will protected in email notifications.**
 *
 * - `1` - **Message will display entirely.**
 *
 * </details>
 */
export const MessagesSecure1 = {
  _0: 0,
  _1: 1,
} as const;
export type MessagesSecure1 = (typeof MessagesSecure1)[keyof typeof MessagesSecure1] | (number & {});

export const messagesSecure1Schema: EnumSchema<MessagesSecure1> = s.enumOf<MessagesSecure1>(MessagesSecure1);
