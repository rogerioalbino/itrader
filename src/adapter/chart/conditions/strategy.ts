
const strategy = {
  entry: [
    {
      type: 'BuyAtMarket', // Comprar a Mercado
      logic: null,
      condition: [ // Quando
        {
          type: 'IndicatorCrossIndicator', // Indicador Cruza Indicador
          crosses: 'over',
          logic: null,
          indicator: [
            { type: 'sma', period: 20, source: 'close' },
            { type: 'sma', period: 200, source: 'close' }
          ]
        },
        // {
        //   type: 'IndicatorCrossIndicator', // Indicador Cruza Indicador
        //   crosses: 'over',
        //   logic: 'or',
        //   indicator: [
        //     { type: 'sma', period: 20, source: 'close' },
        //     { type: 'sma', period: 50, source: 'close' }
        //   ]
        // }
      ]
    },
    // {
    //   type: 'BuyAtMarket', // comprar a mercado
    //   logic: 'or',
    //   condition: [ // quando
    //     {
    //       type: 'IndicatorCrossIndicator', // indicador cruza indicador
    //       crosses: 'over | under',
    //       logic: null,
    //       indicator: [
    //         { type: 'sma', period: 20, source: 'close' },
    //         { type: 'sma', period: 200, source: 'close' }
    //       ]
    //     },
    //     {
    //       type: 'IndicatorCrossIndicator', // indicador cruza indicador
    //       crosses: 'over | under',
    //       logic: 'and | or',
    //       indicator: [
    //         { type: 'sma', period: 20, source: 'close' },
    //         { type: 'sma', period: 50, source: 'close' }
    //       ]
    //     }
    //   ]
    // },
  ],
  exit: [
    {
      type: 'SellAtMarket', // Vender a Mercado
      logic: null,
      condition: [ // Quando
        {
          type: 'IndicatorCrossIndicator', // Indicador Cruza Indicador
          crosses: 'under',
          logic: null,
          indicator: [
            { type: 'sma', period: 20, source: 'close' },
            { type: 'sma', period: 200, source: 'close' }
          ]
        },
        // {
        //   type: 'IndicatorCrossIndicator', // Indicador Cruza Indicador
        //   crosses: 'under',
        //   logic: 'or',
        //   indicator: [
        //     { type: 'sma', period: 20, source: 'close' },
        //     { type: 'sma', period: 50, source: 'close' }
        //   ]
        // }
      ]
    },
    // {
    //   type: 'BuyAtMarket', // comprar a mercado
    //   logic: 'or',
    //   condition: [ // quando
    //     {
    //       type: 'IndicatorCrossIndicator', // indicador cruza indicador
    //       crosses: 'over | under',
    //       logic: null,
    //       indicator: [
    //         { type: 'sma', period: 20, source: 'close' },
    //         { type: 'sma', period: 200, source: 'close' }
    //       ]
    //     },
    //     {
    //       type: 'IndicatorCrossIndicator', // indicador cruza indicador
    //       crosses: 'over | under',
    //       logic: 'and | or',
    //       indicator: [
    //         { type: 'sma', period: 20, source: 'close' },
    //         { type: 'sma', period: 50, source: 'close' }
    //       ]
    //     }
    //   ]
    // },
  ],
};

export default strategy;