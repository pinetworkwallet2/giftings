import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>
        <span className="text-4xl text-red-500 font-bold">{timeLeft.days}</span> days,
         <span className="text-3xl text-red-500 font-bold">{timeLeft.hours}</span> hours, 
         <span className="text-2xl text-red-500 font-bold">{timeLeft.minutes}</span>{" "} minutes, 
         <span className="text-xl text-red-500 font-bold">{timeLeft.seconds}</span> seconds remaining
      </p>
    </div>
  );
};
export default CountdownTimer;
