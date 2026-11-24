import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action112InternalSchema, action112Schema, type Action112 } from "./action112.js";
import { filter1Schema, type Filter1 } from "./filter1.js";
import { link3InternalSchema, link3Schema, type Link3 } from "./link3.js";
import { paging3InternalSchema, paging3Schema, type Paging3 } from "./paging3.js";

export type LinksResponse = {
  /**
   * The total number of records across all pages for the search filter. When searching for a
   * collection of resources, this is returned on the first page only and when the date range is a
   * month or less.
   */
  totalRecordCount?: number;
  /**
   * The total number of records returned on the current page. If current_page_size is less than the
   * page_size using in the querystring then this is the final page for that search.
   */
  currentPageSize?: number;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** A meaningful label for the merchant set by Global Payments. */
  merchantName?: string;
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  filter?: Filter1;
  paging?: Paging3;
  links?: Link3[];
  action?: Action112;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const linksResponseProperties: s.Shape<LinksResponse> = {
  totalRecordCount: s.optional(s.float64()),
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter1Schema)),
  paging: s.optional(s.lazy(() => paging3InternalSchema)),
  links: s.optional(s.array(s.lazy(() => link3InternalSchema))),
  action: s.optional(s.lazy(() => action112InternalSchema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const linksResponseInternalSchema: Schema<LinksResponse> = s.object<LinksResponse>(
  linksResponseProperties,
  { additionalProperties: s.json() },
);

export const linksResponseSchema: Schema<LinksResponse> = s.lazySchema(() =>
  s.object<LinksResponse>(
    {
      ...linksResponseProperties,
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paging: s.optional(s.lazy(() => paging3Schema)),
      links: s.optional(s.array(s.lazy(() => link3Schema))),
      action: s.optional(s.lazy(() => action112Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
