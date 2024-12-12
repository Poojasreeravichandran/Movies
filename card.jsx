import React from 'react';

function CardPage() {
  const movies = [
    {
      title: "The Dark Knight",
      description: "When the menace known as The Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      image: "https://th.bing.com/th/id/R.6995f93a27ab55089f5463d4221f0f5a?rik=bFk3zIisB%2fqBnQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-M-Fr5SjvED0%2fTuGJSs2zKVI%2fAAAAAAAAtHU%2fZTXzPqkwoRc%2fs1600%2fDark_Knight_Wallpapers.jpg&ehk=7LRJOTWrK9Jjs1agcNr7zgNeQDk210gLbgmnH0ubtTI%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Inception",
      description: "A thief who enters the dreams of others to steal secrets from their subconscious is given a chance to have his criminal record erased as payment for implanting an idea into the mind of a CEO.",
      image: "https://th.bing.com/th/id/OIP.ps02Cq1ZLtzBEPPpSVttKgHaLH?rs=1&pid=ImgDetMain",
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image: "https://m.media-amazon.com/images/I/91UJ2wtr18L._AC_SY679_.jpg",
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    },
    // Add more movies as needed
  ];

  // Inline styles for the page and card
  const pageStyle = {
    backgroundColor: '#141414',
    padding: '20px',
    textAlign: 'center',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '2rem',
    marginBottom: '20px',
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const cardStyle = {
    backgroundColor: '#1e1e1e',
    borderRadius: '10px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease-in-out',
    margin: '10px',
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'scale(1.05)',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderBottom: '2px solid #333',
  };

  const contentStyle = {
    padding: '10px',
  };

  const titleCardStyle = {
    fontSize: '1.2rem',
    margin: '10px 0',
    color: 'white',
  };

  const descriptionStyle = {
    fontSize: '0.9rem',
    color: '#ccc',
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Movie Collection</h1>
      <div style={gridStyle}>
        {movies.map((movie, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={movie.image} alt={movie.title} style={imageStyle} />
            <div style={contentStyle}>
              <h2 style={titleCardStyle}>{movie.title}</h2>
              <p style={descriptionStyle}>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardPage;

