import React from "react";

function Client ({ client, setClient }){
  
  const onChange = e => {
    let string = e.target.value;
    setClient(string);
    string = "";
  };

  return (
  
      <div className="form-cart">
        <h2>¿Cómo te llamas?</h2>
          <form>
          <input className="input" onChange={onChange} value={client} />
          </form>
      </div>
  );
};

export default Client

