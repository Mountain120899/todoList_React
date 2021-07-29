import React from 'react'

import {ACTION} from '../App.js';

export default function Todo({item, dispatch}) {
    return (
        <tr style={{color:  item.status ? "black" : "red"}}>
            <td>{item.id}</td>
            <td>{item.describe}</td>
            <td>{item.deadline}</td>
            <td>{item.status ? 'done' : 'not done'}</td>
            <td>
                <button onClick={() => dispatch({type:ACTION.DELETE, payload:{id: item.id}})}>Delete</button>
            </td>
            <td>
                <button onClick={() => dispatch({type:ACTION.TOGGLESTATUS, payload:{id: item.id}})}>Toggle status</button>
            </td>
        </tr>
    )
}
