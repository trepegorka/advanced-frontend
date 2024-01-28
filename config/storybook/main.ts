import type { StorybookConfig } from '@storybook/react-webpack5'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import path from 'path'
import webpack from 'webpack'

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
    /* eslint-disable */
    // @ts-ignore
    webpackFinal: async (config) => {
        // @ts-ignore
        config.module.rules.push(buildCssLoader(true))
        // @ts-ignore
        config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))
        // @ts-ignore
        config.resolve.extensions.push('.tsx', '.ts')
        // @ts-ignore
        config.resolve.alias = {
            // @ts-ignore
            ...config.resolve.alias,
            src: path.resolve(__dirname, '../../src')
        }
        // @ts-ignore
        const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
        // @ts-ignore
        fileLoaderRule.exclude = /\.svg$/;

        // @ts-ignore
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })

        // @ts-ignore
        config.plugins.push(
            new webpack.DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
            })
        );

        return config
    }
    /* eslint-enable */
}

export default config
