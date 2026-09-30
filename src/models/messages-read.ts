import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessagesRead = {
  _0: 0,
  _1: 1,
} as const;
export type MessagesRead = (typeof MessagesRead)[keyof typeof MessagesRead] | (number & {});

export const messagesReadSchema: EnumSchema<MessagesRead> = s.enumOf<MessagesRead>(MessagesRead);
