import { Title } from "./components/Title";
import { Card } from "./components/card/Card";
import { CardCart } from "./components/card/CardCart";
import { CardMain } from "./components/card/CardMain";
import { Layout } from "./components/layout/Layout";

export function App() {

  return (
    <>
    <Layout>
      <Title title="New Book"/>
      {/* <Card/> */}
      {/* <CardMain/> */}
      <CardCart />
    </Layout>
    </>
  )
}

