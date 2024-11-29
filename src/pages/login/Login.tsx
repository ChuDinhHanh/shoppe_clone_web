import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:pr-10 py-12'>
          {/* lg:col-start-4: chiếm từ cột 4,5 chiếm 2 cột vì lg:col-span-2 */}
          <div className='lg:col-span-2 lg:col-start-4 bg-blue-400'>
            <form className='p-10 rounded bg-white shadow-sm'>
              <div className='text-2xl'>Đăng Nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='p-3 w-full outline-none border border-grey-300 border-gry-300
                focus:border-gray-500 rounded-sm
                focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>Email không tồn tại</div>
              </div>
              <div className='mt-8'>
                <input
                  type='Password'
                  name='Password'
                  className='p-3 w-full outline-none border border-grey-300 border-gry-300
                focus:border-gray-500 rounded-sm
                focus:shadow-sm'
                  placeholder='Password'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>Password không tồn tại</div>
              </div>
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng Nhập
                </button>
              </div>
              <div className="flex items-center justify-center mt-8">
                <span className="text-gray-400">
                  Bạn chưa có tài khoản?
                </span>
                <Link className="text-red-400 pl-1" to='/register'>Đăng ký</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
