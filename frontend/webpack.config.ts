import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'


export default (env:any) => {
  const config = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts' ),
    output: {
      filename: '[name][contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true
    },
    plugins: [
      new HTMLWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html')
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  }
  return config;
}