import React from "react";

function Client ({ client, setClient }){
  
  const onChange = e => {
    let string = e.target.value;
    setClient(string);
    string = "";
  };

  return (
    <div >
      <div>
          <h2>¿Cómo te llamas?</h2>
          <br/>
          <input className="input" onChange={onChange} value={client} />
      </div>
    </div>
  );
};

export default Client

