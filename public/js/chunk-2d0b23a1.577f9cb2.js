(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b23a1"],{"22e0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:t.handleCreate}},[t._v("新增专题")])],1):t._e(),a("el-form-item",[a("el-button-group",[t.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,1,!0)}}},[t._v("启用")]):t._e(),t.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,0,!0)}}},[t._v("禁用")]):t._e()],1)],1),t.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:t.loading},on:{click:function(e){return t.handleDelete(null)}}},[t._v("删除")])],1):t._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{type:"selection",width:"30"}}),a("el-table-column",{attrs:{label:"标题",prop:"title",sortable:"custom","min-width":"250","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"别名",prop:"alias",sortable:"custom","min-width":"130","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"创建日期",prop:"create_time",sortable:"custom",align:"center","min-width":"160"}}),a("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{style:t.auth.enable||t.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:t.statusMap[e.row.status].type,effect:t.auth.enable||t.auth.disable?"light":"plain"},nativeOn:{click:function(a){return t.handleStatus(e.$index)}}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleView(e.row.topic_id)}}},[t._v("预览")]),t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleEdit(e.row.topic_id)}}},[t._v("编辑")]):t._e(),t.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e()]}}])})],1)],1)},i=[],l=(a("a4d3"),a("4de4"),a("c975"),a("a434"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),r=a("5880"),s=a("25c9");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(l["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={props:{tableData:{default:function(){return[]}},loading:{default:!1}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!1,del:!1,set:!1,enable:!1,disable:!1},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}}}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},activated:function(){this.updateChange({name:"system-article-topic",source:this.currentTableData,key:"topic_id"})},mounted:function(){this._validationAuth()},methods:c({},Object(r["mapActions"])("careyshop/update",["updateChange"]),{_validationAuth:function(){this.auth.add=this.$has("/system/article/topic/add"),this.auth.del=this.$has("/system/article/topic/del"),this.auth.set=this.$has("/system/article/topic/set"),this.auth.enable=this.$has("/system/article/topic/enable"),this.auth.disable=this.$has("/system/article/topic/disable")},_getTopicIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach((function(t){e.push(t.topic_id)})):e.push(this.currentTableData[t].topic_id),e},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,n=t.order,i={order_type:void 0,order_field:void 0};e&&n&&(i.order_type="ascending"===n?"asc":"desc",i.order_field=a),this.$emit("sort",i)},handleStatus:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this._getTopicIdList(t);if(0!==i.length){if(!n){var l=this.currentTableData[t],r=l.status?0:1;if(l.status>1)return;if(0===r&&!this.auth.disable)return;if(1===r&&!this.auth.enable)return;return this.$set(this.currentTableData,t,c({},l,{status:2})),void o(i,r,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){o(i,a,e)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function o(t,e,a){Object(s["f"])(t,e).then((function(){a.currentTableData.forEach((function(n,i){-1!==t.indexOf(n.topic_id)&&a.$set(a.currentTableData,i,c({},n,{status:e}))})),a.$message.success("操作成功")}))}},handleDelete:function(t){var e=this,a=this._getTopicIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(s["b"])(a).then((function(){for(var t=e.currentTableData.length-1;t>=0;t--)-1!==a.indexOf(e.currentTableData[t].topic_id)&&e.currentTableData.splice(t,1);e.currentTableData.length<=0&&e.$emit("refresh",!0),e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleView:function(t){this.$router.push({name:"system-article-topic-view",params:{topic_id:t}})},handleCreate:function(){this.$router.push({name:"system-article-topic-create"})},handleEdit:function(t){this.$router.push({name:"system-article-topic-update",params:{topic_id:t}})}})},h=u,d=a("2877"),p=Object(d["a"])(h,n,i,!1,null,null,null);e["default"]=p.exports}}]);