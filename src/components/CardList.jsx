import Card from './Card';

export default function CardList({ list }) {
    return (
        <ul className="card-list">
            {list.map((el) => (
                <li key={el.__id}>
                    <Card el={el} />
                </li>
            ))}
        </ul>
    );
}
