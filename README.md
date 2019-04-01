# GAME

## Setup

### Installing node.js

Download at [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and install it on your system.

### Installing TypeScript

``` bash
npm install -g typescript
```

### Installing Less

``` bash
npm install -g less
```

### installing packages

Navigate to the project folder and run the command to install all needed dependencies

``` bash
npm install
```

### compiling and running

There is a start command for every operating system which compiles the game and copies the needed files into the dist folder.

``` bash
npm run start_win / start_mac / start_lin
```

Textures: https://itch.io/game-assets/tag-8-bit


## Gamedesign

- Roundbased 2D game
- there are two 2D layers. Tunnels etc are built in the front layer, buildings in the back layer
- Game is based on surface level buildings and underground production
- there are a few ages --> levelup through leveling of technologies. Once a certain amount is reached (compare to Civ6 or Dawn of Man) a new age is unlocked
- first resources are found on the ground, farms are built later on
- underground production is limited by workers and trasport throughput (vertical tunnel entrances can be upgraded over time to allow for grater throughput)
- chance of collapsing tunnels is based on material and support type
- different buildings can be build modular: define a size and select stuff to be inside in a config menu
- fighting should be a bit like in civ6
- workers and builders aren't needed to move -> each building costs "building points" and assigned builders are split to different procets (this happens automatically, but players can finetune this by hand). The same for "working points" in production units
- all units (workers, builders, farmers, army, ...) are citizens that have to be payed (food, ...)
- population grows like in anno --> build homes and people come over time (no death and birth, except for deaths in wars or accidents)
- Workers, soldiers, ... do not need single items, but there must be a production available that creates tools (e.g. a factory that produces tools for up to 10 miners)
