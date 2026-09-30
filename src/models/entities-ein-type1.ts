import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the TIN being used is an EIN, SSN, or other/unknown number.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `ssn` - **Social Security Number.**
 * - `tin` - **Employer Identification Number.**
 * - `other` - **Other/Unknown TIN.**
 *
 * </details>
 */
export const EntitiesEinType1 = {
  Ssn: "ssn",
  Tin: "tin",
  Other: "other",
} as const;
export type EntitiesEinType1 = (typeof EntitiesEinType1)[keyof typeof EntitiesEinType1] | (string & {});

export const entitiesEinType1Schema: EnumSchema<EntitiesEinType1> =
  s.enumOf<EntitiesEinType1>(EntitiesEinType1);
