import React from "react";

type StudentModel = {
  id: number;
  name: string;
  grade: number;
};

const studentObject: StudentModel[] = [
  {
    id: 1,
    name: "Mengty",
    grade: 10,
  },
  {
    id: 2,
    name: "Kok Thyta",
    grade: 12,
  },
  {
    id: 3,
    name: "Tola",
    grade: 10,
  },
];
const Student: React.FC = () => {
  return (
    <div>
      {studentObject.map((it) => (
        <div>
          <div>
            <p>Id: {it.id}</p>
            <p>Name: {it.name}</p>
            <p>Grade: {it.grade}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Student;

// filtering array for check condition if true it display but if !true it doesn't display
