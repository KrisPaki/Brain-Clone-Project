import { test, expect } from "@playwright/test";
import { AUTOMATER_PRODUCTS } from "../src/config/automater";

// ─── Product definitions (mirrors src/config/automater.ts) ────────────────────
const PRODUCTS = {
  itsEtap1: {
    url: AUTOMATER_PRODUCTS.itsEtap1,
    id: "918448",
    cardText: "Etap 1",
    cta: "Kup teraz",
  },
  itsEtap2: {
    url: AUTOMATER_PRODUCTS.itsEtap2,
    id: "918222",
    cardText: "Etap 2",
    cta: "Kup teraz",
  },
  itsSchool: {
    url: AUTOMATER_PRODUCTS.itsSchool,
    id: "979412",
    cardText: "Pre & School",
    cta: "Zamów licencję",
  },
  terapeuta: {
    url: AUTOMATER_PRODUCTS.terapeuta,
    id: "979413",
    cardText: "Platforma Terapeuta",
    cta: "Kup teraz",
  },
  kartaMowy: {
    url: AUTOMATER_PRODUCTS.kartaMowy,
    id: "1073862",
    cardText: "Narzędzie cyfrowe",
    cta: "Kup kod aktywacyjny",
  },
} as const;

/** Locate a product card on /sklep by unique text contained within the card. */
function sklepCard(page: import("@playwright/test").Page, uniqueText: string) {
  return page.locator('[class*="rounded-2xl"]').filter({ hasText: uniqueText });
}

// ─── HTTP health checks ───────────────────────────────────────────────────────

test.describe("Automater product URL health checks (no 404)", () => {
  for (const [name, p] of Object.entries(PRODUCTS)) {
    test(`${name} (ID ${p.id}) returns HTTP 2xx`, async ({ request }) => {
      const response = await request.get(p.url, {
        maxRedirects: 10,
        timeout: 15_000,
      });
      expect(
        response.status(),
        `Expected 2xx for ${p.url}, got HTTP ${response.status()}`
      ).toBeLessThan(400);
    });
  }
});

// ─── Click-based tests on /sklep ─────────────────────────────────────────────

test.describe("Sklep page — clicking buy CTAs opens correct Automater checkout", () => {
  for (const [name, p] of Object.entries(PRODUCTS)) {
    test(`Card "${p.cardText}" — clicking "${p.cta}" opens checkout for product ${p.id}`, async ({ page, context }) => {
      await page.goto("/sklep");
      await page.waitForLoadState("networkidle");

      const card = sklepCard(page, p.cardText);
      await expect(card).toBeVisible();

      const ctaLink = card.locator(`a[href="${p.url}"]`);
      await expect(ctaLink).toBeVisible();
      await ctaLink.scrollIntoViewIfNeeded();

      const [newTab] = await Promise.all([
        context.waitForEvent("page"),
        ctaLink.click(),
      ]);
      await newTab.waitForLoadState("domcontentloaded");

      expect(
        newTab.url(),
        `Expected new tab URL to contain product ID ${p.id}`
      ).toContain(p.id);
      expect(newTab.url()).toContain("automater.pl");

      await newTab.close();
    });
  }
});

// ─── KartaMowy page — hero button click ──────────────────────────────────────

test.describe("KartaMowy page — hero buy button opens correct checkout", () => {
  test("Hero 'Kup kod aktywacyjny — 389 PLN' opens checkout for product 1073862", async ({ page, context }) => {
    await page.goto("/karta-mowy");
    await page.waitForLoadState("networkidle");

    const heroSection = page.locator("section").first();
    const heroButton = heroSection.locator(`a[href="${PRODUCTS.kartaMowy.url}"]`);
    await expect(heroButton).toBeVisible();
    await expect(heroButton).toContainText("Kup kod aktywacyjny");

    const [newTab] = await Promise.all([
      context.waitForEvent("page"),
      heroButton.click(),
    ]);
    await newTab.waitForLoadState("domcontentloaded");

    expect(newTab.url()).toContain(PRODUCTS.kartaMowy.id);
    expect(newTab.url()).toContain("automater.pl");
    await newTab.close();
  });

  test("Page body Automater links point only to kartaMowy product (1073862)", async ({ page }) => {
    await page.goto("/karta-mowy");
    await page.waitForLoadState("networkidle");

    const bodyLinks = page.locator("main, #root > div > div")
      .first()
      .locator(`a[href*="automater.pl"]`);
    const count = await bodyLinks.count();
    expect(count, "Expected at least one Automater buy link in page body").toBeGreaterThanOrEqual(1);

    for (let i = 0; i < count; i++) {
      const href = await bodyLinks.nth(i).getAttribute("href");
      expect(href, `Link ${i} must contain /1073862`).toContain("/1073862");
      for (const wrongId of ["918448", "918222", "979412", "979413"]) {
        expect(href, `Link ${i} must NOT contain /${wrongId}`).not.toContain(`/${wrongId}`);
      }
    }
  });
});

// ─── Sanity: Sklep internal link is NOT Automater ────────────────────────────

test("Sklep — 'Zobacz programy' is an internal link (not Automater)", async ({ page }) => {
  await page.goto("/sklep");
  await page.waitForLoadState("networkidle");

  const programyCard = sklepCard(page, "Programy edukacyjne");
  const link = programyCard.getByRole("link", { name: /Zobacz programy/i });
  await expect(link).toBeVisible();

  const href = await link.getAttribute("href");
  expect(href).not.toContain("automater.pl");
  expect(href).toContain("programy-edukacyjne");
});
