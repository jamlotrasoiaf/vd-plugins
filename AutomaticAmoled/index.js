(function(n,r,e){"use strict";const t=r.findByProps("setAMOLEDThemeEnabled"),a=r.findByStoreName("ThemeStore"),d=r.findByStoreName("UnsyncedUserSettingsStore");var i={onLoad:function(){try{const o=a.theme||"dark",g=d.useAMOLEDTheme,l=g==2;e.logger.log(`Current theme: ${o}`),e.logger.log(`AMOLED value: ${g}, enabled: ${l}`),o=="dark"&&!l?(e.logger.log("Enabling AMOLED"),t.setAMOLEDThemeEnabled(!0)):l?(e.logger.log("Disabling AMOLED since dark theme is not enabled"),t.setAMOLEDThemeEnabled(!1)):e.logger.log("No need to change preferences")}catch(o){e.logger.error("Failed to load AutomaticAmoled",o)}}};return n.default=i,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta.metro,vendetta);
