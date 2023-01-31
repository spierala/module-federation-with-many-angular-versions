const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfe1",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "mfe1",
        filename: "remoteEntry.js",
        exposes: {
          './web-components': './projects/mfe1/src/bootstrap.ts',
        },

        shared: share({
          "@angular/core": { requiredVersion: "auto" },
          "@angular/common": { requiredVersion: "auto" },
          "@angular/router": { requiredVersion: "auto" },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
