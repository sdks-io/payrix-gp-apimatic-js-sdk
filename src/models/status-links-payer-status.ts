import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the payer is new or existing (active). `NEW ` - Payer is newly created.
 * Customer can store the card on the HPP, which is associated with the Payer ID. `ACTIVE `- Payer
 * was created previously. Any payment methods stored with this payer are displayed on the HPP.
 */
export const StatusLinksPayerStatus = {
  New: "NEW",
  Active: "ACTIVE",
} as const;
export type StatusLinksPayerStatus =
  | (typeof StatusLinksPayerStatus)[keyof typeof StatusLinksPayerStatus]
  | (string & {});

export const statusLinksPayerStatusSchema: EnumSchema<StatusLinksPayerStatus> =
  s.enumOf<StatusLinksPayerStatus>(StatusLinksPayerStatus);
