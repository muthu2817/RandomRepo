import React, { useState } from 'react';
import { Button } from '@mui/material';


export function DropdownComponent() {
    const Desc = ['Groceries', 'Credit Card', 'Student Loans', 'Eating out', 'Gas'];
    const[description,setdescription] = useState(Desc[0]);

    const Handleadd = (e) =>{
        event =>setdescription(event.target.value)
        console.log(description);
    }
    return (
        <div className="relative w-full lg:max-w-sm">
            <select onChange={Handleadd(e)} className="w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                {
                    Desc.map((D)=>{
                        return(
                            <option>{D}</option>
                        )
                    })
                }
            </select>
            
        </div>
    );
}

const AddForm = () => {

    return (
        <div>
            <div id="formBG" className='mt-16 mb-4 p-10 w-[80vw] h-16 bg-[#99BC85] flex flex-row justify-center items-center' >
                <div className='flex flex-col mr-10'>
                    <label htmlFor="" className='mr-6'>Description</label>
                
                    <DropdownComponent />
                </div>
                <div className='flex flex-col'>
                    <label className='ml-6 mr-4'>Amount</label>
                    
                    <input type="text" className='rounded-md' />
                </div>
                <div className='ml-6 text-sm mt-4'>
                <Button variant="contained" color="success" >
                    Add
                </Button>
                </div>
            </div>
        </div>
    )
}

export default AddForm;
