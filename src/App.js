import initialData from "./initial-data";
import { useState} from "react";
import Column from "./column";
import {DragDropContext} from "react-beautiful-dnd";

function App() {

  const [data, setData] =  useState(initialData);

  const onDragEnd = ( result ) => {
      const { destination, source, draggableId } = result

      if( ! destination ) {
          return;
      }

      if( destination.droppableId === source.droppableId && source.index === destination.index ) {
          return;
      }

      const column = data.columns[source.droppableId]

      const newTasksIds = [...column.taskIds];
      newTasksIds.splice(source.index,1)
      newTasksIds.splice(destination.index,0,draggableId)

      const newColumn = {
          ...column,
          taskIds: newTasksIds
      }

      setData({
          ...data,
          columns: {
              ...data.columns,
              [newColumn.id]: newColumn
          }
      })
  };

  return (
    <div className="App">
      <DragDropContext
          onDragEnd={onDragEnd}
      >
        {
            data.columnOrder.map( columnId => {
                const column = data.columns[columnId]
                const tasks = column.taskIds.map( taskId => data.tasks[taskId] )

                return <Column key={column.id} tasks={tasks} column={column} />
            } )
        }
      </DragDropContext>
    </div>
  );
}

export default App;
