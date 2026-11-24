import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { relMerchantsLinksRel3Schema, type RelMerchantsLinksRel3 } from "./rel-merchants-links-rel3.js";

export type Link1 = {
  /**
   * Describes the relationship the associated link href value has to the current resource.
   * * `SELF`- indicates a link to the current resource.
   *
   * * `ACCOUNTS` - indicates a link to the current resource's list of accounts
   */
  rel?: RelMerchantsLinksRel3;
  /**
   * An href link to the resources or resource actions as indicated in the corresponding rel value.
   */
  href?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const link1Properties: s.Shape<Link1> = {
  rel: s.optional(s.lazy(() => relMerchantsLinksRel3Schema)),
  href: s.optional(s.string()),
};

export const link1InternalSchema: Schema<Link1> = s.object<Link1>(link1Properties, {
  additionalProperties: s.json(),
});

export const link1Schema: Schema<Link1> = s.lazySchema(() =>
  s.object<Link1>(
    {
      ...link1Properties,
      href: s.optional(s.string().check(s.maxLength(2048))),
    },
    { additionalProperties: s.json() },
  ),
);
