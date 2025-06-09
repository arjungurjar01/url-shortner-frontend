import React from "react";
import { useState } from "react";
import axios from "axios";
import { createShortUrl } from "../api/shortUrl";
import { useSelector } from "react-redux";

function Urlform() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [shortUrl, setShortUrl] = useState();
  const [customSlug,setCustomSlug] = useState("");
  const [copied, setCopied] = useState(false);
  const {isAuthenticated} = useSelector((state) => state.auth);
  // console.log(isAuthenticated);
  // console.log(url);

  const handleSubmit = async (e) => {
    try {
    e.preventDefault();
    const data = await createShortUrl(url,customSlug);
    console.log(data);
    setShortUrl(data.shortUrl);
     }catch(err){
      setError(err.message)
    }
  
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4 ">
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 mb-2 mr-28 "
        >
          Enter your URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onInput={(event) => setUrl(event.target.value)}
          placeholder="https://example.com"
          required
          className="w-full px-4 py-2 text-black border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {isAuthenticated && (
        <div className="mt-4">
          <label
            htmlFor="customSlug"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Custom URL (optional)
          </label>
          <input
            type="text"
            id="customSlug"
            value={customSlug}
            onChange={(event) => setCustomSlug(event.target.value)}
            placeholder="Enter custom slug"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        Shorten URL
      </button>

      {shortUrl && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Your shortened URL:
          </h2>
          <div className="flex items-center">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 p-2 border border-gray-300 rounded-l-md text-black bg-gray-50"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-r-md transition-colors duration-200 cursor-pointer ${
                copied
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Urlform;
