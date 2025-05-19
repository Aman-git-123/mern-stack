import React, { useEffect, useState } from 'react'
import Card from'./Card';

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "d71bf0feb4fa4276af417181120471bd";

  const getData = async() => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  }

  // useEffect(()=>{
  //   getData();
  // },[getData]);
  useEffect(() => {
  const getData = () => {
    console.log("Fetching data...");
  };

  getData();
}, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  const userInput = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div>
      <nav>
        <div>
          <h1>Trending News</h1>
        </div>
        <ul>
          <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Fun</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>
        </ul>
        <div className='searchBar'>
          <input type="text" placeholder='Search News' value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div className='head'>
        <p>NowNews Update with TrendyNews</p>
      </div>

      

      <div>
        {newsData? <Card data={newsData}/> : null}
        
      </div>
    </div>
  )
}

export default Newsapp;