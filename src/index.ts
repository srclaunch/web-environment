import { Environment, EnvironmentType } from '@srclaunch/types';

const devEnvironment: Environment = {
  id: 'dev',
  type: EnvironmentType.Development,
  public: false,
  name: 'Development',
  description: 'Development environment',
};

const testEnvironment: Environment = {
  id: 'test',
  type: EnvironmentType.NonProduction,
  public: false,
  name: 'Test',
  description: 'Test environment',
};

const previewEnvironment: Environment = {
  id: 'preview',
  type: EnvironmentType.NonProduction,
  public: true,
  name: 'Preview',
  description: 'Preview environment',
};

const productionEnvironment: Environment = {
  id: 'production',
  type: EnvironmentType.Production,
  public: true,
  name: 'Production',
  description: 'Production environment',
};

export function getEnvironment() {
  if (window) {
    const hostname = window.location.hostname;

    if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
      return devEnvironment;
    } else if (hostname.includes('test')) {
      return testEnvironment;
    } else if (hostname.includes('preview')) {
      return previewEnvironment;
    } else if (hostname.includes('production')) {
      return productionEnvironment;
    }
  }

  return testEnvironment;
}
