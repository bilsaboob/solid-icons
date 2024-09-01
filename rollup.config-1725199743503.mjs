import withSolid from 'rollup-preset-solid';

var rollup_config = withSolid([
  {
    input: "src/lib/index.tsx",
    mappingName: "lib",
    output: {
      file: "./dist/lib/index.js",
      format: "module",
    },
    solidOptions: {
      hydratable: true,
    },
  },
  {
    input: "src/lib/index.tsx",
    mappingName: "lib",
    solidOptions: {
      generate: "ssr",
      hydratable: true,
    },
    targets: ["cjs"],
    output: {
      file: "./dist/lib/index.cjs",
      format: "cjs",
    },
  },
]);

export { rollup_config as default };
