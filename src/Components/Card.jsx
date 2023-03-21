import React, { useEffect, useState } from "react";
import "../App.css";

const Card = ({ item }) => {
  const [price, setprice] = useState(0);

  useEffect(() => {
    if (item?.trade) {
      // setprice(trade object pprice multiply by original price)
    } else if (item?.method === "Tablet/Capsule") {
      setprice(item.price * Number(item.packet_digit));
    } else {
      setprice(item.price);
    }
  }, [item]);

  return (
    <div className="card">
      card
      <p>Drug Code: {item?.drugCode}</p>
      <p>Name: {item?.name}</p>
      <p>Price: {price}</p>
      <p>Packet: {item?.Packet}</p>
      <p>Packet Digit: {item?.packet_digit}</p>
    </div>
  );
};

export default Card;
