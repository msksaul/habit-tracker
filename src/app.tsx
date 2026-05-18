import HabitForm from './components/habit-form'
import HabitList from './components/habit-list'
import Header from './components/header'

function App() {
  return (
    <div className='max-w-2xl mx-auto p-4 flex flex-col gap-4'>
      <Header />
      <HabitForm />
      <HabitList />
    </div>
  )
}

export default App