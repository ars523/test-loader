"use client";

import Script from "next/script";

const ThirdPartyAd = () => {
  return (
    <>
      <Script
        type="text/javascript"
        src="//cdn.bilsyndication.com/w/6481958a-fee4-4f4b-ab29-50774d9ca985.js"
        async
        defer
      ></Script>
      <Script
        id="wapTag-config"
        strategy="afterInteractive"
        onLoad={() => {
          var wapTag = wapTag || {};
          wapTag.gdprShowConsentToolButton = false;
        }}
      ></Script>
      <Script
        type="text/javascript"
        src="//cdn.bilsyndication.com/ata/adv/6481958a-fee4-4f4b-ab29-50774d9ca985.js"
        async
        defer
      ></Script>
    </>
  );
};

export default ThirdPartyAd;
