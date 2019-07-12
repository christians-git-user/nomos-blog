import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = 'https://nomos-hosting.s3.amazonaws.com/images/waste.png';

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src ={photoURL} alt="Me" />
      <p>
        Meditations on technology, society, and power.
        <br />
        A Banerjee/Steckler collaboration.
      </p>
    </div>
  )
}

export default Bio
