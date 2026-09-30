<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orgs — operations

Accessor: `client.orgs` · Source: `src/resources/orgs.ts` · 5 operations · Request and error types: namespace `Orgs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteOrgsId

- **Signature**: `deleteOrgsId(request: Orgs.DeleteOrgsIdRequest, options?: RequestOptions): ApiPromise<OrgsResponseResult, Orgs.DeleteOrgsIdError>`
- **Wire**: `DELETE /orgs/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Orgs.DeleteOrgsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orgs.DeleteOrgsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgsResponseResult` | `orgsResponseResultSchema` | `src/models/orgs-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getOrgs

- **Signature**: `getOrgs(request: Orgs.GetOrgsRequest, options?: RequestOptions): ApiPromise<OrgsResponseResult, Orgs.GetOrgsError>`
- **Wire**: `GET /orgs`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrgsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Orgs.GetOrgsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orgs.GetOrgsRequest` (7):

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
| `OrgsResponseResult` | `orgsResponseResultSchema` | `src/models/orgs-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getOrgsId

- **Signature**: `getOrgsId(request: Orgs.GetOrgsIdRequest, options?: RequestOptions): ApiPromise<OrgsResponseResult, Orgs.GetOrgsIdError>`
- **Wire**: `GET /orgs/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrgsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Orgs.GetOrgsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orgs.GetOrgsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgsResponseResult` | `orgsResponseResultSchema` | `src/models/orgs-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postOrgs

- **Signature**: `postOrgs(request: Orgs.PostOrgsRequest, options?: RequestOptions): ApiPromise<OrgsResponseResult, Orgs.PostOrgsError>`
- **Wire**: `POST /orgs`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Orgs.PostOrgsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orgs.PostOrgsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `OrgsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgsPostRequest` | `orgsPostRequestSchema` | `src/models/orgs-post-request.ts` |
| `OrgsResponseResult` | `orgsResponseResultSchema` | `src/models/orgs-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putOrgsId

- **Signature**: `putOrgsId(request: Orgs.PutOrgsIdRequest, options?: RequestOptions): ApiPromise<OrgsResponseResult, Orgs.PutOrgsIdError>`
- **Wire**: `PUT /orgs/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Orgs.PutOrgsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Orgs.PutOrgsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `OrgsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgsPutRequest` | `orgsPutRequestSchema` | `src/models/orgs-put-request.ts` |
| `OrgsResponseResult` | `orgsResponseResultSchema` | `src/models/orgs-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

