import React from 'react';
import axios from 'axios';
class Favoris extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data:[]
        }

    }
    componentDidMount() {
        this.props.changeIsHost()
        axios.get('/api/renting/fetching/favoris/'+this.props.id).then(({ data }) => {
            this.setState({ data })
            console.log(data)
        })
    }
    addToFavoris(element){
        axios.put('/api/renting/favoris/add/'+this.props.id, {
            favoris:element._id
        }).then((data) => {
    
            console.log("announcement added to favoris correctly");
    
        })
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
                        <button ><i className="fa fa-eye" ></i></button>
                        <button onClick={() => { this.addToFavoris(element) }} ><i className="fa fa-thumbs-up"></i></button>
                        </div>
                    </div>
            )
        }
        )
        return (

            <div  id="row" className="row">
              
               {list}
            </div>)
    }

}

export default Favoris;
