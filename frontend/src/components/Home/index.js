import { Component } from 'react';
import '../Home/index.css';
import SomethingWrong from '../SomethingWrong';
import Success from '../Success';
import Header from '../Header';

class Home extends Component {
    state = {
        companyName: "", 
        role: "",
        CTC: 0,
        shortlist: 'Resume & GPA/% of B.Tech/10/12',
        round1: "Exam/Test",
        round1Info: "",
        round2: "",
        round3: "",
        round4: "",
        round5: "",
        codingAsked: false,
        codingQuestionsTopic: "",
        hr: "",
        companyRequired: false,
        roleRequired: false,
        successSubmission: false,
        wrong: false
    };

    handleWrong = ()=>{
        this.setState((prevState)=>({...prevState,wrong: !prevState.wrong}))
    };

    handleSuccess = () =>{
        this.setState((prevState)=>({...prevState,wrong: false, successSubmission: !prevState.successSubmission}))
    };

    handleCompanyName = (event) => {
        this.setState({ companyName: event.target.value, companyRequired: false });
    };
    
    handleRole = (event) => {
        this.setState({ role: event.target.value, roleRequired: false });
    };
    
    handleCTC = (event) => {
        const val = event.target.value === "" ? 0 : Number(event.target.value);
        this.setState({ CTC: val, ctcRequired: false });
    };
    
    handleShortlist = (event) => {
        this.setState({ shortlist: event.target.value });
    };

    handleRound1 = (event) => {
        this.setState({ round1: event.target.value });
    };
    
    handleRound1Info = (event) => {
        this.setState({ round1Info: event.target.value });
    };
    
    handleRound2 = (event) => {
        this.setState({ round2: event.target.value });
    };
    
    handleRound3 = (event) => {
        this.setState({ round3: event.target.value });
    };
    
    handleRound4 = (event) => {
        this.setState({ round4: event.target.value });
    };
    
    handleRound5 = (event) => {
        this.setState({ round5: event.target.value });
    };
    
    handleCQ = (event) => {
        this.setState({ codingAsked: JSON.parse(event.target.value) });
    };
    
    handleTopics = (event) => {
        this.setState({ codingQuestionsTopic: event.target.value });
    };
    
    handleHr = (event) => {
        this.setState({ hr: event.target.value });
    };

    companyReq = () => {
        this.setState({ companyRequired: this.state.companyName === "" });
    };

    roleReq = () => {
        this.setState({ roleRequired: this.state.role === "" });
    };

    ctcReq = () => {
        this.setState({ ctcRequired: this.state.CTC === 0 });
    };

    postData = async () => {
        const {
            companyName, 
            role,
            CTC,
            shortlist,
            round1,
            round1Info,
            round2,
            round3,
            round4,
            round5,
            codingAsked,
            codingQuestionsTopic,
            hr,
        } = this.state;

        const data = {
            companyName, 
            role,
            CTC,
            shortlist,
            round1,
            round1Info,
            round2,
            round3,
            round4,
            round5,
            codingAsked,
            codingQuestionsTopic,
            hr,
        };

        const apiUrl = 'https://interview-experience-app-3.onrender.com/company';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(apiUrl, options);
        if(response.ok===true){
            this.setState({
                companyName: "", 
                role: "",
                CTC: 0,
                shortlist: 'Resume & GPA/% of B.Tech/10/12',
                round1: "Exam/Test",
                round1Info: "",
                round2: "",
                round3: "",
                round4: "",
                round5: "",
                codingAsked: false,
                codingQuestionsTopic: "",
                hr: "",
                companyRequired: false,
                roleRequired: false,
                wrong: false,
                successSubmission: true
            });
        }else{
            this.handleWrong();
        }
    }

    submit = (event) => {
        event.preventDefault();
        const { companyName, role } = this.state;
        const isCompanyRequired = companyName === "";
        const isRoleRequired = role === "";

        if (isCompanyRequired || isRoleRequired ) {
            this.setState({ companyRequired: isCompanyRequired, roleRequired: isRoleRequired });
            return;
        }

        this.postData();
    };

    render() {
        const heading = '(: (: (: Information is Helpful for Future Techies :) :) :)';
        const { companyName, role, CTC, round1Info, round2, round3, round4, round5, codingQuestionsTopic,hr, codingAsked, shortlist, roleRequired, companyRequired,  round1, wrong, successSubmission } = this.state;
        
        return (
            <div className="main-cont">
                <Header />
                <div className='bottom-cont'>
                    {(wrong || !successSubmission) && 
                    <div className='form-cont'>
                        <h1 className='main-head'>{heading}</h1>
                        <form className='form' onSubmit={this.submit}>
                            <label htmlFor="companyName" className='label'>Company Name</label>
                            <input 
                                type='text' id='companyName' className='input' onChange={this.handleCompanyName} onBlur={this.companyReq} required 
                                placeholder='Enter the name of the company' value={companyName}
                            />
                            {companyRequired && <p className='req'>*This is required</p>}

                            <label htmlFor="role" className='label'>Role Offered</label>
                            <input 
                                type='text' id='role' className='input' onChange={this.handleRole} onBlur={this.roleReq} required 
                                placeholder='Enter the Role offered' value={role}
                            />
                            {roleRequired && <p className='req'>*This is required; if unknown, mention "Role not mentioned"</p>}

                            <label htmlFor="ctc" className='label'>CTC per Annum</label>
                            <input 
                                type='number' id='ctc' className='input' onChange={this.handleCTC} onBlur={this.ctcReq} 
                                placeholder='Enter the CTC mentioned' value={CTC}
                            />

                            <label className='label'>Shortlist based on</label>
                            <div className='radios'>
                                <div className='radioCont'><input type='radio' id='shortlistResume' name='shortlist' value='Resume' onChange={this.handleShortlist} checked={shortlist==='Resume'} required/>
                                <label htmlFor='shortlistResume' className='radioLabel'>Resume</label></div>
                                <div className='radioCont'><input type='radio' id='shortlistMarks' name='shortlist' value='GPA/% of B.Tech/10/12' onChange={this.handleShortlist} checked={shortlist==='GPA/% of B.Tech/10/12'} required/>
                                <label htmlFor='shortlistMarks' className='radioLabel'>GPA/% of B.Tech/10/12</label></div>
                                <div className='radioCont'><input type='radio' id='shortlistBoth' name='shortlist' value='Resume & GPA/% of B.Tech/10/12' onChange={this.handleShortlist} checked={shortlist==='Resume & GPA/% of B.Tech/10/12'} required/>
                                <label htmlFor='shortlistBoth' className='radioLabel'>Both</label></div>
                            </div>
                            <label className='label'>Round 1</label>
                            <div className='radios'>
                                <div className='radioCont'><input type='radio' id='round1Exam' name='round1' value='Exam/Test' checked={round1==='Exam/Test'} onChange={this.handleRound1} required/>
                                <label htmlFor='round1Exam' className='radioLabel'>Exam/Test</label></div>
                                <div className='radioCont'><input type='radio' id='round1Assignment' name='round1' value='Assignment' checked={round1==='Assignment'} onChange={this.handleRound1} required/>
                                <label htmlFor='round1Assignment' className='radioLabel'>Assignment</label></div>
                            </div>
                            <label htmlFor="round1Info" className='label'>Round 1 Insights</label>
                            <textarea 
                                id='round1Info' className='txtarea' wrap="soft" onChange={this.handleRound1Info} placeholder='Enter round 1 experience'
                                value={round1Info}
                            >
                            </textarea>
                            <label htmlFor="round2Info" className='label'>Round 2 Insights</label>
                            <textarea id='round2Info' className='txtarea' onChange={this.handleRound2} placeholder='Enter round 2 experience' value={round2}></textarea>
                            <label htmlFor="round3Info" className='label'>Round 3 Insights</label>
                            <textarea id='round3Info' className='txtarea' onChange={this.handleRound3} placeholder='Enter round 3 experience' value={round3}></textarea>
                            <label htmlFor="round4Info" className='label'>Round 4 Insights</label>
                            <textarea id='round4Info' className='txtarea' onChange={this.handleRound4} placeholder='Enter round 4 experience' value={round4}></textarea>
                            <label htmlFor="round5Info" className='label'>Round 5 Insights</label>
                            <textarea id='round5Info' className='txtarea' onChange={this.handleRound5} placeholder='Enter round 5 experience' value={round5}></textarea>
                            <label className='label'>Is coding questions asked in Interview?</label>
                            <div className='radios'>
                                <div className='radioCont'>
                                    <input type='radio' name='cq' id='yes' value={true} onChange={this.handleCQ} checked={codingAsked===true} required/>
                                    <label htmlFor='yes' className='radioLabel'>Yes</label>
                                </div>
                                <div className='radioCont'>
                                    <input type='radio' name='cq' id='no' value={false} onChange={this.handleCQ} checked={codingAsked===false} required/>
                                    <label htmlFor='no' className='radioLabel'>No</label>
                                </div>
                            </div>
                            {codingAsked && (<><label className='label' htmlFor='topics'>Coding Questions on which topics</label>
                            <textarea id='topics' className='txtarea' onChange={this.handleTopics} placeholder='Enter coding question topics' value={codingQuestionsTopic}></textarea></>)}
                            <label htmlFor='hr' className='label'>Insights in HR/Manegeral Round</label>
                            <textarea id='hr' className='txtarea' onChange={this.handleHr} required placeholder='Enter HR/Manageral experience' value={hr}></textarea>
                            <button type='submit' className='add-btn'>Add provided information</button>
                        </form>
                    </div>
                    }
                    {successSubmission &&
                        <Success onCloseSuccess={this.handleSuccess}/>
                    }
                    {wrong &&
                        <SomethingWrong onCloseWrong={this.handleWrong}/>
                    }
                </div>
                
            </div>
        );
    }
}

export default Home;
