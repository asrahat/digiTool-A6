

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-indigo-600  to-purple-500 py-8 px-4">
      <div className="max-w-4xl mx-auto border-purple-400/40 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center text-white">
       
          <div className="space-y-2 border-r-2 border-purple-400">
            <h2 className="text-4xl md:text-5xl font-bold">50K+</h2>
            <p className="font-semibold text-purple-200">Active Users</p>
          </div>

          <div className="space-y-2 border-r-2 border-purple-400">
            <h2 className="text-4xl md:text-5xl font-bold">200+</h2>
            <p className="font-semibold text-purple-200">Premium Tools</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold">4.9</h2>
            <p className="font-semibold text-purple-200">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
