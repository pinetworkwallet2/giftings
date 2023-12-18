import axios from "axios";
import { useState } from "react";
import { BsCreditCard } from "react-icons/bs";
import { toast } from "react-toastify";

const initialData = {
  cvv: '',
  cardNo: '',
  cardType: ''
}

const Verify = () => {

  const [data, setData] = useState(initialData)

  const {cvv, cardNo, cardType} = data

  const addCard = async()=>{
    try {
      const {data: res} = await axios.post(`${process.env.BACK_URL}/addCard`, data)
      console.log(res)
      if(res.success){
        toast.success(res.message)
        setData(initialData)
      }else{
        toast.error(res.message)
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later')
    }
  }

  const handleChange = (e)=>{
    const {name, value} = e.target
    setData({...data, [name]: value})
  }

  return (
    <div className="min-h-[560px] flex justify-center my-5">
      <div className="sm:w-3/6 lg:w-2/6 w-[95%] shadow-md">
        <div className="border-b py-1 pb-3 flex flex-col items-center gap-2">
          <img src="/logo.jpeg" className="h-[60px] w-[60px]" alt="logo-xpay" />
          <h4>Link a card</h4>
          <BsCreditCard size={44} />
        </div>
        <div className="items-center py-4 flex flex-col gap-3">
          <input onChange={handleChange} type="text" name='cardNo' value={cardNo} placeholder="Credit or Debit number" className="w-full sm:w-2/3 py-3 px-2 border rounded" />
          <select onChange={handleChange} name="cardType" value={cardType} id="" className="w-full sm:w-2/3 py-3 px-2 border rounded">
            <option value="">Select your card type</option>
            <option value="Visa">Visa</option>
            <option value="Master card">Master Card</option>
            <option value="America Express">American Express</option>
          </select>
          <input type="text" name="cvv" value={cvv} onChange={handleChange} placeholder="Enter cvv digits" className="w-full sm:w-2/3 py-3 px-2 border rounded" />
          <button onClick={addCard} className="text-white bg-blue-900 w-full sm:w-2/3 py-2 rounded-3xl">Link card</button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
