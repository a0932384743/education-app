(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1030:function(e){e.exports=JSON.parse('[{"id":"1","paramName":"最大連接數","param":"MAX_CONN","desc":"系統允許的最大連接數","value":"100","remark":"預設值"},{"id":"2","paramName":"超時時間","param":"TIMEOUT","desc":"系統的超時時間（秒）","value":"30","remark":"預設值"},{"id":"3","paramName":"密碼最短","param":"PWD_SHORT_LEN","desc":"密碼最短使用天數","value":"1","remark":"內部測試環境"},{"id":"4","paramName":"閒置時間","param":"IDLE_TEIM","desc":"登入後系統閒置操作的時間設定","value":"15","remark":"內部測試環境"},{"id":"5","paramName":"日誌級別","param":"LOG_LEVEL","desc":"系統日誌記錄級別","value":"INFO","remark":"預設值"},{"id":"6","paramName":"API金鑰","param":"API_KEY","desc":"第三方服務的API金鑰","value":"abcd1234","remark":"測試用"},{"id":"7","paramName":"文件根目錄","param":"DOC_ROOT","desc":"系統文件的根目錄路徑","value":"/var/www/html","remark":"預設值"},{"id":"8","paramName":"快取大小","param":"CACHE_SIZE","desc":"系統快取的大小（MB）","value":"256","remark":"預設值"},{"id":"9","paramName":"運行模式","param":"RUN_MODE","desc":"系統的運行模式","value":"production","remark":"生產環境"},{"id":"10","paramName":"備份頻率","param":"BACKUP_FREQ","desc":"資料庫備份的頻率（天）","value":"7","remark":"每週備份一次"}]')},1098:function(e,t,n){"use strict";n.r(t);var r=n(292),o=n(757),l=n(1045),c=n(355),d=n(755),m=n(193),v=(n(27),n(15),n(64),n(375),n(29),n(35),n(36),n(28),n(7)),h=(n(25),n(91),n(1030));function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={name:"SystemParameterManagement",layout:"admin-layout",data:function(){return{items:h.map((function(e){return _(_({},e),{},{editable:!1})}))}},computed:{headers:function(){return[{text:this.$t("param.name"),value:"paramName"},{text:this.$t("param.code"),value:"param"},{text:this.$t("param.desc"),value:"desc"},{text:this.$t("param.value"),value:"value"},{text:this.$t("remark"),value:"remark"},{text:this.$t("operate"),value:"operate",sortable:!1}]}},methods:{addParam:function(){this.items.push({id:this.items.length+1,paramName:"",param:"",desc:"",value:"",remark:"",editable:!0,isNew:!0})},deleteParam:function(e){this.items=this.items.filter((function(i){return i.id!==e.id}))}}},y=n(107),component=Object(y.a)(x,(function(){var e=this,t=e._self._c;return t(d.a,[t(o.a,{attrs:{cols:12}},[t("table-card",{attrs:{title:"資料管理-帳號管理",items:e.items},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.search,d=n.footerProps,v=n.itemPerPage,h=n.page,f=n.items,_=n.headerProps,x=n.loading;return[t(l.a,{attrs:{loading:x,headers:e.headers,items:f,search:o,page:h,"items-per-page":v,"footer-props":d,"header-props":_,"fixed-header":"","hide-default-footer":""},scopedSlots:e._u([{key:"header.operate",fn:function(n){var header=n.header;return[t("div",{staticClass:"d-inline-flex align-center",staticStyle:{gap:"0.5rem"}},[t("div",[e._v(e._s(header.text))]),e._v(" "),t(r.a,{attrs:{small:"",color:"success"},on:{click:function(t){return e.addParam()}}},[t(c.a,{attrs:{size:"20"}},[e._v("mdi-plus")])],1)],1)]}},{key:"item.paramName",fn:function(n){var r=n.item;return[r.editable||r.isNew?t(m.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.paramName,callback:function(t){e.$set(r,"paramName",t)},expression:"item.paramName"}}):t("div",[e._v("\n              "+e._s(r.paramName)+"\n            ")])]}},{key:"item.param",fn:function(n){var r=n.item;return[r.editable||r.isNew?t(m.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.param,callback:function(t){e.$set(r,"param",t)},expression:"item.param"}}):t("div",[e._v(e._s(r.param))])]}},{key:"item.desc",fn:function(n){var r=n.item;return[r.editable?t(m.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.desc,callback:function(t){e.$set(r,"desc",t)},expression:"item.desc"}}):t("div",[e._v(e._s(r.desc))])]}},{key:"item.value",fn:function(n){var r=n.item;return[r.editable?t(m.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"item.value"}}):t("div",[e._v(e._s(r.value))])]}},{key:"item.remark",fn:function(n){var r=n.item;return[r.editable?t(m.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.remark,callback:function(t){e.$set(r,"remark",t)},expression:"item.remark"}}):t("div",[e._v(e._s(r.remark))])]}},{key:"item.operate",fn:function(n){var o=n.item;return[t("div",{staticClass:"d-inline-flex",staticStyle:{gap:"0.8rem"}},[t(r.a,{attrs:{small:"",disabled:Object.keys(o).some((function(e){return""===o[e]})),color:o.editable?"secondary":"info"},on:{click:function(e){Object.keys(o).every((function(e){return o[e]}))?o.editable=!o.editable:o.editable=!0}}},[t(c.a,{attrs:{size:"20"}},[e._v("mdi-pencil")]),e._v(" "),t("span",{staticClass:"d-none d-sm-inline-block"},[e._v(e._s(e.$t("edit")))])],1),e._v(" "),t(r.a,{staticClass:"px-2",attrs:{small:"",color:"danger"},on:{click:function(t){return e.deleteParam(o)}}},[t(c.a,{staticClass:"white--text",attrs:{size:"20"}},[e._v("mdi-trash-can-outline")]),t("span",{staticClass:"d-none d-sm-inline-block white--text"},[e._v(e._s(e.$t("delete")))])],1)],1)]}}],null,!0)})]}}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TableCard:n(769).default})},769:function(e,t,n){"use strict";n.r(t);var r=n(292),o=n(775),l=n(768),c=n(411),d=n(355),m=n(413),v=n(294),h=n(55),f=n(422),_=n(787),x=n(752),y=n(193),k=(n(64),n(375),n(109),{name:"TableCard",props:{title:{type:String,required:!0},items:{type:Array,required:!0}},data:function(){return{search:"",page:1,itemPerPage:10,loading:!1}},computed:{footerProps:function(){return{itemsPerPageAllText:this.$t("all"),itemsPerPageText:this.$t("per.page"),pageText:this.$t("current.page")}},headerProps:function(){return{sortByText:this.$t("sort.by"),itemsPerPageText:this.$t("per.page"),pageText:this.$t("current.page")}},totalPage:function(){var e,t;return Math.ceil((null!==(e=null===(t=this.items)||void 0===t?void 0:t.length)&&void 0!==e?e:0)/this.itemPerPage)},totalItem:function(){var e,t;return null!==(e=null===(t=this.items)||void 0===t?void 0:t.length)&&void 0!==e?e:0}},methods:{onReload:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1}),1e3)}}}),O=n(107),component=Object(O.a)(k,(function(){var e=this,t=e._self._c;return t(o.a,[t(l.c,{staticClass:"flex-nowrap"},[t("span",{staticClass:"font-weight-bold text-truncate"},[e._v(e._s(e.$t(e.title)))]),e._v(" "),t(x.a),e._v(" "),t(r.a,{attrs:{icon:""},on:{click:e.onReload}},[t(d.a,[e._v("mdi-refresh")])],1),e._v(" "),t(f.a,{attrs:{"min-width":"100",transition:"slide-y-transition","offset-y":"",bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[t(r.a,e._g(e._b({attrs:{icon:"",text:""}},"v-btn",l,!1),o),[t(d.a,[e._v("mdi-download")])],1)]}}])},[e._v(" "),t(m.a,[t(v.a,[t(h.a,[t(h.b,{staticClass:"subtitle-2"},[e._v(" CSV ")])],1)],1),e._v(" "),t(v.a,[t(h.a,[t(h.b,{staticClass:"subtitle-2"},[e._v(" EXCEL ")])],1)],1),e._v(" "),t(v.a,[t(h.a,[t(h.b,{staticClass:"subtitle-2"},[e._v(" PDF ")])],1)],1)],1)],1)],1),e._v(" "),t(c.a),e._v(" "),t(l.b,{staticClass:"pb-8"},[t("div",{staticClass:"text-right mt-2 mb-1"},[t(y.a,{staticClass:"d-inline-flex",attrs:{small:"","append-icon":"mdi-magnify",label:e.$t("search"),clearable:"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),t("div",{staticClass:"overflow-x-auto"},[e._t("default",null,{search:e.search,loading:e.loading,footerProps:e.footerProps,page:e.page,itemPerPage:e.itemPerPage,headerProps:e.headerProps,items:e.items})],2),e._v(" "),t("div",{staticClass:"d-inline-flex w-100 pt-2 justify-space-between align-start align-sm-center flex-sm-row flex-column my-2"},[t("div",{staticClass:"text-left"},[e._v("\n        "+e._s(e.$t("table.footer.text.1",[10*(e.page-1)+1,10*e.page>e.totalItem?e.totalItem:10*e.page,e.totalItem]))+"\n      ")]),e._v(" "),t("div",{staticClass:"align-self-center"},[t(_.a,{attrs:{length:e.totalPage},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)])])],1)}),[],!1,null,null,null);t.default=component.exports},772:function(e,t,n){"use strict";n(23)({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},773:function(e,t,n){var content=n(774);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("5bec9846",content,!0,{sourceMap:!1})},774:function(e,t,n){var r=n(42)((function(i){return i[1]}));r.push([e.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;justify-content:center;list-style-type:none;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{opacity:.6;pointer-events:none}.v-pagination__item{background:transparent;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{align-items:center;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;height:32px;justify-content:center;margin:.3rem 10px;-webkit-text-decoration:none;text-decoration:none;width:32px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{align-items:flex-end;display:inline-flex;height:32px;justify-content:center;margin:.3rem;width:32px}",""]),r.locals={},e.exports=r},787:function(e,t,n){"use strict";n(29),n(25),n(35),n(36),n(27),n(28);var r=n(120),o=n(7),l=(n(59),n(91),n(58),n(772),n(15),n(83),n(109),n(773),n(114)),c=n(232),d=n(57),m=n(431),v=n(47),h=n(17);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=Object(h.a)(d.a,Object(m.a)({onVisible:["init"]}),v.a).extend({name:"v-pagination",directives:{Resize:c.a},props:{circle:Boolean,disabled:Boolean,navigationColor:String,navigationTextColor:String,length:{type:Number,default:0,validator:function(e){return e%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var e=parseInt(this.totalVisible,10);if(0===e||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];var t=Math.min(Math.max(0,e)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=t)return this.range(1,this.length);var n=t%2==0?1:0,o=Math.floor(t/2),l=this.length-o+1+n;if(this.value>o&&this.value<l){var c=this.length,d=this.value-o+2,m=this.value+o-2-n,v=m+1===c-1?m+1:"...";return[1,d-1==2?2:"..."].concat(Object(r.a)(this.range(d,m)),[v,this.length])}if(this.value===o){var h=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,h)),["...",this.length])}if(this.value===l){var f=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(f,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(l,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var e=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return e.selected=e.value}),100)},onResize:function(){var e=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((e-96)/42)},next:function(e){e.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(e){e.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(e,t){for(var n=[],i=e=e>0?e:1;i<=t;i++)n.push(i);return n},genIcon:function(e,t,n,r,label){return e("li",[e("button",this.setBackgroundColor(this.navigationColor,{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}}),[e(l.a,{props:{color:this.navigationTextColor}},[t])])])},genItem:function(e,i){var t=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,o=r?this.currentPageAriaLabel:this.pageAriaLabel;return e("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(o,i)},on:{click:function(){return t.$emit("input",i)}}}),[i.toString()])},genItems:function(e){var t=this;return this.items.map((function(i,n){return e("li",{key:n},[isNaN(Number(i))?e("span",{class:"v-pagination__more"},[i.toString()]):t.genItem(e,i)])}))},genList:function(e,t){return e("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},t)}},render:function(e){var t=[this.genIcon(e,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(e),this.genIcon(e,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return e("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(e,t)])}})}}]);