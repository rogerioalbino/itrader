import {
  AxisPressedMouseMoveOptions,
  Background,
  ColorType,
  CrosshairLineOptions,
  CrosshairMode,
  CrosshairOptions,
  DeepPartial,
  GridLineOptions,
  GridOptions,
  HandleScaleOptions,
  HandleScrollOptions,
  HorzAlign,
  KineticScrollOptions,
  LineStyle,
  LineWidth,
  OverlayPriceScaleOptions,
  PriceScaleMargins,
  PriceScaleMode,
  TimeScaleOptions,
  TrackingModeExitMode,
  TrackingModeOptions,
  VertAlign,
  VisiblePriceScaleOptions,
  WatermarkOptions,
  ChartOptions
} from "lightweight-charts";

export const chartOptions: DeepPartial<ChartOptions> | undefined  = {
  /**
 * Largura do gráfico em pixels
 *
 * @defaultValue Se for fornecido `0` (padrão) ou nenhum valor, o tamanho do widget será calculado com base no tamanho do contêiner.
 */
  width: <number>920,

  /**
 * Altura do gráfico em pixels
 *
 * @defaultValue Se for fornecido `0` (padrão) ou nenhum valor, o tamanho do widget será calculado com base no tamanho do contêiner.
 */
  height: <number>480,

  /**
   * Opções de marca d'água.
   *
   * Uma marca d'água é um rótulo de fundo que inclui uma breve descrição dos dados desenhados. Qualquer texto pode ser adicionado a ele.
   *
   * Certifique-se de habilitá-lo e definir uma cor e tamanho de fonte apropriados para tornar sua marca d'água visível no plano de fundo do gráfico.
   * Recomendamos uma cor semitransparente e uma fonte grande. Observe também que a posição da marca d'água pode ser alinhada verticalmente e horizontalmente.
   */
  watermark: <WatermarkOptions>{
    /**
     * Cor da marca d'água.
     *
     * @defaultValue `'rgba(0, 0, 0, 0)'`
     */
    color: <string>'rgba(242, 54, 69, 1)',
    /**
     * Exibir a marca d'água.
     *
     * @defaultValue `false`
     */
    visible: <boolean>false,
    /**
     * Texto da marca d'água. A quebra de palavras não é suportada.
     *
     * @defaultValue `''`
     */
    text: <string>'',
    /**
     * Tamanho da fonte em pixels.
     *
     * @defaultValue `48`
     */
    fontSize: <number>48,
    /**
     * Família de fontes.
     *
     * @defaultValue `'Trebuchet MS', Roboto, Ubuntu, sans-serif`
     */
    fontFamily: <string>'Roboto',
    /**
     * Estilo de fonte.
     *
     * @defaultValue `''`
     */
    fontStyle: <string>'',
    /**
     * Alinhamento horizontal dentro da área do gráfico.
     *
     * @defaultValue `'center'`
     */
    horzAlign: <HorzAlign>'center',
    /**
     * Alinhamento vertical dentro da área do gráfico.
     *
     * @defaultValue `'center'`
     */
    vertAlign: <VertAlign>'center',
  },

  /**
   * Opções de layout
   */
  layout: {
    background: <Background>{ type: ColorType.Solid, color: "#141823" },
    textColor: <string>"rgba(178, 181, 190, 1)",
  },

  /**
   * Opções de escala de preço certo
   */
  rightPriceScale: <VisiblePriceScaleOptions>{
    /**
     * O escalonamento automático é um recurso que ajusta automaticamente uma escala de preços para se adequar ao intervalo visível de dados.
     * Observe que as escalas de preços de sobreposição são sempre dimensionadas automaticamente.
     *
     * @defaultValue `true`
     */
    autoScale: <boolean>true,
    /**
     * Modo de escala de preços.
     *
     * @defaultValue {@link PriceScaleMode.Normal}
     */
    mode: <PriceScaleMode>PriceScaleMode.Normal,
    /**
     * Inverta a escala de preços, de modo que uma tendência de alta seja mostrada como uma tendência de queda e vice-versa.
     * Afeta tanto a escala de preços quanto os dados no gráfico.
     *
     * @defaultValue `false`
     */
    invertScale: <boolean>false,
    /**
     * Alinhe os rótulos da escala de preços para evitar que se sobreponham.
     *
     * @defaultValue `true`
     */
    alignLabels: <boolean>true,
    /**
     * Defina true para desenhar uma borda entre a escala de preços e a área do gráfico.
     *
     * @defaultValue `true`
     */
    borderVisible: <boolean>false,
    /**
     * Cor da borda da escala de preço.
     *
     * @defaultValue `'#2B2B43'`
     */
    borderColor: <string>'#2B2B43',
    /**
     * Mostrar rótulos de canto superior e inferior somente se o texto inteiro estiver visível.
     *
     * @defaultValue `false`
     */
    entireTextOnly: <boolean>false,
    /**
     * Indica se esta escala de preços é visível. Ignorado por escalas de preços de sobreposição.
     *
     * @defaultValue `true` para a escala de preço à direita e `false` para a esquerda
     */
    visible: <boolean>true,
    /**
     * Desenhe uma pequena linha horizontal nos rótulos dos eixos de preços.
     *
     * @defaultValue `true`
     */
    drawTicks: <boolean>true,
  },

  /**
   * Opções de escala de preço de sobreposição
   */
  overlayPriceScales: <OverlayPriceScaleOptions>{
    /**
     * O escalonamento automático é um recurso que ajusta automaticamente uma escala de preços para se adequar ao intervalo visível de dados.
     * Observe que as escalas de preços de sobreposição são sempre dimensionadas automaticamente.
     *
     * @defaultValue `true`
     */
    autoScale: <boolean>true,
    /**
     * Modo de escala de preços.
     *
     * @defaultValue {@link PriceScaleMode.Normal}
     */
    mode: <PriceScaleMode>PriceScaleMode.Normal,
    /**
     * Inverta a escala de preços, de modo que uma tendência de alta seja mostrada como uma tendência de queda e vice-versa.
     * Afeta tanto a escala de preços quanto os dados no gráfico.
     *
     * @defaultValue `false`
     */
    invertScale: <boolean>false,
    /**
     * Alinhe os rótulos da escala de preços para evitar que se sobreponham.
     *
     * @defaultValue `true`
     */
    alignLabels: <boolean>true,
    /**
     * Margens da escala de preços.
     *
     * @defaultValue `{ bottom: 0.1, top: 0.2 }`
     * @example
     * ```js
     * chart.priceScale('right').applyOptions({
     *     scaleMargins: {
     *         top: 0.8,
     *         bottom: 0,
     *     },
     * });
     * ```
     */
    scaleMargins: <PriceScaleMargins>{
      top: <number>0.8,
      bottom: <number>0,
    },

    /**
     * Defina true para desenhar uma borda entre a escala de preços e a área do gráfico.
     *
     * @defaultValue `true`
     */
    borderVisible: <boolean>true,
    /**
     * Cor da borda da escala de preço.
     *
     * @defaultValue `'#2B2B43'`
     */
    borderColor: <string>'#2B2B43',
    /**
     * Mostrar rótulos de canto superior e inferior somente se o texto inteiro estiver visível.
     *
     * @defaultValue `false`
     */
    entireTextOnly: <boolean>false,
    /**
     * Indica se esta escala de preços é visível. Ignorado por escalas de preços de sobreposição.
     *
     * @defaultValue `true` para a escala de preço à direita e `false` para a esquerda
     */
    visible: <boolean>true,
    /**
     * Desenhe uma pequena linha horizontal nos rótulos dos eixos de preços.
     *
     * @defaultValue `true`
     */
    drawTicks: <boolean>true,
  },

  /**
   * Opções de escala de tempo
   */
  timeScale: <TimeScaleOptions>{
    /**
     * O espaço da margem em barras do lado direito do gráfico.
     *
     * @defaultValue `0`
     */
    rightOffset: <number>0,
    /**
     * O espaço entre as barras em pixels.
     *
     * @defaultValue `6`
     */
    barSpacing: <number>6,
    /**
     * O espaço mínimo entre as barras em pixels.
     *
     * @defaultValue `0.5`
     */
    minBarSpacing: <number>0.5,
    /**
     * Evite rolar para a esquerda da primeira barra.
     *
     * @defaultValue `false`
     */
    fixLeftEdge: <boolean>false,
    /**
     * Evite rolar para a direita da barra mais recente.
     *
     * @defaultValue `false`
     */
    fixRightEdge: <boolean>false,
    /**
     * Evite alterar o intervalo de tempo visível durante o redimensionamento do gráfico.
     *
     * @defaultValue `false`
     */
    lockVisibleTimeRangeOnResize: <boolean>false,
    /**
     * Impedir que a barra flutuante se mova ao rolar.
     *
     * @defaultValue `false`
     */
    rightBarStaysOnScroll: <boolean>false,
    /**
     * Mostre a borda da escala de tempo.
     *
     * @defaultValue `true`
     */
    borderVisible: <boolean>false,
    /**
     * A cor da borda da escala de tempo.
     *
     * @defaultValue `'#2B2B43'`
     */
    borderColor: <string>'#2B2B43',
    /**
     * Mostre a escala de tempo.
     *
     * @defaultValue `true`
     */
    visible: <boolean>true,
    /**
     * Mostre a hora, não apenas a data, na escala de tempo e no rótulo de retículo vertical.
     *
     * @defaultValue `false`
     */
    timeVisible: <boolean>false,
    /**
     * Mostrar segundos na escala de tempo e rótulo de retículo vertical no formato `hh:mm:ss` para dados intradiários.
     *
     * @defaultValue `true`
     */
    secondsVisible: <boolean>true,
    /**
     * Desloque o intervalo visível para a direita (no futuro) pelo número de novas barras quando novos dados são adicionados.
     *
     * Observe que isso só se aplica quando a última barra estiver visível.
     *
     * @defaultValue `true`
     */
    shiftVisibleRangeOnNewBar: <boolean>true,
    /**
     * O formatador de marcas de escala pode ser usado para personalizar rótulos de marcas de escala no eixo do tempo.
     *
     * @defaultValue `undefined`
     */
    // tickMarkFormatter: <TickMarkFormatter>'undefined',
  },

  /**
   * A cruz mostra a interseção dos valores de preço e escala de tempo em qualquer ponto do gráfico.
   *
   */
  crosshair: <CrosshairOptions>{
    /**
     * Modo de mira
     *
     * @defaultValue {@link CrosshairMode.Magnet}
     */
    mode: <CrosshairMode>CrosshairMode.Normal,
    /**
     * Opções de linha vertical.
     */
    vertLine: <CrosshairLineOptions>{
      /**
       * Cor da linha de mira.
       *
       * @defaultValue `'#758696'`
       */
      color: <string>'#758696',
      /**
       * Largura da linha de mira.
       *
       * @defaultValue `1`
       */
      width: <LineWidth>1,
      /**
       * Estilo de linha de mira.
       *
       * @defaultValue {@link LineStyle.LargeDashed}
       */
      style: <LineStyle>LineStyle.LargeDashed,
      /**
       * Exiba a linha de mira.
       *
       * Observe que a desativação das linhas de mira não desativa o marcador de mira nas séries Linha e Área.
       * Ele pode ser desabilitado usando a opção `crosshairMarkerVisible` de uma série relevante.
       *
       * @see {@link LineStyleOptions.crosshairMarkerVisible}
       * @see {@link AreaStyleOptions.crosshairMarkerVisible}
       * @see {@link BaselineStyleOptions.crosshairMarkerVisible}
       * @defaultValue `true`
       */
      visible: <boolean>true,
      /**
       * Exiba o rótulo da mira na escala relevante.
       *
       * @defaultValue `true`
       */
      labelVisible: <boolean>true,
      /**
       * Cor de fundo do rótulo da mira.
       *
       * @defaultValue `'#4c525e'`
       */
      labelBackgroundColor: <string>'#4c525e',
    },
    /**
     * Opções de linhas horizontais.
     */
    horzLine: <CrosshairLineOptions>{
      /**
       * Cor da linha de mira.
       *
       * @defaultValue `'#758696'`
       */
      color: <string>'#758696',
      /**
       * Largura da linha de mira.
       *
       * @defaultValue `1`
       */
      width: <LineWidth>1,
      /**
       * Estilo de linha de mira.
       *
       * @defaultValue {@link LineStyle.LargeDashed}
       */
      style: <LineStyle>LineStyle.LargeDashed,
      /**
       * Exiba a linha de mira.
       *
       * Observe que a desativação das linhas de mira não desativa o marcador de mira nas séries Linha e Área.
       * Ele pode ser desabilitado usando a opção `crosshairMarkerVisible` de uma série relevante.
       *
       * @see {@link LineStyleOptions.crosshairMarkerVisible}
       * @see {@link AreaStyleOptions.crosshairMarkerVisible}
       * @see {@link BaselineStyleOptions.crosshairMarkerVisible}
       * @defaultValue `true`
       */
      visible: <boolean>true,
      /**
       * Exiba o rótulo da mira na escala relevante.
       *
       * @defaultValue `true`
       */
      labelVisible: <boolean>true,
      /**
       * Cor de fundo do rótulo da mira.
       *
       * @defaultValue `'#4c525e'`
       */
      labelBackgroundColor: <string>'#4c525e',
    },
  },

  /**
   * Uma grade é representada no fundo do gráfico como linhas verticais e horizontais desenhadas nos níveis das marcas visíveis de preço e nas escalas de tempo.
   */
  grid: <GridOptions>{
    /**
     * Opções de linha de grade vertical.
     */
    vertLines: <GridLineOptions>{
      /**
       * Cor da linha.
       *
       * @defaultValue `'#D6DCDE'`
       */
      color: <string>'#222631',
      /**
       * Estilo de linha.
       *
       * @defaultValue {@link LineStyle.Solid}
       */
      style: <LineStyle>LineStyle.Solid,
      /**
       * Exiba as linhas.
       *
       * @defaultValue `true`
       */
      visible: <boolean>true,
    },
    /**
     * Opções de linha de grade horizontal.
     */
    horzLines: <GridLineOptions>{
      /**
       * Cor da linha.
       *
       * @defaultValue `'#D6DCDE'`
       */
      color: <string>'#222631',
      /**
       * Estilo de linha.
       *
       * @defaultValue {@link LineStyle.Solid}
       */
      style: <LineStyle>LineStyle.Solid,
      /**
       * Exiba as linhas.
       *
       * @defaultValue `true`
       */
      visible: <boolean>true,
    },
  },

  /**
   * Opções de localização.
   */
  // localization: LocalizationOptions;

  /**
   * Opções de rolagem ou um sinalizador booleano que ativa/desativa a rolagem
   */
  handleScroll: <HandleScrollOptions>{
    /**
     * Habilite a rolagem com a roda do mouse.
     *
     * @defaultValue `true`
     */
    mouseWheel: <boolean>true,
    /**
     * Habilite a rolagem mantendo pressionado o botão esquerdo do mouse e movendo o mouse.
     *
     * @defaultValue `true`
     */
    pressedMouseMove: <boolean>true,
    /**
     * Ative a rolagem de toque horizontal.
     *
     * Quando ativado, o gráfico lida com gestos de toque que normalmente rolariam a página da Web horizontalmente.
     *
     * @defaultValue `true`
     */
    horzTouchDrag: <boolean>true,
    /**
     * Ative a rolagem de toque vertical.
     *
     * Quando ativado, o gráfico lida com gestos de toque que normalmente rolariam a página da Web verticalmente.
     *
     * @defaultValue `true`
     */
    vertTouchDrag: <boolean>true
  },

  /**
   * Opções de escala ou um sinalizador booleano que ativa/desativa a escala
   */
  handleScale: <HandleScaleOptions>{
    /**
     * Habilite o dimensionamento com a roda do mouse.
     *
     * @defaultValue `true`
     */
    mouseWheel: <boolean>true,
    /**
     * Ative o dimensionamento com gestos de pinça/zoom.
     *
     * @defaultValue `true`
     */
    pinch: <boolean>true,
    /**
     * Habilite a escala de preços e/ou escalas de tempo mantendo pressionado o botão esquerdo do mouse e movendo o mouse.
     */
    axisPressedMouseMove: <AxisPressedMouseMoveOptions>{
      /**
       * Habilite o dimensionamento do eixo do tempo mantendo pressionado o botão esquerdo do mouse e movendo o mouse.
       *
       * @defaultValue `true`
       */
      time: <boolean>true,
      /**
       * Habilite o dimensionamento do eixo de preços mantendo pressionado o botão esquerdo do mouse e movendo o mouse.
       *
       * @defaultValue `true`
       */
      price: <boolean>true,
    },
    /**
     * Habilite a redefinição da escala clicando duas vezes com o botão esquerdo do mouse.
     *
     * @defaultValue `true`
     */
    axisDoubleClickReset: <boolean>true,
  },

  /**
   * Opções de rolagem cinética
   */
  kineticScroll: <KineticScrollOptions>{
    /**
     * Ative a rolagem cinética com gestos de toque.
     *
     * @defaultValue `true`
     */
    touch: <boolean>true,
    /**
     * Ative a rolagem cinética com o mouse.
     *
     * @defaultValue `false`
     */
    mouse: <boolean>false
  },

  /** @inheritDoc TrackingModeOptions
   */
  trackingMode: <TrackingModeOptions>{
    /** @inheritdoc TrackingModeExitMode
     *
     * @defaultValue {@link TrackingModeExitMode.OnNextTap}
     */
    exitMode: <TrackingModeExitMode>TrackingModeExitMode.OnNextTap,
  },

};
