"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CookieConsentContextType {
  consent: "accepted" | "declined" | null;
  openSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType>({
  consent: null,
  openSettings: () => {},
});

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
    setIsLoaded(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setConsent("declined");
  };

  const openSettings = () => {
    setConsent(null);
  };

  const showBanner = isLoaded && consent === null;

  return (
    <CookieConsentContext.Provider value={{ consent, openSettings }}>
      <AnimatePresence>
        {showBanner && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  Datenschutzhinweis
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Wir verwenden Cookies und verarbeiten Ihre Daten, wenn Sie unser Kontaktformular nutzen.
                  Ihre Daten werden sicher an unseren Server übertragen und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                </p>
                <p className="text-zinc-500 text-sm mb-8">
                  <a
                    href="https://m2b.solutions/datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
                  >
                    Datenschutzerklärung lesen
                  </a>
                </p>
                <div className="flex gap-4">
                  <motion.button
                    onClick={handleDecline}
                    className="flex-1 px-6 py-3 text-sm font-medium text-white border border-white/20 rounded-xl transition-colors hover:bg-white/10"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ablehnen
                  </motion.button>
                  <motion.button
                    onClick={handleAccept}
                    className="flex-1 px-6 py-3 text-sm font-medium text-white border border-white/20 rounded-xl transition-colors hover:bg-white/10"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Akzeptieren
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {children}
    </CookieConsentContext.Provider>
  );
}
