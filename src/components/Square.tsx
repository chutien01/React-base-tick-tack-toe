const Square: React.FC<{ value: string; onSquareClick: () => void }> = ({
  value = "X",
  onSquareClick,
}) => {
  return (
    <>
      <button className="square">
        <div className="btn-square" onClick={onSquareClick}>
          {value}
        </div>
      </button>
    </>
  );
};

export default Square;
