const Card = ({ children, isBig }) => {
  return (
    <div
      className={`p-2 ${isBig ? "w-3/4 mx-auto" : "w-full"} my-${
        isBig ? "8" : "4"
      }`}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  isBig: false
};

export default Card;
