import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TokenStatus = {
  Pending: "pending",
  Ready: "ready",
} as const;
export type TokenStatus = (typeof TokenStatus)[keyof typeof TokenStatus] | (string & {});

export const tokenStatusSchema: EnumSchema<TokenStatus> = s.enumOf<TokenStatus>(TokenStatus);
