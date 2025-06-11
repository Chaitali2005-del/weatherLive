import React from 'react'
import './News.css'


const weatherCategories = [
  {
    title: "Around The Weather News",
    articles: [
      {
        time: "2 Hours Ago",
        headline: "One Of The Daily Rituals I Often Find Myself Doing",
        imageUrl: "/assets/Rectangle 38.png"
      },
      {
        time: "3 Hours Ago",
        headline: "Some Parts Of The State Saw Scant Relief, As Downtown",
        imageUrl: "/assets/Rectangle 39.png"
      },
      {
        time: "2 Hours Ago",
        headline: "Cold Weather Alert Issued As Temperatures Set To Plummet",
        imageUrl: "/assets/Rectangle 40.png"
      }
    ]
  },
  {
    title: "Viral Weather",
    articles: [
      {
        time: "2 Hours Ago",
        headline: "One Of The Daily Rituals I Often Find Myself Doing",
        imageUrl: "/assets/Rectangle 45.png"
      },
      {
        time: "3 Hours Ago",
        headline: "Some Parts Of The State Saw Scant Relief, As Downtown",
        imageUrl: "/assets/Rectangle 48.png"
      },
      {
        time: "1 Hour Ago",
        headline: "Cold Weather Alert Issued As Temperatures Set To Plummet",
        imageUrl: "/assets/Rectangle 49.png"
      }
    ]
  },
  {
    title: "Space And Astronomy",
    articles: [
      {
        time: "2 Hours Ago",
        headline: "One Of The Daily Rituals I Often Find Myself Doing",
        imageUrl: "/assets/Rectangle 51.png"
      },
      {
        time: "3 Hours Ago",
        headline: "Some Parts Of The State Saw Scant Relief, As Downtown",
        imageUrl: "/assets/Rectangle 54.png"
      },
      {
        time: "1 Hour Ago",
        headline: "Cold Weather Alert Issued As Temperatures Set To Plummet",
        imageUrl: "/assets/Rectangle 55.png"
      }
    ]
  }
];

const News = () => {
  return (
    <div>
      <div className='news'>
        <h1 className='text-white px-40 py-45 flex items-center justify-between flex-wrap font-bold text-4xl'>News</h1>
      </div>

      <div className="news-container">
        {weatherCategories.map((category, index) => (
          <section key={index} className="news-section">
            <h2 className="section-title">{category.title}</h2>
            <div className="article-grid">
              {category.articles.map((article, idx) => (
                <div key={idx} className="article-card">
                  <img src={article.imageUrl} alt="news" className="article-image" />
                  <div className="article-content">
                    <span className="article-time">{article.time}</span>
                    <h3 className="article-headline">{article.headline}</h3>
                    <a href="/Article" className="read-link">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default News