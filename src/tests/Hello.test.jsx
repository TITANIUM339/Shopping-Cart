import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Hello from "../components/Hello.jsx";

test("renders h1 element with Hello", () => {
    render(<Hello />);

    expect(screen.getByRole("heading", { name: "Hello" })).toBeInTheDocument();
});
