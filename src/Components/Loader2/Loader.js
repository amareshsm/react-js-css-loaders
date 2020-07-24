import React from 'react'
import styles from './style.css'

const Loader2 = (props) => (
  <>
    <style>{`${styles}`}</style>
    <div className="loader-div two">
      <div className="loader2">
        <div className="loader-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </>
)

export default Loader2
