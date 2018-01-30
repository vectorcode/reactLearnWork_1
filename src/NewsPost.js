import React from 'react';
import './NewsPost.css';

class NewsPost extends React.Component {

    render() {
        return <div className='news-post'>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.descr}</p>
                    <button onClick={this.props.fnCklick}>Del</button>
                </div>;
    }
}

export default (NewsPost);