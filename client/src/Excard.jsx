import React from "react";
function Excard(){
    const data[
        {img:"src/assets/img1.png",
            title:"card1",
        description :"this card is first card"
    },
    {img:"src/assets/img1.png",
            title:"card1",
        description :"this card is first card"
    },
    ]
    return(
        <>
<h1>My Cards</h1>
<div className="container">
    {data.map((item,index) => (
        <div 

    ))}
</div>
        </>

    );
}
export default Excard;
import React from "react";

function App() {
  const data = [
    {
      title: "Card 1",
      description: "This is the first card.",
      image: "https://via.placeholder.com/250x150?text=Image+1"
    },
    {
      title: "Card 2",
      description: "This is the second card.",
      image: "https://via.placeholder.com/250x150?text=Image+2"
    },
    {
      title: "Card 3",
      description: "This is the third card.",
      image: "https://via.placeholder.com/250x150?text=Image+3"
    },
    {
      title: "Card 4",
      description: "More content in this card.",
      image: "https://via.placeholder.com/250x150?text=Image+4"
    }
  ];

  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 20px;
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .card {
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          width: 250px;
          padding: 0;
          overflow: hidden;
          transition: transform 0.2s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card img {
          width: 100%;
          height: auto;
          display: block;
        }
        .card-content {
          padding: 15px;
        }
        .card h3 {
          margin: 0 0 10px;
          color: #333;
        }
        .card p {
          margin: 0;
          color: #666;
        }
      `}</style>

      <h1 style={{ textAlign: "center" }}>My Cards</h1>
      <div className="container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
