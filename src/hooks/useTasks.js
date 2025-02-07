import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// analisa os dados que chegam no localStorage
const storedTasks = () => JSON.parse(localStorage.getItem('tasks') || []);

export const useTasks = () => {
  const queryClient = useQueryClient();

  const { data: tasks = [] } = useQuery(['tasks'], storedTasks);

  // transforma os dados em string
  const updatedLocalStorage = (newTasks) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    queryClient.invalidateQueries(['tasks']);
  };

  // adiciona ao array as tasks já contidas + as novas tasks
  const addTasks = useMutation((task) => updatedLocalStorage([...tasks, task]));

  // tarefa finalizada checkbox
  const completedTask = useMutation((id) =>
    updatedLocalStorage(
      tasks.map((task) =>
        task.id === id ? { ...tasks, completed: !task.completed } : task,
      ),
    ),
  );

  // deleta tasks comparando id
  const deleteTask = useMutation((id) =>
    updatedLocalStorage(tasks.filter((task) => task.id !== id)),
  );

  // retorna todas as funções para utilizar contexto
  return {
    tasks,
    addTasks: addTasks.mutate,
    completedTask: completedTask.mutate,
    deleteTask: deleteTask.mutate,
  };
};
