import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";

import upper from "./status/upper.json";
import lower from "./status/lower.json";

import "./App.css";

function CustomSeed({ seed, breakpoint }) {
  const hasWon = (teamName) => teamName === seed.winner_name;

  return (
    <Seed mobileBreakpoint={breakpoint}>
      <SeedItem>
        {seed.teams.map((team, index) => (
          <SeedTeam
            key={index}
            style={{
              color: hasWon(team.name) ? "green" : undefined
            }}
          >
            {team.name}
          </SeedTeam>
        ))}
      </SeedItem>
    </Seed>
  );
}

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        CELLBIT'S FIRST FRUIT MOUNTAIN TOURNAMENT
      </h1>
      <div>
        <h1>Upper Bracket</h1>
        <Bracket rounds={upper} renderSeedComponent={CustomSeed} />
      </div>
      <div>
        <h1>Lower Bracket</h1>
        <Bracket rounds={lower} renderSeedComponent={CustomSeed} />
      </div>
    </div>
  );
}
