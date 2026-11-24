import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Acquiring data used to identify a merchant when other systems are used by the merchant to payment
 * process.
 */
export type SystemSettlementReporting = {
  /** Merchant Identifier from the platform. */
  mid?: string;
  /** Merchant device or point of integration Identifier from the platform. */
  tid?: string;
  /**
   * Identifies the location of a merchant within the merchant's corporate structure on the
   * platform.
   */
  hierarchy?: string;
  /** The merchant name that exists on the platform. */
  name?: string;
  /** The alternate merchant name or doing business as name, that exists on the platform. */
  dba?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const systemSettlementReportingProperties: s.Shape<SystemSettlementReporting> = {
  mid: s.optional(s.string()),
  tid: s.optional(s.string()),
  hierarchy: s.optional(s.string()),
  name: s.optional(s.string()),
  dba: s.optional(s.string()),
};

export const systemSettlementReportingInternalSchema: Schema<SystemSettlementReporting> =
  s.object<SystemSettlementReporting>(systemSettlementReportingProperties, {
    additionalProperties: s.json(),
  });

export const systemSettlementReportingSchema: Schema<SystemSettlementReporting> = s.lazySchema(() =>
  s.object<SystemSettlementReporting>(
    {
      ...systemSettlementReportingProperties,
      mid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      tid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      hierarchy: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dba: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
