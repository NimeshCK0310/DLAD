import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand + Newsletter */}
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="logo" width={80} height={32} />
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            We are innovators of comfort. Looking good and feeling good 
            shouldn&apos;t be mutually exclusive. Community, culture, comfort or you - no hesitations.
          </p>

          <div className="mt-5">
            <h5 className="font-semibold mb-2">Let’s stay in touch</h5>
            <p className="text-gray-600 text-sm mb-3">
              Stay in the loop, with exclusive offers and product previews.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter email..."
                className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-green-600"
              >
                Join Rollie Nation
              </button>
            </form>
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h5 className="font-semibold">Help</h5>
          <ul className="mt-3 text-gray-600 space-y-2 text-sm">
            <li>My Account</li>
            <li>Student Offer</li>
            <li>Educator Offer</li>
            <li>Healthcare Offer</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQs</li>
            <li>Ethics</li>
            <li>Rollie Rewards</li>
            <li>Find a Store</li>
            <li>International</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Shop Section */}
        <div>
          <h5 className="font-semibold">Shop</h5>
          <ul className="mt-3 text-gray-600 space-y-2 text-sm">
            <li>Womens</li>
            <li>Mens</li>
            <li>Gift Card</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h5 className="font-semibold">Contact Us</h5>
          <ul className="mt-3 text-gray-600 space-y-2 text-sm">
            <li>1800 ROLLIE</li>
            <li>WhatsApp</li>
            <li>hello@rollienation.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 text-center text-xs text-gray-500 border-t border-gray-100">
        © {new Date().getFullYear()} Rollie Nation — Proudly Australian owned and operated.
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-gray-700">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-700">Privacy Policy</a>
          <a href="#" className="hover:text-gray-700">Student Discount</a>
          <a href="#" className="hover:text-gray-700">Educator Offer</a>
        </div>
      </div>
    </footer>
  )
}
