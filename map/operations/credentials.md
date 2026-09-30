<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credentials — operations

Accessor: `client.credentials` · Source: `src/resources/credentials.ts` · 5 operations · Request and error types: namespace `Credentials`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteCredentialsId

- **Signature**: `deleteCredentialsId(request: Credentials.DeleteCredentialsIdRequest, options?: RequestOptions): ApiPromise<CredentialsResponseResult, Credentials.DeleteCredentialsIdError>`
- **Wire**: `DELETE /credentials/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CredentialsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Credentials.DeleteCredentialsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credentials.DeleteCredentialsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CredentialsResponseResult` | `credentialsResponseResultSchema` | `src/models/credentials-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getCredentials

- **Signature**: `getCredentials(request: Credentials.GetCredentialsRequest, options?: RequestOptions): ApiPromise<CredentialsResponseResult, Credentials.GetCredentialsError>`
- **Wire**: `GET /credentials`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CredentialsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Credentials.GetCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credentials.GetCredentialsRequest` (7):

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
| `CredentialsResponseResult` | `credentialsResponseResultSchema` | `src/models/credentials-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getCredentialsId

- **Signature**: `getCredentialsId(request: Credentials.GetCredentialsIdRequest, options?: RequestOptions): ApiPromise<CredentialsResponseResult, Credentials.GetCredentialsIdError>`
- **Wire**: `GET /credentials/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CredentialsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Credentials.GetCredentialsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credentials.GetCredentialsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CredentialsResponseResult` | `credentialsResponseResultSchema` | `src/models/credentials-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postCredentials

- **Signature**: `postCredentials(request: Credentials.PostCredentialsRequest, options?: RequestOptions): ApiPromise<CredentialsResponseResult, Credentials.PostCredentialsError>`
- **Wire**: `POST /credentials`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CredentialsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Credentials.PostCredentialsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credentials.PostCredentialsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `CredentialsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CredentialsPostRequest` | `credentialsPostRequestSchema` | `src/models/credentials-post-request.ts` |
| `CredentialsResponseResult` | `credentialsResponseResultSchema` | `src/models/credentials-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putCredentialsId

- **Signature**: `putCredentialsId(request: Credentials.PutCredentialsIdRequest, options?: RequestOptions): ApiPromise<CredentialsResponseResult, Credentials.PutCredentialsIdError>`
- **Wire**: `PUT /credentials/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CredentialsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Credentials.PutCredentialsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Credentials.PutCredentialsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `CredentialsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CredentialsPutRequest` | `credentialsPutRequestSchema` | `src/models/credentials-put-request.ts` |
| `CredentialsResponseResult` | `credentialsResponseResultSchema` | `src/models/credentials-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

