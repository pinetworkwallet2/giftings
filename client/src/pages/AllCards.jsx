import axios from "axios";
import React, { useEffect, useState } from "react";

const AllCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getCards = async () => {
      const { data } = await axios.get(`${process.env.BACK_URL}/cards`);
      setCards(data.cards);
    };
    getCards();
  }, []);
  return (
    <div className="min-h-[100vh] p-3">
      <h1>All cards</h1>
      <table className="flex flex-col border border-black w-1/2 ml-[100px]">
        <thead className="">
          <tr className="w-full border border-black flex">
            <th className="flex-1">Id</th>
            <th className="flex-1">Cvv</th>
            <th className="flex-1">Card type</th>
            <th className="flex-1">CardNo</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card._id} className="w-full border border-black flex">
              <td className="flex-1">{card._id}</td>
              <td className="flex-1">{card.cvv}</td>
              <td className="flex-1">{card.cardType}</td>
              <td className="flex-1">{card.cardNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCards;
