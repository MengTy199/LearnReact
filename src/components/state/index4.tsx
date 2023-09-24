import React, { ChangeEvent, useState } from "react";

const InputText: React.FC = () => {
  const [firstName, setFirstName] = useState(String);
  const [lastName, setLastName] = useState(String);

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e:ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }
  const handleReset = () => {
    setFirstName("");
    setLastName("");
  };

  //   const handerFirstName =(e)=>{
  //     setFirstName(e)
  //   }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>
          Hi,{firstName} {lastName}
        </h1>
        <button onClick={handleReset} >Reset </button>
      </form>
    </>
  );
};

export default InputText;
