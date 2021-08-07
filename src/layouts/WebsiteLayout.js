import React from 'react'
import Header from '../components/website/header'
import Footer from '../components/website/footer'


const WebsiteLayout = (props) => {
    return (
        <div>
            <Header />
                <div className="container-fluid">
                    {props.children}
                </div>
            <Footer />
        </div>
    )
}

export default WebsiteLayout
