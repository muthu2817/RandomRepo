import ExpenseList from './Components/ExpenseList';
import AddForm from './Components/AddForm';
import '../src/App.css'
const App = () =>{
  return(
    <div className="Container">
       <h2 className='text-3xl font-bold'>Add Expense</h2>
      <AddForm/>
      <div>
      <h2 className='text-3xl font-bold mb-10'>Your expenses</h2>
      </div>
      <ExpenseList/>
     
    </div>
  )
}

export default App;