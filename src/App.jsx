import PomodoroTimer from './components/PomodoroTimer';
import TodoList from './components/TodoList';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">
        Extreme productivity
      </h1>

      <div>
        <TodoList />
        <PomodoroTimer />
      </div>
    </div>
  );
}

export default HomePage;
