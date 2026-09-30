import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConfigurationType = {
  Create: "create",
  Read: "read",
  Update: "update",
  Delete: "delete",
} as const;
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType] | (string & {});

export const configurationTypeSchema: EnumSchema<ConfigurationType> =
  s.enumOf<ConfigurationType>(ConfigurationType);
