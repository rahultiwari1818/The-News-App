// import React, { Component } from 'react'
import React from 'react'
import "./NewsStyle.css";

export default function NewsItem({title,description,imageUrl,readMore}) {
  return (
    <>
        <div className="card shadow"  >
          <div className='d-flex  justify-content-center align-items-center'>
            <img src={imageUrl} className="card-img-top news_img" alt="..." />
          </div>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={readMore} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    </>
  )
}

// export default class NewsItem extends Component {
//   render() {
//     let {title,description,imageUrl,readMore} = this.props;
//     return (
//         <>
//             <div className="card shadow"  >
//                 <img src={imageUrl} className="card-img-top" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-title">{title}...</h5>
//                     <p className="card-text">{description}...</p>
//                     <a href={readMore} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
//                 </div>
//             </div>
//         </>
//     )
//   }
// }
