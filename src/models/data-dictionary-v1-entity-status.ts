import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where a configured entity on the Global Payments system is in its lifecycle. * ACTIVE -
 * The configured entity is able to execute related API actions. * INACTIVE - The configured entity
 * is not able to execute related API actions as its status has been set to inactive.
 */
export const DataDictionaryV1EntityStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type DataDictionaryV1EntityStatus =
  | (typeof DataDictionaryV1EntityStatus)[keyof typeof DataDictionaryV1EntityStatus]
  | (string & {});

export const dataDictionaryV1EntityStatusSchema: EnumSchema<DataDictionaryV1EntityStatus> =
  s.enumOf<DataDictionaryV1EntityStatus>(DataDictionaryV1EntityStatus);
