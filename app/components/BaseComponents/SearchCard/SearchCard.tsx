//import components
import React from "react";

// import styles
import styles from "./SearchCard.module.scss";

export type SearchCardType = {
    name: string,
    description: string,
    rank: string,
    stars: string
}

type SearchCardPropsType = {
    card: SearchCardType
}

export default function SearchCard(card: SearchCardPropsType): React.JSX.Element {
  const {name, description, rank, stars} = card?.card;
  return (
      <div className={styles.searchCardBlock}>
          <h4>{name}</h4>
          <div className={styles.searchCardBlockDescription}>
              <p>{description}</p>
              <span className={styles.searchCardBlockTooltip}>{description}</span>
          </div>
          <div className={styles.searchCardBlockBottom}>
              <span className={styles.searchCardBlockBottomRank}>
                  rank: <strong>{rank}</strong>
              </span>
              <span className={styles.searchCardBlockBottomStars}>
                  stars: <strong>{stars}</strong>
              </span>
          </div>
      </div>
  );
}
