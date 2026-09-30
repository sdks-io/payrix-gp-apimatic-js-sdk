import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SecretType = {
  BaseKey: "baseKey",
  Sftp: "sftp",
  PublicKey: "publicKey",
  PrivateKey: "privateKey",
  EcPrivateKey: "ecPrivateKey",
  Apikey: "apikey",
  OldPrivateKey: "oldPrivateKey",
} as const;
export type SecretType = (typeof SecretType)[keyof typeof SecretType] | (string & {});

export const secretTypeSchema: EnumSchema<SecretType> = s.enumOf<SecretType>(SecretType);
