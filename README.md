# snowpack-vue-svg-plugin
A Snowpack plugin to import SVG files to be used as Vue components.

```
yarn add -D snowpack-vue-svg-plugin
npm install --save-dev snowpack-vue-svg-plugin
```

```js
// snowpack.config.mjs
export default {
  plugins: [
    'snowpack-vue-svg-plugin'
  ]
}
```

## Usage

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

## Plugin Options

| Name    |   Type   | Description                                       |
| :-------| :------: | :------------------------------------------------ |
| `input` | `array`  | File extension to transform (default: `['.svg']`) |

### `input`
If you already have a plugin registered to load `.svg` files and want to keep using it in parallel to this plugin, you should overwrite the default `input` option.

```js
// snowpack.config.mjs
export default {
  plugins: [
    ['snowpack-vue-svg-plugin', {
      input: ['.vue.svg']
    }]
  ]
}
```
