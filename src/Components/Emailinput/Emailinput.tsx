import React from "react";
import "../../index.css"

interface EmailInputProps {
  label: string;
  value: string | undefined;
  onChange: (value: string) => void; // Updated the prop type to receive the value directly
}

export const Emailinput = ({
  label,
  value,
  onChange,
  
}: EmailInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Extract the value from the event and pass it to the onChange callback
    const updatedValue = event.target.value;
    onChange(updatedValue);
  };

  return (
    <div className="mb-6 flex flex-col">
      <label htmlFor="email" className="text-sm mb-1">
        {label}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={value || ""}
        onChange={handleChange} // Use the local handleChange function
        placeholder="john@infigonfutures.com"
        className="rounded-lg border p-3 text-sm text-[#A6A6A6]"
      />
    </div>
  );
};
