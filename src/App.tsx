import { res } from "./utils/cloudbase";

console.log(res.data[0].nickName);
const nickName = res.data[0].nickName;

function App() {
  return <div>{nickName}</div>;
}

export default App;
