"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Check, ChevronsUpDown, MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface LocalityOption {
  value: string;
  label: string;
}

interface LocalityComboboxProps {
  value: string;
  onChange: (value: string) => void;
  options: LocalityOption[];
  placeholder?: string;
}

export function LocalityCombobox({
  value,
  onChange,
  options,
  placeholder = "Alege localitatea...",
}: LocalityComboboxProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selected = options.find((o) => o.value === value);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [query, options]);

  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent | TouchEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function select(optValue: string) {
    onChange(optValue);
    setOpen(false);
    setQuery("");
  }

  return (
    <div ref={wrapperRef} className="relative">
      {/* Trigger */}
      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-[#E5E9F2] bg-white px-3 text-sm font-normal transition-colors hover:bg-bg-muted focus:outline-none focus:ring-2 focus:ring-brand-cyan/30"
      >
        <span className={cn("flex items-center gap-2 truncate", !selected && "text-text-muted")}>
          <MapPin className="h-4 w-4 shrink-0 text-brand-cyan" />
          {selected ? selected.label : placeholder}
        </span>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1.5 w-full overflow-hidden rounded-lg border border-[#E5E9F2] bg-white shadow-[0_8px_30px_rgba(11,20,55,0.12)]">
          {/* Search */}
          <div className="flex items-center gap-2 border-b border-[#E5E9F2] px-3">
            <Search className="h-4 w-4 shrink-0 text-text-muted" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Scrie numele localității..."
              className="h-10 w-full border-0 bg-transparent text-sm outline-none placeholder:text-text-muted"
            />
          </div>

          {/* List */}
          <ul role="listbox" className="max-h-60 overflow-y-auto overscroll-contain p-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-6 text-center text-sm text-text-muted">
                Nicio localitate găsită.
              </li>
            ) : (
              filtered.map((opt) => {
                const isActive = value === opt.value;
                return (
                  <li key={opt.value} role="option" aria-selected={isActive}>
                    <button
                      type="button"
                      onClick={() => select(opt.value)}
                      className={cn(
                        "flex w-full items-center rounded-md px-3 py-2 text-left text-sm text-navy-ink transition-colors hover:bg-brand-cyan/10",
                        isActive && "bg-brand-cyan/10 font-medium"
                      )}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4 shrink-0",
                          isActive ? "text-brand-cyan opacity-100" : "opacity-0"
                        )}
                      />
                      {opt.label}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
