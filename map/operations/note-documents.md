<!-- Generated file — do not edit; regenerated with the SDK. -->

# NoteDocuments — operations

Accessor: `client.noteDocuments` · Source: `src/resources/note-documents.ts` · 5 operations · Request and error types: namespace `NoteDocuments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteNoteDocumentsId

- **Signature**: `deleteNoteDocumentsId(request: NoteDocuments.DeleteNoteDocumentsIdRequest, options?: RequestOptions): ApiPromise<NoteDocumentsResponseResult, NoteDocuments.DeleteNoteDocumentsIdError>`
- **Wire**: `DELETE /noteDocuments/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NoteDocumentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `NoteDocuments.DeleteNoteDocumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NoteDocuments.DeleteNoteDocumentsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NoteDocumentsResponseResult` | `noteDocumentsResponseResultSchema` | `src/models/note-documents-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getNoteDocuments

- **Signature**: `getNoteDocuments(request: NoteDocuments.GetNoteDocumentsRequest, options?: RequestOptions): ApiPromise<NoteDocumentsResponseResult, NoteDocuments.GetNoteDocumentsError>`
- **Wire**: `GET /noteDocuments`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NoteDocumentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `NoteDocuments.GetNoteDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NoteDocuments.GetNoteDocumentsRequest` (7):

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
| `NoteDocumentsResponseResult` | `noteDocumentsResponseResultSchema` | `src/models/note-documents-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getNoteDocumentsId

- **Signature**: `getNoteDocumentsId(request: NoteDocuments.GetNoteDocumentsIdRequest, options?: RequestOptions): ApiPromise<NoteDocumentsResponseResult, NoteDocuments.GetNoteDocumentsIdError>`
- **Wire**: `GET /noteDocuments/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NoteDocumentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `NoteDocuments.GetNoteDocumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NoteDocuments.GetNoteDocumentsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NoteDocumentsResponseResult` | `noteDocumentsResponseResultSchema` | `src/models/note-documents-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postNoteDocuments

- **Signature**: `postNoteDocuments(request: NoteDocuments.PostNoteDocumentsRequest, options?: RequestOptions): ApiPromise<NoteDocumentsResponseResult, NoteDocuments.PostNoteDocumentsError>`
- **Wire**: `POST /noteDocuments`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NoteDocumentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `NoteDocuments.PostNoteDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NoteDocuments.PostNoteDocumentsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `NoteDocumentsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NoteDocumentsPostRequest` | `noteDocumentsPostRequestSchema` | `src/models/note-documents-post-request.ts` |
| `NoteDocumentsResponseResult` | `noteDocumentsResponseResultSchema` | `src/models/note-documents-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putNoteDocumentsId

- **Signature**: `putNoteDocumentsId(request: NoteDocuments.PutNoteDocumentsIdRequest, options?: RequestOptions): ApiPromise<NoteDocumentsResponseResult, NoteDocuments.PutNoteDocumentsIdError>`
- **Wire**: `PUT /noteDocuments/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NoteDocumentsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `NoteDocuments.PutNoteDocumentsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NoteDocuments.PutNoteDocumentsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `NoteDocumentsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NoteDocumentsPutRequest` | `noteDocumentsPutRequestSchema` | `src/models/note-documents-put-request.ts` |
| `NoteDocumentsResponseResult` | `noteDocumentsResponseResultSchema` | `src/models/note-documents-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

