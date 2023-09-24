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
  {
    id: 4,
    name: "SeyHa",
    grade: 10,
  },
];
const FilterStudent: React.FC = () => {
  // console.log("Hello Mengty", studentObject.filter((it) => it.grade ===12))
  return (
    <div>
      {studentObject
        .filter((it) => it.grade === 10)
        .map((it) => (
          <ol key={it.id}>
            <li>
              <p>Id: {it.id}</p>
            </li>
            <li>
              <p>Name: {it.name}</p>
            </li>
            <li>
              <p>Grade: {it.grade}</p>
            </li>
          </ol>
        ))}
    </div>
  );
};

export default FilterStudent;
//map display data to web
//filter need map to display data to your website
// filtering array for check condition if true it display but if !true it doesn't display
