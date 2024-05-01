import tick from './assets/tick.png'

const Pricing = () => {
    return ( 
        <section  className=" mx-[1.5rem] h-full">
            <h1 className=" mt-[2rem] font-bold text-[1.5rem] text-center">Pricing</h1>
            <p className=" md:w-[60%] mx-auto mt-3 text-[1.2rem] text-center">Pricing is the process whereby a business sets the price at which it will sell its products and services, and may be part of the business marketing plan.</p>

            <div className=" md:flex justify-around gap-[3rem] mt-[3rem] md:mt-[5rem]">
                <div className=" bg-[#F0F7FD] md:w-[35%] md:h-[41.5rem]">
                    <h1 className=" font-bold text-[1.2rem] mt-5 md:ml-8 ml-4 pt-3">Basic</h1>
                    <p className=" text-[1.2rem] mt-3 md:ml-8 ml-4">Start with a first step</p>

                    <div className=' flex gap-[0.5rem] mt-10 ml-2 md:ml-5'>
                        <img src={tick} alt="" className=' w-[2rem] h-[2rem]' />
                        <div>
                            <h1 className=' text-[#4197E0] font-semibold'>Prototype</h1>
                            <p className=' mt-2 text-[1.0rem]'>A simple plan for simple needsd. Use one of our design to create a contract.</p>
                        </div>
                    </div>
                    <hr className=' border-[#9E9E9E] w-[90%] mx-[1.25rem] mt-4'/>

                    <div className=' flex gap-[0.5rem] mt-10 ml-2 md:ml-5'>
                        <img src={tick} alt="" className=' w-[2rem] h-[2rem]' />
                        <div>
                            <h1 className=' text-[#4197E0] font-semibold'>App Design</h1>
                            <p className=' mt-2 text-[1.0rem]'>A simple plan for simple needsd. Use one of our design to create a contract.</p>
                        </div>
                    </div>
                    <hr className=' border-[#9E9E9E] w-[90%] mx-[1.25rem] mt-4'/>

                    <div className=' flex gap-[0.5rem] mt-10 ml-2 md:ml-5'>
                        <img src={tick} alt="" className=' w-[2rem] h-[2rem]' />
                        <div>
                            <h1 className=' text-[#4197E0] font-semibold'>Web Design</h1>
                            <p className=' mt-2 text-[1.0rem]'>A simple plan for simple needsd. Use one of our design to create a contract.</p>
                        </div>
                    </div>
                    <hr className=' border-[#9E9E9E] w-[90%] mx-[1.25rem] mt-4'/>

                    <div className=' flex gap-[0.5rem] mt-10 ml-2 md:ml-5'>
                        <img src={tick} alt="" className=' w-[2rem] h-[2rem]' />
                        <div>
                            <h1 className=' text-[#4197E0] font-semibold'>Interaction</h1>
                            <p className=' mt-2 text-[1.0rem] pb-8'>A simple plan for simple needsd. Use one of our design to create a contract.</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#F0F7FD] md:w-[35%] mt-[5rem] md:mt-0 md:h-[41.5rem]">
                    <h1 className=" font-bold text-[1.2rem] mt-5 md:ml-8 ml-4 pt-3">Pro</h1>
                    <p className=" text-[1.2rem] mt-3 md:ml-8 ml-4">Make things happen</p>

                    <div className=' flex gap-[0.5rem] mt-10 ml-2 md:ml-5'>
                        <img src={tick} alt="" className=' w-[2rem] h-[2rem]' />
                        <div>
                            <h1 className=' text-[#4197E0] font-semibold'>Prototype</h1>
                            <p className=' mt-2 text-[1.0rem]'>A simple plan for simple needsd. Use one of our design to create a contract.</p>
                        </div>
                    </div>
                    <hr className=' border-[#9E9E9E] w-[90%] mx-[1.25rem] mt-4'/>

                    <div className=' flex gap-[0.5rem] mt-10 ml-2 md:ml-5'>
                        <img src={tick} alt="" className=' w-[2rem] h-[2rem]' />
                        <div>
                            <h1 className=' text-[#4197E0] font-semibold'>App Design</h1>
                            <p className=' mt-2 text-[1.0rem]'>A simple plan for simple needsd. Use one of our design to create a contract.</p>
                        </div>
                    </div>
                    <hr className=' border-[#9E9E9E] w-[90%] mx-[1.25rem] mt-4'/>

                    <div className=' flex gap-[0.5rem] mt-10 ml-2 md:ml-5'>
                        <img src={tick} alt="" className=' w-[2rem] h-[2rem]' />
                        <div>
                            <h1 className=' text-[#4197E0] font-semibold'>Web Design</h1>
                            <p className=' mt-2 text-[1.0rem]'>A simple plan for simple needsd. Use one of our design to create a contract.</p>
                        </div>
                    </div>
                    <hr className=' border-[#9E9E9E] w-[90%] mx-[1.25rem] mt-4'/>

                    <div className=' flex gap-[0.5rem] mt-10 ml-2 md:ml-5'>
                        <img src={tick} alt="" className=' w-[2rem] h-[2rem]' />
                        <div>
                            <h1 className=' text-[#4197E0] font-semibold'>Interaction</h1>
                            <p className=' mt-2 text-[1.0rem] pb-8'>A simple plan for simple needsd. Use one of our design to create a contract.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Pricing;