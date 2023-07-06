
import backgroundImage from '../assets/books.jpeg'; // Importa la imagen como un módulo

export const LandingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'center' }}>
      <div className="max-w-md md:mb-8 p-8 w-1/2">
        <h1 className="text-6xl text-left font-bold mb-4">¿Ya pediste tus libros?</h1>
        <p className="text-gray-700 text-2xl text-left mb-6">Leer ... es soñar despierto</p>
        <button className="bg-turquesa hover:bg-blue_black text-white text-center font-bold py-2 px-4 rounded">
          ¡Quiero registrame!
        </button>
      </div>
    </div>
  );
};

