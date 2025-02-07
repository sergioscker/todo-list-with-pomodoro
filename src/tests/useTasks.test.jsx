import { useTasks } from '@/hooks/useTasks';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook } from '@testing-library/react-hooks';
import { beforeEach, describe, expect, test } from 'vitest';

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useTasks Hook', () => {
  // clearning localStorage
  beforeEach(() => {
    localStorage.clear();
  });

  // empty task list
  test('should return empty task list', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    expect(result.current.tasks).toEqual([]);
  });

  // add new task
  test('should add new task', () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTasks({ id: 1, text: 'new task', completed: false });
    });

    expect(result.current.tasks).toEqual([
      { id: 1, text: 'new task', completed: false },
    ]);
  });

  // change status task
  test('should change status task', () => {
    localStorage.setItem(
      'tasks',
      JSON.stringify([{ id: 1, text: 'task', completed: false }]),
    );

    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.completedTask(1);
    });

    expect(result.current.tasks).toEqual([
      { id: 1, text: 'Tarefa', completed: true },
    ]);
  });

  // delete task
  test('should delete a task', () => {
    localStorage.setItem(
      'tasks',
      JSON.stringify([{ id: 1, text: 'Tarefa', completed: false }]),
    );

    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.deleteTask(1);
    });

    expect(result.current.tasks).toEqual([]);
  });
});
