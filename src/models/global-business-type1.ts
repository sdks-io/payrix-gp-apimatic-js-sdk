import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The business registration type for the entity
 *
 * <details> <summary>Valid Values for country USA</summary>
 *
 * - `ssn` - **Social Security Number.**
 * - `tin` - **Employer Identification Number.**
 * - `other` - **Other/Unknown TIN.** </details> <details> <summary>Valid Values for country
 *   Canada</summary>
 *
 * - `CD` - **Federal**
 * - `AB` - **Alberta**
 * - `BC` - **British Columbia**
 * - `MB` - **Manitoba**
 * - `NB` - **New Brunswick**
 * - `NL` - **Newfoundland and Labrador**
 * - `NT` - **Northwest Territories**
 * - `NS` - **Nova Scotia**
 * - `NU` - **Nunavut**
 * - `ON` - **Ontario**
 * - `PE` - **Prince Edward Island**
 * - `QC` - **Quebec**
 * - `SK` - **Saskatchewan**
 * - `YT` - **Yukon**
 *
 * </details>
 */
export const GlobalBusinessType1 = {
  Ssn: "ssn",
  Tin: "tin",
  Other: "other",
  Cd: "CD",
  Ab: "AB",
  Bc: "BC",
  Mb: "MB",
  Nb: "NB",
  Nl: "NL",
  Nt: "NT",
  Ns: "NS",
  Nu: "NU",
  On: "ON",
  Pe: "PE",
  Qc: "QC",
  Sk: "SK",
  Yt: "YT",
} as const;
export type GlobalBusinessType1 =
  | (typeof GlobalBusinessType1)[keyof typeof GlobalBusinessType1]
  | (string & {});

export const globalBusinessType1Schema: EnumSchema<GlobalBusinessType1> =
  s.enumOf<GlobalBusinessType1>(GlobalBusinessType1);
