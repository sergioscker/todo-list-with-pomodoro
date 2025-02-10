// hooks
import { useState, useEffect, useRef } from 'react';

// notifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WORK_TIME = 25 * 60; // 1500 segundos
const BREAK_TIME = 5 * 60; // 300 segundos

export const usePomodoro = () => {
  const [time, setTime] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkMode, setWorkMode] = useState(true);
  const timerRef = useRef(null);

  const startTimer = () => setIsRunning(true);

  const pauseTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(WORK_TIME);
    setWorkMode(true);
    clearInterval(timerRef.current);
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
    if (isRunning && time > 0) {
      timerRef.current = setInterval(() => {
        setTime((time) => (time > 0 ? time - 1 : 0));
      }, 1000);
    } else if (time === 0 && isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);

      // troca de modo e reinicio do pomodoro automaticamente
      setTimeout(() => {
        toggleMode();

        setIsRunning(true);
      }, 2000);
    }

    return () => clearInterval(timerRef.current);
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
