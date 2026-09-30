<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.messages` · Source: `src/resources/messages.ts` · 4 operations · Request and error types: namespace `Messages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMessages

- **Signature**: `getMessages(request: Messages.GetMessagesRequest, options?: RequestOptions): ApiPromise<MessagesResponseResult, Messages.GetMessagesError>`
- **Wire**: `GET /messages`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Messages.GetMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.GetMessagesRequest` (7):

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
| `MessagesResponseResult` | `messagesResponseResultSchema` | `src/models/messages-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getMessagesId

- **Signature**: `getMessagesId(request: Messages.GetMessagesIdRequest, options?: RequestOptions): ApiPromise<MessagesResponseResult, Messages.GetMessagesIdError>`
- **Wire**: `GET /messages/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Messages.GetMessagesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.GetMessagesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagesResponseResult` | `messagesResponseResultSchema` | `src/models/messages-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postMessages

- **Signature**: `postMessages(request: Messages.PostMessagesRequest, options?: RequestOptions): ApiPromise<MessagesPostResponseResult, Messages.PostMessagesError>`
- **Wire**: `POST /messages`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessagesPostResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Messages.PostMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.PostMessagesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `MessagesPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagesPostRequest` | `messagesPostRequestSchema` | `src/models/messages-post-request.ts` |
| `MessagesPostResponseResult` | `messagesPostResponseResultSchema` | `src/models/messages-post-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putMessagesId

- **Signature**: `putMessagesId(request: Messages.PutMessagesIdRequest, options?: RequestOptions): ApiPromise<MessagesResponseResult, Messages.PutMessagesIdError>`
- **Wire**: `PUT /messages/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessagesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Messages.PutMessagesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Messages.PutMessagesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `MessagesPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagesPutRequest` | `messagesPutRequestSchema` | `src/models/messages-put-request.ts` |
| `MessagesResponseResult` | `messagesResponseResultSchema` | `src/models/messages-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

