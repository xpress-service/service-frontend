import React from 'react'

const NotificationModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
      }
  return (
    <div className='flex flex-shrink-0 w-[508px] h-[624] bg-[#FFF] border rounded-3xl'>
<div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  )
}

export default NotificationModal