// components
import TaskItem from './TaskItem';

function TodoList() {
  const { tasks } = useTasks();
  return (
    <section>
      {/* tasks empty */}
      {tasks.length === 0 ? (
        <div className="flex flex-col gap-4 justify-center items-center py-[64px] px-6">
          <img src="/public/clipboard.svg" alt="file-logo" />

          <p className="flex flex-col text-[16px] font-bold text-gray300">
            You do not have any registered tasks yet.
            <span className="text-[16px] font-medium text-gray300">
              Create tasks and organize your to-do items
            </span>
          </p>
        </div>
      ) : (
        // TasksList
        <ul className="flex flex-col gap-3 items-center justify-start w-full">
          {tasks?.map((task, index) => {
            return <TaskItem key={index}>{task.name}</TaskItem>;
          })}
        </ul>
      )}
    </section>
  );
}

export default TodoList;
