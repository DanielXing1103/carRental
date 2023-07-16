
const SideTop = (props) => {
  return (
    <div className="sideTop-container">
      <div className="sideTop-text">
        <h1>{props.title}</h1>
        <p>{props.path}</p>
      </div>
    </div>
  );
};

export default SideTop;
