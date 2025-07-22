'use client'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { CountryVisa, countries } from "@/lib/countries"

export function CountrySelector({
  selected,
  setSelected,
}: {
  selected: CountryVisa
  setSelected: (val: CountryVisa) => void
}) {
  return (
    <Select onValueChange={(val) => {
      const found = countries.find((c) => c.value === val)
      if (found) setSelected(found)
    }}>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select Country" />
      </SelectTrigger>
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
