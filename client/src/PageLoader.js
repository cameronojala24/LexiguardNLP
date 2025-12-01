import { useState, useEffect } from "react";
import "./PageLoader.css";

function PageLoader({ onSplit, onReveal, onComplete }) {
  const [phase, setPhase] = useState("initial"); // initial -> split -> reveal -> done

  useEffect(() => {
    // Phase 1: Show LEXIGUARD together briefly
    const splitTimer = setTimeout(() => {
      setPhase("split");
      if (onSplit) onSplit(); // Signal that split started - app can prepare
    }, 600);

    // Phase 2: Text has split enough - reveal the app UI
    const revealTimer = setTimeout(() => {
      setPhase("reveal");
      if (onReveal) onReveal(); // Signal to show the app UI
    }, 1400);

    // Phase 3: Text has faded - cleanup
    const doneTimer = setTimeout(() => {
      setPhase("done");
      if (onComplete) onComplete();
    }, 2200);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, [onSplit, onReveal, onComplete]);

  if (phase === "done") return null;

  return (
    <div className={`page-loader ${phase}`}>
      <div className="split-text">
        <span className="text-left">LEXI</span>
        <span className="text-right">GUARD</span>
      </div>
    </div>
  );
}

export default PageLoader;
