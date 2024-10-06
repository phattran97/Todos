import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import XIcon from "../../assets/icons/XIcon";

interface DialogProps {
  isOpen: boolean;
  onCloseModal?: (e?: any) => void;
  title?: string | React.ReactNode;
  child?: React.ReactNode;
  subTitle?: string;
  actionName: string;
}

const DialogComponent: React.FC<DialogProps> = ({
  isOpen,
  onCloseModal,
  title = "Modal title",
  child = <div>Content modal</div>,
  actionName,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={() => onCloseModal?.()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className={
              "inline-block py-6 pt-3 px-5 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-xl w-full max-w-xs absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
            }
          >
            <Dialog.Panel>
              <Dialog.Title className={'flex justify-between items-center'}>
                <div className="text-sm font-semibold">{title}</div>
                <div onClick={onCloseModal}>
                    <XIcon />
                </div>
              </Dialog.Title>
              <Fragment>{child}</Fragment>
              {/* ... */}
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default DialogComponent;
