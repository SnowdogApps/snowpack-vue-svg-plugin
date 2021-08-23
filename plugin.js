const fs = require('fs/promises')
const { compileTemplate } = require('@vue/compiler-sfc')
const { optimize } = require('svgo')

module.exports = function plugin(snowpackConfig, pluginOptions) {
  const input = pluginOptions.input || ['.svg']
  const svgo = pluginOptions.svgo || true
  const svgoConfig = pluginOptions.svgoConfig || {}

  return {
    name: 'snowpack-vue-svg-plugin',
    resolve: {
      input,
      output: ['.js']
    },
    async load({ filePath, isSSR }) {
      let svg = await fs.readFile(filePath, 'utf-8')

      if (svgo !== false)  {
        svg = optimize(svg, svgoConfig).data
      }

      const { code } = compileTemplate({
        id: Buffer.from(filePath).toString('base64'),
        ssr: isSSR,
        ssrCssVars: [],
        source: svg.toString()
      })

      const renderFn = isSSR ? 'ssrRender' : 'render'

      return `
        const defaultExport = {};
        ${code}
        defaultExport.${renderFn} = ${renderFn};
        export default defaultExport;
      `
    }
  }
}
