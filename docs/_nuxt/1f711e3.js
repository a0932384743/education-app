(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1073:function(e){e.exports=JSON.parse('[{"company":"CHT","email":"0800080148@cht.com.tw","fax":"","id":"1","mobile":"0800-080-148","phone":"0800-080-148","remark":"","title":"100G中華電信光纖線路報修窗口","user":"100G中華電信光纖線路報修窗口"},{"company":"APTG","email":"NOC-DATA@aptg.com.tw","fax":"","id":"2","mobile":"0855558888#57950","phone":"","remark":"","title":"OOB","user":"APTG NOC"},{"company":"APTG","email":"NOC-IP@aptg.com.tw","fax":"","id":"3","mobile":"0855558888#55210","phone":"","remark":"","title":"APOL Peering & BGP Routing","user":"NOC IP"},{"company":"NCHC","email":"noc@twarem.net","fax":"06-5050-645","id":"4","mobile":"06-5050-940ext.620","phone":"0800-050-940","remark":"","title":"TWAREN維運中心","user":"TWAREN NOC"},{"company":"CHT/TWGate","email":"twgate_noc@cht.com.tw","fax":"","id":"5","mobile":"07-227-1954","phone":"0800-731-544","remark":"","title":"TWGate維運中心","user":"TWAREN NOC"},{"company":"APTG","email":"transmission_noc@aptg.com.tw","fax":"","id":"6","mobile":"02-555588888#57999","phone":"","remark":"","title":"100G傳輸網管","user":"傳輸網管"}]')},1253:function(e,t,n){"use strict";n.r(t);var r=n(358),l=n(1199),o=n(422),c=n(865),d=n(233),h=(n(35),n(38),n(22),n(84),n(455),n(41),n(48),n(49),n(39),n(10)),m=(n(78),n(114),n(1073));function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={name:"OperationTeamManagement",layout:"admin-layout",data:function(){return{items:m.map((function(e){return f(f({},e),{},{editable:!1})}))}},computed:{headers:function(){return[{text:this.$t("name"),value:"user"},{text:this.$t("company"),value:"company"},{text:"".concat(this.$t("job.title"),"/").concat(this.$t("job.responsible")),value:"title"},{text:this.$t("mobile"),value:"mobile"},{text:this.$t("phone"),value:"phone"},{text:this.$t("fax"),value:"fax"},{text:this.$t("email"),value:"email"},{text:this.$t("remark"),value:"remark"},{text:this.$t("operate"),value:"operate"}]}},methods:{deleteUser:function(e){this.items=this.items.filter((function(i){return i.id!==e.id}))},addUser:function(){this.items.push({company:"",email:"",fax:"",id:this.items.length+1,mobile:"",phone:"",remark:"",title:"",user:"",editable:!0})}}},_=n(136),component=Object(_.a)(x,(function(){var e=this,t=e._self._c;return t(c.a,[t("table-card",{attrs:{title:"維運團隊資料維護",items:e.items},scopedSlots:e._u([{key:"default",fn:function(n){var c=n.search,h=n.footerProps,m=n.itemPerPage,v=n.page,f=n.items,x=n.loading,_=n.headerProps;return[t(l.a,{attrs:{"fixed-header":!0,headers:e.headers,items:f,search:c,page:v,loading:x,"items-per-page":m,"footer-props":h,"header-props":_,height:"500px","hide-default-footer":""},scopedSlots:e._u([{key:"header.operate",fn:function(n){var header=n.header;return[t("div",{staticClass:"d-inline-flex align-center"},[t("div",[e._v(e._s(header.text))]),e._v(" "),t(r.a,{attrs:{small:"",color:"success"},on:{click:function(t){return e.addUser()}}},[t(o.a,{attrs:{size:"20"}},[e._v("mdi-plus")])],1)],1)]}},{key:"header.phone",fn:function(n){var header=n.header;return[t("div",{staticClass:"d-inline-flex align-center flex-column"},[t("div",[e._v(e._s(header.text))]),e._v(" "),t("div",[e._v(e._s(e.$t("placeholder.1")))])])]}},{key:"header.mobile",fn:function(n){var header=n.header;return[t("div",{staticClass:"d-inline-flex align-center flex-column"},[t("div",[e._v(e._s(header.text))]),e._v(" "),t("div",[e._v(e._s(e.$t("placeholder.1")))])])]}},{key:"header.fax",fn:function(n){var header=n.header;return[t("div",{staticClass:"d-inline-flex align-center flex-column"},[t("div",[e._v(e._s(header.text))]),e._v(" "),t("div",[e._v(e._s(e.$t("placeholder.1")))])])]}},{key:"item.user",fn:function(n){var r=n.item;return[r.editable?t(d.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.user,callback:function(t){e.$set(r,"user",t)},expression:"item.user"}}):t("div",[e._v(e._s(r.user))])]}},{key:"item.email",fn:function(n){var r=n.item;return[r.editable?t(d.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"},function(e){return/.+@.+\..+/.test(e)||"Email must be valid"}]},model:{value:r.email,callback:function(t){e.$set(r,"email",t)},expression:"item.email"}}):t("div",[e._v(e._s(r.email))])]}},{key:"item.phone",fn:function(n){var r=n.item;return[r.editable?t(d.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.phone,callback:function(t){e.$set(r,"phone",t)},expression:"item.phone"}}):t("div",[e._v(e._s(r.phone))])]}},{key:"item.mobile",fn:function(n){var r=n.item;return[r.editable?t(d.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.mobile,callback:function(t){e.$set(r,"mobile",t)},expression:"item.mobile"}}):t("div",[e._v(e._s(r.mobile))])]}},{key:"item.title",fn:function(n){var r=n.item;return[r.editable?t(d.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.title,callback:function(t){e.$set(r,"title",t)},expression:"item.title"}}):t("div",[e._v(e._s(r.title))])]}},{key:"item.company",fn:function(n){var r=n.item;return[r.editable?t(d.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.company,callback:function(t){e.$set(r,"company",t)},expression:"item.company"}}):t("div",[e._v(e._s(r.company))])]}},{key:"item.fax",fn:function(n){var r=n.item;return[r.editable?t(d.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.fax,callback:function(t){e.$set(r,"fax",t)},expression:"item.fax"}}):t("div",[e._v(e._s(r.fax))])]}},{key:"item.remark",fn:function(n){var r=n.item;return[r.editable?t(d.a,{attrs:{small:"",label:"",required:"",rules:[function(e){return(e||"").length>0||"This field is required"}]},model:{value:r.remark,callback:function(t){e.$set(r,"remark",t)},expression:"item.remark"}}):t("div",[e._v(e._s(r.remark))])]}},{key:"item.operate",fn:function(n){var l=n.item;return[t("div",{staticClass:"d-inline-flex",staticStyle:{gap:"0.8rem"}},[t(r.a,{attrs:{small:"",disabled:Object.keys(l).filter((function(e){return"user"===e||"company"===e})).some((function(e){return""===l[e]})),color:l.editable?"secondary":"info"},on:{click:function(e){Object.keys(l).every((function(e){return l[e]}))?l.editable=!l.editable:l.editable=!0}}},[t(o.a,{attrs:{size:"20"}},[e._v("mdi-pencil")]),e._v(" "),t("span",{staticClass:"d-none d-sm-inline-block"},[e._v(e._s(e.$t("edit")))])],1),e._v(" "),t(r.a,{staticClass:"px-2",attrs:{small:"",color:"danger"},on:{click:function(t){return e.deleteUser(l)}}},[t(o.a,{staticClass:"white--text",attrs:{size:"20"}},[e._v("mdi-trash-can-outline")]),t("span",{staticClass:"d-none d-sm-inline-block white--text"},[e._v(e._s(e.$t("delete")))])],1)],1)]}}],null,!0)})]}}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TableCard:n(879).default})},879:function(e,t,n){"use strict";n.r(t);var r=n(358),l=n(886),o=n(876),c=n(492),d=n(422),h=n(494),m=n(360),v=n(73),f=n(505),x=n(888),_=n(861),y=n(233),k=(n(84),n(455),n(140),{name:"TableCard",props:{title:{type:String,required:!0},items:{type:Array,required:!0}},data:function(){return{search:"",page:1,itemPerPage:10,loading:!1}},computed:{footerProps:function(){return{itemsPerPageAllText:this.$t("all"),itemsPerPageText:this.$t("per.page"),pageText:this.$t("current.page")}},headerProps:function(){return{sortByText:this.$t("sort.by"),itemsPerPageText:this.$t("per.page"),pageText:this.$t("current.page")}},totalPage:function(){var e,t;return Math.ceil((null!==(e=null===(t=this.items)||void 0===t?void 0:t.length)&&void 0!==e?e:0)/this.itemPerPage)},totalItem:function(){var e,t;return null!==(e=null===(t=this.items)||void 0===t?void 0:t.length)&&void 0!==e?e:0}},methods:{onReload:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1}),1e3)}}}),O=n(136),component=Object(O.a)(k,(function(){var e=this,t=e._self._c;return t(l.a,[t(o.c,{staticClass:"flex-nowrap"},[t("span",{staticClass:"font-weight-bold text-truncate"},[e._v(e._s(e.$t(e.title)))]),e._v(" "),t(_.a),e._v(" "),t(r.a,{attrs:{icon:""},on:{click:e.onReload}},[t(d.a,[e._v("mdi-refresh")])],1),e._v(" "),t(f.a,{attrs:{"min-width":"100",transition:"slide-y-transition","offset-y":"",bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t(r.a,e._g(e._b({attrs:{icon:"",text:""}},"v-btn",o,!1),l),[t(d.a,[e._v("mdi-download")])],1)]}}])},[e._v(" "),t(h.a,[t(m.a,[t(v.a,[t(v.b,{staticClass:"subtitle-2"},[e._v(" CSV ")])],1)],1),e._v(" "),t(m.a,[t(v.a,[t(v.b,{staticClass:"subtitle-2"},[e._v(" EXCEL ")])],1)],1),e._v(" "),t(m.a,[t(v.a,[t(v.b,{staticClass:"subtitle-2"},[e._v(" PDF ")])],1)],1)],1)],1)],1),e._v(" "),t(c.a),e._v(" "),t(o.b,{staticClass:"pb-8"},[t("div",{staticClass:"text-right mt-2 mb-1"},[t(y.a,{staticClass:"d-inline-flex",attrs:{small:"","append-icon":"mdi-magnify",label:e.$t("search"),clearable:"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),t("div",{staticClass:"overflow-x-auto"},[e._t("default",null,{search:e.search,loading:e.loading,footerProps:e.footerProps,page:e.page,itemPerPage:e.itemPerPage,headerProps:e.headerProps,items:e.items})],2),e._v(" "),t("div",{staticClass:"d-inline-flex w-100 pt-2 justify-space-between align-start align-sm-center flex-sm-row flex-column my-2"},[t("div",{staticClass:"text-left"},[e._v("\n        "+e._s(e.$t("table.footer.text.1",[10*(e.page-1)+1,10*e.page>e.totalItem?e.totalItem:10*e.page,e.totalItem]))+"\n      ")]),e._v(" "),t("div",{staticClass:"align-self-center"},[t(x.a,{attrs:{length:e.totalPage},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)])])],1)}),[],!1,null,null,null);t.default=component.exports},880:function(e,t,n){"use strict";n(32)({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},881:function(e,t,n){var content=n(882);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(58).default)("5bec9846",content,!0,{sourceMap:!1})},882:function(e,t,n){var r=n(57)((function(i){return i[1]}));r.push([e.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;justify-content:center;list-style-type:none;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{opacity:.6;pointer-events:none}.v-pagination__item{background:transparent;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{align-items:center;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;height:32px;justify-content:center;margin:.3rem 10px;-webkit-text-decoration:none;text-decoration:none;width:32px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{align-items:flex-end;display:inline-flex;height:32px;justify-content:center;margin:.3rem;width:32px}",""]),r.locals={},e.exports=r},888:function(e,t,n){"use strict";n(41),n(35),n(48),n(49),n(38),n(39);var r=n(137),l=n(10),o=(n(78),n(114),n(79),n(880),n(22),n(104),n(140),n(881),n(146)),c=n(284),d=n(75),h=n(515),m=n(62),v=n(26);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=Object(v.a)(d.a,Object(h.a)({onVisible:["init"]}),m.a).extend({name:"v-pagination",directives:{Resize:c.a},props:{circle:Boolean,disabled:Boolean,navigationColor:String,navigationTextColor:String,length:{type:Number,default:0,validator:function(e){return e%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var e=parseInt(this.totalVisible,10);if(0===e||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];var t=Math.min(Math.max(0,e)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=t)return this.range(1,this.length);var n=t%2==0?1:0,l=Math.floor(t/2),o=this.length-l+1+n;if(this.value>l&&this.value<o){var c=this.length,d=this.value-l+2,h=this.value+l-2-n,m=h+1===c-1?h+1:"...";return[1,d-1==2?2:"..."].concat(Object(r.a)(this.range(d,h)),[m,this.length])}if(this.value===l){var v=this.value+l-1-n;return[].concat(Object(r.a)(this.range(1,v)),["...",this.length])}if(this.value===o){var f=this.value-l+1;return[1,"..."].concat(Object(r.a)(this.range(f,this.length)))}return[].concat(Object(r.a)(this.range(1,l)),["..."],Object(r.a)(this.range(o,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var e=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return e.selected=e.value}),100)},onResize:function(){var e=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((e-96)/42)},next:function(e){e.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(e){e.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(e,t){for(var n=[],i=e=e>0?e:1;i<=t;i++)n.push(i);return n},genIcon:function(e,t,n,r,label){return e("li",[e("button",this.setBackgroundColor(this.navigationColor,{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}}),[e(o.a,{props:{color:this.navigationTextColor}},[t])])])},genItem:function(e,i){var t=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,l=r?this.currentPageAriaLabel:this.pageAriaLabel;return e("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(l,i)},on:{click:function(){return t.$emit("input",i)}}}),[i.toString()])},genItems:function(e){var t=this;return this.items.map((function(i,n){return e("li",{key:n},[isNaN(Number(i))?e("span",{class:"v-pagination__more"},[i.toString()]):t.genItem(e,i)])}))},genList:function(e,t){return e("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},t)}},render:function(e){var t=[this.genIcon(e,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(e),this.genIcon(e,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return e("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(e,t)])}})}}]);