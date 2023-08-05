import { useState } from 'react';

function Card() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-72 h-96 bg-gray-100 rounded-md overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://via.placeholder.com/300x200"
        alt="Card Image"
        className="w-full h-1/2 object-cover"
      />

      <div
        className={`w-full h-1/2 absolute bottom-0 left-0 bg-white ${
          isHovered ? 'transition-transform -translate-y-full' : 'transition-transform translate-y-full'
        }`}
      >
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Card Title</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis rutrum turpis. Cras efficitur
            faucibus neque non suscipit.
          </p>
        </div>
      </div>
    </div>
  );
}