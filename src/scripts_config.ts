export interface ScriptsConfiguration extends ScriptOptions {
  shell?: string;
  scripts: Scripts;
}

export interface Scripts {
  [key: string]: ScriptDefinition;
}

export type ScriptDefinition = Script | CompositeScript;

export type Script = string | ScriptObject;

export interface ScriptObject extends ScriptOptions {
  cmd: string | CompositeScript;
  desc?: string;
}

export type CompositeScript = Array<Script | ParallelScripts>;

export interface ParallelScripts {
  pll: Script[];
}

export interface ScriptOptions {
  env?: EnvironmentVariables;
  allow?: string[] | FlagsObject;
  v8Flags?: string[] | FlagsObject;
  imap?: string;
  lock?: string;
  log?: string;
  tsconfig?: string;
  cert?: string;
  inspect?: string;
  inspectBrk?: string;
}

export interface FlagsObject {
  [key: string]: unknown;
}

export interface EnvironmentVariables {
  [key: string]: string;
}

export const isScriptObject = (script: object): script is ScriptObject =>
  "cmd" in script;

export const isParallelScripts = (script: object): script is ParallelScripts =>
  "pll" in script;