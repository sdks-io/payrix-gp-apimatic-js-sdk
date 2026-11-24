import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes the relationship the associated link href value has to the current resource.
 *   * SELF - indicates a link to the current resource.
 *   * ACCOUNTS - indicates a link to the current resource's list of accounts.
 */
export const DataDictionaryV1LinkRel = {
  Self: "SELF",
  Accounts: "ACCOUNTS",
} as const;
export type DataDictionaryV1LinkRel =
  | (typeof DataDictionaryV1LinkRel)[keyof typeof DataDictionaryV1LinkRel]
  | (string & {});

export const dataDictionaryV1LinkRelSchema: EnumSchema<DataDictionaryV1LinkRel> =
  s.enumOf<DataDictionaryV1LinkRel>(DataDictionaryV1LinkRel);
