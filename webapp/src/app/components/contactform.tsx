export default function ContactForm() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-6">Stuur ons een bericht</h2>
      <p className="text-gray-700 mb-8">
        Heeft u behoefte aan meer informatie, wilt u een offerte aanvragen of een mogelijk project bespreken? Neem dan gerust contact met ons op.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2 bg-white shadow-lg p-6 rounded-lg">
          <form className="space-y-6">
            {/* Voornaam and Achternaam */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="mb-2 font-semibold">Voornaam *</p>
                <input
                  type="text"
                  placeholder="Voornaam"
                  className="border border-gray-300 p-3 rounded-lg w-full"
                />
              </div>
              <div>
                <p className="mb-2 font-semibold">Achternaam *</p>
                <input
                  type="text"
                  placeholder="Achternaam"
                  className="border border-gray-300 p-3 rounded-lg w-full"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="mb-2 font-semibold">Email-adres *</p>
              <input
                type="email"
                placeholder="Email-adres"
                className="border border-gray-300 p-3 rounded-lg w-full"
              />
            </div>

            {/* Telefoonnummer */}
            <div>
              <p className="mb-2 font-semibold">Telefoonnummer *</p>
              <input
                type="text"
                placeholder="Telefoonnummer"
                className="border border-gray-300 p-3 rounded-lg w-full"
              />
            </div>

            {/* Bericht */}
            <div>
              <p className="mb-2 font-semibold">Uw bericht *</p>
              <textarea
                placeholder="Uw bericht"
                rows={5}
                className="border border-gray-300 p-3 rounded-lg w-full"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
            >
              Versturen
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center space-x-4 bg-white shadow-lg p-6 rounded-lg">
            <span className="text-green-500 text-2xl">📞</span>
            <div>
              <h4 className="font-bold">Telefoon</h4>
              <p>06 12812117</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white shadow-lg p-6 rounded-lg">
            <span className="text-green-500 text-2xl">📧</span>
            <div>
              <h4 className="font-bold">Email</h4>
              <p>info@agroen-dv.nl</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white shadow-lg p-6 rounded-lg">
            <span className="text-green-500 text-2xl">📍</span>
            <div>
              <h4 className="font-bold">Adres</h4>
              <p>Emmerhoutstraat 57, 7814 XW Emmen</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white shadow-lg p-6 rounded-lg">
            <span className="text-green-500 text-2xl">🆔</span>
            <div>
              <h4 className="font-bold">KVK</h4>
              <p>59536276</p>
            </div>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg h-48 flex justify-center items-center">
            <h4 className="font-bold text-center text-gray-500">
              Ruimte voor Google Maps of logo
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}