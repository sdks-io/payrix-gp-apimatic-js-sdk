import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  accountsSingleBackofficeListInternalSchema,
  accountsSingleBackofficeListSchema,
  type AccountsSingleBackofficeList,
} from "../accounts-single-backoffice-list.js";
import {
  accountsSingleBackofficeInternalSchema,
  accountsSingleBackofficeSchema,
  type AccountsSingleBackoffice,
} from "../accounts-single-backoffice.js";
import {
  accountsSingleFundmanagementInternalSchema,
  accountsSingleFundmanagementSchema,
  type AccountsSingleFundmanagement,
} from "../accounts-single-fundmanagement.js";
import {
  accountsSingleTransactionProcessingInternalSchema,
  accountsSingleTransactionProcessingSchema,
  type AccountsSingleTransactionProcessing,
} from "../accounts-single-transaction-processing.js";

export type AccountsResponse2 =
  | AccountsSingleTransactionProcessing
  | AccountsSingleBackoffice
  | AccountsSingleBackofficeList
  | AccountsSingleFundmanagement;

export const accountsResponse2InternalSchema: Schema<AccountsResponse2> = s.of<AccountsResponse2>(
  s.union([
    s.lazy(() => accountsSingleTransactionProcessingInternalSchema),
    s.lazy(() => accountsSingleBackofficeInternalSchema),
    s.lazy(() => accountsSingleBackofficeListInternalSchema),
    s.lazy(() => accountsSingleFundmanagementInternalSchema),
  ]),
);

export const accountsResponse2Schema: Schema<AccountsResponse2> = s.lazySchema(() =>
  s.of<AccountsResponse2>(
    s.union([
      s.lazy(() => accountsSingleTransactionProcessingSchema),
      s.lazy(() => accountsSingleBackofficeSchema),
      s.lazy(() => accountsSingleBackofficeListSchema),
      s.lazy(() => accountsSingleFundmanagementSchema),
    ]),
  ),
);
