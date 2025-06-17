export interface Notification {
  id: number;
  title: string;
  body: string;
  schedule: { at: Date };
  sound?: string;
}

export interface myPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  requestPermissions(): Promise<{ display: 'granted' | 'denied' | 'prompt' }>;

  schedule(options: { notifications: Notification[] }): Promise<void>;

  cancel(options: { notifications: { id: number }[] }): Promise<void>;
}
