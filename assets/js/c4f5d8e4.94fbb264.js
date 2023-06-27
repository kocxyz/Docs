"use strict";(self.webpackChunkkocitydocs=self.webpackChunkkocitydocs||[]).push([[195],{2378:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(7294),r=n(6010),s=n(3699),l=n(9962),o=n(4709);const c={features:"features_t9lD",featureSvg:"featureSvg_GfXr",row:"row_kvGa",img:"img_ScJ_"};function i(){return a.createElement("section",{className:c.features},a.createElement("div",{className:"container"},a.createElement("div",{className:c.row},a.createElement("h2",null," Welcome to Knockout City "),a.createElement("p",null," Knockout City is a bustling metropolis filled with excitement and adventure. Whether you're a seasoned fighter or a newcomer to the game, there's something for everyone in this city. From the neon lights of the downtown district to the quiet streets of the suburbs, Knockout City has it all. So come on in, make yourself at home, and get ready to experience the thrill of the fight! "),a.createElement("div",{className:c.img},a.createElement("img",{src:"https://cdn.discordapp.com/attachments/798935892059488276/1102977194805964800/image.png"})))))}const u={section:"section_rpye container",widget:"widget_Qfs3",refresh:"refresh_sbsm",server:"server_JyMx",status:"status_ViqF",players:"players_gU2C",message:"message_MnrX"},m={TCNS:{longName:"The City Never Sleeps",location:"Chicago",link:"https://discord.gg/FdvGezR3YY",linkText:"Discord"},DummyCorps:{location:"Southeast US",link:"https://koc.dummycorps.net/",linkText:"Website"},"KO-NA-West":{location:"Vancouver"}},h=()=>a.createElement("section",{className:u.section},a.createElement("h2",null,"Public Servers"),a.createElement("p",null,"These are the community hosted servers you can access through the launcher."),a.createElement(d,null)),d=()=>{const[e,t]=f();return a.createElement("div",{className:u.widget},a.createElement("button",{title:"refresh",className:u.refresh,disabled:"loading"===e.status,onClick:t},a.createElement("svg",null,a.createElement("use",{href:"/img/refresh.svg#refresh"}))),a.createElement("table",{className:u.table},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Status"),a.createElement("th",null,"Region"),a.createElement("th",null,"Name"),a.createElement("th",null,"Players (/ Max)"),a.createElement("th",null,"Link"))),a.createElement("tbody",null,"ok"===e.status?e.servers.map((e=>a.createElement(g,{key:e.id,server:e}))):a.createElement("tr",null,a.createElement("td",{colSpan:5,className:u.message},"loading"===e.status?a.createElement(a.Fragment,null,"Loading..."):"error"===e.status?a.createElement(a.Fragment,null,"Couldn't load servers."):null)))))},g=e=>{let{server:t}=e;const{longName:n,location:r,link:s,linkText:l}=m[t.name]??{};return a.createElement("tr",{className:u.server},a.createElement("td",{className:u.status,title:t.status},"online"===t.status?"\ud83d\udfe2":"\u26a0\ufe0f"),a.createElement("td",{className:u.region},t.region,r&&` (${r})`),a.createElement("td",{className:u.name},t.name,n&&` (${n})`),a.createElement("td",{className:u.players},`${E(t.players)} / ${E(t.maxPlayers)}`),a.createElement("td",{className:u.link},s?a.createElement("a",{href:s},l??s):null))},E=e=>String(e).padStart(3,"\u2007"),f=()=>{const[e,t]=(0,a.useState)({status:"loading"});(0,a.useEffect)((()=>{y().then(t)}),[]);return[e,()=>{"loading"!==e.status&&(t({status:"loading"}),y().then(t))}]},y=async()=>{try{const e=await fetch("https://api.kocity.xyz/stats/servers"),t=await e.json();return p(t)?{status:"ok",servers:t}:(console.error("couldn't parse server list. got: ",t),{status:"error"})}catch(e){return console.error(e),{status:"error"}}},p=e=>Array.isArray(e)&&e.every(b),b=e=>"object"==typeof e&&null!==e&&("string"==typeof e.id||"number"==typeof e.id)&&"string"==typeof e.status&&"string"==typeof e.name&&"string"==typeof e.region&&"number"==typeof e.maxPlayers&&"number"==typeof e.players,k={heroBanner:"heroBanner_qdFl",title:"title_GqtP",tagline:"tagline_Bqj_",buttons:"buttons_AeoN",button:"button_JGCe button button--lg",buttonDownload:"buttonDownload_cSwr button_JGCe button button--lg",buttonInstructions:"buttonInstructions_FzB8 button_JGCe button button--lg"};function v(){const{siteConfig:e}=(0,l.Z)();return a.createElement("header",{className:(0,r.Z)("hero hero--primary",k.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:k.title},"The Unofficial",a.createElement("br",null),e.title),a.createElement("p",{className:k.tagline},e.tagline),a.createElement("div",{className:k.buttons},a.createElement(s.Z,{className:k.buttonDownload,href:"https://github.com/Ipmake/kocitylauncher/releases/latest/download/KnockoutCityLauncher-Setup.exe"},"Download the Launcher"),a.createElement(s.Z,{className:k.buttonInstructions,href:"https://github.com/Ipmake/kocitylauncher"},"Instructions and information"))))}function N(){return a.createElement(o.Z,{title:"Welcome to Knockout City",description:"The documentation for the unofficial Knockout City Launcher"},a.createElement(v,null),a.createElement("main",null,a.createElement(h,null),a.createElement(i,null)))}}}]);