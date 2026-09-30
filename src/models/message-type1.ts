import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this resource is incoming or outgoing.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `incoming` - **Incoming messages is assigned.**
 *
 * - `outgoing` - **Outgoing message is assigned.**
 *
 * </details>
 */
export const MessageType1 = {
  Incoming: "incoming",
  Outgoing: "outgoing",
} as const;
export type MessageType1 = (typeof MessageType1)[keyof typeof MessageType1] | (string & {});

export const messageType1Schema: EnumSchema<MessageType1> = s.enumOf<MessageType1>(MessageType1);
