import { AiOutlineArrowDown } from 'react-icons/ai';

const Faq = () => {
    return ( 
        <section  className=' mx-[1.5rem] md:mx-[5rem] md:my-[5rem] mt-7'>
            <h1 className=" font-bold text-center text-[1.5rem]">FAQ</h1>
            <p className=" text-center md:w-[55%] md:mx-auto md:text-center mt-4 text-[1rem]">The purpose of a FAQ is generally to provide information on frequent questions or concerns. however, the format is a useful means of organizing information, and text.</p>

            <div className=' md:flex justify-between md:mx-[5rem]'>
                <div>
                    <div>
                        <h1 className=' font-bold mt-10 text-[#268940]'>01</h1>
                        <div className=' flex justify-between'>
                            <p className=' font-normal mt-3'>Can you design My website</p>
                            <AiOutlineArrowDown className=' ml-[1rem] md:ml-[13rem] cursor-pointer mt-3'/>
                        </div>
                        <hr className=' border-[0.04rem] mt-2 border-black' />
                    </div>
                    <div>
                        <h1 className=' font-bold mt-4 text-[#268940]'>02</h1>
                        <div className=' flex justify-between'>
                            <p className=' font-normal mt-3'>Can you design My website</p>
                            <AiOutlineArrowDown className=' ml-[1rem] md:ml-[13rem] cursor-pointer mt-3'/>
                        </div>
                        <hr className=' border-[0.04rem] mt-2 border-black' />
                    </div>
                    <div>
                        <h1 className=' font-bold mt-4 text-[#268940]'>03</h1>
                        <div className=' flex justify-between'>
                            <p className=' font-normal mt-3'>Can you design My website</p>
                            <AiOutlineArrowDown className=' ml-[1rem] md:ml-[13rem] cursor-pointer mt-3'/>
                        </div>
                        <hr className=' border-[0.04rem] mt-2 border-black' />
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className=' font-bold mt-4 md:mt-10 text-[#268940]'>04</h1>
                        <div className=' flex justify-between'>
                            <p className=' font-normal mt-3'>Can you design My website</p>
                            <AiOutlineArrowDown className=' ml-[1rem] md:ml-[13rem] cursor-pointer mt-3'/>
                        </div>
                        <hr className=' border-[0.04rem] mt-2 border-black' />
                    </div>
                    <div>
                        <h1 className=' font-bold mt-4 text-[#268940]'>05</h1>
                        <div className=' flex justify-between'>
                            <p className=' font-normal mt-3'>Can you design My website</p>
                            <AiOutlineArrowDown className=' ml-[1rem] md:ml-[13rem] cursor-pointer mt-3'/>
                        </div>
                        <hr className=' border-[0.04rem] mt-2 border-black' />
                    </div>
                    <div>
                        <h1 className=' font-bold mt-4 text-[#268940]'>06</h1>
                        <div className=' flex justify-between'>
                            <p className=' font-normal mt-3'>Can you design My website</p>
                            <AiOutlineArrowDown className=' ml-[1rem] md:ml-[13rem] cursor-pointer mt-3'/>
                        </div>
                        <hr className=' border-[0.04rem] mt-2 border-black' />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Faq;