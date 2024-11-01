import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon
import Highlightlist from './ul/Highlightlist'

const Highlight = () => {
    return (
        <section id='highlights'>
            <div className='container'>
                <div className='row'>
                    <h2 className='section__title'>
                        Why Choose <span className='purple'>Library</span>
                    </h2>
                    <div className='highlight__wrapper'>
                        <Highlightlist
                            icon={<FontAwesomeIcon icon='bolt' />}
                            title="Easy and Quick"
                            para="Get access to the book you purchased online instantly"
                        />
                        <Highlightlist
                            icon={<FontAwesomeIcon icon='book-open' />}
                            title="10,000+ Books"
                            para="Library has books in all your favourite categories"
                        />
                        <Highlightlist
                            icon={<FontAwesomeIcon icon='tags' />}
                            title="Affordable"
                            para="Get your hands on the popular books far as little as $10"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlight