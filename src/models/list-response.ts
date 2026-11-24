import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action13InternalSchema, action13Schema, type Action13 } from "./action13.js";
import {
  authenticationsInternalSchema,
  authenticationsSchema,
  type Authentications,
} from "./authentications.js";
import { filter1Schema, type Filter1 } from "./filter1.js";
import { paging3InternalSchema, paging3Schema, type Paging3 } from "./paging3.js";

export type ListResponse = {
  /**
   * The total number of records returned on the current page. If current_page_size is less than the
   * page_size using in the querystring then this is the final page for that search.
   */
  currentPageSize?: number;
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific merchant. Begins with the three letters,
   * MER.
   */
  merchantId?: string;
  /** A meaningful label that better identifies the merchant. */
  merchantName?: string;
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific account. Begins with the three letters,
   * TRA.
   */
  accountId?: string;
  /** A meaningful label that better identifies the account. */
  accountName?: string;
  filter?: Filter1;
  paging?: Paging3;
  authentications?: Authentications;
  action?: Action13;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listResponseProperties: s.Shape<ListResponse> = {
  currentPageSize: s.optional(s.float64()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  filter: s.optional(s.lazy(() => filter1Schema)),
  paging: s.optional(s.lazy(() => paging3InternalSchema)),
  authentications: s.optional(s.lazy(() => authenticationsInternalSchema)),
  action: s.optional(s.lazy(() => action13InternalSchema)),
  _keysMap: {
    currentPageSize: "current_page_size",
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
  },
};

export const listResponseInternalSchema: Schema<ListResponse> = s.object<ListResponse>(
  listResponseProperties,
  { additionalProperties: s.json() },
);

export const listResponseSchema: Schema<ListResponse> = s.lazySchema(() =>
  s.object<ListResponse>(
    {
      ...listResponseProperties,
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paging: s.optional(s.lazy(() => paging3Schema)),
      authentications: s.optional(s.lazy(() => authenticationsSchema)),
      action: s.optional(s.lazy(() => action13Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
