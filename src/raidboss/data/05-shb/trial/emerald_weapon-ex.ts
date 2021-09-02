import { TriggerSet } from 'cactbot/trigger';
import { RaidbossData } from 'cactbot/data';

const triggerSet: TriggerSet<RaidbossData> = {
  zoneId: ZoneId.CastrumMarinumExtreme,
  timelineTriggers: [
    {
      id: 'Personal Optimized Ultima',
      regex: /Optimized Ultima/,
      beforeSeconds: 4,
      infoText: 'AoE',
    },
  ],
};

export default triggerSet;
