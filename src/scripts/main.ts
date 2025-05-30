import moment from "moment";
import "../../scss/style.scss";

const date = document.querySelector(".date");
const toolsContainer: HTMLElement | null =
document.querySelector(".tools-container");





interface KTools {
    id: string;
    name: string;
    description: string;
    logo: string;
    website: string;
}



// DATE FROM MOMENT
if (date) {
    date.innerHTML = moment().format("dddd, MMMM Do, YYYY");
}


  const toggleTheme = document.querySelector(".theme-toggle-and-dates button");
  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }


  const jsonUrl: string = "../../assets/data/tools.json"
const getTools = async (url: string = jsonUrl): Promise<KTools> => {
  const response = await fetch(url);
  const tools = await response.json();
  return tools;
};

const renderTools = async () : Promise<void> => {
  try {
    const tools = await getTools();
    const toolsArray = Object.values(tools);
    if (!toolsContainer)
      return;
    toolsContainer.innerHTML = "";
    let toolCard = "";
    toolsArray.forEach((tool) => {
      const {  name, description, website } = tool;
      toolCard += `<div class="tool">
        <div>
          <div class="img-container">
          </div>
          <h4 class="tool-name">${name}</h4>
        </div>
        <div class="tool-info">
          <p class="tool-description">${description}</p>
          <a href=${website} target="_blank" class="tool-website">${name}</a>
        </div>
      </div>`;
    });
    toolsContainer.innerHTML = toolCard;
  } catch (error) {
    console.log(error);
  }
};

renderTools();


export { renderTools, getTools };