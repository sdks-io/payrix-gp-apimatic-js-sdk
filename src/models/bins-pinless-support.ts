import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BinsPinlessSupport = {
  None: "none",
  Restricted: "restricted",
  Full: "full",
} as const;
export type BinsPinlessSupport = (typeof BinsPinlessSupport)[keyof typeof BinsPinlessSupport] | (string & {});

export const binsPinlessSupportSchema: EnumSchema<BinsPinlessSupport> =
  s.enumOf<BinsPinlessSupport>(BinsPinlessSupport);
