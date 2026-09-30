import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { configurationsResponseSchema, type ConfigurationsResponse } from "../configurations-response.js";

/** The identifier of the Configuration that owns this configurationStage resource. */
export type ConfigurationStagesModelConfiguration = string | ConfigurationsResponse;

export const configurationStagesModelConfigurationSchema: Schema<ConfigurationStagesModelConfiguration> =
  s.of<ConfigurationStagesModelConfiguration>(
    s.union([s.string(), s.lazy(() => configurationsResponseSchema)]),
  );
