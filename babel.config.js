module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: false,
        targets: { browsers: '> 0.25%, ie 11, not op_mini all, not dead' }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    'macros',
    [
      'babel-plugin-styled-components',
      {
        minify: true
      }
    ],
    ['@babel/plugin-transform-runtime', { useESModules: true }]
  ],
  ignore: [/@babel[\\|/]runtime/]
}
