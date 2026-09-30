import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApiKeyPublic = {
  _0: 0,
  _1: 1,
} as const;
export type ApiKeyPublic = (typeof ApiKeyPublic)[keyof typeof ApiKeyPublic] | (number & {});

export const apiKeyPublicSchema: EnumSchema<ApiKeyPublic> = s.enumOf<ApiKeyPublic>(ApiKeyPublic);
