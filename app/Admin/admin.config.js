import AdminInterceptor from './admin.interceptor'

function adminModuleConfig($httpProvider) {
  $httpProvider.interceptors.push(AdminInterceptor)
}

export default adminModuleConfig
