import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,readMore} = this.props;
    return (
        <>
            <div className="card shadow" style = {{width : "18rem"}} >
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={readMore} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
  }
}
