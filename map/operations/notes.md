<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notes — operations

Accessor: `client.notes` · Source: `src/resources/notes.ts` · 5 operations · Request and error types: namespace `Notes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteNotesId

- **Signature**: `deleteNotesId(request: Notes.DeleteNotesIdRequest, options?: RequestOptions): ApiPromise<NotesResponseResult, Notes.DeleteNotesIdError>`
- **Wire**: `DELETE /notes/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Notes.DeleteNotesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notes.DeleteNotesIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotesResponseResult` | `notesResponseResultSchema` | `src/models/notes-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getNotes

- **Signature**: `getNotes(request: Notes.GetNotesRequest, options?: RequestOptions): ApiPromise<NotesResponseResult, Notes.GetNotesError>`
- **Wire**: `GET /notes`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Notes.GetNotesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notes.GetNotesRequest` (7):

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
| `NotesResponseResult` | `notesResponseResultSchema` | `src/models/notes-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getNotesId

- **Signature**: `getNotesId(request: Notes.GetNotesIdRequest, options?: RequestOptions): ApiPromise<NotesResponseResult, Notes.GetNotesIdError>`
- **Wire**: `GET /notes/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Notes.GetNotesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notes.GetNotesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotesResponseResult` | `notesResponseResultSchema` | `src/models/notes-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postNotes

- **Signature**: `postNotes(request: Notes.PostNotesRequest, options?: RequestOptions): ApiPromise<NotesResponseResult, Notes.PostNotesError>`
- **Wire**: `POST /notes`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Notes.PostNotesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notes.PostNotesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `NotesPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotesPostRequest` | `notesPostRequestSchema` | `src/models/notes-post-request.ts` |
| `NotesResponseResult` | `notesResponseResultSchema` | `src/models/notes-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putNotesId

- **Signature**: `putNotesId(request: Notes.PutNotesIdRequest, options?: RequestOptions): ApiPromise<NotesResponseResult, Notes.PutNotesIdError>`
- **Wire**: `PUT /notes/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NotesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Notes.PutNotesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Notes.PutNotesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `NotesPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotesPutRequest` | `notesPutRequestSchema` | `src/models/notes-put-request.ts` |
| `NotesResponseResult` | `notesResponseResultSchema` | `src/models/notes-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

