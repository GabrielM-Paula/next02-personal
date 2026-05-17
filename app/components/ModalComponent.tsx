"use client";

import { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalComponent({
  isOpen,
  onClose,
  children,
}: ModalProps) {

  useEffect(() => {
    function handle(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handle);

    return () =>
      window.removeEventListener("keydown", handle);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/30
        backdrop-blur-sm
        p-4
      "
    >

      <div
        className="
          w-full max-w-lg
          rounded-3xl
          border border-white/20
          bg-white/80
          backdrop-blur-xl
          shadow-2xl
          p-6
          animate-in fade-in zoom-in-95
        "
      >

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Modal
          </h2>

          <button
            onClick={onClose}
            className="
              w-10 h-10
              rounded-full
              bg-gray-100
              hover:bg-red-100
              hover:text-red-600
              transition
              font-bold
            "
          >
            ✕
          </button>

        </div>

        {/* CONTEÚDO */}
        {children}

      </div>
    </div>
  );
}