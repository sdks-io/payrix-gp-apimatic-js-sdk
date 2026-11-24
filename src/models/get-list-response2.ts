import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action20InternalSchema, action20Schema, type Action20 } from "./action20.js";
import { consentInternalSchema, consentSchema, type Consent } from "./consent.js";
import { filter1Schema, type Filter1 } from "./filter1.js";
import { paging3InternalSchema, paging3Schema, type Paging3 } from "./paging3.js";

export type GetListResponse2 = {
  /**
   * The total number of records across all pages for the search filter. When searching for a
   * collection of resoures, this is returned on the first page only and when the date range is a
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
  /** The merchant name of the account that sent the transfer. */
  merchantName?: string;
  /**
   * A unique identifier that is used to identify and reference an instance of the resource which
   * would would hold the permission and configuration to perform the action. Example TRA_uid
   */
  accountId?: string;
  /** A meaningful label that better identifies the GPAPI account. */
  accountName?: string;
  filter?: Filter1;
  paging?: Paging3;
  consents?: Consent[];
  action?: Action20;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const getListResponse2Properties: s.Shape<GetListResponse2> = {
  totalRecordCount: s.optional(s.float64()),
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter1Schema)),
  paging: s.optional(s.lazy(() => paging3InternalSchema)),
  consents: s.optional(s.array(s.lazy(() => consentInternalSchema))),
  action: s.optional(s.lazy(() => action20InternalSchema)),
  _keysMap: {
    totalRecordCount: "total_record_count",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const getListResponse2InternalSchema: Schema<GetListResponse2> = s.object<GetListResponse2>(
  getListResponse2Properties,
  { additionalProperties: s.json() },
);

export const getListResponse2Schema: Schema<GetListResponse2> = s.lazySchema(() =>
  s.object<GetListResponse2>(
    {
      ...getListResponse2Properties,
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paging: s.optional(s.lazy(() => paging3Schema)),
      consents: s.optional(s.array(s.lazy(() => consentSchema))),
      action: s.optional(s.lazy(() => action20Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
