import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from '../../components/Inputs'
import { loginSchema, LoginSchema } from '../../utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

type FormData = LoginSchema
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = handleSubmit(
    (data) => {
      console.log(JSON.stringify(data))
    },
    () => {
      console.log('fails')
    }
  )

  return (
    <div className='bg-orange container'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:pr-10 py-12'>
          {/* lg:col-start-4: chiếm từ cột 4,5 chiếm 2 cột vì lg:col-span-2 */}
          <div className='lg:col-span-2 lg:col-start-4 bg-blue-400'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Nhập</div>
              <Input
                type='email'
                className='mt-6'
                placeholder='Email'
                name='email'
                register={register}
                errorMessage={errors.email?.message}
              />
              <Input
                autoComplete='on'
                type='password'
                className='mt-6'
                placeholder='Password'
                name='password'
                register={register}
                errorMessage={errors.password?.message}
              />

              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
                >
                  Đăng Nhập
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                <Link className='text-red-400 pl-1' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
