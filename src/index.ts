import { registerPlugin } from '@capacitor/core';

import type { myPluginPlugin } from './definitions';

const myPlugin = registerPlugin<myPluginPlugin>('myPlugin', {
  web: () => import('./web').then((m) => new m.myPluginWeb()),
});

export * from './definitions';
export { myPlugin };
