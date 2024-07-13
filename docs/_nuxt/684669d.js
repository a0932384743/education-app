(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1037:function(t,e,n){"use strict";n(41),n(35),n(48),n(49),n(38),n(39);var r=n(204),o=n(10),c=(n(22),n(104),n(890),n(627),n(146)),l=n(134),d=n(517),m=["title"];function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=d.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return f(f({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,m));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",f(f({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},1120:function(t){t.exports=JSON.parse('[{"name":"abnormal","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[14,0,0,6,0,6,2,17,14,10,4,14]},{"name":"abnormal.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[10,6,0,2,9,18,7,8,18,9,20,4]},{"name":"normal","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[69,100,100,96,83,73,59,74,60,89,86,71]},{"name":"normal.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[55,81,71,86,94,97,83,65,97,79,98,63]},{"name":"non-warning","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[3,10,1,2,4,7,8,10,1,4,5,9]},{"name":"non-warning.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[7,9,7,4,4,7,4,10,7,9,2,9]},{"name":"total","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[158,206,179,196,194,208,163,184,197,200,215,170]},{"name":"total.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[72,96,78,92,107,122,94,83,122,97,120,76]}]')},1218:function(t,e,n){"use strict";n.r(e);var r=n(358),o=n(497),c=n(867),l=n(1199),d=n(422),m=n(865),h=(n(84),n(455),n(35),n(114),n(22),n(1071)),f=n(1120),v=n(884),y=n(878),x={name:"PeeringBgpStatus",components:{ChartCard:v.default},layout:"admin-layout",data:function(){return{statusMap:y.a}},computed:{headers:function(){return[{text:this.$t("id"),value:"id",width:80},{text:this.$t("peering.name"),value:"peering_name"},{text:this.$t("peering.device"),value:"device"},{text:this.$t("bgp.status"),value:"bgp_status"},{text:this.$t("bgp.status.check.time"),value:"bgp_check_time"},{text:this.$t("received.num.current"),value:"received"},{text:this.$t("received.check.time"),value:"received_check_time"},{text:this.$t("received.num.history"),value:"history"},{text:this.$t("submitted.num.current"),value:"submitted"},{text:this.$t("submitted.check.time"),value:"submitted_check_time"}]},items:function(){return h},lineData:function(){return f},pieData:function(){return["normal","abnormal","non-warning"].map((function(t){return{name:t,value:h.filter((function(e){return e.status===t})).length+("normal"===t?70:"abnormal"===t?4:2)}}))}},methods:{setRowClass:function(t){if(this.$vuetify.breakpoint.smAndDown)return"".concat(this.statusMap[t.status]," lighten-2")}}},_=n(136),component=Object(_.a)(x,(function(){var t=this,e=t._self._c;return e(m.a,[e(c.a,{staticClass:"text-center",attrs:{cols:12,md:6}},[e("chart-card",{attrs:{title:"Peering BGP狀況監控統計圖"}},[e("chart-pie-list",{attrs:{items:t.pieData},scopedSlots:t._u([{key:"default",fn:function(t){var n=t.options;return[e("v-chart",{staticStyle:{width:"100%",height:"250px"},attrs:{options:n,autoresize:""}})]}}])})],1)],1),t._v(" "),e(c.a,{staticClass:"text-center",attrs:{cols:12,md:6}},[e("chart-card",{attrs:{title:"Peering BGP狀態趨勢圖"}},[e("chart-check-list",{attrs:{items:t.lineData},scopedSlots:t._u([{key:"default",fn:function(t){var n=t.options;return[e("v-chart",{staticStyle:{width:"100%",height:"250px"},attrs:{options:n,autoresize:""}})]}}])})],1)],1),t._v(" "),e(c.a,{attrs:{cols:12}},[e("table-card",{attrs:{title:"BGP Peering狀態-Peering BGP狀況",items:t.items},scopedSlots:t._u([{key:"default",fn:function(n){var c=n.search,m=n.footerProps,h=n.itemPerPage,f=n.page,v=n.items,y=n.headerProps,x=n.loading;return[e(l.a,{attrs:{loading:x,headers:t.headers,items:v,search:c,page:f,"items-per-page":h,"footer-props":m,"header-props":y,"fixed-header":"","item-class":t.setRowClass,"hide-default-footer":""},scopedSlots:t._u([{key:"item.peering_name",fn:function(n){var r=n.item;return[e("td",{class:"".concat(t.statusMap[r.status]," lighten-2"),style:"none"!==r.status&&"border-color: inherit !important;",attrs:{nowrap:"nowrap"}},[t._v("\n              "+t._s(r.peering_name)+"\n            ")])]}},{key:"item.device",fn:function(n){var r=n.item;return[e("td",{class:"".concat(t.statusMap[r.status]," lighten-2"),style:"none"!==r.status&&"border-color: inherit !important",attrs:{nowrap:"nowrap"}},[t._v("\n              "+t._s(r.device)+"\n            ")])]}},{key:"item.bgp_status",fn:function(n){var r=n.item;return[e(o.a,{attrs:{color:t.statusMap[r.status],dark:"",small:""}},[t._v("\n              "+t._s(r.bgp_status.toUpperCase())+"\n            ")])]}},{key:"item.received",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(n.received?n.received.toLocaleString():"未監控")+"\n          ")]}},{key:"item.submitted",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(n.submitted?n.submitted.toLocaleString():"未監控")+"\n          ")]}},{key:"item.history",fn:function(){return[e("td",{attrs:{align:"center"}},[e(r.a,{attrs:{color:"secondary",small:"",dark:""}},[e(d.a,[t._v("mdi-chart-areaspline")])],1)],1)]},proxy:!0}],null,!0)})]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChartPieList:n(892).default,ChartCard:n(884).default,ChartCheckList:n(893).default,TableCard:n(879).default})},884:function(t,e,n){"use strict";n.r(e);var r=n(358),o=n(886),c=n(876),l=n(175),d=n(422),m=n(861),h={name:"ChartCard",props:{title:{type:String,required:!0}},data:function(){return{collapse:!1,show:!0}}},f=n(136),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mx-auto",attrs:{height:t.collapse?"auto":"100%"}},[e(c.c,{staticClass:"info white--text flex-nowrap"},[e("span",{staticClass:"font-weight-bold text-truncate"},[t._v(t._s(t.$t(t.title)))]),t._v(" "),e(m.a),t._v(" "),e(r.a,{attrs:{color:"white",icon:""},on:{click:function(e){t.collapse=!t.collapse}}},[e(d.a,[t._v("mdi-minus")])],1),t._v(" "),e(r.a,{attrs:{color:"white",icon:""},on:{click:function(e){t.show=!1}}},[e(d.a,[t._v("mdi-close")])],1)],1),t._v(" "),e(l.a,[t.collapse?t._e():e(c.b,{staticStyle:{height:"calc(100% - 60px)"}},[t._t("default")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},887:function(t,e,n){var content=n(897);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("4b8c40ea",content,!0,{sourceMap:!1})},890:function(t,e,n){var content=n(891);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("7b5d4dc6",content,!0,{sourceMap:!1})},891:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),r.locals={},t.exports=r},892:function(t,e,n){"use strict";n.r(e);var r=n(494),o=n(360),c=n(73),l=n(137),d=(n(78),n(94),n(22),n(41),n(35),n(48),n(49),n(38),n(39),n(10)),m=(n(114),n(878));function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(d.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={name:"ChartPieList",props:{items:{type:Array,required:!0}},data:function(){return{statusMap:m.a}},computed:{options:function(){var t=this;return{grid:{top:0,bottom:0,containLabel:!0},tooltip:{trigger:"item"},legend:{top:"5%",left:"center",textStyle:{color:this.$vuetify.theme.isDark?"#fff":"#000",fontSize:this.$vuetify.breakpoint.mdAndUp?18:14}},series:[{avoidLabelOverlap:!1,label:{show:!0,position:"inner",formatter:"{c}"},labelLine:{show:!1},name:"設備總覽",type:"pie",radius:["30%","60%"],data:this.items.map((function(e){return f(f({},e),{},{name:t.$t("".concat(e.name,".count")),itemStyle:{color:t.$vuetify.theme.themes[t.$vuetify.theme.isDark?"dark":"light"][t.statusMap[e.name]||"secondary"]}})}))}]}}}},y=(n(896),n(136)),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex"},[e("div",{staticClass:"flex-grow-1",staticStyle:{"max-width":"calc(100% - 200px)"}},[t._t("default",null,{options:t.options})],2),t._v(" "),e(r.a,{staticClass:"flex-grow-1",staticStyle:{"max-width":"200px"}},t._l([].concat(Object(l.a)(t.items),[{value:t.items.reduce((function(t,e){return t+e.value}),0),name:"total"}]),(function(n){return e(o.a,{key:n.name},[e(c.a,[e(c.b,{class:"error"===t.statusMap[n.name]&&"title"},[t._v("\n          "+t._s(t.$t(n.name+".count"))+" :\n          "),e("a",{class:"".concat(t.statusMap[n.name],"--text")},[t._v(t._s(n.value))])])],1)],1)})),1)],1)}),[],!1,null,"f0d60b46",null);e.default=component.exports},893:function(t,e,n){"use strict";n.r(e);var r=n(1037),o=n(494),c=n(360),l=n(174),d=(n(35),n(114),n(94),n(22),n(91),n(105),n(120),n(878)),m={name:"ChartCheckList",props:{items:{type:Array,required:!0}},data:function(){return{statusMap:d.a,selected:[],range:12}},computed:{options:function(){var t=this;return{tooltip:{trigger:"axis"},legend:{data:this.items.filter((function(e){return t.selected.some((function(s){return String(s)===String(e.name)||String("".concat(s,".yesterday"))===String(e.name)}))})).map((function(e){return t.$t("".concat(e.name,".count"))})),icon:"rect",top:"5%",left:"center",textStyle:{color:this.$vuetify.theme.isDark?"#fff":"#000",fontSize:this.$vuetify.breakpoint.mdAndUp?18:14}},xAxis:{type:"category",boundaryGap:!1,data:this.items[0].time.slice(-this.range)},yAxis:{type:"value"},series:this.items.filter((function(e){return t.selected.some((function(s){return String(s)===String(e.name)||String("".concat(s,".yesterday"))===String(e.name)}))})).map((function(e,n){return{name:t.$t("".concat(e.name,".count")),type:"line",smooth:!0,label:{show:!0,position:n%2?"top":"bottom"},data:e.value.slice(-t.range),itemStyle:{color:t.$vuetify.theme.themes[t.$vuetify.theme.isDark?"dark":"light"][t.statusMap[e.name]||"secondary"]}}}))}}},mounted:function(){this.selected=this.items.map((function(t){return t.name})).filter((function(t){return!t.includes("yesterday")})).slice(0,1)}},h=n(136),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex"},[e("div",{staticClass:"flex-grow-1",staticStyle:{"max-width":"calc(100% - 200px)"}},[t._t("default",null,{options:t.options})],2),t._v(" "),e(o.a,{staticClass:"flex-grow-1",staticStyle:{"max-width":"200px"}},[e(c.a,[e(l.a,{attrs:{"item-text":"label","item-value":"value","hide-details":"",items:[{value:12,label:t.$t("hours",{e:12})},{value:6,label:t.$t("hours",{e:6})},{value:3,label:t.$t("hours",{e:3})}]},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1),t._v(" "),t._l(t.items.map((function(t){return t.name})).filter((function(t){return-1===t.indexOf("yesterday")})),(function(n){return e(c.a,{key:n.name},[e(r.a,{staticClass:"text-no-wrap mt-0",attrs:{label:t.$t(n),value:n,color:"info","hide-details":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports},896:function(t,e,n){"use strict";n(887)},897:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"a[data-v-f0d60b46]:hover{-webkit-text-decoration:underline;text-decoration:underline}",""]),r.locals={},t.exports=r}}]);