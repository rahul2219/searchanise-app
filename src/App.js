import { useEffect } from 'react';
import './App.css';
import { useState,CSSProperties } from 'react';
import { Suggestions } from './Suggestions';
import { Products } from './Products';
import { ClipLoader } from 'react-spinners';

const override= {
  display: "block",
  marginLeft:"50%",
  marginTop:"250px"
};

function App() {
  const[Data,setData] = useState([]);
  const[loading,setLoading] = useState(true);
  const[typing,setTyping] = useState('');
  console.log(Data);

  useEffect(() => {
    fetch(`https://www.searchanise.com/getwidgets?api_key=1Q7P8A7s4h&q=s&maxResults=6&startIndex=0&items=true&pages=true&facets=false&categories=true&suggestions=true&vendors=false&tags=false&pageStartIndex=0&pagesMaxResults=1&categoryStartIndex=0&categoriesMaxResults=3&suggestionsMaxResults=4&vendorsMaxResults=3&tagsMaxResults=3&output=jsonp&_=1656921627306`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <ClipLoader color='#26A559' margin-left='50%' cssOverride={override}/>;
  }

  const handleChange=(e)=>{
    setTyping(e.target.value);
  }

  return (
    <div className="App">
      <div className='navbar'>
        <img className='searchanise-img' alt="" src = "https://static.tildacdn.com/tild3461-3766-4061-b366-386634633530/logo_searchanise_11-.svg"/>
        <div className='right-nav'>
          <strong>Platforms</strong>
          <strong>Solutions</strong>
          <strong>Pricing</strong>
          <strong>Blog</strong>
          <strong>Company</strong>
          <div className='buttons'>
            <button className='demo-button'><span>Demo</span></button>
            <button className='start-free-trial'><span>Start free trial</span></button>
          </div>
          <strong>ES</strong>
        </div>
      </div>
      <div className="outer-div">
        <div className='text'>
          <div className='searching'>SEARCHANISE</div>
          <div className='demo'>Live Demo Search</div>
          <input type="text" className='searchbar' placeholder='Type here to search in our demo store...' onChange={handleChange}/>
        </div>
        {typing !== '' &&
        <div className='suggestions-products'>
            <Suggestions suggestions = {Data}/>
            <Products products = {Data}/>
        </div>}
      </div>
    </div>
  );
}

export default App;
