import Conditions from "Conditions";
import NetRegexes from "NetRegexes";
import ZoneId from "ZoneId";
import { createDotDurationTrigger } from "src/util/index";

const triggerSet: TriggerFile = {
  zoneId: ZoneId.MatchAll,
  triggers: [
    {
      id: 'Personal Bard Barrage',
      // 6B: Barrage
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
    {
      id: 'Personal Bard Songs',
      // 71:   Mage's Ballad
      // 74:   Army's Paeon
      // DE7:  The Wanderer's Minuet
      netRegex: NetRegexes.ability({ id: ['71', '74', 'DE7'] }),
      condition: (data, matches) => matches.source === data.me,
      preRun: function (data, matches) {
        const nextSongs: any = {
          '71': 'Army\'s Paeon',
          '74': 'The Wanderer\'s Minuet',
          'DE7': 'Mage\'s Ballad',
        };
        const nextSong = nextSongs[matches.id];
      },
    },
    // DoTs
    ...([
      { id: '7C', name: 'Venomous Bite', info: 'コスティク' },
      { id: '81', name: 'Windbite', info: 'ストーム' },
      { id: '4B0', name: 'Caustic Bite', info: 'コスティク' },
      { id: '4B1', name: 'Stormbite', info: 'ストーム' },
    ].map((elem) => createDotDurationTrigger('Bard', elem.id, elem.name, elem.info))),
  ],
};

export default triggerSet;
