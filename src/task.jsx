import React from 'react';
import styles from './task.module.css'
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {
                (provided, snapshot) => {
                    console.log(snapshot.isDragging)
                    const style = {
                        backgroundColor: snapshot.isDragging ? 'blue' : 'white',
                        color: snapshot.isDragging ? 'white' : 'black',
                        ...provided.draggableProps.style,
                    }

                    console.log(style)
                    return (
                        <div
                            className={styles.tasklist}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={ style }
                        >
                            {task.content}
                        </div>
                    )
                }
            }
        </Draggable>
    );
};

export default Task;