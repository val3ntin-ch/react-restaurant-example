export default function Pizza({ name, description, image }) {
  return (
    <div className="pizza">
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={image ? image : "https://picsum.photos/200"} alt={name} />
    </div>
  );
}
