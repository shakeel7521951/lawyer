import React from 'react'

const AppealJudgment = () => {
  return (
    <div>
       {/* Prosecution Appeal */}
        <section className="bg-white border-l-4 border-red-500 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">Public Prosecution Appeal</h2>
          <p className="text-gray-700 mt-2">
            The Public Prosecution also appealed against the First Instance Court ruling that acquitted
            some of the defendants.
          </p>
        </section>

        {/* Final Decision */}
        <section className="bg-green-100 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-green-700">
            Final Decision by the Court of Appeal
          </h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 mt-2">
            <li>The Appeal Court acquitted all defendants.</li>
            <li>The ruling confirmed the innocence of the accused.</li>
            <li>The case continued for <b>11 months of trial sessions</b>.</li>
          </ul>
        </section>

        {/* Court Reasoning */}
        <section className="bg-yellow-200 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">Reasoning Behind the Judgment</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-800 mt-2">
            <li>The case was surrounded by many doubts and suspicions.</li>
            <li>The documents and evidence lacked any <b>conclusive proof</b> of the defendants’ involvement in the crime.</li>
          </ul>
        </section>
      </div>
 
  )
}

export default AppealJudgment
