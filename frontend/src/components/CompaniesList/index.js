import { Component } from 'react';
import './index.css'
import Header from '../Header';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import NotFound from '../NotFound';

class CompaniesList extends Component{
    state = {
        searchInput: "", itemsData: [], modalOpen: false
    }

    componentDidMount = () =>{
        this.getAPICall();
    }

    getAPICall = async ()=>{
        const url = 'https://interview-experience-app-3.onrender.com/items';
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            const parsedData = data.map(eachItem=>({
                id: eachItem.id,
                companyName: eachItem.companyName,
                role: eachItem.role,
                ctc: eachItem.ctc,
                shortlist: eachItem.shortlist,
                round1: eachItem.round1,
                round1Info: eachItem.round1Info,
                round2: eachItem.round2,
                round3: eachItem.round3,
                round4: eachItem.round4,
                round5: eachItem.round5,
                codingAsked: eachItem.codingAsked,
                codingTopics: eachItem.codingTopics,
                hr: eachItem.hr,
            }));
            this.setState({itemsData: parsedData});
        }
    }

    handleSearch = (event) => {
        this.setState({searchInput: event.target.value})
    };

    handleShow = (id)=>{
        this.setState({showModal: id})
    };

    handleClose = ()=>{
        this.setState({showModal: false})
    };

    render(){
        const {searchInput,itemsData,showModal} = this.state;
        let filteredData = itemsData;
        filteredData = itemsData.filter(eachItem=>
            eachItem.companyName.toLowerCase().includes(searchInput.toLowerCase())
        );
        if(filteredData.length===0 && searchInput.length===0){
            filteredData = itemsData;
        }
        return(
            <div className='companies-main-cont'>
                <Header/>
                <div className='search-cont'>
                    <MagnifyingGlassIcon style={{ width: 24, height: 24 }} />
                    <input type='search' className='search-input' onChange={this.handleSearch} placeholder='Enter company name'/>
                </div>
                {filteredData.length!==0 && <ul className='items-cont'>
                    {
                        filteredData.map(eachItem=>(
                            <li className='item' key={eachItem.id}>
                                <button className='item-btn' onClick={()=>this.handleShow(eachItem.id)}>{eachItem.companyName}</button>
                                {showModal === eachItem.id && (<Modal
                                    show={this.state.showModal}
                                    onHide={this.handleClose}
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>{eachItem.companyName}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className='show-content'>
                                            <h5>Role offered</h5>
                                            <p>{eachItem.role}</p>
                                            <h5>CTC Mentioned</h5>
                                            {eachItem.ctc===null && <p>CTC for the {eachItem.role} role in {eachItem.companyName} company is not mentioned.</p>}
                                            {eachItem.ctc!==null && <><p>Rs. {eachItem.ctc}</p>
                                            <p>The CTC mentioned might not be accurate it will vary yearly or college to college.</p></>}
                                            <h5>Shortlist</h5>
                                            <p>The shortlist of the candidate is totally based on {eachItem.role}</p>
                                            <h5>Round 1</h5>
                                            <p>In round 1, the company provided the {eachItem.round1} to each shortlisted candidate</p>
                                            {eachItem.round1Info!==null && <p>The information regarding to the Round 1 is {eachItem.round1Info}.</p>}
                                            {
                                                eachItem.round2!==null && (
                                                    <><h5>Round 2</h5>
                                                    <p>The information regarding to the Round 2 is {eachItem.round2}.</p></>
                                                )                                            
                                            }
                                            {
                                                eachItem.round3!==null && (
                                                    <><h5>Round 3</h5>
                                                    <p>The information regarding to the Round 3 is {eachItem.round3}.</p></>
                                                )                                            
                                            }
                                            {
                                                eachItem.round4!==null && (
                                                    <><h5>Round 4</h5>
                                                    <p>The information regarding to the Round 4 is {eachItem.round4}.</p></>
                                                )                                            
                                            }
                                            {
                                                eachItem.round5!==null && (
                                                    <><h5>Round 5</h5>
                                                    <p>The information regarding to the Round 5 is {eachItem.round5}.</p></>
                                                )                                            
                                            }
                                            <h5>Coding questions in Interview</h5>
                                            {eachItem.codingAsked && <p>There are few coding questions asked in the interview, by covering the several topics which include the following: {eachItem.codingTopics}</p>}
                                            {!eachItem.codingAsked && <p>In any of the interview rounds no coding question is asked!!</p>}
                                            {eachItem.hr!=null && <><h5>HR/Manageral Round</h5>
                                            <p>It is the last round in the entire process of the candidature, it includes the few topics like {eachItem.hr}</p></>}
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                )}
                            </li>
                        ))
                    }
                </ul>}
                {(filteredData.length===0 && searchInput.length>0) && <NotFound />}
            </div>
        )
    }
}

export default CompaniesList;