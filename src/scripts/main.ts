// import moment from "moment";

// const date = document.querySelector(".date");
// if (date) {
//     date.innerHTML = moment().format("dddd, MMMM Do, YYYY");
// }


interface KTools {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
}


const toolsContainer: HTMLElement | null =
  document.querySelector(".tools-container");

  const toggleTheme = document.querySelector(".theme-toggle-and-dates button");
  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }

const getTools = async (): Promise<KTools> => {
  const response = await fetch("../../assets/data/tools.json");
  const tools = await response.json();
  return tools;
};

const renderTools = () : void => {
  getTools()
    .then((tools) => {
      const toolsArray = Object.values(tools);
      if (!toolsContainer)
        return;
      toolsContainer.innerHTML = "";
      let toolCard = "";
      toolsArray.forEach((tool) => {
        const { id, name, description, logo, website } = tool;
        toolCard += `<div class="tool">
          <div>
            <div class="img-container">
              <img src=${logo} alt=${name} target="_blank" class=${id} />
            </div>
            <h4 class="tool-name">${name}</h4>
          </div>
          <div class="tool-info">
            <p class="tool-description">${description}</p>
            <a href=${website} class="tool-website">${name}</a>
          </div>
        </div>`;
      });
      toolsContainer.innerHTML = toolCard;
    })
    .catch((error) => {
      console.log(error);
    });
};

renderTools()


