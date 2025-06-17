export interface myPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
