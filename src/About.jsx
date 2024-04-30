import esc1 from './assets/Ellipse1.png'
import esc2 from './assets/Ellipse2.png'


const About = () => {
  return (
    <div className=' bg-[#77B7E91C] w-full'>
      <div className=' md:flex justify-between md:gap-[15rem] md:mx-[10rem] mx-[1.5rem]'>
        <img src={esc1} alt="" className=' w-[25rem] md:my-[3rem] mt-10 md:py-0 py-7' />
        <div>
          <h1 className=' font-bold md:text-[1.6rem] md:mt-[10rem]'>Not just your regular design agency</h1>
          <p className=' mb-5 md:mb-0'>Quis ipsoum suspendises uitrices gravida rusus commodo viverra maecenas accumsan. Quis ipsoum suspendises uitrices gravida rusus commodo viverra maecenas accumsan</p>
        </div>
      </div>

      

      <hr className=' border-[#8F815E] border-[0.07rem] w-[100%]'/>

      <div className=' md:flex justify-between md:gap-[15rem] md:mx-[10rem] mx-[1.5rem] '>
        <div>
          <h1 className=' font-bold md:text-[1.6rem] md:mt-[10rem] mt-5 '>Not just your regular design agency</h1>
          <p>Quis ipsoum suspendises uitrices gravida rusus commodo viverra maecenas accumsan. Quis ipsoum suspendises uitrices gravida rusus commodo viverra maecenas accumsan</p>
        </div>
        <img src={esc2} alt="" className=' md:my-[3em] w-[25rem] md:py-0 py-7'/>
      </div>
    </div>
  )
}

export default About;