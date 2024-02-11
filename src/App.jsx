import { useState,useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import axios from 'axios';

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [search, setSearch] = useState("");

  // const abortController = new AbortController();
  // const signal = abortController.signal;
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then(response => setCurrencyList(response.data));
  },[]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Header handleSearch={ handleInput} />
      <div className="content d-flex flex-wrap p-5 mt-1">
        {currencyList.filter(currency=>currency.name.toLowerCase().includes(search.toLowerCase()))
          .map(currency => <ImageCard key={currency.id} {...currency} />)}
      </div>
    </>
  )
}

export default App
