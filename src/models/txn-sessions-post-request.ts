import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configurationsSchema, type Configurations } from "./configurations.js";

export type TxnSessionsPostRequest = {
  /**
   * The login under which to perform this action. If you do not supply a login in this field, then
   * the API defaults to the login that is currently authenticated.
   */
  login: string;
  /** The Merchant being used to create this txn session. */
  merchant: string;
  configurations?: Configurations;
};

export const txnSessionsPostRequestSchema: Schema<TxnSessionsPostRequest> = s.object<TxnSessionsPostRequest>({
  login: s.string(),
  merchant: s.string(),
  configurations: s.optional(s.lazy(() => configurationsSchema)),
});
