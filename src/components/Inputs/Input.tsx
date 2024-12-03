import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type?: HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: HTMLInputAutoCompleteAttribute
}

export default function Input({
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  rules,
  autoComplete
}: Readonly<Props>) {
  return (
    <div className={className}>
      <input
        autoComplete={autoComplete}
        type={type}
        className='p-3 w-full outline-none border border-grey-300 border-gry-300
                focus:border-gray-500 rounded-sm
                focus:shadow-sm'
        placeholder={placeholder}
        {...register(name, rules)}
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}
