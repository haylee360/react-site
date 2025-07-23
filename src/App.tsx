import "./App.css";
import Beams from "./components/Beams/Beams";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>
    </>
  );
}

export default App;
