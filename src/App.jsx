

function App() {
  const data = [
    { name: 'John Doe', age: 32, child_cnt: 3, hash256: '0x1234567890abcdef' },
    { name: 'Jane Doe', age: 29, child_cnt: 2, hash256: '0xabcdef1234567890' },
    { name: 'Jane Doe', age: 29, child_cnt: 2, hash256: '0xabcdef1234567890' },
  ];
  // const [houses, setHouses] = useState(data);
  // const addhouse = (house) => {
  //   setHouses([...houses, house]);
  // }


  return (
    <div className="flex flex-col justify-center overflow-visible">
      <Houseform/>
      <div className="flex flex-wrap justify-center">
     
      {data.map((item, index) => (
        <div
          key={index}
          className="w-64 h-80 m-4 "
          style={{ perspective: '1000px' }}
         
        >
            {/* Front Side */}
           
              <iframe
                src="https://lottie.host/embed/b47044a9-3f31-4574-8cf6-c3c2fbab2272/QEjfcFuG03.json"
                className="w-full h-full"
                title="animation"
              ></iframe>
      

            {/* Back Side */}
            <div className="bg-slate-50 rounded-xl p-5">
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <p className="text-sm text-gray-500">Hash: {item.hash256}</p>
            </div>
          </div>
      
      ))}
    </div>
       
    </div>
  );
}

export default App;

// create new house form component

const Houseform = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Create New House</h1>
      <form className="flex flex-col items-center justify-center mt-4">
        <input
          type="text"
          placeholder="House Name"
          className="w-64 p-2 border border-gray-300 rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="House Address"
          className="w-64 p-2 border border-gray-300 rounded-lg mb-2"
        />
        <button className="w-64 p-2 bg-blue-500 text-white rounded-lg">
          Create House
        </button>
      </form>
    </div>
  );
}

