const TeamFighters = ({ fighters, handleFighter }) => {
  return (
    <div className="fighters">
      <h2>Name: {fighters.name}</h2>
      <img src={fighters.img} alt={fighters.imgalt} />
      <p>Price: {fighters.price}</p>
      <p>Strength: {fighters.strength}</p>
      <p>Agility: {fighters.agility}</p>
      <button onClick={() => handleFighter(fighters)}>Add to Team</button>
    </div>
  );
};

export default TeamFighters;
