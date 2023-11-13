import { useParams } from 'react-router-dom';

const Show = () => {
    const {slug} = useParams();
        return <p>{slug}</p>
    };

export default Show;
