module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
    "react",
    "react-hooks",
    "jsx-a11y",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  rules: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
              // Add the react-refresh/babel plugin
              require.resolve('react-refresh/babel'),
            ],
          },
        },
      },
    ],
  },
  plugins: [
    // Add the ReactRefreshWebpackPlugin
    new ReactRefreshWebpackPlugin(),
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
