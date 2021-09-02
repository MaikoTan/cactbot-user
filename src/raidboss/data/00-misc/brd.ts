import { RaidbossData } from 'cactbot/data';
import { TriggerSet } from 'cactbot/trigger';
import { createDotDurationTrigger } from '../../../util';

export interface Data extends RaidbossData {
  buffStraightShot: boolean;
  lastDotTime: number;
  lastDotTarget: string;
  lastDotDuration: number;
}

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.MatchAll,
  initData: () => {
    return {
      buffStraightShot: false,
      lastDotTime: 0,
      lastDotTarget: '',
      lastDotDuration: 0,
    };
  },
  triggers: [
    {
      id: 'Personal Bard Barrage',
      type: 'Ability',
      // 6B: Barrage
      netRegex: NetRegexes.ability({ id: '6B' }),
      condition: Conditions.targetIsYou(),
      preRun: (data) => (data.buffStraightShot = true),
    },
    {
      id: 'Personal Bard Straight Shot Buff',
      type: 'GainsEffect',
      netRegex: NetRegexes.gainsEffect({ effectId: '7A' }),
      condition: (data, matches) => matches.source === data.me,
      preRun: (data) => (data.buffStraightShot = true),
      infoText: 'ストレートショット',
    },
    {
      id: 'Personal Bard Straight Shot Buff Lose',
      type: 'LosesEffect',
      netRegex: NetRegexes.losesEffect({ effectId: '7A' }),
      condition: (data, matches) => matches.source === data.me,
      preRun: (data) => (data.buffStraightShot = false),
    },
    {
      id: 'Personal Bard Songs',
      type: 'Ability',
      // 71:   Mage's Ballad
      // 74:   Army's Paeon
      // DE7:  The Wanderer's Minuet
      netRegex: NetRegexes.ability({ id: ['71', '74', 'DE7'] }),
      condition: (data, matches) => matches.source === data.me,
      preRun: (data, matches) => {
        const nextSongs: Record<string, string> = {
          '71': "Army's Paeon",
          '74': "The Wanderer's Minuet",
          DE7: "Mage's Ballad",
        };
        const nextSong = nextSongs[matches.id];
      },
    },
    // DoTs
    ...[
      { id: '7C', name: 'Venomous Bite', info: 'コスティク' },
      { id: '81', name: 'Windbite', info: 'ストーム' },
      { id: '4B0', name: 'Caustic Bite', info: 'コスティク' },
      { id: '4B1', name: 'Stormbite', info: 'ストーム' },
    ].map((elem) => createDotDurationTrigger<Data>('Bard', elem.id, elem.name, elem.info)),
  ],
};

export default triggerSet;
