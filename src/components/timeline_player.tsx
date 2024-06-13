import React, { useMemo, useEffect, useState } from 'react';

import { timelineData } from '../lib/timeline';

export const TimelinePlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prevTime => prevTime + 0.01); // 10ms ごとに更新
    }, 10); // 10ms 間隔で実行

    return () => clearInterval(interval);
  }, []);

  const currentItems = useMemo(() => {
    return timelineData.filter(
      item => item.time <= currentTime && item.time + item.duration > currentTime
    )
  }, [currentTime]);

  return (
    <>
      {currentItems.map(item => (
        <React.Fragment key={item.id}>
          {item.component}
        </React.Fragment>
      ))}
    </>
  );
}
