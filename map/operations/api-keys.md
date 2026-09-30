<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeys — operations

Accessor: `client.apiKeys` · Source: `src/resources/api-keys.ts` · 5 operations · Request and error types: namespace `ApiKeys`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApikeysId

- **Signature**: `deleteApikeysId(request: ApiKeys.DeleteApikeysIdRequest, options?: RequestOptions): ApiPromise<ApikeysResponseResult, ApiKeys.DeleteApikeysIdError>`
- **Wire**: `DELETE /apikeys/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApikeysResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ApiKeys.DeleteApikeysIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.DeleteApikeysIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApikeysResponseResult` | `apikeysResponseResultSchema` | `src/models/apikeys-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getApikeys

- **Signature**: `getApikeys(request: ApiKeys.GetApikeysRequest, options?: RequestOptions): ApiPromise<ApikeysResponseResult, ApiKeys.GetApikeysError>`
- **Wire**: `GET /apikeys`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApikeysResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ApiKeys.GetApikeysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.GetApikeysRequest` (7):

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
| `ApikeysResponseResult` | `apikeysResponseResultSchema` | `src/models/apikeys-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getApikeysId

- **Signature**: `getApikeysId(request: ApiKeys.GetApikeysIdRequest, options?: RequestOptions): ApiPromise<ApikeysResponseResult, ApiKeys.GetApikeysIdError>`
- **Wire**: `GET /apikeys/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApikeysResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ApiKeys.GetApikeysIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.GetApikeysIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApikeysResponseResult` | `apikeysResponseResultSchema` | `src/models/apikeys-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postApikeys

- **Signature**: `postApikeys(request: ApiKeys.PostApikeysRequest, options?: RequestOptions): ApiPromise<ApikeysResponseResult, ApiKeys.PostApikeysError>`
- **Wire**: `POST /apikeys`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey`, (all of `username`, `password`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApikeysResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ApiKeys.PostApikeysError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.PostApikeysRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `ApiKeysPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiKeysPostRequest` | `apiKeysPostRequestSchema` | `src/models/api-keys-post-request.ts` |
| `ApikeysResponseResult` | `apikeysResponseResultSchema` | `src/models/apikeys-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putApikeysId

- **Signature**: `putApikeysId(request: ApiKeys.PutApikeysIdRequest, options?: RequestOptions): ApiPromise<ApikeysResponseResult, ApiKeys.PutApikeysIdError>`
- **Wire**: `PUT /apikeys/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApikeysResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ApiKeys.PutApikeysIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ApiKeys.PutApikeysIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `ApiKeysPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiKeysPutRequest` | `apiKeysPutRequestSchema` | `src/models/api-keys-put-request.ts` |
| `ApikeysResponseResult` | `apikeysResponseResultSchema` | `src/models/apikeys-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

