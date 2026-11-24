import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action100InternalSchema, action100Schema, type Action100 } from "./action100.js";
import { dccBinRangeSchema, type DccBinRange } from "./dcc-bin-range.js";
import { filter24InternalSchema, filter24Schema, type Filter24 } from "./filter24.js";
import { isLastPageSchema, type IsLastPage } from "./is-last-page.js";

export type CurrencyConversionsDccBinRangesResponse = {
  /** Global Payments time indicating when the object was created in ISO-8601 format. */
  timeCreated?: Date;
  /** Indicates whether there are more pages of BIN ranges available. */
  isLastPage?: IsLastPage;
  /**
   * Date the BIN ranges were obtained. For subsequent requests if this date is provided, only
   * updates after this date will be returned.
   */
  timeRetrieved?: string;
  /**
   * The current index of the BIN table that has been returned. Can be used to obtain the next set
   * of values by passing it as a search parameter in last_index.
   */
  currentIndex?: number;
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
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  /** Standard paging is not supported for this request type. */
  paging?: Record<string, unknown>;
  filter?: Filter24;
  dccBinRanges?: DccBinRange[];
  action?: Action100;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const currencyConversionsDccBinRangesResponseProperties: s.Shape<CurrencyConversionsDccBinRangesResponse> = {
  timeCreated: s.optional(s.dateTime()),
  isLastPage: s.optional(s.lazy(() => isLastPageSchema)),
  timeRetrieved: s.optional(s.string()),
  currentIndex: s.optional(s.float64()),
  currentPageSize: s.defaulted(s.float64(), 1),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  paging: s.optional(s.record(s.string(), s.unknown())),
  filter: s.optional(s.lazy(() => filter24InternalSchema)),
  dccBinRanges: s.optional(s.array(s.lazy(() => dccBinRangeSchema))),
  action: s.optional(s.lazy(() => action100InternalSchema)),
  _keysMap: {
    timeCreated: "time_created",
    isLastPage: "is_last_page",
    timeRetrieved: "time_retrieved",
    currentIndex: "current_index",
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
    dccBinRanges: "dcc_bin_ranges",
  },
};

export const currencyConversionsDccBinRangesResponseInternalSchema: Schema<CurrencyConversionsDccBinRangesResponse> =
  s.object<CurrencyConversionsDccBinRangesResponse>(currencyConversionsDccBinRangesResponseProperties, {
    additionalProperties: s.json(),
  });

export const currencyConversionsDccBinRangesResponseSchema: Schema<CurrencyConversionsDccBinRangesResponse> =
  s.lazySchema(() =>
    s.object<CurrencyConversionsDccBinRangesResponse>(
      {
        ...currencyConversionsDccBinRangesResponseProperties,
        currentPageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 1),
        merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        filter: s.optional(s.lazy(() => filter24Schema)),
        dccBinRanges: s.optional(
          s.array(s.lazy(() => dccBinRangeSchema)).check(s.minLength(1), s.uniqueItems()),
        ),
        action: s.optional(s.lazy(() => action100Schema)),
      },
      { additionalProperties: s.json() },
    ),
  );
