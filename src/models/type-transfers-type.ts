import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** GP API specific label that indicates the type resource an instance is. */
export const TypeTransfersType = {
  Transfer: "TRANSFER",
  Reversal: "REVERSAL",
} as const;
export type TypeTransfersType = (typeof TypeTransfersType)[keyof typeof TypeTransfersType] | (string & {});

export const typeTransfersTypeSchema: EnumSchema<TypeTransfersType> =
  s.enumOf<TypeTransfersType>(TypeTransfersType);
