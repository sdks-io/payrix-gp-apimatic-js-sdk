import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this resource is marked as read.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Message has not been read yet.**
 *
 * - `1` - **Message has been read and a value.**
 *
 * </details>
 */
export const MessagesReadStr2 = {
  _0: "0",
  _1: "1",
} as const;
export type MessagesReadStr2 = (typeof MessagesReadStr2)[keyof typeof MessagesReadStr2] | (string & {});

export const messagesReadStr2Schema: EnumSchema<MessagesReadStr2> =
  s.enumOf<MessagesReadStr2>(MessagesReadStr2);
