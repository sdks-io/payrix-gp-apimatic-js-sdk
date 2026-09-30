<!-- Generated file — do not edit; regenerated with the SDK. -->

# Alerts — operations

Accessor: `client.alerts` · Source: `src/resources/alerts.ts` · 5 operations · Request and error types: namespace `Alerts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAlertsId

- **Signature**: `deleteAlertsId(request: Alerts.DeleteAlertsIdRequest, options?: RequestOptions): ApiPromise<AlertsResponseResult, Alerts.DeleteAlertsIdError>`
- **Wire**: `DELETE /alerts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AlertsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Alerts.DeleteAlertsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.DeleteAlertsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertsResponseResult` | `alertsResponseResultSchema` | `src/models/alerts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAlerts

- **Signature**: `getAlerts(request: Alerts.GetAlertsRequest, options?: RequestOptions): ApiPromise<AlertsResponseResult, Alerts.GetAlertsError>`
- **Wire**: `GET /alerts`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlertsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Alerts.GetAlertsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.GetAlertsRequest` (7):

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
| `AlertsResponseResult` | `alertsResponseResultSchema` | `src/models/alerts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAlertsId

- **Signature**: `getAlertsId(request: Alerts.GetAlertsIdRequest, options?: RequestOptions): ApiPromise<AlertsResponseResult, Alerts.GetAlertsIdError>`
- **Wire**: `GET /alerts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AlertsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Alerts.GetAlertsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.GetAlertsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertsResponseResult` | `alertsResponseResultSchema` | `src/models/alerts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postAlerts

- **Signature**: `postAlerts(request: Alerts.PostAlertsRequest, options?: RequestOptions): ApiPromise<AlertsResponseResult, Alerts.PostAlertsError>`
- **Wire**: `POST /alerts`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AlertsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Alerts.PostAlertsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.PostAlertsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `AlertsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertsPostRequest` | `alertsPostRequestSchema` | `src/models/alerts-post-request.ts` |
| `AlertsResponseResult` | `alertsResponseResultSchema` | `src/models/alerts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putAlertsId

- **Signature**: `putAlertsId(request: Alerts.PutAlertsIdRequest, options?: RequestOptions): ApiPromise<AlertsResponseResult, Alerts.PutAlertsIdError>`
- **Wire**: `PUT /alerts/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AlertsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Alerts.PutAlertsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Alerts.PutAlertsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `AlertsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AlertsPutRequest` | `alertsPutRequestSchema` | `src/models/alerts-put-request.ts` |
| `AlertsResponseResult` | `alertsResponseResultSchema` | `src/models/alerts-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

