import{_ as e}from"./CommonPage.90710f2e.js";import{o as a,g as t,e as l,z as i,c as n,w as s,a as o,d as r,br as u,bs as m,_ as c,aw as d}from"./index.fc8a4220.js";import{_ as f}from"./TheIcon.508d8a14.js";import{_}from"./Space.9795b332.js";import"./AppPage.19cd2eee.js";import"./get-slot.8207e825.js";const g={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},p=[l("path",{fill:"currentColor",d:"M10 17v-3H3v-4h7V7l5 5l-5 5m0-15h9a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-2h2v2h9V4h-9v2H8V4a2 2 0 0 1 2-2Z"},null,-1)];const v={name:"mdi-login",render:function(e,l){return a(),t("svg",g,p)}},y={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},h=[l("path",{fill:"currentColor",d:"M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z"},null,-1)];const w={name:"mi-delete",render:function(e,l){return a(),t("svg",y,h)}},z={__name:"index",setup(t){const l=function(){$dialog.confirm({content:"确认删除？",confirm(){$message.success("删除成功")},cancel(){$message.warning("已取消")}})};let g=i(!1);function p(){g.value=!0,$message.loading("登陆中..."),setTimeout((()=>{$message.error("登陆失败"),$message.loading("正在尝试重新登陆..."),setTimeout((()=>{$message.success("登陆成功"),g.value=!1}),2e3)}),2e3)}function y(e){$notification[e]({content:"说点啥呢",meta:"想不出来",duration:2500,keepAliveOnHover:!0})}return(t,i)=>{const h=c,z=_,k=d,C=f,b=w,H=v,$=e;return a(),n($,{"show-footer":""},{default:s((()=>[o(z,{size:"large"},{default:s((()=>[o(k,{title:"按钮 Button"},{default:s((()=>[o(z,null,{default:s((()=>[o(h,null,{default:s((()=>[r("Default")])),_:1}),o(h,{type:"tertiary"},{default:s((()=>[r(" Tertiary ")])),_:1}),o(h,{type:"primary"},{default:s((()=>[r(" Primary ")])),_:1}),o(h,{type:"info"},{default:s((()=>[r(" Info ")])),_:1}),o(h,{type:"success"},{default:s((()=>[r(" Success ")])),_:1}),o(h,{type:"warning"},{default:s((()=>[r(" Warning ")])),_:1}),o(h,{type:"error"},{default:s((()=>[r(" Error ")])),_:1})])),_:1})])),_:1}),o(k,{title:"带 Icon 的按钮"},{default:s((()=>[o(z,null,{default:s((()=>[o(h,{type:"info"},{default:s((()=>[o(C,{icon:"material-symbols:add",size:18,class:"mr-5"}),r(" 新增 ")])),_:1}),o(h,{type:"error"},{default:s((()=>[o(C,{icon:"material-symbols:delete-outline",size:18,class:"mr-5"}),r(" 删除 ")])),_:1}),o(h,{type:"warning"},{default:s((()=>[o(C,{icon:"material-symbols:edit-outline",size:18,class:"mr-5"}),r(" 编辑 ")])),_:1}),o(h,{type:"primary"},{default:s((()=>[o(C,{icon:"majesticons:eye-line",size:18,class:"mr-5"}),r(" 查看 ")])),_:1})])),_:1})])),_:1})])),_:1}),o(z,{size:"large","mt-30":""},{default:s((()=>[o(k,{"min-w-340":"",title:"通知 Notification"},{default:s((()=>[o(z,null,{default:s((()=>[o(h,{onClick:i[0]||(i[0]=e=>y("info"))},{default:s((()=>[r(" 信息 ")])),_:1}),o(h,{onClick:i[1]||(i[1]=e=>y("success"))},{default:s((()=>[r(" 成功 ")])),_:1}),o(h,{onClick:i[2]||(i[2]=e=>y("warning"))},{default:s((()=>[r(" 警告 ")])),_:1}),o(h,{onClick:i[3]||(i[3]=e=>y("error"))},{default:s((()=>[r(" 错误 ")])),_:1})])),_:1})])),_:1}),o(k,{"min-w-340":"",title:"确认弹窗 Dialog"},{default:s((()=>[o(h,{type:"error",onClick:l},{default:s((()=>[o(b,{"mr-5":""}),r(" 删除 ")])),_:1})])),_:1}),o(k,{"min-w-340":"",title:"消息提醒 Message"},{default:s((()=>[o(h,{loading:g.value,type:"primary",onClick:p},{default:s((()=>[u(o(H,{"mr-5":""},null,512),[[m,!g.value]]),r(" 登陆 ")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})}}};export{z as default};