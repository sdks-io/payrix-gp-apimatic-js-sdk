import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this resource was automatically generated or not.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Message was automatically generated and a value of '0' means it was manually
 *   generated.**
 *
 * - `1` - **Message was manually generated.**
 *
 * </details>
 */
export const MessagesGenerated1 = {
  _0: 0,
  _1: 1,
} as const;
export type MessagesGenerated1 = (typeof MessagesGenerated1)[keyof typeof MessagesGenerated1] | (number & {});

export const messagesGenerated1Schema: EnumSchema<MessagesGenerated1> =
  s.enumOf<MessagesGenerated1>(MessagesGenerated1);
