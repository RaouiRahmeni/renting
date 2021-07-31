import React from 'react';
import axios from 'axios';
class Favoris extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

    }
    componentDidMount() {
        // this.props.changeIsHost()
    console.log(this.props.id)
        axios.get('/api/renting/fetching/favoris/' + this.props.id).then(({ data }) => {
            this.setState({ data:data })
            console.log(data)
        })
    }

    // addToFavoris(element) {
    //     axios.put('/api/renting/favoris/add/' + this.props.id, {
    //         favoris: element._id
    //     }).then((data) => {

    //         console.log("announcement added to favoris correctly");

    //     })
    // }
    // removeFromFavoris(element) {
    //     axios.put('/api/renting/favoris/delete/' + this.props.id, {
    //         favoris: element._id
    //     }).then((data) => {

    //         console.log("announcement removed favoris correctly");

    //     })
        
    // }
    handleClickViewAnnouncement(element){
        this.props.getAnnouncement(element)
        this.props.changeView('bookingvisitor')
    }
    render() {
        var list = [];

        this.state.data.map((element, index) => {
            list.push(<div className="card" key={index}>
                <div className="card-left">
                    <img src={element.picture1} alt="Avatar" />
                </div>
                <div className="container">
                    <h4><b>{element.title}</b></h4>
                    <p>{element.description}</p>

                </div>
                <div className="like-button">
                    {/* <button onClick={() => this.handleClickViewAnnouncement(element)}><i className="fa fa-eye" ></i></button>

                    <button className="not-liked" onClick={() => { this.addToFavoris(element) }} ><i className="fa fa-thumbs-up" ></i></button>
                    <button className="liked" onClick={() => { this.removeFromFavoris(element) }} ><i className="fa fa-thumbs-down" aria-hidden="true"></i></button> */}

                </div>
            </div>
            )
        }
        )
        return (

            <div id="row" className="row">

                {list}
            </div>)
    }

}

export default Favoris;
