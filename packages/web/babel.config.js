module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@App": "./src/app",
          "@Components": "./src/components",
          "@Routes": "./src/routes",
          "@Services": "./src/services",
          "@Store": "./src/store",
          "@Utils": "./src/utils"
        }
      }
    ]
  ],
  ignore: ["**/*.test.ts", "**/Contracts/"]
};
