(function(u,L,r,l,S){"use strict";const U=r.findByName("RowManager"),$=r.findByProps("getAPIBaseURL"),m=r.findByStoreName("ThemeStore"),{getChannel:B}=r.findByStoreName("ChannelStore"),{getGuild:N}=r.findByStoreName("GuildStore"),{resolveSemanticColor:P}=r.findByProps("colors","meta").meta,b=/(?<!<)https?:\/\/(?:\w+\.)?discord(?:app)?\.com\/channels\/(\d{17,20}|@me)\/(\d{17,20})\/(\d{17,20})/g,i=new Map,g=[];let c,d;const x=vendetta.patcher.after("generate",U.prototype,function(n,a){let[o]=n;if(o.rowType!==1)return;const h=o?.message?.content;if(!h)return;const D=h.match?.(b)?.map(function(e){const t=e.split("/").slice(-3);return{guildId:t[0]=="@me"?null:t[0],channelId:t[1],messageId:t[2],rawURL:e}});a.message.embeds??=[],D?.forEach(function(e){if(!i.has(e.messageId))return E(e.channelId,e.messageId);const t=i.get(e.messageId);if(!t)return;const p=`https://cdn.discordapp.com/avatars/${t.author?.id}/${t.author?.avatar}.png`,_=new Date().toLocaleString([],{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}),s=e.guildId?N(e.guildId):null,f=s?.name,y=s?`https://cdn.discordapp.com/icons/${s.id}/${s.icon}.png`:null,I=B(e.channelId),w=I?.name??I?.rawRecipients?.[0]?.globalName,R=`${w?"#"+w:""}${f?"  \u2022  "+f:""}`,v=R.length?R:null;a.message.embeds.push({type:"rich",author:{name:`${t.author?.global_name}  \u2022  ${_}`,url:e.rawURL,iconURL:p,iconProxyURL:p},rawDescription:t.content,description:[{content:t.content,type:"text"}],fields:[],footer:{text:v,iconURL:y,iconProxyURL:y,content:v},bodyTextColor:A()}),T(o?.message)})}),C=function(){return x()};async function E(n,a){if(i.has(a))return;i.set(a,null);const o=(await $.get({url:`/channels/${n}/messages`,query:{limit:1,around:a},retries:2}).catch(function(){return null}))?.body?.[0];return L.logger.log(o),i.set(a,o),o}function T(n){g.includes(n.id)||(g.push(n.id),l.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...n,content:n.content+" "},log_edit:!1}))}function A(){return d==m.theme&&c||(d=m.theme,c=l.ReactNative.processColor(P(d,S.semanticColors.TEXT_NORMAL))),c}return u.onUnload=C,u})({},vendetta,vendetta.metro,vendetta.metro.common,vendetta.ui);
