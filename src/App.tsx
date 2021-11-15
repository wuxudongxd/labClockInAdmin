import Board from "./pages/board";
import UnAudit from "pages/unAudit";

function App() {
  return (
    <div>
      <Board children={<UnAudit />} />
    </div>
  );
}

export default App;
