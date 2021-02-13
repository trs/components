const { override, addBabelPlugins, addBabelPresets } = require('customize-cra');

module.exports = override(
  addBabelPresets(
    '@babel/preset-env',
    '@babel/preset-react'
  ),
  addBabelPlugins(
    'macros',
    '@emotion'
  )
);
