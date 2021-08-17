import React, { useEffect, useRef } from 'react';
import './Demo4.css';
interface Props {}
/**
 * 全屏-只能通过用户手势启动API
 */
const Demo4 = function (props: Props) {
  const videoRef: any = useRef(null);
  useEffect(() => {
    videoRef.current.onplay = handlePlay;
    videoRef.current.onpause = handlePause;
  });

  /**
   * 播放
   */
  const handlePlay: Function = (): void => {
    console.log('播放---', videoRef.current);
    openFullscreen(videoRef.current);
  }

  /**
   *  暂停
   */
  const handlePause: Function = (): void => {
    exitFullScreen()
  }

  /**
   * 打开全屏方法
   * HTMLElement | HTMLHtmlElement
   */
  const openFullscreen: Function = (element: any): void => {
    console.log(element, 'element');
    console.log(element.requestFullscreen);
    // 注意：在响应用户交互或设备方向更改时必须调用此方法；否则会失败。
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
    const dom: any = document;
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
    <div className="demo4">
      <video ref={videoRef} src={require('../../assets/video/videoDemo.mp4').default} muted autoPlay={false} controls></video>
    </div>
  );
};

export default Demo4;
