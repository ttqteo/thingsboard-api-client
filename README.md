# Thingsboard API Client

## Install
```sh
npm i thingsboard-api-client
```

## Test locally

### Step 1
In new package, build and package the project into .tgz
```sh
npm run build && npm pack
```

### Step 2
In consumer project, make sure **delete** `node_modules` and `package-lock.json` \
Add to package.json 
```json
{
  "dependencies": {
    "thingsboard-api-client": "file:../thingsboard-api-client/thingsboard-api-client-1.0.2.tgz"
  }
}
``` 
Re-install all dependencies
```sh
npm i
```
