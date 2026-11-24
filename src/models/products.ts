import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { device3InternalSchema, device3Schema, type Device3 } from "./device3.js";

export type Products = {
  /** Unique platform generated id used to uniquely reference a product on the platform. */
  id?: string;
  /**
   * Unique Global Payments generated name used to uniquely reference a product on the Global
   * Payments system.
   */
  name?: string;
  device?: Device3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const productsProperties: s.Shape<Products> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  device: s.optional(s.lazy(() => device3InternalSchema)),
};

export const productsInternalSchema: Schema<Products> = s.object<Products>(productsProperties, {
  additionalProperties: s.json(),
});

export const productsSchema: Schema<Products> = s.lazySchema(() =>
  s.object<Products>(
    {
      ...productsProperties,
      id: s.optional(s.string().check(s.minLength(5), s.maxLength(50))),
      device: s.optional(s.lazy(() => device3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
