//hooks
import { usePomodoro } from '@/hooks/usePomodoro';

// icons
import { Play, Pause, RotateCcw } from 'lucide-react';

// components
import { Button } from './ui/button';

function PomodoroTimer() {
  const { time, isRunning, isWorkMode, startTimer, pauseTimer, resetTimer } =
    usePomodoro();

  // formatação do tempo para string e colocação do 0 para caso a string tenha menos de 2 caracteres
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')} : ${String(secs).padStart(
      2,
      '0',
    )}`;
  };

  return (
    <div
      className={`pomodoro-container ${
        isWorkMode ? 'Break' : 'Work'
      } flex-col items-center justify-center w-[250px] border border-gray-300 rounded-md p-5 mt-5`}
    >
      {/* Time Mode */}
      <h1 className="text-3xl text-center text-white/80 mb-3">
        {isWorkMode ? 'Work Time' : 'Break Time'}
      </h1>

      {/* Timer */}
      <p
        className="text-6xl text-center font-bold mb-6 text-gray-100"
        data-testid="timer-display"
      >
        {formatTime(time)}
      </p>

      {/* buttons play, pause and reset */}
      <div className="flex items-center justify-center p-4 gap-3">
        <Button variant="default" onClick={isRunning ? pauseTimer : startTimer}>
          {isRunning ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
          {isRunning ? 'Pause' : 'Play'}
        </Button>

        <Button variant="default" onClick={resetTimer}>
          <RotateCcw className="w-4 h-4" /> Reset
        </Button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
