export const environmentStaging = {
  name: 'staging',
  production: true,
  apiUrl: 'https://staging-api.yourdomain.com',
  enableDebug: false,
  featureFlags: {
    enableInventorySync: true,
    enableAnalytics: true,
  },
};
