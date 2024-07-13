(window.webpackJsonp=window.webpackJsonp||[]).push([[59,16],{1077:function(t){t.exports=JSON.parse('[{"name":"abnormal","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[2,3,1,3,2,4,3,2,2,1,1,5]},{"name":"abnormal.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[1,1,1,1,2,1,1,1,1,1,1,2]},{"name":"normal","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[4,2,3,5,3,2,1,3,3,1,4,3]},{"name":"normal.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[1,2,1,2,2,1,1,1,1,2,2,1]},{"name":"non-warning","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[1,2,2,1,1,2,2,2,1,2,2,1]},{"name":"non-warning.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[1,1,1,2,2,1,2,1,2,1,1,2]},{"name":"total","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[8,9,7,10,8,9,7,8,7,6,8,12]},{"name":"total.yesterday","time":["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00"],"value":[4,5,4,6,7,4,5,4,5,5,5,6]}]')},1084:function(t,e,r){"use strict";r.r(e);var c=r(358),n=r(886),l=r(876),o=r(867),P=r(1198),_=r(1091),h=r(505),d=r(865),v=r(861),M=r(233),m=(r(141),r(114),r(105),r(79),r(519),r(121),Array.from(new Array(30),(function(t,e){return"2024-06-".concat("0".concat(e+1).substr(-2))}))),T=Array.from(new Array(30),(function(){return 1*Number(200+30*Math.random()-30).toFixed(2)})),R=Array.from(new Array(30),(function(){return 1*Number(1e3+50*Math.random()-50*Math.random()).toFixed(2)})),w=T.map((function(t,e){return 1*Number(R[e]/t).toFixed(2)})),f={name:"LoadHistoryModel",props:{show:{type:Boolean,required:!0}},data:function(){return{startDateMenu:!1,endDateMenu:!1,startDate:"2024-06-01",endDate:"2024-06-30",date:m,voltage:T,current:R,kwh:w}},computed:{options:function(){return{tooltip:{trigger:"axis"},legend:{data:["電壓","電流","功率"]},grid:{left:100},xAxis:{type:"category",boundaryGap:!1,data:this.date},yAxis:[{type:"value",name:"電壓(V)",position:"left",axisLine:{lineStyle:{color:this.$vuetify.theme.themes[this.$vuetify.theme.isDark?"dark":"light"].info}},axisLabel:{formatter:"{value} V"}},{type:"value",name:"電流(A)",position:"left",offset:50,axisLine:{lineStyle:{color:this.$vuetify.theme.themes[this.$vuetify.theme.isDark?"dark":"light"].danger}},axisLabel:{formatter:"{value} A"}},{type:"value",name:"功率(kWh)",position:"right",axisLine:{lineStyle:{color:this.$vuetify.theme.themes[this.$vuetify.theme.isDark?"dark":"light"].primary}},axisLabel:{formatter:"{value} kWh"}}],series:[{name:"電壓",type:"line",yAxisIndex:0,itemStyle:{color:this.$vuetify.theme.themes[this.$vuetify.theme.isDark?"dark":"light"].info},data:this.voltage},{name:"電流",type:"line",yAxisIndex:1,itemStyle:{color:this.$vuetify.theme.themes[this.$vuetify.theme.isDark?"dark":"light"].danger},data:this.current},{name:"功率",type:"line",yAxisIndex:2,itemStyle:{color:this.$vuetify.theme.themes[this.$vuetify.theme.isDark?"dark":"light"].primary},data:this.kwh}]}}},methods:{onClose:function(){this.$emit("close:show",!1)},onSearch:function(){var t=m.indexOf(this.startDate),e=m.indexOf(this.endDate);this.date=m.slice(t,e+1),this.voltage=T.slice(t,e+1),this.current=R.slice(t,e+1),this.kwh=w.slice(t,e+1)}}},k=r(136),component=Object(k.a)(f,(function(){var t=this,e=t._self._c;return e(_.a,{attrs:{value:t.show,"max-width":"800px"},on:{"click:outside":t.onClose}},[e(n.a,[e(l.c,[e("span",{staticClass:"title"},[t._v("RPM總負載電流歷史查詢")])]),t._v(" "),e(l.b,[e(d.a,[e(o.a,{staticClass:"d-flex flex-wrap",attrs:{cols:"12"}},[e(h.a,{ref:"startDateMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(r){var c=r.on,n=r.attrs;return[e(M.a,t._g(t._b({attrs:{label:t.$t("start.time"),"prepend-icon":"mdi-calendar",readonly:""},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}},"v-text-field",n,!1),c))]}}]),model:{value:t.startDateMenu,callback:function(e){t.startDateMenu=e},expression:"startDateMenu"}},[t._v(" "),e(P.a,{on:{input:function(e){t.startDateMenu=!1}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),t._v(" "),e(h.a,{ref:"endDateMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(r){var c=r.on,n=r.attrs;return[e(M.a,t._g(t._b({attrs:{label:t.$t("end.time"),"prepend-icon":"mdi-calendar",readonly:""},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}},"v-text-field",n,!1),c))]}}]),model:{value:t.endDateMenu,callback:function(e){t.endDateMenu=e},expression:"endDateMenu"}},[t._v(" "),e(P.a,{on:{input:function(e){t.endDateMenu=!1}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),t._v(" "),e(c.a,{on:{click:function(e){return e.stopPropagation(),t.onSearch.apply(null,arguments)}}},[t._v(t._s(t.$t("search")))])],1)],1),t._v(" "),e(d.a,[e(o.a,{attrs:{cols:"12"}},[e("v-chart",{staticClass:"w-100",attrs:{options:t.options,autoresize:""}})],1)],1)],1),t._v(" "),e(l.a,[e(v.a),t._v(" "),e(c.a,{attrs:{color:"primary"},on:{click:t.onClose}},[t._v(t._s(t.$t("close")))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},1130:function(t){t.exports=JSON.parse('[{"check_time":"2024-03-27 10:45:01","current_current":977.11,"current_voltage":57.88,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1397.27,"high_critical_voltage":58,"id":136,"low_critical_current":467.34,"low_critical_voltage":48.5,"status":"normal","current_kwh":56.56,"high_critical_kwh":81.04,"low_critical_kwh":22.67},{"check_time":"2024-03-27 10:45:01","current_current":991.71,"current_voltage":55.5,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1739.06,"high_critical_voltage":58,"id":137,"low_critical_current":165.31,"low_critical_voltage":48.5,"status":"non-warning","current_kwh":55.04,"high_critical_kwh":100.87,"low_critical_kwh":8.02},{"check_time":"2024-03-27 10:45:01","current_current":1571.4,"current_voltage":58.43,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1276.69,"high_critical_voltage":58,"id":138,"low_critical_current":218.36,"low_critical_voltage":48.5,"status":"abnormal","current_kwh":91.82,"high_critical_kwh":74.05,"low_critical_kwh":10.59},{"check_time":"2024-03-27 10:45:01","current_current":667.22,"current_voltage":51.17,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":855.81,"high_critical_voltage":58,"id":139,"low_critical_current":189.24,"low_critical_voltage":48.5,"status":"normal","current_kwh":34.14,"high_critical_kwh":49.64,"low_critical_kwh":9.18},{"check_time":"2024-03-27 10:45:01","current_current":132.58,"current_voltage":48.58,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1961.79,"high_critical_voltage":58,"id":140,"low_critical_current":322.35,"low_critical_voltage":48.5,"status":"non-warning","current_kwh":6.44,"high_critical_kwh":113.78,"low_critical_kwh":15.63},{"check_time":"2024-03-27 10:45:01","current_current":246.24,"current_voltage":59.96,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1587.4,"high_critical_voltage":58,"id":141,"low_critical_current":438.61,"low_critical_voltage":48.5,"status":"abnormal","current_kwh":14.76,"high_critical_kwh":92.07,"low_critical_kwh":21.27},{"check_time":"2024-03-27 10:45:01","current_current":1945.06,"current_voltage":47.5,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":521.4,"high_critical_voltage":58,"id":142,"low_critical_current":480.36,"low_critical_voltage":48.5,"status":"non-warning","current_kwh":92.39,"high_critical_kwh":30.24,"low_critical_kwh":23.3},{"check_time":"2024-03-27 10:45:01","current_current":727.64,"current_voltage":59.68,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1975.38,"high_critical_voltage":58,"id":143,"low_critical_current":411.76,"low_critical_voltage":48.5,"status":"non-warning","current_kwh":43.43,"high_critical_kwh":114.57,"low_critical_kwh":19.97},{"check_time":"2024-03-27 10:45:01","current_current":1884.6,"current_voltage":50.15,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":885.52,"high_critical_voltage":58,"id":144,"low_critical_current":138.98,"low_critical_voltage":48.5,"status":"non-warning","current_kwh":94.51,"high_critical_kwh":51.36,"low_critical_kwh":6.74},{"check_time":"2024-03-27 10:45:01","current_current":548.81,"current_voltage":49.74,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1648.84,"high_critical_voltage":58,"id":145,"low_critical_current":489.67,"low_critical_voltage":48.5,"status":"normal","current_kwh":27.3,"high_critical_kwh":95.63,"low_critical_kwh":23.75},{"check_time":"2024-03-27 10:45:01","current_current":230.7,"current_voltage":52.72,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":710.91,"high_critical_voltage":58,"id":146,"low_critical_current":141.84,"low_critical_voltage":48.5,"status":"normal","current_kwh":12.16,"high_critical_kwh":41.23,"low_critical_kwh":6.88},{"check_time":"2024-03-27 10:45:01","current_current":338.03,"current_voltage":51.87,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1521.67,"high_critical_voltage":58,"id":147,"low_critical_current":443.34,"low_critical_voltage":48.5,"status":"abnormal","current_kwh":17.53,"high_critical_kwh":88.26,"low_critical_kwh":21.5},{"check_time":"2024-03-27 10:45:01","current_current":1268.74,"current_voltage":59.86,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1851.1,"high_critical_voltage":58,"id":148,"low_critical_current":293.7,"low_critical_voltage":48.5,"status":"normal","current_kwh":75.95,"high_critical_kwh":107.36,"low_critical_kwh":14.24},{"check_time":"2024-03-27 10:45:01","current_current":369.05,"current_voltage":59.06,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1966.2,"high_critical_voltage":58,"id":149,"low_critical_current":428.24,"low_critical_voltage":48.5,"status":"normal","current_kwh":21.8,"high_critical_kwh":114.04,"low_critical_kwh":20.77},{"check_time":"2024-03-27 10:45:01","current_current":1405.69,"current_voltage":57.4,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1129.43,"high_critical_voltage":58,"id":150,"low_critical_current":144.35,"low_critical_voltage":48.5,"status":"abnormal","current_kwh":80.69,"high_critical_kwh":65.51,"low_critical_kwh":7},{"check_time":"2024-03-27 10:45:01","current_current":1002.81,"current_voltage":54.37,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1112.52,"high_critical_voltage":58,"id":151,"low_critical_current":189.69,"low_critical_voltage":48.5,"status":"normal","current_kwh":54.52,"high_critical_kwh":64.53,"low_critical_kwh":9.2},{"check_time":"2024-03-27 10:45:01","current_current":1624.8,"current_voltage":52.87,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1868.32,"high_critical_voltage":58,"id":152,"low_critical_current":237.13,"low_critical_voltage":48.5,"status":"normal","current_kwh":85.9,"high_critical_kwh":108.36,"low_critical_kwh":11.5},{"check_time":"2024-03-27 10:45:01","current_current":1394.11,"current_voltage":53.12,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1652.82,"high_critical_voltage":58,"id":153,"low_critical_current":118.23,"low_critical_voltage":48.5,"status":"non-warning","current_kwh":74.06,"high_critical_kwh":95.86,"low_critical_kwh":5.73},{"check_time":"2024-03-27 10:45:01","current_current":1928.55,"current_voltage":50.86,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1320.76,"high_critical_voltage":58,"id":154,"low_critical_current":306.73,"low_critical_voltage":48.5,"status":"non-warning","current_kwh":98.09,"high_critical_kwh":76.6,"low_critical_kwh":14.88},{"check_time":"2024-03-27 10:45:01","current_current":1717.79,"current_voltage":49.83,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1772.34,"high_critical_voltage":58,"id":155,"low_critical_current":376.24,"low_critical_voltage":48.5,"status":"normal","current_kwh":85.6,"high_critical_kwh":102.8,"low_critical_kwh":18.25},{"check_time":"2024-03-27 10:45:01","current_current":696.2,"current_voltage":55.58,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":943.28,"high_critical_voltage":58,"id":156,"low_critical_current":395.22,"low_critical_voltage":48.5,"status":"normal","current_kwh":38.69,"high_critical_kwh":54.71,"low_critical_kwh":19.17},{"check_time":"2024-03-27 10:45:01","current_current":138.72,"current_voltage":51.65,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":967.58,"high_critical_voltage":58,"id":157,"low_critical_current":280.68,"low_critical_voltage":48.5,"status":"abnormal","current_kwh":7.16,"high_critical_kwh":56.12,"low_critical_kwh":13.61},{"check_time":"2024-03-27 10:45:01","current_current":1137.83,"current_voltage":52.48,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1160.04,"high_critical_voltage":58,"id":158,"low_critical_current":344.85,"low_critical_voltage":48.5,"status":"normal","current_kwh":59.71,"high_critical_kwh":67.28,"low_critical_kwh":16.73},{"check_time":"2024-03-27 10:45:01","current_current":1803.88,"current_voltage":49.73,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":1314.84,"high_critical_voltage":58,"id":159,"low_critical_current":224.4,"low_critical_voltage":48.5,"status":"abnormal","current_kwh":89.71,"high_critical_kwh":76.26,"low_critical_kwh":10.88},{"check_time":"2024-03-27 10:45:01","current_current":1062.25,"current_voltage":51.19,"device":"TP-RPM-01,TP-RPM-02,TP-RPM-03,TP-RPM-04,TP-RPM-05,TP-RPM-06,TP-RPM-07,TP-RPM-08,TP-RPM-09,TP-RPM-10,TP-RPM-11","high_critical_current":627.22,"high_critical_voltage":58,"id":160,"low_critical_current":109.15,"low_critical_voltage":48.5,"status":"abnormal","current_kwh":54.38,"high_critical_kwh":36.38,"low_critical_kwh":5.29}]')},1240:function(t,e,r){"use strict";r.r(e);var c=r(358),n=r(867),l=r(1199),o=r(422),P=r(865),_=(r(84),r(455),r(35),r(114),r(22),r(1077)),h=r(1130),d=r(884),v=r(1084),M=r(878),m={name:"RpmTotalLoadCurrentStatus",components:{ChartCard:d.default,LoadHistoryModel:v.default},layout:"admin-layout",data:function(){return{statusMap:M.a,show:!1}},computed:{headers:function(){return[{text:this.$t("id"),value:"id"},{text:this.$t("device.name"),value:"device",width:300},{text:this.$t("current.voltage"),value:"current_voltage"},{text:this.$t("high.critical.voltage"),value:"high_critical_voltage"},{text:this.$t("low.critical.voltage"),value:"low_critical_voltage"},{text:this.$t("current.current"),value:"current_current"},{text:this.$t("high.critical.current"),value:"high_critical_current"},{text:this.$t("low.critical.current"),value:"low_critical_current"},{text:this.$t("current.kwh"),value:"current_current"},{text:this.$t("high.critical.kwh"),value:"high_critical_current"},{text:this.$t("low.critical.kwh"),value:"low_critical_kwh"},{text:this.$t("history"),value:"history"}]},lineData:function(){return _},items:function(){return h},pieData:function(){return["normal","abnormal","non-warning"].map((function(t){return{name:t,value:h.filter((function(e){return e.status===t})).length}}))}},methods:{setRowClass:function(t){if(this.$vuetify.breakpoint.smAndDown)return"".concat(this.statusMap[t.status]," lighten-2")}}},T=r(136),component=Object(T.a)(m,(function(){var t=this,e=t._self._c;return e(P.a,[e("load-history-model",{attrs:{show:t.show},on:{"close:show":function(e){t.show=!1}}}),t._v(" "),e(n.a,{staticClass:"text-center",attrs:{cols:12,md:6}},[e("chart-card",{attrs:{title:"RPM總負載電流狀態統計圖"}},[e("chart-pie-list",{attrs:{items:t.pieData},scopedSlots:t._u([{key:"default",fn:function(t){var r=t.options;return[e("v-chart",{staticStyle:{width:"100%",height:"250px"},attrs:{options:r,autoresize:""}})]}}])})],1)],1),t._v(" "),e(n.a,{staticClass:"text-center",attrs:{cols:12,md:6}},[e("chart-card",{attrs:{title:"RPM總負載電流狀態趨勢圖"}},[e("chart-check-list",{attrs:{items:t.lineData},scopedSlots:t._u([{key:"default",fn:function(t){var r=t.options;return[e("v-chart",{staticStyle:{width:"100%",height:"250px"},attrs:{options:r,autoresize:""}})]}}])})],1)],1),t._v(" "),e(n.a,{attrs:{cols:12}},[e("table-card",{attrs:{title:"機房環境狀態-RPM總負載電流狀況",items:t.items},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.search,P=r.footerProps,_=r.itemPerPage,h=r.page,d=r.items,v=r.loading,M=r.headerProps;return[e(l.a,{attrs:{headers:t.headers,items:d,search:n,page:h,loading:v,"items-per-page":_,"footer-props":P,"header-props":M,"fixed-header":"","hide-default-footer":"","item-class":t.setRowClass},scopedSlots:t._u([{key:"item.device",fn:function(r){var c=r.item;return[e("td",{class:"".concat(t.statusMap[c.status]," lighten-2"),style:"none"!==c.status&&"border-color: inherit !important;"},[t._v("\n              "+t._s(c.device)+"\n            ")])]}},{key:"item.current_voltage",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.current_voltage||"-")+" V\n          ")]}},{key:"item.high_critical_voltage",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.high_critical_voltage||"-")+" V\n          ")]}},{key:"item.low_critical_voltage",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.low_critical_voltage||"-")+" V\n          ")]}},{key:"item.current_current",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.current_current||"-")+"A\n          ")]}},{key:"item.high_critical_current",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.high_critical_current||"-")+"A\n          ")]}},{key:"item.low_critical_current",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.low_critical_current||"-")+"A\n          ")]}},{key:"item.current_kwh",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.current_kwh||"-")+"kWh\n          ")]}},{key:"item.high_critical_kwh",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.high_critical_kwh||"-")+"kWh\n          ")]}},{key:"item.low_critical_kwh",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.low_critical_kwh||"-")+"kWH\n          ")]}},{key:"item.history",fn:function(){return[e("td",{attrs:{align:"center"}},[e(c.a,{attrs:{color:"secondary",small:"",dark:""},on:{click:function(e){t.show=!0}}},[e(o.a,[t._v("mdi-chart-areaspline")])],1)],1)]},proxy:!0}],null,!0)})]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadHistoryModel:r(1084).default,ChartPieList:r(892).default,ChartCard:r(884).default,ChartCheckList:r(893).default,TableCard:r(879).default})},878:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var c={normal:"success",abnormal:"error",error:"error","non-warning":"warning",total:"black",down:"error",up:"success"}},879:function(t,e,r){"use strict";r.r(e);var c=r(358),n=r(886),l=r(876),o=r(492),P=r(422),_=r(494),h=r(360),d=r(73),v=r(505),M=r(888),m=r(861),T=r(233),R=(r(84),r(455),r(140),{name:"TableCard",props:{title:{type:String,required:!0},items:{type:Array,required:!0}},data:function(){return{search:"",page:1,itemPerPage:10,loading:!1}},computed:{footerProps:function(){return{itemsPerPageAllText:this.$t("all"),itemsPerPageText:this.$t("per.page"),pageText:this.$t("current.page")}},headerProps:function(){return{sortByText:this.$t("sort.by"),itemsPerPageText:this.$t("per.page"),pageText:this.$t("current.page")}},totalPage:function(){var t,e;return Math.ceil((null!==(t=null===(e=this.items)||void 0===e?void 0:e.length)&&void 0!==t?t:0)/this.itemPerPage)},totalItem:function(){var t,e;return null!==(t=null===(e=this.items)||void 0===e?void 0:e.length)&&void 0!==t?t:0}},methods:{onReload:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1}),1e3)}}}),w=r(136),component=Object(w.a)(R,(function(){var t=this,e=t._self._c;return e(n.a,[e(l.c,{staticClass:"flex-nowrap"},[e("span",{staticClass:"font-weight-bold text-truncate"},[t._v(t._s(t.$t(t.title)))]),t._v(" "),e(m.a),t._v(" "),e(c.a,{attrs:{icon:""},on:{click:t.onReload}},[e(P.a,[t._v("mdi-refresh")])],1),t._v(" "),e(v.a,{attrs:{"min-width":"100",transition:"slide-y-transition","offset-y":"",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,l=r.attrs;return[e(c.a,t._g(t._b({attrs:{icon:"",text:""}},"v-btn",l,!1),n),[e(P.a,[t._v("mdi-download")])],1)]}}])},[t._v(" "),e(_.a,[e(h.a,[e(d.a,[e(d.b,{staticClass:"subtitle-2"},[t._v(" CSV ")])],1)],1),t._v(" "),e(h.a,[e(d.a,[e(d.b,{staticClass:"subtitle-2"},[t._v(" EXCEL ")])],1)],1),t._v(" "),e(h.a,[e(d.a,[e(d.b,{staticClass:"subtitle-2"},[t._v(" PDF ")])],1)],1)],1)],1)],1),t._v(" "),e(o.a),t._v(" "),e(l.b,{staticClass:"pb-8"},[e("div",{staticClass:"text-right mt-2 mb-1"},[e(T.a,{staticClass:"d-inline-flex",attrs:{small:"","append-icon":"mdi-magnify",label:t.$t("search"),clearable:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("div",{staticClass:"overflow-x-auto"},[t._t("default",null,{search:t.search,loading:t.loading,footerProps:t.footerProps,page:t.page,itemPerPage:t.itemPerPage,headerProps:t.headerProps,items:t.items})],2),t._v(" "),e("div",{staticClass:"d-inline-flex w-100 pt-2 justify-space-between align-start align-sm-center flex-sm-row flex-column my-2"},[e("div",{staticClass:"text-left"},[t._v("\n        "+t._s(t.$t("table.footer.text.1",[10*(t.page-1)+1,10*t.page>t.totalItem?t.totalItem:10*t.page,t.totalItem]))+"\n      ")]),t._v(" "),e("div",{staticClass:"align-self-center"},[e(M.a,{attrs:{length:t.totalPage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])])],1)}),[],!1,null,null,null);e.default=component.exports},884:function(t,e,r){"use strict";r.r(e);var c=r(358),n=r(886),l=r(876),o=r(175),P=r(422),_=r(861),h={name:"ChartCard",props:{title:{type:String,required:!0}},data:function(){return{collapse:!1,show:!0}}},d=r(136),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e(n.a,{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mx-auto",attrs:{height:t.collapse?"auto":"100%"}},[e(l.c,{staticClass:"info white--text flex-nowrap"},[e("span",{staticClass:"font-weight-bold text-truncate"},[t._v(t._s(t.$t(t.title)))]),t._v(" "),e(_.a),t._v(" "),e(c.a,{attrs:{color:"white",icon:""},on:{click:function(e){t.collapse=!t.collapse}}},[e(P.a,[t._v("mdi-minus")])],1),t._v(" "),e(c.a,{attrs:{color:"white",icon:""},on:{click:function(e){t.show=!1}}},[e(P.a,[t._v("mdi-close")])],1)],1),t._v(" "),e(o.a,[t.collapse?t._e():e(l.b,{staticStyle:{height:"calc(100% - 60px)"}},[t._t("default")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},887:function(t,e,r){var content=r(897);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("4b8c40ea",content,!0,{sourceMap:!1})},892:function(t,e,r){"use strict";r.r(e);var c=r(494),n=r(360),l=r(73),o=r(137),P=(r(78),r(94),r(22),r(41),r(35),r(48),r(49),r(38),r(39),r(10)),_=(r(114),r(878));function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(P.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={name:"ChartPieList",props:{items:{type:Array,required:!0}},data:function(){return{statusMap:_.a}},computed:{options:function(){var t=this;return{grid:{top:0,bottom:0,containLabel:!0},tooltip:{trigger:"item"},legend:{top:"5%",left:"center",textStyle:{color:this.$vuetify.theme.isDark?"#fff":"#000",fontSize:this.$vuetify.breakpoint.mdAndUp?18:14}},series:[{avoidLabelOverlap:!1,label:{show:!0,position:"inner",formatter:"{c}"},labelLine:{show:!1},name:"設備總覽",type:"pie",radius:["30%","60%"],data:this.items.map((function(e){return d(d({},e),{},{name:t.$t("".concat(e.name,".count")),itemStyle:{color:t.$vuetify.theme.themes[t.$vuetify.theme.isDark?"dark":"light"][t.statusMap[e.name]||"secondary"]}})}))}]}}}},M=(r(896),r(136)),component=Object(M.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex"},[e("div",{staticClass:"flex-grow-1",staticStyle:{"max-width":"calc(100% - 200px)"}},[t._t("default",null,{options:t.options})],2),t._v(" "),e(c.a,{staticClass:"flex-grow-1",staticStyle:{"max-width":"200px"}},t._l([].concat(Object(o.a)(t.items),[{value:t.items.reduce((function(t,e){return t+e.value}),0),name:"total"}]),(function(r){return e(n.a,{key:r.name},[e(l.a,[e(l.b,{class:"error"===t.statusMap[r.name]&&"title"},[t._v("\n          "+t._s(t.$t(r.name+".count"))+" :\n          "),e("a",{class:"".concat(t.statusMap[r.name],"--text")},[t._v(t._s(r.value))])])],1)],1)})),1)],1)}),[],!1,null,"f0d60b46",null);e.default=component.exports},893:function(t,e,r){"use strict";r.r(e);var c=r(1037),n=r(494),l=r(360),o=r(174),P=(r(35),r(114),r(94),r(22),r(91),r(105),r(120),r(878)),_={name:"ChartCheckList",props:{items:{type:Array,required:!0}},data:function(){return{statusMap:P.a,selected:[],range:12}},computed:{options:function(){var t=this;return{tooltip:{trigger:"axis"},legend:{data:this.items.filter((function(e){return t.selected.some((function(s){return String(s)===String(e.name)||String("".concat(s,".yesterday"))===String(e.name)}))})).map((function(e){return t.$t("".concat(e.name,".count"))})),icon:"rect",top:"5%",left:"center",textStyle:{color:this.$vuetify.theme.isDark?"#fff":"#000",fontSize:this.$vuetify.breakpoint.mdAndUp?18:14}},xAxis:{type:"category",boundaryGap:!1,data:this.items[0].time.slice(-this.range)},yAxis:{type:"value"},series:this.items.filter((function(e){return t.selected.some((function(s){return String(s)===String(e.name)||String("".concat(s,".yesterday"))===String(e.name)}))})).map((function(e,r){return{name:t.$t("".concat(e.name,".count")),type:"line",smooth:!0,label:{show:!0,position:r%2?"top":"bottom"},data:e.value.slice(-t.range),itemStyle:{color:t.$vuetify.theme.themes[t.$vuetify.theme.isDark?"dark":"light"][t.statusMap[e.name]||"secondary"]}}}))}}},mounted:function(){this.selected=this.items.map((function(t){return t.name})).filter((function(t){return!t.includes("yesterday")})).slice(0,1)}},h=r(136),component=Object(h.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex"},[e("div",{staticClass:"flex-grow-1",staticStyle:{"max-width":"calc(100% - 200px)"}},[t._t("default",null,{options:t.options})],2),t._v(" "),e(n.a,{staticClass:"flex-grow-1",staticStyle:{"max-width":"200px"}},[e(l.a,[e(o.a,{attrs:{"item-text":"label","item-value":"value","hide-details":"",items:[{value:12,label:t.$t("hours",{e:12})},{value:6,label:t.$t("hours",{e:6})},{value:3,label:t.$t("hours",{e:3})}]},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1),t._v(" "),t._l(t.items.map((function(t){return t.name})).filter((function(t){return-1===t.indexOf("yesterday")})),(function(r){return e(l.a,{key:r.name},[e(c.a,{staticClass:"text-no-wrap mt-0",attrs:{label:t.$t(r),value:r,color:"info","hide-details":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports},896:function(t,e,r){"use strict";r(887)},897:function(t,e,r){var c=r(57)((function(i){return i[1]}));c.push([t.i,"a[data-v-f0d60b46]:hover{-webkit-text-decoration:underline;text-decoration:underline}",""]),c.locals={},t.exports=c}}]);