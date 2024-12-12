import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { Omit, omit } from 'lodash'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { registerAccount } from '../../apis/auth.api'
import Input from '../../components/Inputs'
import { ResponseApi } from '../../types/untils.type'
import { registerSchema, RegisterSchema } from '../../utils/rules'
import { isAxiosUnprocessableEntityError } from '../../utils/untils'

type FormData = RegisterSchema
export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        // Thành công
        console.log(data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseApi<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
          // Type - 2
          // if (formError?.email) {
          //   setError('email', {
          //     message: formError.email,
          //     type: 'Server'
          //   })
          // }
          // if (formError?.password) {
          //   setError('password', {
          //     message: formError.password,
          //     type: 'Serve'
          //   })
          // }
        }
      }
    })
  })

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
