import React from 'react'
import Header1 from './Header1';
import Footer1 from './Footer1';
import Head from 'next/head'

export default function Defaultlayout(props) {
  return (
    <div>
        <Header1/>
        <div className='body'>{props.children}</div>
        <Footer1/>
    </div>
  )
}
