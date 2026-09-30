import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { merchant5Schema, type Merchant5 } from "./merchant5.js";
import { tokenResultsCode2Schema, type TokenResultsCode2 } from "./token-results-code2.js";
import { token1Schema, type Token1 } from "./token1.js";
import { txn1Schema, type Txn1 } from "./txn1.js";

export type TokenResultsResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  txn?: Txn1;
  token?: Token1;
  merchant?: Merchant5;
  code?: TokenResultsCode2;
  /** The omniToken value. */
  omniToken?: string;
};

export const tokenResultsResponseSchema: Schema<TokenResultsResponse> = s.object<TokenResultsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  txn: s.optional(s.lazy(() => txn1Schema)),
  token: s.optional(s.lazy(() => token1Schema)),
  merchant: s.optional(s.lazy(() => merchant5Schema)),
  code: s.optional(s.lazy(() => tokenResultsCode2Schema)),
  omniToken: s.optional(s.string()),
});
