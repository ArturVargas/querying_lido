import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Lido from './components/Lido';

const subgraphId = 'F7qb71hWab6SuRL5sf6LQLTpNahmqMsBnnweYHzLGUyG';

const client = new Client({
  url: `https://gateway-arbitrum.network.thegraph.com/api/${import.meta.env.VITE_SUBGRAPH_KEY}/subgraphs/id/${subgraphId}`,
  exchanges: [cacheExchange, fetchExchange],
});

function App() {

  return (
    <Provider value={client}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Lido />
    </Provider>
  )
}

export default App
