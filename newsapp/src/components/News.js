import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            hi:"you"
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=18518bd2924547998ffa63aaf33a312d";
        let data = await fetch(url);
        let jsonData = await data.json();
        console.log(jsonData);
        this.setState({ articles: jsonData.articles })
    }
    render() {
        return (
            <div className='container my-3'>
                <h1>News Daily - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((elements) => {
                        return <div className="col-md-4" key={elements.url}>
                            <NewsItems title={elements.title?elements.title:""} description={elements.description?elements.description:""} url={elements.url} imageUrl={elements.urlToImage?elements.urlToImage:"https://images.hindustantimes.com/tech/img/2023/07/15/1600x900/WIN_CML_Start_Dark_16x9_en-US_1626755292874_1689403756064.png"} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
