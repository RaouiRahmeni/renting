import React from 'react';
import axios from 'axios';
class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }

    }
    componentDidMount() {
        //get items of feed from db
        axios.get('/api/renting/fetching').then(({ data }) => {
             console.log('data in client',data)
            this.setState({
                items: data
            })
        }

        )
    }
    formatDate(string) {

        var year_month_date_hour = []
        year_month_date_hour[0] = string.split('T')[0].split("-")[0]
        year_month_date_hour[1] = string.split('T')[0].split("-")[1]
        year_month_date_hour[2] = string.split('T')[0].split("-")[2]
        var hour = string.split('T')[1].split('.')[0];
        year_month_date_hour[3] = hour.split(':')[0].concat(':', hour.split(':')[1])



        return year_month_date_hour
    }
    getHour(string) {
        var hour = this.formatDate(string)
        return hour[3]
    }
    getDate(string) {
        var date = this.formatDate(string)
        date.splice(3, 1)

        return date.join('/')
    }

    
    render() {
        var list = []
        this.state.items.map((item, i) => list.push(<div key={i} >
            <ul>
                <li className="post-list-entry">
                    <div className="post-list-entry-title">{item.title}</div>
                    <div className="post-list-entry-byline">{item.description} created at:{this.getDate(item.createdAt)} ,{this.getHour(item.createdAt)} </div>
                    <div className="stats-list-item-views">Views: {item.views}</div>
                </li>

            </ul>
        </div>))
        return (

            <div>
               {list}
            </div>)
    }

}

export default Admin;
