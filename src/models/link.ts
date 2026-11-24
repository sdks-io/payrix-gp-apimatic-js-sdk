import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataDictionaryV1LinkRelSchema,
  type DataDictionaryV1LinkRel,
} from "./data-dictionary-v1-link-rel.js";

export type Link = {
  /**
   * Describes the relationship the associated link href value has to the current resource.
   *   * SELF - indicates a link to the current resource.
   *   * ACCOUNTS - indicates a link to the current resource's list of accounts.
   */
  rel?: DataDictionaryV1LinkRel;
  /**
   * A href link to the resources or resource actions as indicated in the corresponding rel value.
   */
  href?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const linkProperties: s.Shape<Link> = {
  rel: s.optional(s.lazy(() => dataDictionaryV1LinkRelSchema)),
  href: s.optional(s.string()),
};

export const linkInternalSchema: Schema<Link> = s.object<Link>(linkProperties, {
  additionalProperties: s.json(),
});

export const linkSchema: Schema<Link> = s.lazySchema(() =>
  s.object<Link>(
    {
      ...linkProperties,
      href: s.optional(s.string().check(s.minLength(0), s.maxLength(2048))),
    },
    { additionalProperties: s.json() },
  ),
);
