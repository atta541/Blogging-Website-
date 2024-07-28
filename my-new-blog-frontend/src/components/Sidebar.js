import React from 'react';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6">Sidebar</h2>
      <ul className="space-y-4">
        <li>
          <a href="#" className="block text-lg hover:bg-gray-700 p-2 rounded">Home</a>
        </li>
        <li>
          <a href="#" className="block text-lg hover:bg-gray-700 p-2 rounded">Blog</a>
        </li>
        <li>
          <a href="#" className="block text-lg hover:bg-gray-700 p-2 rounded">About</a>
        </li>
        <li>
          <a href="#" className="block text-lg hover:bg-gray-700 p-2 rounded">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
