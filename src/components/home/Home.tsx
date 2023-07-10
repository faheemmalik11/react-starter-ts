import {FC} from 'react';
import { Link } from 'react-router-dom';

const Home: FC<object> = () => {
    return (
        <Link to="https://www.celestialstech.com/" className="text-3xl font-bold underline" style={{color: 'white'}} target='_blank'>
            Celestials Technologies Project Starter
        </Link>
    )
};

export default Home;