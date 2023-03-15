import Proj1 from "../assets/polmed.png";
import Proj2 from "../assets/aquasharp.png";
import Proj3 from "../assets/warehouse.png";


const ProjectList = [
    {
        name: "Polmed",
        image: Proj1,
        skills: "React, SASS, Typescript",
        description: "Website created for the benefit of the project from the subject in the studies. Its task is to simulate the process of appointment with a doctor reservation",
        link: "https://github.com/SzczepanWikar/polmed-credit-project"
    },
    {
        name: "Aqua Sharp",
        image: Proj2,
        skills:  "React, Vitest, Sass, ASP .NET Core, Entity Framework Core, Xunit",
        description: "(in progress) Project carried out by me and other members of the .Net academic circle of the Cracow University of Technology. The project consists in designing and building an aquarium computer that monitors and controls water parameters, lighting as well as controlling the operation of individual devices. Operation is via phone/web application",
        link: "https://github.com/grupadotnet/Aqua-Sharp"
    },
    {
        name: "Warehouse",
        image: Proj3,
        skills:  "React, ASP .NET Core, EF Core",
        description: "(in progress) A web application whose task is to simulate the work of a warehouse in a factory. Using a convenient interface, the user can manage the database of products currently in stock.", 
        link: "https://github.com/Factory-warehouse/Factory"
    }
] 
export default ProjectList