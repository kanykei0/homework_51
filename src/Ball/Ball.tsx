import '../App.css';

interface Props{
    number: number;
};

const Ball = ({number}:Props) => {
    return(
        <div className="ball"><p className='num'>{number}</p></div>
    );
};

export default Ball;