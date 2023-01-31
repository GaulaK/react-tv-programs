const Show = (props) => {
  const { time, title, type, duration, image, isUnseen, direct } = props.data;
  return (
    <div className="show">
      <p className="show-duration">{time}</p>
      <div>
        <img alt={title} src={image} />
      </div>
      <div className="show-description">
        <h2>{title}</h2>
        <span className="underline">{type}</span>
        <p className="informations">
          {duration}
          {isUnseen && <span>• Inédit</span>}
          {direct && <span>• Direct</span>}
        </p>
      </div>
    </div>
  );
};

export default Show;
