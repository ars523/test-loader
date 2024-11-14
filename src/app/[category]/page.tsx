import CategoryPage from '@/Components/common/Category'
import PulseLoader from '@/Components/common/PulseLoader';
import { baseURL } from '@/config/api/api';
import { ICategory } from '@/config/interfaces/interfaces';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import React, { Suspense } from 'react'


import { unstable_cache as cache } from 'next/cache'

type TProps = {
    params: {
        category: string;
    };
};

const getData = cache(
    (category) => fetch(
        `${baseURL}/api/v2/categories?slug=${category}`).then(res => res.json()),
    ['getData'],
    { revalidate: 300 }
)

// export async function generateMetadata() {
//   const data = await getData();
//   return { title: data.title };
// }



export async function generateMetadata(
    { params }: TProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const category = params.category;

    // fetch data
    const res = await getData(category);

    const categoryData: ICategory = res[0];
    return {
        title: categoryData?.meta_title || categoryData?.name,
        description: categoryData?.meta_discriptions,
    }
}


function containsAlphabet(str: string) {
    return /[a-zA-Z]/.test(str);
}


async function fetchStory(contentId: string) {
    const res = await fetch(
        `https://ajpdata.ideahubbd.com/api/AjpData/GetOldData?contentId=${contentId}`,
        {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
            },
            cache: 'no-store'
        }
    );
    if (res.ok) {
        return res.json();
    }
    else {
        notFound();
    }
}


async function Page({ params: { category }, searchParams }: { params: { category: string }, searchParams: { page: string } }) {
    const currentPageNo = searchParams?.page ? parseInt(searchParams.page) : 1;

    if (!containsAlphabet(category)) {
        const story: { newUrl: string | null } = await fetchStory(category);
        redirect(`/${story?.newUrl || ''}`);
    }
    else {
        return (
            <Suspense fallback={<PulseLoader />}>
                <CategoryPage
                    category={category}
                    slug={category}
                    param='category_slug'
                    currentPageNo={currentPageNo}
                />
            </Suspense>
        )
    }
}

export default Page