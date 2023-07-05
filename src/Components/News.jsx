import React, { Component, useEffect, useState } from 'react'
import NewsItem from './NewsItem'


export default function News() {
    const [articles,setArticles] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [type,setType] = useState("");

    const callApi = async() =>{

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${type}&apiKey=98c684deb8ef48a8bd16a6ba39f4ff06`;
                let data = await fetch(url);
                let parsedData = await data.json();
                console.log(parsedData)
                // this.setState({articles:parsedData.articles})
                setArticles(parsedData.articles);
    }

    useEffect(()=>{

        callApi();
    },[type])


    

  return (
    <>
                 <div className="container mt-3 pt-3">
                     <h4>Filter News</h4>
                     <select className='form-control' onChange={(e)=>setType(e.target.value)}>
                         <option value="politics">Politics</option>
                         <option value="sports">Sports</option>
                         <option value="business">Business</option>
                     </select>
                     <h1 className='mt-2'>Top News</h1>
                     <div className="row">
                         {
                             articles?.map((ele,idx)=>{
                                 return  <div className="col-md-6 col-sm-12 col-12 col-lg-4  mt-5 pt-2" key={idx}>
                                             <NewsItem title={ele.title?ele.title.slice(0,50):""} description={ele.description?ele.description.slice(0,80):""} imageUrl={ele.urlToImage?ele.urlToImage:"https:img.freepik.com/free-icon/user_318-159711.jpg?w=2000"} readMore={ele.url} />
                                         </div>
                             })
                         }
    
    
                     </div>
                 </div>
                 </>
    
  )
}




// export default class News extends Component {

//     articles = [];
//     constructor(){
//         super();
//         this.state = {
//            articles : this.articles,
//            loading:false,
//         }
//     }

//      changeType = async(e) =>{
//         let url = `https://newsapi.org/v2/top-headlines?country=us&category=${e.target.value}&apiKey=98c684deb8ef48a8bd16a6ba39f4ff06`;
//         let data = await fetch(url)
//         let parsedData = await data.json();
//         this.setState({articles:parsedData.articles})
//     }
//    async  componentDidMount(){
//         let url = "https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=98c684deb8ef48a8bd16a6ba39f4ff06";
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         this.setState({articles:parsedData.articles})
//     }
    
//     render() {
        
//         return (
//             <>
//             <div className="container mt-3 pt-3">
//                 <h4>Filter News</h4>
//                 <select className='form-control' onChange={this.changeType}>
//                     <option value="politics">Politics</option>
//                     <option value="sports">Sports</option>
//                     <option value="business">Business</option>
//                 </select>
//                 <h1 className='mt-2'>Top News</h1>
//                 <div className="row">
//                     {
//                         this.state.articles.map((ele,idx)=>{
//                             return  <div className="col-md-6 col-sm-12 col-12 col-lg-4  mt-5 pt-2" key={idx}>
//                                         <NewsItem title={ele.title?ele.title.slice(0,50):""} description={ele.description?ele.description.slice(0,80):""} imageUrl={ele.urlToImage?ele.urlToImage:"https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000"} readMore={ele.url} />
//                                     </div>
//                         })
//                     }


//                 </div>
//             </div>
//             </>
//         )
//     }
// }
