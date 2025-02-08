import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, test, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { useTasks } from '../hooks/useTasks';

// Criando um componente de teste que usa o hook
const TestComponent = () => {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();
  return (
    <div>
      <ul data-testid="task-list">
        {tasks.map((task) => (
          <li key={task.id} data-testid={`task-${task.id}`}>
            {task.text} - {task.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
      <button
        onClick={() => addTask({ id: 1, text: 'New Task', completed: false })}
        data-testid="add-task-btn"
      >
        Add Task
      </button>
      <button onClick={() => toggleTask(1)} data-testid="toggle-task-btn">
        Toggle Task
      </button>
      <button onClick={() => removeTask(1)} data-testid="remove-task-btn">
        Remove Task
      </button>
    </div>
  );
};

// Criando um wrapper para React Query
const createWrapper = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useTasks Hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should return empty task list', () => {
    render(<TestComponent />, { wrapper: createWrapper });

    const taskList = screen.getByTestId('task-list');
    expect(taskList.children.length).toBe(0);
  });

  test('should add new task', () => {
    render(<TestComponent />, { wrapper: createWrapper });

    act(() => {
      screen.getByTestId('add-task-btn').click();
    });

    expect(screen.getByTestId('task-1')).toHaveTextContent(
      'New Task - Pending',
    );
  });

  test('should change task status', () => {
    render(<TestComponent />, { wrapper: createWrapper });

    act(() => {
      screen.getByTestId('add-task-btn').click();
      screen.getByTestId('toggle-task-btn').click();
    });

    expect(screen.getByTestId('task-1')).toHaveTextContent(
      'New Task - Completed',
    );
  });

  test('should delete a task', () => {
    render(<TestComponent />, { wrapper: createWrapper });

    act(() => {
      screen.getByTestId('add-task-btn').click();
      screen.getByTestId('remove-task-btn').click();
    });

    const taskList = screen.getByTestId('task-list');
    expect(taskList.children.length).toBe(0);
  });
});
