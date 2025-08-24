import "./App.css";
import { InputNode } from "./Features/Components/nodes/inputNode";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { ReactFlowProvider } from "reactflow";

function App() {
  return (
    <Provider store={store}>
      <ReactFlowProvider>
        <InputNode />
      </ReactFlowProvider>
    </Provider>
  );
}

export default App;
