import type { StorybookConfig } from '@storybook/react-webpack5'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import * as path from 'path'
import * as webpack from 'webpack';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-styling-webpack'
    ],
    env: { __IS_DEV__: 'true' },
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            builder: {
                useSWC: true
            }
        }
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic'
                }
            }
        }
    }),
    docs: {
        autodocs: 'tag'
    },
    webpackFinal: async (config) => {
        config.module.rules.push(buildCssLoader(true))
        config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))
        config.resolve.extensions.push('.tsx', '.ts')
        config.resolve.alias = {
            ...config.resolve.alias,
            src: path.resolve(__dirname, '../../src')
        }
        // @ts-ignore
        const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'))
        // @ts-ignore
        fileLoaderRule.exclude = /\.svg$/

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })

        config.plugins.push(
            new webpack.DefinePlugin({
                __IS_DEV__: JSON.stringify(true)
            })
        )

        return config
    }
}

export default config
