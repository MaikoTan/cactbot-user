import { RaidbossData } from 'cactbot/data';
import { TriggerSet } from 'cactbot/trigger';

const triggerSet: TriggerSet<RaidbossData> = {
  zoneId: ZoneId.EdensPromiseUmbra,
  timeline: [
    (data: RaidbossData): string => {
      if (data.job.toUpperCase() === 'WHM') {
        return ['15.1 "アサイズ"'].join('\n');
      }
      return '';
    },
  ],
};

export default triggerSet;
