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
export const MessagesRead1 = {
  _0: 0,
  _1: 1,
} as const;
export type MessagesRead1 = (typeof MessagesRead1)[keyof typeof MessagesRead1] | (number & {});

export const messagesRead1Schema: EnumSchema<MessagesRead1> = s.enumOf<MessagesRead1>(MessagesRead1);
