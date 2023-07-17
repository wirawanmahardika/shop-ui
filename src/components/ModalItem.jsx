import { useState } from "react";

export default function ModalItem() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='flex w-3/5 fixed left-1/2 -translate-x-1/2 bg-red-500 h-96 '></div>
    </>
  );
}
