'use client'
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {FormType, ModalType} from "@/types/FormType";
import {formApi} from "@/api/submitForm";
const ModalForm = ({open, onClose}: ModalType) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm<FormType>({
        mode: "all"
    })
    const onSubmit:SubmitHandler<FormType> = async (data:FieldValues) => {
        const payload: FormType = {
            Name: data.Name,
            Phone: data.Phone,
            Email: data.Email,
            Company: data.Company,
            Position: data.Position,
            Message: data.Message
        }
        const response = await formApi.postForm(payload)
        console.log(response, 'response')
        reset()
        onClose()
    };

    const phoneRegex: RegExp = /^(?:\+375|80)(?:\d{9})$/;
    const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return(
        <div className={`fixed z-10 backdrop-blur-lg inset-0 flex justify-center items-center transition-colors ${open ? 'block' : 'hidden'}`}>
            <div className='bg-black p-14 rounded-2xl relative'>
            <div className='text-left'>
                <div className='green-custom mb-7 text-2xl'>Contact us</div>
                <div className='text-5xl mb-5'>Send us a message</div>
                <div className='text-sm'>We are always here to help. Our consultation is totally free!</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='py-10'>
                <div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <input
                                    {...register('Name', {
                                        required: 'Name is required !',
                                        minLength: {
                                            value: 2,
                                            message: 'Minimum 2 symbols'
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: 'Maximum 20 symbols'
                                        }
                                    })}
                                    placeholder='Name*'
                                    type='text'
                                    className={`w-full py-3 px-4 rounded form-input ${errors?.Name && 'border border-red-600'}`}
                                />
                                {errors?.Name && <div className='pt-5 text-red-700'>{errors?.Name?.message}</div>}
                            </div>
                            <div>
                                <input
                                    {...register('Phone', {
                                        required: 'Phone is required !',
                                        pattern: {
                                            value: phoneRegex,
                                            message: 'Please enter a valid phone number'
                                        }
                                    })}
                                    placeholder='Phone*'
                                    type='tel'
                                    className={`w-full py-3 px-4 rounded form-input ${errors?.Phone && 'border border-red-600'}`}
                                />
                                {errors?.Phone && <div className='pt-5 text-red-700'>{errors?.Phone?.message}</div>}
                            </div>
                            <div>
                                <input
                                    {...register('Email', {
                                        pattern: {
                                            value: emailRegex,
                                            message: 'Please enter valid E-mail !'
                                        }
                                    })}
                                    placeholder='E-mail'
                                    className={`w-full py-3 px-4 rounded form-input ${errors?.Email && 'border border-red-600'}`}
                                />
                                {errors?.Email && <div className='pt-5 text-red-700'>{errors?.Email?.message}</div>}
                            </div>
                            <div>
                                <input
                                    {...register('Company', {
                                        required: 'Company is required !',
                                        minLength: {
                                            value: 2,
                                            message: 'Minimum 2 symbol'
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: 'Maximum 50 symbols'
                                        }
                                    })}
                                    placeholder='Company*'
                                    className={`w-full py-3 px-4 rounded form-input ${errors?.Company && 'border border-red-600'}`}
                                />
                                {errors?.Company && <div className='pt-5 text-red-700'>{errors?.Company?.message}</div>}
                            </div>
                            <div>
                                <input
                                    {...register('Position', {
                                        minLength: {
                                            value: 2,
                                            message: 'Minimum 2 symbol'
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: 'Maximum 50 symbols'
                                        }
                                    })}
                                    placeholder='Position'
                                    className={`w-full py-3 px-4 rounded form-input ${errors?.Position && 'border border-red-600'}`}
                                />
                                {errors?.Position && <div className='pt-5 text-red-700'>{errors?.Position?.message}</div>}
                            </div>
                        </div>
                        <div>
                            <textarea
                                {...register('Message', {
                                    minLength: {
                                        value: 2,
                                        message: 'Minimum 2 symbols'
                                    },
                                    maxLength: {
                                        value: 300,
                                        message: 'Maximum 300 symbols'
                                    }
                                })}
                                placeholder={'I need help. I need advice on labeling equipment.'}
                                className={`w-full py-3 px-4 rounded form-textarea ${errors?.Message ? 'border border-red-600 h-5/6' : 'h-full'}`}
                            />
                            {errors?.Message && <div className='my-2 text-red-700 text-center'>{errors?.Message?.message}</div>}
                        </div>
                    </div>
                    <div className='py-5'>
                        <button disabled={!isValid} className="bg-green-500 hover:bg-green-600 disabled:bg-green-900 text-xl text-white py-3 px-5 rounded w-full">
                            Send
                        </button>
                    </div>
                    <div className='text-center'>
                        <div className='flex gap-5 items-center justify-center'>
                            <input
                                {...register('Checkbox', {
                                    required: 'Checkbox is required !',
                                    shouldUnregister: true
                                })}
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-gray-700-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <div>I have read and accepted Privacy Policy</div>
                        </div>
                    </div>
                </div>
            </form>
                <button className='absolute top-5 right-5' onClick={() => {
                    onClose()
                    reset()
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 hover:scale-110 transition-all">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ModalForm