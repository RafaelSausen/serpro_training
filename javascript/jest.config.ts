import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";
import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts", "**/*.test.ts", "**/*.spec.js", "**/*.test.js"],
  transform: {},
};

export default config;
