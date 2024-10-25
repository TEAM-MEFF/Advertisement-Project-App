import React from 'react'
import guy1 from "../../assets/img/guy1.png"
import { GrPlan } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const UserEvent = () => {
  return (
    <div className='bg-slate-200 mt-14'>
        <div>
            <div className='p-2'>
        <div className='flex bg-white rounded-lg'>
            <img src={guy1} alt="" className='w-14 rounded-full'/>
            <p className='text-center'>Michael Agyemang Prempeh</p>
        </div>
        </div>

        <div className='p-2'>
            <div className='bg-white rounded-lg'>
            <h3 className=' text-xl'>Shortcuts</h3>
            <div className=''>
                <p className='flex gap-5 m-3'><GoGoal  className='text-2xl'/><span className='text-center'>Goals</span></p>
                <p className='flex gap-5 m-3'><GrPlan className='text-2xl'/><span className='text-center'>Plans</span></p>
                <p className='flex gap-5 m-3'><IoStatsChart className='text-2xl'/><span className='text-center'>Stat</span></p>
                <p className='flex gap-5 m-3'><CiSettings className='text-2xl'/><span className='text-center'>Settings</span></p>
            </div>
            </div>
        </div>
        <div className='p-2'>
        <div className='bg-white p-2'>
            <h3 className=' text-xl mb-2'>Events</h3>
            <span className='flex gap-5'>
                <button className='border-2 w-10 h-16 rounded-xl bg-slate-200 '>04 Nov</button>
                <div>
                    <p className='text-lg'>Flash Sales</p>
                    Lorem ipsum dolor sit.
                </div>
            </span>
            <span className='flex gap-5 mt-2'>
                <button className='border-2 w-10 h-16 rounded-xl bg-slate-200 '>24 Dec</button>
                <div>
                    <p className='text-lg'>Flash Sales</p>
                    Lorem ipsum dolor sit.
                </div>
            </span>
        </div>
        </div>
        </div>
    </div>
  )
}

export default UserEvent