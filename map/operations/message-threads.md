<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessageThreads — operations

Accessor: `client.messageThreads` · Source: `src/resources/message-threads.ts` · 3 operations · Request and error types: namespace `MessageThreads`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMessageThreads

- **Signature**: `getMessageThreads(request: MessageThreads.GetMessageThreadsRequest, options?: RequestOptions): ApiPromise<MessageThreadsResponseResult, MessageThreads.GetMessageThreadsError>`
- **Wire**: `GET /messageThreads`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessageThreadsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `MessageThreads.GetMessageThreadsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MessageThreads.GetMessageThreadsRequest` (7):

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
| `MessageThreadsResponseResult` | `messageThreadsResponseResultSchema` | `src/models/message-threads-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getMessageThreadsId

- **Signature**: `getMessageThreadsId(request: MessageThreads.GetMessageThreadsIdRequest, options?: RequestOptions): ApiPromise<MessageThreadsResponseResult, MessageThreads.GetMessageThreadsIdError>`
- **Wire**: `GET /messageThreads/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessageThreadsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `MessageThreads.GetMessageThreadsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MessageThreads.GetMessageThreadsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageThreadsResponseResult` | `messageThreadsResponseResultSchema` | `src/models/message-threads-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putMessageThreadsId

- **Signature**: `putMessageThreadsId(request: MessageThreads.PutMessageThreadsIdRequest, options?: RequestOptions): ApiPromise<MessageThreadsResponseResult, MessageThreads.PutMessageThreadsIdError>`
- **Wire**: `PUT /messageThreads/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageThreadsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `MessageThreads.PutMessageThreadsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MessageThreads.PutMessageThreadsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `MessageThreadsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageThreadsPutRequest` | `messageThreadsPutRequestSchema` | `src/models/message-threads-put-request.ts` |
| `MessageThreadsResponseResult` | `messageThreadsResponseResultSchema` | `src/models/message-threads-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

