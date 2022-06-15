import React, { useState } from "react";
import charlie from "../static/imgs/charlie-brown.png";
import arthur from "../static/imgs/arthur.png";
import elmo from "../static/imgs/elmo.png";
import jotaro from "../static/imgs/jotaro.jpeg";

import { PeopleData } from "../PeopleData";

const People = () => {
  const [people, setPeople] = useState(PeopleData);
  const [imgs, setImgs] = useState([charlie, arthur, elmo, jotaro]);
  const [birthdays, setBirthdays] = useState(people.length);

  const handleClear = () => {
    setPeople({});
    setBirthdays(0);
  };

  const display = () => {
    if (people.length > 0) {
      return (
        <>
          <h1>{birthdays} Birthdays Today</h1>
          {people.map((person) => {
            const { name, age, id } = person;

            return (
              <div key={id} className="flex-container">
                <div className="flex-child">
                  <img src={imgs[id - 1]} alt={name}></img>
                </div>
                <div className="flex-child">
                  <h3 className="name">
                    <b>{name}</b> <br />{" "}
                    <span className="age-text">{age} years</span>
                  </h3>
                </div>
              </div>
            );
          })}

          <button type="button" className="clear-btn" onClick={handleClear}>
            Clear All
          </button>
        </>
      );
    }
    return <h1>{birthdays} Birthdays Today</h1>;
  };

  return (
    <section className="container" style={{ fontSize: 25 }}>
      {display()}
    </section>
  );
};

export default People;
