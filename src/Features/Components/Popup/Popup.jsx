import React, { useState, useRef, useEffect } from "react";
import "./Popup.css";

// children now serve as the trigger element; text is shown inside the popup
const Popup = ({ children, position = "above", text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const popupRef = useRef(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen && triggerRef.current && popupRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popupRect = popupRef.current.getBoundingClientRect();

      let top = 0;
      let left = 0;

      if (position === "above") {
        // Position above the trigger
        top = triggerRect.top - popupRect.height - 10;
        left = triggerRect.left + triggerRect.width / 2 - popupRect.width / 2;

        // Adjust if popup goes off screen
        if (left < 10) left = 10;
        if (left + popupRect.width > window.innerWidth - 10) {
          left = window.innerWidth - popupRect.width - 10;
        }
        if (top < 10) {
          // If not enough space above, position below
          top = triggerRect.bottom + 10;
        }
      } else {
        // Default centered behavior
        top = window.innerHeight / 2 - popupRect.height / 2;
        left = window.innerWidth / 2 - popupRect.width / 2;
      }

      setPopupPosition({ top, left });
    }
  }, [isOpen, position]);

  if (!children) return null;

  return (
    <>
      <div
        ref={triggerRef}
        onClick={handleOpen}
        className="popup-trigger"
        style={{ display: "inline-block" }}
      >
        {children}
      </div>

      {isOpen && (
        <>
          <div className="popup-overlay" onClick={handleClose}></div>
          <div
            ref={popupRef}
            className={`popup-content ${
              position === "above" ? "popup-positioned" : ""
            }`}
            style={
              position === "above"
                ? {
                    position: "fixed",
                    top: `${popupPosition.top}px`,
                    left: `${popupPosition.left}px`,
                  }
                : {}
            }
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-children">
              {text && <p>{text}</p>}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
