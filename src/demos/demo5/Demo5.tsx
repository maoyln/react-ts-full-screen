import React, { useEffect } from 'react';
import './Demo5.css';
/**
 * 
 * 在学习了js启动浏览器全屏模式之后，就肯定会想让浏览器在自启动之后就自动触发全屏模式，但是这样是不行的，
 * 任何自动加载全屏的代码都无法主动启动浏览器的全屏，无论是异步的还是模拟点击事件也不行！
 * 只有用户的主动行为才可以触发（任何鼠标事件任何键盘事件等等）,这是为了用户体验和用户的浏览安全。
 * 如果您一进入一个网页它就给你弹一个全屏，您一定觉得反感。
 * 
 * 官方解释：注意：这个方法只能在用户交互或者设备方向改变的时候调用，否则将会失败。
 */
interface Props {}

const Demo5 = function (props: Props) {
  useEffect(() => {
    window.onload = () => {
      const btn1ObjA: any = document.getElementById("demoSecondA");
      if (btn1ObjA) {
        btn1ObjA.onclick = function (event: any) {
          var evt = event || window.event;
          // IE用cancelBubble=true来阻止而FF下需要用stopPropagation方法
          evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble=true);

          if (!document.fullscreenElement) {
            openFullscreen(btn1ObjA);
          } else {
            exitFullScreen();
          }
        }
      }

      const btn1ObjB: any = document.getElementById("demoSecondB");
      if (btn1ObjB) {
        btn1ObjB.onclick = function (event: any) {
          var evt = event || window.event;
          // IE用cancelBubble=true来阻止而FF下需要用stopPropagation方法
          evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble=true);

          // if (!document.fullscreenElement) {
          //   openFullscreen(btn1ObjB);
          // } else {
          //   exitFullScreen()
          // }
          btn1ObjA.click();
        }
      }

      btn1ObjB.onfullscreenchange = function () {
        console.log("FULL SCREEN CHANGE ELEMENT2")
      };

      btn1ObjB.click();
    }
  });

  /**
   * 打开全屏方法
   * HTMLElement | HTMLHtmlElement
   */
  const openFullscreen: Function = (element: any): void => {
    console.log('demo5--=-');
    // 注意：在响应用户交互或设备方向更改时必须调用此方法；否则会失败。
    const options = {
      navigationUI: 'hide'
    };
    if (element.requestFullscreen) {
      element.requestFullscreen(options).then((res: any) => {
        console.log(res);
      }).catch((err: any) => {
        console.log(err);
      });
    } else if (element.mozRequestFullScreen) {
      // Gecko (Firefox)
      element.mozRequestFullScreen(options);
    } else if (element.msRequestFullscreen) {
      // Internet Explorer
      element.msRequestFullscreen(options);
    } else if (element.webkitRequestFullscreen) {
      // WebKit (Safari) / Blink (Chrome & Opera) / Edge
      element.webkitRequestFullScreen(options);
    }
  }

  /**
   * 退出全屏方法
   */
  const exitFullScreen: Function = (): void => {
    const dom = document as any;
    if (dom.exitFullscreen) {
      dom.exitFullscreen();
    } else if (dom.mozCancelFullScreen) {
      // Gecko (Firefox)
      dom.mozCancelFullScreen();
    } else if (dom.msExitFullscreen) {
      // Internet Explorer
      dom.msExitFullscreen();
    } else if (dom.webkitExitFullscreen) {
      // WebKit (Safari) / Blink (Chrome & Opera) / Edge
      dom.webkitExitFullscreen();
    }
  }

  return (
    <div className="demo5">
      一级
      <div id="demoSecondA" className="demo-second-a">
        二级-A
      </div>
      <hr />
      <div id="demoSecondB" className="demo-second-b">
        二级-B
      </div>
    </div>
  );
};

export default Demo5;
