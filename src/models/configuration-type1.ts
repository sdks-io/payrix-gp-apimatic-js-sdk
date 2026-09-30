import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of configuration resource.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `create` - **Create type of configuration.**
 * - `read` - **Read type of configuration.**
 * - `update` - **Update type of configuration.**
 * - `delete` - **Delete type of configuration.**
 *
 * </details>
 */
export const ConfigurationType1 = {
  Create: "create",
  Read: "read",
  Update: "update",
  Delete: "delete",
} as const;
export type ConfigurationType1 = (typeof ConfigurationType1)[keyof typeof ConfigurationType1] | (string & {});

export const configurationType1Schema: EnumSchema<ConfigurationType1> =
  s.enumOf<ConfigurationType1>(ConfigurationType1);
