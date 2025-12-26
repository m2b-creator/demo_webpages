"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type CursorVariant = "default" | "hover" | "click" | "text" | "hidden" | "view" | "drag";

interface CursorState {
  variant: CursorVariant;
  text?: string;
}

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({ variant: "default" });
  const [isVisible, setIsVisible] = useState(true); // Default to true
  const [isPointer, setIsPointer] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isActivelyMoving, setIsActivelyMoving] = useState(true); // Track if cursor is actively moving
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Optional: keep a subtle trail effect (can be removed entirely if not wanted)
  const trailConfig = { damping: 35, stiffness: 800, mass: 0.15 };
  const trailXSpring = useSpring(cursorX, trailConfig);
  const trailYSpring = useSpring(cursorY, trailConfig);

  // Reset inactivity timeout
  const resetInactivityTimeout = useCallback(() => {
    // Clear existing timeout
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    
    // Show cursor when there's activity
    setIsActivelyMoving(true);
    
    // Set new timeout to hide cursor after 1 second of inactivity
    inactivityTimeoutRef.current = setTimeout(() => {
      setIsActivelyMoving(false);
    }, 1000);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!hasMoved) setHasMoved(true);
      resetInactivityTimeout();
    },
    [cursorX, cursorY, hasMoved, resetInactivityTimeout]
  );

  // Handle touch events for mobile/tablet
  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        cursorX.set(touch.clientX);
        cursorY.set(touch.clientY);
        if (!hasMoved) setHasMoved(true);
        setIsVisible(true);
        resetInactivityTimeout();
      }
    },
    [cursorX, cursorY, hasMoved, resetInactivityTimeout]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        cursorX.set(touch.clientX);
        cursorY.set(touch.clientY);
        resetInactivityTimeout();
      }
    },
    [cursorX, cursorY, resetInactivityTimeout]
  );

  const handleTouchEnd = useCallback(() => {
    // On touch end, start the inactivity timer
    resetInactivityTimeout();
  }, [resetInactivityTimeout]);

  useEffect(() => {
    // Check if device supports hover (not touch)
    const hasHover = window.matchMedia("(hover: hover)").matches;
    
    // For touch devices, add touch event listeners
    if (!hasHover) {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
      
      return () => {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
        if (inactivityTimeoutRef.current) {
          clearTimeout(inactivityTimeoutRef.current);
        }
      };
    }

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Check if mouse is already in the document on mount
    const checkInitialPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setHasMoved(true);
      setIsVisible(true);
    };

    // Fire once to get initial position
    document.addEventListener("mousemove", checkInitialPosition, { once: true });
    const handleMouseDown = () => {
      setCursorState((prev) => ({ ...prev, variant: "click" }));
      resetInactivityTimeout();
    };
    const handleMouseUp = () => {
      setCursorState((prev) => ({
        ...prev,
        variant: prev.variant === "click" ? (isPointer ? "hover" : "default") : prev.variant
      }));
      resetInactivityTimeout();
    };

    // Handle interactive elements
    const handleElementMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorType = target.getAttribute("data-cursor") as CursorVariant | null;
      const cursorText = target.getAttribute("data-cursor-text");

      if (cursorType) {
        setCursorState({ variant: cursorType, text: cursorText || undefined });
      } else if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsPointer(true);
        setCursorState({ variant: "hover" });
      }
    };

    const handleElementMouseLeave = () => {
      setIsPointer(false);
      setCursorState({ variant: "default" });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        setIsVisible(true);
      }
    });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("focus", () => setIsVisible(true));

    // Add listeners to interactive elements
    const addInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [data-cursor], input, textarea, select, [role="button"]'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleElementMouseEnter);
        el.addEventListener("mouseleave", handleElementMouseLeave);
      });
    };

    // Initial setup and mutation observer for dynamic elements
    addInteractiveListeners();
    const observer = new MutationObserver(addInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [handleMouseMove, handleTouchStart, handleTouchMove, handleTouchEnd, isPointer, resetInactivityTimeout]);

  // Check if we're on a touch-only device (no hover capability at all)
  const isTouchOnly = typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches;

  const cursorVariants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: "var(--color-primary)",
      border: "none",
      mixBlendMode: "normal" as const,
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "2px solid var(--color-primary)",
      mixBlendMode: "normal" as const,
    },
    click: {
      width: 8,
      height: 8,
      backgroundColor: "var(--color-primary)",
      border: "none",
      mixBlendMode: "normal" as const,
    },
    text: {
      width: 80,
      height: 80,
      backgroundColor: "var(--color-primary)",
      border: "none",
      mixBlendMode: "difference" as const,
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: "var(--color-primary)",
      border: "none",
      mixBlendMode: "normal" as const,
    },
    drag: {
      width: 60,
      height: 60,
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "2px solid var(--color-primary)",
      mixBlendMode: "normal" as const,
    },
    hidden: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "none",
      mixBlendMode: "normal" as const,
    },
  };

  return (
    <>
      {/* Global cursor hide */}
      <style jsx global>{`
        @media (hover: hover) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Main cursor - direct 1:1 tracking */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          ...cursorVariants[cursorState.variant],
          opacity: isVisible && hasMoved && (isTouchOnly ? isActivelyMoving : true) ? 1 : 0,
        }}
        transition={{
          width: { type: "spring", stiffness: 400, damping: 25 },
          height: { type: "spring", stiffness: 400, damping: 25 },
          opacity: { duration: 0.2 },
        }}
      >
        <AnimatePresence>
          {cursorState.text && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-xs font-medium text-[var(--color-primary-foreground)] whitespace-nowrap"
            >
              {cursorState.text}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-2 h-2 rounded-full bg-[var(--color-primary)]/50"
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible && hasMoved && cursorState.variant === "default" && (isTouchOnly ? isActivelyMoving : true) ? 1 : 0,
          scale: cursorState.variant === "click" ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}

// Provider component to add cursor to layout
export function CursorProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
