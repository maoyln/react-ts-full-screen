import React, { useEffect } from 'react';
import './Demo2.css';
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
interface Props {}

const Demo2 = function (props: Props) {
  useEffect(() => {
    document.addEventListener("click", function(e) {
      e.stopPropagation();
      e.preventDefault();
      console.log(Object.prototype.toString.call(document), '类型');
      toggleFullScreen(document);
    }, false);

    window.onload = () => {
      const btn1Obj: any = document.getElementById("demoSecond");
      if (btn1Obj) {
        btn1Obj.addEventListener("click", function(event: any) {
          event.stopPropagation();
          event.preventDefault();
          if (!document.fullscreenElement) {
            openFullscreen(btn1Obj);
          } else {
            exitFullScreen()
          }
        }, false);
      }
     }
  });

  /**
   * 打开全屏方法
   */
  const openFullscreen: Function = (element: HTMLElement | any): void => {
    console.log(element, 'element--');
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

  const toggleFullScreen: Function = (elem: Document): void => {
    if (!document.fullscreenElement) {
      openFullscreen(elem.documentElement);
    } else {
      exitFullScreen();
    }
  }
  return (
    <div className="demo2">
      一级
      <div id="demoSecond" className="demo-second">
        二级
      </div>
    </div>
  );
};

export default Demo2;
