import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessagesSecure = {
  _0: 0,
  _1: 1,
} as const;
export type MessagesSecure = (typeof MessagesSecure)[keyof typeof MessagesSecure] | (number & {});

export const messagesSecureSchema: EnumSchema<MessagesSecure> = s.enumOf<MessagesSecure>(MessagesSecure);
