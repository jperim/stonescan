"use strict";(self["webpackChunkstonescan"]=self["webpackChunkstonescan"]||[]).push([[247],{6247:(a,t,e)=>{e.r(t),e.d(t,{default:()=>A});var o=e(3673);function c(a,t,e,c,n,s){const r=(0,o.up)("marcacao-list-cpn"),l=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(l,{flex:"",class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(r)])),_:1})}var n=e(2323),s=e(8880);const r={key:0,class:"q-gutter-sm"},l=(0,o.Uk)("Marcação"),i={class:"text-h6 text-center text-orange-9"},u={class:"text-overline text-center"},d={class:"text-center"},m={class:"text-h5 text-center text-grey"},p=(0,o.Uk)(" Blocos "),w={key:1},f=(0,o.Wm)("p",null,"Nenhum registro cadastrado",-1),g={key:0};function v(a,t,e,c,v,k){const h=(0,o.up)("q-btn"),q=(0,o.up)("q-toolbar"),W=(0,o.up)("q-card-section"),b=(0,o.up)("q-separator"),C=(0,o.up)("q-badge"),Z=(0,o.up)("q-space"),y=(0,o.up)("q-card-actions"),Q=(0,o.up)("q-card"),M=(0,o.up)("q-item-section"),_=(0,o.up)("q-item"),x=(0,o.up)("q-list"),j=(0,o.up)("q-btn-dropdown"),S=(0,o.up)("q-tabs"),z=(0,o.up)("q-footer"),F=(0,o.up)("router-view");return a.editando?((0,o.wg)(),(0,o.j4)(F,{key:1})):((0,o.wg)(),(0,o.j4)("div",r,[(0,o.Wm)("div",null,[(0,o.Wm)(q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"secondary",icon:"add",onClick:t[1]||(t[1]=t=>a.openMarcacao(void 0))},{default:(0,o.w5)((()=>[l])),_:1})])),_:1}),a.dados.length>0?((0,o.wg)(),(0,o.j4)("div",{key:0,class:a.$q.screen.xs?"col q-gutter-sm":"row q-gutter-sm"},[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(a.dados,(t=>((0,o.wg)(),(0,o.j4)(Q,{flat:"",bordered:"",class:"my-card bg-grey-1",key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)("div",i,"#"+(0,n.zw)(t.id)+" - "+(0,n.zw)(a.dateFormattedString(t.data)),1),(0,o.Wm)("div",u,(0,n.zw)(t.fornecedor.nome),1),(0,o.Wm)("div",d,(0,n.zw)(t.condicao.descricao),1),(0,o.Wm)("div",m,"Total: "+(0,n.zw)(Number(t.valortotal).toFixed(2)),1)])),_:2},1024),(0,o.Wm)(b),(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h,{flat:"",color:"secondary",onClick:e=>a.openBlocos(t)},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{color:"red",floating:"",transparent:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(t.qtde_bloco),1)])),_:2},1024),p])),_:2},1032,["onClick"]),(0,o.Wm)(Z),(0,o.Wm)(h,{flat:"",icon:"edit",color:"primary",onClick:e=>a.openMarcacao(t)},null,8,["onClick"]),(0,o.Wm)(h,{flat:"",round:"",icon:"delete",color:"red",onClick:(0,s.iM)((e=>a.removeMarcacao(t)),["stop"])},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128))],2)):((0,o.wg)(),(0,o.j4)("div",w,[(0,o.Wm)(b),f])),a.situacoes.length>0?((0,o.wg)(),(0,o.j4)(z,{key:2,elevated:""},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{"inline-label":"",shrink:"",stretch:"","no-caps":""},{default:(0,o.w5)((()=>[(0,o.Wm)(j,{"auto-close":"",stretch:"",flat:"",label:"Status..."},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(a.situacoes,(t=>((0,o.wg)(),(0,o.j4)(x,{key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{clickable:"",onClick:e=>a.showTab(t)},{default:(0,o.w5)((()=>[(0,o.Wm)(M,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(t.descricao),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1}),a.situacao?((0,o.wg)(),(0,o.j4)("span",g,(0,n.zw)(a.situacao.descricao),1)):(0,o.kq)("",!0)])),_:1})])),_:1})):(0,o.kq)("",!0)])]))}e(71);var k=e(8825),h=e(1082),q=e(1959),W=e(7874);const b=(0,o.aZ)({name:"MarcacaoListCpn",setup(){const a=(0,k.Z)(),t=(0,W.oR)(),e=(0,q.iH)(!1),c=(0,q.iH)(!1),n=(0,q.iH)(void 0);function s(a){e.value=a}function r(a){t.dispatch("marcacao/setMarcacaoCurrent",a)}function l(e){a.dialog({title:"Confirma",message:"Exclusão desta marcação # "+e.id+"?",cancel:!0,persistent:!0}).onOk((()=>{t.dispatch("marcacao/removeMarcacao",e)}))}function i(a){s(!0),r(a),this.$router.push({name:"marcacao-detalhe"})}function u(a){s(!0),r(a),this.$router.push({name:"marcacao-blocos"})}function d(a){return h.ZP.formatDate(a,"DD/MM/YYYY")}(0,o.JJ)("setEditando",s);const m=(0,o.Fl)((()=>t.getters["marcacao/getMarcacoes"])),p=(0,o.Fl)((()=>t.getters["situacao/situacoes"]));function w(a){n.value=a,f(n.value.id)}async function f(a){c.value=!0,await t.dispatch("marcacao/FetchAllSituacao",a).then((()=>{c.value=!1}))}return(0,o.bv)((async()=>{await Promise.all([t.dispatch("usuario/loadUsuarios"),t.dispatch("situacao/loadSituacoes")]).then((()=>{t.dispatch("usuario/setUsuarioCurrent",1),n.value=t.getters["situacao/situacao"],f(n.value.id),e.value=!1}))})),{situacoes:p,situacao:n,dados:m,editando:e,showTab:w,openMarcacao:i,removeMarcacao:l,openBlocos:u,dateFormattedString:d}}});var C=e(9570),Z=e(3747),y=e(2165),Q=e(151),M=e(5589),_=e(5869),x=e(9367),j=e(9721),S=e(2025),z=e(1762),F=e(7547),T=e(2670),B=e(7011),U=e(3414),Y=e(2035),H=e(7518),D=e.n(H);b.render=v;const L=b;D()(b,"components",{QToolbar:C.Z,QToolbarTitle:Z.Z,QBtn:y.Z,QCard:Q.Z,QCardSection:M.Z,QSeparator:_.Z,QCardActions:x.Z,QBadge:j.Z,QSpace:S.Z,QFooter:z.Z,QTabs:F.Z,QBtnDropdown:T.Z,QList:B.Z,QItem:U.Z,QItemSection:Y.Z});const P={components:{MarcacaoListCpn:L},name:"Marcacao"};var $=e(4379);P.render=c;const A=P;D()(P,"components",{QPage:$.Z})}}]);