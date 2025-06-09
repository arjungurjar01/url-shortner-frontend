import Urlform from '../components/Urlform'

function HomePage() {
  return (
    <div className='p-10 rounded-md flex flex-col items-center justify-center h-screen'>
    {/* <h1 className='text-2xl text-green-400 font-bold mb-4'>Url Shortroom </h1> */}
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <Urlform/>
      </div>
    </div>
  )
}

export default HomePage