import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
      country: 'in',
      category: 'general'
    }
    static propTypes={
      country: PropTypes.string,
      category: PropTypes.string
    }
    constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount(){
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=348484e6e91b426198db8d1bb0ad1fce&page=1&pageSize=9`;
        let data= await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData); 
        this.setState({articles: parsedData.articles,
          totalResults: parsedData.totalResults})
    }

    handlePrevClick = async ()=>{
      console.log("prev")
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=348484e6e91b426198db8d1bb0ad1fce&page=${this.state.page -1}&pageSize=18`;
      let data= await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData); 
      this.setState({articles: parsedData.articles,page: this.state.page -1})

    }
    handleNextClick = async ()=>{
      if(Math.ceil(this.state.page +1 >this.state.totalResults/18)){

      }else{
      console.log("Next")
      console.log(this.state.page +1)
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=348484e6e91b426198db8d1bb0ad1fce&page=${this.state.page +1}&pageSize=18`;
      let data= await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData); 
      this.setState({articles: parsedData.articles,
        page: this.state.page +1,
      })}
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row"> 
                    {this.state.articles.map((element) => { 
                      return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                      </div>
                    })}
                </div> 
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
                    <button disabled={Math.ceil(this.state.page +1 >this.state.totalResults/18)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>  Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News