"use client";

import { useState } from "react";
import { Check, ChevronsUpDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
  placeholder = "Caută localitatea...",
}: LocalityComboboxProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal text-sm h-10 px-3 border-[#E5E9F2] bg-white hover:bg-bg-muted"
        >
          <span className={cn("flex items-center gap-2 truncate", !selected && "text-text-muted")}>
            <MapPin className="h-4 w-4 shrink-0 text-brand-cyan" />
            {selected ? selected.label : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
        <Command>
          <CommandInput placeholder="Scrie numele localității..." />
          <CommandList>
            <CommandEmpty>Nicio localitate găsită.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.label}
                  onSelect={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn("mr-2 h-4 w-4 shrink-0", value === opt.value ? "opacity-100 text-brand-cyan" : "opacity-0")}
                  />
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
