import React, { useId } from 'react'

function Select({
    options,label,className,...props
},ref) {
    const id =useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((option) => ( //means loop will run only when there are some values in option array
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select) //just another method of wriitng forwardref

//created so that we can reuse dropmenu menu component
