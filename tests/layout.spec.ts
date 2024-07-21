import { test, expect } from "@playwright/test";

test("renders navbar correctly", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("navigation")).toBeVisible();

  await expect(
    page.getByRole("link", { name: "DinoDex", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "DinoDex", exact: true })
  ).toHaveAttribute("href", "/");

  await expect(
    page.getByRole("link", { name: "Allosaurus", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Allosaurus", exact: true })
  ).toHaveAttribute("href", "/allosaurus");

  await expect(
    page.getByRole("link", { name: "Centrosaurus", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Centrosaurus", exact: true })
  ).toHaveAttribute("href", "/centrosaurus");

  await expect(
    page.getByRole("link", { name: "Monolophosaurus", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Monolophosaurus", exact: true })
  ).toHaveAttribute("href", "/monolophosaurus");
});
