import Add970X90 from "@/Components/common/Add970X90";
import AddSquare from "@/Components/common/AddSquare";
import Section from "@/Components/common/Section";
import { baseURL } from "@/config/api/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sq1 from "@/assets/images/adds/sq1.gif";
import { getStoryDetailsTypeHref } from "@/lib/href";
import { IStory, IStoryDetails } from "@/config/interfaces/interfaces";
import NotFound from "@/Components/common/NotFound";
import Title from "@/Components/common/Title";
import TopAdd from "@/Components/common/TopAdd";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Caption from "@/Components/common/Caption";
import { getStoryDetailsImageUrl } from "@/lib/imageUrl";
import GoogleAdsense970x90 from "@/Components/AddComponents/GoogleAdsense970x90";
import R2GoogleAdsense300x250 from "@/Components/AddComponents/R2GoogleAdsense300x250";
import AdT from "@/Components/adManager/AdT";
import AdR from "@/Components/adManager/AdR";
import AnchorAd from "@/Components/AddComponents/AnchorAd";

const getTag = (searchParams: {
  div?: string;
  district?: string;
  upazila?: string;
}) => {
  let tag = "";
  if (!searchParams?.district && !searchParams?.upazila && searchParams?.div) {
    tag += `${searchParams?.div}`;
  }
  if (searchParams?.district) {
    tag += `${searchParams?.district},`;
  }
  if (searchParams?.upazila) {
    tag += `${searchParams?.upazila}`;
  }
  return tag.replace(/,$/, "");
};

const getStoryByTag = async (currentPage: number, tag: string) => {
  let url = `${baseURL}/api/v2/home?page=${currentPage}&page_size=17`;
  if (tag) {
    url = `${baseURL}/api/v2/home?tags=${tag}&page=${currentPage}&page_size=17`;
  }
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

function generateURL(
  page: number,
  div: string | undefined,
  district: string | undefined,
  upazila: string | undefined
) {
  const params = new URLSearchParams();

  // Add query parameters conditionally
  if (div) params.append("div", div);
  if (district) params.append("district", district);
  if (upazila) params.append("upazila", upazila);

  // Page parameter is always added last
  params.append("page", page + "");

  // Combine base URL with query parameters
  return `/topic?${params.toString()}`;
}

async function LocalNewsPage({
  searchParams,
}: {
  searchParams: {
    div?: string;
    district?: string;
    upazila?: string;
    page: string;
  };
}) {
  const currentPageNo = searchParams?.page ? parseInt(searchParams.page) : 1;
  const data = await getStoryByTag(currentPageNo, getTag(searchParams));

  const stories: IStoryDetails[] = data.results;

  if (stories?.length === 0) {
    return <NotFound />;
  }
  return (
    <Section className="mb-6">
      <div className="container">
        <div className="pt-6">
          <h1 className="font-bold text-teal1 text-3xl">
            {searchParams?.upazila ||
              searchParams?.district ||
              searchParams?.div}
          </h1>
        </div>
      </div>
      <div className="flex justify-center my-4 ">
        <AdT addId={"Section_T1"} />
      </div>

      {/* <GooleAdsense970x90/> */}
      <div className="container">
        {currentPageNo === 1 ? (
          <>
            {/* Top Big Story */}
            {stories?.length > 0 && (
              <div className="grid lg:grid-cols-[auto_300px] gap-6 mb-6">
                <div
                  className="grid grid-cols-1 lg:grid-cols-3 gap-5"
                  {...(stories[0]?.story_type === "web_story"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <div className="order-2 lg:order-1">
                    <Title
                      display_tags={stories[0]?.display_tags}
                      href={getStoryDetailsTypeHref(stories[0])}
                      className="text-[28px] leading-[38px]"
                      isLiveActive={stories[0]?.is_live_news}
                    >
                      {stories[0]?.title}
                    </Title>
                    <p className="text-[17px] text-[#444] lg:line-clamp-6 line-clamp-3">
                      {stories[0]?.excerpt}
                    </p>
                  </div>
                  <div className="lg:col-span-2 order-1 lg:order-2">
                    <Link href={getStoryDetailsTypeHref(stories[0])}>
                      <div className="w-full aspect-video relative">
                        <Image
                          className="object-cover"
                          src={getStoryDetailsImageUrl(stories[0]) || ""}
                          alt={stories[0]?.title}
                          fill
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div>
                  {/* <R2GoogleAdsense300x250/> */}
                  <div className="flex justify-center">
                    <AdR addId={"Section_R1"} />
                  </div>

                  {/* <AddSquare
                    add={{
                      image: sq1,
                      link: "",
                      alt: "Add",
                    }}
                  /> */}
                </div>
              </div>
            )}
            {/* Middle Four Stories */}
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-9">
              {stories
                ?.slice(1, 5)
                ?.map((story: IStoryDetails, index: number) => (
                  <div
                    key={index}
                    className="grid grid-cols-10 lg:grid-cols-3 gap-5 lg:block border-bottom lg:before:h-0"
                    {...(story?.story_type === "web_story"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Link
                      className="w-full col-span-4 lg:col-span-1"
                      href={getStoryDetailsTypeHref(story)}
                    >
                      <div className="aspect-video relative mb-2">
                        <Image
                          className="object-cover"
                          src={getStoryDetailsImageUrl(story) || ""}
                          alt={story?.title}
                          fill
                        />
                      </div>
                    </Link>
                    <div className="col-span-6 lg:col-span-2">
                      <Title
                        className="text-xl"
                        display_tags={story?.display_tags}
                        href={getStoryDetailsTypeHref(story)}
                        isLiveActive={story?.is_live_news}
                      >
                        {story?.title}
                      </Title>
                      <div className="hidden lg:block">
                        <p className="text-base text-[#444] line-clamp-2">
                          {story?.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="my-12 flex justify-center">
              <AdT addId={"Section_T2"} />
            </div>

            {/* Bottom Stories */}
            <div className="max-w-[970px] mx-auto grid lg:grid-cols-[auto_300px] gap-6">
              <div className="flex flex-col gap-y-9">
                {stories
                  ?.slice(5)
                  .map((story: IStoryDetails, index: number) => (
                    <div
                      key={index}
                      className="block border-bottom [&:nth-last-child(2)]:before:h-0 lg:before:h-0"
                      {...(story?.story_type === "web_story"
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <div className="grid grid-cols-3 gap-5">
                        <Link href={getStoryDetailsTypeHref(story)}>
                          <div className="w-full aspect-video relative">
                            <Image
                              className="object-cover"
                              src={getStoryDetailsImageUrl(story) || ""}
                              alt={story?.title}
                              fill
                            />
                          </div>
                        </Link>
                        <div className="col-span-2">
                          <Title
                            display_tags={story?.display_tags}
                            href={getStoryDetailsTypeHref(story)}
                            isLiveActive={story?.is_live_news}
                            className="text-xl"
                          >
                            {story?.title}
                          </Title>
                          <div className="hidden lg:block">
                            <p className="text-base text-[#444] line-clamp-2">
                              {story?.excerpt}
                            </p>
                          </div>
                        </div>
                      </div>
                      {index + 1 === 6 && (
                        <div className="flex lg:justify-end mt-6 lg:mr-10">
                          <AdR addId={"Section_R2"} />
                          {/* <R2GoogleAdsense300x250/> */}
                        </div>
                      )}
                    </div>
                  ))}
                <div className="w-full flex justify-end gap-8">
                  {data?.previous && (
                    <Link
                      href={generateURL(
                        currentPageNo - 1,
                        searchParams.div,
                        searchParams.district,
                        searchParams.upazila
                      )}
                      className=""
                    >
                      <FaAnglesLeft color="#006563" size={24} />
                    </Link>
                  )}

                  {data?.next && (
                    <Link
                      href={generateURL(
                        currentPageNo + 1,
                        searchParams.div,
                        searchParams.district,
                        searchParams.upazila
                      )}
                      className=""
                    >
                      <FaAnglesRight color="#006563" size={24} />
                    </Link>
                  )}
                </div>
              </div>
              <div>
                {/* <R2GoogleAdsense300x250/> */}
                {/* <AddSquare
                  add={{
                    image: sq1,
                    link: "",
                    alt: "Add",
                  }}
                /> */}
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-[970px] mx-auto grid lg:grid-cols-[auto_300px] gap-6">
            <div className="flex flex-col gap-y-9">
              {stories.map((story, index: number) => (
                <div
                  key={index}
                  className="block border-bottom [&:nth-last-child(2)]:before:h-0 lg:before:h-0"
                >
                  <div className="grid grid-cols-3 gap-5">
                    <Link
                      className="block w-full"
                      href={getStoryDetailsTypeHref(story)}
                    >
                      <div className="w-full aspect-video relative">
                        <Image
                          className="object-cover"
                          src={getStoryDetailsImageUrl(story) || ""}
                          alt={story?.title}
                          fill
                        />
                        {/* {
                                                                slug === 'video' && (
                                                                    <PlayIcon />
                                                                )
                                                            } */}
                      </div>
                    </Link>
                    <div className="col-span-2">
                      <Title
                        className="text-xl mb-1"
                        href={getStoryDetailsTypeHref(story)}
                        display_tags={story?.display_tags}
                        isLiveActive={story?.is_live_news}
                      >
                        {story?.title}
                      </Title>
                      <Caption
                        href={getStoryDetailsTypeHref(story)}
                        className="hidden lg:block lg:line-clamp-2"
                      >
                        {story?.excerpt}
                      </Caption>
                    </div>
                  </div>
                  {index + 1 === 6 && (
                    <div className="flex lg:justify-end mt-6 lg:mr-10">
                      {/* <R2GoogleAdsense300x250/> */}
                      <AdR addId={"Section_R1"} />
                      {/* <AddSquare
                        add={{
                          image: sq1,
                          link: "",
                          alt: "",
                        }}
                      /> */}
                    </div>
                  )}
                </div>
              ))}

              <div className="w-full flex justify-end gap-8">
                {data?.previous && (
                  <Link
                    href={generateURL(
                      currentPageNo - 1,
                      searchParams.div,
                      searchParams.district,
                      searchParams.upazila
                    )}
                    className=""
                  >
                    <FaAnglesLeft color="#006563" size={24} />
                  </Link>
                )}

                {data?.next && (
                  <Link
                    href={generateURL(
                      currentPageNo + 1,
                      searchParams.div,
                      searchParams.district,
                      searchParams.upazila
                    )}
                    className=""
                  >
                    <FaAnglesRight color="#006563" size={24} />
                  </Link>
                )}
              </div>
            </div>
            <div>
              {/* <R2GoogleAdsense300x250/> */}
              <AdR addId={"Section_R2"} />
              {/* <AddSquare
                add={{
                  image: sq1,
                  link: "",
                  alt: "Add",
                }}
              /> */}
            </div>
          </div>
        )}
        <div className="mt-6">{/* <GoogleAdsense970x90/> */}</div>
      </div>
      <AnchorAd adId={"Anchor_Ad_Tag"} />
    </Section>
  );
}

export default LocalNewsPage;
