import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessagesReadStr = {
  _0: "0",
  _1: "1",
} as const;
export type MessagesReadStr = (typeof MessagesReadStr)[keyof typeof MessagesReadStr] | (string & {});

export const messagesReadStrSchema: EnumSchema<MessagesReadStr> = s.enumOf<MessagesReadStr>(MessagesReadStr);
