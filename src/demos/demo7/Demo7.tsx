/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import './Demo7.css';
/**
 * iframe
 */
interface Props {}

const Demo7 = function (props: Props) {
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
    <div className="demo7">
      <div>
        <span className="my-button" onClick={handleClickA} >demoSecondA</span>
        ~｜~
        <span className="my-button" onClick={handleClickB}>demoSecondB</span>
      </div>
      {/* https://aecloud-test.glodon.com/portal/img/logo.e7c61859.png */}
      {/* https://gw.alipayobjects.com/zos/basement_prod/d2fa63a8-3e9d-4f59-80c7-1fd1d0cd9118.svg */}
      <iframe
        id="demoSecondA"
        width="500px" 
        height="300px" 
        src="https://aecloud-test.glodon.com/login" 
        allowFullScreen={false}
        allow='no'
      ></iframe>
      <hr />
      <iframe
        id="demoSecondB" 
        width="500px" 
        height="300px" 
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      ></iframe>
    </div>
  );
};

export default Demo7;
