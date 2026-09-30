import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator6Schema, type Creator6 } from "./creator6.js";
import { entitySchema, type Entity } from "./entity.js";
import { forentitySchema, type Forentity } from "./forentity.js";
import { login2Schema, type Login2 } from "./login2.js";

export type Billing2 = {
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
  creator?: Creator6;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  entity?: Entity;
  forentity?: Forentity;
};

export const billing2Schema: Schema<Billing2> = s.object<Billing2>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator6Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  entity: s.optional(s.lazy(() => entitySchema)),
  forentity: s.optional(s.lazy(() => forentitySchema)),
});
