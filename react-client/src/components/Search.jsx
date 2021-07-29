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
            data:[{address:"sousse",startDate:"2021-07-30",endDate:"2021-08-30",numberOfVisitors:4},
            {address:"grenoble",startDate:"2021-07-28",endDate:"2021-08-05",numberOfVisitors:1},
            {address:"can",startDate:"2021-08-08",endDate:"2021-09-30",numberOfVisitors:2}]
        }

    }


    componentDidMount() {
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
        console.log('date',e.target.value);
    }
    handleChangeEndDate(e) {
        this.setState({ endDate: e.target.value })
    }
    handleChangeNumberOfVisitors(e) {
        this.setState({ numberOfVisitors: e.target.value })
    }
    
    searchAnnouncement() {
        var filteredData= filter(this.state.data,(item) =>{return item.address===this.state.address && item.startDate>=this.state.startDate
            && item.endDate<=this.state.endDate && item.numberOfVisitors>=this.state.numberOfVisitors});
        console.log('filteredData:',filteredData);
    
    }
    render() {
        var list = [];
        this.state.data.map((element, index) => {
            list.push(<div className="card" key={index}>
                <div className="card-left">
                <img src="left-side.jpg" alt="Avatar" />
                </div>
                <div className="container">
                    <h4><b>{element.title}</b></h4>
                    <p>{element.description}</p>
                </div>
            </div>
            )
          }
        )
        return (

           <div>
            <div className="search-container">

                <div className="input-container">
                    
                    <input  type="text" placeholder="Address" name="address" onChange={this.handleChangeAddress.bind(this)} />
                </div>
                <div className="input-container">
                    
                    <input  type="date" placeholder="Start Date" name="start" onChange={this.handleChangeStartDate.bind(this)} />
                </div>
                <div className="input-container">
                    
                    <input type="date" placeholder="End Date" name="end" onChange={this.handleChangeEndDate.bind(this)} />
                </div>
                <div className="input-container">
                    
                    <input  type="number" placeholder="Number of visitors" name="visitors" onChange={this.handleChangeNumberOfVisitors.bind(this)} />
                </div>
                <button type="submit" onClick={() => { this.searchAnnouncement() }} >Search</button>
                </div>

                <div  id="row" className="row">{list}</div>




            </div>)
    }

}

export default Search;
function filter(array,predicate){
    var acc=[];
    each(array,function(element){
            if(predicate(element)){
                acc.push(element)}});
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