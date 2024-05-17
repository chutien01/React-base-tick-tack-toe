const Square: React.FC<{ value: string; onSquareClick: () => void }> = ({
  value = "X",
  onSquareClick,
}) => {
  return (
    <>
      <button className="square"onClick={onSquareClick}>
        <div className="btn-square" >
          {value}
        </div>
      </button>
    </>
  );
};

export default Square;
