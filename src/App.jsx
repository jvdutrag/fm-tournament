import { Bracket } from "react-brackets";

import upper from "./status/upper.json";
import lower from "./status/lower.json";
import final from "./status/final.json";

import config from "./config.json";

import "./App.css";

export default function App() {
  return config.isFinal ? (
    <div>
      <h1 style={{ textAlign: "center" }}>
        CELLBIT'S FIRST FRUIT MOUNTAIN TOURNAMENT
      </h1>
      <h2 style={{ textAlign: "center" }}>
        GRAND FINAL
      </h2>
      <div>
        <Bracket rounds={final} />
      </div>
    </div>
  ) : (
    <div>
      <h1 style={{ textAlign: "center" }}>
        CELLBIT'S FIRST FRUIT MOUNTAIN TOURNAMENT
      </h1>
      <h2 style={{ textAlign: "center" }}>
        Current Round: {config.currentRound}
      </h2>
      <div>
        <h1>Upper Bracket</h1>
        <Bracket rounds={upper} />
      </div>
      <div>
        <h1>Lower Bracket</h1>
        <Bracket rounds={lower} />
      </div>
    </div>
  );
}
