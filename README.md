# snowpack-vue-svg-plugin
A Snowpack plugin to import SVG files like Vue components.

```
yarn add -D snowpack-vue-svg-plugin
npm install --save-dev snowpack-vue-svg-plugin
```

```js
// snowpack.config.mjs
export default {
  plugins: [
    'snowpack-vue-svg-plugin',
    {
      /* See options below */
    }
  ]
}
```

## Plugin Options

| Name    |   Type   | Description                                     |
| :-------| :------: | :---------------------------------------------- |
| `input` | `string` | File extension to transform (default: `'.svg'`) |

## Usage

Plugin transforms any `svg` (target file extension configurable, e.g. `.vue.svg`) imports into Vue components.

Will not transform remote files (files must exist on the drive).

```vue
// Component.vue
<template>
  <Logo />
</template>

<script>
import Logo from '../assets/logo.svg'

export default {
  components: {
    Logo
  }
}
</script>
```
