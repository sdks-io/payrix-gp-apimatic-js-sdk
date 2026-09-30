import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "./accounts-response.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { statementEntitySchema, type StatementEntity } from "./statement-entity.js";

export type Subscription = {
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
  plan?: AccountsResponse;
  statementEntity?: StatementEntity;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  plan: s.optional(s.lazy(() => accountsResponseSchema)),
  statementEntity: s.optional(s.lazy(() => statementEntitySchema)),
});
