import React, { useEffect } from 'react';
import './Demo2.css';

interface Props {}

const Demo2 = function (props: Props) {
  useEffect(() => {
    document.addEventListener("click", function(event: any) {
      event.stopPropagation();
      event.preventDefault();
      toggleFullScreen(document);
    }, false);

    window.onload = () => {
      const btn1Obj: any = document.getElementById("demoSecond1");
      if (btn1Obj) {
        btn1Obj.addEventListener("click", function(event: any) {
          event.stopPropagation();
          event.preventDefault();
          openFullscreen(btn1Obj);
        }, false);
      }

      const btn2Obj: any = document.getElementById("demoSecond2");
      if (btn2Obj) {
        btn2Obj.addEventListener("click", function(event: any) {
          event.stopPropagation();
          event.preventDefault();
          openFullscreen(btn2Obj);
        }, false);
      }

      // 退出
      const btn3Obj: any = document.getElementById("demoSecond3");
      btn3Obj.addEventListener("click", function(event: any) {
        event.stopPropagation();
        event.preventDefault();
        exitFullScreen()
      }, false);
     }
  });

  /**
   * 打开全屏方法
   */
  const openFullscreen: Function = (element: HTMLElement | any): void => {
    const options = {
      navigationUI: 'show'
    };
    if (element.requestFullscreen) {
      element.requestFullscreen();
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

  const toggleFullScreen: Function = (elem: Document): void => {
    if (!document.fullscreenElement) {
      openFullscreen(elem.documentElement);
    } else {
      exitFullScreen();
    }
  }
  return (
    <div className="demo2">
      一级全屏
      <div id="demoSecond1" className="demo-second-1">
        二级全屏
        <div id="demoSecond2" className="demo-second-2">
          三级全屏
          <div id="demoSecond3" className="demo-second-3">
            退出全屏
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo2;
