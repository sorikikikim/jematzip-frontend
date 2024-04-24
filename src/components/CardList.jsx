import Card from './Card';

export default function CardList({ list }) {
    return (
        <ul class="card-list">
            {list.map((el) => (
                <li>
                    <Card el={el} />
                </li>
            ))}
        </ul>
    );
}
