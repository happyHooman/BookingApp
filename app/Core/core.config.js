import CoreInterceptor from './core.interceptor'

function coreModuleConfig($httpProvider) {
  $httpProvider.interceptors.push(CoreInterceptor);
}

export default coreModuleConfig;
