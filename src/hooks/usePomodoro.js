import { useState, useEffect } from 'react';

export const usePomodoro = () => {
  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  const [time, setTime] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('work');

  useEffect(() => {

    
  }, []);
};
