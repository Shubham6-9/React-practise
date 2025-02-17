import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [city, setCity] = useState("")

  const [arr, setArr] = useState([])

  function addData() {
    let obj = {
      id: Date.now(),
      name: name,
      gender: gender,
      city: city
    }
    setArr([...arr, obj])
  }

  return (
    <div>
      <h1>CRUD</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="radio" value="male" onChange={(e) => setGender(e.target.value)} name="gender" /> Male
        <input type="radio" value="female" onChange={(e) => setGender(e.target.value)} name="gender" /> Female
        <select onChange={(e) => setCity(e.target.value)} >
          <option value="rajkot">Rajkot</option>
          <option value="diu">Diu</option>
          <option value="surat">Surat</option>
        </select>
        <br />
      </form>
      <button onClick={() => addData()} style={{ margin: "10px" }}>Submit</button>
    </div>
  );
}

export default App
