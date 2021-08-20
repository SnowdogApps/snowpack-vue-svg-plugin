const { promises: fs } = require('fs')
const hashsum = require('hash-sum')
const { compileTemplate } = require('@vue/compiler-sfc')

module.exports = function plugin(snowpackConfig, pluginOptions) {
  const input = pluginOptions.input || '.svg';
  return {
    name: 'snowpack-vue-svg-plugin',
    resolve: {
      input: [input],
      output: ['.js']
    },
    async load({ filePath, isSSR }) {
      const svg = await fs.readFile(filePath)

      const { code } = compileTemplate({
        id: hashsum(filePath),
        ssr: isSSR,
        ssrCssVars: [],
        source: svg.toString()
      })

      const renderFn = isSSR ? `ssrRender` : `render`

      return {
        '.js': `
          const defaultExport = {};
          ${code}
          defaultExport.${renderFn} = ${renderFn};
          export default defaultExport;
        `
      }
    }
  }
}
