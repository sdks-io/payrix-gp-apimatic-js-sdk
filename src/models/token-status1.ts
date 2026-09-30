import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if this token is ready for use in transactions and subscriptions or not. A token
 * without complete payment details will be marked as 'pending'.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `pending` - **The payment data is not yet available, Token is not ready for use.**
 *
 * - `ready` - **The payment data is available, Token is ready for use.**
 *
 * </details>
 */
export const TokenStatus1 = {
  Pending: "pending",
  Ready: "ready",
} as const;
export type TokenStatus1 = (typeof TokenStatus1)[keyof typeof TokenStatus1] | (string & {});

export const tokenStatus1Schema: EnumSchema<TokenStatus1> = s.enumOf<TokenStatus1>(TokenStatus1);
