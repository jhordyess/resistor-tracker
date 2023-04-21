# Resistor tracker

React-based web app that lets you inventory your resistors by reading their color codes. I thought that this project is my alternative to the classic to-do app 🥱.

## Description

To add resistors, click the "+" button in the title, and a modal with the form will appear. From there, select the 1st Digit, 2nd Digit, Multiplier, Tolerance and Power Rating, and fill the quantity field.

In the list view, you can adjust the quantity of resistors by using the "+/-" buttons. *If the quantity is 0, the resistor will be removed*.

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
- Bundler: [Webpack](https://webpack.js.org/)
- Hosting: [GitHub Pages](https://pages.github.com/)
- Dev Environment: [VSCode](https://code.visualstudio.com/) with [dev containers](https://code.visualstudio.com/docs/remote/containers) in [Zorin OS](https://zorinos.com/)

### Online

Visit the project at: <https://res.jhordyess.com>

### Screenshots

![Home](https://res.cloudinary.com/jhordyess/image/upload/v1682096760/resistor-color-code/resistor-tracker-home.png)
![Form](https://res.cloudinary.com/jhordyess/image/upload/v1682096760/resistor-color-code/resistor-tracker-form.png)

### Evolution from another project

This project is the result of my mini project with JS [resistor-color-code](https://github.com/jhordyess/resistor-color-code), It's a resistor value calculator for 4 bands of color that helped me to develop this project.

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
