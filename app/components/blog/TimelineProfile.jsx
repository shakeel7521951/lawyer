import React from 'react'

const TimelineProfile = () => {
  return (
    <div>
       {/* Timeline Section */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* First Court Ruling */}
        <section className="bg-yellow-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">First Instance Court Ruling</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>First defendant sentenced to <b>6 years in prison and a fine</b>.</li>
            <li>Other defendants sentenced up to <b>3 years in prison and fines</b>.</li>
            <li>Several were deported after completing their sentences.</li>
            <li><b>4 defendants were acquitted</b> at that stage.</li>
          </ul>
        </section>

        {/* Defense Lawyer */}
        <section className="bg-white border-l-4 border-blue-500 p-6 rounded-2xl shadow flex gap-4 items-center">
          <img
            src="./about/ab4.jpeg"
            alt="Defense Lawyer"
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-semibold">Defense Lawyer: Saleh Ali Al-Khaldi</h2>
            <p className="text-gray-700 mt-2">
              After the initial ruling, lawyer Saleh Ali Al-Khaldi filed an appeal before the Court of Appeal.
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Cancel the First Instance Court’s ruling.</li>
              <li>Acquit the defendants due to <b>errors in applying the law</b>.</li>
            </ul>
          </div>
        </section>
    </div>
    </div>
  )
}

export default TimelineProfile
