import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  schemaObjectsV1ActionInternalSchema,
  schemaObjectsV1ActionSchema,
  type SchemaObjectsV1Action,
} from "./schema-objects-v1-action.js";
import { schemaObjectsV1FilterSchema, type SchemaObjectsV1Filter } from "./schema-objects-v1-filter.js";
import {
  schemaObjectsV1PagingInternalSchema,
  schemaObjectsV1PagingSchema,
  type SchemaObjectsV1Paging,
} from "./schema-objects-v1-paging.js";
import { account1InternalSchema, account1Schema, type Account1 } from "./unions/account1.js";

export type AccountsList = {
  /**
   * The total number of records across all pages for the search filter. When searching for a
   * collection of resoures, this is returned on the first page only and when the date range is a
   * month or less.
   *
   * @default 1
   */
  totalRecordCount?: number;
  /**
   * The total number of records returned on the current page. If current_page_size is less than the
   * page_size using in the querystring then this is the final page for that search.
   *
   * @default 1
   */
  currentPageSize?: number;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** A meaningful label for the merchant set by Global Payments. */
  merchantName?: string;
  /**
   * Indicates what fields and values used to filter the current list of resource objects in the
   * current response.
   */
  filter?: SchemaObjectsV1Filter;
  /** The paging values used to generate this response. */
  paging?: SchemaObjectsV1Paging;
  /** A list of Account records. */
  accounts?: Account1[];
  /** Information about the Action executed. */
  action?: SchemaObjectsV1Action;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountsListProperties: s.Shape<AccountsList> = {
  totalRecordCount: s.defaulted(s.float64(), 1),
  currentPageSize: s.defaulted(s.float64(), 1),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => schemaObjectsV1FilterSchema)),
  paging: s.optional(s.lazy(() => schemaObjectsV1PagingInternalSchema)),
  accounts: s.optional(s.array(s.lazy(() => account1InternalSchema))),
  action: s.optional(s.lazy(() => schemaObjectsV1ActionInternalSchema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
  },
};

export const accountsListInternalSchema: Schema<AccountsList> = s.object<AccountsList>(
  accountsListProperties,
  { additionalProperties: s.json() },
);

export const accountsListSchema: Schema<AccountsList> = s.lazySchema(() =>
  s.object<AccountsList>(
    {
      ...accountsListProperties,
      totalRecordCount: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 1),
      currentPageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 1),
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paging: s.optional(s.lazy(() => schemaObjectsV1PagingSchema)),
      accounts: s.optional(s.array(s.lazy(() => account1Schema))),
      action: s.optional(s.lazy(() => schemaObjectsV1ActionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
