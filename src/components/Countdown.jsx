// src/components/CountdownTimer.js
import React, { useEffect, useState } from 'react';
import moment from 'moment';

function CountdownTimer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const duration = moment.duration(moment(endTime).diff(now));
      const hours = Math.floor(duration.asHours());
      const minutes = Math.floor(duration.minutes());
      const seconds = Math.floor(duration.seconds());

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="text-red-600 font-bold text-lg">
      Offer Ends In: {timeLeft}
    </div>
  );
}

export default CountdownTimer;
