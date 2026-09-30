import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DivisionsCanUsePlaidWrapperMicroservice = {
  _0: 0,
  _1: 1,
} as const;
export type DivisionsCanUsePlaidWrapperMicroservice =
  | (typeof DivisionsCanUsePlaidWrapperMicroservice)[keyof typeof DivisionsCanUsePlaidWrapperMicroservice]
  | (number & {});

export const divisionsCanUsePlaidWrapperMicroserviceSchema: EnumSchema<DivisionsCanUsePlaidWrapperMicroservice> =
  s.enumOf<DivisionsCanUsePlaidWrapperMicroservice>(DivisionsCanUsePlaidWrapperMicroservice);
