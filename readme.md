# Spot the Difference Game

A fun and interactive "Spot the Difference" game built using HTML, CSS, and JavaScript, with game configurations loaded dynamically from a JSON file.

---

## Features

- Two images are displayed side by side.
- Players can click on the differences in the left image.
- The game highlights the differences as they are found.
- Score is updated dynamically.
- A success message is displayed when all differences are identified.
- Configurable through a config.json file, making it easy to change images or difference coordinates.

---

## JSON Configuration

The game is powered by a JSON configuration file (*config.json*) that defines the images and the differences. Below is an example of the JSON structure:

```json
{
  "gameTitle": "Spot the Difference - Animals",
  "images": {
    "image1": "images/image1.jpg",
    "image2": "images/image2.jpg"
  },
  "differences": [
    { "x": 100, "y": 200, "width": 50, "height": 50 },
    { "x": 300, "y": 150, "width": 40, "height": 40 },
    { "x": 500, "y": 300, "width": 30, "height": 30 }
}   