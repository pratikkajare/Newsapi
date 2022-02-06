import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                

                <div className="card border border-success " style={{ width: "25rem" }}>
                    <div style={{display:'flex',justifyContent:'flex-start',position:'absolute',left:'0'}}>
                    <span class="badge rounded-pill bg-danger" >{source}</span>
                    </div>
                    <img src={!imageUrl ? "150px-BBC_News_2019.svg.png" : imageUrl} className="card-img-top hover-zoom" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
