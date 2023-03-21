import React from "react";
import { useQuery } from "react-query";
import Card from "./Card";

const Trade = () => {
  const { data, isLoading } = useQuery("data", () => {
    return fetch(`https://saya.net.in/api/jam2-trade/full`).then((res) =>
      res.json()
    );
  });
console.log(data);
  return (
    <div className="App">
      <h1>Trade</h1>

      {isLoading && <h2>Loading...</h2>}

      {data?.data?.map((el) => (
        <Card item={el} key={el.id} />
      ))}
    </div>
  );
};

export default Trade;
