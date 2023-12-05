# thingsboard-api-client

## Overview

This module centralize Thingsboard API, helps to integrate in your web client.

## Contents

- [thingsboard-api-client](#thingsboard-api-client)
  - [Overview](#overview)
  - [Contents](#contents)
  - [Installation](#installation)
  - [Example](#example)
  - [Test locally](#test-locally)
  - [Changelog](#changelog)
  - [License](#license)
  - [Copyright](#copyright)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the [npm](https://www.npmjs.com/).

```bash
npm i thingsboard-api-client@latest
```

## Example

```typescript
import { ThingsboardApiClient } from "thingsboard-api-client";

const client = new ThingsboardApiClient();

async function login() {
  const resp = (await client.loginEndpoint().login({
    username: "username",
    password: "password",
  })) as any;
}

login();
```

## Test locally

**Step 1**
In new package, build and package the project into .tgz
```sh
npm run build && npm pack
```

**Step 2**
In consumer project, make sure **delete** `node_modules` and `package-lock.json` \
Add to package.json 
```json
{
  "dependencies": {
    "thingsboard-api-client": "file:../thingsboard-api-client/thingsboard-api-client-1.x.x.tgz"
  }
}
``` 
Re-install all dependencies
```sh
npm i
```

## Changelog

Check the [GitHub Release Page](https://github.com/ttqteo/thingsboard-api-client/releases)

## License

[MIT](LICENSE) License

## Copyright

© 2023, (@ttqteo)[https://github.com/ttqteo]
