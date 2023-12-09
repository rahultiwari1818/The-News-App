import React, { useEffect, useState, useRef } from 'react';
import NewsItem from './NewsItem';
import { CirclesWithBar } from 'react-loader-spinner';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Use a ref to track whether it's the initial render
  const initialRender = useRef(true);

  const callApi = async () => {
    try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${type}&page=${page}&pageSize=5&apiKey=98c684deb8ef48a8bd16a6ba39f4ff06`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles((oldArticles) => [...oldArticles, ...parsedData.articles]);
        setTotalArticles(parsedData.totalResults);
        // Increment the page after updating the state
        setPage((prevPage) => prevPage + 1);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100 && hasMore) {
      setIsLoading(true);
      callApi();
      console.log("api called", hasMore);
    }
  };

  useEffect(() => {
    // If it's not the initial render, call the API
    if (!initialRender.current) {
      callApi();
    } else {
      // On the initial render, set the ref to false
      initialRender.current = false;
    }
  }, [type]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (articles.length >= totalArticles && articles.length !== 0) {
      setHasMore(false);
      console.log("hasMore", hasMore);
    }
    console.log("useeffct called ", articles.length, totalArticles);
  }, [articles]);

  return (
    <>
      <div className="container mt-3 pt-3 mb-3">
        <h4>Filter News</h4>
        <select className='form-control' onChange={(e) => setType(e.target.value)}>
          <option value=""></option>
          <option value="politics">Politics</option>
          <option value="sports">Sports</option>
          <option value="business">Business</option>
        </select>
        <h1 className='mt-2'>Top News</h1>
        <div className="row">
          {
            articles?.map((ele, idx) => {
              return <div className="col-md-6 col-sm-12 col-12 col-lg-4  mt-5 pt-2" key={idx}>
                <NewsItem title={ele.title ? ele.title.slice(0, 50) : ""} description={ele.description ? ele.description.slice(0, 80) : ""} imageUrl={ele.urlToImage ? ele.urlToImage : "https:img.freepik.com/free-icon/user_318-159711.jpg?w=2000"} readMore={ele.url} />
              </div>
            })
          }
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
          {
            isLoading &&
            <CirclesWithBar
              height="100"
              width="100"
              color="#4299e1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor=""
              innerCircleColor=""
              barColor=""
              ariaLabel='circles-with-bar-loading'
            />
          }
        </div>
      </div>
    </>
  );
}
