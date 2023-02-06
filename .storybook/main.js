
const path = require("path")
const fs = require("fs")

// [Workaround] This logic means `"../src/components/*.stories.@(js|jsx|ts|tsx)"` but it's much faster.
function getStories(pkg) {
  const scope = pkg ? [pkg] : fs.readdirSync("src/components")
  return scope
    .map((package) => `src/components/${package}`)
    .filter((storyDir) => fs.existsSync(storyDir))
    .map((storyDir) => `../${storyDir}/*.stories.@(js|jsx|ts|tsx)`)
}

module.exports = {
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true,
  },
  stories: getStories(),
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}
