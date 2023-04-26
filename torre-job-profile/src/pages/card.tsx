import cardStyles from '../styles/card.module.css'
import axios from 'axios';

function MyPage({ data }) {
    return (
        <div>
            <h1>My Page</h1>
            <ul>
                {data.map((item:any) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}
export aync function getServerSideProps() {

    const response = await axios.get('https://my-api.com/my-data');
    const data = response.data;

    // Pass data tot he page component as props
    return { props: { data } };
}

export default MyPage;