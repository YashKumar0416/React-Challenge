import React, { useState } from 'react';
import { useEffect } from 'react';
import "./App.css";
import Accordion from './Components/Accordion';
import { appdata } from './Components/api';
import Page from './Components/Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  //FETCH DATA FROM API
  // useEffect(()=> {
  //   const fetchdata = async ()=> {
  //     setLoading(true);
  //     const res = await axios.get('api');
  //     setPosts(res.data);
  //     setLoading(false);
  //   };

  //   fetchdata();
  // }, []);

  //SET PAGES AND PAGINATION
  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  // const currentPosts = posts.slice(firstPost, lastPost);
  const currentPosts = appdata.slice(firstPost, lastPost);
  const setPage = (pageNumber)=> {setCurrentPage(pageNumber)};

  return (
    <>
      <div className="container">
        <h1>Accordion</h1>
        <div className="main_box">
          {currentPosts.map((elem)=> {
            return <div className="inner"> 
            <Accordion key={elem.id} country={elem.country} address={elem.address} phone={elem.phone} email={elem.email} designation={elem.designation} desc={elem.desc} greet={elem.greet} city={elem.city} state={elem.state} contact={elem.contact}/></div>
          })}
        <Page postsPerPage={postsPerPage} totalPosts={appdata.length} setPage={setPage}/>
        </div>
      </div>

    </>
  )
}

export default App;