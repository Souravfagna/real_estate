import React from 'react'
import './serachbar.scss'

export default function seachbar() {
  return (
    <div className="seachbar">
        <div className="type">
            <button>Buy</button>
            <button>Rent</button>
            <form action="">
                <input type="text" name='location' placeholder='City Location' />
                <input type="number" name='minPrice' placeholder='Min Price'
                min={0}
                max={10000000}
                 />
                <input type="number" name='maxPrice' placeholder='Max Price' 
                min={0}
                max={10000000}
                />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    </div>
  )
}
