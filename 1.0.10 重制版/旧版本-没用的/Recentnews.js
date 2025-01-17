// window.scrollIntoView({ behavior: 'smooth' });
var index0Top = document.getElementById("EOpart1").offsetTop;
			  // console.log(index0Top);
				document.getElementById("index0").addEventListener("click",function(event){
				window.scrollTo({
					top:index0Top,
					behavior: 'smooth'
				});
			  })
var index1Top = document.getElementById("EOpart3").offsetTop;
			if (navigator.userAgent.indexOf("Chrome") !== -1) {
			  index1Top=index1Top-30;
			} 
			  
				document.getElementById("index1").addEventListener("click",function(event){
				window.scrollTo({
					top:index1Top,
					behavior: 'smooth'
				});
			  })	  
var index2Top = document.getElementById("EOpart4").offsetTop;
			if (navigator.userAgent.indexOf("Chrome") !== -1) {
			  index2Top=index2Top-110;
			  }
				document.getElementById("index2").addEventListener("click",function(event){
				window.scrollTo({
					top:index2Top,
					behavior: 'smooth'
				});
			  })
var index3Top = document.getElementById("EOpart5").offsetTop;
			if (navigator.userAgent.indexOf("Chrome") !== -1) {
			  index3Top=index3Top-150;
			  }
				document.getElementById("index3").addEventListener("click",function(event){
				window.scrollTo({
					top:index3Top,
					behavior: 'smooth'
				});
			  })

var index4Top = document.getElementById("EOpart6").offsetTop;
			if (navigator.userAgent.indexOf("Chrome") !== -1) {
			  index4Top=index4Top-220;
			  }
				document.getElementById("index4").addEventListener("click",function(event){
				window.scrollTo({
					top:index4Top,
					behavior: 'smooth'
				});
			  })
var index5Top = document.getElementById("EOpart7").offsetTop;
			if (navigator.userAgent.indexOf("Chrome") !== -1) {
			  index5Top=index5Top-230;
			  }
				document.getElementById("index5").addEventListener("click",function(event){
				window.scrollTo({
					top:index5Top,
					behavior: 'smooth'
				});
			  })	
var index6Top = document.getElementById("EOpart8").offsetTop;
if (navigator.userAgent.indexOf("Chrome") !== -1) {
			  index6Top=index6Top-260;
			  }
				document.getElementById("index6").addEventListener("click",function(event){
				window.scrollTo({
					top:index6Top,
					behavior: 'smooth'
				});
			  })
var index7Top = document.getElementById("EOpart9").offsetTop;
if (navigator.userAgent.indexOf("Chrome") !== -1) {
			  index7Top=index7Top-310;
			  }
				document.getElementById("index7").addEventListener("click",function(event){
				window.scrollTo({
					top:index7Top,
					behavior: 'smooth'
				});
			  })
var index8Top = document.getElementById("EOpart10").offsetTop;
if (navigator.userAgent.indexOf("Chrome") !== -1) {
			  index8Top=index8Top-330;
			  }
				document.getElementById("index8").addEventListener("click",function(event){
				window.scrollTo({
					top:index8Top,
					behavior: 'smooth'
				});
			  })
var index9Top = document.getElementById("EOpart11").offsetTop;
if (navigator.userAgent.indexOf("Chrome") !== -1) {
			  index9Top=index9Top-440;
			  }
				document.getElementById("index9").addEventListener("click",function(event){
				window.scrollTo({
					top:index9Top,
					behavior: 'smooth'
				});
			  })
var index10Top = document.getElementById("EOpart12").offsetTop;
if (navigator.userAgent.indexOf("Chrome") !== -1) {
			  index10Top=index10Top-530;
			  }
				document.getElementById("index10").addEventListener("click",function(event){
				window.scrollTo({
					top:index10Top,
					behavior: 'smooth'
				});
			  })

window.addEventListener('scroll', function() {
//1.首先实现reading progress 的进度条效果
  // 获取滚动条的垂直位置
 var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  // console.log('垂直滚动位置：', scrollTop);
  var pageHeight = document.body.scrollHeight  ||  document.documentElement.scrollHeight;
  // console.log('整个网页的高度：', pageHeight);
	var viewportHeight = window.innerHeight;
	// console.log('视窗高度：', viewportHeight);
	
	var readingheight=document.getElementsByClassName("passage")[0].offsetHeight;
	var startpostion=index0Top;
	var endposition=index0Top+readingheight-viewportHeight;
	var readingpercentage=(scrollTop-index0Top)/(endposition-startpostion)*100;
	if (readingpercentage<0){
		readingpercentage=0;
	}else if(readingpercentage>100){
		readingpercentage=100;
	}
	// console.log('阅读进度', readingpercentage);
	var readingprogress = document.getElementsByClassName('readingprogress')[0];
  if (readingpercentage==100){
	  readingprogress.innerHTML = '<div class="readingcompleted">Reading completed! <br> Thanks for reading!</div>';
  }
  else{
	  readingprogress.innerHTML ='<p class="readingprogress1">Reading Progress</p> <div class="readingprogress2"></div>'
	  } 
	  //下面这段是在改样式表中伪元素的属性。
	  
//2.然后实现跳转链接的颜色变化  
	var jumplinkpoint1= index1Top-viewportHeight/4;
	var jumplinkpoint2= index2Top-viewportHeight/4;
	var jumplinkpoint3= index3Top-viewportHeight/4;
	var jumplinkpoint4= index4Top-viewportHeight/4;
	var jumplinkpoint5= index5Top-viewportHeight/4;
	var jumplinkpoint6= index6Top-viewportHeight/4;
	var jumplinkpoint7= index7Top-viewportHeight/4;
	var jumplinkpoint8= index8Top-viewportHeight/4;
	var jumplinkpoint9= index9Top-viewportHeight/4;
	var jumplinkpoint10= index10Top-viewportHeight/4;
	
	const applycolorjindutiao=function(j){
		for (let i = 0; i <= 10; i++) {
				if (i==j){
								document.getElementById(`index${i}`).style.color="#cfab56";
							  }
							  else{
		  const indexElement = document.getElementById(`index${i}`);
		  indexElement.style.color = "#606060";
							}
		}
	}
	if (scrollTop<jumplinkpoint1){
		var j=0;
		applycolorjindutiao(j);
	}
	else if (scrollTop<jumplinkpoint2){
		var j=1;
		applycolorjindutiao(j);	  
	}
	else if (scrollTop<jumplinkpoint3){
		var j=2;
		applycolorjindutiao(j);	
	}
	else if (scrollTop<jumplinkpoint4){
		var j=3;
		applycolorjindutiao(j);	
	}
	else if (scrollTop<jumplinkpoint5){
		var j=4;
		applycolorjindutiao(j);	
	}
	else if (scrollTop<jumplinkpoint6){
		var j=5;
		applycolorjindutiao(j);	
	}
	else if (scrollTop<jumplinkpoint7){
		var j=6;
		applycolorjindutiao(j);	
	}
	else if (scrollTop<jumplinkpoint8){
		var j=7;
		applycolorjindutiao(j);	
	}
	else if (scrollTop<jumplinkpoint9){
		var j=8;
		applycolorjindutiao(j);	
	}
	else if (scrollTop<jumplinkpoint10){
		var j=9;
		applycolorjindutiao(j);	
	}
	else{
		var j=10;
		applycolorjindutiao(j);
	}
  const styleSheets = document.styleSheets;//找到所有的样式表
   for (let i = 0; i < styleSheets.length; i++) {
  		const sheet = styleSheets[i];
  		if (sheet.href && sheet.href.includes('content.css')) {
       // 找到了要改的名称的样式表
  		const rules = sheet.cssRules;
  		sheet.insertRule(`.readingprogress2::before { width: ${readingpercentage}% }`, rules.length)
  		sheet.insertRule(`.txtpart2:hover {background-color:#f9f5ec; cursor: pointer;}`, rules.length)
   	// console.log(rules[rules.length].cssText);
  	// for (let i = 0; i < rules.length; i++) {
  //      console.log(rules[i].cssText);
  //  	}
       break;
     }
   }
   
   
   
 
  
	
//由于DOM无法改伪元素的样式，因此修改只能通过直接动样式表的原始方法进行。
//需要用到insertRule方法来完成暂时改变
//不能用node方法，因为node方法会永久改变文件内容。
  
  
  
});
// const styleSheets = document.styleSheets[6];
// const rules = styleSheets.cssRules;






if (navigator.userAgent.indexOf("Chrome") !== -1) {

} else if (navigator.userAgent.indexOf("Firefox") !== -1) {
	
} else if (navigator.userAgent.indexOf("Safari") !== -1) {
  // document.getElementsByTagName("footer").style.top="7580px";不能这样写，因为footer collection没有style属性，只能针对每一个元素完成设置。
  var footerElements = document.getElementsByTagName("footer");
  for (var i = 0; i < footerElements.length; i++) {
    var footer = footerElements[i];
    footer.style.top = "7580px";
  }
  
} else {
 //对其他浏览器。
}

const allh = document.querySelector('.allheightcalc');
const allHeight = allh.offsetHeight;
document.documentElement.style.setProperty('--all-height', `${allHeight}px`);


