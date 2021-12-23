import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="entry">
      <div className="entry-picture"
        style={{
          backgroundImage: 'url(https://pbs.twimg.com/profile_images/1178942318981701634/d5qM22Ft_400x400.jpg)'
        }}
      >
      </div>
      <div className="entry-body">
        <p className="entry-title">
          Un nuevo dia
        </p>
        <p className="entry-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing

        </p>
      </div>
      <div className="entry-date-box">
        <span>Lunes</span>
        <h4>28</h4>
      </div>
    </div >
  )
}
