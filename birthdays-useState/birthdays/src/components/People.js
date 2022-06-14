import React, { useState } from "react";

import { PeopleData } from "../PeopleData";

const People = () => {
  const [birthdays, setBirthdays] = useState(0);
  const [people, setPeople] = useState(PeopleData);
  return (
    <section className="container">
      <h1>{birthdays} Birthdays Today</h1>
      {people.map((person) => {
        const { name, age, id, img } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <img src={img} alt={name}></img>;
          </div>
        );
      })}
    </section>
  );
};

export default People;
