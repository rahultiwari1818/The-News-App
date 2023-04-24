import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [];
    constructor(){
        super();
        this.state = {
           articles : this.articles,
           loading:false,
        }
    }

   async  componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=98c684deb8ef48a8bd16a6ba39f4ff06";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles})
    }
    
    render() {
        return (
            <>
            <div className="container mt-3 pt-3">
                <h1>Top News</h1>
                <div className="row">
                    {
                        this.state.articles.map((ele,idx)=>{
                            return  <div className="col-md-6 col-sm-12 col-12 col-lg-4  mt-5 pt-2" key={idx}>
                                        <NewsItem title={ele.title?ele.title.slice(0,50):""} description={ele.description?ele.description.slice(0,80):""} imageUrl={ele.urlToImage} readMore={ele.url} />
                                    </div>
                        })
                    }


                </div>
            </div>
            </>
        )
    }
}
