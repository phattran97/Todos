import { toast } from 'react-toastify';
import ErrorIcon from '../assets/icons/ErrorIcon';
import CheckCircleIcon from '../assets/icons/CheckCircleIcon';

export const Toastify = {
    success: (title: string) =>
        toast.success(
            <div className="flex gap-2 justify-start items-start text-gray-800">
                <span className="flex-none self-center text-green-500">
                    <CheckCircleIcon />
                </span>
                <div>
                    <p>{title}</p>
                </div>
            </div>,
            {
                type: 'default',
                closeButton: true,
                hideProgressBar: true,
                autoClose: 3000,
                closeOnClick: true,
                className: 'w-[300px] h-9 p-2 !bg-green-50 border border-green-300 text-sm ml-6 my-2 font-normal text-gray-800 !rounded-lg !text-green-500 text-xs',
            }
        ),
    error: (title: string) =>
        toast.error(
            <div className="flex gap-1 justify-start items-start text-gray-800">
                <div className='min-w-[16px] mt-0.5'><ErrorIcon width={16} height={16} /></div>
                <div>
                    <p>{title}</p>
                </div>
            </div>,
            {
                type: 'default',
                closeButton: true,
                hideProgressBar: true,
                autoClose: 3000,
                closeOnClick: true,
                className: 'bg-red-50 border border-red-300 text-sm ml-6 my-1 font-normal text-gray-800 !rounded-lg',
            }
        ),
   
};
