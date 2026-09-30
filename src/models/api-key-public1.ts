import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this API key should have access to only public resources. Public resources include
 * Transactions, Tokens, Customers, and Items. All other resources are private. <details>
 * <summary>Valid Values</summary>
 *  - `0` - **The key can also access private resources.**
 *  - `1` - **The key can only access public resources.** </details>
 */
export const ApiKeyPublic1 = {
  _0: 0,
  _1: 1,
} as const;
export type ApiKeyPublic1 = (typeof ApiKeyPublic1)[keyof typeof ApiKeyPublic1] | (number & {});

export const apiKeyPublic1Schema: EnumSchema<ApiKeyPublic1> = s.enumOf<ApiKeyPublic1>(ApiKeyPublic1);
