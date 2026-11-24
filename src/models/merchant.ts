import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { link1InternalSchema, link1Schema, type Link1 } from "./link1.js";
import { statusMerchantsStatusSchema, type StatusMerchantsStatus } from "./status-merchants-status.js";

export type Merchant = {
  /** A unique identifier for the merchant set by Global Payments. */
  id?: string;
  /** This is a label to identify the merchant */
  name?: string;
  /**
   * Indicates where the merchant is in its lifecycle.
   * * `ACTIVE` - The entity is active on the Global Payments platform and can use the capabilities
   *   that are configured and active to payment process. *` INACTIVE` - The entity is disabled on
   *   the Global Payments platform and cannot use any payment processing capabilities.
   *   *`UNDER_REVIEW` - The entity is under review and cannot use any of the payment processing
   *   capabilities until the review is complete and the merchant is switched to active. *`
   *   DECLINED` - The entity did not complete the risk review process and cannot use any payment
   *   processing capabilities.
   *
   *  * `WITH_MERCHAN`T - The entity must submit additional information or documentation before
   *    activation.
   */
  status?: StatusMerchantsStatus;
  /** The organization this merchant is part of. */
  organization?: string;
  /** The industry the merchant is in. */
  industry?: string;
  /** The person or company that is integrating to the platform on behalf of the merchant. */
  integrator?: string;
  /** The hierarchy the primary_mid is part of. */
  hierarchy?: string;
  /** The primary_mid of the merchant. */
  primaryMid?: string;
  /** The region the merchant belongs to. */
  region?: string;
  links?: Link1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const merchantProperties: s.Shape<Merchant> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusMerchantsStatusSchema)),
  organization: s.optional(s.string()),
  industry: s.optional(s.string()),
  integrator: s.optional(s.string()),
  hierarchy: s.optional(s.string()),
  primaryMid: s.optional(s.string()),
  region: s.optional(s.string()),
  links: s.optional(s.array(s.lazy(() => link1InternalSchema))),
  _keysMap: {
    primaryMid: "primary_mid",
  },
};

export const merchantInternalSchema: Schema<Merchant> = s.object<Merchant>(merchantProperties, {
  additionalProperties: s.json(),
});

export const merchantSchema: Schema<Merchant> = s.lazySchema(() =>
  s.object<Merchant>(
    {
      ...merchantProperties,
      id: s.optional(s.string().check(s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      links: s.optional(s.array(s.lazy(() => link1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
