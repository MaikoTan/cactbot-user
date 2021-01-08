type Locale = "en" | "de" | "fr" | "ja" | "cn" | "ko";

type LocaleObject = {
  [s in Locale]: string;
};

type TriggerFunction<T> = (data: any, matches?: any/* RegExpMatchArray */, output?: any) => T;

interface Replacement {
  [s: string]: string;
}

interface TimelineReplace {
  locale: Locale;
  replaceText: Replacement;
  replaceSync: Replacement;
}

interface Trigger {
  id: string;
  disabled?: boolean;
  regex?: RegExp;
  regexDe?: RegExp;
  regexFr?: RegExp;
  regexJa?: RegExp;
  regexCn?: RegExp;
  regexKo?: RegExp;
  netRegex?: RegExp;
  netRegexDe?: RegExp;
  netRegexFr?: RegExp;
  netRegexJa?: RegExp;
  netRegexCn?: RegExp;
  netRegexKo?: RegExp;
  condition?: TriggerFunction<boolean>;
  preRun?: TriggerFunction<any>;
  promise?: TriggerFunction<Promise<any>>;
  beforeSeconds?: number | TriggerFunction<number>;
  delaySeconds?: number | TriggerFunction<number>;
  durationSeconds?: number | TriggerFunction<number>;
  suppressSeconds?: number | TriggerFunction<number>;
  sound?: string;
  soundVolume?: number;
  response?: LocaleObject | TriggerFunction<LocaleObject>;
  alarmText?: string | LocaleObject | TriggerFunction<LocaleObject>;
  alertText?: string | LocaleObject | TriggerFunction<LocaleObject>;
  infoText?: string | LocaleObject | TriggerFunction<LocaleObject>;
  tts?: string | LocaleObject | TriggerFunction<LocaleObject>;
  run?: TriggerFunction<any>;
}

interface TriggerSet {
  zoneId?: number;
  timelineFile?: string;
  timeline?: string;
  timelineTriggers?: Trigger[];
  locale?: Locale;
  timelineReplace?: TimelineReplace[];
  triggers?: Trigger[];
  overrideTimelineFile?: boolean;
  resetWhenOutOfCombat?: boolean;
}

interface CactbotOptions {
  Triggers: TriggerSet[];

  //#region raidboss options
  PlayerNicks: { [s: string]: string };
  //#endregion
}

declare const Options: CactbotOptions;
