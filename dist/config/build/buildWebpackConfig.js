import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";
export function buildWebpackConfig(options) {
    var isDevMode = options.isDevMode, mode = options.mode, paths = options.paths;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDevMode ? 'inline-source-map' : undefined,
        devServer: isDevMode ? buildDevServer(options) : undefined,
    };
}
