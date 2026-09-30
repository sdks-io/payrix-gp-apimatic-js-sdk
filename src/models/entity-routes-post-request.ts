import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityDefault2Schema, type EntityDefault2 } from "./entity-default2.js";
import { entityPlatform2Schema, type EntityPlatform2 } from "./entity-platform2.js";
import {
  entityRoutesFundingCurrency2Schema,
  type EntityRoutesFundingCurrency2,
} from "./entity-routes-funding-currency2.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type EntityRoutesPostRequest = {
  /** The Login that owns this EntityRoute. */
  login?: string;
  /** Division ID in which the entity route is associated. */
  division?: string;
  /** The identifier of the Entity that this entityRoute applies to. */
  entity?: string;
  /** The identifier of the Org that this entityRoute applies to. */
  org?: string;
  /** ID of the partition in which this entity operates. */
  partition?: string;
  platform: EntityPlatform2;
  currency?: Record<string, unknown>;
  fundingCurrency?: EntityRoutesFundingCurrency2;
  /** Whether to disable ACH. This is a JSON field. Accepted values are {"eCheckDisabled": true}. */
  options?: string;
  default: EntityDefault2;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const entityRoutesPostRequestSchema: Schema<EntityRoutesPostRequest> =
  s.object<EntityRoutesPostRequest>({
    login: s.optional(s.string()),
    division: s.optional(s.string()),
    entity: s.optional(s.string()),
    org: s.optional(s.string()),
    partition: s.optional(s.string()),
    platform: entityPlatform2Schema,
    currency: s.optional(s.record(s.string(), s.unknown())),
    fundingCurrency: s.optional(s.lazy(() => entityRoutesFundingCurrency2Schema)),
    options: s.optional(s.string()),
    default: entityDefault2Schema,
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
