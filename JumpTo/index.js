(function(a,r,s,u,P,i,m,h){"use strict";const{FormRow:b}=h.Forms,v=r.findByName("Icon"),L=i.getAssetIDByName("toast_copy_link");function A(n,t,o){const e=React.createElement(b,{label:"Jump To Reference",leading:React.createElement(v,{source:i.getAssetIDByName("ic_link_24px")}),onPress:function(){s.url.openDeeplink(t)},onLongPress:function(){s.clipboard.setString(t),m.showToast("Copied referenced message URL to clipboard",L),o()}});return n&&(e.type=n,e.props.message=e.props.label,e.props.iconSource=e.props.leading.props.source,e.props.onPressRow=e.props.onPress),e}const{FormRow:B}=h.Forms,S=r.findByName("Icon"),$=i.getAssetIDByName("toast_copy_link");function k(n,t,o){const e=n[0].type;return React.createElement(e,{key:"jumpstartervd"},React.createElement(B,{leading:React.createElement(S,{source:i.getAssetIDByName("ic_link_24px")}),label:"Jump To Starter Message",onPress:function(){s.url.openDeeplink(t)},onLongPress:function(){s.clipboard.setString(t),m.showToast("Copied starter message URL to clipboard",$),o()}}))}const y=r.findByProps("openLazy","hideActionSheet"),E=r.findByName("ForumPostLongPressActionSheet",!1);let R=[];function _(n,t,o){return`https://discord.com/channels/${n}/${t}/${o}`}var I={onLoad:function(){const n=function(){return y.hideActionSheet()};R=[u.after("default",E,function(t,o){let[{thread:e}]=t;const c=P.findInReactTree(o,function(d){return d.props?.bottom===!0}).props.children.props.children[1],p=_(e.guild_id,e.id,e.id);c.unshift(k(c,p,n))}),u.before("openLazy",y,function(t){const[o,e,c]=t;e=="MessageLongPressActionSheet"&&o.then(function(p){const d=u.after("default",p,function(M,N){s.React.useEffect(function(){return function(){d()}},[]);const[D,l]=N.props?.children?.props?.children?.props?.children,f=D?.props?.message??c?.message;if(!f||!l||!f.messageReference?.message_id)return;const w=l.find(function(T){return!!T.props.message}),g=f.messageReference,F=_(g.guild_id,g.channel_id,g.message_id);l.push(A(w?.type,F,n))})})})]},onUnload:function(){R.forEach(function(n){return n?.()})}};return a.default=I,Object.defineProperty(a,"__esModule",{value:!0}),a})({},vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.utils,vendetta.ui.assets,vendetta.ui.toasts,vendetta.ui.components);
