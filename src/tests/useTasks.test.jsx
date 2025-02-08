import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from '@/pages/Home';

const queryClient = new QueryClient();

describe('Todo List', () => {
  it('should render HomePage', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>,
    );

    const inputElement = screen.getByPlaceholderText('Add a new task');
    const buttonCreate = screen.getByText('Create');

    await userEvent.type(inputElement, 'Teste');
    await userEvent.click(buttonCreate);

    expect(await screen.findByText('Teste')).toBeInTheDocument();
  });
});
