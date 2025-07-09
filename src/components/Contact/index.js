import { Component } from "react";
import "./index.css"
import { MdEmail ,MdPhone , MdLocationOn} from 'react-icons/md';

class Contact extends Component{
    state={userName:'',userMail:'',userMsg:'' , errorMsg:""}
    onChangeName=(e)=>{
        this.setState({userName:e.target.value})
    }
     onChangeEmail=(e)=>{
        this.setState({userMail:e.target.value})
    }
     onChangeMsg=(e)=>{
        this.setState({userMsg:e.target.value})
    }
    sendMsg=()=>{
        const{userMail , userMsg , userName }=this.state

        if(userMail==='' || userMsg==='' || userName===""  ){
            this.setState({errorMsg:"Empty"})
        }else if (userMail!=='' || userMsg!=='' || userName!=="" ){
            this.setState({errorMsg:"Fill" , 
                userName:'',userMsg:"",userMail:""})
        }else{
           this.setState({errorMsg:""})
        }
    }
    showMsg=()=>{
        const{errorMsg }=this.state
        switch(errorMsg){
            case "Empty":
                return<p className="error">Fill Proper Details*</p>
            case "Fill":
                return <p className="not-error">Massege has successfully send </p>
            default:
                return null
        }
    }
    render(){
        const{errorMsg , userMail , userName , userMsg}=this.state
        const msg= errorMsg ==="Empty" ?"No" :""
        return(
             <div className="contact-container animation-container">
                <h1 className="contact-head animation-container">Contact</h1>
                <p className="contact-pera animation-container">I'm always interested in hearing about new opportunities and exciting projects. Let's discuss how we can work together!</p>
                
                <div className="som-card  animation-container">
                    <p className="some-head animation-container">Let's Build Something Amazing</p>
                    <p className="some-pera animation-container">I'm currently available for freelance projects and full-time opportunities. Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.</p>
                </div>
                <div className="divide-two">
                    <div className="contact-information animation-container">
                            <div className="information-container animation-container">
                                <MdEmail className="email-logo animation-container"/>
                                <div className="information-detailscontainer animation-container">
                                    <p className="email-name1 animation-container">Email</p>
                                    <p className="email-name animation-container">sivaprasad111222333@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="information-container animation-container">
                                <MdPhone className="phone-logo animation-container"/>
                                <div className="information-detailscontainer animation-container">
                                    <p className="phone-name1 animation-container">Phone</p>
                                    <p className="email-name animation-container">6305168684</p>
                                </div>
                            </div>

                            <div className="information-container animation-container">
                                <MdLocationOn className="location-logo animation-container"/>
                                <div className="information-detailscontainer animation-container">
                                    <p className="location-name1 animation-container">Location</p>
                                    <p className="email-name animation-container">Andhra Pradesh, Chirala, 523155</p>
                                </div>
                            </div>
                    </div>
                    <div className="msg-card  animation-container">
                        <div className="input-card animation-container">
                            <label className="label" htmlFor="nameId animation-container">Name</label>
                            <input value={userName} onChange={this.onChangeName} className="input animation-container" id='nameId' type="text" placeholder="Your Name"/>
                        </div>
                        <div className="input-card">
                            <label className="label" htmlFor="emailId">Email</label>
                            <input value={userMail} onChange={this.onChangeEmail} className="input"  id='emailId' type="text" placeholder="Your Name"/>
                        </div>
                        <div className="input-card">
                            <label className="label" htmlFor="massegeId">Massege</label>
                            <textarea value={userMsg} onChange={this.onChangeMsg} className="textarea"  id='massegeId' type="" placeholder="Your Name"/>
                        </div>
                        
                        <button onClick={this.sendMsg} className="msg-button ">Send Massage</button>

                        {this.showMsg()}
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact