import { useEffect, useState } from "react";

import Item from "./Item";
import Loading from "./Loading";
import { Data } from "../data";

const url = "https://course-api.com/react-tours-project";

function Items() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (title) => {
    const newTours = tours.filter((tour) => tour.name !== title);
    setTours(newTours);
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return <h1>No tours remaining</h1>;
  }
  return (
    <>
      {tours.map((tour) => {
        const { id, name, info, image, price } = tour;

        return (
          <Item
            key={id}
            title={name}
            img={image}
            text={info}
            price={price}
            handleClick={removeTour}
          />
        );
      })}
    </>
  );
}

export default Items;
