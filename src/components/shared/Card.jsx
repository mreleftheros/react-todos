const Card = ({ children, isBig }) => {
  return <div className={`p-2`}>{children}</div>;
};

Card.defaultProps = {
  isBig: false
};

export default Card;
