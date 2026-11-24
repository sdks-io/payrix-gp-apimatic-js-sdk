import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes the relationship the associated link href value has to the current resource.
 * * `SELF`- indicates a link to the current resource.
 *
 * * `ACCOUNTS` - indicates a link to the current resource's list of accounts
 */
export const RelMerchantsLinksRel3 = {
  Self: "SELF",
  Accounts: "ACCOUNTS",
} as const;
export type RelMerchantsLinksRel3 =
  | (typeof RelMerchantsLinksRel3)[keyof typeof RelMerchantsLinksRel3]
  | (string & {});

export const relMerchantsLinksRel3Schema: EnumSchema<RelMerchantsLinksRel3> =
  s.enumOf<RelMerchantsLinksRel3>(RelMerchantsLinksRel3);
