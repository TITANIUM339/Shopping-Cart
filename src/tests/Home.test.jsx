import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, test } from "vitest";
import Home from "../routes/Home";

beforeEach(() => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>,
    );
});

describe("renders expected content", () => {
    test("renders welcome heading", () => {
        expect(
            screen.getByRole("heading", { name: "Welcome to Shopping Cart" }),
        ).toBeInTheDocument();
    });

    test("renders paragraph with text", () => {
        expect(
            screen.getByText(/We offer a wide selection/),
        ).toBeInTheDocument();
    });

    test("renders link to shop", () => {
        expect(
            screen.getByRole("link", { name: "Shop now" }),
        ).toBeInTheDocument();
    });
});
