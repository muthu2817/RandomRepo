import React from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetExpense } from '../services/Expenses';
import { useEffect } from 'react';


const ExpenseList = () => {
  const dispatch = useDispatch();
  const selectors = useSelector(state => state.ExpenseReducer.expenses);

  useEffect(() => {
    GetExpense(dispatch);
  }, [])
  
  return (
    <>
      {
        selectors.map((s) => {
          return (
            <>
            <div id="container-gradient" className='flex flex-row justify-evenly p-px w-[80vw] h-12 font-semibold rounded-lg'>
              <p>{s.description}</p>
              <p>{s.amount}</p>
              <Button variant="contained" color="success">Edit</Button>
            </div>
            </>
          )
        })
      }

    </>

  )
}

export default ExpenseList;

