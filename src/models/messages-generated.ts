import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessagesGenerated = {
  _0: 0,
  _1: 1,
} as const;
export type MessagesGenerated = (typeof MessagesGenerated)[keyof typeof MessagesGenerated] | (number & {});

export const messagesGeneratedSchema: EnumSchema<MessagesGenerated> =
  s.enumOf<MessagesGenerated>(MessagesGenerated);
