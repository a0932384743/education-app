(window.webpackJsonp=window.webpackJsonp||[]).push([[7,15,16],{1037:function(t,e,n){"use strict";n(41),n(35),n(48),n(49),n(38),n(39);var r=n(204),o=n(10),c=(n(22),n(104),n(890),n(627),n(146)),l=n(134),d=n(517),h=["title"];function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=d.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return v(v({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",v(v({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},1075:function(t){t.exports=JSON.parse('[{"check_time":"2024-06-21 10:00:00","connectUnit":"臺北資策會","desc":"@_@_MOST-IDC-Internet-001-inter_sw01","description":"@_@MOST-IDC-Internet-O0XI_sw01","device":"TWAREN-TC-N3524-P-01","gigaPop":"TP","id":1,"input":0.345,"inputHistory":[0.31,0.33,0.32,0.315,0.3,0.305,0.325,0.34,0.335,0.345],"interface":"Eth1/4","ips":["103.124.72.0/22","203.14.200.0/21","203.14.208.0/20","211.73.64.0/19","211.79.48.0/20"],"output":0.445,"outputHistory":[0.41,0.42,0.43,0.425,0.415,0.435,0.445,0.455,0.45,0.44],"packageLossRate":0,"pingResult":{"avg":5.14,"max":5.23,"min":4.99},"remark":"N/A","status":"up","unit":"NCHC_TWARREN","wanPortIp":"211.79.59.2"},{"check_time":"2024-06-23 12:01:00","connectUnit":"國網中心-新竹本部-100G-1","desc":"@_@_MOST-IDC-Internet-002-inter_sw02","description":"@_@MOST-IDC-Internet-O0XI_sw02","device":"TWAREN-TC-N3524-P-02","gigaPop":"HC","id":2,"input":0.355,"inputHistory":[0.36,0.35,0.34,0.335,0.325,0.315,0.31,0.3,0.305,0.355],"interface":"Eth1/3","ips":["140.110.0.0/18","140.110.64.0/19","140.110.160.0/18","140.110.192.0/18","140.110.200.0/21","140.110.215.0/28","140.110.211.0/24","140.110.96.0/19"],"output":0.465,"outputHistory":[0.45,0.44,0.43,0.42,0.415,0.425,0.435,0.445,0.455,0.46],"packageLossRate":0,"pingResult":{"avg":1.39,"max":2.42,"min":0.88},"remark":"N/A","status":"down","unit":"國網中心-新竹本部-100G-1","wanPortIp":"211.79.59.54"},{"check_time":"2024-06-21 10:00:00","connectUnit":"國網中心-台南分部","desc":"@_@_MOST-IDC-Internet-003-inter_sw03","description":"@_@MOST-IDC-Internet-O0XI_sw03","device":"TWAREN-TC-N3524-P-03","gigaPop":"TN","id":3,"input":0.365,"inputHistory":[0.36,0.37,0.38,0.39,0.35,0.345,0.34,0.33,0.32,0.365],"interface":"Eth1/4","ips":["140.110.160.0/18","140.110.192.0/18","140.110.200.0/21","203.14.208.0/20","211.73.64.0/19"],"output":0.48,"outputHistory":[0.47,0.46,0.45,0.44,0.43,0.42,0.41,0.4,0.405,0.475],"packageLossRate":0,"pingResult":{"avg":6.3,"max":6.48,"min":6.22},"remark":"N/A","status":"up","unit":"國網中心-台南分部","wanPortIp":"211.79.59.50"},{"check_time":"2024-06-21 10:00:00","connectUnit":"國網中心","desc":"@_@_MOST-IDC-Internet-004-inter_sw04","description":"@_@MOST-IDC-Internet-O0X","device":"TWAREN-TC-N3524-P-04","gigaPop":"TPE","id":4,"input":0.375,"inputHistory":[0.37,0.36,0.35,0.34,0.335,0.33,0.32,0.31,0.3,0.375],"interface":"Eth1/3","ips":["192.168.4.1","192.168.4.2"],"output":0.495,"outputHistory":[0.48,0.47,0.46,0.45,0.44,0.43,0.42,0.41,0.4,0.49],"packageLossRate":0,"pingResult":{"avg":5.52,"max":7.35,"min":4.62},"remark":"N/A","status":"up","unit":"科技政策研究與資訊中心","wanPortIp":"211.79.59.58"},{"check_time":"2024-06-21 10:00:00","connectUnit":"臺北資策會","desc":"@_@_MOST-IDC-Internet-005-inter_sw05","description":"@_@MOST-IDC-Internet-O0XI_sw05","device":"TWAREN-TC-N3524-P-05","gigaPop":"TNN","id":5,"input":0.385,"inputHistory":[0.38,0.37,0.36,0.35,0.34,0.33,0.32,0.31,0.3,0.385],"interface":"Eth1/4","ips":["192.168.5.1","192.168.5.2"],"output":0.505,"outputHistory":[0.49,0.48,0.47,0.46,0.45,0.44,0.43,0.42,0.41,0.5],"packageLossRate":0,"pingResult":{"avg":4.43,"max":4.63,"min":4.37},"remark":"N/A","status":"up","unit":"國科會","wanPortIp":"211.79.59.66"},{"check_time":"2024-06-21 10:00:00","connectUnit":"國網中心","desc":"@_@_MOST-IDC-Internet-006-inter_sw06","description":"@_@MOST-IDC-Internet-O0XI_sw06","device":"TWAREN-TC-N3524-P-06","gigaPop":"TXG","id":6,"input":0.395,"inputHistory":[0.39,0.38,0.37,0.36,0.35,0.34,0.33,0.32,0.31,0.395],"interface":"Eth1/3","ips":["192.168.6.1","192.168.6.2"],"output":0.515,"outputHistory":[0.5,0.49,0.48,0.47,0.46,0.45,0.44,0.43,0.42,0.51],"packageLossRate":3,"pingResult":{"avg":4.43,"max":6.48,"min":3.11},"remark":"N/A","status":"up","unit":"國家實驗研究院","wanPortIp":"211.79.59.34"},{"check_time":"2024-06-21 10:00:00","connectUnit":"臺北資策會","desc":"@_@_MOST-IDC-Internet-007-inter_sw07","description":"@_@MOST-IDC-Internet-O0X","device":"TWAREN-TC-N3524-P-07","gigaPop":"TPE","id":7,"input":0.405,"inputHistory":[0.4,0.39,0.38,0.37,0.36,0.35,0.34,0.33,0.32,0.405],"interface":"Eth1/4","ips":["192.168.7.1","192.168.7.2"],"output":0.525,"outputHistory":[0.51,0.5,0.49,0.48,0.47,0.46,0.45,0.44,0.43,0.52],"packageLossRate":0,"pingResult":{"avg":15,"max":19,"min":10},"remark":"N/A","status":"up","unit":"台灣大學","wanPortIp":"211.79.49.37"},{"check_time":"2024-06-21 10:00:00","connectUnit":"國網中心","desc":"@_@_MOST-IDC-Internet-008-inter_sw08","description":"@_@MOST-IDC-Internet-O0XI_sw08","device":"TWAREN-TC-N3524-P-08","gigaPop":"TNN","id":8,"input":0.415,"inputHistory":[0.41,0.4,0.39,0.38,0.37,0.36,0.35,0.34,0.33,0.415],"interface":"Eth1/3","ips":["192.168.8.1","192.168.8.2"],"output":0.535,"outputHistory":[0.52,0.51,0.5,0.49,0.48,0.47,0.46,0.45,0.44,0.53],"packageLossRate":40,"pingResult":{"avg":16,"max":21,"min":11},"remark":"N/A","status":"down","unit":"國家地震工程研究中心","wanPortIp":"211.79.49.26"},{"check_time":"2024-06-21 10:00:00","connectUnit":"臺北資策會","desc":"@_@_MOST-IDC-Internet-009-inter_sw09","description":"@_@MOST-IDC-Internet-O0XI_sw09","device":"TWAREN-TC-N3524-P-09","gigaPop":"TXG","id":9,"input":0.425,"inputHistory":[0.42,0.41,0.4,0.39,0.38,0.37,0.36,0.35,0.34,0.425],"interface":"Eth1/4","ips":["192.168.9.1","192.168.9.2"],"output":0.545,"outputHistory":[0.53,0.52,0.51,0.5,0.49,0.48,0.47,0.46,0.45,0.54],"packageLossRate":1,"pingResult":{"avg":18,"max":24,"min":13},"remark":"N/A","status":"up","unit":"實踐大學-台北校區","wanPortIp":"211.79.49.46"},{"check_time":"2024-06-21 10:00:00","connectUnit":"國網中心","desc":"@_@_MOST-IDC-Internet-010-inter_sw10","description":"@_@MOST-IDC-Internet-O0X","device":"TWAREN-TC-N3524-P-10","gigaPop":"TPE","id":10,"input":0.435,"inputHistory":[0.43,0.42,0.41,0.4,0.39,0.38,0.37,0.36,0.35,0.435],"interface":"Eth1/3","ips":["192.168.10.1","192.168.10.2"],"output":0.555,"outputHistory":[0.54,0.53,0.52,0.51,0.5,0.49,0.48,0.47,0.46,0.55],"packageLossRate":1,"pingResult":{"avg":19,"max":25,"min":14},"remark":"N/A","status":"down","unit":"國網中心-雲林","wanPortIp":"192.168.1.11"},{"check_time":"2024-06-21 10:00:00","connectUnit":"臺北資策會","desc":"@_@_MOST-IDC-Internet-011-inter_sw11","description":"@_@MOST-IDC-Internet-O0XI_sw11","device":"TWAREN-TC-N3524-P-11","gigaPop":"TNN","id":11,"input":0.445,"inputHistory":[0.44,0.43,0.42,0.41,0.4,0.39,0.38,0.37,0.36,0.445],"interface":"Eth1/4","ips":["192.168.11.1","192.168.11.2"],"output":0.565,"outputHistory":[0.55,0.54,0.53,0.52,0.51,0.5,0.49,0.48,0.47,0.56],"packageLossRate":0,"pingResult":{"avg":0,"max":20,"min":10},"remark":"N/A","status":"up","unit":"國網中心-南投","wanPortIp":"192.168.1.12"},{"check_time":"2024-06-21 10:00:00","connectUnit":"國網中心","desc":"@_@_MOST-IDC-Internet-012-inter_sw12","description":"@_@MOST-IDC-Internet-O0XI_sw12","device":"TWAREN-TC-N3524-P-12","gigaPop":"TXG","id":12,"input":0.455,"inputHistory":[0.45,0.44,0.43,0.42,0.41,0.4,0.39,0.38,0.37,0.455],"interface":"Eth1/3","ips":["192.168.12.1","192.168.12.2"],"output":0.575,"outputHistory":[0.56,0.55,0.54,0.53,0.52,0.51,0.5,0.49,0.48,0.57],"packageLossRate":0,"pingResult":{"avg":0,"max":22,"min":11},"remark":"N/A","status":"down","unit":"清華大學","wanPortIp":"192.168.1.19"},{"check_time":"2024-06-21 10:00:00","connectUnit":"臺北資策會","desc":"@_@_MOST-IDC-Internet-013-inter_sw13","description":"@_@MOST-IDC-Internet-O0XI_sw13","device":"TWAREN-TC-N3524-P-13","gigaPop":"TPE","id":13,"input":0.465,"inputHistory":[0.46,0.45,0.44,0.43,0.42,0.41,0.4,0.39,0.38,0.465],"interface":"Eth1/4","ips":["192.168.13.1","192.168.13.2"],"output":0.585,"outputHistory":[0.57,0.56,0.55,0.54,0.53,0.52,0.51,0.5,0.49,0.58],"packageLossRate":0,"pingResult":{"avg":17,"max":23,"min":12},"remark":"N/A","status":"up","unit":"陽明清華","wanPortIp":"192.168.1.20"},{"check_time":"2024-06-21 10:00:00","connectUnit":"國網中心","desc":"@_@_MOST-IDC-Internet-014-inter_sw14","description":"@_@MOST-IDC-Internet-O0X","device":"TWAREN-TC-N3524-P-14","gigaPop":"TNN","id":14,"input":0.475,"inputHistory":[0.47,0.46,0.45,0.44,0.43,0.42,0.41,0.4,0.39,0.475],"interface":"Eth1/3","ips":["192.168.14.1","192.168.14.2"],"output":0.595,"outputHistory":[0.58,0.57,0.56,0.55,0.54,0.53,0.52,0.51,0.5,0.59],"packageLossRate":0,"pingResult":{"avg":0,"max":0,"min":0},"remark":"N/A","status":"down","unit":"國網中心-新竹本部","wanPortIp":"211.79.59.0"},{"check_time":"2024-06-21 10:00:00","connectUnit":"臺北資策會","desc":"@_@_MOST-IDC-Internet-015-inter_sw15","description":"@_@MOST-IDC-Internet-O0XI_sw15","device":"TWAREN-TC-N3524-P-15","gigaPop":"TXG","id":15,"input":0.485,"inputHistory":[0.48,0.47,0.46,0.45,0.44,0.43,0.42,0.41,0.4,0.485],"interface":"Eth1/4","ips":["192.168.15.1","192.168.15.2"],"output":0.605,"outputHistory":[0.59,0.58,0.57,0.56,0.55,0.54,0.53,0.52,0.51,0.6],"packageLossRate":0,"pingResult":{"avg":0,"max":0,"min":0},"remark":"N/A","status":"up","unit":"國網中心-新竹本部","wanPortIp":"211.79.59.0"},{"check_time":"2024-06-21 10:00:00","connectUnit":"國網中心","desc":"@_@_MOST-IDC-Internet-016-inter_sw16","description":"@_@MOST-IDC-Internet-O0XI_sw16","device":"TWAREN-TC-N3524-P-16","gigaPop":"TPE","id":16,"input":0.495,"inputHistory":[0.49,0.48,0.47,0.46,0.45,0.44,0.43,0.42,0.41,0.495],"interface":"Eth1/3","ips":["192.168.16.1","192.168.16.2"],"output":0.615,"outputHistory":[0.6,0.59,0.58,0.57,0.56,0.55,0.54,0.53,0.52,0.61],"packageLossRate":0,"pingResult":{"avg":0,"max":0,"min":0},"remark":"N/A","status":"down","unit":"國網中心-新竹本部","wanPortIp":"211.79.59.0"},{"check_time":"2024-06-21 10:00:00","connectUnit":"臺北資策會","desc":"@_@_MOST-IDC-Internet-017-inter_sw17","description":"@_@MOST-IDC-Internet-O0X","device":"TWAREN-TC-N3524-P-17","gigaPop":"TNN","id":17,"input":0.305,"inputHistory":[0.3,0.31,0.32,0.33,0.34,0.35,0.36,0.37,0.38,0.305],"interface":"Eth1/4","ips":["192.168.17.1","192.168.17.2"],"output":0.44,"outputHistory":[0.42,0.43,0.44,0.45,0.46,0.47,0.48,0.49,0.5,0.43],"packageLossRate":0.1,"pingResult":{"avg":13.2,"max":20,"min":10.1},"remark":"N/A","status":"up","unit":"資策會-數位轉型研究院","wanPortIp":"211.79.59.0"},{"check_time":"2024-06-21 10:00:00","connectUnit":"國網中心","desc":"@_@_MOST-IDC-Internet-018-inter_sw18","description":"@_@MOST-IDC-Internet-O0XI_sw18","device":"TWAREN-TC-N3524-P-18","gigaPop":"TXG","id":18,"input":0.315,"inputHistory":[0.31,0.32,0.33,0.34,0.35,0.36,0.37,0.38,0.39,0.315],"interface":"Eth1/3","ips":["192.168.18.1","192.168.18.2"],"output":0.45,"outputHistory":[0.43,0.44,0.45,0.46,0.47,0.48,0.49,0.5,0.51,0.44],"packageLossRate":0.2,"pingResult":{"avg":4.2,"max":5.33,"min":3.12},"remark":"N/A","status":"up","unit":"資策會","wanPortIp":"211.79.59.10"},{"check_time":"2024-06-21 10:00:00","connectUnit":"臺北資策會","desc":"@_@_MOST-IDC-Internet-019-inter_sw19","description":"@_@MOST-IDC-Internet-O0XI_sw19","device":"TWAREN-TC-N3524-P-19","gigaPop":"TPE","id":19,"input":0.325,"inputHistory":[0.32,0.33,0.34,0.35,0.36,0.37,0.38,0.39,0.4,0.325],"interface":"Eth1/4","ips":["192.168.19.1","192.168.19.2"],"output":0.46,"outputHistory":[0.44,0.45,0.46,0.47,0.48,0.49,0.5,0.51,0.52,0.45],"packageLossRate":1,"pingResult":{"avg":5.9,"max":6.04,"min":4.3},"remark":"N/A","status":"up","unit":"國科會中科共構機房","wanPortIp":"203.145.213.53"},{"check_time":"2024-06-21 10:00:00","connectUnit":"國網中心","desc":"@_@_MOST-IDC-Internet-020-inter_sw20","description":"@_@MOST-IDC-Internet-O0X","device":"TWAREN-TC-N3524-P-20","gigaPop":"TNN","id":20,"input":0.335,"inputHistory":[0.33,0.34,0.35,0.36,0.37,0.38,0.39,0.4,0.41,0.335],"interface":"Eth1/3","ips":["192.168.20.1","192.168.20.2"],"output":0.46,"outputHistory":[0.45,0.46,0.47,0.48,0.49,0.5,0.51,0.52,0.53,0.46],"packageLossRate":2,"pingResult":{"avg":4.4,"max":4.54,"min":4.35},"remark":"N/A","status":"up","unit":"國科會","wanPortIp":"211.79.59.66"}]')},1076:function(t){t.exports=JSON.parse('[{"name":"abnormal","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[120,132,101,134,90,230,210,182,191,234,290,330,310]},{"name":"abnormal.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[110,131,91,114,95,200,190,167,111,144,190,230,350]},{"name":"normal","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[100,115,105,130,140,135,120,125,135,140,150,155]},{"name":"normal.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[120,135,110,145,155,160,140,150,170,165,175,180]},{"name":"non-warning","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[110,125,115,130,140,145,125,135,150,145,155,160]},{"name":"non-warning.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[130,140,120,135,145,150,135,140,155,150,160,165]},{"name":"total","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[560,658,522,653,620,910,785,759,757,828,960,1055]},{"name":"total.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[580,656,536,674,695,810,710,717,695,789,915,1080]}]')},878:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={normal:"success",abnormal:"error",error:"error","non-warning":"warning",total:"black",down:"error",up:"success"}},879:function(t,e,n){"use strict";n.r(e);var r=n(358),o=n(886),c=n(876),l=n(492),d=n(422),h=n(494),m=n(360),v=n(73),f=n(505),_=n(888),y=n(861),x=n(233),I=(n(84),n(455),n(140),{name:"TableCard",props:{title:{type:String,required:!0},items:{type:Array,required:!0}},data:function(){return{search:"",page:1,itemPerPage:10,loading:!1}},computed:{footerProps:function(){return{itemsPerPageAllText:this.$t("all"),itemsPerPageText:this.$t("per.page"),pageText:this.$t("current.page")}},headerProps:function(){return{sortByText:this.$t("sort.by"),itemsPerPageText:this.$t("per.page"),pageText:this.$t("current.page")}},totalPage:function(){var t,e;return Math.ceil((null!==(t=null===(e=this.items)||void 0===e?void 0:e.length)&&void 0!==t?t:0)/this.itemPerPage)},totalItem:function(){var t,e;return null!==(t=null===(e=this.items)||void 0===e?void 0:e.length)&&void 0!==t?t:0}},methods:{onReload:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1}),1e3)}}}),w=n(136),component=Object(w.a)(I,(function(){var t=this,e=t._self._c;return e(o.a,[e(c.c,{staticClass:"flex-nowrap"},[e("span",{staticClass:"font-weight-bold text-truncate"},[t._v(t._s(t.$t(t.title)))]),t._v(" "),e(y.a),t._v(" "),e(r.a,{attrs:{icon:""},on:{click:t.onReload}},[e(d.a,[t._v("mdi-refresh")])],1),t._v(" "),e(f.a,{attrs:{"min-width":"100",transition:"slide-y-transition","offset-y":"",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[e(r.a,t._g(t._b({attrs:{icon:"",text:""}},"v-btn",c,!1),o),[e(d.a,[t._v("mdi-download")])],1)]}}])},[t._v(" "),e(h.a,[e(m.a,[e(v.a,[e(v.b,{staticClass:"subtitle-2"},[t._v(" CSV ")])],1)],1),t._v(" "),e(m.a,[e(v.a,[e(v.b,{staticClass:"subtitle-2"},[t._v(" EXCEL ")])],1)],1),t._v(" "),e(m.a,[e(v.a,[e(v.b,{staticClass:"subtitle-2"},[t._v(" PDF ")])],1)],1)],1)],1)],1),t._v(" "),e(l.a),t._v(" "),e(c.b,{staticClass:"pb-8"},[e("div",{staticClass:"text-right mt-2 mb-1"},[e(x.a,{staticClass:"d-inline-flex",attrs:{small:"","append-icon":"mdi-magnify",label:t.$t("search"),clearable:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("div",{staticClass:"overflow-x-auto"},[t._t("default",null,{search:t.search,loading:t.loading,footerProps:t.footerProps,page:t.page,itemPerPage:t.itemPerPage,headerProps:t.headerProps,items:t.items})],2),t._v(" "),e("div",{staticClass:"d-inline-flex w-100 pt-2 justify-space-between align-start align-sm-center flex-sm-row flex-column my-2"},[e("div",{staticClass:"text-left"},[t._v("\n        "+t._s(t.$t("table.footer.text.1",[10*(t.page-1)+1,10*t.page>t.totalItem?t.totalItem:10*t.page,t.totalItem]))+"\n      ")]),t._v(" "),e("div",{staticClass:"align-self-center"},[e(_.a,{attrs:{length:t.totalPage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])])],1)}),[],!1,null,null,null);e.default=component.exports},880:function(t,e,n){"use strict";n(32)({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},881:function(t,e,n){var content=n(882);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("5bec9846",content,!0,{sourceMap:!1})},882:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;justify-content:center;list-style-type:none;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{opacity:.6;pointer-events:none}.v-pagination__item{background:transparent;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{align-items:center;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;height:32px;justify-content:center;margin:.3rem 10px;-webkit-text-decoration:none;text-decoration:none;width:32px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{align-items:flex-end;display:inline-flex;height:32px;justify-content:center;margin:.3rem;width:32px}",""]),r.locals={},t.exports=r},884:function(t,e,n){"use strict";n.r(e);var r=n(358),o=n(886),c=n(876),l=n(175),d=n(422),h=n(861),m={name:"ChartCard",props:{title:{type:String,required:!0}},data:function(){return{collapse:!1,show:!0}}},v=n(136),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mx-auto",attrs:{height:t.collapse?"auto":"100%"}},[e(c.c,{staticClass:"info white--text flex-nowrap"},[e("span",{staticClass:"font-weight-bold text-truncate"},[t._v(t._s(t.$t(t.title)))]),t._v(" "),e(h.a),t._v(" "),e(r.a,{attrs:{color:"white",icon:""},on:{click:function(e){t.collapse=!t.collapse}}},[e(d.a,[t._v("mdi-minus")])],1),t._v(" "),e(r.a,{attrs:{color:"white",icon:""},on:{click:function(e){t.show=!1}}},[e(d.a,[t._v("mdi-close")])],1)],1),t._v(" "),e(l.a,[t.collapse?t._e():e(c.b,{staticStyle:{height:"calc(100% - 60px)"}},[t._t("default")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},887:function(t,e,n){var content=n(897);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("4b8c40ea",content,!0,{sourceMap:!1})},888:function(t,e,n){"use strict";n(41),n(35),n(48),n(49),n(38),n(39);var r=n(137),o=n(10),c=(n(78),n(114),n(79),n(880),n(22),n(104),n(140),n(881),n(146)),l=n(284),d=n(75),h=n(515),m=n(62),v=n(26);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.a=Object(v.a)(d.a,Object(h.a)({onVisible:["init"]}),m.a).extend({name:"v-pagination",directives:{Resize:l.a},props:{circle:Boolean,disabled:Boolean,navigationColor:String,navigationTextColor:String,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,o=Math.floor(e/2),c=this.length-o+1+n;if(this.value>o&&this.value<c){var l=this.length,d=this.value-o+2,h=this.value+o-2-n,m=h+1===l-1?h+1:"...";return[1,d-1==2?2:"..."].concat(Object(r.a)(this.range(d,h)),[m,this.length])}if(this.value===o){var v=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,v)),["...",this.length])}if(this.value===c){var f=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(f,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(c,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,r,label){return t("li",[t("button",this.setBackgroundColor(this.navigationColor,{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}}),[t(c.a,{props:{color:this.navigationTextColor}},[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,o=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(o,i)},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},890:function(t,e,n){var content=n(891);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("7b5d4dc6",content,!0,{sourceMap:!1})},891:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),r.locals={},t.exports=r},892:function(t,e,n){"use strict";n.r(e);var r=n(494),o=n(360),c=n(73),l=n(137),d=(n(78),n(94),n(22),n(41),n(35),n(48),n(49),n(38),n(39),n(10)),h=(n(114),n(878));function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(d.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"ChartPieList",props:{items:{type:Array,required:!0}},data:function(){return{statusMap:h.a}},computed:{options:function(){var t=this;return{grid:{top:0,bottom:0,containLabel:!0},tooltip:{trigger:"item"},legend:{top:"5%",left:"center",textStyle:{color:this.$vuetify.theme.isDark?"#fff":"#000",fontSize:this.$vuetify.breakpoint.mdAndUp?18:14}},series:[{avoidLabelOverlap:!1,label:{show:!0,position:"inner",formatter:"{c}"},labelLine:{show:!1},name:"設備總覽",type:"pie",radius:["30%","60%"],data:this.items.map((function(e){return v(v({},e),{},{name:t.$t("".concat(e.name,".count")),itemStyle:{color:t.$vuetify.theme.themes[t.$vuetify.theme.isDark?"dark":"light"][t.statusMap[e.name]||"secondary"]}})}))}]}}}},_=(n(896),n(136)),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex"},[e("div",{staticClass:"flex-grow-1",staticStyle:{"max-width":"calc(100% - 200px)"}},[t._t("default",null,{options:t.options})],2),t._v(" "),e(r.a,{staticClass:"flex-grow-1",staticStyle:{"max-width":"200px"}},t._l([].concat(Object(l.a)(t.items),[{value:t.items.reduce((function(t,e){return t+e.value}),0),name:"total"}]),(function(n){return e(o.a,{key:n.name},[e(c.a,[e(c.b,{class:"error"===t.statusMap[n.name]&&"title"},[t._v("\n          "+t._s(t.$t(n.name+".count"))+" :\n          "),e("a",{class:"".concat(t.statusMap[n.name],"--text")},[t._v(t._s(n.value))])])],1)],1)})),1)],1)}),[],!1,null,"f0d60b46",null);e.default=component.exports},893:function(t,e,n){"use strict";n.r(e);var r=n(1037),o=n(494),c=n(360),l=n(174),d=(n(35),n(114),n(94),n(22),n(91),n(105),n(120),n(878)),h={name:"ChartCheckList",props:{items:{type:Array,required:!0}},data:function(){return{statusMap:d.a,selected:[],range:12}},computed:{options:function(){var t=this;return{tooltip:{trigger:"axis"},legend:{data:this.items.filter((function(e){return t.selected.some((function(s){return String(s)===String(e.name)||String("".concat(s,".yesterday"))===String(e.name)}))})).map((function(e){return t.$t("".concat(e.name,".count"))})),icon:"rect",top:"5%",left:"center",textStyle:{color:this.$vuetify.theme.isDark?"#fff":"#000",fontSize:this.$vuetify.breakpoint.mdAndUp?18:14}},xAxis:{type:"category",boundaryGap:!1,data:this.items[0].time.slice(-this.range)},yAxis:{type:"value"},series:this.items.filter((function(e){return t.selected.some((function(s){return String(s)===String(e.name)||String("".concat(s,".yesterday"))===String(e.name)}))})).map((function(e,n){return{name:t.$t("".concat(e.name,".count")),type:"line",smooth:!0,label:{show:!0,position:n%2?"top":"bottom"},data:e.value.slice(-t.range),itemStyle:{color:t.$vuetify.theme.themes[t.$vuetify.theme.isDark?"dark":"light"][t.statusMap[e.name]||"secondary"]}}}))}}},mounted:function(){this.selected=this.items.map((function(t){return t.name})).filter((function(t){return!t.includes("yesterday")})).slice(0,1)}},m=n(136),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex"},[e("div",{staticClass:"flex-grow-1",staticStyle:{"max-width":"calc(100% - 200px)"}},[t._t("default",null,{options:t.options})],2),t._v(" "),e(o.a,{staticClass:"flex-grow-1",staticStyle:{"max-width":"200px"}},[e(c.a,[e(l.a,{attrs:{"item-text":"label","item-value":"value","hide-details":"",items:[{value:12,label:t.$t("hours",{e:12})},{value:6,label:t.$t("hours",{e:6})},{value:3,label:t.$t("hours",{e:3})}]},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1),t._v(" "),t._l(t.items.map((function(t){return t.name})).filter((function(t){return-1===t.indexOf("yesterday")})),(function(n){return e(c.a,{key:n.name},[e(r.a,{staticClass:"text-no-wrap mt-0",attrs:{label:t.$t(n),value:n,color:"info","hide-details":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports},896:function(t,e,n){"use strict";n(887)},897:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"a[data-v-f0d60b46]:hover{-webkit-text-decoration:underline;text-decoration:underline}",""]),r.locals={},t.exports=r}}]);