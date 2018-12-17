import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  checkLabel(label){
    // let current = document.getElementById(label);
    // if(this.state)
    // let formInput = 
  }

  update(field, label){
    // this.checkLabel(label);
    let current = document.getElementById(label);
    return e => {
      this.setState({ [field]: e.target.value });
      if(e.target.value === ""){
        current.style.top = "33%";
        current.style.fontSize = "16px";
      } else {
        current.style.top = "4px";
        current.style.fontSize = "10px";
      }
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.history.push('/browse'));
  }

  renderErrors() {
    if(this.props.errors.length > 0){
      return (
        <div className="form-input form-text form-errors">
        <ul className="errorList">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
        </div>
      );
    } else {
      return "";
    }
  }

  renderRedirect() {
    let prompt = this.props.formType === "Sign In" ? "New to Chillflix? " : "Already have an acoount? ";
    return (
      <div className="prompt">
        <span className="grey-text">{prompt}</span><span>{this.props.navLink}</span>
      </div>
    );
  }

  renderDemo() {
    if(this.props.formType === "Sign In"){
      return(
        <button 
          onClick={
            (e) => {
              e.preventDefault();

              document.getElementById("form-label").style.top = "4px";
              document.getElementById("form-label").style.fontSize = "10px";
              document.getElementById("form-label2").style.top = "4px";
              document.getElementById("form-label2").style.fontSize = "10px";
              this.setState({ email: 'demo@gmail.com', password: 'password' });
              this.props.processForm({email: 'demo@gmail.com', password: 'password'});
            }
          } 
          className="form-input form-btn demo-btn" 
          value="">Demo Login</button>
      );
    }
  }

  render() {

  

    return(
      <div className="splash-container with-form">
        {/* {document.body.style.backgroundImage = "url('https://s3-us-west-1.amazonaws.com/chillflix-dev/bbg.jpeg')"} */}
        <div className="modal">
          <section className="modal-screen">
            <div className="main-header">
              <Link to="/">
                <img className="main-logo" src="https://fontmeme.com/permalink/181212/c5c4b3134061f86d06de9895b1ea5522.png" border="0" />
              </Link>
            </div>

            <section className="modal-form">
              <form className="session-form" onSubmit={(e) => this.handleSubmit(e)}>
               <div className="form-info">
                  <p className="form-header">{this.props.formType} </p>
                

                  <div className="form-inputs">
                    <div className="form-input form-text">
                      <label id="form-label">
                        Email
                        <br/>
                      </label>
                      <input type="text" value={this.state.email} onChange={this.update("email", "form-label")} onFocus={this.checkLabel("form-label")}/>
                    </div>
                    <div className="form-input form-text">
                      <label id="form-label2">
                        Password
                        <br/>
                      </label>
                      <input type="password" value={this.state.password} onChange={this.update("password", "form-label2")} onFocus={this.checkLabel("form-label2")} />
                    </div>
                    
                    <button className="form-input form-btn" value={this.props.formType}>{this.props.formType}</button>
                    {this.renderDemo()}
                    
                      {this.renderErrors()}
                    
                  </div>
                  {this.renderRedirect()}
                </div>
              </form>
            </section>
            
          </section>
        </div>
      </div>
    )
  }
}

export default SessionForm;