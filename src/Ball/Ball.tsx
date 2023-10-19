interface Props{
    number: number;
};

const Ball = ({number}:Props) => {
    return(
        <div className="ball">{number}</div>
    );
};

export default Ball;