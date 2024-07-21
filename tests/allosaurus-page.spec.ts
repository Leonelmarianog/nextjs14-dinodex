import { test, expect } from "@playwright/test";

test("has image", async ({ page }) => {
  await page.goto("/allosaurus");

  await expect(page.getByRole("img")).toBeVisible();
  await expect(page.getByRole("img")).toHaveAttribute(
    "alt",
    "Chibi version of an Allosaurus"
  );
});

test("has details", async ({ page }) => {
  await page.goto("/allosaurus");

  await expect(
    page.getByText(
      "Allosaurus, (genus Allosaurus), large carnivorous dinosaurs that lived from 150 million to 144 million years ago during the Late Jurassic Period; they are best known from fossils found in the western United States, particularly from the Cleveland-Lloyd Quarry in Utah and the Garden Park Quarry in Colorado.",
      { exact: true }
    )
  ).toBeVisible();
});
