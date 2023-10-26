module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "prettier",
  ],
  extends: [
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
