(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bodyuse/bodyseg/bodyseg"],{6345:function(e,t,o){"use strict";o.r(t);var n=o("947c"),a=o("653f");for(var s in a)"default"!==s&&function(e){o.d(t,e,(function(){return a[e]}))}(s);o("7df8");var c,i=o("f0c5"),r=Object(i["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);t["default"]=r.exports},"636e":function(e,t,o){"use strict";(function(e){o("bae5");n(o("66fd"));var t=n(o("6345"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"653f":function(e,t,o){"use strict";o.r(t);var n=o("bea8"),a=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);t["default"]=a.a},"7df8":function(e,t,o){"use strict";var n=o("e819"),a=o.n(n);a.a},"947c":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return n}));var n={helangCompress:function(){return Promise.all([o.e("common/vendor"),o.e("components/helang-compress/helang-compress")]).then(o.bind(null,"c0a7"))},tColorPicker:function(){return o.e("components/t-color-picker/t-color-picker").then(o.bind(null,"d125"))}},a=function(){var e=this,t=e.$createElement;e._self._c},s=[]},bea8:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){o.e("components/t-color-picker/t-color-picker").then(function(){return resolve(o("d125"))}.bind(null,o)).catch(o.oe)},a=function(){o.e("components/t-table/t-table").then(function(){return resolve(o("35fc"))}.bind(null,o)).catch(o.oe)},s=function(){o.e("components/t-table/t-th").then(function(){return resolve(o("4920"))}.bind(null,o)).catch(o.oe)},c=function(){o.e("components/t-table/t-tr").then(function(){return resolve(o("c483"))}.bind(null,o)).catch(o.oe)},i=function(){o.e("components/t-table/t-td").then(function(){return resolve(o("fc6b"))}.bind(null,o)).catch(o.oe)},r=function(){Promise.all([o.e("common/vendor"),o.e("components/helang-compress/helang-compress")]).then(function(){return resolve(o("c0a7"))}.bind(null,o)).catch(o.oe)},l={components:{tTable:a,tTh:s,tTr:c,tTd:i,helangCompress:r,tColorPicker:n},data:function(){return{imgSrc:"",type:0,tableList:[],isHas:!1,title:"",caheight:0,isSave:!0,progressData:0,jd:"",isJd:!1,color:"#000000",imgBg:"",bgheight:0}},filters:{dealVal:function(e){var t=(100*parseFloat(e)).toString();return t=t.substr(0,5)+"%",t},dealXY:function(e){var t=parseFloat(e).toString();return t=t.substr(0,3),t}},onLoad:function(t){var o="欢迎您回来";t.text&&(o="已清空"),e.getStorage({key:"hasLook",success:function(){e.showToast({title:o,icon:"none",duration:1e3})},fail:function(){e.showModal({title:"提示",content:"背景图片和颜色二选一，选择背景图片后，背景色无效"}),e.setStorage({key:"hasLook",data:"yes"})}})},mounted:function(){},methods:{qkym:function(){e.redirectTo({url:"../bodyseg/bodyseg?text=已清空"})},upBg:function(){var t=this;e.chooseImage({count:1,success:function(o){t.imgBg=o.tempFilePaths[0],console.log(t.imgBg);var n=e.createCanvasContext("ones");e.getImageInfo({src:t.imgBg,success:function(o){var a=o.width,s=o.height;console.log(o),e.getSystemInfo({success:function(e){console.log(e);var o=s;s=e.windowWidth/a*s,t.bgheight=s,t.caheight=s,n.drawImage(t.imgBg,0,0,a,o,0,0,e.windowWidth,s),n.draw()}})}})}})},open:function(e){console.log(this.$refs),this.$refs.colorPickers.open()},confirm:function(e){console.log(e),this.color=e.hex},downF:function(t){var o=this;1==t?e.saveImageToPhotosAlbum({filePath:o.imgSrc,success:function(){e.showToast({title:"保存成功",icon:"none",duration:1500})}}):e.canvasToTempFilePath({canvasId:"ones",success:function(t){console.log(t.tempFilePath),e.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){e.showToast({title:"保存成功",icon:"none",duration:1500})}})}})},upfile:function(){var t=this;this.isSave=!0,t.progressData=0,e.chooseImage({count:1,success:function(o){t.jd="开始",t.isJd=!0,t.jd="压缩图片",t.imgSrc=o.tempFilePaths[0],t.$refs.helangCompress.compress({src:o.tempFilePaths[0],maxSize:800,fileType:"jpg",quality:.85,minSize:400}).then((function(o){t.jd="处理图像",console.log(o),e.uploadFile({sizeType:["original"],url:"https://dadandmother.cn/body",filePath:o,name:"file",formData:{type:5},success:function(o){if(e.showLoading({title:"加载中"}),"413"==o.statusCode)return console.log("sqdqw"),e.hideLoading(),void e.showToast({title:"图片过大",duration:1500});console.log(1232);var n=0,a=0,s=0;t.progressData=20,t.jd="定位人物",e.downloadFile({url:"https://dadandmother.cn/getImg?name="+o.data,success:function(o){console.log(o.tempFilePath),t.imgSrc=o.tempFilePath,t.progressData=40,e.getSystemInfo({success:function(o){console.log(o),t.jd="开始绘画",n=o.windowWidth,o.windowHeight,e.getImageInfo({src:t.imgSrc,success:function(o){console.log(o),a=o.width,s=o.height;t.progressData=60,e.uploadFile({url:"https://dadandmother.cn/body",filePath:t.imgSrc,name:"file",formData:{type:2},success:function(o){if(t.progressData=80,console.log(1232),""==t.imgBg){console.log(JSON.parse(o.data).person_info);var c=JSON.parse(o.data).person_info;if(c.length>1){t.caheight=s;var i=e.createCanvasContext("ones");i.setFillStyle(t.color),i.fillRect(0,0,n,s),i.draw(),i.drawImage(t.imgSrc,0,0,a,s,0,0,n,s),i.draw(!0)}else{var r=[],l=0,u=0,d=0,f=0,g=0,h=0,m=1;r=c[0].location,l=r.width*m,u=r.height*m,d=r.left,f=r.top,g=n/2-l/2,h=60;var p=e.createCanvasContext("ones");t.caheight=u+120,p.setFillStyle(t.color),p.fillRect(0,0,n,u+120),p.draw(),p.drawImage(t.imgSrc,d,f,l,u,g,h,l,u),p.draw(!0)}t.progressData=100,t.jd="完成",t.isJd=!1,t.isSave=!1}else{console.log(JSON.parse(o.data).person_info);var v=JSON.parse(o.data).person_info,b=[],w=0,S=0,y=0,P=0,I=0,C=0;t.caheight<s?C=t.caheight/s:n<a&&(C=n/a),b=v[0].location,w=b.width,S=b.height,y=b.left;var F=b.top,T=0,k=0;if(t.caheight<S?(P=b.top*C,T=w*C,k=S*C,I=n/2-T/2,0):(P=b.top,T=w,k=S,I=n/2-T/2,0),v.length>1){var j=v[0].location,x=v[v.length-1].location;y=j.left,F=j.top,w=x.left-j.left+x.width,S=j.height;var D=w,J=S;P=b.top,t.caheight<S&&(D=w*C,J=S*C,P=b.top*C),console.log(D),console.log(J),console.log(P),I=n/2-D/2;var _=e.createCanvasContext("ones");_.drawImage(t.imgSrc,0,0,a,s,0,0,n,s),_.draw(!0)}else{var B=e.createCanvasContext("ones");B.drawImage(t.imgSrc,y,F,w,S,I,P,T,k),B.draw(!0)}t.progressData=100,t.jd="完成",t.isJd=!1,t.isSave=!1}}})}})}})}}),e.hideLoading()}})}))}})}}};t.default=l}).call(this,o("543d")["default"])},e819:function(e,t,o){}},[["636e","common/runtime","common/vendor"]]]);