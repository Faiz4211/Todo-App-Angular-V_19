export const environmentProd = {
  name: 'production',
  production: true,
  apiUrl: 'https://api.yourdomain.com',
  enableDebug: false,
  featureFlags: {
    enableInventorySync: true,
    enableAnalytics: true,
  },
};
