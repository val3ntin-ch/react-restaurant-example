export default function Pizza({ name, description, image }) {
  return (
    <div className="pizza">
      <h1>{name}</h1>
      <p>{description}</p>
      {image && <img src={image} alt={name} />}
    </div>
  );
}
