# v4.13.71 — desktop overview image sizing

- Fixed the desktop navigation overview card so its image sits in a fixed 200 × 132 px crop on the left, with overview text to the right, matching the compact mobile presentation.
- Added intrinsic image dimensions to prevent full-width banner stretching before styles load.
- Applied robust desktop-only sizing and overflow constraints to all three dropdown overview cards (Fire, Commercial, Residential).
- Preserved the mobile navigation markup and styles exactly as in v4.13.70.
- Preserved the desktop menu-trigger behavior, homepage Site Survey quick action, and recent contact/phone refinements.
