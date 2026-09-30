import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type EntityTermsPostRequest = {
  /** The identifier of the entity that the terms are associated with. */
  entity?: string;
  /** The type of entity that has accepted the terms. */
  type?: string;
  /** The version of the terms that the entity has accepted. */
  version?: string;
  /** The identifier of the version of the terms that the entity has accepted. */
  versionId?: string;
  /** The IP address of the entity that accepted the terms. */
  ip?: string;
  /**
   * The date and time when the entity accepted the terms. The date is specified as an eight digit
   * string in YYYY-MM-DD hh:mm:ss format, for example, '2023-06-01 01:00:00' for June 01, 2023.
   * 1:00 am.
   */
  dateAccepted?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const entityTermsPostRequestSchema: Schema<EntityTermsPostRequest> = s.object<EntityTermsPostRequest>({
  entity: s.optional(s.string()),
  type: s.optional(s.string()),
  version: s.optional(s.string()),
  versionId: s.optional(s.string()),
  ip: s.optional(s.string()),
  dateAccepted: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
