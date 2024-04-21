// JavaScript
console.log(Vue);

const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        { text: "Recruiting blog post", done: true },
        { text: "Mobile app launch", done: true },
        { text: "Interview John H.", done: true },
        { text: "Summit update to mobile storefronts", done: false },
      ],
      newTodoText: "",
    };
  },
  methods: {
    // Funzione per aggiungere nuovo todo
    addTodo() {
      // Controllo che il campo di testo non sia vuoto
      if (this.newTodoText !== "") {
        // Pusho il nuovo testo nella lista
        this.todos.push({ text: this.newTodoText, done: false });
        // Ripulisco l'area di testo
        this.newTodoText = "";
      }
    },
    // Funzione per invertire true e false
    toggleTodo(index) {
      // Verifica se è true o false
      if (this.todos[index].done) {
        // Se è true, metti su false
        this.todos[index].done = false;
      } else {
        // Altrimenti metti su true
        this.todos[index].done = true;
      }
    },
    // Funzione per rimuovere un todo dalla lista
    removeTodo(index) {
      // Utilizza il metodo splice per rimuovere il todo dall'array dei todos
      this.todos.splice(index, 1);
    },
  },
}).mount("#app");
