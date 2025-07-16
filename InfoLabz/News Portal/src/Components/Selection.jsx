import React, { useState } from 'react';
import Select from 'react-select';

function Selection() {
  const [region, setRegion] = useState('');
  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('');
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState('');

  const categoryOptions = [
    { value: 'business', label: 'Business' },
    { value: 'crime', label: 'Crime' },
    { value: 'domestic', label: 'Domestic' },
    { value: 'education', label: 'Education' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'environment', label: 'Environment' },
    { value: 'food', label: 'Food' },
    { value: 'health', label: 'Health' },
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'other', label: 'Other' },
    { value: 'politics', label: 'Politics' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
    { value: 'top', label: 'Top' },
    { value: 'tourism', label: 'Tourism' },
    { value: 'world', label: 'World' }
  ];

  const countryOptions = [
    { value: 'af', label: 'Afghanistan' },
    { value: 'ar', label: 'Argentina' },
    { value: 'au', label: 'Australia' },
    { value: 'bd', label: 'Bangladesh' },
    { value: 'ca', label: 'Canada' },
    { value: 'cn', label: 'China' },
    { value: 'eg', label: 'Egypt' },
    { value: 'et', label: 'Ethiopia' },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'gh', label: 'Ghana' },
    { value: 'gr', label: 'Greece' },
    { value: 'in', label: 'India' },
    { value: 'id', label: 'Indonesia' },
    { value: 'ir', label: 'Iran' },
    { value: 'il', label: 'Israel' },
    { value: 'it', label: 'Italy' },
    { value: 'jp', label: 'Japan' },
    { value: 'ke', label: 'Kenya' },
    { value: 'kr', label: 'Korea' },
    { value: 'my', label: 'Malaysia' },
    { value: 'mx', label: 'Mexico' },
    { value: 'nl', label: 'Netherlands' },
    { value: 'nz', label: 'New Zealand' },
    { value: 'ng', label: 'Nigeria' },
    { value: 'no', label: 'Norway' },
    { value: 'np', label: 'Nepal' },
    { value: 'pg', label: 'Papua New Guinea' },
    { value: 'ph', label: 'Philippines' },
    { value: 'pl', label: 'Poland' },
    { value: 'pt', label: 'Portugal' },
    { value: 'sa', label: 'Saudi Arabia' },
    { value: 'lk', label: 'Sri Lanka' },
    { value: 'za', label: 'South Africa' },
    { value: 'es', label: 'Spain' },
    { value: 'se', label: 'Sweden' },
    { value: 'ch', label: 'Switzerland' },
    { value: 'th', label: 'Thailand' },
    { value: 'tz', label: 'Tanzania' },
    { value: 'ae', label: 'United Arab Emirates' },
    { value: 'us', label: 'USA' }
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'Hindi' },
    { value: 'gu', label: 'Gujarati' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'es', label: 'Spanish' },
    { value: 'ar', label: 'Arabic' },
    { value: 'zh', label: 'Chinese' },
    { value: 'ru', label: 'Russian' }
  ];

  const loadData = async (event) => {
    event.preventDefault();
    setError('');

    // Validate Gujarati
    if (language === 'gu' && region !== 'in') {
      setError('Gujarati language is only supported for India. Please choose India or change the language.');
      return;
    }

    const URL = `https://newsdata.io/api/1/latest?apikey=pub_c3cfab43fbb34c0b812930fc3ccea599&country=${region}&language=${language}&category=${category}&timezone=Asia/Kolkata`;

    try {
      const data = await (await fetch(URL)).json();
      setNewsList(data.results || []);
    } catch (error) {
      console.error('Failed to fetch news:', error);
      setNewsList([]);
    }
  };

  return (
    <>
      <div className="container my-4">
        <div className="row g-3">
          <div className="col-md-2">
            <Select
              options={categoryOptions}
              placeholder="Choose Category"
              onChange={(selected) => setCategory(selected ? selected.value : '')}
            />
          </div>
          <div className="col-md-2">
            <Select
              options={languageOptions}
              placeholder="Choose Language"
              onChange={(selected) => setLanguage(selected ? selected.value : '')}
            />
          </div>
          <div className="col-md-8">
            <Select
              options={countryOptions}
              placeholder="Choose Country"
              onChange={(selected) => setRegion(selected ? selected.value : '')}
            />
          </div>
          <div className="col-12 text-center">
            <button onClick={loadData} className="btn btn-primary fw-bold px-4">
              Check
            </button>
          </div>
          {error && (
            <div className="col-12">
              <div className="alert alert-danger text-center" role="alert">
                {error}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          {newsList.length === 0 && (
            <p className="text-center text-muted">
              No news loaded yet. Select a country and click "Check".
            </p>
          )}
          {newsList.map((item, index) => (
            <div className="col-md-4 my-md-2 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
                <img
                  src={
                    item.image_url ||
                    'https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg'
                  }
                  className="card-img-top"
                  alt="News Thumbnail"
                />
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title text-dark fw-bold mb-2" style={{ fontSize: '1.2rem' }}>
                    {item.title || 'No Title'}
                  </h5>
                  <p className="card-text text-muted flex-grow-1" style={{ fontSize: '0.95rem' }}>
                    {item.description
                      ? item.description.slice(0, 100) + '...'
                      : 'No description available'}
                  </p>
                  <a
                    href={item.link}
                    className="btn btn-outline-primary mt-3 align-self-start"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Selection;