import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes if the user can use the Plaid Wrapper Microservice or not <details> <summary>Valid
 * Values</summary>
 *
 *   - `0` - **No.**
 *   - `1` - **Yes.** </details>
 */
export const DivisionsCanUsePlaidWrapperMicroservice2 = {
  _0: 0,
  _1: 1,
} as const;
export type DivisionsCanUsePlaidWrapperMicroservice2 =
  | (typeof DivisionsCanUsePlaidWrapperMicroservice2)[keyof typeof DivisionsCanUsePlaidWrapperMicroservice2]
  | (number & {});

export const divisionsCanUsePlaidWrapperMicroservice2Schema: EnumSchema<DivisionsCanUsePlaidWrapperMicroservice2> =
  s.enumOf<DivisionsCanUsePlaidWrapperMicroservice2>(DivisionsCanUsePlaidWrapperMicroservice2);
