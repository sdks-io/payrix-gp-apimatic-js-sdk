import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entity12Schema, type Entity12 } from "./entity12.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "./pending-entries-response.js";
import { toentitySchema, type Toentity } from "./toentity.js";

export type EntityDebt = {
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
  entity?: Entity12;
  toentity?: Toentity;
  pendingEntries?: PendingEntriesResponse[];
};

export const entityDebtSchema: Schema<EntityDebt> = s.object<EntityDebt>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity12Schema)),
  toentity: s.optional(s.lazy(() => toentitySchema)),
  pendingEntries: s.optional(s.array(s.lazy(() => pendingEntriesResponseSchema))),
});
