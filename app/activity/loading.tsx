export default function ActivityLoading() {
  return (
    <div className="section-padding bg-slate-950">
      <div className="section-container">
        <div className="space-y-8 animate-pulse">
          {/* Title Skeleton */}
          <div className="space-y-4">
            <div className="h-12 bg-slate-800 rounded-lg w-1/3 mx-auto" />
            <div className="h-6 bg-slate-800 rounded-lg w-1/2 mx-auto" />
          </div>
          
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-slate-800 rounded-xl" />
            ))}
          </div>
          
          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-96 bg-slate-800 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
