import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from '../../components/Inputs'
import { registerSchema, RegisterSchema } from '../../utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

type FormData = RegisterSchema
export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })

  const onSubmit = handleSubmit(
    (data) => {
      // Validate
      console.log('data', data)
    },
    () => {
      // Invalidate
      const password = getValues('password')
      console.log('password', password)
    }
  )

  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:pr-10 py-12'>
          {/* lg:col-start-4: chiếm từ cột 4,5 chiếm 2 cột vì lg:col-span-2 */}
          <div className='lg:col-span-2 lg:col-start-4 bg-blue-400'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Ký</div>
              <Input
                placeholder='Email'
                type='email'
                name={'email'}
                className='mt-6'
                register={register}
                errorMessage={errors.email?.message}
              />
              <Input
                autoComplete='on'
                placeholder='Password'
                type='password'
                name={'password'}
                className='mt-6'
                register={register}
                errorMessage={errors.password?.message}
              />
              <Input
                autoComplete='on'
                placeholder='Confirm'
                type='password'
                name={'confirm_password'}
                className='mt-6'
                register={register}
                errorMessage={errors.confirm_password?.message}
              />
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng Ký
                </button>
              </div>
              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='text-red-400 pl-1' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
