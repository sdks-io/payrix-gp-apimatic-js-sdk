import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityDefault2Schema, type EntityDefault2 } from "./entity-default2.js";
import { entityPlatform2Schema, type EntityPlatform2 } from "./entity-platform2.js";
import { entityRefStage1Schema, type EntityRefStage1 } from "./entity-ref-stage1.js";
import { entityRefStaging1Schema, type EntityRefStaging1 } from "./entity-ref-staging1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type EntityRefsPostRequest = {
  /** The identifier of the Entity that owns this entityRefs resource. */
  entity: string | null;
  /**
   * The identifier of the Member associated with this entityRefs resource. Default value is 'null'
   */
  member: string | null;
  /**
   * The original 'entity_route' that routed the merchant onto the platform which then returned this
   * reference information, if applicable.
   */
  entityRoute?: string | null;
  /**
   * The reference code itself. This field is stored as a text string and must be between 0 and 50
   * characters long.
   */
  ref: string;
  stage: EntityRefStage1;
  staging?: EntityRefStaging1;
  platform: EntityPlatform2;
  currency?: Record<string, unknown>;
  fundingCurrency?: Record<string, unknown>;
  default?: EntityDefault2;
  /** The FBO from which this entity refers to. */
  fbo?: string | null;
  /** A string-JSON of options for this reference value. */
  options?: string | null;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const entityRefsPostRequestSchema: Schema<EntityRefsPostRequest> = s.object<EntityRefsPostRequest>({
  entity: s.nullable(s.string()),
  member: s.nullable(s.string()),
  entityRoute: s.optionalNullable(s.string()),
  ref: s.string(),
  stage: entityRefStage1Schema,
  staging: s.optional(s.lazy(() => entityRefStaging1Schema)),
  platform: entityPlatform2Schema,
  currency: s.optional(s.record(s.string(), s.unknown())),
  fundingCurrency: s.optional(s.record(s.string(), s.unknown())),
  default: s.optional(s.lazy(() => entityDefault2Schema)),
  fbo: s.optionalNullable(s.string()),
  options: s.optionalNullable(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
