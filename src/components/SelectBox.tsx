import { Popover } from '@headlessui/react';
import { CheckboxIcon } from '../assets/icons/CheckboxIcon';
import ChevronDown from '../assets/icons/ChevronDown';
import XIcon from '../assets/icons/XIcon';

interface ISelectBox {
    onSearch?: (value: string) => void;
    data: any[];
    onSelect: (arr: any) => void;
    label: string;
    loading?: boolean;
    total: number;
    showmore?: () => void;
    type?: string;
    selectedItems: any[];
    isDisabled?: boolean;
    position?: string;
    isMulti?: boolean;
    hasSearchIcon?: boolean;
    styles?: any;
    siz?: string;
}

export default function SelectBox({
    onSearch,
    data,
    onSelect,
    label,
    total = 0,
    type,
    selectedItems = [],
    isDisabled = false,
    position="left",
    isMulti =  true,
    hasSearchIcon = false,
    styles,
    siz='L'
}: ISelectBox) {
    const handleCheck = (selected: any) => {
        const alreadyCheckedItem = selectedItems?.find((item) => item?.value === selected?.value);
        let newSelectedItems = [];
        if (alreadyCheckedItem) {
            newSelectedItems = selectedItems?.filter((item) => item?.value !== selected?.value);
        } else newSelectedItems = [...selectedItems, selected];
        onSelect(newSelectedItems);
    };

    const handleClearSelection = () => {
        onSelect([]);
    };


    return (
        <Popover className="relative">
            <Popover.Button disabled={isDisabled} className="disabled:opacity-50 cursor-pointer outline-none focus:outline-none disabled:cursor-not-allowed">
                <div
                    className={`border text-gray-800 ${selectedItems?.length && !hasSearchIcon
                        ? type === 'show-all'
                            ? 'border text-primary-500 border-blue-400 bg-white'
                            : 'border border-primary-500 bg-blue-50'
                        : 'border-gray-200 bg-white'
                        }  rounded w-fit max-w-md flex gap-2 items-center px-3`}
                >
                    <div className={`flex items-center ${styles?.container ? styles?.container : 'flex-wrap'}`}>
                        <div className={`flex items-center ${siz == 'M' ? 'py-[5px]' : 'py-[7px]'} rounded outline-none border-none text-ellipsis truncate bg-transparent text-sm`}>
                            {selectedItems?.length && type !== 'show-all' ? (
                                <div className="flex items-center gap-1">
                                    {!hasSearchIcon && <span className="font-semibold">{label}: </span>} <span className='text-ellipsis truncate max-w-[80px]'>{selectedItems?.[0]?.name}</span>
                                </div>
                            ) : (
                                <span className='text-gray-500 text-ellipsis truncate'>{label}</span>
                            )}
                        </div>
                        {selectedItems?.length > 1 && type !== 'show-all' && (
                            <div className="h-6 ml-2 w-fit px-2 border border-gray-300 rounded bg-gray-50 flex items-center justify-center">
                                +{selectedItems?.length - 1}
                            </div>
                        )}
                    </div>
                    {selectedItems?.length && type !== 'show-all' ? (
                        <div 
                            onClick={(e) => {
                                e.preventDefault();
                                handleClearSelection();
                            }}
                        >
                            <XIcon
                            
                            />
                            </div>
                        
                    ) : (
                        !hasSearchIcon && <ChevronDown />
                    )}
                </div>
            </Popover.Button>
            <Popover.Panel className={`absolute z-10 bg-white w-64 shadow-md rounded-lg ${position == "left" ? 'left-0 ' : 'right-0'}`} >
                <div className="w-full pt-3 border-b border-gray-300">
                   
                    <div className="max-h-[193px] overflow-auto">
                        
                        {data?.map((item, index) => {
                            let isChecked = !!selectedItems?.find((selectedItem) => selectedItem?.value === item?.value || selectedItem?.value === 'all') 
                            return (
                                <label
                                    onClick={() => handleCheck(item)}
                                    key={index}
                                    className={`flex gap-2 py-2 cursor-pointer hover:bg-blue-50 px-4 items-center h-9
                                        ${isChecked ? 'inline-block' : ''}
                                        ${item.disabled ? 'hover:bg-transparent pointer-events-none cursor-not-allowed opacity-50' : ''}`}
                                >
                                    <span className='relative w-5 h-5 min-w-[20px] rounded border border-gray-300'>
                                       {isChecked && <span className='absolute inset-0 w-full h-full'><CheckboxIcon /></span>}
                                    </span>
                                    <div className="font-normal text-sm text-gray-800 text-ellipsis truncate">{item?.name}</div>
                                </label>
                            );
                        })}
                        
                    </div>
                </div>
                <div className="flex justify-between px-4 py-2 text-sm font-normal">
                    <p
                        onClick={handleClearSelection}
                        className={`${selectedItems?.length > 0 ? ' pointer-events-auto cursor-pointer text-primary-500' : 'pointer-events-none text-gray-400'
                            }`}
                    >
                        {' '}
                        {"Clear selection"}
                    </p>
                    <p className="text-gray-500">
                        {`${selectedItems?.length || 0}/${total} Selected`}
                    </p>
                </div>
            </Popover.Panel>
        </Popover>
    );
}
