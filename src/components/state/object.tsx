import React, { useState } from "react";
type StudentTypeContact ={
    phone: string;
    address: string;
}
type studentType = {
  id?: number;
  name?: string;
  contact: StudentTypeContact;
};

const ObjectState: React.FC = () => {
  const [studentData, setStudentData] = useState<studentType>({
    id: 1,
    name:"Mengty",
    contact:{
        phone:'0923839',
        address: 'Phh'
    }
  });

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value === '' ? 'n/a' : e.target.value;
    setStudentData({
       ...studentData,
       id: parseInt(value)
    })
  } 

  const handleChangeName= (e: React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value === '' ? 'n/a' : e.target.value;
    setStudentData({
        ...studentData,
        name: value
     })
  }
  const handleChangePhone= (e: React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value === '' ? 'n/a' : e.target.value;
    setStudentData({
        ...studentData,
        contact:{
            ...studentData.contact,
            phone: value
    

        }
     })
     console.log(value)
  }

  const handleChangeAddress= (e: React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value === '' ? 'n/a' : e.target.value;
    setStudentData({
        ...studentData,
        contact:{
            ...studentData.contact,
            address: value
    

        }
     })
     console.log(value)
  }
  return (
    <div>
      <div>
        <label htmlFor="id">Id: </label>
        <input type="number"  onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="name" >Name: </label>
        <input type="text" onChange={handleChangeName}/>
      </div>
      <div>
        <label htmlFor="phone" >Phone: </label>
        <input type="text" onChange={handleChangePhone}/>
      </div>
      <div>
        <label htmlFor="address" >Address: </label>
        <input type="text" onChange={handleChangeAddress}/>
      </div>

      <br />
      <hr />
      <div>
        Result:
        <div>Id: {studentData !== undefined ? studentData.id: 'n/a'}</div>
        <div>Name: {studentData!== undefined? studentData.name : 'n/a'}</div>
        <div>Phone: {studentData !== undefined ? studentData.contact.phone: 'n/a'}</div>
        <div>Address: {studentData!== undefined? studentData.contact.address : 'n/a'}</div>
      </div>
    </div>
  );
};

export default ObjectState;
