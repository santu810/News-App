import React from 'react'

 const NewsItem=(props)=> {
  
    
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"85%"}}>
          {props.source}
    
  </span>
          <img src={!props.imageurl?"https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg":props.imageurl}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <h6 className="card-title">{props.newdate}...</h6>
            <a href={props.newsurl}  target="_blank"  rel="noreferrer" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}
export default NewsItem
