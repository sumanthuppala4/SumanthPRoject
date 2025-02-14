//import Counter from "@components/Counter/Counter";
import Counter from "./Features/Components/Counter/Counter";
import "./App.css";
import ExternalCounter from "./Features/Components/ExternalCounter/ExternalCounter";
import SlowComponent from "./Features/Components/SlowComponent/SlowComponent";
import UseAsyncExpample from "./Features/Components/UseAsyncExample/UseAsyncExample";
import CustomDataGrid from "@components/CustomDataGrid/CustomDataGrid";
import { APP_NAME } from "@utils/constants";

function App() {
  return (
    <>
      <UseAsyncExpample />
      <CustomDataGrid />
      {APP_NAME}
    </>
  );
}

export default App;
