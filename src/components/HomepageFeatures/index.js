import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          <h2> Welcome to Knockout City </h2>
          <p> Knockout City is a bustling metropolis filled with excitement and adventure. Whether you're a seasoned fighter or a newcomer to the game, there's something for everyone in this city. From the neon lights of the downtown district to the quiet streets of the suburbs, Knockout City has it all. So come on in, make yourself at home, and get ready to experience the thrill of the fight! </p>
          <div className={styles.img}>
            <img src="https://cdn.discordapp.com/attachments/798935892059488276/1102977194805964800/image.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
