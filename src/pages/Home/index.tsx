import { Provider } from "./context";
import UI from "./UI";

export default function Home() {
  return (
    <Provider>
      <UI />
    </Provider>
  );
}
