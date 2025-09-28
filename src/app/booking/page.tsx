"use client";

import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import { useState } from "react";

export default function BookingPage() {
  const [venue, setVenue] = useState("");

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">Venue Booking</h1>
      <form className="flex flex-col gap-6 max-w-md">
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
        />
        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
        />

        <FormControl variant="standard">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select
            labelId="venue-label"
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <DateReserve />

        <Button
          type="submit"
          variant="contained"
          name="Book Venue"
        >
          Book Venue
        </Button>
      </form>
    </main>
  );
}
