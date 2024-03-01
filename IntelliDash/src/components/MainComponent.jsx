import React from 'react'
import Header from './Header';
import Chart from './Chart';

const MainComponent = () => {
  return (
    <div className='w-full h-[90.8vh]'>
      <Header />
      <div className='w-full bg-slate-200 h-full p-10'>
        <div className='flex gap-12'>
        <div className='w-5/12 rounded-lg p-8 h-36 border border-black'>
          <h3 className='text-[20px]'>Hey 👋  Saket</h3>
          <p className='text-slate-400'>This is the amount you have saved in this month $100</p>
        </div>
        <div className='w-5/12 rounded-lg p-8 h-36 border border-black'>
          <h3>You this is your balancee</h3>
          <p>This is the amount you have saved in this month</p>
        </div>
        </div>

        <div className=' items-center flex flex-row  w-full'>
        <div className='left w-[60%]'>
        <h2 className='mt-5 text-lg font-semibold'>Expenses</h2>
        <Chart className="w-10" />
        </div>
        <div className=' w-[40%] p-10 space-y-7'>
        <div className='w-full rounded-lg p-8 h-36 border border-black'>
          <h3 className='text-[20px]'>Paid To Mom</h3>
          <p className='text-slate-400'>This is the amount you have paied in this month $50</p>
        </div>
        <div className='w-full rounded-lg p-8 h-36 border border-black'>
          <h3 className='text-[20px]'>Current balancee</h3>
          <p className='text-slate-400'>This is the amount you have left with $20</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MainComponent;