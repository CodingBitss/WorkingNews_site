
import { useState, useEffect } from "react";
import "./App.css";
import img1 from './Images/cloudw.png';



export default function App() {
  const [search, setSearch] = useState();
  const [count, setCount] = useState(0);
  let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=47abb090594248b4a31f20a1f68b0b32`;
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fecthUrl = await fetch(url);
      const fetchedData = await fecthUrl.json();
      setData(fetchedData.articles);
    };
    fetchData();
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
    
  <div className="navbar">
    <div className="logo">
      <a href="https://zoom.earth/places/india/" target="_blank"><img src={img1} alt="cloud" /></a>
    </div>

    <label className="menu-icon" htmlFor="menu-toggle">☰</label>
    <input type="checkbox" id="menu-toggle" />
    <div className="links">
    <a href="https://timesofindia.indiatimes.com/topic/social/news">Social News</a>
    <a href="https://www.hindustantimes.com/">Daily News</a>
    <a href="https://indianexpress.com/section/trending/">Trend News</a>
   
      <input type="text" onChange={handleChange} value={search} placeholder="search-here"/>
      
      <button onClick={handleClick}>search</button>
      </div>
  
      </div>

  
      
      <div className="container">
        {data.map((data) => {
          return (
            <div className="card" key={data.url}>
              <h2>{data.title}</h2>
              <a href={data.url}>
                <img src={data.urlToImage}></img>
              </a>

              <h3>{data.description}</h3>
            </div>
            
          );
        })}
        
    <footer>
        <div className="footer">
            <p>&copy; 2024 News App</p>
        </div>
    </footer>
      </div>
    </>
  );
}

