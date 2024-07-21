import { test, expect } from "@playwright/test";

test("has image", async ({ page }) => {
  await page.goto("/centrosaurus");

  await expect(page.getByRole("img")).toBeVisible();
  await expect(page.getByRole("img")).toHaveAttribute(
    "alt",
    "Chibi version of a Centrosaurus"
  );
});

test("has details", async ({ page }) => {
  await page.goto("/centrosaurus");

  await expect(
    page.getByText(
      "Centrosaurus is an extinct genus of herbivorous ceratopsian dinosaurs from the late Cretaceous of Canada. Their remains have been found in the Dinosaur Park Formation and uppermost Oldman Formation, dating from 76.5 to 75.5 million years ago.",
      { exact: true }
    )
  ).toBeVisible();
});
