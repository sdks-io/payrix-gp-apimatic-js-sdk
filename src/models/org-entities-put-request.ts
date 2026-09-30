import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrgEntitiesPutRequest = {
  /** The identifier of the Org that this orgEntity is associated with. */
  org: string;
  /** The identifier of the Entity that this orgEntity is associated with. */
  entity: string;
};

export const orgEntitiesPutRequestSchema: Schema<OrgEntitiesPutRequest> = s.object<OrgEntitiesPutRequest>({
  org: s.string(),
  entity: s.string(),
});
