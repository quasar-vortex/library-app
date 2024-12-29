import "./style.css";
import { loadBooks } from "./books.js";

const container = document.querySelector("#app");

loadBooks(container);
