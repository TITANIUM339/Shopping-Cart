import { beforeEach, describe, expect, test } from "vitest";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>,
    );
});

describe("renders link elements", () => {
    test("renders logo", () => {
        expect(
            screen.getByRole("link", { name: "Shopping Cart" }),
        ).toBeInTheDocument();
    });

    test("renders home", () => {
        expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    });

    test("renders shop", () => {
        expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
    });

    test("renders cart", () => {
        expect(screen.getByRole("link", { name: "Cart" })).toBeInTheDocument();
    });
});

describe("cart items count behaves correctly", () => {
    test("does not render cart items count when no prop is provided", () => {
        expect(screen.queryByText("1")).toBe(null);
    });

    test("renders cart items count when a number is passed in as prop", () => {
        render(
            <BrowserRouter>
                <Header cartItemsCount={1} />
            </BrowserRouter>,
        );

        expect(screen.getByText("1")).toBeInTheDocument();
    });
});
