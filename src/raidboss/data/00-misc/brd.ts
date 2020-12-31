import Conditions from "Conditions";
import NetRegexes from "NetRegexes";
import ZoneId from "ZoneId";

const triggerSet: TriggerFile = {
  zoneId: ZoneId.MatchAll,
  triggers: [
    {
      id: 'Personal Bard Barrage',
      netRegex: NetRegexes.ability({ id: '6B' }),
      condition: Conditions.targetIsYou(),
      preRun: (data) => data.buffStraightShot = true,
    },
    {
      id: 'Personal Bard Straight Shot Buff',
      netRegex: NetRegexes.gainsEffect({ effectId: '7A' }),
      condition: (data, matches) => matches.source === data.me,
      preRun: (data) => data.buffStraightShot = true,
      infoText: 'ストレートショット',
    },
    {
      id: 'Personal Bard Straight Shot Buff Lose',
      netRegex: NetRegexes.losesEffect({ effectId: '7A' }),
      condition: (data, matches) => matches.source === data.me,
      preRun: (data) => data.buffStraightShot = false,
    },
  ],
};

export default triggerSet;
