import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import axios from 'axios'
import { Set } from './components/Set'

type CardItem = {
  url: string,
  name: string
}
type SetItem = {
  name: string,
  icon: string
}

function App() {

  const [sets, setSets] = useState<Array<SetItem>>([{
    name: "",
    icon: ""
  }])

  useEffect(() => {

    axios.get('https://api.scryfall.com/sets')
      .then((data) => setSets(data.data.data.map((lala: { name: string, icon_svg_uri: string }) => {
        return {
          name: lala.name,
          icon: lala.icon_svg_uri

        }
      })))


  }, [])

  console.log(sets);


  return (
    <div className="App">
      <div className='flex flex-wrap'>
        {sets.map((set) => <Set name={set.name} icon={set.icon} />)}
      </div>

    </div>
  )
}

export default App
