type ConfigValue =
  | string
  | boolean
  | {
      [key: string]: string | number | boolean;
    };
export interface NativeScriptTailwindConfig {
  theme: {
    extend: {
      [key: string]: {
        container: ConfigValue;
        colors: ConfigValue;
        borderRadius: ConfigValue;
      };
    };
  };
  plugins: any[];
}

declare function createNativeScriptTailwindConfigParts(): NativeScriptTailwindConfig;

export = createNativeScriptTailwindConfigParts;
