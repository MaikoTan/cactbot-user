import { RaidbossData } from 'cactbot/data';
import { TriggerSet } from 'cactbot/trigger';

export interface Data extends RaidbossData {
  inCombat: boolean;
}

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.MatchAll,
  initData: () => {
    return {
      inCombat: false,
    };
  },
  triggers: [
    {
      id: 'Personal Death Report',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({ line: 'You are defeated by' }),
      netRegexJa: NetRegexes.gameLog({ line: ':あなたは、.*に倒された。' }),
      alarmText: '死',
      durationSeconds: 5,
    },
    {
      id: 'General Ready Check',
      type: 'GameLog',
      netRegex: NetRegexes.gameLog({
        line: '(?:\\y{Name} has initiated|You have commenced) a ready check\\..*?',
        capture: false,
      }),
      netRegexDe: NetRegexes.gameLog({
        line: '(?:\\y{Name} hat|Du hast) eine Bereitschaftsanfrage gestellt\\..*?',
        capture: false,
      }),
      netRegexFr: NetRegexes.gameLog({
        line: 'Un appel de préparation a été lancé par \\y{Name}\\..*?',
        capture: false,
      }),
      netRegexJa: NetRegexes.gameLog({ line: '(?:\\y{Name}が)?レディチェックを開始しました。.*?', capture: false }),
      netRegexCn: NetRegexes.gameLog({ line: '\\y{Name}?发起了准备确认.*?', capture: false }),
      netRegexKo: NetRegexes.gameLog({
        line: '\\y{Name} 님이 준비 확인을 시작했습니다\\.|준비 확인을 시작합니다\\..*?',
        capture: false,
      }),
      tts: 'リンクスタート！',
    },
  ],
};

export default triggerSet;
