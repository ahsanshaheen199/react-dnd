import React from 'react';
import styles from './column.module.css';
import {Droppable} from "react-beautiful-dnd";
import Task from './task';

const Column = ( { tasks, column } ) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.columntitle}>{column.title}</h3>
            <Droppable droppableId={column.id}>
                {
                    (provided) => (
                        <div
                            className={styles.tasklists}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                tasks.map( (task, index) => {
                                    return (
                                        <Task key={task.id} task={task} index={index} />
                                    )
                                } )
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </div>
    );
};

export default Column;