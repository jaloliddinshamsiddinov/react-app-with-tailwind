import React from 'react'
import { Logo } from '../../../assets'
import { profile } from "../../../assets/nav"
import { navCategories } from '../../../util/constants'
import { FaSearch } from 'react-icons/fa'
import { CiGlobe } from 'react-icons/ci'
import { IoMenu } from 'react-icons/io5'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { VscSettings } from 'react-icons/vsc'

const Nav = () => {
    return (
        <div>

            <div className='md:h-[80px] h-auto flex items-center md:justify-between md:flex-nowrap justify-between flex-wrap border-b mb-[36px] gap-3 py-3'>

                <div className="cursor-pointer">
                    <Logo />
                </div>

                <div className="w-[352.2px] h-[48px] rounded-[40px] border-[1px] shadow font-roboto flex items-center justify-between px-[8px]">
                    <a className='font-[600]' href="#">Anywhere</a>
                    <div className='w-[1px] h-[34px] bg-slate-300' />
                    <a className='font-[600]' href="#">Any week</a>
                    <div className='w-[1px] h-[34px] bg-slate-300' />
                    <a className='text-slate-400' href="#">Add guests</a>
                    <div className='w-[32px] h-[32px] bg-[#FF385C] rounded-full content-center'>
                        <FaSearch style={{ margin: "auto" }} size={'20px'} color='white' />
                    </div>
                </div>

                <div className="flex items-center gap-[34px]">
                    <p className='font-[600] cursor-pointer'>Airbnb your home</p>
                    <CiGlobe size={"20px"} />
                    <div className="w-[77px] h-[42px] rounded-[21px] border-[1px] flex items-center justify-around">
                        <IoMenu size={"20px"} />
                        <img className='cursor-pointer' src={profile} alt=" profile logo" />
                    </div>
                </div>

            </div>
            <div className={`flex justify-between flex-wrap`}>
                {navCategories.map((item, idx) => (
                    <div key={item.title} className='flex flex-col items-center border-b-[2px] border-b-transparent hover:border-b-slate-950 font-bold text-slate-500 hover:text-black cursor-pointer mr-3 mb-3'>
                        <div>{item.icon}</div>
                        <p>{item.title}</p>
                    </div>
                ))}
                <div className='flex items-center float-end ml-auto md:ml-0'>
                    <div className='w-[26px] h-[26px] rounded-full border flex justify-center items-center mr-[21px] cursor-pointer'><MdKeyboardArrowRight /></div>
                    <div className='w-[90.56px] h-[48px] rounded-[12px] border flex items-center justify-center cursor-pointer'>
                        <VscSettings />
                        <p className='ml-[9.75px]'>Filters</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav