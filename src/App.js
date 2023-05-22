import {useState} from 'react'
import './App.css'
import TabItem from './Component/TabItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [current, setCurrent] = useState(languageGreetingsList[0].buttonText)

  const onChangeTabId = ItemText => {
    setCurrent(ItemText)
    console.log(ItemText)
  }

  const greetingItem = languageGreetingsList.filter(
    item => item.buttonText === current,
  )
  return (
    <div className="main-container">
      <h1>Multilingual Greetings</h1>
      <ul className="list-container">
        {languageGreetingsList.map(each => (
          <TabItem
            key={each.id}
            ItemText={each.buttonText}
            current={current}
            changeTabId={onChangeTabId}
          />
        ))}
      </ul>
      <div className="image-card">
        <img
          src={greetingItem[0].imageUrl}
          alt={greetingItem[0].imageAltText}
          className="image"
        />
      </div>
    </div>
  )
}

export default App
