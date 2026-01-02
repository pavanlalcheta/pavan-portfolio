const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Sri Balaji University, Pune – School of Computer Studies",
    year: "2024 – 2026",
    score: "CGPA: 8.92",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Dr. Virambhai R. Godhaniya IT College, Porbandar (BKNMU)",
    year: "2021 – 2024",
    score: "CGPA: 9.17",
  },
  {
    degree: "HSC – Commerce (12th)",
    institute: "Jayshreebhen Virambhai Godhaniya English Medium School",
    year: "2021",
    score: "59.14%",
  },
  {
    degree: "SSC – General (10th)",
    institute: "Jayshreebhen Virambhai Godhaniya English Medium School",
    year: "2019",
    score: "57.5%",
  },
];

const Education = () => {

    return(
        <div className="py-12 px-6">
            <h2 className="text-blue-500 text-3xl font-bold text-center mb-10">Education</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
                {educationData.map((e,index)=>(
                    <div key={index}
                    className="bg-[#1a1d25] p-5 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-lg text-white font-semibold">{e.degree}</h3>
                        <p className="text-lg text-white font-semibold">{e.institute}</p>
                        <p className="text-sm text-blue-400 mt-1">{e.year}, {e.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;