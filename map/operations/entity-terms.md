<!-- Generated file — do not edit; regenerated with the SDK. -->

# EntityTerms — operations

Accessor: `client.entityTerms` · Source: `src/resources/entity-terms.ts` · 3 operations · Request and error types: namespace `EntityTerms`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEntityTerms

- **Signature**: `getEntityTerms(request: EntityTerms.GetEntityTermsRequest, options?: RequestOptions): ApiPromise<EntityTermsResponseResult, EntityTerms.GetEntityTermsError>`
- **Wire**: `GET /entityTerms`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityTermsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntityTerms.GetEntityTermsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityTerms.GetEntityTermsRequest` (7):

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
| `EntityTermsResponseResult` | `entityTermsResponseResultSchema` | `src/models/entity-terms-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getEntityTermsId

- **Signature**: `getEntityTermsId(request: EntityTerms.GetEntityTermsIdRequest, options?: RequestOptions): ApiPromise<EntityTermsResponseResult, EntityTerms.GetEntityTermsIdError>`
- **Wire**: `GET /entityTerms/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityTermsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntityTerms.GetEntityTermsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityTerms.GetEntityTermsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityTermsResponseResult` | `entityTermsResponseResultSchema` | `src/models/entity-terms-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postEntityTerms

- **Signature**: `postEntityTerms(request: EntityTerms.PostEntityTermsRequest, options?: RequestOptions): ApiPromise<EntityTermsResponseResult, EntityTerms.PostEntityTermsError>`
- **Wire**: `POST /entityTerms`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EntityTermsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `EntityTerms.PostEntityTermsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `EntityTerms.PostEntityTermsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `EntityTermsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityTermsPostRequest` | `entityTermsPostRequestSchema` | `src/models/entity-terms-post-request.ts` |
| `EntityTermsResponseResult` | `entityTermsResponseResultSchema` | `src/models/entity-terms-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

