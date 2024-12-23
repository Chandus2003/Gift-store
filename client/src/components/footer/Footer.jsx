import React from 'react'
import PartnerLogo from './PartnerLogo.jsx'
import './Footer.css'



export default function Footer(){
    return (
        <>
        <main>

            <section className='first-cont'>
                <a className='com-name' href="">EXISTENT GIFT</a>

                <section className='svg-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30">
                    <rect width="448" height="512" fill="#FFFFFF" />
                    <path d="M224.1 141c-63.6 0-114.1 51.4-114.1 114.1s51.4 114.1 114.1 114.1 114.1-51.4 114.1-114.1-51.4-114.1-114.1-114.1zm0 186c-39.8 0-71.9-32.1-71.9-71.9s32.1-71.9 71.9-71.9 71.9 32.1 71.9 71.9-32.1 71.9-71.9 71.9zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9 0-14.9 12-26.9 26.9-26.9 14.9 0 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.8-67.6-36-93.8s-58.1-34.3-93.8-36c-37-2.1-147.8-2.1-184.8 0-35.7 1.7-67.6 9.8-93.8 36s-34.3 58.1-36 93.8c-2.1 37-2.1 147.8 0 184.8 1.7 35.7 9.8 67.6 36 93.8s58.1 34.3 93.8 36c37 2.1 147.8 2.1 184.8 0 35.7-1.7 67.6-9.8 93.8-36s34.3-58.1 36-93.8c2.1-37 2.1-147.8 0-184.8zm-48.5 224.6c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.2 9-132.6 9s-103.2 2.6-132.6-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.2-9-132.6s-2.6-103.2 9-132.6c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.2-9 132.6-9s103.2-2.6 132.6 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.2 9 132.6s2.6 103.2-9 132.6z" fill="#000000" />
                    </svg>

                    <svg width="30" height="30" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="#fffff" stroke="#000000">
                    <path stroke="#ffffff" stroke-linejoin="round" stroke-width="12" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"></path>
                    </svg>

                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="#000000"></path>
                    </svg>

                </section>

            </section>

            <section className='second-cont'>

                <h4>Company</h4>
                <ul>
                    <li>Disclaimer</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>Returns and Cancellations</li>
                    <li>Creator Agreement</li>
                </ul>

            </section>

            <section className='third-cont'>

                <h4>Quick Links</h4>
                <ul>
                    <li>Products</li>
                    <li>Login</li>
                    <li>Track Order</li>
                    <li>Sell your Merch </li>
                    
                </ul>
                
            </section>

            <section className='fourth-cont'>
                <section>
                    <h4>100% Secure Payments</h4>
                    <PartnerLogo/>
                </section>

                
            </section>

        


        </main>

        <footer>
        <p>&copy; 2024 Frankly Wearing. All rights reserved.</p>
        </footer>

        </>
    )
}