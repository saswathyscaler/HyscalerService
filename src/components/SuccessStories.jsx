import React from 'react'

const SuccessStories = () => {
  return (
    <main className="bg-[#0064B0] w-full 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10  2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 z-30 mb-5">
      <div className='text-white mx-auto text-center'>
        <h1>Success Stories (Case Studies)</h1>
        <p>
          Discover how HyScaler has helped businesses like yours succeed with
          our software solutions. Explore some of our success stories:
        </p>
      </div>
      <div className="w-[75%] flex justify-between rounded-lg bg-white m-4 my-10">
        <div className=" w-[50%] flex flex-col  gap-y-4 m-5  p-4">
          <h1>
            End-to-End Digital Transformation for DTY’s Telemedicine Platform
          </h1>
          <p>
            DTY, an abbreviation to ensure confidentiality, aims to offer
            top-tier medical care by revolutionizing telemedicine, connecting
            patients with renowned doctors and therapists across America.
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </main>
  );
}

export default SuccessStories
