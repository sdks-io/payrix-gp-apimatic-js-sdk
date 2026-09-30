<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrgFlowRules — operations

Accessor: `client.orgFlowRules` · Source: `src/resources/org-flow-rules.ts` · 5 operations · Request and error types: namespace `OrgFlowRules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteOrgFlowRulesId

- **Signature**: `deleteOrgFlowRulesId(request: OrgFlowRules.DeleteOrgFlowRulesIdRequest, options?: RequestOptions): ApiPromise<OrgFlowRulesResponseResult, OrgFlowRules.DeleteOrgFlowRulesIdError>`
- **Wire**: `DELETE /orgFlowRules/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgFlowRulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgFlowRules.DeleteOrgFlowRulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgFlowRules.DeleteOrgFlowRulesIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgFlowRulesResponseResult` | `orgFlowRulesResponseResultSchema` | `src/models/org-flow-rules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getOrgFlowRules

- **Signature**: `getOrgFlowRules(request: OrgFlowRules.GetOrgFlowRulesRequest, options?: RequestOptions): ApiPromise<OrgFlowRulesResponseResult, OrgFlowRules.GetOrgFlowRulesError>`
- **Wire**: `GET /orgFlowRules`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrgFlowRulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgFlowRules.GetOrgFlowRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgFlowRules.GetOrgFlowRulesRequest` (7):

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
| `OrgFlowRulesResponseResult` | `orgFlowRulesResponseResultSchema` | `src/models/org-flow-rules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getOrgFlowRulesId

- **Signature**: `getOrgFlowRulesId(request: OrgFlowRules.GetOrgFlowRulesIdRequest, options?: RequestOptions): ApiPromise<OrgFlowRulesResponseResult, OrgFlowRules.GetOrgFlowRulesIdError>`
- **Wire**: `GET /orgFlowRules/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrgFlowRulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgFlowRules.GetOrgFlowRulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgFlowRules.GetOrgFlowRulesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgFlowRulesResponseResult` | `orgFlowRulesResponseResultSchema` | `src/models/org-flow-rules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postOrgFlowRules

- **Signature**: `postOrgFlowRules(request: OrgFlowRules.PostOrgFlowRulesRequest, options?: RequestOptions): ApiPromise<OrgFlowRulesResponseResult, OrgFlowRules.PostOrgFlowRulesError>`
- **Wire**: `POST /orgFlowRules`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgFlowRulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgFlowRules.PostOrgFlowRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgFlowRules.PostOrgFlowRulesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `OrgFlowRulesPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgFlowRulesPostRequest` | `orgFlowRulesPostRequestSchema` | `src/models/org-flow-rules-post-request.ts` |
| `OrgFlowRulesResponseResult` | `orgFlowRulesResponseResultSchema` | `src/models/org-flow-rules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putOrgFlowRulesId

- **Signature**: `putOrgFlowRulesId(request: OrgFlowRules.PutOrgFlowRulesIdRequest, options?: RequestOptions): ApiPromise<OrgFlowRulesResponseResult, OrgFlowRules.PutOrgFlowRulesIdError>`
- **Wire**: `PUT /orgFlowRules/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OrgFlowRulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `OrgFlowRules.PutOrgFlowRulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `OrgFlowRules.PutOrgFlowRulesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `OrgFlowRulesPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrgFlowRulesPutRequest` | `orgFlowRulesPutRequestSchema` | `src/models/org-flow-rules-put-request.ts` |
| `OrgFlowRulesResponseResult` | `orgFlowRulesResponseResultSchema` | `src/models/org-flow-rules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

