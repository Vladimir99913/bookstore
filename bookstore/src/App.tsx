import { Provider } from "react-redux";
import { store } from './redux/store';
import { Title } from "./components/Title";
import { Card } from "./components/card/Card";
import { CardCart } from "./components/card/CardCart";
import { CardMain } from "./components/card/CardMain";
import { Layout } from "./components/layout/Layout";
import { Main } from "./pages/Main";

export function App() {

  return (
    <>
    <Provider store={store}>
    <Layout>
      <Title title="New Book"/>
      {/* <Card/> */}
      {/* <CardMain/> */}
      {/* <CardCart /> */}
      <Main/>
    </Layout>
    </Provider>
    </>
  )
}

