const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    './web-components': './projects/mfe1/src/bootstrap.ts',
  },

  shared: share({
    "@angular/core": { requiredVersion: "auto" },
    "@angular/common": { requiredVersion: "auto" },
    "@angular/router": { requiredVersion: "auto" },
  }),
});
