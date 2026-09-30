import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRefStaging = {
  _0: 0,
  _1: 1,
} as const;
export type EntityRefStaging = (typeof EntityRefStaging)[keyof typeof EntityRefStaging] | (number & {});

export const entityRefStagingSchema: EnumSchema<EntityRefStaging> =
  s.enumOf<EntityRefStaging>(EntityRefStaging);
