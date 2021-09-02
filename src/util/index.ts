import Regexes from '@/resources/regexes';
import NetRegexes from '@/resources/netregexes';
import { LocaleText, NetRegexTrigger } from '@/types/trigger';
import { RaidbossData } from '@/types/data';

export interface DotData extends RaidbossData {
  lastDotTime: number;
  lastDotTarget: string;
  lastDotDuration: number;
}

export const createDotDurationTrigger = <Data extends DotData>(
  prefix: string,
  id: string,
  name: string,
  info: string | LocaleText,
): NetRegexTrigger<Data> => {
  return {
    id: `Personal ${prefix} DoT ${name}`,
    type: 'GainsEffect',
    netRegex: NetRegexes.gainsEffect({ effectId: id }),
    condition: (data, matches) => matches.source === data.me,
    preRun: function (data, matches) {
      data.lastDotTime = +new Date();
      data.lastDotDuration = parseFloat(matches.duration);
    },
    suppressSeconds: 1,
    delaySeconds(data) {
      return data.lastDotTime + data.lastDotDuration - +new Date();
    },
    infoText: info,
  };
};

export const prependEmoji = (entries: string | string[]): string[] => {
  const emoji = '(╯▽╰ ) ';
  // eslint-disable-next-line no-useless-escape
  const search = Regexes.parse(/(?<=^\s*\y{Float}\s+)"/);
  const arr = Array.isArray(entries) ? entries : [entries];
  return arr.map((entry) => entry.replace(search, emoji + '"'));
};
