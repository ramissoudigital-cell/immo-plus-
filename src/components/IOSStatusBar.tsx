import { Capacitor } from '@capacitor/core';

export default function IOSStatusBar({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  if (Capacitor.isNativePlatform()) {
    return null; // Don't show fake status bar on real devices
  }
  
  const color = theme === 'light' ? 'white' : '#1C1C1C';
  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 pt-4 pointer-events-none">
      <div className="font-semibold text-[15px] tracking-tight" style={{ color }}>9:41</div>
      <div className="flex items-center space-x-1.5">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10.5V8.5H3V10.5H1ZM5 10.5V6.5H7V10.5H5ZM9 10.5V4.5H11V10.5H9ZM13 10.5V1.5H15V10.5H13Z" fill={color}/>
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z" fill={color}/>
          <path d="M12.2426 3.75736C9.89949 1.41421 6.1005 1.41421 3.75736 3.75736L4.81802 4.81802C6.57538 3.06066 9.42462 3.06066 11.182 4.81802L12.2426 3.75736Z" fill={color}/>
          <path d="M14.364 1.63604C10.8492 -1.87868 5.15076 -1.87868 1.63604 1.63604L2.6967 2.6967C5.62588 -0.232476 10.3741 -0.232476 13.3033 2.6967L14.364 1.63604Z" fill={color}/>
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={color}/>
          <rect x="2" y="2" width="18" height="8" rx="2" fill={color}/>
          <path d="M24 4V8" stroke={color} strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}
