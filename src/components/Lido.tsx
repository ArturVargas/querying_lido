import React from 'react';
import { gql, useQuery } from 'urql';

const LidoQuery = gql`
query {
    pools {
          id
          name
          symbol
          totalValueLockedUSD
          protocol{
            name
            slug
          }
          inputTokens{
            name
            symbol
            lastPriceUSD
          }
          outputToken{
            name
            symbol
            lastPriceUSD
          }
          rewardTokens{
            type
              token {
                name
                symbol
              }
          }
    }
}
`;

const Lido = () => {
    // Add your component logic here
    const [result] = useQuery({
        query: LidoQuery,
      });
    
      const { data, fetching, error } = result;
    
      if (fetching) return <p>Loading...</p>;
      if (error) return <p>Oh no... {error.message}</p>;
      console.log("Lido DATA --> ", data);
    return (
        <div>
            <ul>
                {data.pools.map(pool => (
                    <li key={pool.id}>
                        <p>Protcol Name: {pool.protocol.name}</p>
                        <p>Protcol TVL: {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' })
                        .format(
                            pool.totalValueLockedUSD
                        )
                        }</p>
                        {
                            pool.inputTokens.map(inputToken => (
                                <div>
                                    <p>Input Token Name: {inputToken.name}</p>
                                    <p>Input Token Symbol: {inputToken.symbol}</p>
                                    <p>Input Token Last Price: {inputToken.lastPriceUSD}</p>
                                </div>
                            ))
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lido;