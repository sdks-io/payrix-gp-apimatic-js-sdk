import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entityRoutesResponseSchema, type EntityRoutesResponse } from "../entity-routes-response.js";

/**
 * The original 'entity_route' that routed the merchant onto the platform which then returned this
 * reference information, if applicable
 */
export type EntityRefsModelEntityRoute = string | EntityRoutesResponse;

export const entityRefsModelEntityRouteSchema: Schema<EntityRefsModelEntityRoute> =
  s.of<EntityRefsModelEntityRoute>(s.union([s.string(), s.lazy(() => entityRoutesResponseSchema)]));
