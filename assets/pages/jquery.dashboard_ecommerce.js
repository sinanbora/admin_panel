!function(a){"use strict";var b=function(){this.$realData=[]};b.prototype.createAreaChartDotted=function(a,b,c,d,e,f,g,h,i,j){Morris.Area({element:a,pointSize:0,lineWidth:0,data:d,xkey:e,ykeys:f,labels:g,hideHover:"auto",pointFillColors:h,pointStrokeColors:i,resize:!0,gridLineColor:"#eef0f2",lineColors:j})},b.prototype.init=function(){var a=[{y:"2009",a:10,b:20,c:30},{y:"2010",a:75,b:65,c:30},{y:"2011",a:50,b:40,c:30},{y:"2012",a:75,b:65,c:30},{y:"2013",a:50,b:40,c:30},{y:"2014",a:75,b:65,c:30},{y:"2015",a:90,b:60,c:30}];this.createAreaChartDotted("morris-area-with-dotted",0,0,a,"y",["a","b","c"],["Desktops ","Tablets ","Mobiles "],["#ffffff"],["#999999"],["#36404a","#5d9cec","#bbbbbb"])},a.Dashboard2=new b,a.Dashboard2.Constructor=b}(window.jQuery),function(a){"use strict";a.Dashboard2.init()}(window.jQuery);