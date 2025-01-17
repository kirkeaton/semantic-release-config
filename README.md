# semantic-release-config

semantic-release config for my projects

## Install

```bash
$ npm install -D @kirkeaton/semantic-release-config
```

## Usage

`package.json`

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "release": {
    "extends": "@kirkeaton/semantic-release-config"
  }
}
```

`.releaserc`

```json
{
  "extends": "@kirkeaton/semantic-release-config"
}
```

`release.config.js`

```js
const config = {
  extends: '@kirkeaton/semantic-release-config',
};

export default config;
```
