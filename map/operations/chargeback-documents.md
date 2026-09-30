<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChargebackDocuments — operations

Accessor: `client.chargebackDocuments` · Source: `src/resources/chargeback-documents.ts` · 5 operations · Request and error types: namespace `ChargebackDocuments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteChargebackDocumentsId

- **Signature**: `deleteChargebackDocumentsId(request: ChargebackDocuments.DeleteChargebackDocumentsIdRequest, options?: RequestOptions): ApiPromise<ChargebackDocumentsResponseResult, ChargebackDocuments.DeleteChargebackDocumentsIdError>`
- **Wire**: `DELETE /chargebackDocuments/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChargebackDocumentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackDocuments.DeleteChargebackDocumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackDocuments.DeleteChargebackDocumentsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargebackDocumentsResponseResult` | `chargebackDocumentsResponseResultSchema` | `src/models/chargeback-documents-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getChargebackDocuments

- **Signature**: `getChargebackDocuments(request: ChargebackDocuments.GetChargebackDocumentsRequest, options?: RequestOptions): ApiPromise<ChargebackDocumentsResponseResult, ChargebackDocuments.GetChargebackDocumentsError>`
- **Wire**: `GET /chargebackDocuments`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargebackDocumentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackDocuments.GetChargebackDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackDocuments.GetChargebackDocumentsRequest` (7):

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
| `ChargebackDocumentsResponseResult` | `chargebackDocumentsResponseResultSchema` | `src/models/chargeback-documents-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getChargebackDocumentsId

- **Signature**: `getChargebackDocumentsId(request: ChargebackDocuments.GetChargebackDocumentsIdRequest, options?: RequestOptions): ApiPromise<ChargebackDocumentsResponseResult, ChargebackDocuments.GetChargebackDocumentsIdError>`
- **Wire**: `GET /chargebackDocuments/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargebackDocumentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackDocuments.GetChargebackDocumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackDocuments.GetChargebackDocumentsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargebackDocumentsResponseResult` | `chargebackDocumentsResponseResultSchema` | `src/models/chargeback-documents-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postChargebackDocuments

- **Signature**: `postChargebackDocuments(request: ChargebackDocuments.PostChargebackDocumentsRequest, options?: RequestOptions): ApiPromise<ChargebackDocumentsResponseResult, ChargebackDocuments.PostChargebackDocumentsError>`
- **Wire**: `POST /chargebackDocuments`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChargebackDocumentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackDocuments.PostChargebackDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackDocuments.PostChargebackDocumentsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `ChargebackDocumentsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargebackDocumentsPostRequest` | `chargebackDocumentsPostRequestSchema` | `src/models/chargeback-documents-post-request.ts` |
| `ChargebackDocumentsResponseResult` | `chargebackDocumentsResponseResultSchema` | `src/models/chargeback-documents-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putChargebackDocumentsId

- **Signature**: `putChargebackDocumentsId(request: ChargebackDocuments.PutChargebackDocumentsIdRequest, options?: RequestOptions): ApiPromise<ChargebackDocumentsResponseResult, ChargebackDocuments.PutChargebackDocumentsIdError>`
- **Wire**: `PUT /chargebackDocuments/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChargebackDocumentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `ChargebackDocuments.PutChargebackDocumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ChargebackDocuments.PutChargebackDocumentsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `ChargebacksDocumentsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargebacksDocumentsPutRequest` | `chargebacksDocumentsPutRequestSchema` | `src/models/chargebacks-documents-put-request.ts` |
| `ChargebackDocumentsResponseResult` | `chargebackDocumentsResponseResultSchema` | `src/models/chargeback-documents-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

