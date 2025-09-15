export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50">
      <svg width="140" height="40" viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2831BC" />
            <stop offset="100%" stopColor="#3d47e8" />
          </linearGradient>
        </defs>
        <rect x="0" y="15" width="140" height="10" rx="5" fill="#e5e7eb" />
        <rect x="0" y="15" width="140" height="10" rx="5" fill="url(#grad)">
          <animate attributeName="width" from="0" to="140" dur="1.2s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  );
}
