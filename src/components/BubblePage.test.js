import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetch as mockFetchData} from '../utils/Fetch'

jest.mock('../utils/Fetch')

const colorsData = [
  {color: "aliceblue",code:{hex: "#f0f8ff"},id: 1},
  {color: "limegreen",code: {hex: "#99ddbc"},id: 2}
]
test("Component renders without errors", () => {
  render(<BubblePage/>)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  mockFetchData.mockResolvedValue(colorsData);
  render(<BubblePage />);

  const bubbles = screen.findByText(/bubbles/i);
  expect(await bubbles).toBeInTheDocument();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading