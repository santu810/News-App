import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0);

  const update = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=51f8ce54454743f9938e1155ff4e7d6b&page=1&pageSize=4`;
    setloading(true)
    let data = await fetch(url)
    let parsedata = await data.json()
    setarticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setloading(false)

  }

  useEffect(() => {
    update()
  },[]);




  //   handlenext=async()=>{
  //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51f8ce54454743f9938e1155ff4e7d6b&page=${this.state.page + 1}&pageSize=4`;
  //   this.setState({loading:true})
  //   let data= await fetch(url)
  //   let parsedata=await data.json()
  //   this.setState({
  //     page:this.state.page + 1,
  //     articles:parsedata.articles,
  //     loading:false
  //   })
  //   }
  //    handleprev=async ()=>{
  //     let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51f8ce54454743f9938e1155ff4e7d6b&page=${this.state.page - 1}&pageSize=4`;
  //     this.setState({loading:true})
  //     let data= await fetch(url)
  //     let parsedata=await data.json()
  //     this.setState({
  //       page:this.state.page - 1,
  //       articles:parsedata.articles,
  //       loading:false
  //   }
  //     )
  // }
  const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=51f8ce54454743f9938e1155ff4e7d6b&page=${page + 1}&pageSize=4`;
    setpage(page + 1)
    let data = await fetch(url)
    let parsedata = await data.json()
    setarticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
  }





  return (


    <div className="container my-3">
      <h1 className='text-center'>News Headlines-{props.category}</h1>

      {loading && <Loading />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h3>Loading...</h3>}
      >
        <div className="container">
          <div className="row" style={{ marginTop: "10px", rowGap: "10px" }}>
            {articles.map((element) => {
              return <div key={element.url} className="col-md-3">
                <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} newdate={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>

        </div>

        {/* <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprev}>Previous</button>
      <button  disabled={this.state.page>=Math.ceil(this.state.totalResults/this.state.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next</button>
      </div> */}



      </InfiniteScroll>
    </div>

  )
}


export default News
