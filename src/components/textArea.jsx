import React from 'react'
import "./textArea.css"
const TextArea = () => {
  return (
    
    <div className="first_section">
        <section className='More_reasons'>
            <h1>More reasons to join</h1>
            <div className="boxTypes">
                <div className="boxes">
                    <div><h3>Enjoy on your TV</h3></div>
                    <div><p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p></div>
                    <div><img src="" alt="" /></div>
                </div>
                <div className="boxes">
                    <div><h3>Download your shows to watch offline</h3></div>
                    <div><p>Save your favourites easily and always have something to watch.</p></div>
                    <div><img src="" alt="" /></div>
                </div>
                <div className="boxes">
                    <div><h3>Watch everywhere</h3></div>
                    <div><p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p></div>
                    <div><img src="" alt="" /></div>
                </div>
                <div className="boxes">
                    <div><h3>Create profiles for kids</h3></div>
                    <div><p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p></div>
                    <div><img src="" alt="" /></div>
                </div>
            </div>
            </section>

            <section className='stack'>
                <div className="second_section">
                    <h1>Frequently Asked Questions</h1>
                    <ul className='second_boxes'>
                        <li className='li_boxes'>
                            <h3>
                                <button className='li_button'>
                                    What is Netflix?
                                </button>
                            </h3>
                        </li>
                        <li className='li_boxes'>
                            <h3>
                                <button className='li_button'>
                                    How much does Netflix cost?
                                </button>
                            </h3>
                        </li>
                        <li className='li_boxes'>
                            <h3>
                                <button className='li_button'>
                                    Where i can watch?
                                </button>
                            </h3>
                        </li>
                        <li className='li_boxes'>
                            <h3>
                                <button className='li_button'>
                                    How can i cancel?
                                </button>
                            </h3>
                        </li>
                        <li className='li_boxes'>
                            <h3>
                                <button className='li_button'>
                                    What can watch on Netflix?
                                </button>
                            </h3>
                        </li>
                        <li className='li_boxes'>
                            <h3>
                                <button className='li_button'>
                                    Is Netflix good for kids?
                                </button>
                            </h3>
                        </li>
                    </ul>
                </div>
            </section>

            <section className='email_section'>
            </section>
    </div>
    
  )
}

export default TextArea
