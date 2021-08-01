import React from 'react';
import axios from 'axios';
class BookingVisitor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }

    }
    componentDidMount() {
        this.props.isVisitor();
    }
    incrementViews() {
        var incrementView=this.props.announcement.views+1;
        // console.log("increment:",incrementView)
        axios.put('/api/announcement/' + this.props.announcement._id, { views: incrementView }).then(( data) => {
          
           console.log('succes')
        })
        
      }

    
    render() {
        this.incrementViews()
        return (

            <div>
               hello announcement
            </div>)
    }

}

export default BookingVisitor;
