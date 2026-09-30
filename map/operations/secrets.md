<!-- Generated file — do not edit; regenerated with the SDK. -->

# Secrets — operations

Accessor: `client.secrets` · Source: `src/resources/secrets.ts` · 5 operations · Request and error types: namespace `Secrets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteSecretsId

- **Signature**: `deleteSecretsId(request: Secrets.DeleteSecretsIdRequest, options?: RequestOptions): ApiPromise<SecretsResponseResult, Secrets.DeleteSecretsIdError>`
- **Wire**: `DELETE /secrets/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SecretsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Secrets.DeleteSecretsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Secrets.DeleteSecretsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SecretsResponseResult` | `secretsResponseResultSchema` | `src/models/secrets-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getSecrets

- **Signature**: `getSecrets(request: Secrets.GetSecretsRequest, options?: RequestOptions): ApiPromise<SecretsResponseResult, Secrets.GetSecretsError>`
- **Wire**: `GET /secrets`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SecretsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Secrets.GetSecretsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Secrets.GetSecretsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page[number]` | `number` | no |
| `pageLimit` | `query` | `page[limit]` | `number` | no |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `search` | `header` | — | `string` | no |
| `totals` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SecretsResponseResult` | `secretsResponseResultSchema` | `src/models/secrets-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getSecretsId

- **Signature**: `getSecretsId(request: Secrets.GetSecretsIdRequest, options?: RequestOptions): ApiPromise<SecretsResponseResult, Secrets.GetSecretsIdError>`
- **Wire**: `GET /secrets/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SecretsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Secrets.GetSecretsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Secrets.GetSecretsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SecretsResponseResult` | `secretsResponseResultSchema` | `src/models/secrets-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postSecrets

- **Signature**: `postSecrets(request: Secrets.PostSecretsRequest, options?: RequestOptions): ApiPromise<SecretsResponseResult, Secrets.PostSecretsError>`
- **Wire**: `POST /secrets`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SecretsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Secrets.PostSecretsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Secrets.PostSecretsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `SecretsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SecretsPostRequest` | `secretsPostRequestSchema` | `src/models/secrets-post-request.ts` |
| `SecretsResponseResult` | `secretsResponseResultSchema` | `src/models/secrets-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putSecretsId

- **Signature**: `putSecretsId(request: Secrets.PutSecretsIdRequest, options?: RequestOptions): ApiPromise<SecretsResponseResult, Secrets.PutSecretsIdError>`
- **Wire**: `PUT /secrets/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SecretsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Secrets.PutSecretsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Secrets.PutSecretsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `SecretsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SecretsPutRequest` | `secretsPutRequestSchema` | `src/models/secrets-put-request.ts` |
| `SecretsResponseResult` | `secretsResponseResultSchema` | `src/models/secrets-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

