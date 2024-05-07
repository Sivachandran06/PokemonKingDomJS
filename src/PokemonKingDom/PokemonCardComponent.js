import { useState } from "react";
import cardStyles from "./PokemonCardComponent.module.css";
import PokemonModalComponent from "./PokemonModalComponent";
import BackDrop from "./BackDrop";

function PokemonCardComponent(props) {
  const { pokemon } = props;

  const { id, name, type, image } = pokemon;

  const [modal, setModal] = useState(false);

  // CARD FOR THE POKEMON.
  return (
    <>
      <div className={` ${cardStyles["card-container"]} ${cardStyles[type]} `}>
        <div className={cardStyles.number}>#{id}</div>
        <img className={cardStyles.image} src={image} alt="Pokemon" />
        <div className="detail-wrapper">
          <h3>{name}</h3>
          <p>Type: {type}</p>
        </div>

        <div
          onClick={() => {
            setModal((old) => !old);
          }}
          className={cardStyles.knowmore}
        >
          Know More...
        </div>
      </div>

      {/* Modal  */}
      {/* {modal && <PokemonModalComponent pokemon={pokemon} />} */}
      {modal && (
        <BackDrop onClose={() => setModal(false)}>
          {" "}
          <PokemonModalComponent
            onClose={() => setModal(false)}
            pokemon={pokemon}
          />{" "}
        </BackDrop>
      )}
    </>
  );
}

export default PokemonCardComponent;