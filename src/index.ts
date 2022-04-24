import { Environment, EnvironmentType } from '@srclaunch/types';

const devEnvironment: Environment = {
  description: 'Development environment',
  id: 'dev',
  name: 'Development',
  type: EnvironmentType.Development,
};

const testEnvironment: Environment = {
  description: 'Test environment',
  id: 'test',
  name: 'Test',
  type: EnvironmentType.NonProduction,
};

const previewEnvironment: Environment = {
  description: 'Preview environment',
  id: 'preview',
  name: 'Preview',
  type: EnvironmentType.NonProduction,
};

const productionEnvironment: Environment = {
  description: 'Production environment',
  id: 'production',
  name: 'Production',
  type: EnvironmentType.Production,
};

export function getEnvironment() {
  if (window) {
    const hostname = window.location.hostname;

    if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
      return devEnvironment;
    }

    if (hostname.includes('test')) {
      return testEnvironment;
    }

    if (hostname.includes('preview')) {
      return previewEnvironment;
    }

    if (hostname.includes('production')) {
      return productionEnvironment;
    }
  }

  return testEnvironment;
}
