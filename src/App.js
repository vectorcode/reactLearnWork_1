import React from 'react';
import './App.css';
import NewsPost from './NewsPost';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: '',
            aPosts: [
                {title: 'Task 1', descr: 'Описание 1'}
            ]
        };

    }


    handleChange = event => {
        this.setState({value: event.target.value});
    };

    add = () => {
        let itm = {title: this.state.value, descr: 'Описание ' + this.state.aPosts.length};
        this.setState({aPosts: [...this.state.aPosts, itm]});
        this.setState({value: ''});
    };


    del(){
        console.log('dell item');
    }


    render() {
        const st = this.state;
        const listItems = st.aPosts.map((d, index) =>
            <NewsPost key={index} ind={index} title={d.title} fnCklick={this.del} descr={d.descr}></NewsPost>
        );

        return <div className='App'>
            <section className=''>
                <h1 className='App-title'>Tasks</h1>
                <div><input className='comment-input' onChange={this.handleChange} value={st.value}/></div>
                <br/>
                <button onClick={this.add}>Add</button>
                <br/>
            </section>

            {listItems}

        </div>;
    }
}

export default (App);