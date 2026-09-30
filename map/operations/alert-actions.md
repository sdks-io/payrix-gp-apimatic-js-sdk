<!-- Generated file — do not edit; regenerated with the SDK. -->

# AlertActions — operations

Accessor: `client.alertActions` · Source: `src/resources/alert-actions.ts` · 5 operations · Request and error types: namespace `AlertActions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAlertActionsId

- **Signature**: `deleteAlertActionsId(request: AlertActions.DeleteAlertActionsIdRequest, options?: RequestOptions): ApiPromise<AlertActionsResponseResult, AlertActions.DeleteAlertActionsIdError>`
- **Wire**: `DELETE /alertActions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AlertActionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AlertActions.DeleteAlertActionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AlertActions.DeleteAlertActionsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertActionsResponseResult` | `alertActionsResponseResultSchema` | `src/models/alert-actions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAlertActions

- **Signature**: `getAlertActions(request: AlertActions.GetAlertActionsRequest, options?: RequestOptions): ApiPromise<AlertActionsResponseResult, AlertActions.GetAlertActionsError>`
- **Wire**: `GET /alertActions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlertActionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AlertActions.GetAlertActionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AlertActions.GetAlertActionsRequest` (7):

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
| `AlertActionsResponseResult` | `alertActionsResponseResultSchema` | `src/models/alert-actions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAlertActionsId

- **Signature**: `getAlertActionsId(request: AlertActions.GetAlertActionsIdRequest, options?: RequestOptions): ApiPromise<AlertActionsResponseResult, AlertActions.GetAlertActionsIdError>`
- **Wire**: `GET /alertActions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlertActionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AlertActions.GetAlertActionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AlertActions.GetAlertActionsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertActionsResponseResult` | `alertActionsResponseResultSchema` | `src/models/alert-actions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postAlertActions

- **Signature**: `postAlertActions(request: AlertActions.PostAlertActionsRequest, options?: RequestOptions): ApiPromise<AlertActionsResponseResult, AlertActions.PostAlertActionsError>`
- **Wire**: `POST /alertActions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AlertActionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AlertActions.PostAlertActionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AlertActions.PostAlertActionsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `AlertActionsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertActionsPostRequest` | `alertActionsPostRequestSchema` | `src/models/alert-actions-post-request.ts` |
| `AlertActionsResponseResult` | `alertActionsResponseResultSchema` | `src/models/alert-actions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putAlertActionsId

- **Signature**: `putAlertActionsId(request: AlertActions.PutAlertActionsIdRequest, options?: RequestOptions): ApiPromise<AlertActionsResponseResult, AlertActions.PutAlertActionsIdError>`
- **Wire**: `PUT /alertActions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AlertActionsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AlertActions.PutAlertActionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AlertActions.PutAlertActionsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `AlertActionsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertActionsPutRequest` | `alertActionsPutRequestSchema` | `src/models/alert-actions-put-request.ts` |
| `AlertActionsResponseResult` | `alertActionsResponseResultSchema` | `src/models/alert-actions-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

