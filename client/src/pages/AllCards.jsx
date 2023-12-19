import axios from "axios";
import React, { useEffect, useState } from "react";
import { useUser } from "../context.js/userContext";
import { useNavigate } from "react-router-dom";

const AllCards = () => {
  const [cards, setCards] = useState([]);
  const { loginUser, user } = useUser();
  const navigate = useNavigate();

  async function getProfile() {
    const { data } = await axios.get(`/profile`);
    if (!data.user) {
      return navigate("/");
    }
    loginUser(data.user);
  }
  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        getProfile();
      }, 1);
    }
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const { data } = await axios.get(`/cards`);
      setCards(data.cards);
    };
    getCards();
  }, []);
  return (
    <div className="min-h-[100vh] p-3">
      <h1 className="text-blue-900 text-center">All cards</h1>
      <table className="flex flex-col border border-black w-full md:w-1/2 md:ml-[100px]">
        <thead className="">
          <tr className="w-full border border-black flex">
            <th className="flex-1 border border-black">Id</th>
            <th className="flex-1 border border-black">Cvv</th>
            <th className="flex-1 border border-black">Card type</th>
            <th className="flex-1 border border-black">CardNo</th>
          </tr>
        </thead>
        <tbody>
          {cards?.map((card) => (
            <tr key={card._id} className="w-full border border-black flex">
              <td className="flex-1 border border-black">
                {card._id.slice(0, 10)}
              </td>
              <td className="flex-1 border border-black">{card.cvv}</td>
              <td className="flex-1 border border-black">{card.cardType}</td>
              <td className="flex-1 border border-black">{card.cardNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCards;
