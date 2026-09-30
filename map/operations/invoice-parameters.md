<!-- Generated file — do not edit; regenerated with the SDK. -->

# InvoiceParameters — operations

Accessor: `client.invoiceParameters` · Source: `src/resources/invoice-parameters.ts` · 5 operations · Request and error types: namespace `InvoiceParameters`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteInvoiceParametersId

- **Signature**: `deleteInvoiceParametersId(request: InvoiceParameters.DeleteInvoiceParametersIdRequest, options?: RequestOptions): ApiPromise<InvoiceParametersResponseResult, InvoiceParameters.DeleteInvoiceParametersIdError>`
- **Wire**: `DELETE /invoiceParameters/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceParametersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceParameters.DeleteInvoiceParametersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceParameters.DeleteInvoiceParametersIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceParametersResponseResult` | `invoiceParametersResponseResultSchema` | `src/models/invoice-parameters-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getInvoiceParameters

- **Signature**: `getInvoiceParameters(request: InvoiceParameters.GetInvoiceParametersRequest, options?: RequestOptions): ApiPromise<InvoiceParametersResponseResult, InvoiceParameters.GetInvoiceParametersError>`
- **Wire**: `GET /invoiceParameters`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoiceParametersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceParameters.GetInvoiceParametersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceParameters.GetInvoiceParametersRequest` (7):

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
| `InvoiceParametersResponseResult` | `invoiceParametersResponseResultSchema` | `src/models/invoice-parameters-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getInvoiceParametersId

- **Signature**: `getInvoiceParametersId(request: InvoiceParameters.GetInvoiceParametersIdRequest, options?: RequestOptions): ApiPromise<InvoiceParametersResponseResult, InvoiceParameters.GetInvoiceParametersIdError>`
- **Wire**: `GET /invoiceParameters/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoiceParametersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceParameters.GetInvoiceParametersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceParameters.GetInvoiceParametersIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceParametersResponseResult` | `invoiceParametersResponseResultSchema` | `src/models/invoice-parameters-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postInvoiceParameters

- **Signature**: `postInvoiceParameters(request: InvoiceParameters.PostInvoiceParametersRequest, options?: RequestOptions): ApiPromise<InvoiceParametersResponseResult, InvoiceParameters.PostInvoiceParametersError>`
- **Wire**: `POST /invoiceParameters`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceParametersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceParameters.PostInvoiceParametersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceParameters.PostInvoiceParametersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `InvoiceParametersPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceParametersPostRequest` | `invoiceParametersPostRequestSchema` | `src/models/invoice-parameters-post-request.ts` |
| `InvoiceParametersResponseResult` | `invoiceParametersResponseResultSchema` | `src/models/invoice-parameters-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putInvoiceParametersId

- **Signature**: `putInvoiceParametersId(request: InvoiceParameters.PutInvoiceParametersIdRequest, options?: RequestOptions): ApiPromise<InvoiceParametersResponseResult, InvoiceParameters.PutInvoiceParametersIdError>`
- **Wire**: `PUT /invoiceParameters/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceParametersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceParameters.PutInvoiceParametersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceParameters.PutInvoiceParametersIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `InvoiceParametersPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceParametersPutRequest` | `invoiceParametersPutRequestSchema` | `src/models/invoice-parameters-put-request.ts` |
| `InvoiceParametersResponseResult` | `invoiceParametersResponseResultSchema` | `src/models/invoice-parameters-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

