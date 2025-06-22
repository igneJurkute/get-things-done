import { Link, useParams } from 'react-router-dom';
import style from './Welcome.module.css';
import { tasksData } from '../data/tasks';

export function Task() {
    const { id } = useParams();

    const task = tasksData.filter(task => '' + task.id === id)[0];

    return (
        <div>
            <h1>Task</h1>
            {task ? <p>{task.text}</p> : <p>ERROR: task not found.</p>}
            <Link to='/tasks'>Back to list</Link>
        </div>
    );
}