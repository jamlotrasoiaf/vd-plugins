(function(a,t,u){"use strict";const h=t.findByName("ForumPostLongPressActionSheet"),l=t.findByName("ThreadLongPressActionSheet"),c=t.findByProps("openLazy","hideActionSheet"),d=t.findByStoreName("ChannelStore");let s;var f={onLoad:function(){s=u.before("openLazy",c,function(e){const[i,n,o]=e,r=p(n,o);r&&(e[0]=r.component,e[1]=r.type,e[2]=r.ctx)})},onUnload:function(){s?.()}};function p(e,i){if(!e.startsWith("ChannelLongPress"))return null;const n=d.getChannel(i.channelId);if(!n.parent_id||!n.threadMetadata)return null;const o=d.getChannel(n.parent_id);return o.type==15?{component:Promise.resolve({default:h}),type:"ForumPostLongPressActionSheet",ctx:{thread:n,parentChannel:o,onClose:function(){return c.hideActionSheet()}}}:{component:Promise.resolve({default:l}),type:"ThreadLongPressActionSheet",ctx:{channelId:i.channelId,onClose:function(){return c.hideActionSheet()}}}}return a.default=f,Object.defineProperty(a,"__esModule",{value:!0}),a})({},vendetta.metro,vendetta.patcher);
