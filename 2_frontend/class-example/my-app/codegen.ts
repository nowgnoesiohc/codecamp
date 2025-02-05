import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://main-example.codebootcamp.co.kr/graphql",
  documents: ["src/**/*.ts", "src/**/*.tsx"],
  generates: {
    "./src/commons/graphql/": {
      preset: "client",
    },
  },
};

export default config;
