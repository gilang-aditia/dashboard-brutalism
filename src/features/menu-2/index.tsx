import React, { useState } from "react";

export default function FOrmTest() {
  const [adClient, setAdClient] = useState("");
  const [adSlot, setAdSlot] = useState("");
  const [submittedCode, setSubmittedCode] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (adClient.trim() && adSlot.trim()) {
      const generatedCode = `data-ad-client="${adClient}"
     data-ad-slot="${adSlot}"`;
      setSubmittedCode(generatedCode);
      setIsSubmitted(true);
      // Reset form after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setAdClient("");
        setAdSlot("");
      }, 3000);
    }
  };

  const handleClear = () => {
    setAdClient("");
    setAdSlot("");
    setSubmittedCode("");
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-yellow-300 p-8">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 -rotate-1 transform text-6xl font-black text-black">
            CODE INPUT
          </h1>
          <p className="rotate-1 transform border-4 border-black bg-white p-4 text-xl font-bold text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Masukkan data ad client dan ad slot untuk generate kode ads
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div className="relative">
            <label
              htmlFor="ad-client-input"
              className="mb-4 block -rotate-1 transform text-2xl font-black text-black"
            >
              AD CLIENT:
            </label>
            <input
              id="ad-client-input"
              type="text"
              value={adClient}
              onChange={(e) => setAdClient(e.target.value)}
              placeholder="ca-pub-9420276001906287"
              className="w-full transform border-6 border-black bg-white p-4 font-mono text-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 focus:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="ad-slot-input"
              className="mb-4 block rotate-1 transform text-2xl font-black text-black"
            >
              AD SLOT:
            </label>
            <input
              id="ad-slot-input"
              type="text"
              value={adSlot}
              onChange={(e) => setAdSlot(e.target.value)}
              placeholder="2749076909"
              className="w-full transform border-6 border-black bg-white p-4 font-mono text-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 focus:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] focus:outline-none"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!adClient.trim() || !adSlot.trim()}
              className="flex-1 transform border-4 border-black bg-green-400 px-8 py-4 text-xl font-black text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-green-500 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              SIMPAN
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="transform border-4 border-black bg-red-400 px-8 py-4 text-xl font-black text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              CLEAR
            </button>
          </div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mt-8 rotate-1 transform animate-bounce border-4 border-black bg-blue-400 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="mb-4 text-2xl font-black text-black">
              ✅ KODE ADS BERHASIL DIGENERATE!
            </h2>
            <div className="-rotate-1 transform border-4 border-black bg-white p-4">
              <pre className="overflow-x-auto font-mono text-sm text-black">
                {submittedCode}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
