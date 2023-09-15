import React from 'react'
import './Yardview.scss'
import Header from '../../Globel Components/Header/Header'
import { useSelector } from 'react-redux'
import { selectLiveData } from '../../Globel Utils/globeldataSlice'
import { ReactComponent as ATELI } from './SVG/AteliSvg.svg'

function Yardview() {
  const liveDataaaa = useSelector(selectLiveData)
  console.log('liveDataaaa', liveDataaaa)
  return (
    <div className="yardview-main-component">
      <Header label={'Yardview'} />
      <div className='dummy-svg-container'>
        <div className='dummy-svg'>Coming soon...</div>
        {/* <ATELI /> */}
      </div>
    </div>
  )
}

export default Yardview