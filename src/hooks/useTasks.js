import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// analisa os dados que chegam no localStorage
const storedTasks = () => JSON.parse(localStorage.getItem('tasks') || '[]');

export const useTasks = () => {
  const queryClient = useQueryClient();

  const { data: tasks = [] } = useQuery({
    queryKey: ['tasks'],
    queryFn: storedTasks,
  });

  // transforma os dados em string
  const updatedLocalStorage = (newTasks) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    queryClient.invalidateQueries(['tasks']);
  };

  // adiciona ao array as tasks já contidas + as novas tasks
  const addTasks = useMutation({
    mutationFn: (task) => {
      updatedLocalStorage([
        ...tasks,
        { id: Date.now(), text: task, completed: false },
      ]);
    },
  });

  // tarefa finalizada checkbox
  const completedTask = useMutation({
    mutationFn: (id) => {
      updatedLocalStorage(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task,
        ),
      );
    },
  });

  // deleta tasks comparando id
  const deleteTask = useMutation({
    mutationFn: (id) => {
      updatedLocalStorage(tasks.filter((task) => task.id !== id));
    },
  });

  const editTasks = useMutation({
    mutationFn: ({ id, newTask }) => {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, text: newTask } : task,
      );

      updatedLocalStorage(updatedTasks);
    },
  });

  // retorna todas as funções para utilizar contexto
  return {
    tasks,
    addTasks: addTasks.mutate,
    completedTask: completedTask.mutate,
    deleteTask: deleteTask.mutate,
    editTasks: editTasks.mutate,
  };
};
