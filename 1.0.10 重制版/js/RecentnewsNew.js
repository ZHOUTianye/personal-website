
//提取语言
const lang = document.documentElement.lang;

const initializeAnimations = () => {
// 获取所有包含 EOPart 的元素
const EOparts = document.querySelectorAll('[id^="EOpart"]');
const indices = document.querySelectorAll('[id^="index"]');

// 根据 Chrome 浏览器的兼容性调整偏移
const adjustOffsetForChrome = (offset, adjustment) => {
  return navigator.userAgent.indexOf("Chrome") !== -1 ? offset - adjustment : offset;
};

// 为每个部分动态绑定点击事件
//需针对每个不同的文件
const currentPage = window.location.pathname;
if (currentPage.includes('RecentNews1.html')) {
	
	var a=-60;
	var b=20;
}
else {
	var a=0;
	var b=0;
}
// console.log('EOparts:', EOparts);
// console.log('indices:', indices);

function calculateOffsets(a,b) {
    EOparts.forEach((part, i) => {
      const partTop = part.offsetTop;
	  // console.log(a,b)
      const adjustedTop = partTop+ b +i*a ; // 固定偏移量
	  // console.log(adjustedTop);
      indices[i].addEventListener("click", function (event) {
        window.scrollTo({
          top: adjustedTop,
          behavior: 'smooth'
        });
      });
    });
  }
calculateOffsets(a,b)



const images = document.querySelectorAll('img');
images.forEach((img) => {
	img.addEventListener('load', function () {
      // 图片加载完成时，重新计算偏移量
    calculateOffsets(a,b);
	});
});

// 监听滚动事件，计算阅读进度并动态更新链接颜色
window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  const viewportHeight = window.innerHeight;
  const readingHeight = document.querySelector(".passage").offsetHeight;
  
  const startpostion = EOparts[0].offsetTop;
  const endposition = EOparts[EOparts.length - 1].offsetTop + readingHeight - viewportHeight;
  let readingPercentage = 2*(scrollTop - startpostion) / (endposition - startpostion) * 100;
  readingPercentage = Math.min(Math.max(readingPercentage, 0), 100);

  // 更新进度条内容

  
  const readingProgress = document.querySelector('.readingprogress');
  if (lang=="en"){
	  if (readingPercentage === 100) {
	    readingProgress.innerHTML = '<div class="readingcompleted">Reading completed! <br> Thanks for reading!</div>';
	  } else {
	    readingProgress.innerHTML = '<p class="readingprogress1">Reading Progress</p> <div class="readingprogress2"></div>';
	  }
  }
  else if (lang=="zh"){
	  if (readingPercentage === 100) {
	    readingProgress.innerHTML = '<div class="readingcompleted">阅读完毕 <br> 感谢阅读！</div>';
	  } else {
	    readingProgress.innerHTML = '<p class="readingprogress1">阅读进度</p> <div class="readingprogress2"></div>';
	  }
  }
  


  // 根据进度条百分比动态更新伪元素的宽度
  const styleSheets = document.styleSheets;
  for (let i = 0; i < styleSheets.length; i++) {
    const sheet = styleSheets[i];
    if (sheet.href && sheet.href.includes('content.css')) {
      const rules = sheet.cssRules;
      sheet.insertRule(`.readingprogress2::before { width: ${readingPercentage}% }`, rules.length);
      sheet.insertRule(`.txtpart2:hover {background-color:#f9f5ec; cursor: pointer;}`, rules.length);
      break;
    }
  }

  // 动态更新链接颜色
  indices.forEach((index, j) => {
    const jumpLinkPoint = EOparts[j].offsetTop - viewportHeight / 4;
    const nextJumpLinkPoint = EOparts[j + 1]?.offsetTop - viewportHeight / 4 || Infinity;
    if (scrollTop >= jumpLinkPoint && scrollTop < nextJumpLinkPoint) {
      index.style.color = "#cfab56"; // 活跃链接颜色
    } else {
      index.style.color = "#606060"; // 非活跃链接颜色
    }
  });
});

// 调整页脚在不同浏览器中的位置
// if (navigator.userAgent.indexOf("Safari") !== -1) {
//   const footerElements = document.getElementsByTagName("footer");
//   for (var i = 0; i < footerElements.length; i++) {
//     footerElements[i].style.top = "1800px";
//   }
// }

// 动态设置网页全高
const allHeightElement = document.querySelector('.allheightcalc');
const allHeight = allHeightElement.offsetHeight;
document.documentElement.style.setProperty('--all-height', `${allHeight}px`);
console.log(allHeight)



const passage = document.querySelector('.passage');
const passageHeight = passage.offsetHeight;
const passageTop = passage.offsetTop;
const footeroffset=passageHeight+passageTop
document.documentElement.style.setProperty('--footer-offset', `${footeroffset}px`);
console.log(passageHeight)

}

function loadHTML(selector, url) {
      return new Promise((resolve, reject) => {
        $(selector).load(url, function (response, status, xhr) {
          if (status === 'success') {
            resolve(response);
          } else {
            reject(new Error(`Failed to load ${url}, status: ${status}`));
          }
        });
      });
    }
function initializeyear(){
	var year=new Date().getFullYear();
	$(".year").html(year);
			
		// 获取图片元素的顶部距离
	var imageTop = document.getElementsByClassName("big").offsetTop;
	window.scrollTo(0, 0);
	window.onbeforeunload = function(){
		window.scrollTo(0, 0);
		document.documentElement.scrollTop = 0;  //ie下
		document.body.scrollTop = 0;  //非ie	
	 }
}



async function main() {
      try {
        // (a) 加载 header_en.html
        await loadHTML('.header', './models/header_en.html');
        // console.log('Header 加载完成');

        // (b) 加载 RecentNews_en.html
        await loadHTML('#app', './models/RecentNews_en.html');
        // console.log('主体内容加载完成');

        // (c) 加载 footer_en.html
        await loadHTML('.footer', './models/footer_en.html');
        // console.log('Footer 加载完成');
		//在初步渲染完成之后，对细节进行二次补充——footer 的年份实时渲染
		await initializeyear();
		//在初步渲染完成之后，对细节进行二次补充——语言链接的跳转
		const english=document.querySelector(".english");
		const chinese=document.querySelector(".chinese");
		
		const espanol=document.querySelector(".espanol");
		
		espanol.style.setProperty("color", "gray");
		
		const currentPage = window.location.pathname//重新获取
		const lastSegment = currentPage.substring(currentPage.lastIndexOf('/') + 1);
		const fileName = lastSegment.split('.')[0]; 
		
		//在读取完文件之后，修改语言按钮的跳转链接。
		if (lang=="en"){
			const jumpfilename=`../html_ch/${fileName}.html`
			chinese.href=jumpfilename;
			espanol.addEventListener("click",event=>{
				event.preventDefault(); 
				alert("Spanish is not supported for this page! I sincerely apologize! \nEspañol no es compatible para esta página!  ¡Sinceramente me disculpo!")
			})
		}
		else if (lang=="zh"){
			const jumpfilename=`../html_en/${fileName}.html`
			english.href=jumpfilename;
			espanol.addEventListener("click",event=>{
				event.preventDefault(); 
				alert("非常抱歉，该页面暂不支持西班牙语！ \nEspañol no es compatible para esta página!  ¡Sinceramente me disculpo!")
			})
		}
		
		
const { createApp, ref, computed, onMounted, nextTick } = Vue;
      createApp({
        setup() {
          // 使用 ref() 来定义响应式数据
          const markdownText = ref(``);

          // 图片 URL 列表
          const imageUrls = ref(definedurls)
		
          let imageIndex = 0; // 图片索引

          // 解析 Markdown 文本为结构化内容
          const parsedSections = computed(() => {
            const lines = markdownText.value.split('\n');
            const sections = [];
            let currentSection = null;

            lines.forEach((line) => {
              // 判断是否为大标题
              if (line.startsWith('## ')) {
                if (currentSection) {
                  sections.push(currentSection);
                }
                currentSection = { title: line.substring(2), subTitle: null, contents: [] };
              }
              // 判断是否为小标题
              else if (line.startsWith('### ')) {
                if (currentSection) {
                  currentSection.subTitle = line.substring(3);
                }
              }
              // 检测到【图片】标记并插入图片
              else if (line === '[图片]') {
                if (imageIndex < imageUrls.value.length) {
                  currentSection.contents.push({ type: 'image', data: imageUrls.value[imageIndex] });
                  imageIndex++;
                }
              }
              // 处理文本段落
              else if (line.trim() !== '') {
                currentSection.contents.push({ type: 'text', data: line });
              }
            });

            // 把最后一个 section 添加到 sections
            if (currentSection) {
              sections.push(currentSection);
            }

            return sections;
          });
		  // 
		  // const lastSegment = url.substring(url.lastIndexOf('/') + 1);
		  // const fileName = lastSegment.split('.')[0]; 
		  // console.log(fileName);
		  const loadMarkdown = async () => {
			  
		        try {
					
				//根据文件名称自动导航到路径.需要修改
				const currentPage = window.location.pathname//重新获取
				const lastSegment = currentPage.substring(currentPage.lastIndexOf('/') + 1);
				const fileName = lastSegment.split('.')[0]; 
				const textfilename=`./txt/${fileName}text.txt`
				console.log(textfilename)
		          const response = await fetch(textfilename); // 替换为您的路径
		          if (!response.ok) throw new Error('Failed to load file');
		          markdownText.value = await response.text();
		        } catch (error) {
		          console.error(error);
		        }
				
		      };
			 onMounted(async () => {
			      // 1. 先执行异步加载
				  
			      await loadMarkdown();
			
			      // 2. 等待 Vue 把数据更新到 DOM
			      await nextTick();
				
			      // 3. 此时页面上的 <div id="EOpart..."> 等元素已渲染完毕，可以安全获取 offsetTop
			      initializeAnimations();
			    });

          // 返回 setup() 中需要的数据和计算属性
          return {
            markdownText,
            parsedSections
          };
        }
      }).mount('#app');


} catch (err) {
        console.error('加载公共区块失败', err);
      }
}
main();
