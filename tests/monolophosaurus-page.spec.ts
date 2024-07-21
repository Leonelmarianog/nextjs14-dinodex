import { test, expect } from "@playwright/test";

test("has image", async ({ page }) => {
  await page.goto("/monolophosaurus");

  await expect(page.getByRole("img")).toBeVisible();
  await expect(page.getByRole("img")).toHaveAttribute(
    "alt",
    "Chibi version of a Monolophosaurus"
  );
});

test("has details", async ({ page }) => {
  await page.goto("/monolophosaurus");

  await expect(
    page.getByText(
      'Monolophosaurus (meaning "single-crested lizard") is an extinct genus of tetanuran theropod dinosaur from the Middle Jurassic Shishugou Formation in what is now Xinjiang, China. It was named for the single crest on top of its skull.',
      { exact: true }
    )
  ).toBeVisible();
});
