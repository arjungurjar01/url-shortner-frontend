import { useSelector } from 'react-redux';
import Urlform from '../components/Urlform'
import { useNavigate } from '@tanstack/react-router';

function HomePage() {
    const {isAuthenticated} = useSelector((state) => state.auth);
    const navigate = useNavigate();
  return (
    <div className='px-10 rounded-lg bg-[#fef4e9] shadow flex flex-col md:flex-row justify-around items-center w-[90vw] h-[90vh] md:h-[80vh] mt-4 md:mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-20'>
        <div className='flex flex-col items-start gap-4 w-full md:w-[60%] lg:w-[50%] '>
             <h1 className='text-black text-4xl md:text-5xl lg:text-6xl font-bold font-sans '>Simplify Your Links. Share Smarter. Track Better.</h1>
             <p className='text-gray-900 text-md md:text-lg font-normal font-sans'>Shorten long URLs into clean, easy-to-share links in seconds. Our fast and reliable URL shortener helps you manage, track, and optimize every link you share — perfect for social media, marketing, and more.</p>
             {!isAuthenticated && <div className='flex gap-2 md:gap-1 lg:gap-2 items-center bg-[#1f1f1f] p-2 lg:p-4 rounded-lg mt-4'> <span className='text-white text-sm lg:text-md font-normal'>Login for Custom ShortUrl</span>
                                <button onClick={()=>navigate({to:"/auth"})}  className='cursor-pointer text-white bg-blue-600 rounded-md px-4 py-2 w-20 hover:-translate-y-1 duration-300 transition-transform'>login</button>
              </div>}
        </div>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <Urlform/>
      </div>
    </div>
  )
}

export default HomePage