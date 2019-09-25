import React from 'react'
import { Link } from 'react-router-dom'


function FormLogIn ({login , email, password}) {
  return (
    <>
      <div className="form-wrap">
		 		    <div className="tabs-content">
			    <div>
				    <form className="login-form">
							<input type="text"	
										 className="input" 
										 placeholder="Email" 
										 onChange={email}
							/>
							<input type="password" 
										 className="input" 
										 placeholder="Password" 
										 onChange={password}
							/>
              <Link to="/admin">
								<input type="submit" 
											 className="button" 
											 value="Login" 
											 onClick={()=>login()}
								/>
						  </Link>
				    </form>
			    </div>
		    </div>
	    </div>
    </>
  );
}

export default FormLogIn