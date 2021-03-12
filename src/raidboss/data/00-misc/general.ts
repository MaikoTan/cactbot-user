import NetRegexes from "NetRegexes";
import ZoneId from "ZoneId";

const triggerSet: TriggerSet = {
  zoneId: ZoneId.MatchAll,
  triggers: [
    {
      id: "Personal Death Report",
      regex: NetRegexes.gameLog({ line: "You are defeated by" }),
      regexJa: NetRegexes.gameLog({ line: ":あなたは、.*に倒された。" }),
      alarmText: "死",
      durationSeconds: 5,
    },
    {
      id: "General Ready Check",
      netRegex: NetRegexes.gameLog({ line: "(?:\\y{Name} has initiated|You have commenced) a ready check\\..*?", capture: false }),
      netRegexDe: NetRegexes.gameLog({ line: "(?:\\y{Name} hat|Du hast) eine Bereitschaftsanfrage gestellt\\..*?", capture: false }),
      netRegexFr: NetRegexes.gameLog({ line: "Un appel de préparation a été lancé par \\y{Name}\\..*?", capture: false }),
      netRegexJa: NetRegexes.gameLog({ line: "(?:\\y{Name}が)?レディチェックを開始しました。.*?", capture: false }),
      netRegexCn: NetRegexes.gameLog({ line: "\\y{Name}?发起了准备确认.*?", capture: false }),
      netRegexKo: NetRegexes.gameLog({ line: "\\y{Name} 님이 준비 확인을 시작했습니다\\.|준비 확인을 시작합니다\\..*?", capture: false }),
      tts: "リンクスタート！"
    },
  ]
};

export default triggerSet;
