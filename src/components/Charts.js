import React from 'react'
import { useNavigate } from 'react-router-dom'


const Charts = (props) => {
    const navigate = useNavigate();

const nextPage =()=>{
    navigate('/pattern')
    
}
    return (
        <>
            <div className='container'>
                <h2 className="animate__animated animate__backInDown text-center" style={{ margin: '35px 0px', marginTop: '30px', backgroundColor: "lightgreen" }}>Learn and leap the advantages to knowing the patterns<span className="material-symbols-outlined mx-2">
                    waterfall_chart
                </span></h2>
                <div className='container w-50 col-4 d-flex justify-content-center'>
                    <p>As you embark on your journey into the intricate world of the stock market, it becomes paramount to possess a profound understanding of various chart patterns. These patterns, akin to the intricate brushstrokes on an artist's canvas, hold the key to deciphering the underlying trends and dynamics of a particular stock.
                        <br />            <br />

                        By delving into the labyrinth of chart patterns, you equip yourself with a valuable tool that goes beyond the mere analysis of numbers and data. These patterns are like the whispers of the market itself, revealing hints about the potential future price movements of a stock. With this perceptive insight, you're not just a spectator; you're a participant in predicting the fascinating dance of stock prices.
                        <br />             <br />


                        But the benefits don't stop there. Proficiency in recognizing these patterns extends beyond individual stocks. It grants you the ability to peer into the collective sentiment of the market. Just as a seasoned sailor can read the shifting winds and tides, your adeptness with chart patterns allows you to anticipate broader market trends, deciphering the grand tapestry of the financial landscape.
                        <br />             <br />

                        Imagine witnessing a symphony of ascending triangles, descending wedges, and double bottoms. Each pattern whispers its own tale, reflecting the ebb and flow of investor psychology. Armed with this knowledge, you are better poised to make informed decisions, seizing opportunities and sidestepping pitfalls.
                        <br />            <br />

                        So, as you step into the captivating realm of stocks, remember that chart patterns are not mere lines on a graph. They are the keys to deciphering the language of the market, empowering you to make educated predictions and navigate the intricate maze of stock price movements.
                        <br />              <br />
                        <br />

                        As you embark to your adventure into the complicated world of the inventory market, it turns into paramount to possess a profound understanding of various chart patterns. These styles, akin to the tricky brushstrokes on an artist's canvas, maintain the key to deciphering the underlying trends and dynamics of a selected stock.
                        <br />             <br />
                        <br />

                        By delving into the labyrinth of chart patterns, you equip your self with a precious device that goes past the mere analysis of numbers and data. These styles are like the whispers of the marketplace itself, revealing suggestions approximately the capability future price moves of a stock. With this perceptive perception, you are not just a spectator; you're a player in predicting the charming dance of inventory costs.
                        But the benefits don't forestall there. Proficiency in recognizing these patterns extends past man or woman shares. It grants you the capacity to peer into the collective sentiment of the marketplace. Just as a seasoned sailor can examine the transferring winds and tides, your adeptness with chart styles allows you to assume broader market traits, deciphering the grand tapestry of the monetary panorama.
                        <br />            <br />

                        Imagine witnessing a symphony of ascending triangles, descending wedges, and double bottoms. Each sample whispers its personal tale, reflecting the ebb and glide of investor psychology. Armed with this knowledge, you're higher poised to make knowledgeable choices, seizing opportunities and sidestepping pitfalls.
                        <br />            <br />

                        So, as you step into the captivating realm of stocks, don't forget that chart styles aren't mere lines on a graph. They are the keys to decoding the language of the market, empowering you to make educated predictions and navigate the difficult maze of stock fee movements.</p>
                </div>
                <div className='d-flex justify-content-end'>

            <button className='btn btn-success mb-3' onClick={nextPage}>Continue Reading → </button>
                </div>
            </div>
        </>

    )
}

export default Charts
