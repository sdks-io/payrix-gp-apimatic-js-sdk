import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { division3Schema, type Division3 } from "./division3.js";
import { entity28Schema, type Entity28 } from "./entity28.js";
import { login2Schema, type Login2 } from "./login2.js";
import { mccType2Schema, type MccType2 } from "./mcc-type2.js";
import { mccsMccCode2Schema, type MccsMccCode2 } from "./mccs-mcc-code2.js";
import { orgsResponseSchema, type OrgsResponse } from "./orgs-response.js";
import { partitionsResponseSchema, type PartitionsResponse } from "./partitions-response.js";

export type MccsResponse = {
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
  org?: OrgsResponse;
  entity?: Entity28;
  mcc?: MccsMccCode2;
  type?: MccType2;
  division?: Division3;
  partition?: PartitionsResponse;
};

export const mccsResponseSchema: Schema<MccsResponse> = s.object<MccsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  org: s.optional(s.lazy(() => orgsResponseSchema)),
  entity: s.optional(s.lazy(() => entity28Schema)),
  mcc: s.optional(s.lazy(() => mccsMccCode2Schema)),
  type: s.optional(s.lazy(() => mccType2Schema)),
  division: s.optional(s.lazy(() => division3Schema)),
  partition: s.optional(s.lazy(() => partitionsResponseSchema)),
});
