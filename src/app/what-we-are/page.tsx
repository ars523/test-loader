import TopAdd from "@/Components/common/TopAdd";
import Link from "next/link";
import React from "react";
import { TiHome } from "react-icons/ti";

const WhatWeArePage = () => {
  return (
    <div className="container">
      <div className="flex flex-row gap-x-2 items-center cursor-pointer text-gray-700 pb-1 pt-2 border-b-[1px] border-[#BEBDBD]">
        <div>
          <Link href={`/`} className=" hover:underline">
            <TiHome size={18} className="mb-2" color="#6c757d" />
          </Link>
        </div>
        <div>
          <span> {">"} </span>
          <Link href={`/fact-check`} className="hover:underline">
            <span> ফ্যাক্টচেক </span>
          </Link>
          <span> {">"} </span>
          <Link href={`/what-we-are`} className="hover:underline">
            <span> আমাদের সম্পর্কে </span>
          </Link>
        </div>
      </div>
      <div className="text-xl">
        <p className="pb-4 pt-6">
          সোশ্যাল মিডিয়ায় ভাইরাল প্রবণতার এই সময়ে যে কোনো তথ্য খুব সহজে দ্রুত
          বিপুলসংখ্যক মানুষের কাছে পৌঁছে যাচ্ছে। ইন্টারনেট সহজলভ্য হওয়ায় যেকোনো
          তথ্য খুঁজে পাওয়া যায় বিস্তৃত অনলাইন পরিসরে। কিন্তু এসব তথ্যের
          নির্ভরযোগ্যতা, যথার্থতা বা সত্যতা যাচাই সবার পক্ষে সম্ভব হয় না। ফলে
          ভুল তথ্য ছড়িয়ে পড়ার ঝুঁকি থাকে। এই অপতথ্য, কুতথ্য, বানোয়াট বা
          বিভ্রান্তিকর তথ্য ধরিয়ে দিতে এবং সঠিক তথ্য পাঠকদের কাছে পৌঁছে দেওয়ার
          প্রয়াসে যাত্রা শুরু করে আজকের পত্রিকার ফ্যাক্টচেক বিভাগের।
        </p>
        <p className="pb-4">
          বাংলা দৈনিক সংবাদপত্র হিসেবে আজকের পত্রিকার আনুষ্ঠানিক যাত্রা ২০২১
          সালের ২৭ জুন। সে সময়ই আলাদা বিভাগ হিসেবে ফ্যাক্টচেক বিভাগের যাত্রা
          শুরু। বাংলাদেশে স্বতন্ত্রভাবে বেশ কিছু ফ্যাক্টচেকিং প্রতিষ্ঠান গড়ে
          উঠেছে। তবে মূলধারার সংবাদমাধ্যমের মধ্যে আজকের পত্রিকাই প্রথম আলাদা
          ফ্যাক্টচেক বিভাগ চালুর উদ্যোগ নেয়।
        </p>
        <p className="pb-4">
          স্বাস্থ্য, সংস্কার, ইতিহাস, প্রাণী ও অন্যান্য বস্তুনিচয় সম্পর্কে
          মানুষের মধ্যে দীর্ঘদিন ধরে চলে আসা ধারণা ও বিশ্বাসের সুলুক সন্ধানের
          পাশাপাশি সেসব ধারণা–বিশ্বাসের ভিত্তি যাচাই করে আজকের পত্রিকার
          ফ্যাক্টচেক বিভাগ। একই সঙ্গে বাংলাদেশে জনপ্রিয় সোশ্যাল মিডিয়াগুলোতেও
          নজর রাখে।
        </p>
        <p className="pb-4">
          শিক্ষা, রাজনীতি, অর্থনীতি, ধর্ম, সমাজ, সংস্কৃতি বা প্রভাবশালী
          ব্যক্তিকে নিয়ে যখনই কোনো ভুল, বিভ্রান্তিকর, অপতথ্য বা কুতথ্য নজরে আসে,
          সেটি যাচাই করে বিস্তারিত প্রতিবেদন প্রকাশ করে আজকের পত্রিকার
          ফ্যাক্টচেক বিভাগ।
        </p>
        <p className="pb-4">
          এসব প্রতিবেদনে প্রয়োজনীয় তথ্য-প্রমাণ তুলে ধরার পাশাপাশি নথিপত্রও যুক্ত
          করে দেওয়া হয়, যাতে পাঠক নিজেও তথ্যের সত্যতা যাচাই করে দেখতে পারেন।
        </p>
        <p className="pb-4">
          আজকের পত্রিকার ফ্যাক্টচেক প্রতিবেদনগুলো জনপ্রিয় সোশ্যাল মিডিয়া
          প্ল্যাটফর্মগুলোতেও সমান গুরুত্ব দিয়ে প্রচার করা হয়। পাশাপাশি অধিক
          গুরুত্বপূর্ণ ইস্যুগুলো নিয়ে ভিডিও প্রতিবেদন তৈরি ও প্রকাশ করা হয়; যাতে
          দীর্ঘ টেক্সট পড়তে অনাগ্রহী পাঠক ভিডিও প্রতিবেদনের মাধ্যমে নিজেকে
          সমৃদ্ধ করতে পারেন।
        </p>
        <p className="pb-4">
          প্রতিটি প্রকাশিত ফ্যাক্টচেক প্রতিবেদনের সঙ্গে আজকের পত্রিকার
          ফ্যাক্টচেক বিভাগের ই-মেইল ঠিকানা যোগ করে দেওয়া হয়, পাঠক কোনো তথ্য
          যাচাইয়ের জন্য এই ই-মেইলের মাধ্যমে আজকের পত্রিকার ফ্যাক্টচেক বিভাগকে
          অনুরোধ জানাতে পারেন। পাঠকের কোনো অভিযোগ থাকলে সেটিও ই-মেইলে জানানোর
          সুযোগ রয়েছে।
        </p>
        <p className="pb-4">
          ইস্যু বাছাই ও তথ্য যাচাইয়ের ক্ষেত্রে আজকের পত্রিকার ফ্যাক্টচেক বিভাগ
          শতভাগ নিরপেক্ষতা বজায় রাখার চেষ্টা করে। সম্পূর্ণ পক্ষপাতহীনভাবে
          প্রতিটি দাবি যাচাই করা হয়। যে কোনো ধরনের রাজনৈতিক বা মতাদর্শগত পক্ষপাত
          এড়ানোর বিষয়ে সর্বোচ্চ সতর্কতা অবলম্বন করা হয়।
        </p>
        <p className="pb-4">
          ফ্যাক্টচেক প্রতিবেদনে নিরপেক্ষতা নিশ্চিত করতে ফ্যাক্টচেকার নিয়োগের সময়
          এই শর্ত দেওয়া হয় যে, তিনি কোনো রাজনৈতিক সংগঠন, অ্যাকটিভিস্ট গ্রুপ বা
          জনমতকে প্রভাবিত করে এমন কোনো কাজ বা প্রতিষ্ঠানের সঙ্গে যুক্ত থাকবেন
          না।
        </p>
        <p className="pb-4">
          আজকের পত্রিকার ফ্যাক্টচেক বিভাগের লক্ষ্য, শতভাগ যথার্থতা। তবে কখনো যদি
          তথ্য উপস্থাপনে ভুল হয় বা বিভ্রান্তির সুযোগ থাকে; ফ্যাক্টচেক বিভাগ সেটি
          প্রতিবেদনে সংশোধনী উল্লেখপূর্বক সমাধান করে।
        </p>
        <p className="pb-4">
          সর্বোপরি, আজকের পত্রিকার ফ্যাক্টচেক বিভাগ আন্তর্জাতিক ফ্যাক্টচেকিং
          প্রতিষ্ঠানের (আইএফসিএন) কোড অব প্রিন্সিপাল অনুসরণ করে।
        </p>
        <span className="pb-4 font-bold">আমাদের কাজের পদ্ধতি</span>
        <p className="py-4">
          আজকের পত্রিকার ফ্যাক্টচেক বিভাগের সদস্যরা সর্বদা সামাজিক যোগাযোগ
          মাধ্যমসহ তথ্য প্রবাহের সবগুলো মাধ্যমের ওপর নজর রাখে। অতিরঞ্জিত বা
          অসামঞ্জস্যপূর্ণ কোনো দাবি সামনে এলে, সেটির সামাজিক প্রভাব বিবেচনায়
          পরবর্তী ধাপে এগোয় আজকের পত্রিকার ফ্যাক্টচেক বিভাগ।
        </p>
        <p className="pb-4">
          এই ধাপে দাবিটি যাচাইয়ের উদ্দেশ্যে ফ্যাক্টচেকের প্রয়োজনীয় কৌশল (বিভিন্ন
          সার্চ ইঞ্জিন, ওপেন সোর্স, রিভার্স ইমেজ সার্চ টুলস এবং দেশীয় ও
          আন্তর্জাতিক মূলধারার সংবাদমাধ্যম ও ফ্যাক্টচেকিং প্রতিষ্ঠানের মাধ্যমে
          তথ্যের ক্রসচেক ইত্যাদি) অবলম্বনের মাধ্যমে দাবিটি নিয়ে গবেষণা করা হয়
          এবং ফলাফল খুঁজে বের করা হয়। দাবির বিপরীতে ফ্যাক্ট (প্রকৃত সত্য)
          যাচাইয়ের জন্য প্রয়োজনে বিশেষজ্ঞ মতামতও নেওয়া হয়।
        </p>
        <p className="pb-4">
          গবেষণার প্রয়োজনীয় ধাপগুলো অনুসরণের মাধ্যমে যখন দাবির বিপরীতে
          সিদ্ধান্তমূলক ফলাফল পাওয়া যায়, তখন পরের ধাপে ফ্যাক্টচেকার তাঁর
          সম্পাদককে গবেষণার ফলাফল জানান। এই ধাপে ফ্যাক্টচেকার ও সম্পাদক দাবিটির
          বিপরীতে প্রাপ্ত তথ্য-উপাত্ত প্রতিবেদন আকারে প্রকাশের জন্য যথেষ্ট কি না
          তা নিয়ে আলোচনা করেন। আলোচনার মাধ্যমে ফলাফল সন্তোষজনক হলে দাবিটি যাচাই
          সম্পর্কিত প্রতিবেদন প্রকাশযোগ্য বলে নিশ্চিত করা হয় এবং ফ্যাক্টচেকার
          প্রয়োজনীয় সব নথি উল্লেখপূর্বক প্রতিবেদনটি প্রকাশের জন্য প্রস্তুত করেন।
        </p>
        <p className="pb-4">
          এরপরের ধাপে সম্পাদক পুনরায় প্রতিবেদনটি পড়েন এবং প্রতিবেদনে উল্লিখিত
          তথ্যসমূহ ক্রসচেক করেন। এই ধাপে কোনো সন্দেহের উদ্রেক হলে তা নিয়ে পুনরায়
          ফ্যাক্টচেকার এবং সম্পাদক নিজেদের মধ্যে আলোচনা করে সন্দেহ নিরসন করেন
          এবং সে অনুযায়ী প্রতিবেদনটি সম্পাদনা করা হয়।
        </p>
        <p className="pb-10">
          সবশেষ ধাপে প্রতিবেদনটি প্রয়োজনীয় নথিপত্র এবং উৎসসহ আজকের পত্রিকা
          ফ্যাক্টচেক বিভাগের সেকশনে প্রকাশ করা হয়। প্রকাশের পর একজন অভিজ্ঞ
          ডিজাইনারের মাধ্যমে ফটোকার্ড হিসেবে তথ্যটি সোশ্যাল মিডিয়া
          প্ল্যাটফর্মগুলোতে শেয়ার করা হয়। এই ধাপে অধিক গুরুত্বপূর্ণ ইস্যু নিয়ে
          ভিডিও প্রতিবেদনও করা হয়।
        </p>
      </div>
    </div>
  );
};

export default WhatWeArePage;
