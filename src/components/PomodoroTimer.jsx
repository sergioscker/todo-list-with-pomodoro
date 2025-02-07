// icons
import { Play, Pause, RotateCcw } from 'lucide-react';

// components
import { Button } from './ui/button';
import { useState } from 'react';

function PomodoroTimer() {
  const [isActive, setActive] = useState(false);

  return (
    <div className="p-5">
      <h1 className="text-3xl text-center text-white/80 mb-3">Work Time</h1>

      <p className="text-6xl text-center font-bold mb-6 text-gray-100">18:30</p>

      <div className="flex items-center justify-center p-4 gap-3">
        <Button variant="default">
          {isActive ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
          {isActive ? 'Pause' : 'Play'}
        </Button>

        <Button variant="default">
          <RotateCcw className="w-4 h-4" /> Reset
        </Button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
