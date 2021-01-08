import ZoneId from "ZoneId"

const triggerSet: TriggerFile = {
  zoneId: ZoneId.CastrumMarinumExtreme,
  timelineTriggers: [
    {
      id: "Personal Optimized Ultima",
      regex: /Optimized Ultima/,
      beforeSeconds: 4,
      infoText: "AoE",
    },
  ],
};

export default triggerSet;
