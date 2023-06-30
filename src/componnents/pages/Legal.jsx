import React from 'react'
import { Container } from 'react-bootstrap'

const Legal = ({ dark, updateDark }) => {
    return (
        <Container className='mt-5'>
            <h2>Legal Notice</h2>
            <hr />
        <div className="legal-notice p-5 text-bold bg-light bg-opacity-25 rounded">
          
          <p>
            Disclaimer:<br /> The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website. Any reliance you place on such information is therefore strictly at your own risk.
          </p>
          <p>
            Intellectual Property:<br /> All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of GoToDev or its respective owners and is protected by applicable copyright and other intellectual property laws. Unauthorized use, reproduction, or modification of any content may violate copyright laws and result in legal action.
          </p>
          <p>
            Links to Third-Party Websites: <br />This website may contain links to third-party websites for your convenience and information. We do not endorse or have any control over the content, products, services, or privacy practices of these websites. Visiting and using these external websites is done at your own risk.
          </p>
          <p>
            Privacy Policy: <br />We respect the privacy of our website visitors and are committed to protecting any personal information collected.
          </p>
          <p>
            Applicable Law and Jurisdiction:<br /> These legal notices shall be governed by and construed in accordance with the laws of Morocco. Any disputes arising out of or in connection with these notices shall be subject to the exclusive jurisdiction of the courts of Morocco.
          </p>
        </div>
      </Container>
    )
}

export default Legal