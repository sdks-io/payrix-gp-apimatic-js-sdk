import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApikeysToken = {
  _0: 0,
  _1: 1,
} as const;
export type ApikeysToken = (typeof ApikeysToken)[keyof typeof ApikeysToken] | (number & {});

export const apikeysTokenSchema: EnumSchema<ApikeysToken> = s.enumOf<ApikeysToken>(ApikeysToken);
