import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The NAICS sector code that accurately describes the industry the business operates in.
 *
 * For more information, see the [NAICS Manual provided by the US Census Bureau's North American
 * Industry Classification
 * System.](https://www.census.gov/naics/reference_files_tools/2022_NAICS_Manual.pdf)
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `11` - **Agriculture, Forestry, Fishing and Hunting**
 * - `21` - **Mining, Quarrying, and Oil and Gas Extraction**
 * - `22` - **Utilities**
 * - `23` - **Construction**
 * - `31` / `33` - **Manufacturing**
 * - `41` - **Wholesale Trade**
 * - `44` / `45` - **Retail Trade**
 * - `48` / `49` - **Transportation and Warehousing**
 * - `51` - **Information**
 * - `52` - **Finance and Insurance**
 * - `53` - **Real Estate and Property Rental / Leasing**
 * - `54` - **Professional, Scientific, and Technical Services**
 * - `55` - **Management of Companies and Enterprises**
 * - `56` - **Administrative and Support and Waste Management and Remediation Services**
 * - `61` - **Educational Services**
 * - `62` - **Health Care and Social Assistance**
 * - `71` - **Arts, Entertainment, and Recreation**
 * - `72` - **Accommodation and Food Services**
 * - `81` - **Other Services (except Public Administration)**
 * - `91` / `92` - **Public Administration**
 *
 * </details>
 */
export const MerchantsNaics1 = {
  _11: "11",
  _21: "21",
  _22: "22",
  _23: "23",
  _3133: "31-33",
  _41: "41",
  _4445: "44-45",
  _4849: "48-49",
  _51: "51",
  _52: "52",
  _53: "53",
  _54: "54",
  _55: "55",
  _56: "56",
  _61: "61",
  _62: "62",
  _71: "71",
  _72: "72",
  _81: "81",
  _9192: "91/92",
} as const;
export type MerchantsNaics1 = (typeof MerchantsNaics1)[keyof typeof MerchantsNaics1] | (string & {});

export const merchantsNaics1Schema: EnumSchema<MerchantsNaics1> = s.enumOf<MerchantsNaics1>(MerchantsNaics1);
