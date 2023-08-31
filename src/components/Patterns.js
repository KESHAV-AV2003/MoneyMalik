import React, { useState, useEffect } from 'react'
import 'animate.css';

// const scroll =(props)=>{

// }
const Patterns = (props) => {
     // eslint-disable-next-line
    const [page, setPage] = useState(1);

    const updateNews = () => {
        props.setProgress(0);
        props.setProgress(100);

    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    return (
        <>
            <div className='container'>

                <h2 className="animate__animated animate__backInDown text-center mt-5" style={{ margin: '35px 0px', marginTop: '30px', backgroundColor: "lightgreen" }}>There are many bullish and bearish patterns.</h2>
                {/* Pic first */}
                <div className='container w-75 mt-5 ' >

                    <div className='card d-flex flex-column bd-highlight mb-3' style={{ backgroundColor: "green" }}>
                        <img style={{ width: "25%" }} src={require('./MYreactPic/bull.png')} className="card-img-top animate__animated animate__fadeOutRightBig animate__lightSpeedInLeft " alt="..." />
                        <div className="card-body">
                            <h3 className="card-title animate__animated animate__lightSpeedInLeft">Choose to be a bull</h3>
                            <p className="card-text">Remember there will always be bears to make your investment to nill. So be wise with your investment.</p>
                        </div>
                    </div>

                    <div className='card d-flex flex-column-reverse bd-highlight' style={{ backgroundColor: "red" }}>
                        <img style={{ width: "25%" }} className='card-img-top animate__animated animate__fadeOutLeftBig animate__lightSpeedInRight' alt="..." src={require('./MYreactPic/bear-market.png')} />
                        <div className='card-body'>
                            <h3 className='card-title animate__animated animate__lightSpeedInRight'>Or choose to be a bear</h3>
                            <p className='card-text mt-5'>Also there will always be bulls to make your investment to nill. <br />So be wise with your investment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center mt-5'>
                <h2 className='mt-5'>Let's learn some major patterns</h2>
            </div>
            <div id="list-example" className="list-group">
                <a className="list-group-item list-group-item-action" href="#list-item-1">Trend Patterns</a>
                <a className="list-group-item list-group-item-action" href="#list-item-2">Reversal Patterns</a>
                <a className="list-group-item list-group-item-action" href="#list-item-3">Continuation Patterns</a>
                <a className="list-group-item list-group-item-action" href="#list-item-4">Chart Patterns</a>
                <a className="list-group-item list-group-item-action" href="#list-item-4">Moving Average Patterns</a>
                <a className="list-group-item list-group-item-action" href="#list-item-4">Gaps</a>
            </div> <hr />
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabindex="0">
                <h4 id="list-item-1">Trend Patterns</h4>
                <ol>
                    <li>Uptrend and Downtrend</li>
                </ol>
                <p>Trend styles are essential concepts in technical analysis used to explain the course of fee actions in economic markets. They provide insights into the current market sentiment and assist investors and traders pick out capacity opportunities. There are three primary types of fashion styles: uptrend, downtrend, and sideways (additionally called variety-sure or horizontal fashion).

                    1. **Uptrend:**
                    An uptrend happens whilst the fee of a financial device, such as a inventory or index, is consistently shifting higher through the years. In an uptrend:
                    - Each successive high is higher than the previous excessive.
                    - Each successive low is higher than the previous low.

                    Uptrends are characterized via a sequence of better highs and higher lows on a fee chart. They suggest a bullish sentiment in the market, in which customers are extra aggressive than sellers, driving costs upward.
                    <div className='d-flex justify-content-center mx-5'>

                        <img style={{ width: "25%" }} src={require('./MYreactPic/Download candlestick graph bar for free.jpeg')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the uptrend of a stock.
                    </i>
                    <br />

                    2. **Downtrend:**
                    A downtrend occurs whilst the price of a financial instrument is continually moving decrease through the years. In a downtrend:
                    - Each successive excessive is lower than the preceding excessive.
                    - Each successive low is decrease than the preceding low.

                    Downtrends are characterised via a chain of decrease highs and decrease lows on a price chart. They indicate a bearish sentiment, in which dealers are more dominant than customers, causing expenses to decline.<br />
                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/downtrend.png')} alt="..." />
                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the downtrend of a stock.
                    </i>
                    <br />

                    3. **Sideways or Range-certain Trend:**
                    A sideways trend, also called a range-bound or horizontal trend, happens when the price of a economic device stays enormously flat within a certain variety. In a sideways trend:
                    - Price movement is restrained among a aid level (lower boundary) and a resistance level (higher boundary).

                    In this sort of trend, the marketplace is indecisive, and neither customers nor dealers have a clean upper hand. Traders may additionally search for capacity breakouts above the resistance level or breakdowns beneath the help degree to decide the next direction of the trend.

                    Identifying trend styles is a critical aspect of technical evaluation, because it helps buyers make informed decisions approximately when to go into, go out, or live out of the marketplace. Different signs, chart styles, and technical gear may be used to verify trend directions and potential reversals. Keep in thoughts that developments can vary in period, so understanding both quick-term and long-time period trends is critical for comprehensive marketplace analysis.</p><br />
                <div className='d-flex justify-content-center mx-5'>
                    <img style={{ width: "35%" }} src={require('./MYreactPic/sideways.png')} alt="..." />
                </div>
                <i className='d-flex justify-content-center mx-5 my-3'>
                    The above chart shows the sideways of a stock.
                </i>
                <br />

                <h4 id="list-item-2">Reversal Patterns</h4>
                <p>Reversal styles are chart patterns in technical evaluation that endorse a capacity alternate in the path of an ongoing trend. These patterns occur after a triumphing fashion, whether it's an uptrend or a downtrend, and that they suggest a probable reversal of that trend. Traders use reversal patterns to anticipate shifts in market sentiment and to make selections approximately entering or exiting positions. Here are a few not unusual reversal styles:
                    <br />

                    1. **Head and Shoulders:**
                    The head and shoulders pattern is a widely diagnosed reversal pattern that typically marks the quit of an uptrend. It includes three peaks: a better top (head) among two decrease peaks (shoulders). The neckline, drawn via the lows between the pinnacle and shoulders, acts as a guide level. A breakout under the neckline suggests a capability reversal to a downtrend.

                    - **Inverse Head and Shoulders:** This is its bullish counterpart, indicating a reversal from a downtrend to an uptrend. It consists of three troughs: a lower trough (head) between two higher troughs (shoulders). A breakout above the neckline suggests a capacity uptrend.
                    <br />                    <br />

                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/How to Trade the Head and Shoulders Pattern.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the head and shoulders pattern of a stock.
                    </i>
                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/Chart Pattern Indicator - Full Review of 14 Patterns - ForexBee.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the inverted head and shoulders pattern of a stock.
                    </i>
                    <br />

                    2. **Double Top and Double Bottom:**
                    - **Double Top:** This sample forms after an uptrend and suggests a capability reversal to a downtrend. It includes  peaks at about the equal degree. The trough between the peaks acts as a assist degree. A breakdown below this guide degree shows a fashion reversal.
                    - **Double Bottom:** This is its bullish counterpart, suggesting a reversal from a downtrend to an uptrend. It consists of  troughs at approximately the equal stage. The peak among the troughs acts as a resistance level. A breakout above this resistance degree shows a capability uptrend.
                    <br />

                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/how to trade double tops.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the double top pattern of a stock.
                    </i>
                    <br />
                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/double bottom.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the double bottom pattern of a stock.
                    </i>
                    <br />

                    3. **Triple Top and Triple Bottom:**
                    These patterns are similar to their double opposite numbers however involve three peaks (in triple top) or 3 troughs (in triple bottom) earlier than suggesting a reversal.
                    <br />
                    <br />
                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/triple-top-chart-pattern.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the triple top pattern of a stock.
                    </i>
                    <br />
                    <br />
                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/triple bottom.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the triple bottom pattern of a stock.
                    </i>
                    <br />



                    4. **Rounding Bottom and Rounding Top:**
                    - **Rounding Bottom (Cup and Handle):** This bullish sample resembles a rounded cup with a manage. It indicates a potential reversal from a downtrend to an uptrend. The rounding bottom is accompanied by way of a consolidation duration (manage) before a potential breakout.
                    - **Rounding Top:** This is its bearish counterpart, indicating a reversal from an uptrend to a downtrend. It resembles an inverted cup. The rounding top is followed by means of a consolidation length before a ability breakdown.
                    <br />
                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/Rounding-Bottom-01.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the rounding bottom pattern of a stock.
                    </i>
                    <br />
                    <br />
                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/rounding top.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the rounding top pattern of a stock.
                    </i>
                    <br />
                    5. **Evening Star and Morning Star:**
                    - **Evening Star:** This bearish sample occurs on the stop of an uptrend and includes 3 candles: a massive bullish candle, a small indecisive or spinning top candle, and a huge bearish candle. It shows a capacity trend reversal.
                    - **Morning Star:** This is its bullish counterpart, indicating a reversal from a downtrend to an uptrend. It includes a massive bearish candle, a small indecisive or spinning pinnacle candle, and a large bullish candle.

                    These are only a few examples of reversal patterns that investors use to research marketplace tendencies and potential modifications in sentiment. Remember that whilst these patterns can provide valuable insights, they must be used at the side of different technical and fundamental analysis equipment for comprehensive decision-making.
                </p>
                <br />
                <div className='d-flex justify-content-center mx-5'>
                    <img style={{ width: "35%" }} src={require('./MYreactPic/evening and morning star.jpeg')} alt="..." />

                </div>
                <i className='d-flex justify-content-center mx-5 my-3'>
                    The above chart shows the evening and morning pattern of a stock.
                </i>
                <br />
                {/* <ol>
                    <li>Head and Shoulders</li>
                    <li>Double Top and Double Bottom</li>
                </ol> */}
                <h4 id="list-item-3">Continuation Patterns</h4>
                <p>
                    Continuation patterns are chart patterns in technical analysis that endorse a brief pause or consolidation in an ongoing trend before the trend resumes. Unlike reversal patterns, which imply a capacity alternate in trend direction, continuation patterns mean that the prevailing trend is in all likelihood to preserve after the consolidation period. Traders use these patterns to become aware of capability possibilities to go into or upload to positions within the path of the existing fashion. Here are some common continuation styles:
                    <br />

                    1. **Flags and Pennants:**
                    - **Flag Pattern:** A flag pattern is a rectangular-fashioned continuation pattern that forms after a strong rate motion, either upward (bull flag) or downward (bear flag). The flagpole represents the preliminary fee flow, and the flag itself is characterised via a parallel trendline channel. Once the flag pattern is finished, a breakout within the course of the preliminary fashion is anticipated.
                    - **Pennant Pattern:** Similar to a flag, a pennant sample is a small symmetrical triangle that bureaucracy after a sturdy charge move. It shows a short consolidation before the fashion maintains. The breakout from the pennant is generally within the route of the previous fashion.
                    <br />
                    <br />
                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/Flag pattern.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the flag pattern of a stock.
                    </i>
                    <br />
                    <br />
                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/pennant-pattern.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the pennant pattern of a stock.
                    </i>
                    <br />

                    2. **Triangles:**
                    - **Ascending Triangle:** An ascending triangle bureaucracy while the upper trendline is horizontal and the decrease trendline is sloping upward. This pattern shows that shoppers are getting extra competitive, and a breakout above the upper trendline indicates a ability continuation of the uptrend.
                    - **Descending Triangle:** A descending triangle is the alternative of the ascending triangle. The decrease trendline is horizontal, whilst the top trendline is sloping downward. This sample indicates that sellers are getting more competitive, and a breakout beneath the decrease trendline indicates a capability continuation of the downtrend.
                    - **Symmetrical Triangle:** A symmetrical triangle bureaucracy while both the upper and decrease trendlines converge. This pattern suggests a length of indecision and consolidation. A breakout above or below the triangle indicators the potential path of the trend continuation.
                    <br />
                    <br />
                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/triangle.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the triangle pattern of a stock.
                    </i>
                    <br />

                    3. **Wedges:**
                    - **Rising Wedge:** A growing wedge is a bearish continuation pattern that has a narrowing variety between upward-sloping trendlines. This suggests a weakening bullish momentum, and a breakdown below the decrease trendline shows a capability trend continuation to the disadvantage.
                    - **Falling Wedge:** A falling wedge is a bullish continuation sample that has a narrowing variety among downward-sloping trendlines. This shows a weakening bearish momentum, and a breakout above the higher trendline suggests a capability trend continuation to the upside.
                    <br />
                    <br />
                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/wedges.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the wedges pattern of a stock.
                    </i>
                    <br />
                    4. **Rectangles:**
                    - **Bullish Rectangle:** A bullish rectangle paperwork when the charge consolidates inside a horizontal range after an uptrend. This suggests a transient pause earlier than the uptrend maintains. A breakout above the top boundary suggests a potential upward continuation.
                    - **Bearish Rectangle:** A bearish rectangle is its opposite. It bureaucracy after a downtrend and suggests a transient consolidation earlier than the downtrend resumes. A breakout underneath the lower boundary indicates a ability downward continuation.
                    <br />

                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/reactangle.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the rectangle pattern of a stock.
                    </i>
                    <br />
                    Continuation patterns offer insights into marketplace sentiment and help traders anticipate the capacity resumption of a triumphing fashion. As with any trading method, it's essential to combine those patterns with other styles of analysis and risk management techniques for nicely-knowledgeable choice-making.
                    <br />


                </p>
                <h4 id="list-item-4">Chart Patterns</h4>
                <p>Chart patterns are visible representations of rate movements on a chart that investors use to pick out capability trends, reversals, and market behavior. These styles offer insights into how prices have moved within the past, assisting traders make predictions about future fee movements. Here are three most important varieties of chart styles:
                    <br />
                    1. Trend Patterns: Show the overall path of fee movements.
                    - Uptrend: Higher highs and higher lows over time.
                    - Downtrend: Lower highs and decrease lows over time.
                    <br />
                    2. Reversal Patterns: Suggest capability fashion adjustments.
                    - Head and Shoulders: Three peaks – a higher one inside the middle (head) and lower ones on each aspect (shoulders).
                    - Double Top and Double Bottom: Two similar highs (double top) or lows (double backside) signaling capacity reversals.
                    <br />
                    3. Continuation Patterns: Indicate temporary pauses in developments before they maintain.
                    - Flags and Pennants: Small rectangles (flags) or triangles (pennants) after sturdy price movements.
                    - Triangles: Consolidation patterns with converging trendlines.
                    <br />
                    Chart styles are essential equipment in technical analysis, however they should be used along other signs and analysis methods for extra accurate trading choices.
                </p>
                <ol>
                    <li> Cup and Handle</li>
                    <p>The cup and take care of pattern is a bullish continuation pattern regularly located in rate charts. It alerts a capacity upward fashion continuation after a length of consolidation. Here's how it works:
                        <br />
                        1. **Cup Formation:**
                        - The pattern begins with a U-formed &quot;cup&quot; formation on the price chart. This cup resembles the form of a tea cup or rounding bottom.
                        - The left side of the cup marks the start of the upward fashion, in which the price rises to form the left facet of the U.
                        - The right aspect of the cup represents a pullback or correction, where the charge retreats but does not attain new lows.
                        <br />
                        2. **Handle Formation:**
                        - After the cup formation, a smaller consolidation sample known as the &quot;manage&quot; develops. The cope with normally paperwork as a quick downward-sloping trendline or a sideways motion.
                        - The deal with retracement must be about one-1/3 to 2-thirds of the cup's intensity, and it's normally extra shallow compared to the cup itself.
                        - The manage's reason is to offer a quick period of consolidation and earnings-taking earlier than the capacity continuation of the uptrend.
                        <br />
                        3. **Breakout and Continuation:**
                        - The sample is showed while the charge breaks out above the higher boundary of the manage, signaling that the consolidation section is ending.
                        - This breakout is a sturdy signal for buyers to count on a continuation of the preceding uptrend.
                        - The fee goal for the upward circulate is frequently projected with the aid of measuring the cup's intensity and including it to the breakout factor.
                        <br />
                        The cup and cope with sample is taken into consideration a dependable bullish continuation signal, because it suggests that once a transient pause (the handle), customers are regaining manipulate and getting ready for any other upward push. However, like every styles, it's important to use other technical and fundamental evaluation gear to verify the validity of the pattern and to manipulate risks effectively.
                    </p>
                    <br />
                    <br />

                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/cup and handle.png')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the cup and handle pattern of a stock.
                    </i>
                    <br />
                    <li>Symmetrical Triangle</li>
                    <p>A symmetrical triangle is a technical chart pattern that forms while two trendlines converge, growing a triangular form. It's indicative of a duration of consolidation and uncertainty inside the marketplace, in which the rate swings among regularly narrowing highs and lows. This pattern arises because of an equilibrium between shoppers and sellers as they examine market situations.

                        As the triangle develops, investors count on a breakout, which occurs while the price breaches both the higher or decrease trendline. The direction of the breakout affords a important sign for potential rate movement. A breakout above the top trendline indicates bullish momentum and a ability uptrend continuation, whilst a breakout beneath the decrease trendline shows bearish sentiment and a capability downtrend continuation.

                        Symmetrical triangles are treasured because they offer perception into the market's indecision and can sign a imminent robust fee motion. Traders frequently use other technical indicators or fundamental evaluation to confirm the breakout's validity before making buying and selling decisions. While symmetrical triangles are dependable patterns, it's important to don't forget that now not all triangles cause huge breakouts, and false signals can occur. Therefore, careful analysis and hazard control are critical for successful buying and selling based in this pattern.</p>
                    <br />

                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/Symmetrical-Triangle.jpg')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the symmetrical triangle pattern of a stock.
                    </i>
                    <br />
                </ol>

                <h4 id="list-item-4">Moving Average Patterns</h4>
                <p>Moving common patterns are trading signals derived from the interactions among one of a kind moving averages on a fee chart. Moving averages are calculated through averaging beyond charge statistics over a distinct period, smoothing out fluctuations and revealing underlying trends. Here are two most important kinds of transferring average patterns:
                    <br />

                    1. **Death Cross and Golden Cross:**
                    - **Death Cross:** This sample occurs when a short-time period shifting common (e.G., 50-day) crosses beneath a longer-time period transferring average (e.G., 2 hundred-day). It indicators a ability shift from an uptrend to a downtrend, indicating a more potent promoting sentiment.
                    - **Golden Cross:** The opposite of the demise go, the golden move occurs when a brief-time period transferring common crosses above an extended-time period transferring common. It shows a capability shift from a downtrend to an uptrend, implying a more potent buying sentiment.

                    These crosses emphasize modifications within the marketplace sentiment and are often taken into consideration as massive trend reversal indicators.
                </p>
                <br />
                <br />

                <div className='d-flex justify-content-center mx-5'>
                    <img style={{ width: "35%" }} src={require('./MYreactPic/death and golden cross.webp')} alt="..." />

                </div>
                <i className='d-flex justify-content-center mx-5 my-3'>
                    The above chart shows the death and golden pattern of a stock.
                </i>
                <br />

                <h4 id="list-item-4">Gaps</h4>
                <p>Gaps inside the inventory marketplace occur while there is a big difference between the final fee of a economic instrument on one trading day and the hole charge on the following buying and selling day. These gaps create empty spaces on fee charts, indicating abrupt shifts in fee levels without any trading pastime in between. Gaps can provide valuable insights into market sentiment and capacity future price movements. There are numerous varieties of gaps:
                    <br /><br />

                    1. **Common Gap:** A commonplace hole takes place regularly and is frequently quick filled, meaning that the rate has a tendency to go back to the extent of the previous day's close extraordinarily soon.
                    <br />
                    <br />

                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/common gap.avif')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the common gap pattern of a stock.
                    </i>
                    <br />
                    2. **Breakaway Gap:** A breakaway hole happens at the beginning of a new fashion. It signifies a robust charge motion that indicates a shift in sentiment, frequently marking the begin of a brand new fashion direction.
                    <br />
                    <br />

                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/breakaway-1.webp')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the breakaway gap pattern of a stock.
                    </i>
                    <br />

                    3. **Exhaustion Gap:** An exhaustion gap normally appears near the stop of a fashion. It shows a last burst of buying or promoting activity before the fashion reverses or takes a giant pause.
                    <br />
                    <br />

                    <div className='d-flex justify-content-center mx-5'>
                        <img style={{ width: "35%" }} src={require('./MYreactPic/exhaustion gap.jpg')} alt="..." />

                    </div>
                    <i className='d-flex justify-content-center mx-5 my-3'>
                        The above chart shows the exhaustion gap pattern of a stock.
                    </i>
                    <br />

                    Gaps can be used in conjunction with different technical evaluation gear to make trading choices. Traders might search for patterns or support/resistance levels close to gaps to confirm ability price moves. However, now not all gaps cause enormous fee modifications, so careful analysis and attention of the overall market context are important when interpreting gap styles.
                </p>
            </div>

        </>

    )
}

export default Patterns
