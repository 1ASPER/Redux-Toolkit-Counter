import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addThree, addValue } from './store/slices/counterSlice'


function App()
{

  // useSelector is a hook that takes a selector function as an argument.
  // useDispatch is a hook that returns a reference to the dispatch function from the Redux store.

  const count = useSelector((state) => state.counterSlice.value)
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Счётчик</h1>
        <div className="text-5xl font-bold text-purple-600 mb-6">{count}</div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
            onClick={() => dispatch(increment())}
          >
            +1
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition"
            onClick={() => dispatch(decrement())}
          >
            -1
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition"
            onClick={() => dispatch(addThree())}
          >
            +3
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          <input
            type="number"
            className="border border-gray-300 rounded px-3 py-2 w-24 text-center focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition"
            onClick={() => dispatch(addValue(inputValue))}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
