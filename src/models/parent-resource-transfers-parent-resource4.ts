import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If the transfer is the result of a split, then the parent resource should be TRANSACTION and a
 * TRN will be provided in the parent_resource_id. If the transfer is a standalone transfer then we
 * will provide TRANSFER in the parent_resource and a TRF will be provide in the parent_resource_id.
 *                         * `TRANSACTION` - indicates the transfer was a split action performed on
 *                           a transaction.
 *                         * `TRANSFER` - indicates that the parent resource was a standalone
 *                           transfer.
 */
export const ParentResourceTransfersParentResource4 = {
  Transaction: "TRANSACTION",
  Transfer: "TRANSFER",
} as const;
export type ParentResourceTransfersParentResource4 =
  | (typeof ParentResourceTransfersParentResource4)[keyof typeof ParentResourceTransfersParentResource4]
  | (string & {});

export const parentResourceTransfersParentResource4Schema: EnumSchema<ParentResourceTransfersParentResource4> =
  s.enumOf<ParentResourceTransfersParentResource4>(ParentResourceTransfersParentResource4);
