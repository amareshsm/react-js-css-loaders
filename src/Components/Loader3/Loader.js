import React from 'react'
import styles from './style.css'
const Chaser = (props) => (
  <>
    <style>{`${styles}`}</style>
    <div className="loader-div three">
      <div className="loader3">
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

export default Chaser
