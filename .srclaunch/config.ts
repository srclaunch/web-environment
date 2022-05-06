import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatterTool,
  CodeLinterTool,
  StaticTypingTool,
  PackageAccess,
  ProjectType,
  TestReporter,
  License,
  TestTool,
} from '@srclaunch/types';

export default {
  name: '@srclaunch/web-environment',
  description: 'Web environment specific utilities for SrcLaunch applications',
  type: ProjectType.Library,
  build: {
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    platform: BuildPlatform.Node,
    target: BuildTarget.ESNext,
    tool: BuildTool.Vite,
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Ava,
  },
  environment: {
    development: {
      formatters: [CodeFormatterTool.Prettier],
      linters: [CodeLinterTool.ESLint],
      staticTypes: [StaticTypingTool.TypeScript],
    },
  },
  release: {
    package: {
      publish: {
        access: PackageAccess.Public,
        license: License.MIT,
        registry: 'https://registry.npmjs.org/',
      },
    },
  },
  requirements: {
    node: '>=16',
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
