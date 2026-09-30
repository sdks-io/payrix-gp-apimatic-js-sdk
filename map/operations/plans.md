<!-- Generated file — do not edit; regenerated with the SDK. -->

# Plans — operations

Accessor: `client.plans` · Source: `src/resources/plans.ts` · 5 operations · Request and error types: namespace `Plans`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deletePlansId

- **Signature**: `deletePlansId(request: Plans.DeletePlansIdRequest, options?: RequestOptions): ApiPromise<PlansResponseResult, Plans.DeletePlansIdError>`
- **Wire**: `DELETE /plans/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlansResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Plans.DeletePlansIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.DeletePlansIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlansResponseResult` | `plansResponseResultSchema` | `src/models/plans-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getPlans

- **Signature**: `getPlans(request: Plans.GetPlansRequest, options?: RequestOptions): ApiPromise<PlansResponseResult, Plans.GetPlansError>`
- **Wire**: `GET /plans`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlansResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Plans.GetPlansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.GetPlansRequest` (7):

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
| `PlansResponseResult` | `plansResponseResultSchema` | `src/models/plans-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getPlansId

- **Signature**: `getPlansId(request: Plans.GetPlansIdRequest, options?: RequestOptions): ApiPromise<PlansResponseResult, Plans.GetPlansIdError>`
- **Wire**: `GET /plans/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlansResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Plans.GetPlansIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.GetPlansIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlansResponseResult` | `plansResponseResultSchema` | `src/models/plans-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postPlans

- **Signature**: `postPlans(request: Plans.PostPlansRequest, options?: RequestOptions): ApiPromise<PlansResponseResult, Plans.PostPlansError>`
- **Wire**: `POST /plans`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlansResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Plans.PostPlansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.PostPlansRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `PlansPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlansPostRequest` | `plansPostRequestSchema` | `src/models/plans-post-request.ts` |
| `PlansResponseResult` | `plansResponseResultSchema` | `src/models/plans-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putPlansId

- **Signature**: `putPlansId(request: Plans.PutPlansIdRequest, options?: RequestOptions): ApiPromise<PlansResponseResult, Plans.PutPlansIdError>`
- **Wire**: `PUT /plans/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlansResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Plans.PutPlansIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Plans.PutPlansIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `PlansPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlansPutRequest` | `plansPutRequestSchema` | `src/models/plans-put-request.ts` |
| `PlansResponseResult` | `plansResponseResultSchema` | `src/models/plans-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

