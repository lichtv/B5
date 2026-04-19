# Design System Strategy: The Global Architect

## 1. Overview & Creative North Star

This design system is built upon the Creative North Star of **"The Global Architect."** 

We are moving away from the generic "SaaS template" aesthetic. Instead, we are leaning into high-end editorial layouts that feel like a premium business journal or a bespoke architectural proposal. The visual identity bridges the gap between the technical precision of modern logistics and the human-centric nature of global collaboration.

To achieve this, we employ **intentional asymmetry**. We break the rigid grid by allowing high-quality photography (cityscapes of Vietnam and the US) to bleed off the edges, while typography remains anchored to a strict vertical rhythm. We favor "breathing room" (generous white space) over density, ensuring that every piece of information feels curated and authoritative.

---

## 2. Colors & Surface Philosophy

The palette is anchored in deep stability and illuminated by success. We utilize the following Material-based tokens to create a sophisticated, layered environment.

### The "No-Line" Rule
To maintain a premium feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined through tonal shifts. For example, a content block using `surface-container-low` should sit directly against a `surface` background. This creates a "soft edge" that feels integrated rather than boxed in.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine vellum.
*   **Base:** `surface` (#f8f9fa) for the primary canvas.
*   **Lower Tier:** `surface-container-low` (#f3f4f5) for subtle grouping.
*   **Accent Tier:** `surface-container-highest` (#e1e3e4) for standout interactive elements.
*   **The Gold Standard:** Use `tertiary` (#745b00) and `tertiary-container` (#cda729) sparingly as an "Opportunity Glow" for high-conversion CTAs and success indicators.

### The Glass & Gradient Rule
For floating navigation or top-level overlays, use **Glassmorphism**. Apply a semi-transparent `surface_container_lowest` (White) with a 20px backdrop-blur. This allows the vibrant imagery of modern cityscapes to peek through, softening the interface. Use a subtle linear gradient (from `primary_container` to `secondary`) for hero backgrounds to provide "visual soul."

---

## 3. Typography: The Editorial Voice

We utilize a high-contrast pairing to balance authority with approachability.

*   **The Technical Anchor (Inter):** Used for Headlines (`display-lg` to `headline-sm`) and Labels. The bold weights of Inter represent the "Global" aspect—modern, clean, and unshakeable.
*   **The Human Narrative (Newsreader):** Used for Body text and Titles. This serif font represents the "Trust" aspect—traditional, readable, and sophisticated.

**Scale Highlights:**
*   **Display Large (Inter, 3.5rem):** Reserved for high-impact hero statements. Tight letter-spacing (-0.02em).
*   **Body Large (Newsreader, 1rem):** For long-form insights. Increased line-height (1.6) for maximum readability.
*   **Label Medium (Inter, 0.75rem):** All-caps with increased letter-spacing (0.05em) for a "technical blueprint" feel.

---

## 4. Elevation & Depth

We eschew traditional shadows in favor of **Tonal Layering**.

### The Layering Principle
Hierarchy is achieved by "stacking." Place a `surface-container-lowest` card on top of a `surface-container-low` background. The slight shift in brightness creates a natural lift without the "dirtiness" of heavy shadows.

### Ambient Shadows
When a floating effect is required (e.g., a high-level modal), use an **Ambient Shadow**:
*   **Color:** `on-surface` at 6% opacity.
*   **Blur:** 40px to 60px.
*   **Spread:** -5px to keep it tight to the container.

### The Ghost Border
If accessibility requires a container edge, use the **Ghost Border**: `outline-variant` (#c5c6cd) at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary_container` (#0d1c32) with `on_primary` text. Use `xl` (0.75rem) rounding.
*   **Success/Opportunity:** Solid `tertiary` (#745b00) for "Join" or "Apply" actions.
*   **Secondary:** Ghost-style. No background, `outline-variant` (20% opacity) border, `primary` text.

### Cards & Lists
*   **The Rule:** No dividers. Use `md` spacing (0.375rem) between items and use background shifts on `:hover`.
*   **Imagery:** Cards containing photography should use a subtle `0.25rem` rounding to soften the architectural imagery.

### Input Fields
*   **Style:** Minimalist. Only a bottom border using `outline` (#75777e) at 30% opacity. Upon focus, transition to a `tertiary` (Gold) bottom border (2px) to signify "Opportunity."

### Innovation Chips
*   **Visual:** Use `surface-container-highest` with `label-md` Inter text. These should feel like small, precise stamps of information.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. Let a photograph take up 60% of the screen while text occupies a clean 40% column.
*   **Do** use "Newsreader" for quotes and testimonials to instill a sense of heritage and trust.
*   **Do** use the `tertiary-fixed` gold for small UI accents, like a 4px "success" bar atop a card.

### Don’t:
*   **Don’t** use pure black (#000000) for text. Use `on_surface` (#191c1d) to maintain a premium, ink-on-paper look.
*   **Don’t** use harsh 90-degree corners. Even in a "structured" layout, the `DEFAULT` (0.25rem) rounding is necessary to feel modern.
*   **Don’t** use standard "Drop Shadows." If it looks like a default Photoshop effect, it’s wrong for this system. Stick to tonal stacking.

---

## 7. Imagery Integration

Professional photography is a core component, not an afterthought. 
*   **Vietnam/US Cityscapes:** Use high-contrast, blue-hour photography to align with the Navy palette.
*   **Collaboration Imagery:** Photos should be candid and desaturated slightly to let the UI elements (Gold accents) pop.
*   **Masking:** Use large-scale organic masks or "architectural crops" to integrate photos into the grid.
