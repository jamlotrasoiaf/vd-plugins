(function(n,t,i){"use strict";const c=t.findByName("ThreadLongPressActionSheet"),o=t.findByProps("openLazy","hideActionSheet"),h=t.findByStoreName("ChannelStore");let a;var s={onLoad:function(){a=i.before("openLazy",o,function(e){const[d,f,r]=e;l(f,r)&&(e[0]=Promise.resolve({default:c}),e[1]="ThreadLongPressActionSheet",e[2]={channelId:r.channelId,onClose:function(){o.hideActionSheet()}})})},onUnload:function(){a?.()}};function l(e,d){return e.startsWith("ChannelLongPress")?!!h.getChannel(d.channelId).threadMetadata:!1}return n.default=s,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta.metro,vendetta.patcher);
