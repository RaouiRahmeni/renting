import React from 'react';
import axios from 'axios';
class HistoricHost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
         this.remove = this.remove.bind(this)
         this.clearHostHistoric=this.clearHostHistoric.bind(this)
    }
    componentDidMount() {
        this.props.changeIsHost()
        axios.post('/api/host/historic',{id:this.props.id}).then(({data}) => {
           
            console.log('result for historic in specific host',data);
            this.setState({
                data: data
            })
        })
    }
    remove(annoucement) {
        console.log("announcement to delete:", annoucement);
        axios.delete('/api/host/historic/delete/' + annoucement._id).then((res) => {

        })



        this.componentDidMount()
    }
    clearHostHistoric(){
        console.log("announcement to delete:",this.props.id);
        axios.delete('/api/host/historic/deleteall/' + this.props.id).then((res) => {

        })



        this.componentDidMount()
    }
    render() {
        return (
            <div>
                
                {
                    this.state.data.map((annoucement, index) => (
                        <div className="hostAnnoucement" key={index}>
                            <h2>{annoucement.title}</h2>
                            <div className="imgs">
                                <img src={annoucement.picture1} className="hostAnnoucementImg" alt="img1" />
                                <img src={annoucement.picture2} className="hostAnnoucementImg" alt="img2" />
                                <img src={annoucement.picture3} className="hostAnnoucementImg" alt="img3" />
                                <img src={annoucement.picture4} className="hostAnnoucementImg" alt="img4" />
                                <img src={annoucement.picture5} className="hostAnnoucementImg" alt="img5" />
                            </div>
                            <div>
                                <h2>{annoucement.address}</h2>
                                <p>{annoucement.description}</p>
                                <p>available rooms: {annoucement.numberOfRooms}</p>
                                <p>max visitors: {annoucement.numberOfVisitors} </p>
                                <p>{annoucement.strongPoints}</p>
                                <p>{annoucement.extraAccomodations}</p>
                                <p>available from {annoucement.startDate}</p>
                                <p>to the end of {annoucement.startDate}</p>
                            </div>
                            <button type='' className="btn"  onClick={() => (this.remove(annoucement))}>Delete</button>
                        </div>
                    )
                    )
                }
                
                <button className="btn" onClick={()=>this.clearHostHistoric()}>clear all </button>
                
            </div>
        )
    }
}
export default HistoricHost;