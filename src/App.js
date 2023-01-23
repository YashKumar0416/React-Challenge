import React, { useState, useEffect } from 'react';
import "./App.css";
import Accordion from './Components/Accordion';
import Page from './Components/Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  //FETCH DATA FROM API
  useEffect(()=> {
    const fetchdata = async ()=> {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setPosts(res.data);
      setLoading(false);
    };

    fetchdata();
  }, []);

  //SET PAGES AND PAGINATION
  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPosts = posts.slice(firstPost, lastPost);
  const setPage = (pageNumber)=> {setCurrentPage(pageNumber)};

  return (
    <>
      <div className="container">
        <h1>Accordion</h1>
        <div className="main_box">
          {currentPosts.map((elem)=> {
            return <div className="inner"> 
            <Accordion key={elem.id} id={elem.id} name={elem.name} username={elem.username} email={elem.email} street={elem.address.street} suite={elem.address.suite} city={elem.address.city} zipcode={elem.address.zipcode} phone={elem.phone} company={elem.company.name} website={elem.website} /></div>
          })}
        <Page postsPerPage={postsPerPage} totalPosts={posts.length} setPage={setPage}/>
        </div>
      </div>

    </>
  )
}

export default App;