# Resistor tracker

React-based web app that lets you inventory your resistors by reading their color codes. I thought that this project is my alternative to the classic to-do app 🥱.

## Description

To add resistors, click the "+" button in the title, and a modal with the form will appear. From there, select the 1st Digit, 2nd Digit, Multiplier, Tolerance and Power Rating, and fill the quantity field.

In the list view, you can adjust the quantity of resistors by using the "+/-" buttons. _If the quantity is 0, the resistor will be removed_.

You can search for resistors based on the values, and the list of resistors will be updated to show only the ones that match.

### Notes about E Series values

As a bonus, when you try to add a non-standard value from the E Series in the New Resistor Form, a message will suggest the nearest values according to the tolerance and accepted values of the E Series.

Please note that the E3, E48, E96, and E192 Series are not supported, only the E6, E12, and E24 Series.

### Useful links

For a theoretical review, I may suggest:

- <https://eepower.com/resistor-guide/resistor-standards-and-codes>
- <https://en.wikipedia.org/wiki/E_series_of_preferred_numbers>

### Technologies Used

- JS Libraries: [ReactJS](https://reactjs.org/)
- Programming Language: [TypeScript](https://www.typescriptlang.org/)
- CSS Libraries: [TailwindCSS](https://tailwindcss.com/)
- Build Tool: [Vite](https://vitejs.dev/)
- Hosting: [GitHub Pages](https://pages.github.com/)
- Dev Environment: [VSCode](https://code.visualstudio.com/) with [dev containers](https://code.visualstudio.com/docs/remote/containers) in [Zorin OS](https://zorinos.com/)

### Demo

You can see the demo here: <https://res.jhordyess.com>

### Screenshots

![Home](https://res.cloudinary.com/jhordyess/image/upload/v1682096760/resistor-color-code/resistor-tracker-home.png)
![Form](https://res.cloudinary.com/jhordyess/image/upload/v1682096760/resistor-color-code/resistor-tracker-form.png)

### Evolution from another project

This project is the result of my mini project with JS [resistor-color-code](https://github.com/jhordyess/resistor-color-code), It's a resistor value calculator for 4 bands of color that helped me to develop this project.

## How to use

1. Clone the repository:

```bash
git clone git@github.com:jhordyess/resistor-tracker.git
```

2. Open the project folder:

```bash
cd resistor-tracker
```

3. Install the dependencies:

```bash
yarn
```

4. Run the project:

```bash
yarn dev
```

5. Open the browser at <http://localhost:5173/resistor-tracker/>

## How to use with VSCode dev containers

You can use the VSCode dev containers to run the project in a containerized environment.

You need to have installed [Docker](https://www.docker.com/) and [VSCode](https://code.visualstudio.com/), and the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.

1. Clone the repository:

```bash
git clone git@github.com:jhordyess/resistor-tracker.git
```

2. Open the project with VSCode:

```bash
code resistor-tracker
```

3. Open the command palette and select the option `Dev Containers: Reopen in Container`.

4. Wait for the container to be built and the project to be started.

5. Open the terminal in VSCode and run the project:

```bash
yarn dev
```

6. Open the browser at <http://localhost:5173/resistor-tracker/>

## To-Do

- Add snackbar messages
- Add support for 5 bands or more 🤔
- Improve relative resistor size with powerRating

## Contribution

If you would like to contribute to the project, open an issue or make a pull request on the repository.

## License

© 2023> [Jhordyess](https://github.com/jhordyess). Under the [MIT](https://choosealicense.com/licenses/mit/) license. See the [LICENSE](./LICENSE) file for more details.

---

Made with 💪 by [Jhordyess](https://www.jhordyess.com/)
