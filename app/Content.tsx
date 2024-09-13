import { CalendarClock, ExternalLink, FileText, Link, Mails } from 'lucide-react'
import React from 'react'

function Content() {
    return (
        <div className='min-h-svh bg-white md:pt-5 pt-6 md:w-[85%] md:px-8 px-5'>
            <CompanyDetailCard />
        </div>
    )
}

function CompanyDetailCard() {
    return (
        <div className='border bg-white md:flex md:flex-row flex-col px-5 md:px-7 py-5 rounded-lg'>
            <div className='flex-1'>
                <p>24 April 2024</p>
                <p className='text-2xl pb-3'>Company Name</p>
                <div className='flex gap-2'>
                    <div className='bg-pastel-yellow text-lg px-3 flex justify-center items-center gap-1 rounded-[5px]'>
                        <FileText strokeWidth={1} size={18} />
                        <p className=''>Details</p>
                    </div>
                    <div className=' bg-pastel-red text-lg px-3 flex justify-center items-center gap-1 rounded-[5px]'>
                        <CalendarClock strokeWidth={1} size={18} />
                        <p className=''>Last Date</p>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-col gap-3 mt-5 md:mt-0 '>
                <div className='flex-1 md:bg-pastel-blue cursor-pointer flex items-center gap-3 border md:px-3 md:py-0 p-1 rounded-lg'>
                    <div className=' bg-pastel-blue md:p-0 p-1 rounded-lg'>
                        <ExternalLink className='' strokeWidth={1} size={28} />
                    </div>
                    <p className=' text-nowrap'>Apply Now</p>
                </div>
                <div className='flex-1 md:bg-pastel-gray cursor-pointer flex items-center gap-3 border md:px-3 md:py-0 p-1 rounded-lg'>
                    <div className=' bg-pastel-gray md:p-0 p-1 rounded-lg'>
                        <Mails className='' strokeWidth={1} size={28} />
                    </div>
                    <p className=' text-nowrap'>View EML</p>
                </div>
            </div>
        </div>
    )
}

export default Content