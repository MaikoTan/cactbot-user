import NetRegexes from "NetRegexes";
import Regexes from "Regexes";
import ZoneId from "ZoneId";

// Rename this file to `raidboss.js` and edit it to change the raidboss ui.
// This file is Javascript.  Anything after "//" on a line is a comment.
// If you edit this file, remember to reload ACT or click the "Reload overlay"
// button on the raidboss overlay.
// If there are errors in this file, they will appear in the OverlayPlugin.dll
// log window in ACT.
// See: http://github.com/quisquous/cactbot/blob/main/docs/CactbotCustomization.md#check-the-overlayplugin-log-for-errors

// // Path to sound played for info-priority text popups, or when "Info" is
// // specified as the sound name.
// Options.InfoSound = '../../resources/sounds/freesound/percussion_hit.ogg';

// // Path to sound played for alert-priority text popups, or when "Alert" is
// // specified as the sound name.
// Options.AlertSound = '../../resources/sounds/BigWigs/Alert.ogg';

// // Path to sound played for alarm-priority text popups, or when "Alarm" is
// // specified as the sound name.
// Options.AlarmSound = '../../resources/sounds/BigWigs/Alarm.ogg';

// // Path to sound played when "Long" is specified as the sound name.
// Options.LongSound = '../../resources/sounds/BigWigs/Long.ogg';

// // Path to sound played when the fight starts, or when "Pull" is
// // specified as the sound name.
// Options.PullSound = '../../resources/sounds/PowerAuras/sonar.ogg';


// // A set of nicknames to use for players, when trying to shorten names.
// // See: https://github.com/quisquous/cactbot/blob/main/docs/CactbotCustomization.md#customizing-behavior
Options.PlayerNicks = {
  "Nyanyako Nyako": "迷子",
  "Suzune Tsukuyomi": "月咏泠音",
  "Chiyo Mishima": "莉诺雅",
  "Herschel Leisure": "哈谢尔",
};

const context = require.context('./data', true, /.*\.(ts|js|tsx)$/);
context.keys().forEach((key) => {
  const triggerFile = context(key);
  Options.Triggers.push(triggerFile.default);
});
