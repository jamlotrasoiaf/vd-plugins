(function(d,a,l,S){"use strict";const L=a.findByName("RowManager"),U=a.findByProps("getAPIBaseURL"),m=a.findByStoreName("ThemeStore"),{getChannel:$}=a.findByStoreName("ChannelStore"),{getGuild:v}=a.findByStoreName("GuildStore"),{resolveSemanticColor:w}=a.findByProps("colors","meta").meta,B=/(?<!<)https?:\/\/(?:\w+\.)?discord(?:app)?\.com\/channels\/(\d{17,20}|@me)\/(\d{17,20})\/(\d{17,20})/g,s=new Map;let i,u;const C=vendetta.patcher.after("generate",L.prototype,function(o,t){let[r]=o;if(r.rowType!==1)return;const h=r?.message?.content;if(!h)return;const E=h.match?.(B)?.map(function(n){const e=n.split("/").slice(-3);return{guildId:e[0]=="@me"?null:e[0],channelId:e[1],messageId:e[2],rawURL:n}});t.message.embeds??=[],E?.forEach(function(n){if(!s.has(n.messageId))return P(n.channelId,n.messageId).then(function(){return T(r.message)});const e=s.get(n.messageId);if(!e||t.message.renderContentOnly!=!1)return;const g=`https://cdn.discordapp.com/avatars/${e.author?.id}/${e.author?.avatar}.png`,b=new Date(e.timestamp).toLocaleString([],{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}),c=n.guildId?v(n.guildId):null,p=c?.name,f=c?`https://cdn.discordapp.com/icons/${c.id}/${c.icon}.png`:null,y=$(n.channelId)?.name,I=`${y?"#"+y:""}${p?"  \u2022  "+p:""}`,R=I.length?I:null;t.message.embeds.push({type:"rich",author:{name:`${e.author?.global_name??e.author?.username}  \u2022  ${b}`,url:n.rawURL,iconURL:g,iconProxyURL:g},rawDescription:e.content,description:[{content:e.content,type:"text"}],fields:[],footer:{text:R,iconURL:f,iconProxyURL:f,content:R},bodyTextColor:x()})})}),N=function(){return C()};async function P(o,t){if(s.has(t))return;s.set(t,null);const r=(await U.get({url:`/channels/${o}/messages`,query:{limit:1,around:t},retries:2}).catch(function(){return null}))?.body?.[0];return s.set(t,r),r}function T(o){l.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...o,content:o.content+"\u200B"},log_edit:!1})}function x(){return u==m.theme&&i||(u=m.theme,i=l.ReactNative.processColor(w(u,S.semanticColors.TEXT_NORMAL))),i}return d.onUnload=N,d})({},vendetta.metro,vendetta.metro.common,vendetta.ui);
