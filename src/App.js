import './App.css';
import React, { useState } from 'react';
import Card from './Components/Card.js'

const Info = [
  {
    userName: 'El Profe Charlie',
    imgUrl: 'https://i.pinimg.com/736x/4d/3c/e1/4d3ce1bafeae6f0643a2e52682ab2eb7.jpg',
    postDate: '29/01/2021',
    comment: 'El profe no enseña bien'
  },
    {
    userName: 'Ash Ketchup',
    imgUrl: 'https://cdn.newsapi.com.au/image/v1/5d97cea4efeb8b5f99e06b3cddcf8ca7',
    postDate: '29/01/2021',
    comment: 'Nunca gana nada'
  },
    {
    userName: 'Sailor Moon',
    imgUrl: 'https://www.rover.com/blog/wp-content/uploads/2015/10/xolo.jpg',
    postDate: '29/01/2021',
    comment: 'Es una diosa'
  },
] 

function App() {

  const [isDarkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }

  return (
    <div className={(isDarkMode) ? 'App dark-color-1' : 'App'}>
      <button className={(isDarkMode) ? 'dark-theme dark-theme-background' : 'dark-theme'} onClick={handleDarkMode}>
        {(isDarkMode) ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
      </button>
      <div className="container">
        <Card user={Info[0].userName} img={Info[0].imgUrl} date={Info[0].postDate} comment={Info[0].comment} darkMode={isDarkMode}/>
        <Card user={Info[1].userName} img={Info[1].imgUrl} date={Info[1].postDate} comment={Info[1].comment} darkMode={isDarkMode}/>
        <Card user={Info[2].userName} img={Info[2].imgUrl} date={Info[2].postDate} comment={Info[2].comment} darkMode={isDarkMode}/>
      </div>
    </div>
  );
}

export default App;
