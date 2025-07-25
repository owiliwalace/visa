// app/page.tsx
'use client';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="relative w-[800px] h-[550px] bg-white shadow-2xl rounded-md overflow-hidden border border-gray-300 font-mono text-xs">

        {/* Blue clipped section */}
        <div className="absolute top-0 left-0 w-full h-24 bg-blue-900 text-white clip-blue flex items-center justify-start px-6">
          <h1 className="text-4xl font-bold tracking-widest">VISA</h1>
        </div>

        {/* Red clipped section */}
        <div className="absolute top-0 right-0 w-full h-24 text-red-600 bg-gradient-to-r from-white via-red-200 to-red-600 clip-red flex items-center justify-end pr-6">
          <h2 className="text-xl font-extrabold tracking-widest uppercase">United States of America</h2>
        </div>

        {/* Visa content */}
        <div className="relative pt-28 px-6 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <div className="bg-gray-300 w-36 h-44 rounded shadow-inner mb-2" />
            <div className="text-sm">EE</div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-3">
            <Field label="Issuing Post Name" value="EEEEEEEE" />
            <Field label="Control Number" value="10000000000000" />
            <Field label="Surname" value="EEEEEEE" />
            <Field label="Given Name" value="EEEEEEE EEEEE" />
            <Field label="Passport Number" value="000000000" />
            <Field label="Sex" value="E" />
            <Field label="Entries" value="E" />
            <Field label="Birth Date" value="00-00-0000" />
            <Field label="Annotation" value="E" />
            <Field label="Visa Type/Class" value="EE / EE" />
            <Field label="Issue Date" value="00-00-0000" />
            <Field label="Expiration Date" value="00-00-0000" />
            <Field label="Nationality" value="EEE" />
            <Field label="Registration Number" value="E00000000" />
          </div>
        </div>

        {/* MRZ code */}
        <div className="absolute bottom-4 w-full px-6 text-sm font-mono text-black">
          <div>0000000000000000000000000000000000000000000</div>
          <div>0000000000000000000000000000000000000000000</div>
        </div>
      </div>
    </main>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
