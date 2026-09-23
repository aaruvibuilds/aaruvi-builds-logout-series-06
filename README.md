# ⚡ AARUVI BUILDS

### ⏻ Logout Animation — Series 06

**What happens when logging out means removing your presence?**
**A workspace fragments, clears, and leaves nothing behind.**

<p align="center">
  <a href="https://aaruvibuilds.github.io/aaruvi-builds-logout-series-06/">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-7B5CFF?style=for-the-badge&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/aaruvibuilds/aaruvi-builds-logout-series-06">
    <img src="https://img.shields.io/badge/💻%20SOURCE%20CODE-17151B?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
  </a>
</p>

---

## ⏻ The Build

**Logout Animation — Series 06** explores the idea of **presence removal**.

Instead of simply switching from a dashboard to a logged-out screen, the interface visually breaks apart.

The workspace fades away, the central presence fragments scatter outward, and the session ends with a clean signed-out state.

The result is a logout interaction that feels like a deliberate transition rather than a simple button action.

---

## 🎬 The Experience

### 01 — Session Active

The user starts inside a personal workspace dashboard.

The interface contains:

* Personal dashboard
* Active session indicator
* Active projects
* Unread messages
* Workspace storage usage

The page establishes a calm, functional workspace before the interaction begins.

---

### 02 — Initiating Logout

The user presses the **Logout** button.

The button changes state while the dashboard begins disappearing.

The interface immediately communicates that the session is ending.

---

### 03 — Removing Your Presence

The dashboard fades and scales down.

At the same time, the logout sequence reveals:

> Removing your presence.

A central fragment core appears in the middle of the workspace.

---

### 04 — Fragmentation

The central core breaks into multiple fragments.

Each fragment travels in a different direction while rotating and fading away.

The fragments represent the user's presence being removed from the workspace.

---

### 05 — Session Ended

Once the fragmentation sequence completes, the interface transitions into the signed-out state.

The final message:

> Nothing left behind.

The workspace confirms:

> Your session has been cleared.

---

### 06 — Enter Workspace

The user can return using:

**Enter workspace**

The interface smoothly restores the original dashboard.

---

## ✨ Interaction System

| Interaction     | Result                               |
| --------------- | ------------------------------------ |
| Hover Logout    | Button lift + light sweep            |
| Click Logout    | Workspace begins disappearing        |
| Fragment Stage  | Presence fragments scatter           |
| Session End     | Signed-out state appears             |
| Enter Workspace | Dashboard returns                    |
| Escape          | Returns to workspace when signed out |

---

## 🎨 Motion Details

### Dashboard Exit

The workspace scales down while fading away.

```text
Workspace
   ↓
Scale Down
   ↓
Fade Out
```

### Fragment System

The central fragment elements use individual trajectories.

```text
          •
      ↖       ↗

   •     ●     •

      ↙       ↘
          •
```

Each fragment has its own:

* Direction
* Distance
* Delay
* Rotation
* Scale
* Opacity

This creates a more organic disappearance rather than one large element simply fading out.

---

## 🧠 State-Driven Interaction

The interaction is controlled through four interface states:

```text
ACTIVE
   │
   │ Logout
   ▼
LEAVING
   │
   │ Fragment sequence
   ▼
SIGNED-OUT
   │
   │ Enter workspace
   ▼
RETURNING
   │
   ▼
ACTIVE
```

The JavaScript controls these states directly through the workspace element's `data-state` attribute.

The logout sequence runs for approximately **2.05 seconds** before the signed-out state appears, while returning to the workspace takes approximately **620ms**.

---

## 🌀 Fragment Animation

The fragmentation system is built using multiple independent elements.

Each fragment receives its own movement coordinates:

```css
--x
--y
```

The fragments then:

* Appear
* Scale up
* Move outward
* Rotate
* Scale down
* Fade away

This creates the visual feeling of the workspace presence breaking apart.

---

## 🖥️ Workspace Interface

The dashboard uses a minimal editorial layout featuring:

* Personal dashboard heading
* Overview statistics
* Message count
* Storage usage
* Active session indicator
* Workspace navigation

The actual interface includes **08 active projects**, **24 unread messages**, and **72% workspace usage**.

---

## 🎯 Presence Concept

The core visual idea is simple:

```text
USER PRESENT
     ↓
SESSION ACTIVE
     ↓
LOGOUT
     ↓
PRESENCE FRAGMENTS
     ↓
PRESENCE REMOVED
     ↓
SESSION CLEARED
```

Rather than showing a generic loading screen, the interface visually represents the disappearance of the user's presence.

---

## 🛠️ Built With

* **HTML5**
* **CSS3**
* **JavaScript**
* CSS Keyframe Animations
* CSS Custom Properties
* Responsive Design
* Reduced Motion Support

No frameworks or external JavaScript libraries are required.

---

## 📱 Responsive

The interface adapts across:

* Desktop
* Laptop
* Tablet
* Mobile

The fragment composition changes on smaller screens so the logout sequence remains visually balanced.

The dashboard cards also switch to responsive grid layouts for smaller viewports.

---

## ♿ Reduced Motion

The experience includes support for:

```css
prefers-reduced-motion: reduce
```

When enabled, animation and transition durations are reduced significantly to provide a more accessible experience.

---

## 📂 Project Structure

```text
aaruvi-builds-logout-series-06/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/aaruvibuilds/aaruvi-builds-logout-series-06.git
```

Open the project:

```bash
cd aaruvi-builds-logout-series-06
```

Then open:

```text
index.html
```

No build process is required.

---

## 🌐 Live Demo

Experience the interaction:

**https://aaruvibuilds.github.io/aaruvi-builds-logout-series-06/**

---

## 💻 Source Code

Explore the complete source:

**https://github.com/aaruvibuilds/aaruvi-builds-logout-series-06**

---

## 🎯 The Idea

Logout doesn't have to be instant.

It can communicate a feeling.

For Series 06, the idea was to visualize:

**presence → fragmentation → disappearance → clean exit**

A small interaction becomes a miniature visual story.

---

# ⚡ AARUVI BUILDS

**Frontend • UI • Motion**

Building modern web experiences through frontend development, creative UI and smooth motion.

### Connect

* 📸 Instagram — https://instagram.com/aaruvi_builds
* ▶️ YouTube — https://youtube.com/@AaruviBuilds
* 💻 GitHub — https://github.com/aaruvibuilds

---

### BUILD. EXPERIMENT. CREATE.

*Series 06 / Logout Animation*
