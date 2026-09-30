import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { division3Schema, type Division3 } from "./division3.js";
import { entityDefault2Schema, type EntityDefault2 } from "./entity-default2.js";
import { entityPlatform2Schema, type EntityPlatform2 } from "./entity-platform2.js";
import { entityRefsResponseSchema, type EntityRefsResponse } from "./entity-refs-response.js";
import {
  entityRoutesFundingCurrency2Schema,
  type EntityRoutesFundingCurrency2,
} from "./entity-routes-funding-currency2.js";
import { entity28Schema, type Entity28 } from "./entity28.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { orgsResponseSchema, type OrgsResponse } from "./orgs-response.js";
import { partitionsResponseSchema, type PartitionsResponse } from "./partitions-response.js";

export type EntityRoutesResponse = {
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
  login?: Login2;
  division?: Division3;
  entity?: Entity28;
  org?: OrgsResponse;
  partition?: PartitionsResponse;
  platform?: EntityPlatform2;
  currency?: Record<string, unknown>;
  fundingCurrency?: EntityRoutesFundingCurrency2;
  /** Whether to disable ACH. This is a JSON field. Accepted values are {"eCheckDisabled": true}. */
  options?: string;
  default?: EntityDefault2;
  inactive?: Inactive1;
  frozen?: Frozen1;
  entityRefs?: EntityRefsResponse[];
};

export const entityRoutesResponseSchema: Schema<EntityRoutesResponse> = s.object<EntityRoutesResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  division: s.optional(s.lazy(() => division3Schema)),
  entity: s.optional(s.lazy(() => entity28Schema)),
  org: s.optional(s.lazy(() => orgsResponseSchema)),
  partition: s.optional(s.lazy(() => partitionsResponseSchema)),
  platform: s.optional(s.lazy(() => entityPlatform2Schema)),
  currency: s.optional(s.record(s.string(), s.unknown())),
  fundingCurrency: s.optional(s.lazy(() => entityRoutesFundingCurrency2Schema)),
  options: s.optional(s.string()),
  default: s.optional(s.lazy(() => entityDefault2Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  entityRefs: s.optional(s.array(s.lazy(() => entityRefsResponseSchema))),
});
