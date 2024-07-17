(window.webpackJsonp=window.webpackJsonp||[]).push([[44,7,8],{1083:function(t,e,r){"use strict";r.r(e);var n=r(757),o=r(1045),c=r(755),l=(r(64),r(375),r(994)),h=r(995),m=r(996),d={name:"RoomTemperatureStatus",components:{ChartCard:r(777).default},layout:"admin-layout",computed:{headers:function(){return[{text:this.$t("device.name"),value:"device_name"},{text:this.$t("device.location"),value:"location"},{text:this.$t("current.temperature"),value:"current_temperature"},{text:this.$t("high.critical.temperature"),value:"high_critical_temperature"},{text:this.$t("low.critical.temperature"),value:"low_critical_temperature"}]},lineData:function(){return l},items:function(){return h},pieData:function(){return m}}},v=r(107),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e(c.a,[e(n.a,{staticClass:"text-center",attrs:{cols:12,md:6}},[e("chart-card",{attrs:{title:"機房溫度狀況統計圖"}},[e("chart-pie-list",{attrs:{items:t.pieData},scopedSlots:t._u([{key:"default",fn:function(t){var r=t.options;return[e("v-chart",{staticStyle:{width:"100%",height:"250px"},attrs:{options:r,autoresize:""}})]}}])})],1)],1),t._v(" "),e(n.a,{staticClass:"text-center",attrs:{cols:12,md:6}},[e("chart-card",{attrs:{title:"機房溫度狀況趨勢圖"}},[e("chart-check-list",{attrs:{items:t.lineData},scopedSlots:t._u([{key:"default",fn:function(t){var r=t.options;return[e("v-chart",{staticStyle:{width:"100%",height:"250px"},attrs:{options:r,autoresize:""}})]}}])})],1)],1),t._v(" "),e(n.a,{attrs:{cols:12}},[e("table-card",{attrs:{title:"機房環境狀態-機房溫度狀況",items:t.items},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.search,c=r.footerProps,l=r.itemPerPage,h=r.page,m=r.items,d=r.loading,v=r.headerProps;return[e(o.a,{attrs:{headers:t.headers,items:m,search:n,page:h,loading:d,"items-per-page":l,"footer-props":c,"header-props":v,"fixed-header":"","hide-default-footer":""},scopedSlots:t._u([{key:"item.device_name",fn:function(r){var n=r.item;return[e("td",{class:{error:n.current_temperature<n.low_critical_temperature||n.current_temperature>n.high_critical_temperature}},[t._v("\n              "+t._s(n.device_name)+"\n            ")])]}},{key:"item.location",fn:function(r){var n=r.item;return[e("td",{class:{error:n.current_temperature<n.low_critical_temperature||n.current_temperature>n.high_critical_temperature}},[t._v("\n              "+t._s(n.location)+"\n            ")])]}},{key:"item.current_temperature",fn:function(r){var n=r.item;return[e("td",{class:{error:n.current_temperature<n.low_critical_temperature||n.current_temperature>n.high_critical_temperature}},[t._v("\n              "+t._s(n.current_temperature||"-")+"°C\n            ")])]}},{key:"item.high_critical_temperature",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.high_critical_temperature||"-")+"°C\n          ")]}},{key:"item.low_critical_temperature",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.low_critical_temperature||"-")+"°C\n          ")]}}],null,!0)})]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChartPieList:r(786).default,ChartCard:r(777).default,ChartCheckList:r(789).default,TableCard:r(769).default})},769:function(t,e,r){"use strict";r.r(e);var n=r(292),o=r(775),c=r(768),l=r(411),h=r(355),m=r(413),d=r(294),v=r(55),_=r(422),f=r(787),x=r(752),w=r(193),y=(r(64),r(375),r(109),{name:"TableCard",props:{title:{type:String,required:!0},items:{type:Array,required:!0}},data:function(){return{search:"",page:1,itemPerPage:10,loading:!1}},computed:{footerProps:function(){return{itemsPerPageAllText:this.$t("all"),itemsPerPageText:this.$t("per.page"),pageText:this.$t("current.page")}},headerProps:function(){return{sortByText:this.$t("sort.by"),itemsPerPageText:this.$t("per.page"),pageText:this.$t("current.page")}},totalPage:function(){var t,e;return Math.ceil((null!==(t=null===(e=this.items)||void 0===e?void 0:e.length)&&void 0!==t?t:0)/this.itemPerPage)},totalItem:function(){var t,e;return null!==(t=null===(e=this.items)||void 0===e?void 0:e.length)&&void 0!==t?t:0}},methods:{onReload:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1}),1e3)}}}),O=r(107),component=Object(O.a)(y,(function(){var t=this,e=t._self._c;return e(o.a,[e(c.c,{staticClass:"flex-nowrap"},[e("span",{staticClass:"font-weight-bold text-truncate"},[t._v(t._s(t.$t(t.title)))]),t._v(" "),e(x.a),t._v(" "),e(n.a,{attrs:{icon:""},on:{click:t.onReload}},[e(h.a,[t._v("mdi-refresh")])],1),t._v(" "),e(_.a,{attrs:{"min-width":"100",transition:"slide-y-transition","offset-y":"",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[e(n.a,t._g(t._b({attrs:{icon:"",text:""}},"v-btn",c,!1),o),[e(h.a,[t._v("mdi-download")])],1)]}}])},[t._v(" "),e(m.a,[e(d.a,[e(v.a,[e(v.b,{staticClass:"subtitle-2"},[t._v(" CSV ")])],1)],1),t._v(" "),e(d.a,[e(v.a,[e(v.b,{staticClass:"subtitle-2"},[t._v(" EXCEL ")])],1)],1),t._v(" "),e(d.a,[e(v.a,[e(v.b,{staticClass:"subtitle-2"},[t._v(" PDF ")])],1)],1)],1)],1)],1),t._v(" "),e(l.a),t._v(" "),e(c.b,{staticClass:"pb-8"},[e("div",{staticClass:"text-right mt-2 mb-1"},[e(w.a,{staticClass:"d-inline-flex",attrs:{small:"","append-icon":"mdi-magnify",label:t.$t("search"),clearable:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("div",{staticClass:"overflow-x-auto"},[t._t("default",null,{search:t.search,loading:t.loading,footerProps:t.footerProps,page:t.page,itemPerPage:t.itemPerPage,headerProps:t.headerProps,items:t.items})],2),t._v(" "),e("div",{staticClass:"d-inline-flex w-100 pt-2 justify-space-between align-start align-sm-center flex-sm-row flex-column my-2"},[e("div",{staticClass:"text-left"},[t._v("\n        "+t._s(t.$t("table.footer.text.1",[10*(t.page-1)+1,10*t.page>t.totalItem?t.totalItem:10*t.page,t.totalItem]))+"\n      ")]),t._v(" "),e("div",{staticClass:"align-self-center"},[e(f.a,{attrs:{length:t.totalPage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])])],1)}),[],!1,null,null,null);e.default=component.exports},770:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={normal:"success",abnormal:"error",error:"error","non-warning":"warning",total:"black",down:"error",up:"success"}},772:function(t,e,r){"use strict";r(23)({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},773:function(t,e,r){var content=r(774);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("5bec9846",content,!0,{sourceMap:!1})},774:function(t,e,r){var n=r(42)((function(i){return i[1]}));n.push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;justify-content:center;list-style-type:none;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{opacity:.6;pointer-events:none}.v-pagination__item{background:transparent;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{align-items:center;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;height:32px;justify-content:center;margin:.3rem 10px;-webkit-text-decoration:none;text-decoration:none;width:32px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{align-items:flex-end;display:inline-flex;height:32px;justify-content:center;margin:.3rem;width:32px}",""]),n.locals={},t.exports=n},776:function(t,e,r){var content=r(784);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("4cd1aba5",content,!0,{sourceMap:!1})},777:function(t,e,r){"use strict";r.r(e);var n=r(292),o=r(775),c=r(768),l=r(141),h=r(355),m=r(752),d={name:"ChartCard",props:{title:{type:String,required:!0}},data:function(){return{collapse:!1,show:!0}}},v=r(107),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mx-auto",attrs:{height:t.collapse?"auto":"100%"}},[e(c.c,{staticClass:"info white--text flex-nowrap"},[e("span",{staticClass:"font-weight-bold text-truncate"},[t._v(t._s(t.$t(t.title)))]),t._v(" "),e(m.a),t._v(" "),e(n.a,{attrs:{color:"white",icon:""},on:{click:function(e){t.collapse=!t.collapse}}},[e(h.a,[t._v("mdi-minus")])],1),t._v(" "),e(n.a,{attrs:{color:"white",icon:""},on:{click:function(e){t.show=!1}}},[e(h.a,[t._v("mdi-close")])],1)],1),t._v(" "),e(l.a,[t.collapse?t._e():e(c.b,[t._t("default")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},783:function(t,e,r){"use strict";r(776)},784:function(t,e,r){var n=r(42)((function(i){return i[1]}));n.push([t.i,"a[data-v-21c870db]:hover{-webkit-text-decoration:underline;text-decoration:underline}",""]),n.locals={},t.exports=n},786:function(t,e,r){"use strict";r.r(e);var n=r(413),o=r(294),c=r(55),l=r(120),h=(r(59),r(70),r(15),r(29),r(25),r(35),r(36),r(27),r(28),r(7)),m=(r(91),r(770));function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(h.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={name:"ChartPieList",props:{items:{type:Array,required:!0}},data:function(){return{statusMap:m.a}},computed:{options:function(){var t=this;return{grid:{top:0,bottom:0,containLabel:!0},tooltip:{trigger:"item"},legend:{top:"5%",left:"center",textStyle:{fontSize:18}},series:[{avoidLabelOverlap:!1,label:{show:!1,position:"center"},labelLine:{show:!1},name:"設備總覽",type:"pie",radius:["30%","60%"],data:this.items.map((function(e){return v(v({},e),{},{name:t.$t("".concat(e.name,".count")),itemStyle:{color:t.$vuetify.theme.themes[t.$vuetify.theme.isDark?"dark":"light"][t.statusMap[e.name]||"secondary"]}})}))}]}}}},f=(r(783),r(107)),component=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex"},[e("div",{staticClass:"flex-grow-1",staticStyle:{"max-width":"calc(100% - 200px)"}},[t._t("default",null,{options:t.options})],2),t._v(" "),e(n.a,{staticClass:"flex-grow-1",staticStyle:{"max-width":"200px"}},t._l([].concat(Object(l.a)(t.items),[{value:t.items.reduce((function(t,e){return t+e.value}),0),name:"total"}]),(function(r){return e(o.a,{key:r.name},[e(c.a,[e(c.b,{class:"error"===t.statusMap[r.name]&&"title"},[t._v("\n          "+t._s(t.$t(r.name+".count"))+" :\n          "),e("a",{class:"".concat(t.statusMap[r.name],"--text")},[t._v(t._s(r.value))])])],1)],1)})),1)],1)}),[],!1,null,"21c870db",null);e.default=component.exports},787:function(t,e,r){"use strict";r(29),r(25),r(35),r(36),r(27),r(28);var n=r(120),o=r(7),c=(r(59),r(91),r(58),r(772),r(15),r(83),r(109),r(773),r(114)),l=r(232),h=r(57),m=r(431),d=r(47),v=r(17);function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.a=Object(v.a)(h.a,Object(m.a)({onVisible:["init"]}),d.a).extend({name:"v-pagination",directives:{Resize:l.a},props:{circle:Boolean,disabled:Boolean,navigationColor:String,navigationTextColor:String,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var r=e%2==0?1:0,o=Math.floor(e/2),c=this.length-o+1+r;if(this.value>o&&this.value<c){var l=this.length,h=this.value-o+2,m=this.value+o-2-r,d=m+1===l-1?m+1:"...";return[1,h-1==2?2:"..."].concat(Object(n.a)(this.range(h,m)),[d,this.length])}if(this.value===o){var v=this.value+o-1-r;return[].concat(Object(n.a)(this.range(1,v)),["...",this.length])}if(this.value===c){var _=this.value-o+1;return[1,"..."].concat(Object(n.a)(this.range(_,this.length)))}return[].concat(Object(n.a)(this.range(1,o)),["..."],Object(n.a)(this.range(c,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var r=[],i=t=t>0?t:1;i<=e;i++)r.push(i);return r},genIcon:function(t,e,r,n,label){return t("li",[t("button",this.setBackgroundColor(this.navigationColor,{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":r},attrs:{disabled:r,type:"button","aria-label":label},on:r?{}:{click:n}}),[t(c.a,{props:{color:this.navigationTextColor}},[e])])])},genItem:function(t,i){var e=this,r=i===this.value&&(this.color||"primary"),n=i===this.value,o=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(r,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(o,i)},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,r){return t("li",{key:r},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},789:function(t,e,r){"use strict";r.r(e);var n=r(940),o=r(413),c=r(294),l=r(140),h=(r(25),r(91),r(70),r(15),r(71),r(80),r(98),r(770)),m={name:"ChartCheckList",props:{items:{type:Array,required:!0}},data:function(){return{statusMap:h.a,selected:[],range:12}},computed:{options:function(){var t=this;return{tooltip:{trigger:"axis"},legend:{data:this.items.filter((function(e){return t.selected.some((function(s){return e.name.includes(s)}))})).map((function(e){return t.$t("".concat(e.name,".count"))})),icon:"rect",top:"5%",left:"center",textStyle:{fontSize:18}},xAxis:{type:"category",boundaryGap:!1,data:this.items[0].time.slice(-this.range)},yAxis:{type:"value"},series:this.items.filter((function(e){return t.selected.some((function(s){return e.name.includes(s)}))})).map((function(e){return{name:t.$t("".concat(e.name,".count")),type:"line",showSymbol:!1,smooth:!0,label:{show:!0,position:"top"},data:e.value.slice(-t.range),itemStyle:{color:t.$vuetify.theme.themes[t.$vuetify.theme.isDark?"dark":"light"][t.statusMap[e.name]||"secondary"]}}}))}}},mounted:function(){this.selected=this.items.map((function(t){return t.name})).filter((function(t){return!t.includes("yesterday")})).slice(0,1)}},d=r(107),component=Object(d.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex"},[e("div",{staticClass:"flex-grow-1",staticStyle:{"max-width":"calc(100% - 200px)"}},[t._t("default",null,{options:t.options})],2),t._v(" "),e(o.a,{staticClass:"flex-grow-1",staticStyle:{"max-width":"200px"}},[e(c.a,[e(l.a,{attrs:{"item-text":"label","item-value":"value","hide-details":"",items:[{value:12,label:t.$t("hours",{e:12})},{value:6,label:t.$t("hours",{e:6})},{value:3,label:t.$t("hours",{e:3})}]},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1),t._v(" "),t._l(t.items.map((function(t){return t.name})).filter((function(t){return-1===t.indexOf("yesterday")})),(function(r){return e(c.a,{key:r.name},[e(n.a,{staticClass:"text-no-wrap mt-0",attrs:{label:t.$t(r),value:r,"hide-details":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports},791:function(t,e,r){var content=r(792);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("7b5d4dc6",content,!0,{sourceMap:!1})},792:function(t,e,r){var n=r(42)((function(i){return i[1]}));n.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),n.locals={},t.exports=n},940:function(t,e,r){"use strict";r(29),r(25),r(35),r(36),r(27),r(28);var n=r(167),o=r(7),c=(r(15),r(83),r(791),r(524),r(114)),l=r(106),h=r(433),m=["title"];function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=h.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return v(v({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(n.a)(t,m));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",v(v({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},994:function(t){t.exports=JSON.parse('[{"name":"abnormal","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[120,132,101,134,90,230,210,182,191,234,290,330,310]},{"name":"abnormal.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[110,131,91,114,95,200,190,167,111,144,190,230,350]},{"name":"normal","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[100,115,105,130,140,135,120,125,135,140,150,155]},{"name":"normal.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[120,135,110,145,155,160,140,150,170,165,175,180]},{"name":"non-warning","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[110,125,115,130,140,145,125,135,150,145,155,160]},{"name":"non-warning.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[130,140,120,135,145,150,135,140,155,150,160,165]},{"name":"total","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[560,658,522,653,620,910,785,759,757,828,960,1055]},{"name":"total.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[580,656,536,674,695,810,710,717,695,789,915,1080]}]')},995:function(t){t.exports=JSON.parse('[{"device_name":"溫溼度感測器1","location":"Taiwan Branch Node 1","current_temperature":23.5,"high_critical_temperature":30,"low_critical_temperature":15},{"device_name":"溫溼度感測器2","location":"Taiwan Branch Node 2","current_temperature":24,"high_critical_temperature":31,"low_critical_temperature":16},{"device_name":"溫溼度感測器3","location":"Taiwan Branch Node 3","current_temperature":22.8,"high_critical_temperature":29.5,"low_critical_temperature":14.5},{"device_name":"溫溼度感測器4","location":"Taiwan Branch Node 4","current_temperature":25.3,"high_critical_temperature":32,"low_critical_temperature":17},{"device_name":"溫溼度感測器5","location":"Taiwan Branch Node 5","current_temperature":21.9,"high_critical_temperature":28,"low_critical_temperature":13},{"device_name":"溫溼度感測器6","location":"Taiwan Branch Node 6","current_temperature":26.1,"high_critical_temperature":33,"low_critical_temperature":18},{"device_name":"溫溼度感測器7","location":"Taiwan Branch Node 7","current_temperature":23.2,"high_critical_temperature":30.5,"low_critical_temperature":15.5},{"device_name":"溫溼度感測器8","location":"Taiwan Branch Node 8","current_temperature":33.8,"high_critical_temperature":31.5,"low_critical_temperature":16.5},{"device_name":"溫溼度感測器9","location":"Taiwan Branch Node 9","current_temperature":22.5,"high_critical_temperature":29,"low_critical_temperature":14},{"device_name":"溫溼度感測器10","location":"Taiwan Branch Node 10","current_temperature":27,"high_critical_temperature":34,"low_critical_temperature":19},{"device_name":"溫溼度感測器11","location":"Taiwan Branch Node 11","current_temperature":32.8,"high_critical_temperature":31,"low_critical_temperature":16},{"device_name":"溫溼度感測器12","location":"Taiwan Branch Node 12","current_temperature":25.5,"high_critical_temperature":32.5,"low_critical_temperature":17.5},{"device_name":"溫溼度感測器13","location":"Taiwan Branch Node 13","current_temperature":21.3,"high_critical_temperature":28.5,"low_critical_temperature":13.5},{"device_name":"溫溼度感測器14","location":"Taiwan Branch Node 14","current_temperature":26.8,"high_critical_temperature":33.5,"low_critical_temperature":18.5},{"device_name":"溫溼度感測器15","location":"Taiwan Branch Node 15","current_temperature":31,"high_critical_temperature":30,"low_critical_temperature":15},{"device_name":"溫溼度感測器16","location":"Taiwan Branch Node 16","current_temperature":24.2,"high_critical_temperature":31.2,"low_critical_temperature":16.2},{"device_name":"溫溼度感測器17","location":"Taiwan Branch Node 17","current_temperature":22,"high_critical_temperature":29.2,"low_critical_temperature":14.2},{"device_name":"溫溼度感測器18","location":"Taiwan Branch Node 18","current_temperature":16,"high_critical_temperature":32.2,"low_critical_temperature":17.2},{"device_name":"溫溼度感測器19","location":"Taiwan Branch Node 19","current_temperature":21.5,"high_critical_temperature":28.2,"low_critical_temperature":13.2},{"device_name":"溫溼度感測器20","location":"Taiwan Branch Node 20","current_temperature":26.5,"high_critical_temperature":33.2,"low_critical_temperature":18.2},{"device_name":"溫溼度感測器21","location":"Taiwan Branch Node 21","current_temperature":33.5,"high_critical_temperature":30.2,"low_critical_temperature":15.2},{"device_name":"溫溼度感測器22","location":"Taiwan Branch Node 22","current_temperature":18.5,"high_critical_temperature":31.7,"low_critical_temperature":16.7},{"device_name":"溫溼度感測器23","location":"Taiwan Branch Node 23","current_temperature":22.3,"high_critical_temperature":29.7,"low_critical_temperature":14.7},{"device_name":"溫溼度感測器24","location":"Taiwan Branch Node 24","current_temperature":25.7,"high_critical_temperature":32.7,"low_critical_temperature":17.7},{"device_name":"溫溼度感測器25","location":"Taiwan Branch Node 25","current_temperature":21.7,"high_critical_temperature":28.7,"low_critical_temperature":13.7}]')},996:function(t){t.exports=JSON.parse('[{"value":122,"name":"normal"},{"value":61,"name":"abnormal"},{"value":41,"name":"non-warning"}]')}}]);