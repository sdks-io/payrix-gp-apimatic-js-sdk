import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entity15Schema, type Entity15 } from "./entity15.js";
import { fromentitySchema, type Fromentity } from "./fromentity.js";
import { onentitySchema, type Onentity } from "./onentity.js";

export type EntryModel = {
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
  entity?: Entity15;
  onentity?: Onentity;
  fromentity?: Fromentity;
};

export const entryModelSchema: Schema<EntryModel> = s.object<EntryModel>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity15Schema)),
  onentity: s.optional(s.lazy(() => onentitySchema)),
  fromentity: s.optional(s.lazy(() => fromentitySchema)),
});
