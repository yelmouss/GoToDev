import React from 'react'

const Footer = ({dark, updateDark}) => {
    return (
        <footer  className={`footer mt-auto  py-3 bg-light bg-opacity-50 ${dark ? "bg-dark" : "bg-transparent"}`}>
            <div class="container">
                <span>Place sticky footer content here.</span>
            </div>
        </footer>

    )
}

export default Footer