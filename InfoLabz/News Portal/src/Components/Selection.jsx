import { useState } from 'react';
import React from 'react'

function Selection() {
      const [region, setRegion] = useState('');
      const [newsList, setNewsList] = useState([]);

      const loadData = async (event) => {
            event.preventDefault();
            const URL = `https://newsdata.io/api/1/latest?apikey=pub_c3cfab43fbb34c0b812930fc3ccea599&country=${region}&language=en&category=business&timezone=Asia/Kolkata`;
            try {
                  const data = await(await fetch(URL)).json();
                  setNewsList(data.results || []);
            } catch (error) {
                  console.error('Failed to fetch news:', error);
                  setNewsList([]);
            }
      };
      return (
            <>
                  <div className="container d-flex align-items-center my-4 gap-3 position-static">
                        <select
                              id="option"
                              className="form-select rounded"
                              value={region}
                              onChange={(e) => setRegion(e.target.value)}
                        >
                              <option value="">Choose Country</option>
                              <option value="af">Afghanistan</option>
                              <option value="ar">Argentina</option>
                              <option value="au">Australia</option>
                              <option value="bd">Bangladesh</option>
                              <option value="ca">Canada</option>
                              <option value="cn">China</option>
                              <option value="eg">Egypt</option>
                              <option value="et">Ethiopia</option>
                              <option value="fr">France</option>
                              <option value="de">Germany</option>
                              <option value="gh">Ghana</option>
                              <option value="gr">Greece</option>
                              <option value="in">India</option>
                              <option value="id">Indonesia</option>
                              <option value="ir">Iran</option>
                              <option value="il">Israel</option>
                              <option value="it">Italy</option>
                              <option value="jp">Japan</option>
                              <option value="ke">Kenya</option>
                              <option value="kr">Korea</option>
                              <option value="my">Malaysia</option>
                              <option value="mx">Mexico</option>
                              <option value="nl">Netherlands</option>
                              <option value="nz">New Zealand</option>
                              <option value="ng">Nigeria</option>
                              <option value="no">Norway</option>
                              <option value="np">Nepal</option>
                              <option value="pg">Papua New Guinea</option>
                              <option value="ph">Philippines</option>
                              <option value="pl">Poland</option>
                              <option value="pt">Portugal</option>
                              <option value="sa">Saudi Arabia</option>
                              <option value="lk">Sri Lanka</option>
                              <option value="za">South Africa</option>
                              <option value="es">Spain</option>
                              <option value="se">Sweden</option>
                              <option value="ch">Switzerland</option>
                              <option value="th">Thailand</option>
                              <option value="tz">Tanzania</option>
                              <option value="ae">United Arab Emirates</option>
                              <option value="us">USA</option>
                        </select>
                        <button onClick={loadData} className="btn btn-primary fw-bold">
                              Check
                        </button>
                  </div>

                  <div className="container mb-5">
                        <div className="row">
                              {newsList.length === 0 && (
                                    <p className="text-center text-muted">No news loaded yet. Select a country and click "Check".</p>
                              )}
                              {newsList.map((item, index) => (
                                    <div className="col-md-4 my-2" key={index}>
                                          <div className="card h-100 shadow-sm">
                                                <img
                                                      src={item.image_url || 'https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg'}
                                                      className="card-img-top"
                                                      alt="News Thumbnail"
                                                      style={{ height: '200px', objectFit: 'cover' }}
                                                />
                                                <div className="card-body d-flex flex-column">
                                                      <h5 className="card-title">{item.title || 'No Title'}</h5>
                                                      <p className="card-text flex-grow-1">
                                                            {item.description
                                                                  ? item.description.slice(0, 100) + '...'
                                                                  : 'No description available'}
                                                      </p>
                                                      <a
                                                            href={item.link}
                                                            className="btn btn-primary mt-auto"
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
      )
}

export default Selection
