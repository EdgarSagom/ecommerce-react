import { CgSpinner } from 'react-icons/cg'

function Loader () {
  return (
    <div>
      <div role='status' className='absolute top-0 right-0 bottom-0 left-0 m-auto w-[3em] h-10 md:h-32 z-50'>
        <CgSpinner className='w-14 h-14 text-orange-600 animate-spin' />
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default Loader
