import { Building2, ClipboardCheck } from 'lucide-react'
import React from 'react'

function SideBar() {
    return (
        <>
            <div className='hidden md:flex flex-col border bg-white min-h-svh w-[15%] min-w-[12em] pt-5 space-y-3'>
                <div className='text-xl cursor-pointer bg-pastel-light-blue hover:bg-pastel-blue p-2 mx-4 rounded-lg font-[500] flex items-center justify-center gap-3'>
                    <Building2 size={23} />
                    <p>Companies</p>
                </div>
                <div className='text-xl cursor-pointer bg-pastel-light-blue hover:bg-pastel-blue p-2 mx-4 rounded-lg font-[500] flex items-center justify-center gap-3'>
                    <ClipboardCheck size={23} />
                    <p>Registered</p>
                </div>
            </div>
            <div className='flex md:hidden gap-3 px-5 py-4 border-b'>
                <div className=' cursor-pointer bg-pastel-light-blue hover:bg-pastel-blue p-2 rounded-lg font-[500] flex items-center justify-center gap-3'>
                    <Building2 strokeWidth={1} size={23} />
                    <p>Companies</p>
                </div>
                <div className=' cursor-pointer bg-pastel-light-blue hover:bg-pastel-blue p-2 rounded-lg font-[500] flex items-center justify-center gap-3'>
                    <ClipboardCheck strokeWidth={1} size={23} />
                    <p>Registered</p>
                </div>
            </div>
        </>
    )
}

export default SideBar