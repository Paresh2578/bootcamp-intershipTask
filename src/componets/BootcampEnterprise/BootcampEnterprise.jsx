import React from 'react'


//utils
import { primaryColor } from '../../utils/constant'

export default function BootcampEnterprise() {
  return (
    <div className='bg-dark text-light p-5 'style={{borderBottom : `10px solid ${primaryColor}`}}>
      <div className='container' >
        <h2>Lejhro Bootcamp Enterprise</h2>
        <p>Competent solutions curated towards achieving organizational success</p>
        <button type="button" class="btn btn-outline-danger fs-7 ps-5 pe-5 pt-2 pb-2 mt-3">Explore</button>
      </div>
    </div>
  )
}
