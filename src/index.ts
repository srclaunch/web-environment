import { Environment, Environments, EnvironmentType } from '@srclaunch/types';

const devEnvironment: Environment = {
  description: 'Development environment',
  id: Environments.Development,
  name: 'Development',
  type: EnvironmentType.Development,
};

const testEnvironment: Environment = {
  description: 'Test environment',
  id: Environments.QA,
  name: 'Test',
  type: EnvironmentType.NonProduction,
};

const previewEnvironment: Environment = {
  description: 'Preview environment',
  id: Environments.Preview,
  name: 'Preview',
  type: EnvironmentType.NonProduction,
};

const productionEnvironment: Environment = {
  description: 'Production environment',
  id: Environments.Production,
  name: 'Production',
  type: EnvironmentType.Production,
};

export function getEnvironment() {
  if (window) {
    console.log('window', window.location.hostname);
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
  }

  return productionEnvironment;
}
