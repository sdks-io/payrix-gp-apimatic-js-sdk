import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  configurationIntegration1Schema,
  type ConfigurationIntegration1,
} from "./configuration-integration1.js";
import {
  configurationStagesResponseSchema,
  type ConfigurationStagesResponse,
} from "./configuration-stages-response.js";
import { configurationType1Schema, type ConfigurationType1 } from "./configuration-type1.js";
import { configurationsName1Schema, type ConfigurationsName1 } from "./configurations-name1.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { division3Schema, type Division3 } from "./division3.js";
import { entity25Schema, type Entity25 } from "./entity25.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { orgsResponseSchema, type OrgsResponse } from "./orgs-response.js";
import { partitionsResponseSchema, type PartitionsResponse } from "./partitions-response.js";

export type Configuration = {
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
  entity?: Entity25;
  org?: OrgsResponse;
  division?: Division3;
  partition?: PartitionsResponse;
  integration?: ConfigurationIntegration1;
  name?: ConfigurationsName1;
  type?: ConfigurationType1;
  /** The options used for this configuration integration. */
  options?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
  configurationStages?: ConfigurationStagesResponse[];
};

export const configurationSchema: Schema<Configuration> = s.object<Configuration>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  entity: s.optional(s.lazy(() => entity25Schema)),
  org: s.optional(s.lazy(() => orgsResponseSchema)),
  division: s.optional(s.lazy(() => division3Schema)),
  partition: s.optional(s.lazy(() => partitionsResponseSchema)),
  integration: s.optional(s.lazy(() => configurationIntegration1Schema)),
  name: s.optional(s.lazy(() => configurationsName1Schema)),
  type: s.optional(s.lazy(() => configurationType1Schema)),
  options: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  configurationStages: s.optional(s.array(s.lazy(() => configurationStagesResponseSchema))),
});
