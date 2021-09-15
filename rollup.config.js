import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: "src/index.scss",
          dest: "build",
          rename: "index.scss"
        },
        {
          src: "src/Button/Button.scss",
          dest: "build",
          rename: "Button/Button.scss"
        },
        {
          src: "src/Image/Image.scss",
          dest: "build",
          rename: "Image/Image.scss"
        },
        {
          src: "src/Input/Input.scss",
          dest: "build",
          rename: "Input/Input.scss"
        },
        {
          src: "src/Spacer/Spacer.scss",
          dest: "build",
          rename: "Spacer/Spacer.scss"
        },
        {
          src: "src/Text/Text.scss",
          dest: "build",
          rename: "Text/Text.scss"
        },
      ]
    })
  ]
};
