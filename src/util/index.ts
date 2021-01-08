import NetRegexes from "NetRegexes";

export const createDotDurationTrigger = (prefix: string, id: string, name: string, info: string | LocaleObject): Trigger => {
  return {
    id: `Personal ${prefix} DoT ${name}`,
    netRegex: NetRegexes.gainsEffect({ effectId: id }),
    condition: (data, matches) => matches.source === data.me,
    preRun: function (data, matches) {
      data.lastDotTime = new Date();
      data.lastDotDuration = matches.duration;
    },
  };
};
