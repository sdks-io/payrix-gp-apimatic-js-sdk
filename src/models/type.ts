import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of token created.
 *   * `Bearer` - Indicates that the holder or bearer of this access token can access the API.
 */
export const Type = {
  Bearer: "Bearer",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
