<!-- Generated file — do not edit; regenerated with the SDK. -->

# Members — operations

Accessor: `client.members` · Source: `src/resources/members.ts` · 5 operations · Request and error types: namespace `Members`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteMembersId

- **Signature**: `deleteMembersId(request: Members.DeleteMembersIdRequest, options?: RequestOptions): ApiPromise<MembersResponseResult, Members.DeleteMembersIdError>`
- **Wire**: `DELETE /members/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MembersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Members.DeleteMembersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Members.DeleteMembersIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MembersResponseResult` | `membersResponseResultSchema` | `src/models/members-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getMembers

- **Signature**: `getMembers(request: Members.GetMembersRequest, options?: RequestOptions): ApiPromise<MembersResponseResult, Members.GetMembersError>`
- **Wire**: `GET /members`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MembersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Members.GetMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Members.GetMembersRequest` (7):

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
| `MembersResponseResult` | `membersResponseResultSchema` | `src/models/members-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getMembersId

- **Signature**: `getMembersId(request: Members.GetMembersIdRequest, options?: RequestOptions): ApiPromise<MembersResponseResult, Members.GetMembersIdError>`
- **Wire**: `GET /members/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MembersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Members.GetMembersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Members.GetMembersIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MembersResponseResult` | `membersResponseResultSchema` | `src/models/members-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postMembers

- **Signature**: `postMembers(request: Members.PostMembersRequest, options?: RequestOptions): ApiPromise<MembersResponseResult, Members.PostMembersError>`
- **Wire**: `POST /members`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MembersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Members.PostMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Members.PostMembersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `MembersPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MembersPostRequest` | `membersPostRequestSchema` | `src/models/members-post-request.ts` |
| `MembersResponseResult` | `membersResponseResultSchema` | `src/models/members-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putMembersId

- **Signature**: `putMembersId(request: Members.PutMembersIdRequest, options?: RequestOptions): ApiPromise<MembersResponseResult, Members.PutMembersIdError>`
- **Wire**: `PUT /members/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MembersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Members.PutMembersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Members.PutMembersIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `MembersPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MembersPutRequest` | `membersPutRequestSchema` | `src/models/members-put-request.ts` |
| `MembersResponseResult` | `membersResponseResultSchema` | `src/models/members-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

