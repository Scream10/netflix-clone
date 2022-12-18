import { render, screen } from "@testing-library/react";
import Navbar, { OPTIONS } from "./Navbar";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("renders a collection of navigation options", () => {
    render(<Navbar />);

    // TODO map on OPTIONS to get all navigation options
    const movies = screen.getByText("films");

    expect(movies).toBeInTheDocument();
  });
});
