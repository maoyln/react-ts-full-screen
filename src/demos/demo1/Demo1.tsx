import React, { useEffect } from 'react';
import './Demo1.css';

interface Props {}
/**
 * 在浏览器中，document对象是HTMLDocument(继承自Document类型）的一个实例，表达整个HTML页面。
 * 而且，document对象是window对象的一个属性，因此可以将其作为全局对象来访问
 * 
 * document.documentElement: 指向HTML页面中的html元素
 * document.body: 指向HTML页面中的body元素
 * HTMLHtmlElement对象和HTMLBodyElement对象继承了HTMLElement接口，HTMLElement可以表示所有的接口
 * 
 * 1、document类型表示整个文档，是一组分层节点的根节点
 * 2、element节点表示文档中的所有HTML或XML元素，可以用来操作这些元素的内容和特性
 */
const Demo1 = function (props: Props) {
  useEffect(() => {
    document.onkeydown = (event: any) => {
      if (event.keyCode === 13) {
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
