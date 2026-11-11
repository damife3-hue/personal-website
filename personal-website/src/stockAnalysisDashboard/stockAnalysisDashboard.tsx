// import { useState } from 'react'

function StockAnalysisDashboard() {
//   const [count, setCount] = useState(0)

  async function runStockAnalysis() {
    alert("Function called")
  }

  return (
    <>
        <div>
            <div id="stock-analysis-dashboard-title">STOCK ANALYSIS DASHBOARD</div>
            <div id="stock-analysis-dashboard-subtitle">
                Put in a stock symbol you'd like to analyze (e.g. MSFT)
            </div>
            <input id="stock-analysis-dashboard-input" />
            <button className="stock-analysis-dashboard-button" onClick={() => runStockAnalysis()}> Analyze </button>
            <div id="stock-analysis-dashboard-data"></div>
        </div>
      {/* <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section> */}

    
    </>
  )
}

export default StockAnalysisDashboard
