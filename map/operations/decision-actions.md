<!-- Generated file — do not edit; regenerated with the SDK. -->

# DecisionActions — operations

Accessor: `client.decisionActions` · Source: `src/resources/decision-actions.ts` · 5 operations · Request and error types: namespace `DecisionActions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteDecisionActionsId

- **Signature**: `deleteDecisionActionsId(request: DecisionActions.DeleteDecisionActionsIdRequest, options?: RequestOptions): ApiPromise<DecisionActionsResponseResult, DecisionActions.DeleteDecisionActionsIdError>`
- **Wire**: `DELETE /decisionActions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionActionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DecisionActions.DeleteDecisionActionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionActions.DeleteDecisionActionsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionActionsResponseResult` | `decisionActionsResponseResultSchema` | `src/models/decision-actions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getDecisionActions

- **Signature**: `getDecisionActions(request: DecisionActions.GetDecisionActionsRequest, options?: RequestOptions): ApiPromise<DecisionActionsResponseResult, DecisionActions.GetDecisionActionsError>`
- **Wire**: `GET /decisionActions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DecisionActionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DecisionActions.GetDecisionActionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionActions.GetDecisionActionsRequest` (7):

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
| `DecisionActionsResponseResult` | `decisionActionsResponseResultSchema` | `src/models/decision-actions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getDecisionActionsId

- **Signature**: `getDecisionActionsId(request: DecisionActions.GetDecisionActionsIdRequest, options?: RequestOptions): ApiPromise<DecisionActionsResponseResult, DecisionActions.GetDecisionActionsIdError>`
- **Wire**: `GET /decisionActions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DecisionActionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DecisionActions.GetDecisionActionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionActions.GetDecisionActionsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionActionsResponseResult` | `decisionActionsResponseResultSchema` | `src/models/decision-actions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postDecisionActions

- **Signature**: `postDecisionActions(request: DecisionActions.PostDecisionActionsRequest, options?: RequestOptions): ApiPromise<DecisionActionsResponseResult, DecisionActions.PostDecisionActionsError>`
- **Wire**: `POST /decisionActions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionActionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DecisionActions.PostDecisionActionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionActions.PostDecisionActionsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `DecisionActionsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionActionsPostRequest` | `decisionActionsPostRequestSchema` | `src/models/decision-actions-post-request.ts` |
| `DecisionActionsResponseResult` | `decisionActionsResponseResultSchema` | `src/models/decision-actions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putDecisionActionsId

- **Signature**: `putDecisionActionsId(request: DecisionActions.PutDecisionActionsIdRequest, options?: RequestOptions): ApiPromise<DecisionActionsResponseResult, DecisionActions.PutDecisionActionsIdError>`
- **Wire**: `PUT /decisionActions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DecisionActionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `DecisionActions.PutDecisionActionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DecisionActions.PutDecisionActionsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `DecisionActionsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DecisionActionsPutRequest` | `decisionActionsPutRequestSchema` | `src/models/decision-actions-put-request.ts` |
| `DecisionActionsResponseResult` | `decisionActionsResponseResultSchema` | `src/models/decision-actions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

