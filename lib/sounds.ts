// Sound effects utilities
export const playSound = (type: 'success' | 'error' | 'notification') => {
  if (typeof window === 'undefined') return;
  
  const audio = new Audio();
  
  switch (type) {
    case 'success':
      // Success sound (higher pitch, pleasant)
      const successContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const successOscillator = successContext.createOscillator();
      const successGain = successContext.createGain();
      
      successOscillator.connect(successGain);
      successGain.connect(successContext.destination);
      
      successOscillator.frequency.value = 800;
      successGain.gain.setValueAtTime(0.3, successContext.currentTime);
      successGain.gain.exponentialRampToValueAtTime(0.01, successContext.currentTime + 0.3);
      
      successOscillator.start(successContext.currentTime);
      successOscillator.stop(successContext.currentTime + 0.3);
      
      // Add second note for harmony
      setTimeout(() => {
        const osc2 = successContext.createOscillator();
        const gain2 = successContext.createGain();
        osc2.connect(gain2);
        gain2.connect(successContext.destination);
        osc2.frequency.value = 1000;
        gain2.gain.setValueAtTime(0.2, successContext.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.01, successContext.currentTime + 0.2);
        osc2.start(successContext.currentTime);
        osc2.stop(successContext.currentTime + 0.2);
      }, 100);
      break;
      
    case 'error':
      // Error sound (lower pitch, alert)
      const errorContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const errorOscillator = errorContext.createOscillator();
      const errorGain = errorContext.createGain();
      
      errorOscillator.connect(errorGain);
      errorGain.connect(errorContext.destination);
      
      errorOscillator.frequency.value = 300;
      errorOscillator.type = 'square';
      errorGain.gain.setValueAtTime(0.2, errorContext.currentTime);
      errorGain.gain.exponentialRampToValueAtTime(0.01, errorContext.currentTime + 0.4);
      
      errorOscillator.start(errorContext.currentTime);
      errorOscillator.stop(errorContext.currentTime + 0.4);
      break;
      
    case 'notification':
      // Notification sound (gentle beep)
      const notifContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const notifOscillator = notifContext.createOscillator();
      const notifGain = notifContext.createGain();
      
      notifOscillator.connect(notifGain);
      notifGain.connect(notifContext.destination);
      
      notifOscillator.frequency.value = 600;
      notifOscillator.type = 'sine';
      notifGain.gain.setValueAtTime(0.25, notifContext.currentTime);
      notifGain.gain.exponentialRampToValueAtTime(0.01, notifContext.currentTime + 0.15);
      
      notifOscillator.start(notifContext.currentTime);
      notifOscillator.stop(notifContext.currentTime + 0.15);
      break;
  }
};
