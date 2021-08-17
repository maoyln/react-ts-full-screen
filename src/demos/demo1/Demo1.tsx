import React, { useEffect } from 'react';
import './Demo1.css';

interface Props {}

const Demo1 = function (props: Props) {
  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.keyCode === 13) {
        toggleFullScreen();
      }
    }
  });

  /**
   * 打开全屏方法
   * 注意：现在，只有 Firefox 64 和 Chrome 71 支持无前缀。
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
   * 注意：现在，只有 Firefox 64 和 Chrome 71 支持无前缀。
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

  const toggleFullScreen: Function = (): void => {
    if (!document.fullscreenElement) {
      openFullscreen(document.documentElement);
    } else {
      exitFullScreen();
    }
  }
  return (
    <div className="demo1">
      你好
    </div>
  );
};

export default Demo1;
