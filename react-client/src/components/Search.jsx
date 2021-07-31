import React from 'react';
import axios from 'axios';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            startDate: "",
            endDate: "",
            numberOfVisitors: 0,
            data: [],
            filteredData: [],
            search: false,
            
        }
        this.addToFavoris=this.addToFavoris.bind(this)
        this.removeToFavoris=this.removeFromFavoris.bind(this)
    }


    componentDidMount() {
        this.props.changeIsHost()
        axios.get('/api/renting/fetching').then(({ data }) => {
            this.setState({ data })
            console.log(data)
        })
        
    }

    handleChangeAddress(e) {
        this.setState({ address: e.target.value })
    }
    handleChangeStartDate(e) {
        this.setState({ startDate: e.target.value })
        console.log('date', e.target.value);
    }
    handleChangeEndDate(e) {
        this.setState({ endDate: e.target.value })
    }
    handleChangeNumberOfVisitors(e) {
        this.setState({ numberOfVisitors: e.target.value })
    }
    addToFavoris(element) {
        axios.put('/api/renting/favoris/add/' + this.props.id, {
            favoris: element._id
        }).then((data) => {

            console.log("announcement added to favoris correctly");

        })
        
    }

    removeFromFavoris(element) {
        axios.put('/api/renting/favoris/delete/' + this.props.id, {
            favoris: element._id
        }).then((data) => {

            console.log("announcement removed favoris correctly");

        })
        
    }
    searchAnnouncement() {
        console.log("data from search", this.state.address);

        this.setState({
            filteredData: filter(this.state.data, (item) => {
                const { address, startDate, endDate, numberOfVisitors } = this.state;
                if (address && item.address.toLowerCase().includes(address.toLowerCase())) return true;
                if (startDate && item.startDate >= startDate) return true;
                if (endDate && item.endDate <= endDate) return true;
                if (numberOfVisitors && item.numberOfVisitors >= numberOfVisitors) return true

                return false;
            }),
            search: true

        });
        // console.log('filteredData:', filteredData);

    }
    handleClickViewAnnouncement(element){
        this.props.getAnnouncement(element)
        this.props.changeView('bookingvisitor')
    }
    render() {
        
        var list = [];
        var dataToLoad = []
        if (this.state.search) {
            dataToLoad = this.state.filteredData

        } else { dataToLoad = this.state.data }
        
        dataToLoad.map((element, index) => {
            list.push(<div className="card" key={index}>
                <div className="card-left">
                    <img src={element.picture1} alt="Avatar" />
                </div>
                <div className="container">
                    <h4><b>{element.title}</b></h4>
                    <p>{element.description}</p>

                </div>
                <div className="like-button">
                    <button onClick={()=>this.handleClickViewAnnouncement(element)}><i className="fa fa-eye" ></i></button>

                    <button  className="not-liked" onClick={() => { this.addToFavoris(element) }} ><i className="fa fa-thumbs-up" ></i></button>
                    <button  className="liked" onClick={() => { this.removeFromFavoris(element) }} ><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>


                </div>
            </div>
            )
        }
        )
        return (

            <div className="announcement-home">
                <div className="search-container">

                    <div className="input-container">

                        <input type="text" placeholder="Address" name="address" onChange={this.handleChangeAddress.bind(this)} />
                    </div>
                    <div className="input-container">

                        <input type="date" placeholder="Start Date" name="start" onChange={this.handleChangeStartDate.bind(this)} />
                    </div>
                    <div className="input-container">

                        <input type="date" placeholder="End Date" name="end" onChange={this.handleChangeEndDate.bind(this)} />
                    </div>
                    <div className="input-container">

                        <input type="number" placeholder="Number of visitors" name="visitors" onChange={this.handleChangeNumberOfVisitors.bind(this)} />
                    </div>
                    <button type="submit" onClick={() => { this.searchAnnouncement() }} ><i className="fa fa-search"></i></button>
                </div>

                <div id="row" className="row">{list}</div>




            </div>)
    }

}

export default Search;
function filter(array, predicate) {
    var acc = [];
    each(array, function (element) {
        if (predicate(element)) {
            acc.push(element)
        }
    });
    return acc;
}

function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i);
        }
    } else {
        for (var key in coll) {
            func(coll[key], key);
        }
    }
}