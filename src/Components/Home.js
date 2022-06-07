import React from 'react'
import '../Styles/Home.css'
import Product from './Product'
export default function Home() {
  return (
    <div className="home">
    <div className="home_container">
      <img className='home_image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""/>
        <div className='home_row'>
            <Product id={1} title="hello" image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15253580/2021/12/22/ec56e52c-dae5-40b6-84f7-862ee51a98151640174956773-Nautica-Men-Sweaters-9351640174956338-1.jpg" price={202} rating={4}/>
            <Product id={2} title="hello" image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15253580/2021/12/22/ec56e52c-dae5-40b6-84f7-862ee51a98151640174956773-Nautica-Men-Sweaters-9351640174956338-1.jpg" price={202} rating={3}/>
        </div>
        <div className='home_row'>
        <Product id={3} title="hello" image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15253580/2021/12/22/ec56e52c-dae5-40b6-84f7-862ee51a98151640174956773-Nautica-Men-Sweaters-9351640174956338-1.jpg" price={202} rating={2}/>
        <Product id={4} title="hello" image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15253580/2021/12/22/ec56e52c-dae5-40b6-84f7-862ee51a98151640174956773-Nautica-Men-Sweaters-9351640174956338-1.jpg" price={202} rating={5}/>
        <Product id={5} title="hello" image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15253580/2021/12/22/ec56e52c-dae5-40b6-84f7-862ee51a98151640174956773-Nautica-Men-Sweaters-9351640174956338-1.jpg" price={202} rating={1}/>
        </div>
        <div className='home_row'>
        <Product id={6} title="hello" image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15253580/2021/12/22/ec56e52c-dae5-40b6-84f7-862ee51a98151640174956773-Nautica-Men-Sweaters-9351640174956338-1.jpg" price={202} rating={4}/>
        </div>
    </div>
  </div>
  )
}
