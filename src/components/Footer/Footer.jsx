import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="container mx-auto flex flex-wrap justify-between gap-8">
                {/* Company Description */}
                <div className="w-full md:w-1/4">
                    <img src="https://lot24.ma/upload/images/logo/ezezezezez.png" alt="lot24" />
                    <p className="text-sm mt-2">
                        An international wholesale trading platform for overstocks, clearance stocks, company liquidation stocks, bankrupt stocks, and customer returns.
                    </p>
                </div>

                {/* Information Links */}
                <div className="w-[45%] md:w-1/6">
                    <h3 className="text-lg font-semibold mb-2">Information</h3>
                    <ul className="text-sm space-y-1 ">
                        <li><Link to="/conditions">Terms and Conditions</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Cookie files policy</Link></li>
                        <li><Link to="#">Refund policy</Link></li>
                        <li><Link to="#">About us</Link></li>
                    </ul>
                </div>

                {/* Help Links */}
                <div className="w-[45%] md:w-1/6">
                    <h3 className="text-lg font-semibold mb-2">Help</h3>
                    <ul className="text-sm space-y-1">
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">Contact</Link></li>
                        <li><Link to="#">Sitemap</Link></li>
                        <li><Link to="#">For buyers</Link></li>
                        <li><Link to="#">For sellers</Link></li>
                        <li><Link to="#">Blog</Link></li>
                    </ul>
                </div>

                {/* Social MediLink Links */}
                <div className="w-[45%] md:w-1/6">
                    <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                    <ul className="text-sm space-y-1">
                        <li><Link to="#">Instagram</Link></li>
                        <li><Link to="#">Facebook</Link></li>
                        <li><Link to="#">YouTube</Link></li>
                        <li><Link to="#">Tiktok</Link></li>
                    </ul>
                </div>
            </div>

            {/* Payment Methods */}
            <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-8">
                <img src="https://via.placeholder.com/40x20?text=PayPal" alt="PayPal" className="w-12 h-auto " />
                <img src="https://via.placeholder.com/40x20?text=Bank" alt="Bank Transfer" className="w-12 h-auto " />
                <img src="https://via.placeholder.com/40x20?text=Giropay" alt="Giropay" className="w-12 h-auto " />
                <img src="https://via.placeholder.com/40x20?text=Sofort" alt="Sofort" className="w-12 h-auto " />
                <img src="https://via.placeholder.com/40x20?text=IDEAL" alt="IDEAL" className="w-12 h-auto " />
                <img src="https://via.placeholder.com/40x20?text=Mastercard" alt="Mastercard" className="w-12 h-auto " />
                <img src="https://via.placeholder.com/40x20?text=Visa" alt="Visa" className="w-12 h-auto " />
                <img src="https://via.placeholder.com/40x20?text=AmEx" alt="American Express" className="w-12 h-auto " />
            </div>

            {/* Footer Bottom */}
            <div className="container mx-auto text-center text-xs mt-8 border-t border-gray-700 pt-4">
                <p className=''>Lot24 Ltd Unit 4E, Enterprise Court, S63 5DB Rotherham, United Kingdom, VAT Number: GB 254632212 , Company number: 09582404</p>
                <p className="mt-2">
                    &copy; 2008 - 2024 Lot24. All rights reserved. All trademarks and brands used on this site belong to the owner of the website and are used for information purposes only. The use of this website constitutes acceptance of the terms of the contract, and the general terms and conditions.
                </p>
                <Link to="#" className="text-blue-500 hover:underline inline-block">Cookies settings</Link>
            </div>
        </footer>
    )
}

export default Footer
