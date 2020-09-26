module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@App": "./src/app",
          "@Controllers": "./src/controllers",
          "@Models": "./src/models",
          "@Routes": "./src/routes"
        }
      }
    ]
  ],
  ignore: ["**/*.test.ts", "**/Contracts/"]
};
