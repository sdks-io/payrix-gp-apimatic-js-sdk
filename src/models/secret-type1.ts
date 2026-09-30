import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of secret.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `baseKey` - **Base Derivation Key.**
 * - `sftp` - **SFTP Server Key.**
 * - `publicKey` - **Public Key.**
 * - `privateKey` - **Private Key.**
 * - `ecPrivateKey` - **Elliptic Curve Private Key.**
 * - `apikey` - **API Key.**
 * - `oldPrivateKey` - **Expired Private Key.**
 *
 * </details>
 */
export const SecretType1 = {
  BaseKey: "baseKey",
  Sftp: "sftp",
  PublicKey: "publicKey",
  PrivateKey: "privateKey",
  EcPrivateKey: "ecPrivateKey",
  Apikey: "apikey",
  OldPrivateKey: "oldPrivateKey",
} as const;
export type SecretType1 = (typeof SecretType1)[keyof typeof SecretType1] | (string & {});

export const secretType1Schema: EnumSchema<SecretType1> = s.enumOf<SecretType1>(SecretType1);
