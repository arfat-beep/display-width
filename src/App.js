import { useEffect, useState } from "react";
import "./App.css";
function getOS() {
  var userAgent = window.navigator.userAgent,
    platform =
      window.navigator?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (/Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}

function App() {
  const [width, setWidth] = useState(window.screen.width);
  const actualWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
  }, []);
  const osName = getOS();
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h1>Hello {osName} user</h1>
        <h3>Your display width is {width} px</h3>
      </div>
    </div>
  );
}

export default App;
