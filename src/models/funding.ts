import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entityDefault2Schema, type EntityDefault2 } from "./entity-default2.js";
import { entityPlatform2Schema, type EntityPlatform2 } from "./entity-platform2.js";
import { entityRefStage1Schema, type EntityRefStage1 } from "./entity-ref-stage1.js";
import { entityRefStaging1Schema, type EntityRefStaging1 } from "./entity-ref-staging1.js";
import { entityRoutesResponseSchema, type EntityRoutesResponse } from "./entity-routes-response.js";
import { entity13Schema, type Entity13 } from "./entity13.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { memberSchema, type Member } from "./member.js";

export type Funding = {
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
  entity?: Entity13;
  member?: Member;
  entityRoute?: EntityRoutesResponse;
  /**
   * The reference code itself. This field is stored as a text string and must be between 0 and 50
   * characters long.
   */
  ref?: string;
  stage?: EntityRefStage1;
  staging?: EntityRefStaging1;
  platform?: EntityPlatform2;
  currency?: Record<string, unknown>;
  fundingCurrency?: Record<string, unknown>;
  /** A string-JSON of options for this reference value. */
  options?: string;
  default?: EntityDefault2;
  /** The FBO from which this entity refers to. */
  fbo?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const fundingSchema: Schema<Funding> = s.object<Funding>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity13Schema)),
  member: s.optional(s.lazy(() => memberSchema)),
  entityRoute: s.optional(s.lazy(() => entityRoutesResponseSchema)),
  ref: s.optional(s.string()),
  stage: s.optional(s.lazy(() => entityRefStage1Schema)),
  staging: s.optional(s.lazy(() => entityRefStaging1Schema)),
  platform: s.optional(s.lazy(() => entityPlatform2Schema)),
  currency: s.optional(s.record(s.string(), s.unknown())),
  fundingCurrency: s.optional(s.record(s.string(), s.unknown())),
  options: s.optional(s.string()),
  default: s.optional(s.lazy(() => entityDefault2Schema)),
  fbo: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
