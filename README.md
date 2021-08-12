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
  ]
}
```

## Usage

Plugin transforms any `.vue.svg` imports into Vue components.
The `.vue.svg` files must exist on the drive, it will not work with just `.svg`.

```vue
// Component.vue
<template>
  <Logo />
</template>

<script>
import Logo from '../assets/logo.vue.svg'

export default {
  components: {
    Logo
  }
}
</script>
```
