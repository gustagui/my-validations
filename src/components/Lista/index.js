import './style.css';

export default function Lista(props) {
    return (
        <ul>
            <li>
                <h1>{props.text}</h1>
            </li>
        </ul>
    )
}