(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1205:function(e,t,r){"use strict";r.r(t);var n=r(1199),o=r(865),l=r(174),c=r(233),d=(r(84),r(455),r(41),r(35),r(48),r(49),r(38),r(22),r(39),r(10)),f=(r(114),r(1070));function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={name:"ConnectionUnit",layout:"admin-layout",data:function(){return{items:f.map((function(e){return h(h({},e),{},{editable:!1})})),orgMap:{"國網中心-新竹本部":{orgNameZh:"國網中心-新竹本部",orgNameEn:"NCT - TP",gigaPoP:"TPE"},"國網中心-台中分部":{orgNameZh:"國網中心-台中分部",orgNameEn:"NCT - TXG",gigaPoP:"TXG"},"國網中心-台南分部":{orgNameZh:"國網中心-台南分部",orgNameEn:"NCT - TNN",gigaPoP:"TNN"}}}},computed:{orgOptions:function(){return["國網中心-新竹本部","國網中心-台中分部","國網中心-台南分部"]},headers:function(){return[{text:this.$t("id"),value:"id",width:80},{text:this.$t("whois.org.id"),value:"whoisOrgID"},{text:this.$t("org.name.zh"),value:"orgNameZh"},{text:this.$t("org.name.en"),value:"orgNameEn"},{text:this.$t("giga.pop"),value:"gigaPoP"},{text:this.$t("bgp.community"),value:"bgpCommunity"},{text:this.$t("ipv4.route"),value:"ipv4Route"},{text:this.$t("ipv6.route"),value:"ipv6Route"},{text:this.$t("endpoint.ipv6.address"),value:"endpointIpv6Address"},{text:this.$t("contact.info"),value:"contactInfo"},{text:this.$t("interface.device"),value:"interfaceDevice"},{text:this.$t("interface.device.ifindex"),value:"interfaceDeviceIfindex"},{text:this.$t("interface.port.name"),value:"interfacePortName"},{text:this.$t("interface.alerting"),value:"isAlerting"}]}},methods:{log:function(e){console.log(e)}}},P=r(136),component=Object(P.a)(v,(function(){var e=this,t=e._self._c;return t(o.a,[t("table-card",{attrs:{title:"連線單位聯絡資料維護",items:e.items},scopedSlots:e._u([{key:"default",fn:function(r){var o=r.search,d=r.footerProps,f=r.itemPerPage,m=r.page,h=r.items,v=r.loading,P=r.headerProps;return[t(n.a,{attrs:{"fixed-header":!0,headers:e.headers,items:h,search:o,page:m,loading:v,"items-per-page":f,"footer-props":d,"header-props":P,height:"500px","hide-default-footer":""},scopedSlots:e._u([{key:"item.whoisOrgID",fn:function(r){var n=r.item;return[n.editable?t(c.a,{attrs:{value:n.whoisOrgID,small:"",label:"ORG",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},on:{change:function(e){n.whoisOrgID="ORG"+e}}}):t("div",[e._v(e._s(n.whoisOrgID))])]}},{key:"item.orgNameZh",fn:function(r){var n=r.item;return[n.editable?t(l.a,{attrs:{value:n.orgNameZh,small:"",items:e.orgOptions,required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},on:{change:function(t){n.orgNameZh=t,n.orgNameEn=e.orgMap[t].orgNameEn,n.gigaPoP=e.orgMap[t].gigaPoP}}}):t("div",[e._v(e._s(n.orgNameZh))])]}},{key:"item.bgpCommunity",fn:function(r){var n=r.item;return[n.editable?t(c.a,{attrs:{value:n.bgpCommunity,label:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},on:{change:function(e){n.bgpCommunity=e.substr(0,5)+":"+e.substr(5)}}}):t("div",[e._v(e._s(n.bgpCommunity))])]}},{key:"item.ipv4Route",fn:function(r){var n=r.item;return[n.editable?t(c.a,{attrs:{label:"",rules:[function(e){return!!e||"IPv4 address is required"},function(e){return/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(\/\d{1,2})?$/.test(e)||"Invalid IPv4 address format"}]},model:{value:n.ipv4Route,callback:function(t){e.$set(n,"ipv4Route",t)},expression:"item.ipv4Route"}}):t("div",[e._v(e._s(n.ipv4Route))])]}}],null,!0)})]}}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TableCard:r(879).default})}}]);