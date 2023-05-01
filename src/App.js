import SearchInput from './components/SearchInput';
import Header from './components/Header';
import './App.css';
import Job from './pages/Job';
import Home from './pages/Home';
import Create from './pages/Create';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import BoutonCreate from './components/BoutonCreate';

const App = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsloading(true)
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/jobs')
        const data = await response.json();
        setDatas(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setIsloading(false)
      }
    };
    fetchData()

  }, [])

  return (

    <div className="App">

      <Header />
      <SearchInput />
      <div create-btn-position>
        <BoutonCreate />
      </div>

      <div className="mainContainer">


        <Routes>
          <Route path="/Create" element={<Create />} />
          <Route path='/' element={<Home data={datas} isLoading={isLoading} error={error} />} />
          <Route path='jobs/:_id' element={<Job data={datas} isLoading={isLoading} error={error} />} />




        </Routes>
      </div>
    </div>
  );
}

export default App;
