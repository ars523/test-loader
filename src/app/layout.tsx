import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/Components/layout/Header";
import Add970X90 from "@/Components/common/Add970X90";
import Footer from "@/Components/layout/Footer";
import { baseURL } from "@/config/api/api";
import { IMenu } from "@/config/interfaces/interfaces";
import Head2 from "@/Components/layout/Header/Head2";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { useEffect } from "react";
import Image from "next/image";
import AnchorAd from "@/Components/AddComponents/AnchorAd";
import GoogleAdManager from "@/Components/adManager/GoogleAdManager"
import Ad from "@/Components/adManager/Ad";
import ThirdPartyAd from "@/Components/adManager/ThirdPartyAd"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "আজকের পত্রিকা | মানুষের পাশে সব সময়",
  description:
    "সারা দেশের স্থানীয় দৈনিক' স্লোগান সংবলিত আজকের পত্রিকা'য় থাকছে দেশের ৬৪ জেলার ৪৯৫ উপজেলার খবর",
};
export const revalidate = 60;

const fetchMenus = async () => {
  const res = await fetch(`${baseURL}/api/v2/menus`, { next: { revalidate: 300 } });
  return res.json();
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menusRes = await fetchMenus();
  const menus: IMenu[] = menusRes.results;
  const menuItems: IMenu | undefined = menus.find(
    (menu) => menu.slug === "menu"
  );
  const drawerItems: IMenu | undefined = menus.find(
    (menu) => menu.slug === "big-menu"
  );
  const footerItems: IMenu | undefined = menus.find(
    (menu) => menu.slug === "footer-menu"
  );

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Fz1m40_dJ8TkrssPMHgrlR8GtHQh9S1iue-UJQZim_Q"
        />
        <meta name="google-site-verification" content="0IqXoeBYMIu5nDYrJVA5XLkFXLhHm5LQ9mkqry1WZcE" />

        {/* <!--Third party add script start--> */}
        {/* <Script type="text/javascript"
          src="//cdn.bilsyndication.com/w/6481958a-fee4-4f4b-ab29-50774d9ca985.js" async
          defer></Script>
        <Script id="wapTag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        var wapTag = wapTag || { };wapTag.gdprShowConsentToolButton =
          false;
      `,
          }}
        ></Script>
        <Script type="text/javascript"
          src="//cdn.bilsyndication.com/ata/adv/6481958a-fee4-4f4b-ab29-50774d9ca985.js" async
          defer></Script> */}

        {/* <ThirdPartyAd/> */}
        {/* <!--Third party add script end--> */}

        {/* <!--google analytics--> */}
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6ZVH2R86GG"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
	gtag('set', 'page_path', urlCategoryDetails);
	gtag('set', 'page_location', window.location.href);

  gtag('config', 'G-6ZVH2R86GG');
 
  gtag('config', 'UA-193676574-1');
        `,
          }}

        /* gtag config */
        />
        {/* <!--google analytics--> */}

        {/* <!-- Google Tag_Manger Code --> */}

        <GoogleTagManager gtmId="GTM-W6ZKJD6" />

        {/* <!-- Google Tag_Manger Code --> */}

        {/* <!-- Google Adsense Code --> */}
        <Script
          id="adsbygoogle-init"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5261331564832462`}
          crossOrigin="anonymous"
        ></Script>
        {/* <!-- Google Adsense Code --> */}

        {/* <!-- Facebook Pixel Code --> */}
        <Script
          id=""
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
{if(f.fbq) return;
n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '789528345043763'); 
fbq('track', 'PageView');
        `,
          }}
        />

        {/* <!-- Google AdSense Code --> */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5261331564832462"
          crossOrigin="anonymous"
          type="bc74e4e88bd29c17d6c867f0-text/javascript"
        ></Script>
        {/* <!-- End AdSense Code --> */}

        {/* <!-- Start GPT Tag --> */}
        {/* <Script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          type="079ffc4384ca9def493adb38-text/javascript"
        ></Script> */}
        <GoogleAdManager />

        {/* <!-- End GPT Tag --><!-- Google ad head Code --> */}
      </head>
      <body className={inter.className}>
        <AntdRegistry>
          {/* <Header menuItems={menuItems} drawerItems={drawerItems} /> */}
          <Head2 menuItems={menuItems} drawerItems={drawerItems} />
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-W6ZKJD6"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <noscript>
            <img
              height="1"
              width="1"
              src="https://www.facebook.com/tr?id=789528345043763&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
          {/* <!-- End Facebook Pixel Code --> */}
          {children}

          {/* <!-- /22653932740/Anchor_Ad_Home -->*/}
          {/* <div id="div-gpt-ad-1709463204211-0">
            <Script
              id="div-gpt-ad-1709463204211-0"
              dangerouslySetInnerHTML={{
                __html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-1709463204211-0'); });`,
              }}
            ></Script>
          </div> */}
          {/* <!-- /22653932740/Anchor_Ad_Home -->*/}

          {/*  <!-- /22653932740/Popup_HP -->*/}
          {/* <div id="div-gpt-ad-1696947680958-0">
            <Script
              id="div-gpt-ad-1696947680958-0"
              dangerouslySetInnerHTML={{
                __html: ` googletag.cmd.push(function() { googletag.display('div-gpt-ad-1696947680958-0'); });`,
              }}
            ></Script>
          </div> */}
          {/*  <!-- /22653932740/Popup_HP -->*/}

          <Footer footerItems={footerItems} />
        </AntdRegistry>
      </body>
    </html>
  );
}
