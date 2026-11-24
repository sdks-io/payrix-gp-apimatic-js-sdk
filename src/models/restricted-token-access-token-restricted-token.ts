import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Masks the account, merchant and app details that is returned in the response to a tokenisation
 * request.
 *   * `YES` - A restricted access token will be created. Restricted access token is used when
 *     integrating with Drop-in UI or Hosted Fields to create a single-use payment token.
 *   * `NO` - A restricted access token will not be created.
 */
export const RestrictedTokenAccessTokenRestrictedToken = {
  Yes: "YES",
  No: "NO",
} as const;
export type RestrictedTokenAccessTokenRestrictedToken =
  | (typeof RestrictedTokenAccessTokenRestrictedToken)[keyof typeof RestrictedTokenAccessTokenRestrictedToken]
  | (string & {});

export const restrictedTokenAccessTokenRestrictedTokenSchema: EnumSchema<RestrictedTokenAccessTokenRestrictedToken> =
  s.enumOf<RestrictedTokenAccessTokenRestrictedToken>(RestrictedTokenAccessTokenRestrictedToken);
