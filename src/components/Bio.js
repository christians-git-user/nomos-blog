import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src='https://nomos-hosting.s3.amazonaws.com/images/waste.png' alt="Me" />
      <p>
        First point of contention.
        <br />
        Second point of contention.
      </p>
    </div>
  )
}

export default Bio
