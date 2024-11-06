import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PokemonFinder from "../components/PokemonFinder";

describe(PokemonFinder, () => {
  test("Initial rendering will be done correctly", () => {
    render(<PokemonFinder />);

    // h1タグのテスト
    expect(screen.getByText("ポケモンファインダー")).toBeInTheDocument();
    // buttonのテスト
    expect(screen.getByText("ポケモンを見つける")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "ポケモンを見つける" })
    ).toBeInTheDocument();
    // inputのテスト
    expect(screen.getByPlaceholderText("ポケモンのIDを入力")).toBeInTheDocument();
  });
});
