import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates what is the authentication value format used.
 * * `PAREQ`
 * * `CREQ`
 */
export const MessageTypeAuthenticationsThreeDsMessageType = {
  Pareq: "PAREQ",
  Creq: "CREQ",
} as const;
export type MessageTypeAuthenticationsThreeDsMessageType =
  | (typeof MessageTypeAuthenticationsThreeDsMessageType)[keyof typeof MessageTypeAuthenticationsThreeDsMessageType]
  | (string & {});

export const messageTypeAuthenticationsThreeDsMessageTypeSchema: EnumSchema<MessageTypeAuthenticationsThreeDsMessageType> =
  s.enumOf<MessageTypeAuthenticationsThreeDsMessageType>(MessageTypeAuthenticationsThreeDsMessageType);
