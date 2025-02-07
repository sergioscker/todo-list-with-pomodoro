// components
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

// icons
import { FaTrashAlt } from 'react-icons/fa';

function TodoListItem() {
  return (
    <div className="flex justify-between items-center gap-4">
      {/* checkbox container */}
      <Checkbox className="rounded-full" />

      {/* textTasks */}
      <p className="text-white text-2xl text-left font-normal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id corporis
        nihil blanditiis doloribus magnam repellendus iure animi aliquam harum
        labore quisquam tempora, sunt facilis officiis dolore. Optio porro quas
        enim?
      </p>

      {/* trash button */}
      <Button type="button" aria-label="Delete task">
        <FaTrashAlt className="w-4 h-4 text-gray-400" />
      </Button>
    </div>
  );
}

export default TodoListItem;
