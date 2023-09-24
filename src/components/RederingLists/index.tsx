import React from "react";

const people: string[] = ["Kok Dara", "Kok Tola", "Kok SeyHa"];

const PeopleList = people.map((it) => <li>{it}</li>);
const People: React.FC = () => {
  return (
    // <div>
    //   <ul>
    //     {people.map((it) => {
    //         console.log("Hello Kok : ", {it})
    //       return <li>{it}</li>;
    //     })}
    //   </ul>
    // </div>


    <ul>
        {PeopleList}
    </ul>
  );
};

export default People;
