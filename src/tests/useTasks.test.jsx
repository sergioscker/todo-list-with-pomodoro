import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from '@/pages/Home';
import PomodoroTimer from '@/components/PomodoroTimer';

const queryClient = new QueryClient();

describe('Todo List', () => {
  it('should render HomePage and add tasks', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>,
    );

    const inputElement = screen.getByPlaceholderText('Add a new task');
    const createButton = screen.getByText('Create');

    await userEvent.type(inputElement, 'Teste');
    await userEvent.click(createButton);

    expect(await screen.findByText('Teste')).toBeInTheDocument();
  });

  it('should start and reset PomodoroTimer correctly', async () => {
    render(<PomodoroTimer />);

    const startButton = screen.getByText('Play');
    const resetButton = screen.getByText('Reset');
    const timerDisplay = screen.getByTestId('timer-display');
    const initialTime = timerDisplay.textContent;

    await userEvent.click(startButton);

    await waitFor(() => expect(timerDisplay.textContent).toBe('24 : 59'));

    // espera que não esteja no tempo inicial
    expect(timerDisplay.textContent).not.toBe(initialTime);

    await userEvent.click(resetButton);

    // espera que reinicie o timer
    expect(timerDisplay.textContent).toBe(initialTime);
  });
});
