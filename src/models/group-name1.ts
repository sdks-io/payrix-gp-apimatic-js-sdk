import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The name of the group for this FraudSight enablement.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `PIECPA` - Post Network -Decision Non EMV CP & Inform remaining CP.
 * - `PICNP` - Post Network - Decision CNP only & Inform CP.
 * - `PACPA` - Post Network - Decision All CP Authorizations.
 * - `INCNP` - Pre Network -Decision Non-Recurring CNP & Inform CP.
 * - `PIKCPA` - Post Network -Decision Key Entered CP & Inform remaining CP.
 * - `IECNP` - Pre Network -Decision CNP and Non EMV CP & Inform remaining CP.
 * - `ACPA` - Pre Network - Decision All CP Authorizations.
 * - `PACNP` - Post Network - Decision All Authorizations (CNP & CP).
 * - `PIECNP` - Post Network -Decision CNP and Non EMV CP & Inform remaining CP.
 * - `IKCPA` - Pre Network -Decision Key Entered CP & Inform remaining CP.
 * - `ACNP` - Pre Network - Decision All Authorizations (CNP & CP).
 * - `PINCNP` - Post Network -Decision Non-Recurring CNP & Inform CP.
 * - `IECPA` - Pre Network -Decision Non EMV CP & Inform remaining CP.
 * - `ICNP` - Pre Network - Decision CNP only & Inform CP.
 *
 * </details>
 */
export const GroupName1 = {
  Piecpa: "PIECPA",
  Picnp: "PICNP",
  Pacpa: "PACPA",
  Incnp: "INCNP",
  Pikcpa: "PIKCPA",
  Iecnp: "IECNP",
  Acpa: "ACPA",
  Pacnp: "PACNP",
  Piecnp: "PIECNP",
  Ikcpa: "IKCPA",
  Acnp: "ACNP",
  Pincnp: "PINCNP",
  Iecpa: "IECPA",
  Icnp: "ICNP",
} as const;
export type GroupName1 = (typeof GroupName1)[keyof typeof GroupName1] | (string & {});

export const groupName1Schema: EnumSchema<GroupName1> = s.enumOf<GroupName1>(GroupName1);
