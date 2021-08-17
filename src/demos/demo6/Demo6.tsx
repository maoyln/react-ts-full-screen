import React, { useEffect } from 'react';
import './Demo6.css';
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

const Demo6 = function (props: Props) {
  useEffect(() => {

  });

  /**
   * 打开全屏方法
   * HTMLElement | HTMLHtmlElement
   */
  const openFullscreen: Function = (element: any): void => {
    if (element.requestFullscreen) {
      element.requestFullscreen().then((res: any) => {
        console.log(res);
      }).catch((err: any) => {
        console.log(err);
      });
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen(); // Gecko (Firefox)
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen(); // Internet Explorer
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen(); // WebKit (Safari) / Blink (Chrome & Opera) / Edge
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
      dom.mozCancelFullScreen(); // Gecko (Firefox)
    } else if (dom.msExitFullscreen) {
      dom.msExitFullscreen(); // Internet Explorer
    } else if (dom.webkitExitFullscreen) {
      dom.webkitExitFullscreen(); // WebKit (Safari) / Blink (Chrome & Opera) / Edge
    }
  }

  const handleClickA = (): void => {
    const btn1ObjA: any = document.getElementById("demoSecondA");
      if (btn1ObjA) {
        if (!document.fullscreenElement) {
          openFullscreen(btn1ObjA);
        } else {
          exitFullScreen();
        }
      }
  }

  const handleClickB = (): void => {
    const btn1ObjB: any = document.getElementById("demoSecondB");
    if (btn1ObjB) {
      if (!document.fullscreenElement) {
        openFullscreen(btn1ObjB);
      } else {
        exitFullScreen()
      }
    }
  }

  return (
    <div className="demo6">
      <div>
        <span className="my-button" onClick={handleClickA} >demoSecondA</span>
        ~｜~
        <span className="my-button" onClick={handleClickB}>demoSecondB</span>
      </div>
      {/* https://aecloud-test.glodon.com/portal/img/logo.e7c61859.png */}
      {/* https://gw.alipayobjects.com/zos/basement_prod/d2fa63a8-3e9d-4f59-80c7-1fd1d0cd9118.svg */}
      <iframe id="demoSecondA" width="500px" height="300px" src="https://aecloud-test.glodon.com/portal/img/logo.e7c61859.png" allowFullScreen></iframe>
      <hr />
      <iframe id="demoSecondB" width="500px" height="300px" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></iframe>
    </div>
  );
};

export default Demo6;
