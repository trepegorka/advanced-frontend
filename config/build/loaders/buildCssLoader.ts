import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildCssLoader = (isDevMode: boolean) => {
    return ({
        test: /\.s[ac]ss$/i,
        use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('module.scss')),
                        localIdentName: isDevMode
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader'
        ]
    })
}
