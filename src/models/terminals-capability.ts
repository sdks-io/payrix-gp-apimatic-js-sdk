import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalsCapability = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type TerminalsCapability =
  | (typeof TerminalsCapability)[keyof typeof TerminalsCapability]
  | (number & {});

export const terminalsCapabilitySchema: EnumSchema<TerminalsCapability> =
  s.enumOf<TerminalsCapability>(TerminalsCapability);
