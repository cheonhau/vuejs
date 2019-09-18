<template>
    <router-link tag="section" to='/addcity' class="weather__card">
        <div class="add_section__button">
            <button  class="button__add">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
            </button>
        </div>
        <div class="add_section__text">
            Add city
        </div>
    </router-link>
</template>

<style scope>
.add_section__button {
  margin-top: 100px;
}
.button__add {
  height: 100px;
  width: 100px;
  border: 3px solid transparent;
  border-radius: 50%;
  background-color: transparent;
  color: var(--dark-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transition: transform 300ms ease-out, border-color 300ms ease-out;
}
.button__add svg {
  height: 100%;
  width: 100%;
  fill: var(--accent-color);
  transition: fill 300ms ease-out;
}
</style>