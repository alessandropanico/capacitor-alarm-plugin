import { WebPlugin } from '@capacitor/core';

import type { myPluginPlugin } from './definitions';

export class myPluginWeb extends WebPlugin implements myPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
