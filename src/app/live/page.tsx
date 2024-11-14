import Section from '@/Components/common/Section'
import TopAdd from '@/Components/common/TopAdd'
import { id } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LivePage() {
    const data = [
        {
            id: 1,
            title: 'কেমন হতে পারে চেন্নাইয়ের উইকেট কেমন হতে পারে চেন্নাইয়ের উইকেট',
            image: {
                url: 'https://ajpbucket.ideahubbd.com/original_images/prothomalo-bangla2024-09-19c4prv.jpg'
            },
            content: "<p data-block-key=\"b3tri\">চেন্নাইয়ের চিদাম্বরম স্টেডিয়ামে আজ দুই ম্যাচ টেস্ট সিরিজের প্রথম ম্যাচে ভারতের মুখোমুখি বাংলাদেশ।</p><p data-block-key=\"6he4c\">পাকিস্তানে টেস্ট সিরিজ জিতে আসা বাংলাদেশ দল <a href=\"https://www.prothomalo.com/sports/cricket/fm4ybifbt7\">এই ম্যাচে ভালো করায় আত্মবিশ্বাসী।</a> ভারতের অধিনায়ক রোহিত শর্মাও বলেছেন, <a href=\"https://www.prothomalo.com/sports/cricket/6myftysv2t\">ভালো ক্রিকেট খেলতে চায় তাঁর দল।</a></p><p data-block-key=\"4is9s\">প্রথম আলোর প্রতিনিধি মোহাম্মদ জুবাইর জানিয়েছেন,<a href=\"https://www.prothomalo.com/sports/cricket/vlzv6l0w5h\"> ভারতকে হারাতে এর চেয়ে ভালো মঞ্চ আর হয় না।</a> চাইলে পরিসংখ্যানের আলোয় <a href=\"https://www.prothomalo.com/sports/cricket/gbhh96suj1\">ভারত–বাংলাদেশ মুখোমুখি হওয়ার অতীত চিত্র</a>ও দেখে নিতে পারেন।</p>",
            created_at: "2024-09-19T11:10:40.905811+06:00",
            updated_at: "2024-09-19T11:20:30.548411+06:00"
        },
        {
            id: 2,
            title: 'কেমন হতে পারে চেন্নাইয়ের উইকেট',
            image: {
                url: 'https://ajpbucket.ideahubbd.com/original_images/prothomalo-bangla2024-09-19c4prv.jpg'
            },
            content: "<p data-block-key=\"b3tri\">চেন্নাইয়ের চিদাম্বরম স্টেডিয়ামে আজ দুই ম্যাচ টেস্ট সিরিজের প্রথম ম্যাচে ভারতের মুখোমুখি বাংলাদেশ।</p><p data-block-key=\"6he4c\">পাকিস্তানে টেস্ট সিরিজ জিতে আসা বাংলাদেশ দল <a href=\"https://www.prothomalo.com/sports/cricket/fm4ybifbt7\">এই ম্যাচে ভালো করায় আত্মবিশ্বাসী।</a> ভারতের অধিনায়ক রোহিত শর্মাও বলেছেন, <a href=\"https://www.prothomalo.com/sports/cricket/6myftysv2t\">ভালো ক্রিকেট খেলতে চায় তাঁর দল।</a></p><p data-block-key=\"4is9s\">প্রথম আলোর প্রতিনিধি মোহাম্মদ জুবাইর জানিয়েছেন,<a href=\"https://www.prothomalo.com/sports/cricket/vlzv6l0w5h\"> ভারতকে হারাতে এর চেয়ে ভালো মঞ্চ আর হয় না।</a> চাইলে পরিসংখ্যানের আলোয় <a href=\"https://www.prothomalo.com/sports/cricket/gbhh96suj1\">ভারত–বাংলাদেশ মুখোমুখি হওয়ার অতীত চিত্র</a>ও দেখে নিতে পারেন।</p>",
            created_at: "2024-09-19T11:10:40.905811+06:00",
            updated_at: "2024-09-19T11:20:30.548411+06:00"
        },
        {
            id: 3,

            title: 'স্বাগতম',
            image: {
                url: 'https://ajpbucket.ideahubbd.com/original_images/prothomalo-bangla2024-09-19c4prv.jpg'
            },
            content: "<p data-block-key=\"b3tri\">চেন্নাইয়ের চিদাম্বরম স্টেডিয়ামে আজ দুই ম্যাচ টেস্ট সিরিজের প্রথম ম্যাচে ভারতের মুখোমুখি বাংলাদেশ।</p><p data-block-key=\"6he4c\">পাকিস্তানে টেস্ট সিরিজ জিতে আসা বাংলাদেশ দল <a href=\"https://www.prothomalo.com/sports/cricket/fm4ybifbt7\">এই ম্যাচে ভালো করায় আত্মবিশ্বাসী।</a> ভারতের অধিনায়ক রোহিত শর্মাও বলেছেন, <a href=\"https://www.prothomalo.com/sports/cricket/6myftysv2t\">ভালো ক্রিকেট খেলতে চায় তাঁর দল।</a></p><p data-block-key=\"4is9s\">প্রথম আলোর প্রতিনিধি মোহাম্মদ জুবাইর জানিয়েছেন,<a href=\"https://www.prothomalo.com/sports/cricket/vlzv6l0w5h\"> ভারতকে হারাতে এর চেয়ে ভালো মঞ্চ আর হয় না।</a> চাইলে পরিসংখ্যানের আলোয় <a href=\"https://www.prothomalo.com/sports/cricket/gbhh96suj1\">ভারত–বাংলাদেশ মুখোমুখি হওয়ার অতীত চিত্র</a>ও দেখে নিতে পারেন।</p>",
            created_at: "2024-09-19T11:10:40.905811+06:00",
            updated_at: "2024-09-19T11:20:30.548411+06:00"
        },
    ]
    return (
        <Section>
            <TopAdd />
            <div className="container">
                <div className='grid grid-cols-12 gap-6'>
                    <div className=' lg:col-span-3'>
                        {
                            data.map((item, index) => (
                                <Link href={`#section${item.id}`} key={index} className='group'>
                                    <div className='group-last:border-white group-last:pb-0 relative pb-5 pl-4 border-l before:absolute before:left-0 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-gray-200 before:rounded-full group-hover:before:bg-red-600 before:transition-all duration-300'>
                                        <div className='font-bold leading-none -mt-1 mb-1'>
                                            ১২: ০৪
                                        </div>
                                        <div>
                                            {item.title}
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className='col-span-5'>
                        {
                            data.map((item, index) => (
                                <div key={index} id={`section${item.id}`} className='mb-10'>
                                    <div className='border-red-600 border rounded-xl w-fit px-5 mb-4'>
                                        ১২: ০৪
                                    </div>
                                    <div className=' relative ml-2 border-l border-gray-300 pl-6 pt-1 before:absolute before:w-4 before:h-4 before:bg-red-600 before:rounded-full before:left-0 before:bottom-0 before:-translate-x-2'>
                                        <div className='mb-4'>
                                            <h2 className='text-xl font-bold'>{item.title}</h2>
                                        </div>
                                        <div className='mb-5'>
                                            {
                                                item.image ? (
                                                    <Image width={100} height={100} src={item.image.url} alt={item.title} className='w-full h-auto' />
                                                ) : null
                                            }
                                        </div>
                                        <div className='story-details text-lg leading-[30px] text-[#000000] mb-8 story-details' dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-span-4 border'>

                    </div>
                </div>
            </div>
        </Section>
    )
}

export default LivePage