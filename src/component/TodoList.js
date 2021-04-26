
import './TodoList.css';

const TodoList = ({deleted, name,stt,url}) => {
    return (
        <tr className={name.delete ? 'delete' :''} onClick={deleted}>
        <th scope="row">{stt+1}</th>
        <td>{name.detail}</td>
        <td>{name.time}</td>
        <td>{name.complete ? 'Done' : 'Not Yet'}</td>
        <td><img src={url}/></td>
    </tr>
    )
}


export default TodoList;