import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action28InternalSchema, action28Schema, type Action28 } from "./action28.js";
import { fileSchema, type File } from "./file.js";
import { filter5Schema, type Filter5 } from "./filter5.js";
import { paging17Schema, type Paging17 } from "./paging17.js";

/**
 * Response returned by `GET /files` containing a paginated list of File Processing resources for
 * the merchant, along with the paging state and filter values used for the search.
 */
export type ListFilesResponse2 = {
  /** The total number of file resources that match the search criteria across all pages. */
  totalRecordCount?: number;
  /** The number of file resources returned on the current page. */
  currentPageSize?: number;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** A meaningful label that better identifies the merchant. */
  merchantName?: string;
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /** A meaningful label that better identifies the account. */
  accountName?: string;
  /** The filter values that were applied to the search. */
  filter?: Filter5;
  /** The paging state applied to the search. */
  paging?: Paging17;
  /** The list of File Processing resources returned for the current page. */
  files?: File[];
  /** Information about the specific action performed on the platform for this resource. */
  action?: Action28;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listFilesResponse2Properties: s.Shape<ListFilesResponse2> = {
  totalRecordCount: s.optional(s.int()),
  currentPageSize: s.optional(s.int()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter5Schema)),
  paging: s.optional(s.lazy(() => paging17Schema)),
  files: s.optional(s.array(s.lazy(() => fileSchema))),
  action: s.optional(s.lazy(() => action28InternalSchema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const listFilesResponse2InternalSchema: Schema<ListFilesResponse2> = s.object<ListFilesResponse2>(
  listFilesResponse2Properties,
  { additionalProperties: s.json() },
);

export const listFilesResponse2Schema: Schema<ListFilesResponse2> = s.lazySchema(() =>
  s.object<ListFilesResponse2>(
    {
      ...listFilesResponse2Properties,
      action: s.optional(s.lazy(() => action28Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
