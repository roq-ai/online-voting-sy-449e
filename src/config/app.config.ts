interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Organization Owner'],
  customerRoles: ['Voter'],
  tenantRoles: ['Organization Owner', 'Election Manager', 'System Administrator'],
  tenantName: 'Client',
  applicationName: 'Online Voting System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Vote for a candidate',
    'View election details',
    'View candidate details',
    'Check voting history',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage client information',
    'Manage election details',
    'Manage candidate details',
    'Manage vote records',
    'Manage audit logs',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/731370c3-8f46-4676-bd48-c87f0de82c42',
};
