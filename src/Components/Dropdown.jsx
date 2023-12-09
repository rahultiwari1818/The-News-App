import React from 'react'

export default function Dropdown({setState,options}) {
    return (
        <select className='form-control-inline' onChange={(e) => setState(e.target.value)}>
            <option value="">--- Select an Option ---</option>
            {
                (options && Array.isArray(options)) ?
                options.map((option,idx)=>{
                    <option value={option} key={idx}>{option}</option>
                })
                :
                <></>
            }
        </select>
    )
}
