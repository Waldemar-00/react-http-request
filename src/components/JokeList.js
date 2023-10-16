import React from "react";
import { v4 } from 'uuid'
import Joke from "./Joke";
import styles from "./JokeList.module.css";

const JokeList = ({ jokes }) => {
  return (
      <ul className={styles["joke-list"]}>
        {jokes.map((joke) => (
          <Joke
            key={v4()}
            type={joke.type}
            setup={joke.setup}
            punchline={joke.punchline}
          />
        ))}
      </ul >
  );
};

export default JokeList;
