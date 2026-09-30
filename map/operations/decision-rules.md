<!-- Generated file — do not edit; regenerated with the SDK. -->

# DecisionRules — operations

Accessor: `client.decisionRules` · Source: `src/resources/decision-rules.ts` · 5 operations · Request and error types: namespace `DecisionRules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteDecisionRulesId

- **Signature**: `deleteDecisionRulesId(request: DecisionRules.DeleteDecisionRulesIdRequest, options?: RequestOptions): ApiPromise<DecisionRulesResponseResult, DecisionRules.DeleteDecisionRulesIdError>`
- **Wire**: `DELETE /decisionRules/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionRulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DecisionRules.DeleteDecisionRulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionRules.DeleteDecisionRulesIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionRulesResponseResult` | `decisionRulesResponseResultSchema` | `src/models/decision-rules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getDecisionRules

- **Signature**: `getDecisionRules(request: DecisionRules.GetDecisionRulesRequest, options?: RequestOptions): ApiPromise<DecisionRulesResponseResult, DecisionRules.GetDecisionRulesError>`
- **Wire**: `GET /decisionRules`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DecisionRulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DecisionRules.GetDecisionRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionRules.GetDecisionRulesRequest` (7):

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
| `DecisionRulesResponseResult` | `decisionRulesResponseResultSchema` | `src/models/decision-rules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getDecisionRulesId

- **Signature**: `getDecisionRulesId(request: DecisionRules.GetDecisionRulesIdRequest, options?: RequestOptions): ApiPromise<DecisionRulesResponseResult, DecisionRules.GetDecisionRulesIdError>`
- **Wire**: `GET /decisionRules/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DecisionRulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DecisionRules.GetDecisionRulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionRules.GetDecisionRulesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionRulesResponseResult` | `decisionRulesResponseResultSchema` | `src/models/decision-rules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postDecisionRules

- **Signature**: `postDecisionRules(request: DecisionRules.PostDecisionRulesRequest, options?: RequestOptions): ApiPromise<DecisionRulesResponseResult, DecisionRules.PostDecisionRulesError>`
- **Wire**: `POST /decisionRules`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionRulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DecisionRules.PostDecisionRulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionRules.PostDecisionRulesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `DecisionRulesPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionRulesPostRequest` | `decisionRulesPostRequestSchema` | `src/models/decision-rules-post-request.ts` |
| `DecisionRulesResponseResult` | `decisionRulesResponseResultSchema` | `src/models/decision-rules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putDecisionRulesId

- **Signature**: `putDecisionRulesId(request: DecisionRules.PutDecisionRulesIdRequest, options?: RequestOptions): ApiPromise<DecisionRulesResponseResult, DecisionRules.PutDecisionRulesIdError>`
- **Wire**: `PUT /decisionRules/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionRulesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DecisionRules.PutDecisionRulesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionRules.PutDecisionRulesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `DecisionRulesPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionRulesPutRequest` | `decisionRulesPutRequestSchema` | `src/models/decision-rules-put-request.ts` |
| `DecisionRulesResponseResult` | `decisionRulesResponseResultSchema` | `src/models/decision-rules-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

