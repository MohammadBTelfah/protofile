"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setNow(new Date());

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!now) {
    return <div className="live-clock">--:--</div>;
  }

  const time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(now);

  const hour = time.find((p) => p.type === "hour")?.value;
  const minute = time.find((p) => p.type === "minute")?.value;
  const period = time.find((p) => p.type === "dayPeriod")?.value;

  const date = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(now);

  return (
    <div className="live-clock">
      <span className="clock-time">
        {hour}:{minute}
      </span>

      <div className="clock-details">
        <span className="clock-period">{period}</span>
        <span className="clock-date">{date}</span>
      </div>
    </div>
  );
}