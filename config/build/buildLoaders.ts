import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDevMode }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader =
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }

    const babelLoader =
        {
            test: /\.(js|jsx|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        [
                            'i18next-extract',
                            {
                                locales: ['ru', 'en'],
                                keyAsDefaultValue: true
                            }
                        ]
                    ]
                }
            }
        }

    const cssLoader =
        {
            test: /\.s[ac]ss$/i,
            use: [
                isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('module.scss')),
                            localIdentName: isDevMode ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                        }
                    }
                },
                'sass-loader'
            ]

        }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ]
}
