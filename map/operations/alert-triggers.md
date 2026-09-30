<!-- Generated file — do not edit; regenerated with the SDK. -->

# AlertTriggers — operations

Accessor: `client.alertTriggers` · Source: `src/resources/alert-triggers.ts` · 5 operations · Request and error types: namespace `AlertTriggers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAlertTriggersId

- **Signature**: `deleteAlertTriggersId(request: AlertTriggers.DeleteAlertTriggersIdRequest, options?: RequestOptions): ApiPromise<AlertTriggersResponseResult, AlertTriggers.DeleteAlertTriggersIdError>`
- **Wire**: `DELETE /alertTriggers/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AlertTriggersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AlertTriggers.DeleteAlertTriggersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AlertTriggers.DeleteAlertTriggersIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertTriggersResponseResult` | `alertTriggersResponseResultSchema` | `src/models/alert-triggers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAlertTriggers

- **Signature**: `getAlertTriggers(request: AlertTriggers.GetAlertTriggersRequest, options?: RequestOptions): ApiPromise<AlertTriggersResponseResult, AlertTriggers.GetAlertTriggersError>`
- **Wire**: `GET /alertTriggers`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlertTriggersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AlertTriggers.GetAlertTriggersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AlertTriggers.GetAlertTriggersRequest` (7):

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
| `AlertTriggersResponseResult` | `alertTriggersResponseResultSchema` | `src/models/alert-triggers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAlertTriggersId

- **Signature**: `getAlertTriggersId(request: AlertTriggers.GetAlertTriggersIdRequest, options?: RequestOptions): ApiPromise<AlertTriggersResponseResult, AlertTriggers.GetAlertTriggersIdError>`
- **Wire**: `GET /alertTriggers/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlertTriggersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AlertTriggers.GetAlertTriggersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AlertTriggers.GetAlertTriggersIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertTriggersResponseResult` | `alertTriggersResponseResultSchema` | `src/models/alert-triggers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postAlertTriggers

- **Signature**: `postAlertTriggers(request: AlertTriggers.PostAlertTriggersRequest, options?: RequestOptions): ApiPromise<AlertTriggersResponseResult, AlertTriggers.PostAlertTriggersError>`
- **Wire**: `POST /alertTriggers`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AlertTriggersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AlertTriggers.PostAlertTriggersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AlertTriggers.PostAlertTriggersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `AlertTriggersPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertTriggersPostRequest` | `alertTriggersPostRequestSchema` | `src/models/alert-triggers-post-request.ts` |
| `AlertTriggersResponseResult` | `alertTriggersResponseResultSchema` | `src/models/alert-triggers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putAlertTriggersId

- **Signature**: `putAlertTriggersId(request: AlertTriggers.PutAlertTriggersIdRequest, options?: RequestOptions): ApiPromise<AlertTriggersResponseResult, AlertTriggers.PutAlertTriggersIdError>`
- **Wire**: `PUT /alertTriggers/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AlertTriggersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AlertTriggers.PutAlertTriggersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AlertTriggers.PutAlertTriggersIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `AlertTriggersPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertTriggersPutRequest` | `alertTriggersPutRequestSchema` | `src/models/alert-triggers-put-request.ts` |
| `AlertTriggersResponseResult` | `alertTriggersResponseResultSchema` | `src/models/alert-triggers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

