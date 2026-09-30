import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes the action code related to the return.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `unknown` - **Unknown reason**
 * - `nsf` - **Non-sufficient funds**
 * - `badAccount` - **Bad Account Info**
 * - `unauthorized` - **Unauthorized Transaction**
 *
 * </details>
 */
export const EntityReturnsActionCode1 = {
  Unknown: "unknown",
  Nsf: "nsf",
  BadAccount: "badAccount",
  Unauthorized: "unauthorized",
} as const;
export type EntityReturnsActionCode1 =
  | (typeof EntityReturnsActionCode1)[keyof typeof EntityReturnsActionCode1]
  | (string & {});

export const entityReturnsActionCode1Schema: EnumSchema<EntityReturnsActionCode1> =
  s.enumOf<EntityReturnsActionCode1>(EntityReturnsActionCode1);
