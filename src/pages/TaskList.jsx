import { Link } from 'react-router-dom';
import style from './Tasks.module.css';
import { tasksData } from '../data/tasks';

export function TaskList() {

    return (
        <div className={style.content}>
            <h1 className={style.title}>Tasks</h1>
            <div className={style.taskList}>
                {tasksData.map(task => <p>{task.id} {task.text} <Link to={`/tasks/${task.id}`}>Read more</Link></p>)}
            </div>
        </div>
    );
}