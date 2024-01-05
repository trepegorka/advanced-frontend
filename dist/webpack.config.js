import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";
export default (function (env) {
    var paths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };
    var mode = env.mode || 'development';
    var isDevMode = mode === 'development';
    var PORT = env.port || 3000;
    return buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDevMode: isDevMode,
        port: PORT,
    });
});
