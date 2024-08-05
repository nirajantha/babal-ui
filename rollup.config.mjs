import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import babel from "@rollup/plugin-babel";

import packageJson from "./package.json" assert { type: "json" };
import json from "@rollup/plugin-json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: true, // Add this line
      }),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          "@babel/preset-react",
        ],
        extensions: [".js", ".ts", ".tsx"],
        exclude: "node_modules/**", // only transpile our source code
      }),
      json(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist/types",
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
