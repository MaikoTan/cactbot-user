import ZoneId from "ZoneId"

const triggerSet: TriggerSet = {
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
