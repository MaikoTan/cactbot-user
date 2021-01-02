interface Locale {
  en?: string;
  de?: string;
  fr?: string;
  ja?: string;
  cn?: string;
  ko?: string;
}

type TriggerFunction<T> = (data: any, matches?: any/* RegExpMatchArray */, output?: any) => T;

interface Replacement {
  [s: string]: string;
}

interface TimelineReplace {
  locale: keyof Locale;
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
  delaySeconds?: number | TriggerFunction<number>;
  durationSeconds?: number | TriggerFunction<number>;
  suppressSeconds?: number | TriggerFunction<number>;
  sound?: string;
  soundVolume?: number;
  response?: Locale | TriggerFunction<Locale>;
  alarmText?: string | Locale | TriggerFunction<Locale>;
  alertText?: string | Locale | TriggerFunction<Locale>;
  infoText?: string | Locale | TriggerFunction<Locale>;
  tts?: string | Locale | TriggerFunction<Locale>;
  run?: TriggerFunction<any>;
}

interface TriggerFile {
  zoneId?: number;
  timelineFile?: string;
  timeline?: string;
  locale?: keyof Locale;
  timelineReplace?: TimelineReplace[];
  triggers?: Trigger[];
  overrideTimelineFile?: boolean;
  resetWhenOutOfCombat?: boolean;
}

interface CactbotOptions {
  Triggers: TriggerFile[];

  //#region raidboss options
  PlayerNicks: { [s: string]: string };
  //#endregion
}

declare const Options: CactbotOptions;
