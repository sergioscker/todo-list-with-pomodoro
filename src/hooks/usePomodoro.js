// hooks
import { useState, useEffect } from 'react';

// notifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WORK_TIME = 25 * 60; // 1500 segundos
const BREAK_TIME = 5 * 60; // 300 segundos

export const usePomodoro = () => {
  const [time, setTime] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkMode, setWorkMode] = useState(true);

  const startTimer = () => setIsRunning(true);

  const pauseTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(WORK_TIME);
    setWorkMode(true);
  };

  const toggleMode = () => {
    setWorkMode((prevMode) => {
      const newMode = !prevMode;

      setTime(newMode ? WORK_TIME : BREAK_TIME);

      toast.success(newMode ? 'Work time! 🏋️‍♂️' : 'Time to rest! 😌');

      return newMode;
    });
  };

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((time) => (time > 0 ? time - 1 : 0));
      }, 1000);
    } else if (time === 0 && isRunning) {
      setIsRunning(false);

      // troca de modo e reinicio do pomodoro automaticamente
      setTimeout(() => {
        toggleMode();

        setIsRunning(true);
      }, 2000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time, isWorkMode]);

  return {
    time,
    isRunning,
    isWorkMode,
    startTimer,
    pauseTimer,
    resetTimer,
  };
};
