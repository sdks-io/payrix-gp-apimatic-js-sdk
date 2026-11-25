# Reference

> Source: [GlobalPaymentsApiClient](src/client.ts)

## AccessToken

> Source: [AccessToken](src/resources/access-token.ts)

<details>
<summary><code>getAccessToken(request: AccessToken.GetAccessTokenRequest, options?: RequestOptions): ApiPromise&lt;Response, AccessToken.GetAccessTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a bearer access token.

Using your app credentials, send a request to create a bearer access token that can be used to execute subsequent API actions. The actions  that the token can execute are determined by the permissions the app has.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accessToken.getAccessToken({
    xGpVersion: "2021-03-22",
    body: {
      appId: "i9R0byBBor6RqTQNj3g4MuVBwH5rd7yR",
      nonce: "random_string",
      secret:
        "e776ce1d9e94d5072ee132258e446cd92668d7c28b2e475a345319b475ba601956c16e3983926ce279db6301d78b7f47cfb729e41b4169814e373f0a0bf38716",
    },
  });
  // TODO: Handle 'response' of type Response
} catch (err) {
  // TODO: Handle 'err' of type AccessToken.GetAccessTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accessToken
  .getAccessToken({
    xGpVersion: "2021-03-22",
    body: {
      appId: "i9R0byBBor6RqTQNj3g4MuVBwH5rd7yR",
      nonce: "random_string",
      secret:
        "e776ce1d9e94d5072ee132258e446cd92668d7c28b2e475a345319b475ba601956c16e3983926ce279db6301d78b7f47cfb729e41b4169814e373f0a0bf38716",
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Response
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>body</code> | <code>[Request](src/models/request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accessToken.getAccessToken(request)`

- **OnSuccess**: <code>[Response](src/models/response.ts)</code>
- **OnError**: throws <code>[AccessToken.GetAccessTokenError](src/resources/access-token.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accessToken.getAccessToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Response, AccessToken.GetAccessTokenError&gt;</code>, with `result.value` of type <code>[Response](src/models/response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Accounts

> Source: [Accounts](src/resources/accounts.ts)

<details>
<summary><code>editAccountSingle(request: Accounts.EditAccountSingleRequest, options?: RequestOptions): ApiPromise&lt;AccountsSingleFundmanagementResponse, Accounts.EditAccountSingleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edit merchant's account configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.editAccountSingle({
    id: "some example string",
    xGpVersion: "some example string",
    body: { payer: { paymentMethod: { name: "name", reference: "123456", card: {} } } },
  });
  // TODO: Handle 'response' of type AccountsSingleFundmanagementResponse
} catch (err) {
  // TODO: Handle 'err' of type Accounts.EditAccountSingleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .editAccountSingle({
    id: "some example string",
    xGpVersion: "some example string",
    body: { payer: { paymentMethod: { name: "name", reference: "123456", card: {} } } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountsSingleFundmanagementResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | This is the account id created to uniquely identify it in the Global Payments system. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[AccountsSingleFundmanagementRequest](src/models/accounts-single-fundmanagement-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.editAccountSingle(request)`

- **OnSuccess**: <code>[AccountsSingleFundmanagementResponse](src/models/accounts-single-fundmanagement-response.ts)</code>
- **OnError**: throws <code>[Accounts.EditAccountSingleError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.editAccountSingle(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountsSingleFundmanagementResponse, Accounts.EditAccountSingleError&gt;</code>, with `result.value` of type <code>[AccountsSingleFundmanagementResponse](src/models/accounts-single-fundmanagement-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAccountSingle(request: Accounts.GetAccountSingleRequest, options?: RequestOptions): ApiPromise&lt;AccountsResponse2, Accounts.GetAccountSingleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the details of a single Account using its unique id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.getAccountSingle({
    id: "some example string",
    xGpVersion: "some example string",
  });
  // TODO: Handle 'response' of type AccountsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Accounts.GetAccountSingleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .getAccountSingle({ id: "some example string", xGpVersion: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | This is the account id created to uniquely identify it in the Global Payments system. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.getAccountSingle(request)`

- **OnSuccess**: <code>[AccountsResponse2](src/models/unions/accounts-response2.ts)</code>
- **OnError**: throws <code>[Accounts.GetAccountSingleError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.getAccountSingle(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountsResponse2, Accounts.GetAccountSingleError&gt;</code>, with `result.value` of type <code>[AccountsResponse2](src/models/unions/accounts-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFmaAccountDetails(request: Accounts.GetFmaAccountDetailsRequest, options?: RequestOptions): ApiPromise&lt;AccountsGetFma, Accounts.GetFmaAccountDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the details of a Funds Management Account using its unique id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.getFmaAccountDetails({
    fmaId: "FMA_02ca6d0284b743449a28aadfb702c71c",
    merId: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    xGpVersion: "some example string",
  });
  // TODO: Handle 'response' of type AccountsGetFma
} catch (err) {
  // TODO: Handle 'err' of type Accounts.GetFmaAccountDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .getFmaAccountDetails({
    fmaId: "FMA_02ca6d0284b743449a28aadfb702c71c",
    merId: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    xGpVersion: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountsGetFma
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fmaId</code> | <code>string</code> | - |
| <code>merId</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.getFmaAccountDetails(request)`

- **OnSuccess**: <code>[AccountsGetFma](src/models/accounts-get-fma.ts)</code>
- **OnError**: throws <code>[Accounts.GetFmaAccountDetailsError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.getFmaAccountDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountsGetFma, Accounts.GetFmaAccountDetailsError&gt;</code>, with `result.value` of type <code>[AccountsGetFma](src/models/accounts-get-fma.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantAccounts(request?: Accounts.GetMerchantAccountsRequest, options?: RequestOptions): ApiPromise&lt;AccountsList, Accounts.GetMerchantAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the merchant's accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accounts.getMerchantAccounts({
    status: DataDictionaryV1EntityStatus.Active,
    name: "transaction_processing",
    fromTimeCreated: "2021-10-01",
    toTimeCreated: "2021-12-31",
    xGpVersion: "some example string",
  });
  // TODO: Handle 'response' of type AccountsList
} catch (err) {
  // TODO: Handle 'err' of type Accounts.GetMerchantAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accounts
  .getMerchantAccounts({
    status: DataDictionaryV1EntityStatus.Active,
    name: "transaction_processing",
    fromTimeCreated: "2021-10-01",
    toTimeCreated: "2021-12-31",
    xGpVersion: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountsList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | Indicates the page sequence to return in the response. The number of records presented on each page is determined by page_size field.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | The total number of objects to return in a single page for that list.<br>**Default**: 5 |
| <code>order?</code> | <code>[DataDictionaryV1PaginationOrder](src/models/data-dictionary-v1-pagination-order.ts)</code> | The direction of the ordering of the entire list, ASC or DESC |
| <code>orderBy?</code> | <code>[DataDictionaryV1PaginationOrderBy](src/models/data-dictionary-v1-pagination-order-by.ts)</code> | The value to order the entire list by. |
| <code>status?</code> | <code>[DataDictionaryV1EntityStatus](src/models/data-dictionary-v1-entity-status.ts)</code> | - |
| <code>name?</code> | <code>string</code> | - |
| <code>id?</code> | <code>string</code> | - |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accounts.getMerchantAccounts(request)`

- **OnSuccess**: <code>[AccountsList](src/models/accounts-list.ts)</code>
- **OnError**: throws <code>[Accounts.GetMerchantAccountsError](src/resources/accounts.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accounts.getMerchantAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountsList, Accounts.GetMerchantAccountsError&gt;</code>, with `result.value` of type <code>[AccountsList](src/models/accounts-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Actions

> Source: [Actions](src/resources/actions.ts)

<details>
<summary><code>getActionList(request?: Actions.GetActionListRequest, options?: RequestOptions): ApiPromise&lt;ActionsList, Actions.GetActionListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Actions using criteria passed in the query string. Page through the result set to access all records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.actions.getActionList({
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: "TIME_CREATED",
    id: "ACT_bxWus66W5qSTCcGECIPUT5zLhISaMy",
    type: "MERCHANT_EDIT",
    resource: "TRANSACTIONS",
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    merchantName: "Sandbox_merchant_2",
    accountName: "transaction_processing",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ActionsList
} catch (err) {
  // TODO: Handle 'err' of type Actions.GetActionListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.actions
  .getActionList({
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: "TIME_CREATED",
    id: "ACT_bxWus66W5qSTCcGECIPUT5zLhISaMy",
    type: "MERCHANT_EDIT",
    resource: "TRANSACTIONS",
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    merchantName: "Sandbox_merchant_2",
    accountName: "transaction_processing",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActionsList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 5 |
| <code>order?</code> | <code>[DataDictionaryV1PaginationOrder](src/models/data-dictionary-v1-pagination-order.ts)</code> | - |
| <code>orderBy?</code> | <code>string</code> | -<br>**Default**: "TIME_CREATED" |
| <code>id?</code> | <code>string</code> | - |
| <code>type?</code> | <code>string</code> | - |
| <code>resource?</code> | <code>string</code> | - |
| <code>resourceStatus?</code> | <code>string</code> | - |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>merchantName?</code> | <code>string</code> | - |
| <code>accountName?</code> | <code>string</code> | - |
| <code>appName?</code> | <code>string</code> | - |
| <code>version?</code> | <code>string</code> | - |
| <code>responseCode?</code> | <code>string</code> | - |
| <code>httpResponseCode?</code> | <code>string</code> | - |
| <code>resourceId?</code> | <code>string</code> | The Id of a specific resource linked to the action. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.actions.getActionList(request)`

- **OnSuccess**: <code>[ActionsList](src/models/actions-list.ts)</code>
- **OnError**: throws <code>[Actions.GetActionListError](src/resources/actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.actions.getActionList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActionsList, Actions.GetActionListError&gt;</code>, with `result.value` of type <code>[ActionsList](src/models/actions-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getActionSingle(request: Actions.GetActionSingleRequest, options?: RequestOptions): ApiPromise&lt;ActionSingle, Actions.GetActionSingleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the details of a single action using its unique id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.actions.getActionSingle({
    id: "ACT_bxWus66W5qSTCcGECIPUT5zLhISaMy",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ActionSingle
} catch (err) {
  // TODO: Handle 'err' of type Actions.GetActionSingleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.actions
  .getActionSingle({ id: "ACT_bxWus66W5qSTCcGECIPUT5zLhISaMy", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ActionSingle
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.actions.getActionSingle(request)`

- **OnSuccess**: <code>[ActionSingle](src/models/action-single.ts)</code>
- **OnError**: throws <code>[Actions.GetActionSingleError](src/resources/actions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.actions.getActionSingle(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ActionSingle, Actions.GetActionSingleError&gt;</code>, with `result.value` of type <code>[ActionSingle](src/models/action-single.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AuthenticationsApi

> Source: [AuthenticationsApi](src/resources/authentications-api.ts)

<details>
<summary><code>check3DsAvailability(request: AuthenticationsApi.Check3DsAvailabilityRequest, options?: RequestOptions): ApiPromise&lt;CreateResponseAuthentications, AuthenticationsApi.Check3DsAvailabilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start the authentication process by confirming the available mechanisms to authenticate the payer based on a payment method.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authenticationsApi.check3DsAvailability({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "Transaction_Processing",
      channel: ChannelAuthenticationsChannel.Cnp,
      country: CountryAuthenticationsCountry.Fr,
      amount: "5089",
      currency: CurrencyAuthenticationsCurrency.Eur,
      reference: "3ds2_ref1",
      paymentMethod: { card: { number: "4012001038488884", expiryMonth: "12", expiryYear: "30" } },
      notifications: {
        challengeReturnUrl: "https://ensi808o85za.x.pipedream.net/",
        threeDsMethodReturnUrl: "https://ensi808o85za.x.pipedream.net/",
      },
    },
  });
  // TODO: Handle 'response' of type CreateResponseAuthentications
} catch (err) {
  // TODO: Handle 'err' of type AuthenticationsApi.Check3DsAvailabilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authenticationsApi
  .check3DsAvailability({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "Transaction_Processing",
      channel: ChannelAuthenticationsChannel.Cnp,
      country: CountryAuthenticationsCountry.Fr,
      amount: "5089",
      currency: CurrencyAuthenticationsCurrency.Eur,
      reference: "3ds2_ref1",
      paymentMethod: { card: { number: "4012001038488884", expiryMonth: "12", expiryYear: "30" } },
      notifications: {
        challengeReturnUrl: "https://ensi808o85za.x.pipedream.net/",
        threeDsMethodReturnUrl: "https://ensi808o85za.x.pipedream.net/",
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponseAuthentications
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body</code> | <code>[CreateRequestAuthentications](src/models/create-request-authentications.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authenticationsApi.check3DsAvailability(request)`

- **OnSuccess**: <code>[CreateResponseAuthentications](src/models/create-response-authentications.ts)</code>
- **OnError**: throws <code>[AuthenticationsApi.Check3DsAvailabilityError](src/resources/authentications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authenticationsApi.check3DsAvailability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponseAuthentications, AuthenticationsApi.Check3DsAvailabilityError&gt;</code>, with `result.value` of type <code>[CreateResponseAuthentications](src/models/create-response-authentications.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>get3DsResult(request: AuthenticationsApi.Get3DsResultRequest, options?: RequestOptions): ApiPromise&lt;ResultResponse, AuthenticationsApi.Get3DsResultError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Obtain the authentication information that must be submitted when creating a transaction to achieve the fraud liability shift from the merchant.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authenticationsApi.get3DsResult({
    id: "AUT_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ResultResponse
} catch (err) {
  // TODO: Handle 'err' of type AuthenticationsApi.Get3DsResultError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authenticationsApi
  .get3DsResult({ id: "AUT_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResultResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authenticationsApi.get3DsResult(request)`

- **OnSuccess**: <code>[ResultResponse](src/models/result-response.ts)</code>
- **OnError**: throws <code>[AuthenticationsApi.Get3DsResultError](src/resources/authentications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authenticationsApi.get3DsResult(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResultResponse, AuthenticationsApi.Get3DsResultError&gt;</code>, with `result.value` of type <code>[ResultResponse](src/models/result-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListOfAuthentications(request?: AuthenticationsApi.GetListOfAuthenticationsRequest, options?: RequestOptions): ApiPromise&lt;ListResponse, AuthenticationsApi.GetListOfAuthenticationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list of Authentication Responses.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authenticationsApi.getListOfAuthentications({
    toTimeCreated: "2023-05-01",
    fromTimeCreated: "2022-05-01",
    id: "AUT_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    amount: "11099",
    country: CountryAuthenticationsCountry.Us,
    currency: CurrencyAuthenticationsCurrency.Usd,
    source: SourceAuthenticationsSource.Browser,
    page: 1,
    pageSize: 5,
    order: Order53.Asc,
    orderBy: "TIME_CREATED",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ListResponse
} catch (err) {
  // TODO: Handle 'err' of type AuthenticationsApi.GetListOfAuthenticationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authenticationsApi
  .getListOfAuthentications({
    toTimeCreated: "2023-05-01",
    fromTimeCreated: "2022-05-01",
    id: "AUT_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    amount: "11099",
    country: CountryAuthenticationsCountry.Us,
    currency: CurrencyAuthenticationsCurrency.Usd,
    source: SourceAuthenticationsSource.Browser,
    page: 1,
    pageSize: 5,
    order: Order53.Asc,
    orderBy: "TIME_CREATED",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>id?</code> | <code>string</code> | - |
| <code>amount?</code> | <code>string</code> | - |
| <code>country?</code> | <code>[CountryAuthenticationsCountry](src/models/country-authentications-country.ts)</code> | - |
| <code>currency?</code> | <code>[CurrencyAuthenticationsCurrency](src/models/currency-authentications-currency.ts)</code> | - |
| <code>source?</code> | <code>[SourceAuthenticationsSource](src/models/source-authentications-source.ts)</code> | - |
| <code>threeDsDsTransRef?</code> | <code>string</code> | - |
| <code>threeDsServerTransRef?</code> | <code>string</code> | - |
| <code>threeDsLiabilityShift?</code> | <code>[LiabilityShiftAuthenticationsThreeDsLiabilityShift](src/models/liability-shift-authentications-three-ds-liability-shift.ts)</code> | - |
| <code>threeDsAuthenticationValue?</code> | <code>string</code> | - |
| <code>threeDsEci?</code> | <code>string</code> | - |
| <code>threeDsMessageVersion?</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | Indicates the page sequence to return in the response. The number of records presented on each page is determined by page_size field.1 means the first page, 2 the second and so on.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | The total number of records to return in a single page for a list.   page:<br>**Default**: 5 |
| <code>order?</code> | <code>[Order53](src/models/order53.ts)</code> | The direction of the ordering of the entire list, ASC or DESC<br>**Default**: "DESC" |
| <code>orderBy?</code> | <code>string</code> | The field to order the list by.<br>**Default**: "TIME_CREATED" |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authenticationsApi.getListOfAuthentications(request)`

- **OnSuccess**: <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: throws <code>[AuthenticationsApi.GetListOfAuthenticationsError](src/resources/authentications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authenticationsApi.getListOfAuthentications(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse, AuthenticationsApi.GetListOfAuthenticationsError&gt;</code>, with `result.value` of type <code>[ListResponse](src/models/list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSingleAuthentication(request: AuthenticationsApi.GetSingleAuthenticationRequest, options?: RequestOptions): ApiPromise&lt;SingleResponse, AuthenticationsApi.GetSingleAuthenticationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a single Authentication Response.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authenticationsApi.getSingleAuthentication({
    id: "AUT_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type SingleResponse
} catch (err) {
  // TODO: Handle 'err' of type AuthenticationsApi.GetSingleAuthenticationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authenticationsApi
  .getSingleAuthentication({ id: "AUT_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SingleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authenticationsApi.getSingleAuthentication(request)`

- **OnSuccess**: <code>[SingleResponse](src/models/single-response.ts)</code>
- **OnError**: throws <code>[AuthenticationsApi.GetSingleAuthenticationError](src/resources/authentications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authenticationsApi.getSingleAuthentication(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SingleResponse, AuthenticationsApi.GetSingleAuthenticationError&gt;</code>, with `result.value` of type <code>[SingleResponse](src/models/single-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>initiate3Ds(request: AuthenticationsApi.Initiate3DsRequest, options?: RequestOptions): ApiPromise&lt;InitiateResponse, AuthenticationsApi.Initiate3DsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For 3DS 2, submit data including the billing and shipping details of the payer, at least one phone number, the device data, transaction details, outcome from the ACS Method URL if it took place and a link to the merchant's About or Contact page.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

The `Challenge_Return_Notification` callback is sent to the URL supplied in an earlier request ({$request.body#/notifications/challenge_return_url}); see POST /authentications.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authenticationsApi.initiate3Ds({
    id: "AUT_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
    body: {
      threeDs: {},
      merchantContactUrl: "some example string",
      paymentMethod: {},
      order: { timeCreatedReference: "some example string" },
      browserData: {},
    },
  });
  // TODO: Handle 'response' of type InitiateResponse
} catch (err) {
  // TODO: Handle 'err' of type AuthenticationsApi.Initiate3DsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authenticationsApi
  .initiate3Ds({
    id: "AUT_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
    body: {
      threeDs: {},
      merchantContactUrl: "some example string",
      paymentMethod: {},
      order: { timeCreatedReference: "some example string" },
      browserData: {},
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InitiateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body</code> | <code>[InitiateRequest](src/models/initiate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authenticationsApi.initiate3Ds(request)`

- **OnSuccess**: <code>[InitiateResponse](src/models/initiate-response.ts)</code>
- **OnError**: throws <code>[AuthenticationsApi.Initiate3DsError](src/resources/authentications-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authenticationsApi.initiate3Ds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InitiateResponse, AuthenticationsApi.Initiate3DsError&gt;</code>, with `result.value` of type <code>[InitiateResponse](src/models/initiate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Batches

> Source: [Batches](src/resources/batches.ts)

<details>
<summary><code>closeBatch(request?: Batches.CloseBatchRequest, options?: RequestOptions): ApiPromise&lt;CloseResponse3, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Close a Batch without using the Global Payments Batch id

Closing a batch results in commencement of funding to the merchant all the transactions in that batch. Here you can close the current open batch without the unique batch id.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.batches.closeBatch({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "transaction_account",
      channel: ChannelAuthenticationsChannel.Cnp,
      currency: "MXN",
      country: CountryBatchesCountry.Mx,
      paymentMethods: [PaymentMethods7.Apm],
    },
  });
  // TODO: Handle 'response' of type CloseResponse3
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.batches
  .closeBatch({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "transaction_account",
      channel: ChannelAuthenticationsChannel.Cnp,
      currency: "MXN",
      country: CountryBatchesCountry.Mx,
      paymentMethods: [PaymentMethods7.Apm],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloseResponse3
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>body?</code> | <code>[BatchesRequest](src/models/batches-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.batches.closeBatch(request)`

- **OnSuccess**: <code>[CloseResponse3](src/models/close-response3.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.batches.closeBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloseResponse3, ApiError&gt;</code>, with `result.value` of type <code>[CloseResponse3](src/models/close-response3.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>closeSingleBatch(request: Batches.CloseSingleBatchRequest, options?: RequestOptions): ApiPromise&lt;CloseResponse3, Batches.CloseSingleBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Close a Batch using the Global Payments Batch id.

Closing a batch results in commencement of funding to the merchant all the transactions in that batch.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.batches.closeSingleBatch({ id: "BAT_855049-899", xGpVersion: "2021-03-22" });
  // TODO: Handle 'response' of type CloseResponse3
} catch (err) {
  // TODO: Handle 'err' of type Batches.CloseSingleBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.batches
  .closeSingleBatch({ id: "BAT_855049-899", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloseResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.batches.closeSingleBatch(request)`

- **OnSuccess**: <code>[CloseResponse3](src/models/close-response3.ts)</code>
- **OnError**: throws <code>[Batches.CloseSingleBatchError](src/resources/batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.batches.closeSingleBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloseResponse3, Batches.CloseSingleBatchError&gt;</code>, with `result.value` of type <code>[CloseResponse3](src/models/close-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSingleBatch(request: Batches.GetSingleBatchRequest, options?: RequestOptions): ApiPromise&lt;GetResponse2, Batches.GetSingleBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single view of a Batch using the Global Payments Batch id.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.batches.getSingleBatch({ id: "BAT_855049-899", xGpVersion: "2021-03-22" });
  // TODO: Handle 'response' of type GetResponse2
} catch (err) {
  // TODO: Handle 'err' of type Batches.GetSingleBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.batches
  .getSingleBatch({ id: "BAT_855049-899", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.batches.getSingleBatch(request)`

- **OnSuccess**: <code>[GetResponse2](src/models/get-response2.ts)</code>
- **OnError**: throws <code>[Batches.GetSingleBatchError](src/resources/batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.batches.getSingleBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetResponse2, Batches.GetSingleBatchError&gt;</code>, with `result.value` of type <code>[GetResponse2](src/models/get-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTransactionsWithinBatch(request: Batches.GetTransactionsWithinBatchRequest, options?: RequestOptions): ApiPromise&lt;TransactionBatchResponse2, Batches.GetTransactionsWithinBatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a List of Transactions Within a Batch

Get the details of all transactions within a given Batch.  Availability of this feature in production depends on your allowed live configuration. Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.batches.getTransactionsWithinBatch({
    id: "BAT_855049-899",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type TransactionBatchResponse2
} catch (err) {
  // TODO: Handle 'err' of type Batches.GetTransactionsWithinBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.batches
  .getTransactionsWithinBatch({ id: "BAT_855049-899", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionBatchResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.batches.getTransactionsWithinBatch(request)`

- **OnSuccess**: <code>[TransactionBatchResponse2](src/models/transaction-batch-response2.ts)</code>
- **OnError**: throws <code>[Batches.GetTransactionsWithinBatchError](src/resources/batches.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.batches.getTransactionsWithinBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionBatchResponse2, Batches.GetTransactionsWithinBatchError&gt;</code>, with `result.value` of type <code>[TransactionBatchResponse2](src/models/transaction-batch-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Consents

> Source: [Consents](src/resources/consents.ts)

<details>
<summary><code>cancelConsent(request: Consents.CancelConsentRequest, options?: RequestOptions): ApiPromise&lt;ConsentsCancelResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a consent obtained previously between the Merchant and the Payer. This is required when the Payer cancels an order with the Merchant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.consents.cancelConsent({
    id: "some example string",
    xGpVersion: "2021-03-22",
    body: { reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e", description: "Cancelled by customer" },
  });
  // TODO: Handle 'response' of type ConsentsCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.consents
  .cancelConsent({
    id: "some example string",
    xGpVersion: "2021-03-22",
    body: { reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e", description: "Cancelled by customer" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConsentsCancelResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique Global Payments generated id used to reference a consent on the Global Payments system. Often referred to as the consent id. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>body?</code> | <code>[ConsentsCancelRequest](src/models/consents-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.consents.cancelConsent(request)`

- **OnSuccess**: <code>[ConsentsCancelResponse](src/models/consents-cancel-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.consents.cancelConsent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConsentsCancelResponse, ApiError&gt;</code>, with `result.value` of type <code>[ConsentsCancelResponse](src/models/consents-cancel-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createConsent(request?: Consents.CreateConsentRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse, Consents.CreateConsentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a consent on the Global Payments system to obtain authorization from the payer, allowing Global Payments to collect, use, and disclose their personal information to initiate the payment process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.consents.createConsent({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "transaction_processing",
      channel: ChannelConsentsChannel.Cnp,
      merchantCategoryCode: "String",
      reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
      order: {
        reference: "James_order",
        deliveryTimeframe: DeliveryTimeframeConsentsOrderDeliveryTimeframe.Standard,
        shippingType: ShippingTypeConsentsOrderShippingType.Single,
        shippingCost: "600",
        amount: "4100",
        currency: "CAD",
        taxAmount: "700",
        items: [
          {
            label: "T-shit Red",
            reference: "ORD-23455",
            type: TypeConsentsOrderItemsType.Other,
            amount: "1250",
            quantity: "2",
            description: "Red t-shirt Zango",
            paymentType: PaymentTypeConsentsOrderItemsPaymentType.Single,
          },
        ],
      },
      addresses: [
        {
          functions: [Functions2.Business],
          reference: "Clothing store",
          buildingName: "Winners",
          line1: " string",
          line2: "string",
          line3: "string",
          city: "string",
          state: "ON",
          postalCode: "N1T 0G9",
          country: "Canada",
          poBoxNumber: "1234",
        },
      ],
      fees: [{ name: "fast track fee", amount: "200" }, { name: "gift wrap fee", amount: "100" }],
      paymentMethod: { digitalWallet: { provider: "KONEK" } },
      supportedPaymentMethods: [
        SupportedPaymentMethod.MastercardCredit,
        SupportedPaymentMethod.MastercardDebit,
        SupportedPaymentMethod.VisaCredit,
        SupportedPaymentMethod.VisaDebit,
        SupportedPaymentMethod.AmexCredit,
        SupportedPaymentMethod.BankTransferSavings,
        SupportedPaymentMethod.BankTransferChecking,
        SupportedPaymentMethod.BankTransferLineOfCredit,
      ],
    },
  });
  // TODO: Handle 'response' of type CreateResponse
} catch (err) {
  // TODO: Handle 'err' of type Consents.CreateConsentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.consents
  .createConsent({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "transaction_processing",
      channel: ChannelConsentsChannel.Cnp,
      merchantCategoryCode: "String",
      reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
      order: {
        reference: "James_order",
        deliveryTimeframe: DeliveryTimeframeConsentsOrderDeliveryTimeframe.Standard,
        shippingType: ShippingTypeConsentsOrderShippingType.Single,
        shippingCost: "600",
        amount: "4100",
        currency: "CAD",
        taxAmount: "700",
        items: [
          {
            label: "T-shit Red",
            reference: "ORD-23455",
            type: TypeConsentsOrderItemsType.Other,
            amount: "1250",
            quantity: "2",
            description: "Red t-shirt Zango",
            paymentType: PaymentTypeConsentsOrderItemsPaymentType.Single,
          },
        ],
      },
      addresses: [
        {
          functions: [Functions2.Business],
          reference: "Clothing store",
          buildingName: "Winners",
          line1: " string",
          line2: "string",
          line3: "string",
          city: "string",
          state: "ON",
          postalCode: "N1T 0G9",
          country: "Canada",
          poBoxNumber: "1234",
        },
      ],
      fees: [{ name: "fast track fee", amount: "200" }, { name: "gift wrap fee", amount: "100" }],
      paymentMethod: { digitalWallet: { provider: "KONEK" } },
      supportedPaymentMethods: [
        SupportedPaymentMethod.MastercardCredit,
        SupportedPaymentMethod.MastercardDebit,
        SupportedPaymentMethod.VisaCredit,
        SupportedPaymentMethod.VisaDebit,
        SupportedPaymentMethod.AmexCredit,
        SupportedPaymentMethod.BankTransferSavings,
        SupportedPaymentMethod.BankTransferChecking,
        SupportedPaymentMethod.BankTransferLineOfCredit,
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>body?</code> | <code>[CreateRequest](src/models/create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.consents.createConsent(request)`

- **OnSuccess**: <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: throws <code>[Consents.CreateConsentError](src/resources/consents.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.consents.createConsent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse, Consents.CreateConsentError&gt;</code>, with `result.value` of type <code>[CreateResponse](src/models/create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConsent(request: Consents.GetConsentRequest, options?: RequestOptions): ApiPromise&lt;ConsentsResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details for a single consent that was created on the Global payments system during the checkout process.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.consents.getConsent({ id: "some example string", xGpVersion: "2021-03-22" });
  // TODO: Handle 'response' of type ConsentsResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.consents
  .getConsent({ id: "some example string", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConsentsResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique Global Payments generated id used to reference a consent on the Global Payments system. Often referred to as the consent id. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.consents.getConsent(request)`

- **OnSuccess**: <code>[ConsentsResponse1](src/models/consents-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.consents.getConsent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConsentsResponse1, ApiError&gt;</code>, with `result.value` of type <code>[ConsentsResponse1](src/models/consents-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getConsentsList(request: Consents.GetConsentsListRequest, options?: RequestOptions): ApiPromise&lt;GetListResponse2, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Consents obtained previously with Global Payments using criteria passed in the query string. Page through the result set to access all records.



</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.consents.getConsentsList({
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    id: "CON_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    dba: "MERCHANT XYZ",
    xGpVersion: "some example string",
  });
  // TODO: Handle 'response' of type GetListResponse2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.consents
  .getConsentsList({
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    id: "CON_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    dba: "MERCHANT XYZ",
    xGpVersion: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetListResponse2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>id?</code> | <code>string</code> | - |
| <code>dba?</code> | <code>string</code> | - |
| <code>tokenFormat?</code> | <code>[TokenFormatConsentsPaymentMethodDigitalWalletTokenFormat](src/models/token-format-consents-payment-method-digital-wallet-token-format.ts)</code> | - |
| <code>providerReference?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[StatusConsentsStatus](src/models/status-consents-status.ts)</code> | - |
| <code>amount?</code> | <code>string</code> | - |
| <code>taxAmount?</code> | <code>string</code> | - |
| <code>firstAmount?</code> | <code>string</code> | - |
| <code>paymentMethodDigitalWalletReference?</code> | <code>string</code> | - |
| <code>xGpVersion</code> | <code>string</code> | The version of the API to execute the request. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.consents.getConsentsList(request)`

- **OnSuccess**: <code>[GetListResponse2](src/models/get-list-response2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.consents.getConsentsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetListResponse2, ApiError&gt;</code>, with `result.value` of type <code>[GetListResponse2](src/models/get-list-response2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CurrencyConversions

> Source: [CurrencyConversions](src/resources/currency-conversions.ts)

<details>
<summary><code>binRangesListDownload(request: CurrencyConversions.BinRangesListDownloadRequest, options?: RequestOptions): ApiPromise&lt;CurrencyConversionsDccBinRangesResponse, CurrencyConversions.BinRangesListDownloadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download a list of Dynamic Currency Conversion (DCC) BIN ranges.

Download a list of BIN ranges that support Dynamic Currency Conversion (DCC). The list can be filtered solely based on the merchant's base currency or the list of payer currencies the merchant supports. The list can be stored locally on the device so a presented card number can be checked to determine if DCC is supported before performing an actual DCC Rate Lookup request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.currencyConversions.binRangesListDownload({
    country: "US",
    merchantCurrency: "USD",
    accountName: "Transaction_Processing",
    accountId: "TRA_6716058969854a48b33347043ff8225f",
    xGpVersion: "some example string",
  });
  // TODO: Handle 'response' of type CurrencyConversionsDccBinRangesResponse
} catch (err) {
  // TODO: Handle 'err' of type CurrencyConversions.BinRangesListDownloadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.currencyConversions
  .binRangesListDownload({
    country: "US",
    merchantCurrency: "USD",
    accountName: "Transaction_Processing",
    accountId: "TRA_6716058969854a48b33347043ff8225f",
    xGpVersion: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CurrencyConversionsDccBinRangesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>country</code> | <code>string</code> | The country in ISO-3166-1(alpha-2 code) format. |
| <code>merchantCurrency</code> | <code>string</code> | The base currency of the merchant in ISO-4217(alpha-3). |
| <code>accountName?</code> | <code>string</code> | A meaningful label for the merchant account set by Global Payments. |
| <code>accountId?</code> | <code>string</code> | A unique identifier for the merchant account set by Global Payments. |
| <code>payerCurrency?</code> | <code>string[]</code> | The currency or list of currencies that the merchant accepts in ISO-4217(alpha-3). |
| <code>timeLastReceived?</code> | <code>string</code> | The date to start obtaining updated information from. |
| <code>lastIndex?</code> | <code>number</code> | The index number to start obtaining information from. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.currencyConversions.binRangesListDownload(request)`

- **OnSuccess**: <code>[CurrencyConversionsDccBinRangesResponse](src/models/currency-conversions-dcc-bin-ranges-response.ts)</code>
- **OnError**: throws <code>[CurrencyConversions.BinRangesListDownloadError](src/resources/currency-conversions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.currencyConversions.binRangesListDownload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CurrencyConversionsDccBinRangesResponse, CurrencyConversions.BinRangesListDownloadError&gt;</code>, with `result.value` of type <code>[CurrencyConversionsDccBinRangesResponse](src/models/currency-conversions-dcc-bin-ranges-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>requestDcc(request: CurrencyConversions.RequestDccRequest, options?: RequestOptions): ApiPromise&lt;CreateResponseCurrencyConversion, CurrencyConversions.RequestDccError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request the conversion of a Sale or Refund Transaction amount to the equivalent amount in the currency of the Payer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.currencyConversions.requestDcc({
    xGpVersion: "some example string",
    body: {
      accountName: "DCC",
      channel: DataDictionaryV1TransactionChannel.Cnp,
      country: "US",
      amount: "10000",
      currency: "USD",
      reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
      paymentMethod: {
        entryMode: EntryMode5.Ecom,
        card: { number: "4006097467207025", expiryMonth: "05", expiryYear: "25" },
      },
    },
  });
  // TODO: Handle 'response' of type CreateResponseCurrencyConversion
} catch (err) {
  // TODO: Handle 'err' of type CurrencyConversions.RequestDccError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.currencyConversions
  .requestDcc({
    xGpVersion: "some example string",
    body: {
      accountName: "DCC",
      channel: DataDictionaryV1TransactionChannel.Cnp,
      country: "US",
      amount: "10000",
      currency: "USD",
      reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
      paymentMethod: {
        entryMode: EntryMode5.Ecom,
        card: { number: "4006097467207025", expiryMonth: "05", expiryYear: "25" },
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponseCurrencyConversion
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body</code> | <code>[CreateRequestCurrencyConversion](src/models/create-request-currency-conversion.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.currencyConversions.requestDcc(request)`

- **OnSuccess**: <code>[CreateResponseCurrencyConversion](src/models/create-response-currency-conversion.ts)</code>
- **OnError**: throws <code>[CurrencyConversions.RequestDccError](src/resources/currency-conversions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.currencyConversions.requestDcc(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponseCurrencyConversion, CurrencyConversions.RequestDccError&gt;</code>, with `result.value` of type <code>[CreateResponseCurrencyConversion](src/models/create-response-currency-conversion.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## DisputesApi

> Source: [DisputesApi](src/resources/disputes-api.ts)

<details>
<summary><code>acceptDispute(request: DisputesApi.AcceptDisputeRequest, options?: RequestOptions): ApiPromise&lt;AcceptResponse, DisputesApi.AcceptDisputeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accept liability for a Dispute that will likely result in financial impact to the Merchant.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputesApi.acceptDispute({
    id: "DIS_SAND_abcd1236",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type AcceptResponse
} catch (err) {
  // TODO: Handle 'err' of type DisputesApi.AcceptDisputeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputesApi
  .acceptDispute({ id: "DIS_SAND_abcd1236", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AcceptResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputesApi.acceptDispute(request)`

- **OnSuccess**: <code>[AcceptResponse](src/models/accept-response.ts)</code>
- **OnError**: throws <code>[DisputesApi.AcceptDisputeError](src/resources/disputes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputesApi.acceptDispute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AcceptResponse, DisputesApi.AcceptDisputeError&gt;</code>, with `result.value` of type <code>[AcceptResponse](src/models/accept-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>challengeDispute(request: DisputesApi.ChallengeDisputeRequest, options?: RequestOptions): ApiPromise&lt;DisputesChallengeResponse, DisputesApi.ChallengeDisputeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Challenge a Dispute by providing evidence indicating Merchant does not have liability for a particular Dispute.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputesApi.challengeDispute({
    id: "DIS_SAND_abcd1236",
    xGpVersion: "2021-03-22",
    body: { documents: [{ b64Content: "R0lGODlhigPCAXAAACwAAAAAigPCAYf///8AQnv=" }] },
  });
  // TODO: Handle 'response' of type DisputesChallengeResponse
} catch (err) {
  // TODO: Handle 'err' of type DisputesApi.ChallengeDisputeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputesApi
  .challengeDispute({
    id: "DIS_SAND_abcd1236",
    xGpVersion: "2021-03-22",
    body: { documents: [{ b64Content: "R0lGODlhigPCAXAAACwAAAAAigPCAYf///8AQnv=" }] },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisputesChallengeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[DisputesChallengeRequest](src/models/disputes-challenge-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputesApi.challengeDispute(request)`

- **OnSuccess**: <code>[DisputesChallengeResponse](src/models/disputes-challenge-response.ts)</code>
- **OnError**: throws <code>[DisputesApi.ChallengeDisputeError](src/resources/disputes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputesApi.challengeDispute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisputesChallengeResponse, DisputesApi.ChallengeDisputeError&gt;</code>, with `result.value` of type <code>[DisputesChallengeResponse](src/models/disputes-challenge-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDisputeDocument(request: DisputesApi.GetDisputeDocumentRequest, options?: RequestOptions): ApiPromise&lt;DisputesDocumentsResponse, DisputesApi.GetDisputeDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a Document associated with a Dispute.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputesApi.getDisputeDocument({
    id: "DIS_SAND_abcd1236",
    docId: "DOC_lskdnfosdfjsdfsdf23dasd",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type DisputesDocumentsResponse
} catch (err) {
  // TODO: Handle 'err' of type DisputesApi.GetDisputeDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputesApi
  .getDisputeDocument({
    id: "DIS_SAND_abcd1236",
    docId: "DOC_lskdnfosdfjsdfsdf23dasd",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisputesDocumentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>docId</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputesApi.getDisputeDocument(request)`

- **OnSuccess**: <code>[DisputesDocumentsResponse](src/models/disputes-documents-response.ts)</code>
- **OnError**: throws <code>[DisputesApi.GetDisputeDocumentError](src/resources/disputes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputesApi.getDisputeDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisputesDocumentsResponse, DisputesApi.GetDisputeDocumentError&gt;</code>, with `result.value` of type <code>[DisputesDocumentsResponse](src/models/disputes-documents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDisputes(request?: DisputesApi.GetDisputesRequest, options?: RequestOptions): ApiPromise&lt;DisputesResponse, DisputesApi.GetDisputesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of disputes recently processed, using criteria passed in the query string. Page through the result set to access all records.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputesApi.getDisputes({
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: "FROM_STAGE_TIME_CREATED",
    brand: BrandAuthenticationsPaymentMethodCardBrand.Visa,
    status: StatusDisputesStatus.UnderReview,
    stage: StageDisputesStage.Retrieval,
    depositId: "DEP_128932Y328Y92",
    orderReference: "b636294sd5b6826hjdnde92",
    acquirerCode: AcquirerCodeDisputesAcquirerCode.Gpn,
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type DisputesResponse
} catch (err) {
  // TODO: Handle 'err' of type DisputesApi.GetDisputesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputesApi
  .getDisputes({
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: "FROM_STAGE_TIME_CREATED",
    brand: BrandAuthenticationsPaymentMethodCardBrand.Visa,
    status: StatusDisputesStatus.UnderReview,
    stage: StageDisputesStage.Retrieval,
    depositId: "DEP_128932Y328Y92",
    orderReference: "b636294sd5b6826hjdnde92",
    acquirerCode: AcquirerCodeDisputesAcquirerCode.Gpn,
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisputesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 5 |
| <code>order?</code> | <code>[DataDictionaryV1PaginationOrder](src/models/data-dictionary-v1-pagination-order.ts)</code> | - |
| <code>orderBy?</code> | <code>string</code> | -<br>**Default**: "FROM_STAGE_TIME_CREATED" |
| <code>arn?</code> | <code>string</code> | - |
| <code>brand?</code> | <code>[BrandAuthenticationsPaymentMethodCardBrand](src/models/brand-authentications-payment-method-card-brand.ts)</code> | - |
| <code>status?</code> | <code>[StatusDisputesStatus](src/models/status-disputes-status.ts)</code> | - |
| <code>stage?</code> | <code>[StageDisputesStage](src/models/stage-disputes-stage.ts)</code> | - |
| <code>fromStageTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toStageTimeCreated?</code> | <code>string</code> (date) | - |
| <code>systemMid?</code> | <code>string</code> | The system merchant identifier. |
| <code>systemHierarchy?</code> | <code>string</code> | - |
| <code>depositId?</code> | <code>string</code> | - |
| <code>orderReference?</code> | <code>string</code> | - |
| <code>acquirerCode?</code> | <code>[AcquirerCodeDisputesAcquirerCode](src/models/acquirer-code-disputes-acquirer-code.ts)</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputesApi.getDisputes(request)`

- **OnSuccess**: <code>[DisputesResponse](src/models/disputes-response.ts)</code>
- **OnError**: throws <code>[DisputesApi.GetDisputesError](src/resources/disputes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputesApi.getDisputes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisputesResponse, DisputesApi.GetDisputesError&gt;</code>, with `result.value` of type <code>[DisputesResponse](src/models/disputes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSingleDispute(request: DisputesApi.GetSingleDisputeRequest, options?: RequestOptions): ApiPromise&lt;DisputesResponse1, DisputesApi.GetSingleDisputeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get info about a Dispute on the Global Payments system using the unique id created by Global Payments for that Dispute.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputesApi.getSingleDispute({
    id: "DIS_SAND_abcd1236",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type DisputesResponse1
} catch (err) {
  // TODO: Handle 'err' of type DisputesApi.GetSingleDisputeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputesApi
  .getSingleDispute({ id: "DIS_SAND_abcd1236", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisputesResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputesApi.getSingleDispute(request)`

- **OnSuccess**: <code>[DisputesResponse1](src/models/disputes-response1.ts)</code>
- **OnError**: throws <code>[DisputesApi.GetSingleDisputeError](src/resources/disputes-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.disputesApi.getSingleDispute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisputesResponse1, DisputesApi.GetSingleDisputeError&gt;</code>, with `result.value` of type <code>[DisputesResponse1](src/models/disputes-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FileProcessing

> Source: [FileProcessing](src/resources/file-processing.ts)

<details>
<summary><code>createUrl(request?: FileProcessing.CreateUrlRequest, options?: RequestOptions): ApiPromise&lt;CreateUrlResponse2, FileProcessing.CreateUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a File Processing resource on the Global Payments platform and return a unique signed URL that you can use to securely upload your encrypted bulk transaction file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fileProcessing.createUrl({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "file_processing",
      notifications: { statusUrl: "https://www.example.com/notifications/return" },
    },
  });
  // TODO: Handle 'response' of type CreateUrlResponse2
} catch (err) {
  // TODO: Handle 'err' of type FileProcessing.CreateUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fileProcessing
  .createUrl({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "file_processing",
      notifications: { statusUrl: "https://www.example.com/notifications/return" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateUrlResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[CreateUrlRequest2](src/models/create-url-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fileProcessing.createUrl(request)`

- **OnSuccess**: <code>[CreateUrlResponse2](src/models/create-url-response2.ts)</code>
- **OnError**: throws <code>[FileProcessing.CreateUrlError](src/resources/file-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fileProcessing.createUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateUrlResponse2, FileProcessing.CreateUrlError&gt;</code>, with `result.value` of type <code>[CreateUrlResponse2](src/models/create-url-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFileDetails(request: FileProcessing.GetFileDetailsRequest, options?: RequestOptions): ApiPromise&lt;FileDetailsResponse2, FileProcessing.GetFileDetailsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the details of a previously created File Processing resource, including its current `status`, the original signed upload URL, and (once processing is complete) the list of signed URLs to download the encrypted response file(s).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fileProcessing.getFileDetails({
    id: "FPR_bnqlo0LgbMt221TczxF70Awdg7c5ez",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type FileDetailsResponse2
} catch (err) {
  // TODO: Handle 'err' of type FileProcessing.GetFileDetailsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fileProcessing
  .getFileDetails({ id: "FPR_bnqlo0LgbMt221TczxF70Awdg7c5ez", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FileDetailsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | A unique identifier for the file resource, generated by Global Payments. Returned in the `id` field of the Create URL response. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fileProcessing.getFileDetails(request)`

- **OnSuccess**: <code>[FileDetailsResponse2](src/models/file-details-response2.ts)</code>
- **OnError**: throws <code>[FileProcessing.GetFileDetailsError](src/resources/file-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fileProcessing.getFileDetails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FileDetailsResponse2, FileProcessing.GetFileDetailsError&gt;</code>, with `result.value` of type <code>[FileDetailsResponse2](src/models/file-details-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFiles(request?: FileProcessing.ListFilesRequest, options?: RequestOptions): ApiPromise&lt;ListFilesResponse2, FileProcessing.ListFilesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list of File Processing resources previously created by the merchant. Results can be filtered by status, id, and creation date range, and paginated using standard paging parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fileProcessing.listFiles({
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: OrderByFileProcessingQueryParamsOrderBy.TimeCreated,
    status: StatusFileProcessingStatus.Initiated,
    fromTimeCreated: "2026-05-03",
    toTimeCreated: "2026-05-10",
    id: "FMA_2d4ddd693ff7448b97ea420b13aecac2",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ListFilesResponse2
} catch (err) {
  // TODO: Handle 'err' of type FileProcessing.ListFilesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fileProcessing
  .listFiles({
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: OrderByFileProcessingQueryParamsOrderBy.TimeCreated,
    status: StatusFileProcessingStatus.Initiated,
    fromTimeCreated: "2026-05-03",
    toTimeCreated: "2026-05-10",
    id: "FMA_2d4ddd693ff7448b97ea420b13aecac2",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListFilesResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 5 |
| <code>order?</code> | <code>[DataDictionaryV1PaginationOrder](src/models/data-dictionary-v1-pagination-order.ts)</code> | - |
| <code>orderBy?</code> | <code>[OrderByFileProcessingQueryParamsOrderBy](src/models/order-by-file-processing-query-params-order-by.ts)</code> | - |
| <code>status?</code> | <code>[StatusFileProcessingStatus](src/models/status-file-processing-status.ts)</code> | - |
| <code>fromTimeCreated?</code> | <code>string</code> | - |
| <code>toTimeCreated?</code> | <code>string</code> | - |
| <code>id?</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fileProcessing.listFiles(request)`

- **OnSuccess**: <code>[ListFilesResponse2](src/models/list-files-response2.ts)</code>
- **OnError**: throws <code>[FileProcessing.ListFilesError](src/resources/file-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fileProcessing.listFiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListFilesResponse2, FileProcessing.ListFilesError&gt;</code>, with `result.value` of type <code>[ListFilesResponse2](src/models/list-files-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadFile(request: FileProcessing.UploadFileRequest, options?: RequestOptions): ApiPromise&lt;undefined, FileProcessing.UploadFileError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload the encrypted bulk transaction file to the signed URL returned by `POST /files`.

This request is not sent to the Global Payments API. Instead, it must be sent as-is to the fully qualified `url` returned in the Create URL response. The signed URL contains all authentication and expires after the `expiration_date` value returned by Create URL (default 15 minutes).

Notes:
  - Use HTTP `PUT` and stream the encrypted file as the raw request body (`--data-binary`).
  - The `Content-Type` header must match the value that was signed when the URL was generated (`text/csv`).
  - Do not send the `Authorization`, `X-GP-Version`, or any other Global Payments headers on this request.
  - A successful upload returns HTTP `200` with an empty body. The file's `status` on the Global Payments platform then transitions from `INITIATED` to `UPLOADED`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fileProcessing.uploadFile({
    signedUploadPath:
      "/bkt-gouscnaic-file-processing-str01-unscanned/MER_c5d37eaf0e3841e083c232b2318af55c/Request/FPR_cc3b6f59eff1493bb7525dab70ddb565?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=...&X-Goog-Date=20260921T212903Z&X-Goog-Expires=900&X-Goog-SignedHeaders=content-type%3Bhost&X-Goog-Signature=...",
  });
} catch (err) {
  // TODO: Handle 'err' of type FileProcessing.UploadFileError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fileProcessing
  .uploadFile({
    signedUploadPath:
      "/bkt-gouscnaic-file-processing-str01-unscanned/MER_c5d37eaf0e3841e083c232b2318af55c/Request/FPR_cc3b6f59eff1493bb7525dab70ddb565?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=...&X-Goog-Date=20260921T212903Z&X-Goog-Expires=900&X-Goog-SignedHeaders=content-type%3Bhost&X-Goog-Signature=...",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>signedUploadPath</code> | <code>string</code> | The full path and query string returned in the `url` field of the Create URL response. Send the request to the exact URL returned by Global Payments; do not modify the path or query parameters. The value shown is illustrative only — always use the fresh signed URL returned by the API. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fileProcessing.uploadFile(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[FileProcessing.UploadFileError](src/resources/file-processing.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fileProcessing.uploadFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, FileProcessing.UploadFileError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Funds

> Source: [Funds](src/resources/funds.ts)

<details>
<summary><code>fundMerchant(request?: Funds.FundMerchantRequest, options?: RequestOptions): ApiPromise&lt;FundsResponse3, Funds.FundMerchantError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to deposit funds to a connected business bank account or debit card. Can also be used to add funds to a Global Payments Funds Management Account (FMA) from a connected business bank account.

The `Bank_Transfer_Return_Notification` callback is sent to the URL supplied in an earlier request ({$request.body#/notifications/status_url}); see POST /authentications.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.funds.fundMerchant({
    id: "MER_880c34767b184d5e82b10e767201e648",
    xGpVersion: "2021-03-22",
    body: {
      accountName: "718556837_989567",
      accountId: "FMA_bde109d70fb24d78b25fd364317dd9dc",
      type: TypeFundsType.Debit,
      amount: "500",
      currency: "USD",
      paymentMethod: PaymentMethodFundsPaymentMethod.Card,
    },
  });
  // TODO: Handle 'response' of type FundsResponse3
} catch (err) {
  // TODO: Handle 'err' of type Funds.FundMerchantError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.funds
  .fundMerchant({
    id: "MER_880c34767b184d5e82b10e767201e648",
    xGpVersion: "2021-03-22",
    body: {
      accountName: "718556837_989567",
      accountId: "FMA_bde109d70fb24d78b25fd364317dd9dc",
      type: TypeFundsType.Debit,
      amount: "500",
      currency: "USD",
      paymentMethod: PaymentMethodFundsPaymentMethod.Card,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundsResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | -<br>**Default**: "MER_880c34767b184d5e82b10e767201e648" |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[FundsCreate2](src/models/funds-create2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.funds.fundMerchant(request)`

- **OnSuccess**: <code>[FundsResponse3](src/models/funds-response3.ts)</code>
- **OnError**: throws <code>[Funds.FundMerchantError](src/resources/funds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.funds.fundMerchant(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundsResponse3, Funds.FundMerchantError&gt;</code>, with `result.value` of type <code>[FundsResponse3](src/models/funds-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFund(request: Funds.GetFundRequest, options?: RequestOptions): ApiPromise&lt;FundsResponse3, Funds.GetFundError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get info about a Funding event on the Global Payments system using the unique id created by Global Payments for that Fund.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.funds.getFund({
    id: "MER_880c34767b184d5e82b10e767201e648",
    fndId: "FND_ZkGPrJiuVRMCh10VEyInhn0fbTKdfT",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type FundsResponse3
} catch (err) {
  // TODO: Handle 'err' of type Funds.GetFundError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.funds
  .getFund({
    id: "MER_880c34767b184d5e82b10e767201e648",
    fndId: "FND_ZkGPrJiuVRMCh10VEyInhn0fbTKdfT",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FundsResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | -<br>**Default**: "MER_880c34767b184d5e82b10e767201e648" |
| <code>fndId</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.funds.getFund(request)`

- **OnSuccess**: <code>[FundsResponse3](src/models/funds-response3.ts)</code>
- **OnError**: throws <code>[Funds.GetFundError](src/resources/funds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.funds.getFund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FundsResponse3, Funds.GetFundError&gt;</code>, with `result.value` of type <code>[FundsResponse3](src/models/funds-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFunds(request: Funds.ListFundsRequest, options?: RequestOptions): ApiPromise&lt;ListFundsResponse2, Funds.ListFundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Funds recently processed, using criteria passed in the query string. Page through the result set to access all records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.funds.listFunds({
    id: "MER_880c34767b184d5e82b10e767201e648",
    fmaId: "FMA_bde109d70fb24d78b25fd364317dd9dc",
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ListFundsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Funds.ListFundsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.funds
  .listFunds({
    id: "MER_880c34767b184d5e82b10e767201e648",
    fmaId: "FMA_bde109d70fb24d78b25fd364317dd9dc",
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListFundsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | -<br>**Default**: "MER_880c34767b184d5e82b10e767201e648" |
| <code>fmaId</code> | <code>string</code> | - |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.funds.listFunds(request)`

- **OnSuccess**: <code>[ListFundsResponse2](src/models/list-funds-response2.ts)</code>
- **OnError**: throws <code>[Funds.ListFundsError](src/resources/funds.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.funds.listFunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListFundsResponse2, Funds.ListFundsError&gt;</code>, with `result.value` of type <code>[ListFundsResponse2](src/models/list-funds-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Installments

> Source: [Installments](src/resources/installments.ts)

<details>
<summary><code>getAvailableInstallmentPlans(request?: Installments.GetAvailableInstallmentPlansRequest, options?: RequestOptions): ApiPromise&lt;PostInstallmentsResponse2, Installments.GetAvailableInstallmentPlansError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Confirm installment plans available

Confirm which installments plans are available to the cardholder for a specific transaction.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.installments.getAvailableInstallmentPlans({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "transaction_processing",
      channel: ChannelInstallmentsChannel.Cp,
      amount: "11099",
      currency: CurrencyInstallmentsCurrency.Usd,
      country: CountryInstallmentsCountry.Us,
      reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
      paymentMethod: {
        entryMode: EntryModeInstallmentsPaymentMethodEntryMode.Ecom,
        card: { number: "4263970000005262", expiryMonth: "12", expiryYear: "30" },
      },
    },
  });
  // TODO: Handle 'response' of type PostInstallmentsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Installments.GetAvailableInstallmentPlansError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.installments
  .getAvailableInstallmentPlans({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "transaction_processing",
      channel: ChannelInstallmentsChannel.Cp,
      amount: "11099",
      currency: CurrencyInstallmentsCurrency.Usd,
      country: CountryInstallmentsCountry.Us,
      reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
      paymentMethod: {
        entryMode: EntryModeInstallmentsPaymentMethodEntryMode.Ecom,
        card: { number: "4263970000005262", expiryMonth: "12", expiryYear: "30" },
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostInstallmentsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>body?</code> | <code>[PostInstallmentsRequest2](src/models/post-installments-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.installments.getAvailableInstallmentPlans(request)`

- **OnSuccess**: <code>[PostInstallmentsResponse2](src/models/post-installments-response2.ts)</code>
- **OnError**: throws <code>[Installments.GetAvailableInstallmentPlansError](src/resources/installments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.installments.getAvailableInstallmentPlans(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostInstallmentsResponse2, Installments.GetAvailableInstallmentPlansError&gt;</code>, with `result.value` of type <code>[PostInstallmentsResponse2](src/models/post-installments-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Links

> Source: [Links](src/resources/links.ts)

<details>
<summary><code>createLink(request?: Links.CreateLinkRequest, options?: RequestOptions): ApiPromise&lt;LinksResponse1, Links.CreateLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new link

The PayLink API allows you to generate single or multi-use unique payment links. These links can be sent to consumers. You can send these links to your customers via any channel, for example, email, SMS etc. When the customer clicks on the link they will be redirected to a page where they can make a payment.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.links.createLink({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "PAYU_APM_Transaction_Processing",
      type: TypeLinksType.HostedPaymentPage,
      usageMode: UsageModeLinksUsageMode.Single,
      usageLimit: "1",
      reference: "Test PayU HPP for March Invoice",
      name: "Mobile Bill Payment",
      description: "March Invoice",
      expirationDate: "2026-12-21T11:55:03Z",
      payer: {
        name: "James Mason",
        language: "en",
        email: "jamesmason@example.com",
        billingAddress: {
          line1: "123 Maison Avenue",
          line2: "Hill Road",
          line3: "Paluch",
          city: "Warsaw",
          postalCode: "123456",
          country: "PL",
        },
      },
      order: {
        amount: "1000",
        currency: "PLN",
        reference: "Test PayU HPP for March Invoice",
        transactionConfiguration: {
          channel: ChannelLinksOrderTransactionConfigurationChannel.Cnp,
          country: "PL",
          captureMode: CaptureModeLinksOrderTransactionConfigurationCaptureMode.Auto,
          currencyConversionMode:
            CurrencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionMode.Yes,
          allowedPaymentMethods: [
            AllowedPaymentMethod.Card,
            AllowedPaymentMethod.BankPayment,
            AllowedPaymentMethod.Blik,
          ],
        },
        paymentMethodConfiguration: {
          authentication: {},
          apm: {},
          storageMode: StorageModeLinksOrderPaymentMethodConfigurationStorageMode.Prompt,
        },
        shippingAddress: {
          line1: "123 Maison Avenue",
          line2: "Hill Road",
          line3: "Paluch",
          city: "Warsaw",
          postalCode: "123456",
          country: "PL",
        },
      },
      notifications: {
        returnUrl: "https://webhook.site/d76a62ef-4bd1-4a96-b8e2-ef0ea00fd2d4",
        statusUrl: "https://webhook.site/d76a62ef-4bd1-4a96-b8e2-ef0ea00fd2d4",
        cancelUrl: "https://webhook.site/d76a62ef-4bd1-4a96-b8e2-ef0ea00fd2d4",
      },
    },
  });
  // TODO: Handle 'response' of type LinksResponse1
} catch (err) {
  // TODO: Handle 'err' of type Links.CreateLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.links
  .createLink({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "PAYU_APM_Transaction_Processing",
      type: TypeLinksType.HostedPaymentPage,
      usageMode: UsageModeLinksUsageMode.Single,
      usageLimit: "1",
      reference: "Test PayU HPP for March Invoice",
      name: "Mobile Bill Payment",
      description: "March Invoice",
      expirationDate: "2026-12-21T11:55:03Z",
      payer: {
        name: "James Mason",
        language: "en",
        email: "jamesmason@example.com",
        billingAddress: {
          line1: "123 Maison Avenue",
          line2: "Hill Road",
          line3: "Paluch",
          city: "Warsaw",
          postalCode: "123456",
          country: "PL",
        },
      },
      order: {
        amount: "1000",
        currency: "PLN",
        reference: "Test PayU HPP for March Invoice",
        transactionConfiguration: {
          channel: ChannelLinksOrderTransactionConfigurationChannel.Cnp,
          country: "PL",
          captureMode: CaptureModeLinksOrderTransactionConfigurationCaptureMode.Auto,
          currencyConversionMode:
            CurrencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionMode.Yes,
          allowedPaymentMethods: [
            AllowedPaymentMethod.Card,
            AllowedPaymentMethod.BankPayment,
            AllowedPaymentMethod.Blik,
          ],
        },
        paymentMethodConfiguration: {
          authentication: {},
          apm: {},
          storageMode: StorageModeLinksOrderPaymentMethodConfigurationStorageMode.Prompt,
        },
        shippingAddress: {
          line1: "123 Maison Avenue",
          line2: "Hill Road",
          line3: "Paluch",
          city: "Warsaw",
          postalCode: "123456",
          country: "PL",
        },
      },
      notifications: {
        returnUrl: "https://webhook.site/d76a62ef-4bd1-4a96-b8e2-ef0ea00fd2d4",
        statusUrl: "https://webhook.site/d76a62ef-4bd1-4a96-b8e2-ef0ea00fd2d4",
        cancelUrl: "https://webhook.site/d76a62ef-4bd1-4a96-b8e2-ef0ea00fd2d4",
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinksResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>body?</code> | <code>[LinksRequest](src/models/links-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.links.createLink(request)`

- **OnSuccess**: <code>[LinksResponse1](src/models/links-response1.ts)</code>
- **OnError**: throws <code>[Links.CreateLinkError](src/resources/links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.links.createLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinksResponse1, Links.CreateLinkError&gt;</code>, with `result.value` of type <code>[LinksResponse1](src/models/links-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLink(request: Links.GetLinkRequest, options?: RequestOptions): ApiPromise&lt;LinksResponse2, Links.GetLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single view of a link using the Global Payments link id.

Get a single view of a link using the Global Payments ID.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.links.getLink({
    id: "LNK_bnqlo0LgbMt221TczxF70Awdg7c5ez",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type LinksResponse2
} catch (err) {
  // TODO: Handle 'err' of type Links.GetLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.links
  .getLink({ id: "LNK_bnqlo0LgbMt221TczxF70Awdg7c5ez", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinksResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.links.getLink(request)`

- **OnSuccess**: <code>[LinksResponse2](src/models/links-response2.ts)</code>
- **OnError**: throws <code>[Links.GetLinkError](src/resources/links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.links.getLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinksResponse2, Links.GetLinkError&gt;</code>, with `result.value` of type <code>[LinksResponse2](src/models/links-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getListOfLinks(request?: Links.GetListOfLinksRequest, options?: RequestOptions): ApiPromise&lt;LinksResponse, Links.GetListOfLinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of links recently processed, using criteria passed in the query string. Page through the result set to access all records.

Get a list of links recently processed, using criteria passedin the query string. Page through the result set to access all records.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.links.getListOfLinks({
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    id: "LNK_bnqlo0LgbMt221TczxF70Awdg7c5ez",
    status: StatusLinksStatus.Active,
    usageMode: UsageModeLinksUsageMode.Single,
    name: "Mobile Bill Payment",
    description: "February and March Invoice",
    country: "US",
    amount: "11099",
    currency: "USD",
    shippable: ShippableLinksShippable.Yes,
    expirationDate: "2025-12-20T23:59:59Z",
    page: 1,
    pageSize: 5,
    orderBy: "TIME_CREATED",
    order: Order53.Asc,
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type LinksResponse
} catch (err) {
  // TODO: Handle 'err' of type Links.GetListOfLinksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.links
  .getListOfLinks({
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    id: "LNK_bnqlo0LgbMt221TczxF70Awdg7c5ez",
    status: StatusLinksStatus.Active,
    usageMode: UsageModeLinksUsageMode.Single,
    name: "Mobile Bill Payment",
    description: "February and March Invoice",
    country: "US",
    amount: "11099",
    currency: "USD",
    shippable: ShippableLinksShippable.Yes,
    expirationDate: "2025-12-20T23:59:59Z",
    page: 1,
    pageSize: 5,
    orderBy: "TIME_CREATED",
    order: Order53.Asc,
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinksResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>id?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[StatusLinksStatus](src/models/status-links-status.ts)</code> | - |
| <code>usageMode?</code> | <code>[UsageModeLinksUsageMode](src/models/usage-mode-links-usage-mode.ts)</code> | - |
| <code>name?</code> | <code>string</code> | - |
| <code>description?</code> | <code>string</code> | - |
| <code>reference?</code> | <code>string</code> | - |
| <code>country?</code> | <code>string</code> | - |
| <code>amount?</code> | <code>string</code> | - |
| <code>currency?</code> | <code>string</code> | - |
| <code>shippable?</code> | <code>[ShippableLinksShippable](src/models/shippable-links-shippable.ts)</code> | - |
| <code>expirationDate?</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | Indicates the page sequence to return in the response. The number of records presented on each page is determined by page_size field.1 means the first page, 2 the second and so on.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | The total number of records to return in a single page for a list.   page:<br>**Default**: 5 |
| <code>orderBy?</code> | <code>string</code> | The field to order the list by.<br>**Default**: "TIME_CREATED" |
| <code>order?</code> | <code>[Order53](src/models/order53.ts)</code> | The direction of the ordering of the entire list, ASC or DESC<br>**Default**: "DESC" |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.links.getListOfLinks(request)`

- **OnSuccess**: <code>[LinksResponse](src/models/links-response.ts)</code>
- **OnError**: throws <code>[Links.GetListOfLinksError](src/resources/links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.links.getListOfLinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinksResponse, Links.GetListOfLinksError&gt;</code>, with `result.value` of type <code>[LinksResponse](src/models/links-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Merchants

> Source: [Merchants](src/resources/merchants.ts)

<details>
<summary><code>addressLookup(request: Merchants.AddressLookupRequest, options?: RequestOptions): ApiPromise&lt;AddressLookupResponse, Merchants.AddressLookupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

To ensure the appropriate formatting of an address is included as part of a UK merchant boarding application, you can use Address Lookup to perform a search on all addresses with a certain house number or house name within a postal code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchants.addressLookup({
    postalCode: "CB6 1AS",
    buildingNumber: "1001",
    buildingName: "1001",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type AddressLookupResponse
} catch (err) {
  // TODO: Handle 'err' of type Merchants.AddressLookupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchants
  .addressLookup({
    postalCode: "CB6 1AS",
    buildingNumber: "1001",
    buildingName: "1001",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AddressLookupResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>postalCode</code> | <code>string</code> | - |
| <code>buildingNumber?</code> | <code>string</code> | - |
| <code>buildingName?</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchants.addressLookup(request)`

- **OnSuccess**: <code>[AddressLookupResponse](src/models/address-lookup-response.ts)</code>
- **OnError**: throws <code>[Merchants.AddressLookupError](src/resources/merchants.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchants.addressLookup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AddressLookupResponse, Merchants.AddressLookupError&gt;</code>, with `result.value` of type <code>[AddressLookupResponse](src/models/address-lookup-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>boardMerchant(request?: Merchants.BoardMerchantRequest, options?: RequestOptions): ApiPromise&lt;CreateResponseMerchants, Merchants.BoardMerchantError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Board merchant

Underwrite and configure a Merchant with payment processing capability on the Global Payments system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchants.boardMerchant({
    xGpVersion: "2021-03-22",
    body: {
      name: "{{$randomUserName}}",
      type: "MERCHANT",
      legalName: "Global Payments Inc.",
      dba: "Global Payments",
      merchantCategoryCode: "5999",
      website: "https://www.example.com",
      description: "SAAS and Payments as a Service",
      currency: "CAD",
      ipAddress: "165.225.11.46",
      notificationEmail: "merchantsupport@example.com",
      taxIdReference: "153759426",
      reference: "767867986879",
      attestations: [
        {
          name: NameMerchantsAttestationsName.PropaySubMerchantTermsAndConditions,
          ipAddress: "165.225.11.46",
          timeOfAttestation: new Date(Date.UTC(2021, 4, 3, 21, 23, 39, 718)),
        },
        { ipAddress: "165.225.11.46", timeOfAttestation: new Date(Date.UTC(2021, 4, 3, 21, 23, 39, 718)) },
      ],
      addresses: [
        {
          functions: [Functions2.Business],
          line1: "1 Business Address",
          line2: "Suite 2",
          line3: "foyer",
          city: "Winnipeg",
          state: "MB",
          postalCode: "R2J 1Z6",
          country: "CA",
        },
        {
          functions: [Functions2.Shipping],
          line1: "1 Shipping Address",
          line2: "Suite 2",
          line3: "foyer",
          city: "Wi",
          state: "MB",
          postalCode: "R2J 1Z6",
          country: "CA",
        },
      ],
      paymentProcessingStatistics: {
        totalMonthlySalesAmount: "3000000",
        averageTicketSalesAmount: "50000",
        highestTicketSalesAmount: "60000",
      },
      pricingProfile: "Canada Test",
      paymentMethods: [
        {
          functions: [Functions4.AccountActivationFee],
          name: "Card Holder Name",
          reference: "1234",
          card: { number: "4263970000005262", expiryMonth: "01", expiryYear: "25", cvv: "123", address: {} },
        },
        {
          functions: [Functions4.PrimaryPayout, Functions4.SecondaryPayout],
          name: "John’s National Bank Account",
          reference: "My National Bank Account",
          bankTransfer: {
            accountHolderType: AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType.Personal,
            accountType: AccountTypeMerchantsPaymentMethodsBankTransferAccountType.Checking,
            accountNumber: "156423786",
            bank: {},
          },
        },
      ],
      persons: [
        {
          functions: [Functions5.Applicant, Functions5.BeneficialOwner],
          firstName: "John",
          middleName: "G",
          lastName: "Doe",
          email: "{{$randomEmail}}",
          dateOfBirth: "1988-01-31",
          jobTitle: "CEO",
          nationalIdReference: "132435169",
          addresses: [
            {
              line1: "1 Business Address",
              line2: "Suite 2",
              line3: "foyer",
              city: "Winnipeg",
              state: "MB",
              postalCode: "R2J 1Z6",
              country: "CA",
              contactPhone: {},
              workPhone: {},
            },
          ],
        },
      ],
      products: [
        { id: "PRO_FMA_PUSH-FUNDS_PP" },
        { id: "PRO_TRA_CNP_PPP" },
        { id: "PRO_d02541e6-84e4-48e7-86a3-dddb68f51310" },
      ],
      notifications: { statusUrl: "https://www.example.com/notifications/status" },
    },
  });
  // TODO: Handle 'response' of type CreateResponseMerchants
} catch (err) {
  // TODO: Handle 'err' of type Merchants.BoardMerchantError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchants
  .boardMerchant({
    xGpVersion: "2021-03-22",
    body: {
      name: "{{$randomUserName}}",
      type: "MERCHANT",
      legalName: "Global Payments Inc.",
      dba: "Global Payments",
      merchantCategoryCode: "5999",
      website: "https://www.example.com",
      description: "SAAS and Payments as a Service",
      currency: "CAD",
      ipAddress: "165.225.11.46",
      notificationEmail: "merchantsupport@example.com",
      taxIdReference: "153759426",
      reference: "767867986879",
      attestations: [
        {
          name: NameMerchantsAttestationsName.PropaySubMerchantTermsAndConditions,
          ipAddress: "165.225.11.46",
          timeOfAttestation: new Date(Date.UTC(2021, 4, 3, 21, 23, 39, 718)),
        },
        { ipAddress: "165.225.11.46", timeOfAttestation: new Date(Date.UTC(2021, 4, 3, 21, 23, 39, 718)) },
      ],
      addresses: [
        {
          functions: [Functions2.Business],
          line1: "1 Business Address",
          line2: "Suite 2",
          line3: "foyer",
          city: "Winnipeg",
          state: "MB",
          postalCode: "R2J 1Z6",
          country: "CA",
        },
        {
          functions: [Functions2.Shipping],
          line1: "1 Shipping Address",
          line2: "Suite 2",
          line3: "foyer",
          city: "Wi",
          state: "MB",
          postalCode: "R2J 1Z6",
          country: "CA",
        },
      ],
      paymentProcessingStatistics: {
        totalMonthlySalesAmount: "3000000",
        averageTicketSalesAmount: "50000",
        highestTicketSalesAmount: "60000",
      },
      pricingProfile: "Canada Test",
      paymentMethods: [
        {
          functions: [Functions4.AccountActivationFee],
          name: "Card Holder Name",
          reference: "1234",
          card: { number: "4263970000005262", expiryMonth: "01", expiryYear: "25", cvv: "123", address: {} },
        },
        {
          functions: [Functions4.PrimaryPayout, Functions4.SecondaryPayout],
          name: "John’s National Bank Account",
          reference: "My National Bank Account",
          bankTransfer: {
            accountHolderType: AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType.Personal,
            accountType: AccountTypeMerchantsPaymentMethodsBankTransferAccountType.Checking,
            accountNumber: "156423786",
            bank: {},
          },
        },
      ],
      persons: [
        {
          functions: [Functions5.Applicant, Functions5.BeneficialOwner],
          firstName: "John",
          middleName: "G",
          lastName: "Doe",
          email: "{{$randomEmail}}",
          dateOfBirth: "1988-01-31",
          jobTitle: "CEO",
          nationalIdReference: "132435169",
          addresses: [
            {
              line1: "1 Business Address",
              line2: "Suite 2",
              line3: "foyer",
              city: "Winnipeg",
              state: "MB",
              postalCode: "R2J 1Z6",
              country: "CA",
              contactPhone: {},
              workPhone: {},
            },
          ],
        },
      ],
      products: [
        { id: "PRO_FMA_PUSH-FUNDS_PP" },
        { id: "PRO_TRA_CNP_PPP" },
        { id: "PRO_d02541e6-84e4-48e7-86a3-dddb68f51310" },
      ],
      notifications: { statusUrl: "https://www.example.com/notifications/status" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponseMerchants
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[MerchantsRequest](src/models/merchants-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchants.boardMerchant(request)`

- **OnSuccess**: <code>[CreateResponseMerchants](src/models/create-response-merchants.ts)</code>
- **OnError**: throws <code>[Merchants.BoardMerchantError](src/resources/merchants.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchants.boardMerchant(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponseMerchants, Merchants.BoardMerchantError&gt;</code>, with `result.value` of type <code>[CreateResponseMerchants](src/models/create-response-merchants.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editMerchant(request: Merchants.EditMerchantRequest, options?: RequestOptions): ApiPromise&lt;CreateResponseMerchants, Merchants.EditMerchantError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edit merchant

Edit the detail associated with a Merchant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchants.editMerchant({
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    xGpVersion: "2021-03-22",
    body: {
      paymentMethods: [
        {
          functions: [Functions4.PrimaryPayout],
          name: "primary bank name",
          bankTransfer: {
            accountHolderType: AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType.Personal,
            accountType: AccountTypeMerchantsPaymentMethodsBankTransferAccountType.Checking,
            accountNumber: "1234567",
            bank: {},
          },
        },
      ],
    },
  });
  // TODO: Handle 'response' of type CreateResponseMerchants
} catch (err) {
  // TODO: Handle 'err' of type Merchants.EditMerchantError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchants
  .editMerchant({
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    xGpVersion: "2021-03-22",
    body: {
      paymentMethods: [
        {
          functions: [Functions4.PrimaryPayout],
          name: "primary bank name",
          bankTransfer: {
            accountHolderType: AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType.Personal,
            accountType: AccountTypeMerchantsPaymentMethodsBankTransferAccountType.Checking,
            accountNumber: "1234567",
            bank: {},
          },
        },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponseMerchants
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | This is the merchant id to uniquely identify the entity on the Global Payments system. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[EditRequest](src/models/edit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchants.editMerchant(request)`

- **OnSuccess**: <code>[CreateResponseMerchants](src/models/create-response-merchants.ts)</code>
- **OnError**: throws <code>[Merchants.EditMerchantError](src/resources/merchants.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchants.editMerchant(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponseMerchants, Merchants.EditMerchantError&gt;</code>, with `result.value` of type <code>[CreateResponseMerchants](src/models/create-response-merchants.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchantSingle(request: Merchants.GetMerchantSingleRequest, options?: RequestOptions): ApiPromise&lt;MerchantsResponse2, Merchants.GetMerchantSingleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about the merchant executing the action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchants.getMerchantSingle({
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type MerchantsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Merchants.GetMerchantSingleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchants
  .getMerchantSingle({ id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MerchantsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | This is the merchant id to uniquely identify the entity on the Global Payments system. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchants.getMerchantSingle(request)`

- **OnSuccess**: <code>[MerchantsResponse2](src/models/merchants-response2.ts)</code>
- **OnError**: throws <code>[Merchants.GetMerchantSingleError](src/resources/merchants.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchants.getMerchantSingle(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MerchantsResponse2, Merchants.GetMerchantSingleError&gt;</code>, with `result.value` of type <code>[MerchantsResponse2](src/models/merchants-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMerchants(request?: Merchants.GetMerchantsRequest, options?: RequestOptions): ApiPromise&lt;GetMerchantsListResponse2, Merchants.GetMerchantsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Merchants within a Partner Program.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchants.getMerchants({
    page: 1,
    pageSize: 5,
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    status: StatusMerchantsStatus.Active,
    name: "Unique Username",
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type GetMerchantsListResponse2
} catch (err) {
  // TODO: Handle 'err' of type Merchants.GetMerchantsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchants
  .getMerchants({
    page: 1,
    pageSize: 5,
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    status: StatusMerchantsStatus.Active,
    name: "Unique Username",
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetMerchantsListResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 5 |
| <code>id?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[StatusMerchantsStatus](src/models/status-merchants-status.ts)</code> | - |
| <code>name?</code> | <code>string</code> | - |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchants.getMerchants(request)`

- **OnSuccess**: <code>[GetMerchantsListResponse2](src/models/get-merchants-list-response2.ts)</code>
- **OnError**: throws <code>[Merchants.GetMerchantsError](src/resources/merchants.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchants.getMerchants(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetMerchantsListResponse2, Merchants.GetMerchantsError&gt;</code>, with `result.value` of type <code>[GetMerchantsListResponse2](src/models/get-merchants-list-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>uploadMerchantDocumentation(request: Merchants.UploadMerchantDocumentationRequest, options?: RequestOptions): ApiPromise&lt;DocumentsResponse2, Merchants.UploadMerchantDocumentationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload merchant documentation

Upload documentation related to a Merchant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchants.uploadMerchantDocumentation({
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type DocumentsResponse2
} catch (err) {
  // TODO: Handle 'err' of type Merchants.UploadMerchantDocumentationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchants
  .uploadMerchantDocumentation({ id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DocumentsResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | This is the merchant id to uniquely identify the entity on the Global Payments system. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[DocumentsRequest2](src/models/documents-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchants.uploadMerchantDocumentation(request)`

- **OnSuccess**: <code>[DocumentsResponse2](src/models/documents-response2.ts)</code>
- **OnError**: throws <code>[Merchants.UploadMerchantDocumentationError](src/resources/merchants.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.merchants.uploadMerchantDocumentation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DocumentsResponse2, Merchants.UploadMerchantDocumentationError&gt;</code>, with `result.value` of type <code>[DocumentsResponse2](src/models/documents-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](src/resources/orders.ts)

<details>
<summary><code>completeOrder(request: Orders.CompleteOrderRequest, options?: RequestOptions): ApiPromise&lt;CompleteOrderResponse2, Orders.CompleteOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Complete an order where the price has been checked. This will finalize the order and the device will be shipped. 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.completeOrder({
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    ordId: "ORD_zvQ6JT0n0wfhaztiL8vCyE0yQslvkz",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type CompleteOrderResponse2
} catch (err) {
  // TODO: Handle 'err' of type Orders.CompleteOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .completeOrder({
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    ordId: "ORD_zvQ6JT0n0wfhaztiL8vCyE0yQslvkz",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompleteOrderResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>ordId</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.completeOrder(request)`

- **OnSuccess**: <code>[CompleteOrderResponse2](src/models/complete-order-response2.ts)</code>
- **OnError**: throws <code>[Orders.CompleteOrderError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.completeOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompleteOrderResponse2, Orders.CompleteOrderError&gt;</code>, with `result.value` of type <code>[CompleteOrderResponse2](src/models/complete-order-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOrder(request: Orders.CreateOrderRequest, options?: RequestOptions): ApiPromise&lt;OrderResponse, Orders.CreateOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allows an embedded partner to order a device used for card present transactions or check the price of a potential order. 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.createOrder({
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    xGpVersion: "2021-03-22",
    body: {
      products: {
        id: "PRO_TRA_CP-US-CARD-A920_SP",
        name: "string",
        device: {
          quantity: "1",
          manufacturerModel: "A920",
          accountNameFormat: AccountNameFormatOrdersProductsDeviceAccountNameFormat.SerialNumber,
        },
      },
      pricingProfile: "test",
      addresses: {
        functions: FunctionsOrdersAddressesFunctions.Shipping,
        name: "John Doe",
        email: "Gerda.Johnston43@yahoo.com",
        line1: "123 Merchant Street",
        line2: "Suite 2",
        line3: "foyer",
        city: "Beverly Hills",
        state: "CA",
        postalCode: "90210",
        country: "US",
        contactPhone: { countryCode: "01", subscriberNumber: "8008675309" },
      },
      paymentMethod: {
        name: "John Doe",
        card: {
          number: "4111111111111111",
          cvv: "852",
          expiryMonth: "11",
          expiryYear: "30",
          avsPostalCode: "90210",
        },
      },
      notifications: { statusUrl: "https://www.example.com/notifications/status" },
    },
  });
  // TODO: Handle 'response' of type OrderResponse
} catch (err) {
  // TODO: Handle 'err' of type Orders.CreateOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .createOrder({
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    xGpVersion: "2021-03-22",
    body: {
      products: {
        id: "PRO_TRA_CP-US-CARD-A920_SP",
        name: "string",
        device: {
          quantity: "1",
          manufacturerModel: "A920",
          accountNameFormat: AccountNameFormatOrdersProductsDeviceAccountNameFormat.SerialNumber,
        },
      },
      pricingProfile: "test",
      addresses: {
        functions: FunctionsOrdersAddressesFunctions.Shipping,
        name: "John Doe",
        email: "Gerda.Johnston43@yahoo.com",
        line1: "123 Merchant Street",
        line2: "Suite 2",
        line3: "foyer",
        city: "Beverly Hills",
        state: "CA",
        postalCode: "90210",
        country: "US",
        contactPhone: { countryCode: "01", subscriberNumber: "8008675309" },
      },
      paymentMethod: {
        name: "John Doe",
        card: {
          number: "4111111111111111",
          cvv: "852",
          expiryMonth: "11",
          expiryYear: "30",
          avsPostalCode: "90210",
        },
      },
      notifications: { statusUrl: "https://www.example.com/notifications/status" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | This is the merchant id to uniquely identify the entity on the Global Payments system. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[OrderRequest](src/models/order-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.createOrder(request)`

- **OnSuccess**: <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: throws <code>[Orders.CreateOrderError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.createOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderResponse, Orders.CreateOrderError&gt;</code>, with `result.value` of type <code>[OrderResponse](src/models/order-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrder(request: Orders.GetOrderRequest, options?: RequestOptions): ApiPromise&lt;OrderSingle, Orders.GetOrderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get info about a Order

Get info about an Order event on the Global Payments system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrder({
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    ordId: "ORD_zvQ6JT0n0wfhaztiL8vCyE0yQslvkz",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type OrderSingle
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .getOrder({
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    ordId: "ORD_zvQ6JT0n0wfhaztiL8vCyE0yQslvkz",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderSingle
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>ordId</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrder(request)`

- **OnSuccess**: <code>[OrderSingle](src/models/order-single.ts)</code>
- **OnError**: throws <code>[Orders.GetOrderError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderSingle, Orders.GetOrderError&gt;</code>, with `result.value` of type <code>[OrderSingle](src/models/order-single.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getOrders(request: Orders.GetOrdersRequest, options?: RequestOptions): ApiPromise&lt;OrderList, Orders.GetOrdersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Orders

Get a list of orders made for a particular merchant. Page through the result set to access all records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.getOrders({
    id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type OrderList
} catch (err) {
  // TODO: Handle 'err' of type Orders.GetOrdersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders
  .getOrders({ id: "MER_31087d9c-e68c-4389-9f13-39378e166ea5", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OrderList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | This is the merchant id to uniquely identify the entity on the Global Payments system. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.getOrders(request)`

- **OnSuccess**: <code>[OrderList](src/models/order-list.ts)</code>
- **OnError**: throws <code>[Orders.GetOrdersError](src/resources/orders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.orders.getOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OrderList, Orders.GetOrdersError&gt;</code>, with `result.value` of type <code>[OrderList](src/models/order-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Payers

> Source: [Payers](src/resources/payers.ts)

<details>
<summary><code>createPayer(request?: Payers.CreatePayerRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse1, Payers.CreatePayerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a Payer on the Global Payments system that can be used when creating a sale. 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payers.createPayer({
    xGpVersion: "2021-03-22",
    body: {
      firstName: "John",
      lastName: "James",
      reference: "payer-123",
      paymentMethods: [
        { id: "PMT_oOAH6BClraQWS3Qy07dh7tZAN3X2nW", default: DefaultPayersPaymentMethodsDefault.Yes },
      ],
    },
  });
  // TODO: Handle 'response' of type CreateResponse1
} catch (err) {
  // TODO: Handle 'err' of type Payers.CreatePayerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payers
  .createPayer({
    xGpVersion: "2021-03-22",
    body: {
      firstName: "John",
      lastName: "James",
      reference: "payer-123",
      paymentMethods: [
        { id: "PMT_oOAH6BClraQWS3Qy07dh7tZAN3X2nW", default: DefaultPayersPaymentMethodsDefault.Yes },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[CreateRequest1](src/models/create-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payers.createPayer(request)`

- **OnSuccess**: <code>[CreateResponse1](src/models/create-response1.ts)</code>
- **OnError**: throws <code>[Payers.CreatePayerError](src/resources/payers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payers.createPayer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse1, Payers.CreatePayerError&gt;</code>, with `result.value` of type <code>[CreateResponse1](src/models/create-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePayer(request: Payers.DeletePayerRequest, options?: RequestOptions): ApiPromise&lt;PayersResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a payer

Delete a Payer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payers.deletePayer({
    id: "PYR_e1f1a86a10944ae9abea5b091450b692",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type PayersResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payers
  .deletePayer({ id: "PYR_e1f1a86a10944ae9abea5b091450b692", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayersResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier for the Payer on the Global Payments system. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payers.deletePayer(request)`

- **OnSuccess**: <code>[PayersResponse](src/models/payers-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.payers.deletePayer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayersResponse, ApiError&gt;</code>, with `result.value` of type <code>[PayersResponse](src/models/payers-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editPayer(request: Payers.EditPayerRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse1, Payers.EditPayerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the information associated with a Payer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payers.editPayer({
    id: "PYR_oOAH6BClraQWS3Qy07dh7tZAN3X2nW",
    xGpVersion: "2021-03-22",
    body: { firstName: "John", lastName: "James" },
  });
  // TODO: Handle 'response' of type CreateResponse1
} catch (err) {
  // TODO: Handle 'err' of type Payers.EditPayerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payers
  .editPayer({
    id: "PYR_oOAH6BClraQWS3Qy07dh7tZAN3X2nW",
    xGpVersion: "2021-03-22",
    body: { firstName: "John", lastName: "James" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[CreateRequest4](src/models/create-request4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payers.editPayer(request)`

- **OnSuccess**: <code>[CreateResponse1](src/models/create-response1.ts)</code>
- **OnError**: throws <code>[Payers.EditPayerError](src/resources/payers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payers.editPayer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse1, Payers.EditPayerError&gt;</code>, with `result.value` of type <code>[CreateResponse1](src/models/create-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayer(request: Payers.GetPayerRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse1, Payers.GetPayerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Details about a single Payer

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payers.getPayer({
    id: "PYR_e1f1a86a10944ae9abea5b091450b692",
    masked: MaskedPayersMasked.Yes,
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type CreateResponse1
} catch (err) {
  // TODO: Handle 'err' of type Payers.GetPayerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payers
  .getPayer({
    id: "PYR_e1f1a86a10944ae9abea5b091450b692",
    masked: MaskedPayersMasked.Yes,
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier for the Payer on the Global Payments system. |
| <code>masked?</code> | <code>[MaskedPayersMasked](src/models/masked-payers-masked.ts)</code> | -<br>**Default**: "YES" |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payers.getPayer(request)`

- **OnSuccess**: <code>[CreateResponse1](src/models/create-response1.ts)</code>
- **OnError**: throws <code>[Payers.GetPayerError](src/resources/payers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payers.getPayer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse1, Payers.GetPayerError&gt;</code>, with `result.value` of type <code>[CreateResponse1](src/models/create-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayersList(request?: Payers.GetPayersListRequest, options?: RequestOptions): ApiPromise&lt;ListResponse2, Payers.GetPayersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Payers using criteria passed in the query string. Page through the result set to access all records.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payers.getPayersList({
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    id: "PYR_oOAH6BClraQWS3Qy07dh7tZAN3X2nW",
    reference: "payer-123",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ListResponse2
} catch (err) {
  // TODO: Handle 'err' of type Payers.GetPayersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payers
  .getPayersList({
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    id: "PYR_oOAH6BClraQWS3Qy07dh7tZAN3X2nW",
    reference: "payer-123",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>id?</code> | <code>string</code> | - |
| <code>reference?</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payers.getPayersList(request)`

- **OnSuccess**: <code>[ListResponse2](src/models/list-response2.ts)</code>
- **OnError**: throws <code>[Payers.GetPayersListError](src/resources/payers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.payers.getPayersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse2, Payers.GetPayersListError&gt;</code>, with `result.value` of type <code>[ListResponse2](src/models/list-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PaymentMethodsApi

> Source: [PaymentMethodsApi](src/resources/payment-methods-api.ts)

<details>
<summary><code>createPaymentMethod(request?: PaymentMethodsApi.CreatePaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;CreateResponse2, PaymentMethodsApi.CreatePaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create Payment Method

Create a stored payment method on the Global Payments system and return a unique Global Payments ID  that can be used to create future Sale or Refund Transactions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.createPaymentMethod({
    xGpVersion: "2021-03-22",
    body: {
      reference: "CustABC_Card_1",
      usageMode: UsageModePaymentMethodsUsageMode.Multiple,
      card: { number: "4263970000005262", expiryMonth: "05", expiryYear: "30", cvv: "233" },
    },
  });
  // TODO: Handle 'response' of type CreateResponse2
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.CreatePaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi
  .createPaymentMethod({
    xGpVersion: "2021-03-22",
    body: {
      reference: "CustABC_Card_1",
      usageMode: UsageModePaymentMethodsUsageMode.Multiple,
      card: { number: "4263970000005262", expiryMonth: "05", expiryYear: "30", cvv: "233" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[CreateRequest21](src/models/create-request21.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.createPaymentMethod(request)`

- **OnSuccess**: <code>[CreateResponse2](src/models/create-response2.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.CreatePaymentMethodError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.createPaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponse2, PaymentMethodsApi.CreatePaymentMethodError&gt;</code>, with `result.value` of type <code>[CreateResponse2](src/models/create-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePaymentMethod(request: PaymentMethodsApi.DeletePaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;PaymentMethodsResponse, PaymentMethodsApi.DeletePaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a stored payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.deletePaymentMethod({
    id: "PMT_3367f648-558a-4979-8b1f-7002961d5d37",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type PaymentMethodsResponse
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.DeletePaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi
  .deletePaymentMethod({ id: "PMT_3367f648-558a-4979-8b1f-7002961d5d37", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentMethodsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique Global Payments generated id used to reference a stored payment method on the Global Payments system. Often referred to as the payment method token. This value can be used instead of payment method details such as a card number and expiry date. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.deletePaymentMethod(request)`

- **OnSuccess**: <code>[PaymentMethodsResponse](src/models/payment-methods-response.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.DeletePaymentMethodError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.deletePaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentMethodsResponse, PaymentMethodsApi.DeletePaymentMethodError&gt;</code>, with `result.value` of type <code>[PaymentMethodsResponse](src/models/payment-methods-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detokenizePaymentMethod(request: PaymentMethodsApi.DetokenizePaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;Detokenize2, PaymentMethodsApi.DetokenizePaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detokenize the stored payment method to get a full payment method information.(Availability in production depends on your live configuration.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.detokenizePaymentMethod({
    id: "PMT_3367f648-558a-4979-8b1f-7002961d5d37",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type Detokenize2
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.DetokenizePaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi
  .detokenizePaymentMethod({ id: "PMT_3367f648-558a-4979-8b1f-7002961d5d37", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Detokenize2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique Global Payments generated id used to reference a stored payment method on the Global Payments system. Often referred to as the payment method token. This value can be used instead of payment method details such as a card number and expiry date. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.detokenizePaymentMethod(request)`

- **OnSuccess**: <code>[Detokenize2](src/models/detokenize2.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.DetokenizePaymentMethodError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.detokenizePaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Detokenize2, PaymentMethodsApi.DetokenizePaymentMethodError&gt;</code>, with `result.value` of type <code>[Detokenize2](src/models/detokenize2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>editPaymentMethod(request: PaymentMethodsApi.EditPaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;PatchResponse2, PaymentMethodsApi.EditPaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change information about a stored payment method such as update the card expiry date or the funding type of card or the bank identifier of the account number.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.editPaymentMethod({
    id: "PMT_3367f648-558a-4979-8b1f-7002961d5d37",
    xGpVersion: "2021-03-22",
    body: {
      name: "John's payment method",
      card: { number: "4263970000005262", expiryMonth: "05", expiryYear: "30" },
    },
  });
  // TODO: Handle 'response' of type PatchResponse2
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.EditPaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi
  .editPaymentMethod({
    id: "PMT_3367f648-558a-4979-8b1f-7002961d5d37",
    xGpVersion: "2021-03-22",
    body: {
      name: "John's payment method",
      card: { number: "4263970000005262", expiryMonth: "05", expiryYear: "30" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PatchResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique Global Payments generated id used to reference a stored payment method on the Global Payments system. Often referred to as the payment method token. This value can be used instead of payment method details such as a card number and expiry date. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[PatchRequest2](src/models/patch-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.editPaymentMethod(request)`

- **OnSuccess**: <code>[PatchResponse2](src/models/patch-response2.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.EditPaymentMethodError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.editPaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PatchResponse2, PaymentMethodsApi.EditPaymentMethodError&gt;</code>, with `result.value` of type <code>[PatchResponse2](src/models/patch-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateCryptogram(request?: PaymentMethodsApi.GenerateCryptogramRequest, options?: RequestOptions): ApiPromise&lt;GenerateCryptogramResponse4, PaymentMethodsApi.GenerateCryptogramError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a Cryptogram using a previously obtained Network Token

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.generateCryptogram({ xGpVersion: "2021-03-22" });
  // TODO: Handle 'response' of type GenerateCryptogramResponse4
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.GenerateCryptogramError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi.generateCryptogram({ xGpVersion: "2021-03-22" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GenerateCryptogramResponse4
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[GenerateCryptogram4](src/models/generate-cryptogram4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.generateCryptogram(request)`

- **OnSuccess**: <code>[GenerateCryptogramResponse4](src/models/generate-cryptogram-response4.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.GenerateCryptogramError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.generateCryptogram(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GenerateCryptogramResponse4, PaymentMethodsApi.GenerateCryptogramError&gt;</code>, with `result.value` of type <code>[GenerateCryptogramResponse4](src/models/generate-cryptogram-response4.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generateCryptogramById(request: PaymentMethodsApi.GenerateCryptogramByIdRequest, options?: RequestOptions): ApiPromise&lt;GenerateCryptogramResponse3, PaymentMethodsApi.GenerateCryptogramByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a Cryptogram using a previously stored Network Token. 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.generateCryptogramById({
    id: "PMT_3367f648-558a-4979-8b1f-7002961d5d37",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type GenerateCryptogramResponse3
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.GenerateCryptogramByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi
  .generateCryptogramById({ id: "PMT_3367f648-558a-4979-8b1f-7002961d5d37", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GenerateCryptogramResponse3
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique Global Payments generated id used to reference a stored payment method on the Global Payments system. Often referred to as the payment method token. This value can be used instead of payment method details such as a card number and expiry date. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[GenerateCryptogram3](src/models/generate-cryptogram3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.generateCryptogramById(request)`

- **OnSuccess**: <code>[GenerateCryptogramResponse3](src/models/generate-cryptogram-response3.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.GenerateCryptogramByIdError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.generateCryptogramById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GenerateCryptogramResponse3, PaymentMethodsApi.GenerateCryptogramByIdError&gt;</code>, with `result.value` of type <code>[GenerateCryptogramResponse3](src/models/generate-cryptogram-response3.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPaymentMethod(request: PaymentMethodsApi.GetPaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;GetResponse21, PaymentMethodsApi.GetPaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a single view of a stored payment method.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.getPaymentMethod({
    id: "PMT_3367f648-558a-4979-8b1f-7002961d5d37",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type GetResponse21
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.GetPaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi
  .getPaymentMethod({ id: "PMT_3367f648-558a-4979-8b1f-7002961d5d37", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetResponse21
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique Global Payments generated id used to reference a stored payment method on the Global Payments system. Often referred to as the payment method token. This value can be used instead of payment method details such as a card number and expiry date. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.getPaymentMethod(request)`

- **OnSuccess**: <code>[GetResponse21](src/models/get-response21.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.GetPaymentMethodError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.getPaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetResponse21, PaymentMethodsApi.GetPaymentMethodError&gt;</code>, with `result.value` of type <code>[GetResponse21](src/models/get-response21.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentMethods(request?: PaymentMethodsApi.ListPaymentMethodsRequest, options?: RequestOptions): ApiPromise&lt;ListResponse21, PaymentMethodsApi.ListPaymentMethodsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list of stored payment methods.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.listPaymentMethods({
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: "TIME_CREATED",
    reference: "CustABC_Card_1",
    status: StatusPaymentMethodsStatus.Active,
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    id: "PMT_31087d9c-e68c-4389-9f13-39378e166ea5",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ListResponse21
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.ListPaymentMethodsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi
  .listPaymentMethods({
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: "TIME_CREATED",
    reference: "CustABC_Card_1",
    status: StatusPaymentMethodsStatus.Active,
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    id: "PMT_31087d9c-e68c-4389-9f13-39378e166ea5",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListResponse21
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 5 |
| <code>order?</code> | <code>[DataDictionaryV1PaginationOrder](src/models/data-dictionary-v1-pagination-order.ts)</code> | - |
| <code>orderBy?</code> | <code>string</code> | -<br>**Default**: "TIME_CREATED" |
| <code>reference?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[StatusPaymentMethodsStatus](src/models/status-payment-methods-status.ts)</code> | - |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>fromTimeLastUpdated?</code> | <code>Date</code> (date-time) | - |
| <code>toTimeLastUpdated?</code> | <code>Date</code> (date-time) | - |
| <code>id?</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.listPaymentMethods(request)`

- **OnSuccess**: <code>[ListResponse21](src/models/list-response21.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.ListPaymentMethodsError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.listPaymentMethods(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListResponse21, PaymentMethodsApi.ListPaymentMethodsError&gt;</code>, with `result.value` of type <code>[ListResponse21](src/models/list-response21.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchForPaymentMethod(request?: PaymentMethodsApi.SearchForPaymentMethodRequest, options?: RequestOptions): ApiPromise&lt;SearchResponse2, PaymentMethodsApi.SearchForPaymentMethodError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return a list of stored payment methods where search criteria is in the message body.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentMethodsApi.searchForPaymentMethod({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "Tokenization",
      card: { number: "4263970000005262", expiryMonth: "05", expiryYear: "30" },
    },
  });
  // TODO: Handle 'response' of type SearchResponse2
} catch (err) {
  // TODO: Handle 'err' of type PaymentMethodsApi.SearchForPaymentMethodError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentMethodsApi
  .searchForPaymentMethod({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "Tokenization",
      card: { number: "4263970000005262", expiryMonth: "05", expiryYear: "30" },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[SearchRequest2](src/models/search-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentMethodsApi.searchForPaymentMethod(request)`

- **OnSuccess**: <code>[SearchResponse2](src/models/search-response2.ts)</code>
- **OnError**: throws <code>[PaymentMethodsApi.SearchForPaymentMethodError](src/resources/payment-methods-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentMethodsApi.searchForPaymentMethod(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse2, PaymentMethodsApi.SearchForPaymentMethodError&gt;</code>, with `result.value` of type <code>[SearchResponse2](src/models/search-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reports

> Source: [Reports](src/resources/reports.ts)

<details>
<summary><code>getTransactionSummaryReport(request: Reports.GetTransactionSummaryReportRequest, options?: RequestOptions): ApiPromise&lt;SummaryReport2, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transaction Summary Report

Get an aggregated view of all Transactions across all Payment Methods.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reports.getTransactionSummaryReport({
    type: TypeReportReportsType.TransactionSummary,
    paymentMethodCategory: CategoryReportReportsPaymentMethodBreakdownCategory.Card,
    paymentMethodBrand: BrandReportReportsPaymentMethodBreakdownBrand.Visa,
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type SummaryReport2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reports
  .getTransactionSummaryReport({
    type: TypeReportReportsType.TransactionSummary,
    paymentMethodCategory: CategoryReportReportsPaymentMethodBreakdownCategory.Card,
    paymentMethodBrand: BrandReportReportsPaymentMethodBreakdownBrand.Visa,
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SummaryReport2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>[TypeReportReportsType](src/models/type-report-reports-type.ts)</code> | - |
| <code>paymentMethodCategory?</code> | <code>[CategoryReportReportsPaymentMethodBreakdownCategory](src/models/category-report-reports-payment-method-breakdown-category.ts)</code> | - |
| <code>paymentMethodBrand?</code> | <code>[BrandReportReportsPaymentMethodBreakdownBrand](src/models/brand-report-reports-payment-method-breakdown-brand.ts)</code> | - |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reports.getTransactionSummaryReport(request)`

- **OnSuccess**: <code>[SummaryReport2](src/models/summary-report2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.reports.getTransactionSummaryReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SummaryReport2, ApiError&gt;</code>, with `result.value` of type <code>[SummaryReport2](src/models/summary-report2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## SettlementReporting

> Source: [SettlementReporting](src/resources/settlement-reporting.ts)

<details>
<summary><code>getDepositList(request: SettlementReporting.GetDepositListRequest, options?: RequestOptions): ApiPromise&lt;DepositsList, SettlementReporting.GetDepositListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Deposits using criteria passed in the query string. Page through the result set to access all records.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settlementReporting.getDepositList({
    accountName: "Settlement Reporting",
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: "TIME_CREATED",
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    id: "DEP_2342423423",
    status: "FUNDED",
    amount: "500",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type DepositsList
} catch (err) {
  // TODO: Handle 'err' of type SettlementReporting.GetDepositListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementReporting
  .getDepositList({
    accountName: "Settlement Reporting",
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: "TIME_CREATED",
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    id: "DEP_2342423423",
    status: "FUNDED",
    amount: "500",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DepositsList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | A meaningful label for the merchant account set by Global Payments. |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 5 |
| <code>order?</code> | <code>[DataDictionaryV1PaginationOrder](src/models/data-dictionary-v1-pagination-order.ts)</code> | - |
| <code>orderBy?</code> | <code>string</code> | -<br>**Default**: "TIME_CREATED" |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>id?</code> | <code>string</code> | - |
| <code>status?</code> | <code>string</code> | - |
| <code>amount?</code> | <code>string</code> | - |
| <code>maskedAccountNumberLast4?</code> | <code>string</code> | - |
| <code>systemMid?</code> | <code>string</code> | - |
| <code>systemHierarchy?</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementReporting.getDepositList(request)`

- **OnSuccess**: <code>[DepositsList](src/models/deposits-list.ts)</code>
- **OnError**: throws <code>[SettlementReporting.GetDepositListError](src/resources/settlement-reporting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementReporting.getDepositList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DepositsList, SettlementReporting.GetDepositListError&gt;</code>, with `result.value` of type <code>[DepositsList](src/models/deposits-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDepositSingle(request: SettlementReporting.GetDepositSingleRequest, options?: RequestOptions): ApiPromise&lt;DepositsSingle, SettlementReporting.GetDepositSingleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the details of a single Deposit using its unique id.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settlementReporting.getDepositSingle({
    id: "DEP_2342423423",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type DepositsSingle
} catch (err) {
  // TODO: Handle 'err' of type SettlementReporting.GetDepositSingleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementReporting
  .getDepositSingle({ id: "DEP_2342423423", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DepositsSingle
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | This is the deposit id created to uniquely identify it in the Global Payments system. |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementReporting.getDepositSingle(request)`

- **OnSuccess**: <code>[DepositsSingle](src/models/deposits-single.ts)</code>
- **OnError**: throws <code>[SettlementReporting.GetDepositSingleError](src/resources/settlement-reporting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementReporting.getDepositSingle(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DepositsSingle, SettlementReporting.GetDepositSingleError&gt;</code>, with `result.value` of type <code>[DepositsSingle](src/models/deposits-single.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getMonthlyFeeReportList(request: SettlementReporting.GetMonthlyFeeReportListRequest, options?: RequestOptions): ApiPromise&lt;MonthlyFeeReportsList, SettlementReporting.GetMonthlyFeeReportListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of Monthly Fee Reports from Global Payments. Page through the result set to access all records.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settlementReporting.getMonthlyFeeReportList({
    accountName: "Settlement_Reporting",
    fromTimeCreated: "2024-07",
    toTimeCreated: "2024-11",
    page: 1,
    pageSize: 5,
    order: Order53.Asc,
    orderBy: "TIME_CREATED",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type MonthlyFeeReportsList
} catch (err) {
  // TODO: Handle 'err' of type SettlementReporting.GetMonthlyFeeReportListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementReporting
  .getMonthlyFeeReportList({
    accountName: "Settlement_Reporting",
    fromTimeCreated: "2024-07",
    toTimeCreated: "2024-11",
    page: 1,
    pageSize: 5,
    order: Order53.Asc,
    orderBy: "TIME_CREATED",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MonthlyFeeReportsList
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | - |
| <code>fromTimeCreated?</code> | <code>string</code> | - |
| <code>toTimeCreated?</code> | <code>string</code> | - |
| <code>systemMid?</code> | <code>string</code> | - |
| <code>systemHierarchy?</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | Indicates the page sequence to return in the response. The number of records presented on each page is determined by page_size field.1 means the first page, 2 the second and so on.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | The total number of records to return in a single page for a list.   page:<br>**Default**: 5 |
| <code>order?</code> | <code>[Order53](src/models/order53.ts)</code> | The direction of the ordering of the entire list, ASC or DESC<br>**Default**: "DESC" |
| <code>orderBy?</code> | <code>string</code> | The field to order the list by.<br>**Default**: "TIME_CREATED" |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementReporting.getMonthlyFeeReportList(request)`

- **OnSuccess**: <code>[MonthlyFeeReportsList](src/models/monthly-fee-reports-list.ts)</code>
- **OnError**: throws <code>[SettlementReporting.GetMonthlyFeeReportListError](src/resources/settlement-reporting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementReporting.getMonthlyFeeReportList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MonthlyFeeReportsList, SettlementReporting.GetMonthlyFeeReportListError&gt;</code>, with `result.value` of type <code>[MonthlyFeeReportsList](src/models/monthly-fee-reports-list.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSettledDisputes(request: SettlementReporting.GetSettledDisputesRequest, options?: RequestOptions): ApiPromise&lt;SettlementDisputesResponse, SettlementReporting.GetSettledDisputesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of disputes that affected a merchant's bank account using criteria passed in the query string. Page through the result set to access all records.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settlementReporting.getSettledDisputes({
    accountName: "Settlement_Reporting",
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: "FROM_STAGE_TIME_CREATED",
    brand: BrandAuthenticationsPaymentMethodCardBrand.Visa,
    status: StatusSettlementDisputesStatus.Funded,
    stage: StageSettlementDisputesStage.Retrieval,
    orderReference: "b636294sd5b6826hjdnde92",
    id: "DIS_SAND_abcd1236",
    depositId: "DEP_128932Y328Y92",
    reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
    numberFirst6: "424242",
    numberLast4: "1234",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type SettlementDisputesResponse
} catch (err) {
  // TODO: Handle 'err' of type SettlementReporting.GetSettledDisputesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementReporting
  .getSettledDisputes({
    accountName: "Settlement_Reporting",
    page: 1,
    pageSize: 5,
    order: DataDictionaryV1PaginationOrder.Asc,
    orderBy: "FROM_STAGE_TIME_CREATED",
    brand: BrandAuthenticationsPaymentMethodCardBrand.Visa,
    status: StatusSettlementDisputesStatus.Funded,
    stage: StageSettlementDisputesStage.Retrieval,
    orderReference: "b636294sd5b6826hjdnde92",
    id: "DIS_SAND_abcd1236",
    depositId: "DEP_128932Y328Y92",
    reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
    numberFirst6: "424242",
    numberLast4: "1234",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SettlementDisputesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | -<br>**Default**: 5 |
| <code>order?</code> | <code>[DataDictionaryV1PaginationOrder](src/models/data-dictionary-v1-pagination-order.ts)</code> | - |
| <code>orderBy?</code> | <code>string</code> | -<br>**Default**: "FROM_STAGE_TIME_CREATED" |
| <code>arn?</code> | <code>string</code> | - |
| <code>brand?</code> | <code>[BrandAuthenticationsPaymentMethodCardBrand](src/models/brand-authentications-payment-method-card-brand.ts)</code> | - |
| <code>status?</code> | <code>[StatusSettlementDisputesStatus](src/models/status-settlement-disputes-status.ts)</code> | - |
| <code>stage?</code> | <code>[StageSettlementDisputesStage](src/models/stage-settlement-disputes-stage.ts)</code> | - |
| <code>fromStageTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toStageTimeCreated?</code> | <code>string</code> (date) | - |
| <code>systemMid?</code> | <code>string</code> | The system merchant identifier. |
| <code>systemHierarchy?</code> | <code>string</code> | The system merchant hierarchy |
| <code>orderReference?</code> | <code>string</code> | - |
| <code>fromDepositTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toDepositTimeCreated?</code> | <code>string</code> (date) | - |
| <code>id?</code> | <code>string</code> | - |
| <code>depositId?</code> | <code>string</code> | - |
| <code>brandReference?</code> | <code>string</code> | - |
| <code>authcode?</code> | <code>string</code> | - |
| <code>reference?</code> | <code>string</code> | - |
| <code>numberFirst6?</code> | <code>string</code> | - |
| <code>numberLast4?</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementReporting.getSettledDisputes(request)`

- **OnSuccess**: <code>[SettlementDisputesResponse](src/models/settlement-disputes-response.ts)</code>
- **OnError**: throws <code>[SettlementReporting.GetSettledDisputesError](src/resources/settlement-reporting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementReporting.getSettledDisputes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SettlementDisputesResponse, SettlementReporting.GetSettledDisputesError&gt;</code>, with `result.value` of type <code>[SettlementDisputesResponse](src/models/settlement-disputes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSettledTransactions(request: SettlementReporting.GetSettledTransactionsRequest, options?: RequestOptions): ApiPromise&lt;SettlementTransactionsResponse, SettlementReporting.GetSettledTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of funded transactions using filter criteria passed in the query string. Page through the result set to access all records.

Get a list of funded transactions using criteria passed in the query string. Page through the result set to access all records.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.settlementReporting.getSettledTransactions({
    accountName: "Settlement_Reporting",
    type: TypeSettlementTransactionsType.Sale,
    amount: "11099",
    numberFirst6: "424242",
    numberLast4: "1234",
    brand: BrandAuthenticationsPaymentMethodCardBrand.Visa,
    reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
    status: StatusSettlementTransactionsStatus.Funded,
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    orderReference: "INV#88547",
    accountId: "DAA_86920f927028745yt34d077d88beb29b",
    depositStatus: DepositStatusSettlementTransactionsDepositStatus.Funded,
    fromBatchTimeCreated: "2022-05-01",
    toBatchTimeCreated: "2022-05-01",
    fromTimeCreatedReference: "2022-05-01",
    toTimeCreatedReference: "2022-05-01",
    feesFixedAmountDecimal: "129",
    feesTaxAmountDecimal: "129",
    merchantId: "MER_A6A1EC44522F96630ABEA17A",
    merchantName: "ABC INDUSTRIES",
    merchantAmount: "4706",
    page: 1,
    pageSize: 5,
    order: Order53.Asc,
    orderBy: "TIME_CREATED",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type SettlementTransactionsResponse
} catch (err) {
  // TODO: Handle 'err' of type SettlementReporting.GetSettledTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.settlementReporting
  .getSettledTransactions({
    accountName: "Settlement_Reporting",
    type: TypeSettlementTransactionsType.Sale,
    amount: "11099",
    numberFirst6: "424242",
    numberLast4: "1234",
    brand: BrandAuthenticationsPaymentMethodCardBrand.Visa,
    reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
    status: StatusSettlementTransactionsStatus.Funded,
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    orderReference: "INV#88547",
    accountId: "DAA_86920f927028745yt34d077d88beb29b",
    depositStatus: DepositStatusSettlementTransactionsDepositStatus.Funded,
    fromBatchTimeCreated: "2022-05-01",
    toBatchTimeCreated: "2022-05-01",
    fromTimeCreatedReference: "2022-05-01",
    toTimeCreatedReference: "2022-05-01",
    feesFixedAmountDecimal: "129",
    feesTaxAmountDecimal: "129",
    merchantId: "MER_A6A1EC44522F96630ABEA17A",
    merchantName: "ABC INDUSTRIES",
    merchantAmount: "4706",
    page: 1,
    pageSize: 5,
    order: Order53.Asc,
    orderBy: "TIME_CREATED",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SettlementTransactionsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountName</code> | <code>string</code> | - |
| <code>type?</code> | <code>[TypeSettlementTransactionsType](src/models/type-settlement-transactions-type.ts)</code> | -<br>**Default**: "SALE" |
| <code>amount?</code> | <code>string</code> | - |
| <code>numberFirst6?</code> | <code>string</code> | - |
| <code>numberLast4?</code> | <code>string</code> | - |
| <code>brand?</code> | <code>[BrandAuthenticationsPaymentMethodCardBrand](src/models/brand-authentications-payment-method-card-brand.ts)</code> | - |
| <code>brandReference?</code> | <code>string</code> | - |
| <code>authcode?</code> | <code>string</code> | - |
| <code>reference?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[StatusSettlementTransactionsStatus](src/models/status-settlement-transactions-status.ts)</code> | - |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>orderReference?</code> | <code>string</code> | - |
| <code>accountId?</code> | <code>string</code> | - |
| <code>depositStatus?</code> | <code>[DepositStatusSettlementTransactionsDepositStatus](src/models/deposit-status-settlement-transactions-deposit-status.ts)</code> | - |
| <code>arn?</code> | <code>string</code> | - |
| <code>depositId?</code> | <code>string</code> | - |
| <code>fromDepositTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toDepositTimeCreated?</code> | <code>string</code> (date) | - |
| <code>fromBatchTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toBatchTimeCreated?</code> | <code>string</code> (date) | - |
| <code>fromTimeCreatedReference?</code> | <code>string</code> (date) | - |
| <code>toTimeCreatedReference?</code> | <code>string</code> (date) | - |
| <code>systemMid?</code> | <code>string</code> | - |
| <code>systemTid?</code> | <code>string</code> | - |
| <code>systemHierarchy?</code> | <code>string</code> | - |
| <code>systemDba?</code> | <code>string</code> | - |
| <code>feesChargeType?</code> | <code>string</code> | - |
| <code>feesTotalAmountDecimal?</code> | <code>string</code> | - |
| <code>feesInterchangeProgram?</code> | <code>string</code> | - |
| <code>feesInterchangePerItemFlatAmountDecimal?</code> | <code>string</code> | - |
| <code>feesInterchangePerItemCalculatedAmountDecimal?</code> | <code>string</code> | - |
| <code>feesInterchangePercentage?</code> | <code>string</code> | - |
| <code>feesInterchangePercentageAmountDecimal?</code> | <code>string</code> | - |
| <code>feesInterchangeTotalRate?</code> | <code>string</code> | - |
| <code>feesInterchangeTotalAmountDecimal?</code> | <code>string</code> | - |
| <code>feesDiscountRate1Percentage?</code> | <code>string</code> | - |
| <code>feesDiscountRate2Percentage?</code> | <code>string</code> | - |
| <code>feesDiscountTotalAmountDecimal?</code> | <code>string</code> | - |
| <code>feesExchangeRate?</code> | <code>string</code> | - |
| <code>feesAssessmentTotalAmountDecimal?</code> | <code>string</code> | - |
| <code>feesAssessment1Description?</code> | <code>string</code> | - |
| <code>feesAssessment2Description?</code> | <code>string</code> | - |
| <code>feesAssessment3Description?</code> | <code>string</code> | - |
| <code>feesAssessment4Description?</code> | <code>string</code> | - |
| <code>feesAssessment5Description?</code> | <code>string</code> | - |
| <code>feesAssessment1Percentage?</code> | <code>string</code> | - |
| <code>feesAssessment2Percentage?</code> | <code>string</code> | - |
| <code>feesAssessment3Percentage?</code> | <code>string</code> | - |
| <code>feesAssessment4Percentage?</code> | <code>string</code> | - |
| <code>feesAssessment5Percentage?</code> | <code>string</code> | - |
| <code>feesAssessment1AmountDecimal?</code> | <code>string</code> | - |
| <code>feesAssessment2AmountDecimal?</code> | <code>string</code> | - |
| <code>feesAssessment3AmountDecimal?</code> | <code>string</code> | - |
| <code>feesAssessment4AmountDecimal?</code> | <code>string</code> | - |
| <code>feesAssessment5AmountDecimal?</code> | <code>string</code> | - |
| <code>feesMarkUpDccPercentage?</code> | <code>string</code> | - |
| <code>feesMarkUpMulticurrencyPercentage?</code> | <code>string</code> | - |
| <code>feesFixedAmountDecimal?</code> | <code>string</code> | - |
| <code>feesTaxAmountDecimal?</code> | <code>string</code> | - |
| <code>settlementCode?</code> | <code>string</code> | - |
| <code>settlementTransactionReference?</code> | <code>string</code> | - |
| <code>merchantId?</code> | <code>string</code> | - |
| <code>merchantName?</code> | <code>string</code> | - |
| <code>merchantAmount?</code> | <code>string</code> | - |
| <code>chargeTypeRegion?</code> | <code>string</code> | - |
| <code>page?</code> | <code>number</code> | Indicates the page sequence to return in the response. The number of records presented on each page is determined by page_size field.1 means the first page, 2 the second and so on.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | The total number of records to return in a single page for a list.   page:<br>**Default**: 5 |
| <code>order?</code> | <code>[Order53](src/models/order53.ts)</code> | The direction of the ordering of the entire list, ASC or DESC<br>**Default**: "DESC" |
| <code>orderBy?</code> | <code>string</code> | The field to order the list by.<br>**Default**: "TIME_CREATED" |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.settlementReporting.getSettledTransactions(request)`

- **OnSuccess**: <code>[SettlementTransactionsResponse](src/models/settlement-transactions-response.ts)</code>
- **OnError**: throws <code>[SettlementReporting.GetSettledTransactionsError](src/resources/settlement-reporting.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.settlementReporting.getSettledTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SettlementTransactionsResponse, SettlementReporting.GetSettledTransactionsError&gt;</code>, with `result.value` of type <code>[SettlementTransactionsResponse](src/models/settlement-transactions-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TransactionsApi

> Source: [TransactionsApi](src/resources/transactions-api.ts)

<details>
<summary><code>adjustSaleTransaction(request: TransactionsApi.AdjustSaleTransactionRequest, options?: RequestOptions): ApiPromise&lt;ExistingTransactionResponse, TransactionsApi.AdjustSaleTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adjust an existing Customer Present (CP) transaction.

Adjusts an existing Customer Present (CP) transaction with new information. This action does not change the status of a transaction, only the data it contains. A common example is to add a gratuity amount to the transaction before the transaction is batched.
Availability of this feature in production depends on your allowed live configuration. This request does not alter the authorization amount, if the authorization amount needs to be changed please carry out an incremental authorization request instead.
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.adjustSaleTransaction({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ExistingTransactionResponse
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.AdjustSaleTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .adjustSaleTransaction({ id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExistingTransactionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[AdjustAmtTagRequest](src/models/adjust-amt-tag-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.adjustSaleTransaction(request)`

- **OnSuccess**: <code>[ExistingTransactionResponse](src/models/existing-transaction-response.ts)</code>
- **OnError**: throws <code>[TransactionsApi.AdjustSaleTransactionError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.adjustSaleTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExistingTransactionResponse, TransactionsApi.AdjustSaleTransactionError&gt;</code>, with `result.value` of type <code>[ExistingTransactionResponse](src/models/existing-transaction-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>captureSaleTransaction(request: TransactionsApi.CaptureSaleTransactionRequest, options?: RequestOptions): ApiPromise&lt;ExistingTransactionResponse, TransactionsApi.CaptureSaleTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Capture a Sale transaction that has a status of PREAUTHORIZED to receive funds for that transaction. 
The transaction can be captured for a different amount than what was authorized but if no amount specified the full amount will be captured.
Also it can be captured in multiple segments to facilitate split shipment. (Availability of multiple captures in production depends on your live configuration.)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.captureSaleTransaction({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ExistingTransactionResponse
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.CaptureSaleTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .captureSaleTransaction({ id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExistingTransactionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[ChangeAmtTagLodgingRequest](src/models/change-amt-tag-lodging-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.captureSaleTransaction(request)`

- **OnSuccess**: <code>[ExistingTransactionResponse](src/models/existing-transaction-response.ts)</code>
- **OnError**: throws <code>[TransactionsApi.CaptureSaleTransactionError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.captureSaleTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExistingTransactionResponse, TransactionsApi.CaptureSaleTransactionError&gt;</code>, with `result.value` of type <code>[ExistingTransactionResponse](src/models/existing-transaction-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>challengeDisputedTransaction(request: TransactionsApi.ChallengeDisputedTransactionRequest, options?: RequestOptions): ApiPromise&lt;ChallengeDisputeResponse, TransactionsApi.ChallengeDisputedTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload documentation to challenge a disputed transaction. (Availability in production depends on your live configuration.)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.challengeDisputedTransaction({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
    body: { documents: { b64Content: "SGV5LCBIb3cgYXJlIHlvdT8=", fileFormat: FormatDocumentsFormat.Tif } },
  });
  // TODO: Handle 'response' of type ChallengeDisputeResponse
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.ChallengeDisputedTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .challengeDisputedTransaction({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
    body: { documents: { b64Content: "SGV5LCBIb3cgYXJlIHlvdT8=", fileFormat: FormatDocumentsFormat.Tif } },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChallengeDisputeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[ChallengeDispute](src/models/challenge-dispute.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.challengeDisputedTransaction(request)`

- **OnSuccess**: <code>[ChallengeDisputeResponse](src/models/challenge-dispute-response.ts)</code>
- **OnError**: throws <code>[TransactionsApi.ChallengeDisputedTransactionError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.challengeDisputedTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChallengeDisputeResponse, TransactionsApi.ChallengeDisputedTransactionError&gt;</code>, with `result.value` of type <code>[ChallengeDisputeResponse](src/models/challenge-dispute-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>confirmTransaction(request: TransactionsApi.ConfirmTransactionRequest, options?: RequestOptions): ApiPromise&lt;ConfirmResponse, TransactionsApi.ConfirmTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For certain transactions created using non-card based payment methods (for example, PayPal), merchants are required to confirm that the transaction has completed in order for funds to be transferred.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.confirmTransaction({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ConfirmResponse
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.ConfirmTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .confirmTransaction({ id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConfirmResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[ConfirmRequest](src/models/confirm-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.confirmTransaction(request)`

- **OnSuccess**: <code>[ConfirmResponse](src/models/confirm-response.ts)</code>
- **OnError**: throws <code>[TransactionsApi.ConfirmTransactionError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.confirmTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConfirmResponse, TransactionsApi.ConfirmTransactionError&gt;</code>, with `result.value` of type <code>[ConfirmResponse](src/models/confirm-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createRefundTransactionFromSale(request: TransactionsApi.CreateRefundTransactionFromSaleRequest, options?: RequestOptions): ApiPromise&lt;ExistingTransactionResponse, TransactionsApi.CreateRefundTransactionFromSaleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a Refund transaction from a previous Sale. The payment method associated with the original Sale is used to refund the Payer. If the amount is not specified in the refund request, the full amount of the Sale will be refunded.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.createRefundTransactionFromSale({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
    body: { amount: "1199" },
  });
  // TODO: Handle 'response' of type ExistingTransactionResponse
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.CreateRefundTransactionFromSaleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .createRefundTransactionFromSale({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
    body: { amount: "1199" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExistingTransactionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[RefundRequest3](src/models/refund-request3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.createRefundTransactionFromSale(request)`

- **OnSuccess**: <code>[ExistingTransactionResponse](src/models/existing-transaction-response.ts)</code>
- **OnError**: throws <code>[TransactionsApi.CreateRefundTransactionFromSaleError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.createRefundTransactionFromSale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExistingTransactionResponse, TransactionsApi.CreateRefundTransactionFromSaleError&gt;</code>, with `result.value` of type <code>[ExistingTransactionResponse](src/models/existing-transaction-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSaleOrRefundTransaction(request: TransactionsApi.CreateSaleOrRefundTransactionRequest, options?: RequestOptions): ApiPromise&lt;CreateResponseTransactions, TransactionsApi.CreateSaleOrRefundTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a Sale or Refund transaction that attempts to transfer funds between the Payer and the Merchant using a specific Payment Method.  The Sale transaction can be flagged for automatic capture (default) or flagged as requiring a separate capture action later. 
Availability of refunds that do not link directly to a previous Sale transaction depends on your live configuration.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.createSaleOrRefundTransaction({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "Transaction_Processing",
      type: TransactionTypeAuthenticationsTransactionType.Sale,
      channel: ChannelAuthenticationsChannel.Cnp,
      country: "DE",
      amount: "1999",
      currency: CurrencyAuthenticationsCurrency.Eur,
      reference: "93459c78-f3f9-427c-84df-ca0584bb55bf",
      paymentMethod: {
        name: "James Mason",
        entryMode: EntryModeAuthenticationsPaymentMethodEntryMode.Ecom,
        authentication: { id: "AUT_d455464a-115c-46b7-9622-6829e0326e23" },
        card: {
          number: "4263970000005262",
          expiryMonth: "05",
          expiryYear: "30",
          cvv: "852",
          cvvIndicator: CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator.Present,
          avsAddress: "Flat 123",
          avsPostalCode: "50001",
        },
      },
    },
  });
  // TODO: Handle 'response' of type CreateResponseTransactions
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.CreateSaleOrRefundTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .createSaleOrRefundTransaction({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "Transaction_Processing",
      type: TransactionTypeAuthenticationsTransactionType.Sale,
      channel: ChannelAuthenticationsChannel.Cnp,
      country: "DE",
      amount: "1999",
      currency: CurrencyAuthenticationsCurrency.Eur,
      reference: "93459c78-f3f9-427c-84df-ca0584bb55bf",
      paymentMethod: {
        name: "James Mason",
        entryMode: EntryModeAuthenticationsPaymentMethodEntryMode.Ecom,
        authentication: { id: "AUT_d455464a-115c-46b7-9622-6829e0326e23" },
        card: {
          number: "4263970000005262",
          expiryMonth: "05",
          expiryYear: "30",
          cvv: "852",
          cvvIndicator: CvvIndicatorAuthenticationsPaymentMethodCardCvvIndicator.Present,
          avsAddress: "Flat 123",
          avsPostalCode: "50001",
        },
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponseTransactions
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body</code> | <code>[CreateRequestTransactions](src/models/create-request-transactions.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.createSaleOrRefundTransaction(request)`

- **OnSuccess**: <code>[CreateResponseTransactions](src/models/create-response-transactions.ts)</code>
- **OnError**: throws <code>[TransactionsApi.CreateSaleOrRefundTransactionError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.createSaleOrRefundTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponseTransactions, TransactionsApi.CreateSaleOrRefundTransactionError&gt;</code>, with `result.value` of type <code>[CreateResponseTransactions](src/models/create-response-transactions.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSaleAndRefundTransactions(request?: TransactionsApi.GetSaleAndRefundTransactionsRequest, options?: RequestOptions): ApiPromise&lt;TransactionsResponse1, TransactionsApi.GetSaleAndRefundTransactionsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of transactions recently processed, using criteria passed in the query string. Page through the result set to access all records.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.getSaleAndRefundTransactions({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    type: TransactionTypeAuthenticationsTransactionType.Sale,
    channel: ChannelAuthenticationsChannel.Cp,
    amount: "11099",
    currency: CurrencyAuthenticationsCurrency.Usd,
    numberFirst6: "424242",
    numberLast4: "1234",
    tokenFirst6: "424242",
    tokenLast4: "1234",
    accountName: "transaction_processing",
    brand: BrandTransactionsPaymentMethodCardBrand.Visa,
    reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
    status: StatusTransactionsStatus.Captured,
    country: "US",
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    batchId: "BAT_234234234",
    orderReference: "INV#88547",
    entryMode: EntryModeAuthenticationsPaymentMethodEntryMode.Ecom,
    name: "JANE DOE",
    accountId: "TRA_86920f927028745yt34d077d88beb29b",
    fingerprintPresenceIndicator:
      FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator.Exists,
    page: 1,
    pageSize: 5,
    order: Order53.Asc,
    orderBy: "TIME_CREATED",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type TransactionsResponse1
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.GetSaleAndRefundTransactionsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .getSaleAndRefundTransactions({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    type: TransactionTypeAuthenticationsTransactionType.Sale,
    channel: ChannelAuthenticationsChannel.Cp,
    amount: "11099",
    currency: CurrencyAuthenticationsCurrency.Usd,
    numberFirst6: "424242",
    numberLast4: "1234",
    tokenFirst6: "424242",
    tokenLast4: "1234",
    accountName: "transaction_processing",
    brand: BrandTransactionsPaymentMethodCardBrand.Visa,
    reference: "becf9f3e-4d33-459c-8ed2-0c4affc9555e",
    status: StatusTransactionsStatus.Captured,
    country: "US",
    fromTimeCreated: "2022-05-01",
    toTimeCreated: "2023-05-01",
    batchId: "BAT_234234234",
    orderReference: "INV#88547",
    entryMode: EntryModeAuthenticationsPaymentMethodEntryMode.Ecom,
    name: "JANE DOE",
    accountId: "TRA_86920f927028745yt34d077d88beb29b",
    fingerprintPresenceIndicator:
      FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator.Exists,
    page: 1,
    pageSize: 5,
    order: Order53.Asc,
    orderBy: "TIME_CREATED",
    xGpVersion: "2021-03-22",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsResponse1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id?</code> | <code>string</code> | - |
| <code>type?</code> | <code>[TransactionTypeAuthenticationsTransactionType](src/models/transaction-type-authentications-transaction-type.ts)</code> | -<br>**Default**: "SALE" |
| <code>channel?</code> | <code>[ChannelAuthenticationsChannel](src/models/channel-authentications-channel.ts)</code> | - |
| <code>amount?</code> | <code>string</code> | - |
| <code>currency?</code> | <code>[CurrencyAuthenticationsCurrency](src/models/currency-authentications-currency.ts)</code> | - |
| <code>numberFirst6?</code> | <code>string</code> | - |
| <code>numberLast4?</code> | <code>string</code> | - |
| <code>tokenFirst6?</code> | <code>string</code> | - |
| <code>tokenLast4?</code> | <code>string</code> | - |
| <code>accountName?</code> | <code>string</code> | - |
| <code>brand?</code> | <code>[BrandTransactionsPaymentMethodCardBrand](src/models/brand-transactions-payment-method-card-brand.ts)</code> | - |
| <code>brandReference?</code> | <code>string</code> | - |
| <code>authcode?</code> | <code>string</code> | - |
| <code>reference?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[StatusTransactionsStatus](src/models/status-transactions-status.ts)</code> | - |
| <code>country?</code> | <code>string</code> | - |
| <code>fromTimeCreated?</code> | <code>string</code> (date) | - |
| <code>toTimeCreated?</code> | <code>string</code> (date) | - |
| <code>batchId?</code> | <code>string</code> | - |
| <code>orderReference?</code> | <code>string</code> | - |
| <code>entryMode?</code> | <code>[EntryModeAuthenticationsPaymentMethodEntryMode](src/models/entry-mode-authentications-payment-method-entry-mode.ts)</code> | - |
| <code>name?</code> | <code>string</code> | - |
| <code>accountId?</code> | <code>string</code> | - |
| <code>siteReference?</code> | <code>string</code> | - |
| <code>systemMid?</code> | <code>string</code> | - |
| <code>payerReference?</code> | <code>string</code> | - |
| <code>systemHierarchy?</code> | <code>string</code> | - |
| <code>fingerprint?</code> | <code>string</code> | - |
| <code>fingerprintPresenceIndicator?</code> | <code>[FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator](src/models/fingerprint-presence-indicator-authentications-payment-method-fingerprint-presence-indicator.ts)</code> | - |
| <code>resource?</code> | <code>[Resource](src/models/resource.ts)</code> | The resource to filter the search list results by |
| <code>page?</code> | <code>number</code> | Indicates the page sequence to return in the response. The number of records presented on each page is determined by page_size field.1 means the first page, 2 the second and so on.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | The total number of records to return in a single page for a list.   page:<br>**Default**: 5 |
| <code>order?</code> | <code>[Order53](src/models/order53.ts)</code> | The direction of the ordering of the entire list, ASC or DESC<br>**Default**: "DESC" |
| <code>orderBy?</code> | <code>string</code> | The field to order the list by.<br>**Default**: "TIME_CREATED" |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.getSaleAndRefundTransactions(request)`

- **OnSuccess**: <code>[TransactionsResponse1](src/models/transactions-response1.ts)</code>
- **OnError**: throws <code>[TransactionsApi.GetSaleAndRefundTransactionsError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.getSaleAndRefundTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsResponse1, TransactionsApi.GetSaleAndRefundTransactionsError&gt;</code>, with `result.value` of type <code>[TransactionsResponse1](src/models/transactions-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSingleSaleOrRefundTransaction(request: TransactionsApi.GetSingleSaleOrRefundTransactionRequest, options?: RequestOptions): ApiPromise&lt;TransactionsSingleRealTime, TransactionsApi.GetSingleSaleOrRefundTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single view of a transaction using the transaction id.

Get a single view of a transaction or verification using its transaction or verification ID.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.getSingleSaleOrRefundTransaction({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type TransactionsSingleRealTime
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.GetSingleSaleOrRefundTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .getSingleSaleOrRefundTransaction({ id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsSingleRealTime
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.getSingleSaleOrRefundTransaction(request)`

- **OnSuccess**: <code>[TransactionsSingleRealTime](src/models/transactions-single-real-time.ts)</code>
- **OnError**: throws <code>[TransactionsApi.GetSingleSaleOrRefundTransactionError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.getSingleSaleOrRefundTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsSingleRealTime, TransactionsApi.GetSingleSaleOrRefundTransactionError&gt;</code>, with `result.value` of type <code>[TransactionsSingleRealTime](src/models/transactions-single-real-time.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>holdTransaction(request: TransactionsApi.HoldTransactionRequest, options?: RequestOptions): ApiPromise&lt;TransactionsHoldResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This request will change the transaction status to PENDING_REVIEW (HELD). If the transaction was successful and due to be included in the next settlement file, this will prevent its inclusion until such a time that the transaction is released. 
If you're using Delayed Capture (the original capture_mode is set to LATER), the transaction must be released and then captured before it will be batched. This functionality is only available for Card Not Present (CNP) transactions in the UK, US, CA and EU.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.holdTransaction({
    id: "some example string",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type TransactionsHoldResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .holdTransaction({ id: "some example string", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsHoldResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[TransactionsHoldRequest](src/models/transactions-hold-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.holdTransaction(request)`

- **OnSuccess**: <code>[TransactionsHoldResponse](src/models/transactions-hold-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.transactionsApi.holdTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsHoldResponse, ApiError&gt;</code>, with `result.value` of type <code>[TransactionsHoldResponse](src/models/transactions-hold-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incrementExistingTransaction(request: TransactionsApi.IncrementExistingTransactionRequest, options?: RequestOptions): ApiPromise&lt;ExistingTransactionResponse, TransactionsApi.IncrementExistingTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Increment the amount of an existing transaction.

Increment the amount for an existing transaction. 
Use this action to add a charge to an existing transaction before it is batched. 
This action does not change the status of a transaction and if successful it increases the amount  of the existing transaction.  (Availability in production depends on your live configuration.)'

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.incrementExistingTransaction({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ExistingTransactionResponse
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.IncrementExistingTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .incrementExistingTransaction({ id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExistingTransactionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[ChangeAmountAndLodgingRequest](src/models/change-amount-and-lodging-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.incrementExistingTransaction(request)`

- **OnSuccess**: <code>[ExistingTransactionResponse](src/models/existing-transaction-response.ts)</code>
- **OnError**: throws <code>[TransactionsApi.IncrementExistingTransactionError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.incrementExistingTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExistingTransactionResponse, TransactionsApi.IncrementExistingTransactionError&gt;</code>, with `result.value` of type <code>[ExistingTransactionResponse](src/models/existing-transaction-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reauthSaleTransaction(request: TransactionsApi.ReauthSaleTransactionRequest, options?: RequestOptions): ApiPromise&lt;ExistingTransactionResponse, TransactionsApi.ReauthSaleTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This action is used to refresh the authorization associated with a transaction.

This action is used to refresh the authorization associated with a transaction,  when the transaction was authorized a long time ago.  It gets a more recent authcode.
It can also be used to reauthorize a transaction that was reversed in error.  (Availability in production depends on your live configuration.)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.reauthSaleTransaction({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type ExistingTransactionResponse
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.ReauthSaleTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .reauthSaleTransaction({ id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExistingTransactionResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[RefundRequest3](src/models/refund-request3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.reauthSaleTransaction(request)`

- **OnSuccess**: <code>[ExistingTransactionResponse](src/models/existing-transaction-response.ts)</code>
- **OnError**: throws <code>[TransactionsApi.ReauthSaleTransactionError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.reauthSaleTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExistingTransactionResponse, TransactionsApi.ReauthSaleTransactionError&gt;</code>, with `result.value` of type <code>[ExistingTransactionResponse](src/models/existing-transaction-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>releaseTransaction(request: TransactionsApi.ReleaseTransactionRequest, options?: RequestOptions): ApiPromise&lt;TransactionsReleaseResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This request will return a transaction to it's previous state before it was set to to PENDING_REVIEW (HELD).

If a transaction is set to PENDING_REVIEW (Held), the release request will return the transaction to its original status. 
For example, if a transaction was set to automatically capture (capture_mode=AUTO), then the release request will return it to a status of CAPTURED.
If you're using differect capture_modes,  MULTIPLE or LATER, the transaction will simply return to the PREAUTHRORIZED status. 
Transactions that are held must be released before they are captured.

This functionality is only available for Card Not Present (CNP) transactions in the UK, US, CA and EU.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.releaseTransaction({
    id: "some example string",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type TransactionsReleaseResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .releaseTransaction({ id: "some example string", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsReleaseResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[TransactionsReleaseRequest](src/models/transactions-release-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.releaseTransaction(request)`

- **OnSuccess**: <code>[TransactionsReleaseResponse](src/models/transactions-release-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.transactionsApi.releaseTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsReleaseResponse, ApiError&gt;</code>, with `result.value` of type <code>[TransactionsReleaseResponse](src/models/transactions-release-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reverseTransaction(request: TransactionsApi.ReverseTransactionRequest, options?: RequestOptions): ApiPromise&lt;ReversalResponse2, TransactionsApi.ReverseTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a transaction before funds are exchanged.

Transactions can be reversed in full or partially reversed. 

An attempt to restore Payer's spending limit is always made. 

If no amount is included in the request body, the full value of the transaction will be reversed.  

In timeout scenarios, where the integrator does not recieve a response at all, the reference field
can be used in place of the id in the URL

Availability of partial reversals depends on your live configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.reverseTransaction({
    id: "some example string",
    xGpVersion: "2021-03-22",
    body: { amount: "11099" },
  });
  // TODO: Handle 'response' of type ReversalResponse2
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.ReverseTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .reverseTransaction({ id: "some example string", xGpVersion: "2021-03-22", body: { amount: "11099" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReversalResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>[Id](src/models/unions/id.ts)</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[ChangeAmountRequestReversal](src/models/change-amount-request-reversal.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.reverseTransaction(request)`

- **OnSuccess**: <code>[ReversalResponse2](src/models/reversal-response2.ts)</code>
- **OnError**: throws <code>[TransactionsApi.ReverseTransactionError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.reverseTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReversalResponse2, TransactionsApi.ReverseTransactionError&gt;</code>, with `result.value` of type <code>[ReversalResponse2](src/models/reversal-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>splitTransaction(request: TransactionsApi.SplitTransactionRequest, options?: RequestOptions): ApiPromise&lt;SplitAmountResponseTransactions, TransactionsApi.SplitTransactionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transfer part of a transaction amount, executed by a merchant, to the partner account.
Availability of this feature in production depends on your allowed live configuration. 
Please contact Global Payments before coding this feature to confirm it will be available to you when you go live.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.splitTransaction({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
    body: {
      transfers: [
        {
          accountId: "TRA_31dbc9d58a26458386d927db02e38094",
          recipientAccountId: "FMA_dd7976feccd94906ac9995628d27a81e",
          reference: "merchant identifier",
          amount: "10",
          description: "split 1",
        },
      ],
    },
  });
  // TODO: Handle 'response' of type SplitAmountResponseTransactions
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.SplitTransactionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .splitTransaction({
    id: "TRN_uzFr7t4VOqxdLDI44hHmXIjHtOOE8d",
    xGpVersion: "2021-03-22",
    body: {
      transfers: [
        {
          accountId: "TRA_31dbc9d58a26458386d927db02e38094",
          recipientAccountId: "FMA_dd7976feccd94906ac9995628d27a81e",
          reference: "merchant identifier",
          amount: "10",
          description: "split 1",
        },
      ],
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SplitAmountResponseTransactions
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[SplitAmountRequestTransactions](src/models/split-amount-request-transactions.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.splitTransaction(request)`

- **OnSuccess**: <code>[SplitAmountResponseTransactions](src/models/split-amount-response-transactions.ts)</code>
- **OnError**: throws <code>[TransactionsApi.SplitTransactionError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.splitTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SplitAmountResponseTransactions, TransactionsApi.SplitTransactionError&gt;</code>, with `result.value` of type <code>[SplitAmountResponseTransactions](src/models/split-amount-response-transactions.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>synchronizeDevice(request: TransactionsApi.SynchronizeDeviceRequest, options?: RequestOptions): ApiPromise&lt;DeviceSyncResponse, TransactionsApi.SynchronizeDeviceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Synchronize a physical device to successfully transaction process.(Availability in production depends on your live configuration.)


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsApi.synchronizeDevice({ xGpVersion: "2021-03-22", body: {} });
  // TODO: Handle 'response' of type DeviceSyncResponse
} catch (err) {
  // TODO: Handle 'err' of type TransactionsApi.SynchronizeDeviceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsApi
  .synchronizeDevice({ xGpVersion: "2021-03-22", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeviceSyncResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body</code> | <code>[DeviceSyncRequest](src/models/device-sync-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsApi.synchronizeDevice(request)`

- **OnSuccess**: <code>[DeviceSyncResponse](src/models/device-sync-response.ts)</code>
- **OnError**: throws <code>[TransactionsApi.SynchronizeDeviceError](src/resources/transactions-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsApi.synchronizeDevice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeviceSyncResponse, TransactionsApi.SynchronizeDeviceError&gt;</code>, with `result.value` of type <code>[DeviceSyncResponse](src/models/device-sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Transfers

> Source: [Transfers](src/resources/transfers.ts)

<details>
<summary><code>getTransfer(request: Transfers.GetTransferRequest, options?: RequestOptions): ApiPromise&lt;TransfersResponse2, Transfers.GetTransferError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get info about a Transfer event on the Global Payments system using the unique id created by Global Payments for that Transfer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.getTransfer({
    id: "some example string",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type TransfersResponse2
} catch (err) {
  // TODO: Handle 'err' of type Transfers.GetTransferError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers
  .getTransfer({ id: "some example string", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransfersResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.getTransfer(request)`

- **OnSuccess**: <code>[TransfersResponse2](src/models/transfers-response2.ts)</code>
- **OnError**: throws <code>[Transfers.GetTransferError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.getTransfer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransfersResponse2, Transfers.GetTransferError&gt;</code>, with `result.value` of type <code>[TransfersResponse2](src/models/transfers-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransfers(request?: Transfers.ListTransfersRequest, options?: RequestOptions): ApiPromise&lt;ListTransfersResponse2, Transfers.ListTransfersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Transfers

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.listTransfers({ xGpVersion: "2021-03-22" });
  // TODO: Handle 'response' of type ListTransfersResponse2
} catch (err) {
  // TODO: Handle 'err' of type Transfers.ListTransfersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers.listTransfers({ xGpVersion: "2021-03-22" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTransfersResponse2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.listTransfers(request)`

- **OnSuccess**: <code>[ListTransfersResponse2](src/models/list-transfers-response2.ts)</code>
- **OnError**: throws <code>[Transfers.ListTransfersError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.listTransfers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTransfersResponse2, Transfers.ListTransfersError&gt;</code>, with `result.value` of type <code>[ListTransfersResponse2](src/models/list-transfers-response2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reverseExistingSplit(request: Transfers.ReverseExistingSplitRequest, options?: RequestOptions): ApiPromise&lt;SplitAmountResponseTransfers, Transfers.ReverseExistingSplitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reverse a Transfer

This will reverse a Transfer. The funds from the transfer will be returned to the initiating merchant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.reverseExistingSplit({
    id: "MER_880c34767b184d5e82b10e767201e648",
    xGpVersion: "2021-03-22",
  });
  // TODO: Handle 'response' of type SplitAmountResponseTransfers
} catch (err) {
  // TODO: Handle 'err' of type Transfers.ReverseExistingSplitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers
  .reverseExistingSplit({ id: "MER_880c34767b184d5e82b10e767201e648", xGpVersion: "2021-03-22" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SplitAmountResponseTransfers
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body?</code> | <code>[SplitAmountRequestTransfers](src/models/split-amount-request-transfers.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.reverseExistingSplit(request)`

- **OnSuccess**: <code>[SplitAmountResponseTransfers](src/models/split-amount-response-transfers.ts)</code>
- **OnError**: throws <code>[Transfers.ReverseExistingSplitError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.reverseExistingSplit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SplitAmountResponseTransfers, Transfers.ReverseExistingSplitError&gt;</code>, with `result.value` of type <code>[SplitAmountResponseTransfers](src/models/split-amount-response-transfers.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferFunds(request: Transfers.TransferFundsRequest, options?: RequestOptions): ApiPromise&lt;CreateResponseUpdated2, Transfers.TransferFundsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move funds from one merchant's fund management account to another merchant's fund management account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transfers.transferFunds({
    id: "MER_880c34767b184d5e82b10e767201e648",
    xGpVersion: "2021-03-22",
    body: {
      recipientAccountId: "some example string",
      reference: "some example string",
      amount: "some example string",
      description: "some example string",
      usableBalanceMode: UsableBalanceModeTransfersUsableBalanceMode.AvailableBalance,
    },
  });
  // TODO: Handle 'response' of type CreateResponseUpdated2
} catch (err) {
  // TODO: Handle 'err' of type Transfers.TransferFundsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transfers
  .transferFunds({
    id: "MER_880c34767b184d5e82b10e767201e648",
    xGpVersion: "2021-03-22",
    body: {
      recipientAccountId: "some example string",
      reference: "some example string",
      amount: "some example string",
      description: "some example string",
      usableBalanceMode: UsableBalanceModeTransfersUsableBalanceMode.AvailableBalance,
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponseUpdated2
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body</code> | <code>[CreateRequest22](src/models/create-request22.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transfers.transferFunds(request)`

- **OnSuccess**: <code>[CreateResponseUpdated2](src/models/create-response-updated2.ts)</code>
- **OnError**: throws <code>[Transfers.TransferFundsError](src/resources/transfers.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transfers.transferFunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponseUpdated2, Transfers.TransferFundsError&gt;</code>, with `result.value` of type <code>[CreateResponseUpdated2](src/models/create-response-updated2.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Verifications

> Source: [Verifications](src/resources/verifications.ts)

<details>
<summary><code>createVerification(request: Verifications.CreateVerificationRequest, options?: RequestOptions): ApiPromise&lt;CreateResponseVerifications, Verifications.CreateVerificationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verify a payment method to ensure it can be used to create a Transaction at a later time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.verifications.createVerification({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "Transaction_Processing",
      channel: ChannelVerificationsChannel.Cnp,
      currency: CurrencyBatchesTransactionsCurrency.Usd,
      reference: "MY_TRANS_REF_12345",
      country: "US",
      paymentMethod: {
        name: "James Mason",
        entryMode: EntryModeVerificationsPaymentMethodEntryMode.Ecom,
        card: { number: "4263970000005262", expiryMonth: "05", expiryYear: "30" },
      },
    },
  });
  // TODO: Handle 'response' of type CreateResponseVerifications
} catch (err) {
  // TODO: Handle 'err' of type Verifications.CreateVerificationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.verifications
  .createVerification({
    xGpVersion: "2021-03-22",
    body: {
      accountName: "Transaction_Processing",
      channel: ChannelVerificationsChannel.Cnp,
      currency: CurrencyBatchesTransactionsCurrency.Usd,
      reference: "MY_TRANS_REF_12345",
      country: "US",
      paymentMethod: {
        name: "James Mason",
        entryMode: EntryModeVerificationsPaymentMethodEntryMode.Ecom,
        card: { number: "4263970000005262", expiryMonth: "05", expiryYear: "30" },
      },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateResponseVerifications
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xGpVersion?</code> | <code>string</code> | The version of the API to execute the request.<br>**Default**: "2021-03-22" |
| <code>xGpIdempotency?</code> | <code>string</code> | Integrator generated value submitted in the request header that is checked to ensure the same value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained with this action. |
| <code>body</code> | <code>[CreateRequestVerifications](src/models/create-request-verifications.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.verifications.createVerification(request)`

- **OnSuccess**: <code>[CreateResponseVerifications](src/models/create-response-verifications.ts)</code>
- **OnError**: throws <code>[Verifications.CreateVerificationError](src/resources/verifications.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.verifications.createVerification(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateResponseVerifications, Verifications.CreateVerificationError&gt;</code>, with `result.value` of type <code>[CreateResponseVerifications](src/models/create-response-verifications.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GlobalPaymentsApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

