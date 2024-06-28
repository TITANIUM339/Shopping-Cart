import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vitest } from "vitest";
import ProductList from "../components/ProductList";
import userEvent from "@testing-library/user-event";

const handleAdd = vitest.fn();
const handleSubtract = vitest.fn();

beforeEach(() => {
    render(
        <ProductList
            title="test"
            image="test"
            count={3}
            price={2}
            handleAdd={handleAdd}
            handleSubtract={handleSubtract}
        />,
    );
});

describe("renders expected elements", () => {
    test("renders title", () => {
        expect(screen.getByRole("heading", {name: "test"})).toBeInTheDocument();
    });

    test("renders image", () => {
        expect(screen.getByAltText("")).toBeInTheDocument();
    });

    test("renders item count", () => {
        expect(screen.getByText("3")).toBeInTheDocument();
    });

    test("renders add button", () => {
        expect(screen.getByRole("button", {name: "add"})).toBeInTheDocument();
    });

    test("renders remove button", () => {
        expect(screen.getByRole("button", {name: "remove"})).toBeInTheDocument();
    });

    test("renders price", () => {
        expect(screen.getByText("$6.00")).toBeInTheDocument();
    });
});

describe("buttons function properly", () => {
    test("calls handleAdd function once", async () => {
        const addButton = screen.getByRole("button", { name: "add" });

        await userEvent.click(addButton);

        expect(handleAdd).toBeCalledTimes(1);
    });

    test("calls handleSubtract function once", async () => {
        const removeButton = screen.getByRole("button", { name: "remove" });

        await userEvent.click(removeButton);

        expect(handleSubtract).toBeCalledTimes(1);
    });
});
