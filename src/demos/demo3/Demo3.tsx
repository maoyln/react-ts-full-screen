import React, { useEffect } from 'react';
import './Demo3.css';
/**
 * fullscreenchange事件不会直接说明文档当前是进入还是退出全屏模式，因此你的事件处理程序应查看Document.fullscreenElement的值。 
 * 如果为null，则该事件表示已退出全屏模式； 否则，指定的元素将接管屏幕。
 */
interface Props {}

const Demo3 = function (props: Props) {
  useEffect(() => {
    /**
     * 事件
     * 全屏 API 定义了两个事件：1.可用来检测全屏模式何时打开和关闭。2.在全屏模式和窗口模式之间切换过程中何时发生错误。
     * fullscreenchange
     * fullscreenerror
     */
    document.addEventListener('fullscreenchange', (event) => {
      console.log(document.fullscreenElement, 'document.fullscreenElement')
      if (document.fullscreenElement) {
        console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
      } else {
        console.log('Leaving full-screen mode.');
      }
    });

    /**
     * Document 上的事件处理程序  出错：onfullscreenerror
     */
    // document.onfullscreenchange = function ( event ) {
    //   console.log("FULL SCREEN CHANGE DOCUMENT1", event)
    // };
    document.documentElement.onclick = function (event) {
      var evt = event || window.event;
      // IE用cancelBubble=true来阻止而FF下需要用stopPropagation方法
      evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble=true);
      // requestFullscreen() 方法必须在一个事件处理器的方法体里执行，否则将会失败
      toggleFullScreen(document);
    }

    window.onload = (): void => {
      const btn1Obj: any = document.getElementById("demoSecond");
      if (btn1Obj) {
        // Element 上的事件处理程序  出错：onfullscreenerror
        btn1Obj.onfullscreenchange = function () {
          console.log("FULL SCREEN CHANGE ELEMENT2")
        };
        btn1Obj.onclick = function (event: any) {
          var evt = event || window.event;
          // IE用cancelBubble=true来阻止而FF下需要用stopPropagation方法
          evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble=true);
          if (!document.fullscreenElement) {
            openFullscreen(btn1Obj);
          } else {
            exitFullScreen();
          }
        }
      }
     }
  });

  const toggleFullScreen: Function = (elem: Document): void => {
    const document: any = window.document;
    // 判断当前是否为全屏模式
    const fullscreenElement = document.fullscreenElement
      || document.mozFullscreenElement 
      || document.webkitFullscreenElement;
    // 判断是否支持全屏
    const fullscreenEnabled = document.fullscreenEnabled
      || document.mozFullscreenEnabled
      || document.webkitFullscreenEnabled;

    if (!fullscreenElement && fullscreenEnabled) {
      openFullscreen(elem.documentElement);
    } else {
      exitFullScreen();
    }
  }

  /**
   * 打开全屏方法
   * HTMLElement | HTMLHtmlElement
   */
  const openFullscreen: Function = (element: any): void => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Gecko (Firefox)
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      // Internet Explorer
      element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      // WebKit (Safari) / Blink (Chrome & Opera) / Edge
      element.webkitRequestFullScreen();
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
    <div className="demo3">
      一级
      <div id="demoSecond" className="demo-second">
        二级
      </div>
    </div>
  );
};

export default Demo3;
