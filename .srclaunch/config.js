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
  },
  environment: {
    development: {
      formatters: [CodeFormatterTool.Prettier],
      linters: [CodeLinterTool.ESLint, CodeLinterTool.Stylelint],
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
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
