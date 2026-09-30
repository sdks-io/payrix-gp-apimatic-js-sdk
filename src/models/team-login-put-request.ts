import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamLoginCreate1Schema, type TeamLoginCreate1 } from "./team-login-create1.js";
import { teamLoginDelete1Schema, type TeamLoginDelete1 } from "./team-login-delete1.js";
import { teamLoginRead1Schema, type TeamLoginRead1 } from "./team-login-read1.js";
import { teamLoginReference1Schema, type TeamLoginReference1 } from "./team-login-reference1.js";
import { teamLoginTeamAdmin1Schema, type TeamLoginTeamAdmin1 } from "./team-login-team-admin1.js";
import { teamLoginUpdate1Schema, type TeamLoginUpdate1 } from "./team-login-update1.js";

export type TeamLoginPutRequest = {
  /** The Login that owns this resource. */
  login?: string;
  /**
   * The identifier of the Team resource that the Login identified in the 'login' field should be
   * marked as part of.
   */
  team?: string;
  create?: TeamLoginCreate1;
  read?: TeamLoginRead1;
  update?: TeamLoginUpdate1;
  delete?: TeamLoginDelete1;
  reference?: TeamLoginReference1;
  teamAdmin?: TeamLoginTeamAdmin1;
};

export const teamLoginPutRequestSchema: Schema<TeamLoginPutRequest> = s.object<TeamLoginPutRequest>({
  login: s.optional(s.string()),
  team: s.optional(s.string()),
  create: s.optional(s.lazy(() => teamLoginCreate1Schema)),
  read: s.optional(s.lazy(() => teamLoginRead1Schema)),
  update: s.optional(s.lazy(() => teamLoginUpdate1Schema)),
  delete: s.optional(s.lazy(() => teamLoginDelete1Schema)),
  reference: s.optional(s.lazy(() => teamLoginReference1Schema)),
  teamAdmin: s.optional(s.lazy(() => teamLoginTeamAdmin1Schema)),
});
