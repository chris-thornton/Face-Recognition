import React from 'react';

const divRight = {
	marginLeft: 'auto',
	width: '18vw',
	minWidth: '250px'
};

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('https://morning-reaches-66450.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
      	.then(user => {
        	if(user.id){
          	this.props.loadUser(user);
          	this.props.onRouteChange('home');
        }
      })
	}

	render() {
	  const { onRouteChange } = this.props;
	return (
		<div style={divRight}>
		<article className="br4 ma2 ba dark-gray b--black-10 mv4 mr3 shadow-5">
		<main className="black-80" style={{padding: '10px calc(10px+2vw) 0px'}}>
		  <div className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="fw6 ph0 mh0" 
		      style={{fontSize: 'calc(16px + .75vw)'}}>Sign In</legend>
		      <div style={{marginTop: '1vw'}}>
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-75" 
		        type="email" name="email-address"  id="email-address" 
		        onChange={this.onEmailChange}
		        />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-75" 
		        type="password" name="password"  id="password"
		        onChange={this.onPasswordChange}
		         />
		      </div>
		    </fieldset>
		    <div className="">
		      <input
		      onClick={this.onSubmitSignIn} 
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		      type="submit" value="Sign in" />
		    </div>
		    <div className="lh-copy mt3">
		      <p onClick={() => onRouteChange('register')} 
		      className="link dim black db pointer"
		      style={{fontSize: 'calc(10px + .75vw)'}}>Register</p>
		    </div>
		  </div>
		</main>
		</article>
		</div>
		);
}
}

export default SignIn;