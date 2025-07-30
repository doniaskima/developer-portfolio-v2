<template>
  <main class="flex flex-col flex-auto lg:flex-row overflow-hidden">

  </main>
</template>

<script setup>
import { ref } from "vue";

const config = useRuntimeConfig();

const techs = [
  "React",
  "HTML",
  "CSS",
  "Vue",
  "Angular",
  "Gatsby",
  "Flutter",
  "Nestjs",
  "Spring-boot",
  "Typescript",
  "RabbitMq",
  "C Sharp",
  "ASPX",
  "Microsoft SQL Server",
];
const filters = ref(["all"]);
const showFilters = ref(true);
const projects = ref(config.public.dev.projects);

function filterProjects(tech) {
  document.getElementById("icon-tech-" + tech).classList.toggle("active");
  document.getElementById("title-tech-" + tech).classList.toggle("active");

  const check = document.getElementById(tech);
  if (check.checked) {
    filters.value = filters.value.filter((item) => item !== "all");
    filters.value.push(tech);
  } else {
    filters.value = filters.value.filter((item) => item !== tech);
    filters.value.length === 0 ? filters.value.push("all") : null;
  }
  filters.value[0] == "all"
    ? (projects.value = config.public.dev.projects)
    : (projects.value = filterProjectsBy(filters.value));

  if (projects.value.length === 0) {
    document.getElementById("projects-case").classList.remove("grid");
    document.getElementById("not-found").classList.remove("hidden");
  } else {
    document.getElementById("projects-case").classList.add("grid");
    document.getElementById("not-found").classList.add("hidden");
  }
}

function filterProjectsBy(filters) {
  const projectArray = Object.values(config.public.dev.projects);
  return projectArray.filter((project) => {
    return filters.some((filter) => project.tech.includes(filter));
  });
}
</script>

<style>
#filters {
  padding: 10px 25px;
}

#tab {
  padding: 25px 25px 5px;
  flex-wrap: wrap;
}

.tech-icon {
  opacity: 0.4;
}

.tech-icon.active {
  opacity: 1;
}

#title-tech.active {
  color: white;
}

#view-button {
  background-color: #1c2b3a;
}

#view-button:hover {
  background-color: #263b50;
}

#view-details {
  background-color: #1c2b3a;
}

#view-details:hover {
  background-color: #263b50;
}

input[type="checkbox"] {
  appearance: none;
  background-color: transparent;
  width: 1.15em;
  height: 1.15em;
  border: 2px solid currentColor;
  border-radius: 0.15em;
  margin-top: 1px;
}

input[type="checkbox"]:checked {
  background-color: currentColor;
  background-image: url("data:image/svg+xml;utf8,<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.38587 7.2802L11.9718 0.693573L12.9856 1.70668L5.38587 9.30641L0.826172 4.74671L1.83928 3.73361L5.38587 7.2802Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
}

input[type="checkbox"]:checked:hover {
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:not(:checked) {
  border-color: currentColor;
}

input[type="checkbox"]:hover {
  cursor: pointer;
  background-color: currentColor;
  background-image: url("data:image/svg+xml;utf8,<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.38587 7.2802L11.9718 0.693573L12.9856 1.70668L5.38587 9.30641L0.826172 4.74671L1.83928 3.73361L5.38587 7.2802Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:hover:not(:checked) {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  background-image: none;
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:focus {
  box-shadow: none;
}

@media (max-width: 768px) {
  #projects-case {
    padding: 0px 25px 40px;
  }
}

@media (min-width: 768px) {
  #projects-case {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 50px 50px 40px;
  }
}

@media (min-width: 1350px) {
  #projects-case {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 50px 80px 40px;
    /* padding: 100px 100px 40px; */
  }
}

@keyframes animateToBottom {
  from {
    transform: translate3d(0, -200px, 0);
  }
  to {
    transform: translate3d(0, 10px, 0);
  }
}
</style>
