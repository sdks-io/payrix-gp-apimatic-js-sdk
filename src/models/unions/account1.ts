import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  accountsSingleBackofficeListInternalSchema,
  accountsSingleBackofficeListSchema,
  type AccountsSingleBackofficeList,
} from "../accounts-single-backoffice-list.js";
import {
  accountsTransactionProcessingListInternalSchema,
  accountsTransactionProcessingListSchema,
  type AccountsTransactionProcessingList,
} from "../accounts-transaction-processing-list.js";

export type Account1 = AccountsTransactionProcessingList | AccountsSingleBackofficeList;

export const account1InternalSchema: Schema<Account1> = s.of<Account1>(
  s.union([
    s.lazy(() => accountsTransactionProcessingListInternalSchema),
    s.lazy(() => accountsSingleBackofficeListInternalSchema),
  ]),
);

export const account1Schema: Schema<Account1> = s.lazySchema(() =>
  s.of<Account1>(
    s.union([
      s.lazy(() => accountsTransactionProcessingListSchema),
      s.lazy(() => accountsSingleBackofficeListSchema),
    ]),
  ),
);
