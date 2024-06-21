import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, test } from "vitest";
import Categories from "../components/Categories";

beforeEach(() => {
    render(
        <BrowserRouter>
            <Categories />
        </BrowserRouter>,
    );
});

describe("renders expected elements", () => {
    test("renders categories heading", () => {
        expect(
            screen.getByRole("heading", { name: "Categories" }),
        ).toBeInTheDocument();
    });

    test("renders link to all products", () => {
        expect(
            screen.getByRole("link", { name: "All products" }),
        ).toBeInTheDocument();
    });

    test("renders link to jewelry", () => {
        expect(
            screen.getByRole("link", { name: "Jewelry" }),
        ).toBeInTheDocument();
    });

    test("renders link to electronics", () => {
        expect(
            screen.getByRole("link", { name: "Electronics" }),
        ).toBeInTheDocument();
    });

    test("renders link to mens clothing", () => {
        expect(
            screen.getByRole("link", { name: "Men's clothing" }),
        ).toBeInTheDocument();
    });

    test("renders link to womens clothing", () => {
        expect(
            screen.getByRole("link", { name: "Women's clothing" }),
        ).toBeInTheDocument();
    });
});
